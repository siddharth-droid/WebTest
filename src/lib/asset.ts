/** Prefixes a /public path with the deploy base path (e.g. "/WebTest" on GitHub Pages). */
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;
