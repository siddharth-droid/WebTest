"""
Turn the rendered PNG frames into the web sequence: a soft lens glare around
anything brighter than the sky (the Sun, ocean glints), then WebP at two widths.

    python3 scripts/landing/encode.py RENDER_DIR public/landing
"""

import json
import sys
from pathlib import Path

from PIL import Image, ImageChops, ImageFilter

SIZES = {1600: 72, 960: 68}

src, dst = Path(sys.argv[1]), Path(sys.argv[2])
frames = sorted(src.glob('f_*.png'))
black = None

for png in frames:
    im = Image.open(png).convert('RGB')
    w = im.width
    if black is None:
        black = Image.new('RGB', im.size)
    # Only near-white highlights bloom
    mask = im.convert('L').point(lambda v: 0 if v < 238 else min(255, (v - 238) * 15))
    bright = Image.composite(im, black, mask)
    near = bright.filter(ImageFilter.GaussianBlur(w * 0.004))
    wide = bright.filter(ImageFilter.GaussianBlur(w * 0.025))
    glare = ImageChops.add(near.point(lambda v: v * 0.7), wide.point(lambda v: v * 0.55))
    out = ImageChops.screen(im, glare)
    for size, quality in SIZES.items():
        d = dst / str(size)
        d.mkdir(parents=True, exist_ok=True)
        frame = out if size == w else out.resize((size, round(size * im.height / w)), Image.LANCZOS)
        frame.save(d / (png.stem + '.webp'), 'WEBP', quality=quality, method=6)
    print(png.stem, end=' ', flush=True)

track = json.load(open(src / 'track.json'))
json.dump(track, open(dst / 'track.json', 'w'), separators=(',', ':'))
print('\n%d frames' % len(frames))
