"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[261],{99:(e,t,r)=>{let n,i,a,o,s;r.d(t,{B:()=>M,C:()=>et,D:()=>er,E:()=>D,G:()=>ea,a:()=>w,b:()=>I,c:()=>eR,d:()=>eB,e:()=>eu,f:()=>ej,i:()=>b,o:()=>eI,s:()=>X,u:()=>x});var l=r(2115),c=r.t(l,2),u=r(8870),d=r(7548),h=r(8828),m=r(490);let{useSyncExternalStoreWithSelector:f}=h,p=(e,t)=>{let r=(0,m.y)(e),n=(e,n=t)=>(function(e,t=e=>e,r){let n=f(e.subscribe,e.getState,e.getInitialState,t,r);return l.useDebugValue(n),n})(r,e,n);return Object.assign(n,r),n},g=(e,t)=>e?p(e,t):p,A=[];function _(e,t,r=(e,t)=>e===t){if(e===t)return!0;if(!e||!t)return!1;let n=e.length;if(t.length!==n)return!1;for(let i=0;i<n;i++)if(!r(e[i],t[i]))return!1;return!0}function v(e,t=null,r=!1,n={}){for(let i of(null===t&&(t=[e]),A))if(_(t,i.keys,i.equal)){if(r)return;if(Object.prototype.hasOwnProperty.call(i,"error"))throw i.error;if(Object.prototype.hasOwnProperty.call(i,"response"))return n.lifespan&&n.lifespan>0&&(i.timeout&&clearTimeout(i.timeout),i.timeout=setTimeout(i.remove,n.lifespan)),i.response;if(!r)throw i.promise}let i={keys:t,equal:n.equal,remove:()=>{let e=A.indexOf(i);-1!==e&&A.splice(e,1)},promise:("object"==typeof e&&"function"==typeof e.then?e:e(...t)).then(e=>{i.response=e,n.lifespan&&n.lifespan>0&&(i.timeout=setTimeout(i.remove,n.lifespan))}).catch(e=>i.error=e)};if(A.push(i),!r)throw i.promise}var E=r(8807),T=r.n(E),C=r(9914),y=r(5155),S=r(4735);function R(e){let t=e.root;for(;t.getState().previousRoot;)t=t.getState().previousRoot;return t}r(5704),c.act;let b=e=>e&&e.hasOwnProperty("current"),B=e=>null!=e&&("string"==typeof e||"number"==typeof e||e.isColor),I=((e,t)=>"undefined"!=typeof window&&((null==(e=window.document)?void 0:e.createElement)||(null==(t=window.navigator)?void 0:t.product)==="ReactNative"))()?l.useLayoutEffect:l.useEffect;function w(e){let t=l.useRef(e);return I(()=>void(t.current=e),[e]),t}function x(){let e=(0,S.u5)(),t=(0,S.y3)();return l.useMemo(()=>({children:r})=>{let n=(0,S.Nz)(e,!0,e=>e.type===l.StrictMode)?l.StrictMode:l.Fragment;return(0,y.jsx)(n,{children:(0,y.jsx)(t,{children:r})})},[e,t])}function M({set:e}){return I(()=>(e(new Promise(()=>null)),()=>e(!1)),[e]),null}let D=(e=>((e=class extends l.Component{constructor(...e){super(...e),this.state={error:!1}}componentDidCatch(e){this.props.set(e)}render(){return this.state.error?null:this.props.children}}).getDerivedStateFromError=()=>({error:!0}),e))();function O(e){var t;let r="undefined"!=typeof window?null!=(t=window.devicePixelRatio)?t:2:1;return Array.isArray(e)?Math.min(Math.max(e[0],r),e[1]):e}function N(e){var t;return null==(t=e.__r3f)?void 0:t.root.getState()}let L={obj:e=>e===Object(e)&&!L.arr(e)&&"function"!=typeof e,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,boo:e=>"boolean"==typeof e,und:e=>void 0===e,nul:e=>null===e,arr:e=>Array.isArray(e),equ(e,t,{arrays:r="shallow",objects:n="reference",strict:i=!0}={}){let a;if(typeof e!=typeof t||!!e!=!!t)return!1;if(L.str(e)||L.num(e)||L.boo(e))return e===t;let o=L.obj(e);if(o&&"reference"===n)return e===t;let s=L.arr(e);if(s&&"reference"===r)return e===t;if((s||o)&&e===t)return!0;for(a in e)if(!(a in t))return!1;if(o&&"shallow"===r&&"shallow"===n){for(a in i?t:e)if(!L.equ(e[a],t[a],{strict:i,objects:"reference"}))return!1}else for(a in i?t:e)if(e[a]!==t[a])return!1;if(L.und(a)){if(s&&0===e.length&&0===t.length||o&&0===Object.keys(e).length&&0===Object.keys(t).length)return!0;if(e!==t)return!1}return!0}},F=["children","key","ref"];function P(e,t,r,n){let i=null==e?void 0:e.__r3f;return!i&&(i={root:t,type:r,parent:null,children:[],props:function(e){let t={};for(let r in e)F.includes(r)||(t[r]=e[r]);return t}(n),object:e,eventCount:0,handlers:{},isHidden:!1},e&&(e.__r3f=i)),i}function G(e,t){let r=e[t];if(!t.includes("-"))return{root:e,key:t,target:r};for(let i of(r=e,t.split("-"))){var n;t=i,e=r,r=null==(n=r)?void 0:n[t]}return{root:e,key:t,target:r}}let H=/-\d+$/;function U(e,t){if(L.str(t.props.attach)){if(H.test(t.props.attach)){let r=t.props.attach.replace(H,""),{root:n,key:i}=G(e.object,r);Array.isArray(n[i])||(n[i]=[])}let{root:r,key:n}=G(e.object,t.props.attach);t.previousAttach=r[n],r[n]=t.object}else L.fun(t.props.attach)&&(t.previousAttach=t.props.attach(e.object,t.object))}function k(e,t){if(L.str(t.props.attach)){let{root:r,key:n}=G(e.object,t.props.attach),i=t.previousAttach;void 0===i?delete r[n]:r[n]=i}else null==t.previousAttach||t.previousAttach(e.object,t.object);delete t.previousAttach}let j=[...F,"args","dispose","attach","object","onUpdate","dispose"],J=new Map,z=["map","emissiveMap","sheenColorMap","specularColorMap","envMap"],K=/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;function X(e,t){var r,n;let i=e.__r3f,a=i&&R(i).getState(),o=null==i?void 0:i.eventCount;for(let r in t){let o=t[r];if(j.includes(r))continue;if(i&&K.test(r)){"function"==typeof o?i.handlers[r]=o:delete i.handlers[r],i.eventCount=Object.keys(i.handlers).length;continue}if(void 0===o)continue;let{root:s,key:l,target:c}=G(e,r);c instanceof d.Layers&&o instanceof d.Layers?c.mask=o.mask:c instanceof d.Color&&B(o)?c.set(o):null!==c&&"object"==typeof c&&"function"==typeof c.set&&"function"==typeof c.copy&&null!=o&&o.constructor&&c.constructor===o.constructor?c.copy(o):null!==c&&"object"==typeof c&&"function"==typeof c.set&&Array.isArray(o)?"function"==typeof c.fromArray?c.fromArray(o):c.set(...o):null!==c&&"object"==typeof c&&"function"==typeof c.set&&"number"==typeof o?"function"==typeof c.setScalar?c.setScalar(o):c.set(o):(s[l]=o,a&&!a.linear&&z.includes(l)&&null!=(n=s[l])&&n.isTexture&&s[l].format===d.RGBAFormat&&s[l].type===d.UnsignedByteType&&(s[l].colorSpace=d.SRGBColorSpace))}if(null!=i&&i.parent&&null!=a&&a.internal&&null!=(r=i.object)&&r.isObject3D&&o!==i.eventCount){let e=i.object,t=a.internal.interaction.indexOf(e);t>-1&&a.internal.interaction.splice(t,1),i.eventCount&&null!==e.raycast&&a.internal.interaction.push(e)}return i&&void 0===i.props.attach&&(i.object.isBufferGeometry?i.props.attach="geometry":i.object.isMaterial&&(i.props.attach="material")),i&&W(i),e}function W(e){var t;if(!e.parent)return;null==e.props.onUpdate||e.props.onUpdate(e.object);let r=null==(t=e.root)||null==t.getState?void 0:t.getState();r&&0===r.internal.frames&&r.invalidate()}function Y(e,t){!e.manual&&(e&&e.isOrthographicCamera?(e.left=-(t.width/2),e.right=t.width/2,e.top=t.height/2,e.bottom=-(t.height/2)):e.aspect=t.width/t.height,e.updateProjectionMatrix())}let V=e=>null==e?void 0:e.isObject3D;function Q(e){return(e.eventObject||e.object).uuid+"/"+e.index+e.instanceId}function Z(e,t,r,n){let i=r.get(t);i&&(r.delete(t),0===r.size&&(e.delete(n),i.target.releasePointerCapture(n)))}let q=e=>!!(null!=e&&e.render),$=l.createContext(null);function ee(){let e=l.useContext($);if(!e)throw Error("R3F: Hooks can only be used within the Canvas component!");return e}function et(e=e=>e,t){return ee()(e,t)}function er(e,t=0){let r=ee(),n=r.getState().internal.subscribe,i=w(e);return I(()=>n(i,t,r),[t,n,r]),null}let en=new WeakMap;function ei(e,t){return function(r,...n){var i;let a;return"function"==typeof r&&(null==r||null==(i=r.prototype)?void 0:i.constructor)===r?(a=en.get(r))||(a=new r,en.set(r,a)):a=r,e&&e(a),Promise.all(n.map(e=>new Promise((r,n)=>a.load(e,e=>{V(null==e?void 0:e.scene)&&Object.assign(e,function(e){let t={nodes:{},materials:{},meshes:{}};return e&&e.traverse(e=>{e.name&&(t.nodes[e.name]=e),e.material&&!t.materials[e.material.name]&&(t.materials[e.material.name]=e.material),e.isMesh&&!t.meshes[e.name]&&(t.meshes[e.name]=e)}),t}(e.scene)),r(e)},t,t=>n(Error(`Could not load ${e}: ${null==t?void 0:t.message}`))))))}}function ea(e,t,r,n){let i=Array.isArray(t)?t:[t],a=v(ei(r,n),[e,...i],!1,{equal:L.equ});return Array.isArray(t)?a:a[0]}ea.preload=function(e,t,r){let n,i=Array.isArray(t)?t:[t];v(ei(r),[e,...i],!0,n)},ea.clear=function(e,t){var r=[e,...Array.isArray(t)?t:[t]];if(void 0===r||0===r.length)A.splice(0,A.length);else{let e=A.find(e=>_(r,e.keys,e.equal));e&&e.remove()}};let eo={},es=/^three(?=[A-Z])/,el=e=>`${e[0].toUpperCase()}${e.slice(1)}`,ec=0;function eu(e){if("function"==typeof e){let t=`${ec++}`;return eo[t]=e,t}Object.assign(eo,e)}function ed(e,t){let r=el(e),n=eo[r];if("primitive"!==e&&!n)throw Error(`R3F: ${r} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if("primitive"===e&&!t.object)throw Error("R3F: Primitives without 'object' are invalid!");if(void 0!==t.args&&!Array.isArray(t.args))throw Error("R3F: The args prop must be an array!")}function eh(e){if(e.isHidden){var t;e.props.attach&&null!=(t=e.parent)&&t.object?U(e.parent,e):V(e.object)&&!1!==e.props.visible&&(e.object.visible=!0),e.isHidden=!1,W(e)}}function em(e,t,r){let n=t.root.getState();if(e.parent||e.object===n.scene){if(!t.object){var i,a;let e=eo[el(t.type)];t.object=null!=(i=t.props.object)?i:new e(...null!=(a=t.props.args)?a:[]),t.object.__r3f=t}if(X(t.object,t.props),t.props.attach)U(e,t);else if(V(t.object)&&V(e.object)){let n=e.object.children.indexOf(null==r?void 0:r.object);if(r&&-1!==n){let r=e.object.children.indexOf(t.object);-1!==r?(e.object.children.splice(r,1),e.object.children.splice(r<n?n-1:n,0,t.object)):(t.object.parent=e.object,e.object.children.splice(n,0,t.object),t.object.dispatchEvent({type:"added"}),e.object.dispatchEvent({type:"childadded",child:t.object}))}else e.object.add(t.object)}for(let e of t.children)em(t,e);W(t)}}function ef(e,t){t&&(t.parent=e,e.children.push(t),em(e,t))}function ep(e,t,r){if(!t||!r)return;t.parent=e;let n=e.children.indexOf(r);-1!==n?e.children.splice(n,0,t):e.children.push(t),em(e,t,r)}function eg(e){if("function"==typeof e.dispose){let t=()=>{try{e.dispose()}catch{}};"undefined"!=typeof IS_REACT_ACT_ENVIRONMENT?t():(0,C.unstable_scheduleCallback)(C.unstable_IdlePriority,t)}}function eA(e,t,r){if(!t)return;t.parent=null;let n=e.children.indexOf(t);-1!==n&&e.children.splice(n,1),t.props.attach?k(e,t):V(t.object)&&V(e.object)&&(e.object.remove(t.object),function(e,t){let{internal:r}=e.getState();r.interaction=r.interaction.filter(e=>e!==t),r.initialHits=r.initialHits.filter(e=>e!==t),r.hovered.forEach((e,n)=>{(e.eventObject===t||e.object===t)&&r.hovered.delete(n)}),r.capturedMap.forEach((e,n)=>{Z(r.capturedMap,t,e,n)})}(R(t),t.object));let i=null!==t.props.dispose&&!1!==r;for(let e=t.children.length-1;e>=0;e--){let r=t.children[e];eA(t,r,i)}t.children.length=0,delete t.object.__r3f,i&&"primitive"!==t.type&&"Scene"!==t.object.type&&eg(t.object),void 0===r&&W(t)}let e_=[],ev=()=>{},eE={},eT=0,eC=function(e){let t=T()(e);return t.injectIntoDevTools({bundleType:0,rendererPackageName:"@react-three/fiber",version:l.version}),t}({isPrimaryRenderer:!1,warnsIfNotActing:!1,supportsMutation:!0,supportsPersistence:!1,supportsHydration:!1,createInstance:function(e,t,r){var n;return ed(e=el(e)in eo?e:e.replace(es,""),t),"primitive"===e&&null!=(n=t.object)&&n.__r3f&&delete t.object.__r3f,P(t.object,r,e,t)},removeChild:eA,appendChild:ef,appendInitialChild:ef,insertBefore:ep,appendChildToContainer(e,t){let r=e.getState().scene.__r3f;t&&r&&ef(r,t)},removeChildFromContainer(e,t){let r=e.getState().scene.__r3f;t&&r&&eA(r,t)},insertInContainerBefore(e,t,r){let n=e.getState().scene.__r3f;t&&r&&n&&ep(n,t,r)},getRootHostContext:()=>eE,getChildHostContext:()=>eE,commitUpdate(e,t,r,n,i){var a,o,s;ed(t,n);let l=!1;if("primitive"===e.type&&r.object!==n.object||(null==(a=n.args)?void 0:a.length)!==(null==(o=r.args)?void 0:o.length)?l=!0:null!=(s=n.args)&&s.some((e,t)=>{var n;return e!==(null==(n=r.args)?void 0:n[t])})&&(l=!0),l)e_.push([e,{...n},i]);else{let t=function(e,t){let r={};for(let n in t)if(!j.includes(n)&&!L.equ(t[n],e.props[n]))for(let e in r[n]=t[n],t)e.startsWith(`${n}-`)&&(r[e]=t[e]);for(let n in e.props){if(j.includes(n)||t.hasOwnProperty(n))continue;let{root:i,key:a}=G(e.object,n);if(i.constructor&&0===i.constructor.length){let e=function(e){let t=J.get(e.constructor);try{t||(t=new e.constructor,J.set(e.constructor,t))}catch(e){}return t}(i);L.und(e)||(r[a]=e[a])}else r[a]=0}return r}(e,n);Object.keys(t).length&&(Object.assign(e.props,t),X(e.object,t))}(null===i.sibling||(4&i.flags)==0)&&function(){for(let[e]of e_){let t=e.parent;if(t)for(let r of(e.props.attach?k(t,e):V(e.object)&&V(t.object)&&t.object.remove(e.object),e.children))r.props.attach?k(e,r):V(r.object)&&V(e.object)&&e.object.remove(r.object);e.isHidden&&eh(e),e.object.__r3f&&delete e.object.__r3f,"primitive"!==e.type&&eg(e.object)}for(let[n,i,a]of e_){n.props=i;let o=n.parent;if(o){let i=eo[el(n.type)];n.object=null!=(e=n.props.object)?e:new i(...null!=(t=n.props.args)?t:[]),n.object.__r3f=n;var e,t,r=n.object;for(let e of[a,a.alternate])if(null!==e)if("function"==typeof e.ref){null==e.refCleanup||e.refCleanup();let t=e.ref(r);"function"==typeof t&&(e.refCleanup=t)}else e.ref&&(e.ref.current=r);for(let e of(X(n.object,n.props),n.props.attach?U(o,n):V(n.object)&&V(o.object)&&o.object.add(n.object),n.children))e.props.attach?U(n,e):V(e.object)&&V(n.object)&&n.object.add(e.object);W(n)}}e_.length=0}()},finalizeInitialChildren:()=>!1,commitMount(){},getPublicInstance:e=>null==e?void 0:e.object,prepareForCommit:()=>null,preparePortalMount:e=>P(e.getState().scene,e,"",{}),resetAfterCommit:()=>{},shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance:function(e){if(!e.isHidden){var t;e.props.attach&&null!=(t=e.parent)&&t.object?k(e.parent,e):V(e.object)&&(e.object.visible=!1),e.isHidden=!0,W(e)}},unhideInstance:eh,createTextInstance:ev,hideTextInstance:ev,unhideTextInstance:ev,scheduleTimeout:"function"==typeof setTimeout?setTimeout:void 0,cancelTimeout:"function"==typeof clearTimeout?clearTimeout:void 0,noTimeout:-1,getInstanceFromNode:()=>null,beforeActiveInstanceBlur(){},afterActiveInstanceBlur(){},detachDeletedInstance(){},prepareScopeUpdate(){},getInstanceFromScope:()=>null,shouldAttemptEagerTransition:()=>!1,trackSchedulerEvent:()=>{},resolveEventType:()=>null,resolveEventTimeStamp:()=>-1.1,requestPostPaintCallback(){},maySuspendCommit:()=>!1,preloadInstance:()=>!0,startSuspendingCommit(){},suspendInstance(){},waitForCommitToBeReady:()=>null,NotPendingTransition:null,HostTransitionContext:l.createContext(null),setCurrentUpdatePriority(e){eT=e},getCurrentUpdatePriority:()=>eT,resolveUpdatePriority(){var e;if(0!==eT)return eT;switch("undefined"!=typeof window&&(null==(e=window.event)?void 0:e.type)){case"click":case"contextmenu":case"dblclick":case"pointercancel":case"pointerdown":case"pointerup":return u.DiscreteEventPriority;case"pointermove":case"pointerout":case"pointerover":case"pointerenter":case"pointerleave":case"wheel":return u.ContinuousEventPriority;default:return u.DefaultEventPriority}},resetFormInstance(){}}),ey=new Map,eS={objects:"shallow",strict:!1};function eR(e){let t,r,n=ey.get(e),i=null==n?void 0:n.fiber,a=null==n?void 0:n.store;n&&console.warn("R3F.createRoot should only be called once!");let o="function"==typeof reportError?reportError:console.error,s=a||((e,t)=>{let r=g((r,n)=>{let i,a=new d.Vector3,o=new d.Vector3,s=new d.Vector3;function c(e=n().camera,t=o,r=n().size){let{width:i,height:l,top:u,left:d}=r,h=i/l;t.isVector3?s.copy(t):s.set(...t);let m=e.getWorldPosition(a).distanceTo(s);if(e&&e.isOrthographicCamera)return{width:i/e.zoom,height:l/e.zoom,top:u,left:d,factor:1,distance:m,aspect:h};{let t=2*Math.tan(e.fov*Math.PI/180/2)*m,r=i/l*t;return{width:r,height:t,top:u,left:d,factor:i/r,distance:m,aspect:h}}}let u=e=>r(t=>({performance:{...t.performance,current:e}})),h=new d.Vector2;return{set:r,get:n,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},scene:null,xr:null,invalidate:(t=1)=>e(n(),t),advance:(e,r)=>t(e,r,n()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new d.Clock,pointer:h,mouse:h,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{let e=n();i&&clearTimeout(i),e.performance.current!==e.performance.min&&u(e.performance.min),i=setTimeout(()=>u(n().performance.max),e.performance.debounce)}},size:{width:0,height:0,top:0,left:0},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:c},setEvents:e=>r(t=>({...t,events:{...t.events,...e}})),setSize:(e,t,i=0,a=0)=>{let s=n().camera,l={width:e,height:t,top:i,left:a};r(e=>({size:l,viewport:{...e.viewport,...c(s,o,l)}}))},setDpr:e=>r(t=>{let r=O(e);return{viewport:{...t.viewport,dpr:r,initialDpr:t.viewport.initialDpr||r}}}),setFrameloop:(e="always")=>{let t=n().clock;t.stop(),t.elapsedTime=0,"never"!==e&&(t.start(),t.elapsedTime=0),r(()=>({frameloop:e}))},previousRoot:void 0,internal:{interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,lastEvent:l.createRef(),active:!1,frames:0,priority:0,subscribe:(e,t,r)=>{let i=n().internal;return i.priority=i.priority+ +(t>0),i.subscribers.push({ref:e,priority:t,store:r}),i.subscribers=i.subscribers.sort((e,t)=>e.priority-t.priority),()=>{let r=n().internal;null!=r&&r.subscribers&&(r.priority=r.priority-(t>0),r.subscribers=r.subscribers.filter(t=>t.ref!==e))}}}}}),n=r.getState(),i=n.size,a=n.viewport.dpr,o=n.camera;return r.subscribe(()=>{let{camera:e,size:t,viewport:n,gl:s,set:l}=r.getState();if(t.width!==i.width||t.height!==i.height||n.dpr!==a){i=t,a=n.dpr,Y(e,t),n.dpr>0&&s.setPixelRatio(n.dpr);let r="undefined"!=typeof HTMLCanvasElement&&s.domElement instanceof HTMLCanvasElement;s.setSize(t.width,t.height,r)}e!==o&&(o=e,l(t=>({viewport:{...t.viewport,...t.viewport.getCurrentViewport(e)}})))}),r.subscribe(t=>e(t)),r})(eH,eU),c=i||eC.createContainer(s,u.ConcurrentRoot,null,!1,null,"",o,o,o,null);n||ey.set(e,{fiber:c,store:s});let h=!1,m=null;return{async configure(n={}){var i,a;let o;m=new Promise(e=>o=e);let{gl:l,size:c,scene:u,events:f,onCreated:p,shadows:g=!1,linear:A=!1,flat:_=!1,legacy:v=!1,orthographic:E=!1,frameloop:T="always",dpr:C=[1,2],performance:y,raycaster:S,camera:R,onPointerMissed:b}=n,B=s.getState(),I=B.gl;if(!B.gl){let t={canvas:e,powerPreference:"high-performance",antialias:!0,alpha:!0},r="function"==typeof l?await l(t):l;I=q(r)?r:new d.WebGLRenderer({...t,...l}),B.set({gl:I})}let w=B.raycaster;w||B.set({raycaster:w=new d.Raycaster});let{params:x,...M}=S||{};if(L.equ(M,w,eS)||X(w,{...M}),L.equ(x,w.params,eS)||X(w,{params:{...w.params,...x}}),!B.camera||B.camera===r&&!L.equ(r,R,eS)){r=R;let e=null==R?void 0:R.isCamera,t=e?R:E?new d.OrthographicCamera(0,0,0,0,.1,1e3):new d.PerspectiveCamera(75,0,.1,1e3);!e&&(t.position.z=5,R&&(X(t,R),!t.manual&&("aspect"in R||"left"in R||"right"in R||"bottom"in R||"top"in R)&&(t.manual=!0,t.updateProjectionMatrix())),B.camera||null!=R&&R.rotation||t.lookAt(0,0,0)),B.set({camera:t}),w.camera=t}if(!B.scene){let e;null!=u&&u.isScene?P(e=u,s,"",{}):(P(e=new d.Scene,s,"",{}),u&&X(e,u)),B.set({scene:e})}f&&!B.events.handlers&&B.set({events:f(s)});let D=function(e,t){if(!t&&"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement&&e.parentElement){let{width:t,height:r,top:n,left:i}=e.parentElement.getBoundingClientRect();return{width:t,height:r,top:n,left:i}}return!t&&"undefined"!=typeof OffscreenCanvas&&e instanceof OffscreenCanvas?{width:e.width,height:e.height,top:0,left:0}:{width:0,height:0,top:0,left:0,...t}}(e,c);if(L.equ(D,B.size,eS)||B.setSize(D.width,D.height,D.top,D.left),C&&B.viewport.dpr!==O(C)&&B.setDpr(C),B.frameloop!==T&&B.setFrameloop(T),B.onPointerMissed||B.set({onPointerMissed:b}),y&&!L.equ(y,B.performance,eS)&&B.set(e=>({performance:{...e.performance,...y}})),!B.xr){let e=(e,t)=>{let r=s.getState();"never"!==r.frameloop&&eU(e,!0,r,t)},t=()=>{let t=s.getState();t.gl.xr.enabled=t.gl.xr.isPresenting,t.gl.xr.setAnimationLoop(t.gl.xr.isPresenting?e:null),t.gl.xr.isPresenting||eH(t)},r={connect(){let e=s.getState().gl;e.xr.addEventListener("sessionstart",t),e.xr.addEventListener("sessionend",t)},disconnect(){let e=s.getState().gl;e.xr.removeEventListener("sessionstart",t),e.xr.removeEventListener("sessionend",t)}};"function"==typeof(null==(i=I.xr)?void 0:i.addEventListener)&&r.connect(),B.set({xr:r})}if(I.shadowMap){let e=I.shadowMap.enabled,t=I.shadowMap.type;if(I.shadowMap.enabled=!!g,L.boo(g))I.shadowMap.type=d.PCFSoftShadowMap;else if(L.str(g)){let e={basic:d.BasicShadowMap,percentage:d.PCFShadowMap,soft:d.PCFSoftShadowMap,variance:d.VSMShadowMap};I.shadowMap.type=null!=(a=e[g])?a:d.PCFSoftShadowMap}else L.obj(g)&&Object.assign(I.shadowMap,g);(e!==I.shadowMap.enabled||t!==I.shadowMap.type)&&(I.shadowMap.needsUpdate=!0)}return d.ColorManagement.enabled=!v,h||(I.outputColorSpace=A?d.LinearSRGBColorSpace:d.SRGBColorSpace,I.toneMapping=_?d.NoToneMapping:d.ACESFilmicToneMapping),B.legacy!==v&&B.set(()=>({legacy:v})),B.linear!==A&&B.set(()=>({linear:A})),B.flat!==_&&B.set(()=>({flat:_})),!l||L.fun(l)||q(l)||L.equ(l,I,eS)||X(I,l),t=p,h=!0,o(),this},render(r){return h||m||this.configure(),m.then(()=>{eC.updateContainer((0,y.jsx)(eb,{store:s,children:r,onCreated:t,rootElement:e}),c,null,()=>void 0)}),s},unmount(){eB(e)}}}function eb({store:e,children:t,onCreated:r,rootElement:n}){return I(()=>{let t=e.getState();t.set(e=>({internal:{...e.internal,active:!0}})),r&&r(t),e.getState().events.connected||null==t.events.connect||t.events.connect(n)},[]),(0,y.jsx)($.Provider,{value:e,children:t})}function eB(e,t){let r=ey.get(e),n=null==r?void 0:r.fiber;if(n){let i=null==r?void 0:r.store.getState();i&&(i.internal.active=!1),eC.updateContainer(null,n,null,()=>{i&&setTimeout(()=>{try{null==i.events.disconnect||i.events.disconnect(),null==(r=i.gl)||null==(n=r.renderLists)||null==n.dispose||n.dispose(),null==(a=i.gl)||null==a.forceContextLoss||a.forceContextLoss(),null!=(o=i.gl)&&o.xr&&i.xr.disconnect();var r,n,a,o,s=i.scene;for(let e in"Scene"!==s.type&&(null==s.dispose||s.dispose()),s){let t=s[e];(null==t?void 0:t.type)!=="Scene"&&(null==t||null==t.dispose||t.dispose())}ey.delete(e),t&&t(e)}catch(e){}},500)})}}function eI(e,t,r){return(0,y.jsx)(ew,{children:e,container:t,state:r})}function ew({state:e={},children:t,container:r}){let{events:n,size:i,...a}=e,o=ee(),[s]=l.useState(()=>new d.Raycaster),[c]=l.useState(()=>new d.Vector2),u=w((e,t)=>{let a;if(t.camera&&i){let r=t.camera;a=e.viewport.getCurrentViewport(r,new d.Vector3,i),r!==e.camera&&Y(r,i)}return{...e,...t,scene:r,raycaster:s,pointer:c,mouse:c,previousRoot:o,events:{...e.events,...t.events,...n},size:{...e.size,...i},viewport:{...e.viewport,...a},setEvents:e=>t.set(t=>({...t,events:{...t.events,...e}}))}}),h=l.useMemo(()=>{let e=g((e,t)=>({...a,set:e,get:t})),t=t=>e.setState(e=>u.current(t,e));return t(o.getState()),o.subscribe(t),e},[o,r]);return(0,y.jsx)(y.Fragment,{children:eC.createPortal((0,y.jsx)($.Provider,{value:h,children:t}),h,null)})}let ex=new Set,eM=new Set,eD=new Set;function eO(e,t){if(e.size)for(let{callback:r}of e.values())r(t)}function eN(e,t){switch(e){case"before":return eO(ex,t);case"after":return eO(eM,t);case"tail":return eO(eD,t)}}function eL(e,t,r){let a=t.clock.getDelta();"never"===t.frameloop&&"number"==typeof e&&(a=e-t.clock.elapsedTime,t.clock.oldTime=t.clock.elapsedTime,t.clock.elapsedTime=e),n=t.internal.subscribers;for(let e=0;e<n.length;e++)(i=n[e]).ref.current(i.store.getState(),a,r);return!t.internal.priority&&t.gl.render&&t.gl.render(t.scene,t.camera),t.internal.frames=Math.max(0,t.internal.frames-1),"always"===t.frameloop?1:t.internal.frames}let eF=!1,eP=!1;function eG(e){for(let r of(o=requestAnimationFrame(eG),eF=!0,a=0,eN("before",e),eP=!0,ey.values())){var t;(s=r.store.getState()).internal.active&&("always"===s.frameloop||s.internal.frames>0)&&!(null!=(t=s.gl.xr)&&t.isPresenting)&&(a+=eL(e,s))}if(eP=!1,eN("after",e),0===a)return eN("tail",e),eF=!1,cancelAnimationFrame(o)}function eH(e,t=1){var r;if(!e)return ey.forEach(e=>eH(e.store.getState(),t));(null==(r=e.gl.xr)||!r.isPresenting)&&e.internal.active&&"never"!==e.frameloop&&(t>1?e.internal.frames=Math.min(60,e.internal.frames+t):eP?e.internal.frames=2:e.internal.frames=1,eF||(eF=!0,requestAnimationFrame(eG)))}function eU(e,t=!0,r,n){if(t&&eN("before",e),r)eL(e,r,n);else for(let t of ey.values())eL(e,t.store.getState());t&&eN("after",e)}let ek={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function ej(e){let{handlePointer:t}=function(e){function t(e){return e.filter(e=>["Move","Over","Enter","Out","Leave"].some(t=>{var r;return null==(r=e.__r3f)?void 0:r.handlers["onPointer"+t]}))}function r(t){let{internal:r}=e.getState();for(let e of r.hovered.values())if(!t.length||!t.find(t=>t.object===e.object&&t.index===e.index&&t.instanceId===e.instanceId)){let n=e.eventObject.__r3f;if(r.hovered.delete(Q(e)),null!=n&&n.eventCount){let r=n.handlers,i={...e,intersections:t};null==r.onPointerOut||r.onPointerOut(i),null==r.onPointerLeave||r.onPointerLeave(i)}}}function n(e,t){for(let r=0;r<t.length;r++){let n=t[r].__r3f;null==n||null==n.handlers.onPointerMissed||n.handlers.onPointerMissed(e)}}return{handlePointer:function(i){switch(i){case"onPointerLeave":case"onPointerCancel":return()=>r([]);case"onLostPointerCapture":return t=>{let{internal:n}=e.getState();"pointerId"in t&&n.capturedMap.has(t.pointerId)&&requestAnimationFrame(()=>{n.capturedMap.has(t.pointerId)&&(n.capturedMap.delete(t.pointerId),r([]))})}}return function(a){let{onPointerMissed:o,internal:s}=e.getState();s.lastEvent.current=a;let l="onPointerMove"===i,c="onClick"===i||"onContextMenu"===i||"onDoubleClick"===i,u=function(t,r){let n=e.getState(),i=new Set,a=[],o=r?r(n.internal.interaction):n.internal.interaction;for(let e=0;e<o.length;e++){let t=N(o[e]);t&&(t.raycaster.camera=void 0)}n.previousRoot||null==n.events.compute||n.events.compute(t,n);let s=o.flatMap(function(e){let r=N(e);if(!r||!r.events.enabled||null===r.raycaster.camera)return[];if(void 0===r.raycaster.camera){var n;null==r.events.compute||r.events.compute(t,r,null==(n=r.previousRoot)?void 0:n.getState()),void 0===r.raycaster.camera&&(r.raycaster.camera=null)}return r.raycaster.camera?r.raycaster.intersectObject(e,!0):[]}).sort((e,t)=>{let r=N(e.object),n=N(t.object);return r&&n&&n.events.priority-r.events.priority||e.distance-t.distance}).filter(e=>{let t=Q(e);return!i.has(t)&&(i.add(t),!0)});for(let e of(n.events.filter&&(s=n.events.filter(s,n)),s)){let t=e.object;for(;t;){var l;null!=(l=t.__r3f)&&l.eventCount&&a.push({...e,eventObject:t}),t=t.parent}}if("pointerId"in t&&n.internal.capturedMap.has(t.pointerId))for(let e of n.internal.capturedMap.get(t.pointerId).values())i.has(Q(e.intersection))||a.push(e.intersection);return a}(a,l?t:void 0),h=c?function(t){let{internal:r}=e.getState(),n=t.offsetX-r.initialClick[0],i=t.offsetY-r.initialClick[1];return Math.round(Math.sqrt(n*n+i*i))}(a):0;"onPointerDown"===i&&(s.initialClick=[a.offsetX,a.offsetY],s.initialHits=u.map(e=>e.eventObject)),c&&!u.length&&h<=2&&(n(a,s.interaction),o&&o(a)),l&&r(u),!function(e,t,n,i){if(e.length){let a={stopped:!1};for(let o of e){let s=N(o.object);if(s||o.object.traverseAncestors(e=>{let t=N(e);if(t)return s=t,!1}),s){let{raycaster:l,pointer:c,camera:u,internal:h}=s,m=new d.Vector3(c.x,c.y,0).unproject(u),f=e=>{var t,r;return null!=(t=null==(r=h.capturedMap.get(e))?void 0:r.has(o.eventObject))&&t},p=e=>{let r={intersection:o,target:t.target};h.capturedMap.has(e)?h.capturedMap.get(e).set(o.eventObject,r):h.capturedMap.set(e,new Map([[o.eventObject,r]])),t.target.setPointerCapture(e)},g=e=>{let t=h.capturedMap.get(e);t&&Z(h.capturedMap,o.eventObject,t,e)},A={};for(let e in t){let r=t[e];"function"!=typeof r&&(A[e]=r)}let _={...o,...A,pointer:c,intersections:e,stopped:a.stopped,delta:n,unprojectedPoint:m,ray:l.ray,camera:u,stopPropagation(){let n="pointerId"in t&&h.capturedMap.get(t.pointerId);(!n||n.has(o.eventObject))&&(_.stopped=a.stopped=!0,h.hovered.size&&Array.from(h.hovered.values()).find(e=>e.eventObject===o.eventObject)&&r([...e.slice(0,e.indexOf(o)),o]))},target:{hasPointerCapture:f,setPointerCapture:p,releasePointerCapture:g},currentTarget:{hasPointerCapture:f,setPointerCapture:p,releasePointerCapture:g},nativeEvent:t};if(i(_),!0===a.stopped)break}}}}(u,a,h,function(e){let t=e.eventObject,r=t.__r3f;if(!(null!=r&&r.eventCount))return;let o=r.handlers;if(l){if(o.onPointerOver||o.onPointerEnter||o.onPointerOut||o.onPointerLeave){let t=Q(e),r=s.hovered.get(t);r?r.stopped&&e.stopPropagation():(s.hovered.set(t,e),null==o.onPointerOver||o.onPointerOver(e),null==o.onPointerEnter||o.onPointerEnter(e))}null==o.onPointerMove||o.onPointerMove(e)}else{let r=o[i];r?(!c||s.initialHits.includes(t))&&(n(a,s.interaction.filter(e=>!s.initialHits.includes(e))),r(e)):c&&s.initialHits.includes(t)&&n(a,s.interaction.filter(e=>!s.initialHits.includes(e)))}})}}}}(e);return{priority:1,enabled:!0,compute(e,t,r){t.pointer.set(e.offsetX/t.size.width*2-1,-(2*(e.offsetY/t.size.height))+1),t.raycaster.setFromCamera(t.pointer,t.camera)},connected:void 0,handlers:Object.keys(ek).reduce((e,r)=>({...e,[r]:t(r)}),{}),update:()=>{var t;let{events:r,internal:n}=e.getState();null!=(t=n.lastEvent)&&t.current&&r.handlers&&r.handlers.onPointerMove(n.lastEvent.current)},connect:t=>{let{set:r,events:n}=e.getState();if(null==n.disconnect||n.disconnect(),r(e=>({events:{...e.events,connected:t}})),n.handlers)for(let e in n.handlers){let r=n.handlers[e],[i,a]=ek[e];t.addEventListener(i,r,{passive:a})}},disconnect:()=>{let{set:t,events:r}=e.getState();if(r.connected){if(r.handlers)for(let e in r.handlers){let t=r.handlers[e],[n]=ek[e];r.connected.removeEventListener(n,t)}t(e=>({events:{...e.events,connected:void 0}}))}}}}},125:(e,t,r)=>{var n=r(2115),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=n.useState,o=n.useEffect,s=n.useLayoutEffect,l=n.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!i(e,r)}catch(e){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=a({inst:{value:r,getSnapshot:t}}),i=n[0].inst,u=n[1];return s(function(){i.value=r,i.getSnapshot=t,c(i)&&u({inst:i})},[e,r,t]),o(function(){return c(i)&&u({inst:i}),e(function(){c(i)&&u({inst:i})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:u},258:(e,t,r)=>{r.d(t,{Hl:()=>d});var n=r(99),i=r(2115),a=r(7548);function o(e,t){let r;return(...n)=>{window.clearTimeout(r),r=window.setTimeout(()=>e(...n),t)}}let s=["x","y","top","bottom","left","right","width","height"];var l=r(4735),c=r(5155);function u({ref:e,children:t,fallback:r,resize:l,style:u,gl:d,events:h=n.f,eventSource:m,eventPrefix:f,shadows:p,linear:g,flat:A,legacy:_,orthographic:v,frameloop:E,dpr:T,performance:C,raycaster:y,camera:S,scene:R,onPointerMissed:b,onCreated:B,...I}){i.useMemo(()=>(0,n.e)(a),[]);let w=(0,n.u)(),[x,M]=function({debounce:e,scroll:t,polyfill:r,offsetSize:n}={debounce:0,scroll:!1,offsetSize:!1}){var a,l,c;let u=r||("undefined"==typeof window?class{}:window.ResizeObserver);if(!u)throw Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");let[d,h]=(0,i.useState)({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),m=(0,i.useRef)({element:null,scrollContainers:null,resizeObserver:null,lastBounds:d,orientationHandler:null}),f=e?"number"==typeof e?e:e.scroll:null,p=e?"number"==typeof e?e:e.resize:null,g=(0,i.useRef)(!1);(0,i.useEffect)(()=>(g.current=!0,()=>void(g.current=!1)));let[A,_,v]=(0,i.useMemo)(()=>{let e=()=>{let e,t;if(!m.current.element)return;let{left:r,top:i,width:a,height:o,bottom:l,right:c,x:u,y:d}=m.current.element.getBoundingClientRect(),f={left:r,top:i,width:a,height:o,bottom:l,right:c,x:u,y:d};m.current.element instanceof HTMLElement&&n&&(f.height=m.current.element.offsetHeight,f.width=m.current.element.offsetWidth),Object.freeze(f),g.current&&(e=m.current.lastBounds,t=f,!s.every(r=>e[r]===t[r]))&&h(m.current.lastBounds=f)};return[e,p?o(e,p):e,f?o(e,f):e]},[h,n,f,p]);function E(){m.current.scrollContainers&&(m.current.scrollContainers.forEach(e=>e.removeEventListener("scroll",v,!0)),m.current.scrollContainers=null),m.current.resizeObserver&&(m.current.resizeObserver.disconnect(),m.current.resizeObserver=null),m.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",m.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",m.current.orientationHandler))}function T(){m.current.element&&(m.current.resizeObserver=new u(v),m.current.resizeObserver.observe(m.current.element),t&&m.current.scrollContainers&&m.current.scrollContainers.forEach(e=>e.addEventListener("scroll",v,{capture:!0,passive:!0})),m.current.orientationHandler=()=>{v()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",m.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",m.current.orientationHandler))}return a=v,l=!!t,(0,i.useEffect)(()=>{if(l)return window.addEventListener("scroll",a,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",a,!0)},[a,l]),c=_,(0,i.useEffect)(()=>(window.addEventListener("resize",c),()=>void window.removeEventListener("resize",c)),[c]),(0,i.useEffect)(()=>{E(),T()},[t,v,_]),(0,i.useEffect)(()=>E,[]),[e=>{e&&e!==m.current.element&&(E(),m.current.element=e,m.current.scrollContainers=function e(t){let r=[];if(!t||t===document.body)return r;let{overflow:n,overflowX:i,overflowY:a}=window.getComputedStyle(t);return[n,i,a].some(e=>"auto"===e||"scroll"===e)&&r.push(t),[...r,...e(t.parentElement)]}(e),T())},d,A]}({scroll:!0,debounce:{scroll:50,resize:0},...l}),D=i.useRef(null),O=i.useRef(null);i.useImperativeHandle(e,()=>D.current);let N=(0,n.a)(b),[L,F]=i.useState(!1),[P,G]=i.useState(!1);if(L)throw L;if(P)throw P;let H=i.useRef(null);(0,n.b)(()=>{let e=D.current;M.width>0&&M.height>0&&e&&(H.current||(H.current=(0,n.c)(e)),async function(){await H.current.configure({gl:d,scene:R,events:h,shadows:p,linear:g,flat:A,legacy:_,orthographic:v,frameloop:E,dpr:T,performance:C,raycaster:y,camera:S,size:M,onPointerMissed:(...e)=>null==N.current?void 0:N.current(...e),onCreated:e=>{null==e.events.connect||e.events.connect(m?(0,n.i)(m)?m.current:m:O.current),f&&e.setEvents({compute:(e,t)=>{let r=e[f+"X"],n=e[f+"Y"];t.pointer.set(r/t.size.width*2-1,-(2*(n/t.size.height))+1),t.raycaster.setFromCamera(t.pointer,t.camera)}}),null==B||B(e)}}),H.current.render((0,c.jsx)(w,{children:(0,c.jsx)(n.E,{set:G,children:(0,c.jsx)(i.Suspense,{fallback:(0,c.jsx)(n.B,{set:F}),children:null!=t?t:null})})}))}())}),i.useEffect(()=>{let e=D.current;if(e)return()=>(0,n.d)(e)},[]);let U=m?"none":"auto";return(0,c.jsx)("div",{ref:O,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:U,...u},...I,children:(0,c.jsx)("div",{ref:x,style:{width:"100%",height:"100%"},children:(0,c.jsx)("canvas",{ref:D,style:{display:"block"},children:r})})})}function d(e){return(0,c.jsx)(l.Af,{children:(0,c.jsx)(u,{...e})})}r(8870),r(8807),r(9914)},592:(e,t,r)=>{let n;r.d(t,{OH:()=>eT});var i=r(8945),a=r(2115),o=r(99),s=r(7548),l=r(4814);class c extends s.Mesh{constructor(e,t){var r,n;let i=(e=>e&&e.isCubeTexture)(e),a=Math.floor(Math.log2((null!=(n=i?null==(r=e.image[0])?void 0:r.width:e.image.width)?n:1024)/4)),o=Math.pow(2,a),c=3*Math.max(o,112),u=`
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `,d=[i?"#define ENVMAP_TYPE_CUBE":"",`#define CUBEUV_TEXEL_WIDTH ${1/c}`,`#define CUBEUV_TEXEL_HEIGHT ${1/(4*o)}`,`#define CUBEUV_MAX_MIP ${a}.0`].join("\n")+`
        #define ENVMAP_TYPE_CUBE_UV
        varying vec3 vWorldPosition;
        uniform float radius;
        uniform float height;
        uniform float angle;
        #ifdef ENVMAP_TYPE_CUBE
            uniform samplerCube map;
        #else
            uniform sampler2D map;
        #endif
        // From: https://www.shadertoy.com/view/4tsBD7
        float diskIntersectWithBackFaceCulling( vec3 ro, vec3 rd, vec3 c, vec3 n, float r ) 
        {
            float d = dot ( rd, n );
            
            if( d > 0.0 ) { return 1e6; }
            
            vec3  o = ro - c;
            float t = - dot( n, o ) / d;
            vec3  q = o + rd * t;
            
            return ( dot( q, q ) < r * r ) ? t : 1e6;
        }
        // From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm
        float sphereIntersect( vec3 ro, vec3 rd, vec3 ce, float ra ) 
        {
            vec3 oc = ro - ce;
            float b = dot( oc, rd );
            float c = dot( oc, oc ) - ra * ra;
            float h = b * b - c;
            
            if( h < 0.0 ) { return -1.0; }
            
            h = sqrt( h );
            
            return - b + h;
        }
        vec3 project() 
        {
            vec3 p = normalize( vWorldPosition );
            vec3 camPos = cameraPosition;
            camPos.y -= height;
            float intersection = sphereIntersect( camPos, p, vec3( 0.0 ), radius );
            if( intersection > 0.0 ) {
                
                vec3 h = vec3( 0.0, - height, 0.0 );
                float intersection2 = diskIntersectWithBackFaceCulling( camPos, p, h, vec3( 0.0, 1.0, 0.0 ), radius );
                p = ( camPos + min( intersection, intersection2 ) * p ) / radius;
            } else {
                p = vec3( 0.0, 1.0, 0.0 );
            }
            return p;
        }
        #include <common>
        #include <cube_uv_reflection_fragment>
        void main() 
        {
            vec3 projectedWorldPosition = project();
            
            #ifdef ENVMAP_TYPE_CUBE
                vec3 outcolor = textureCube( map, projectedWorldPosition ).rgb;
            #else
                vec3 direction = normalize( projectedWorldPosition );
                vec2 uv = equirectUv( direction );
                vec3 outcolor = texture2D( map, uv ).rgb;
            #endif
            gl_FragColor = vec4( outcolor, 1.0 );
            #include <tonemapping_fragment>
            #include <${l.r>=154?"colorspace_fragment":"encodings_fragment"}>
        }
        `,h={map:{value:e},height:{value:(null==t?void 0:t.height)||15},radius:{value:(null==t?void 0:t.radius)||100}};super(new s.IcosahedronGeometry(1,16),new s.ShaderMaterial({uniforms:h,fragmentShader:d,vertexShader:u,side:s.DoubleSide}))}set radius(e){this.material.uniforms.radius.value=e}get radius(){return this.material.uniforms.radius.value}set height(e){this.material.uniforms.height.value=e}get height(){return this.material.uniforms.height.value}}class u extends s.DataTextureLoader{constructor(e){super(e),this.type=s.HalfFloatType}parse(e){let t,r,n,i=function(e,t){switch(e){case 1:throw Error("THREE.RGBELoader: Read Error: "+(t||""));case 2:throw Error("THREE.RGBELoader: Write Error: "+(t||""));case 3:throw Error("THREE.RGBELoader: Bad File Format: "+(t||""));default:throw Error("THREE.RGBELoader: Memory Error: "+(t||""))}},a=function(e,t,r){t=t||1024;let n=e.pos,i=-1,a=0,o="",s=String.fromCharCode.apply(null,new Uint16Array(e.subarray(n,n+128)));for(;0>(i=s.indexOf("\n"))&&a<t&&n<e.byteLength;)o+=s,a+=s.length,n+=128,s+=String.fromCharCode.apply(null,new Uint16Array(e.subarray(n,n+128)));return -1<i&&(!1!==r&&(e.pos+=a+i+1),o+s.slice(0,i))},o=new Uint8Array(e);o.pos=0;let l=function(e){let t,r,n=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,o=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,s=/^\s*FORMAT=(\S+)\s*$/,l=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,c={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};for(!(e.pos>=e.byteLength)&&(t=a(e))||i(1,"no header found"),(r=t.match(/^#\?(\S+)/))||i(3,"bad initial token"),c.valid|=1,c.programtype=r[1],c.string+=t+"\n";!1!==(t=a(e));){if(c.string+=t+"\n","#"===t.charAt(0)){c.comments+=t+"\n";continue}if((r=t.match(n))&&(c.gamma=parseFloat(r[1])),(r=t.match(o))&&(c.exposure=parseFloat(r[1])),(r=t.match(s))&&(c.valid|=2,c.format=r[1]),(r=t.match(l))&&(c.valid|=4,c.height=parseInt(r[1],10),c.width=parseInt(r[2],10)),2&c.valid&&4&c.valid)break}return 2&c.valid||i(3,"missing format specifier"),4&c.valid||i(3,"missing image size specifier"),c}(o),c=l.width,u=l.height,d=function(e,t,r){if(t<8||t>32767||2!==e[0]||2!==e[1]||128&e[2])return new Uint8Array(e);t!==(e[2]<<8|e[3])&&i(3,"wrong scanline width");let n=new Uint8Array(4*t*r);n.length||i(4,"unable to allocate buffer space");let a=0,o=0,s=4*t,l=new Uint8Array(4),c=new Uint8Array(s),u=r;for(;u>0&&o<e.byteLength;){o+4>e.byteLength&&i(1),l[0]=e[o++],l[1]=e[o++],l[2]=e[o++],l[3]=e[o++],(2!=l[0]||2!=l[1]||(l[2]<<8|l[3])!=t)&&i(3,"bad rgbe scanline format");let r=0,d;for(;r<s&&o<e.byteLength;){let t=(d=e[o++])>128;if(t&&(d-=128),(0===d||r+d>s)&&i(3,"bad scanline data"),t){let t=e[o++];for(let e=0;e<d;e++)c[r++]=t}else c.set(e.subarray(o,o+d),r),r+=d,o+=d}for(let e=0;e<t;e++){let r=0;n[a]=c[e+r],r+=t,n[a+1]=c[e+r],r+=t,n[a+2]=c[e+r],r+=t,n[a+3]=c[e+r],a+=4}u--}return n}(o.subarray(o.pos),c,u);switch(this.type){case s.FloatType:let h=new Float32Array(4*(n=d.length/4));for(let e=0;e<n;e++)!function(e,t,r,n){let i=Math.pow(2,e[t+3]-128)/255;r[n+0]=e[t+0]*i,r[n+1]=e[t+1]*i,r[n+2]=e[t+2]*i,r[n+3]=1}(d,4*e,h,4*e);t=h,r=s.FloatType;break;case s.HalfFloatType:let m=new Uint16Array(4*(n=d.length/4));for(let e=0;e<n;e++)!function(e,t,r,n){let i=Math.pow(2,e[t+3]-128)/255;r[n+0]=s.DataUtils.toHalfFloat(Math.min(e[t+0]*i,65504)),r[n+1]=s.DataUtils.toHalfFloat(Math.min(e[t+1]*i,65504)),r[n+2]=s.DataUtils.toHalfFloat(Math.min(e[t+2]*i,65504)),r[n+3]=s.DataUtils.toHalfFloat(1)}(d,4*e,m,4*e);t=m,r=s.HalfFloatType;break;default:throw Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:c,height:u,data:t,header:l.string,gamma:l.gamma,exposure:l.exposure,type:r}}setDataType(e){return this.type=e,this}load(e,t,r,n){return super.load(e,function(e,r){switch(e.type){case s.FloatType:case s.HalfFloatType:"colorSpace"in e?e.colorSpace="srgb-linear":e.encoding=3e3,e.minFilter=s.LinearFilter,e.magFilter=s.LinearFilter,e.generateMipmaps=!1,e.flipY=!0}t&&t(e,r)},r,n)}}var d=Uint8Array,h=Uint16Array,m=Uint32Array,f=new d([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),p=new d([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),g=new d([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),A=function(e,t){for(var r=new h(31),n=0;n<31;++n)r[n]=t+=1<<e[n-1];for(var i=new m(r[30]),n=1;n<30;++n)for(var a=r[n];a<r[n+1];++a)i[a]=a-r[n]<<5|n;return[r,i]},_=A(f,2),v=_[0],E=_[1];v[28]=258,E[258]=28;var T=A(p,0),C=T[0];T[1];for(var y=new h(32768),S=0;S<32768;++S){var R=(43690&S)>>>1|(21845&S)<<1;R=(61680&(R=(52428&R)>>>2|(13107&R)<<2))>>>4|(3855&R)<<4,y[S]=((65280&R)>>>8|(255&R)<<8)>>>1}for(var b=function(e,t,r){for(var n,i=e.length,a=0,o=new h(t);a<i;++a)++o[e[a]-1];var s=new h(t);for(a=0;a<t;++a)s[a]=s[a-1]+o[a-1]<<1;if(r){n=new h(1<<t);var l=15-t;for(a=0;a<i;++a)if(e[a])for(var c=a<<4|e[a],u=t-e[a],d=s[e[a]-1]++<<u,m=d|(1<<u)-1;d<=m;++d)n[y[d]>>>l]=c}else for(a=0,n=new h(i);a<i;++a)e[a]&&(n[a]=y[s[e[a]-1]++]>>>15-e[a]);return n},B=new d(288),S=0;S<144;++S)B[S]=8;for(var S=144;S<256;++S)B[S]=9;for(var S=256;S<280;++S)B[S]=7;for(var S=280;S<288;++S)B[S]=8;for(var I=new d(32),S=0;S<32;++S)I[S]=5;var w=b(B,9,1),x=b(I,5,1),M=function(e){for(var t=e[0],r=1;r<e.length;++r)e[r]>t&&(t=e[r]);return t},D=function(e,t,r){var n=t/8|0;return(e[n]|e[n+1]<<8)>>(7&t)&r},O=function(e,t){var r=t/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(7&t)},N=function(e,t,r){(null==t||t<0)&&(t=0),(null==r||r>e.length)&&(r=e.length);var n=new(e instanceof h?h:e instanceof m?m:d)(r-t);return n.set(e.subarray(t,r)),n},L=function(e,t,r){var n=e.length;if(!n||r&&!r.l&&n<5)return t||new d(0);var i=!t||r,a=!r||r.i;r||(r={}),t||(t=new d(3*n));var o=function(e){var r=t.length;if(e>r){var n=new d(Math.max(2*r,e));n.set(t),t=n}},s=r.f||0,l=r.p||0,c=r.b||0,u=r.l,h=r.d,m=r.m,A=r.n,_=8*n;do{if(!u){r.f=s=D(e,l,1);var E=D(e,l+1,3);if(l+=3,E)if(1==E)u=w,h=x,m=9,A=5;else if(2==E){var T=D(e,l,31)+257,y=D(e,l+10,15)+4,S=T+D(e,l+5,31)+1;l+=14;for(var R=new d(S),B=new d(19),I=0;I<y;++I)B[g[I]]=D(e,l+3*I,7);l+=3*y;for(var L=M(B),F=(1<<L)-1,P=b(B,L,1),I=0;I<S;){var G=P[D(e,l,F)];l+=15&G;var H=G>>>4;if(H<16)R[I++]=H;else{var U=0,k=0;for(16==H?(k=3+D(e,l,3),l+=2,U=R[I-1]):17==H?(k=3+D(e,l,7),l+=3):18==H&&(k=11+D(e,l,127),l+=7);k--;)R[I++]=U}}var j=R.subarray(0,T),J=R.subarray(T);m=M(j),A=M(J),u=b(j,m,1),h=b(J,A,1)}else throw"invalid block type";else{var z,H=((z=l)/8|0)+(7&z&&1)+4,K=e[H-4]|e[H-3]<<8,X=H+K;if(X>n){if(a)throw"unexpected EOF";break}i&&o(c+K),t.set(e.subarray(H,X),c),r.b=c+=K,r.p=l=8*X;continue}if(l>_){if(a)throw"unexpected EOF";break}}i&&o(c+131072);for(var W=(1<<m)-1,Y=(1<<A)-1,V=l;;V=l){var U=u[O(e,l)&W],Q=U>>>4;if((l+=15&U)>_){if(a)throw"unexpected EOF";break}if(!U)throw"invalid length/literal";if(Q<256)t[c++]=Q;else if(256==Q){V=l,u=null;break}else{var Z=Q-254;if(Q>264){var I=Q-257,q=f[I];Z=D(e,l,(1<<q)-1)+v[I],l+=q}var $=h[O(e,l)&Y],ee=$>>>4;if(!$)throw"invalid distance";l+=15&$;var J=C[ee];if(ee>3){var q=p[ee];J+=O(e,l)&(1<<q)-1,l+=q}if(l>_){if(a)throw"unexpected EOF";break}i&&o(c+131072);for(var et=c+Z;c<et;c+=4)t[c]=t[c-J],t[c+1]=t[c+1-J],t[c+2]=t[c+2-J],t[c+3]=t[c+3-J];c=et}}r.l=u,r.p=V,r.b=c,u&&(s=1,r.m=m,r.d=h,r.n=A)}while(!s);return c==t.length?t:N(t,0,c)},F=new d(0),P=function(e){if((15&e[0])!=8||e[0]>>>4>7||(e[0]<<8|e[1])%31)throw"invalid zlib data";if(32&e[1])throw"invalid zlib data: preset dictionaries not supported"};function G(e,t){return L((P(e),e.subarray(2,-4)),t)}var H="undefined"!=typeof TextDecoder&&new TextDecoder;try{H.decode(F,{stream:!0})}catch(e){}let U=l.r>=152;class k extends s.DataTextureLoader{constructor(e){super(e),this.type=s.HalfFloatType}parse(e){let t={l:0,c:0,lc:0};function r(e,r,n,i,a){for(;n<e;)r=r<<8|b(i,a),n+=8;t.l=r>>(n-=e)&(1<<e)-1,t.c=r,t.lc=n}let n=Array(59),i={c:0,lc:0};function a(e,t,r,n){e=e<<8|b(r,n),t+=8,i.c=e,i.lc=t}let o={c:0,lc:0};function l(e,t,r,n,s,l,c,u,d,h){if(e==t){n<8&&(a(r,n,s,c),r=i.c,n=i.lc);var m=r>>(n-=8),m=new Uint8Array([m])[0];if(d.value+m>h)return!1;for(var f=u[d.value-1];m-- >0;)u[d.value++]=f}else{if(!(d.value<h))return!1;u[d.value++]=e}o.c=r,o.lc=n}function c(e){var t=65535&e;return t>32767?t-65536:t}let u={a:0,b:0};function d(e,t){var r=c(e),n=c(t),i=r+(1&n)+(n>>1),a=i-n;u.a=i,u.b=a}function h(e,t){var r=65535&t,n=(65535&e)-(r>>1)&65535;u.a=r+n-32768&65535,u.b=n}function m(e,s,c,u,d,h){var m=c.value,f=R(s,c),p=R(s,c);c.value+=4;var g=R(s,c);if(c.value+=4,f<0||f>=65537||p<0||p>=65537)throw"Something wrong with HUF_ENCSIZE";for(var A=Array(65537),_=Array(16384),v=0;v<16384;v++)_[v]={},_[v].len=0,_[v].lit=0,_[v].p=null;var E=u-(c.value-m);if(!function(e,i,a,o,s,l,c){for(var u=0,d=0;s<=l;s++){if(a.value-a.value>o)return!1;r(6,u,d,e,a);var h=t.l;if(u=t.c,d=t.lc,c[s]=h,63==h){if(a.value-a.value>o)throw"Something wrong with hufUnpackEncTable";r(8,u,d,e,a);var m=t.l+6;if(u=t.c,d=t.lc,s+m>l+1)throw"Something wrong with hufUnpackEncTable";for(;m--;)c[s++]=0;s--}else if(h>=59){var m=h-59+2;if(s+m>l+1)throw"Something wrong with hufUnpackEncTable";for(;m--;)c[s++]=0;s--}}!function(e){for(var t=0;t<=58;++t)n[t]=0;for(var t=0;t<65537;++t)n[e[t]]+=1;for(var r=0,t=58;t>0;--t){var i=r+n[t]>>1;n[t]=r,r=i}for(var t=0;t<65537;++t){var a=e[t];a>0&&(e[t]=a|n[a]++<<6)}}(c)}(e,0,c,E,f,p,A),g>8*(u-(c.value-m)))throw"Something wrong with hufUncompress";!function(e,t,r,n){for(;t<=r;t++){var i=e[t]>>6,a=63&e[t];if(i>>a)throw"Invalid table entry";if(a>14){var o=n[i>>a-14];if(o.len)throw"Invalid table entry";if(o.lit++,o.p){var s=o.p;o.p=Array(o.lit);for(var l=0;l<o.lit-1;++l)o.p[l]=s[l]}else o.p=[,];o.p[o.lit-1]=t}else if(a)for(var c=0,l=1<<14-a;l>0;l--){var o=n[(i<<14-a)+c];if(o.len||o.p)throw"Invalid table entry";o.len=a,o.lit=t,c++}}}(A,f,p,_),function(e,t,r,n,s,c,u,d,h,m){for(var f=0,p=0,g=Math.trunc(s.value+(c+7)/8);s.value<g;)for(a(f,p,r,s),f=i.c,p=i.lc;p>=14;){var A=t[f>>p-14&16383];if(A.len)p-=A.len,l(A.lit,u,f,p,r,n,s,h,m,d),f=o.c,p=o.lc;else{if(!A.p)throw"hufDecode issues";for(_=0;_<A.lit;_++){for(var _,v=63&e[A.p[_]];p<v&&s.value<g;)a(f,p,r,s),f=i.c,p=i.lc;if(p>=v&&e[A.p[_]]>>6==(f>>p-v&(1<<v)-1)){p-=v,l(A.p[_],u,f,p,r,n,s,h,m,d),f=o.c,p=o.lc;break}}if(_==A.lit)throw"hufDecode issues"}}var E=8-c&7;for(f>>=E,p-=E;p>0;){var A=t[f<<14-p&16383];if(A.len)p-=A.len,l(A.lit,u,f,p,r,n,s,h,m,d),f=o.c,p=o.lc;else throw"hufDecode issues"}}(A,_,e,s,c,g,p,h,d,{value:0})}function f(e){for(var t=1;t<e.length;t++){var r=e[t-1]+e[t]-128;e[t]=r}}function p(e,t){for(var r=0,n=Math.floor((e.length+1)/2),i=0,a=e.length-1;!(i>a)&&(t[i++]=e[r++],!(i>a));){;t[i++]=e[n++]}}function g(e){for(var t=e.byteLength,r=[],n=0,i=new DataView(e);t>0;){var a=i.getInt8(n++);if(a<0){var o=-a;t-=o+1;for(var s=0;s<o;s++)r.push(i.getUint8(n++))}else{var o=a;t-=2;for(var l=i.getUint8(n++),s=0;s<o+1;s++)r.push(l)}}return r}function A(e){return new DataView(e.array.buffer,e.offset.value,e.size)}function _(e){var t=new Uint8Array(g(e.viewer.buffer.slice(e.offset.value,e.offset.value+e.size))),r=new Uint8Array(t.length);return f(t),p(t,r),new DataView(r.buffer)}function v(e){var t=G(e.array.slice(e.offset.value,e.offset.value+e.size)),r=new Uint8Array(t.length);return f(t),p(t,r),new DataView(r.buffer)}function E(e){for(var t=e.viewer,r={value:e.offset.value},n=new Uint16Array(e.width*e.scanlineBlockSize*(e.channels*e.type)),i=new Uint8Array(8192),a=0,o=Array(e.channels),s=0;s<e.channels;s++)o[s]={},o[s].start=a,o[s].end=o[s].start,o[s].nx=e.width,o[s].ny=e.lines,o[s].size=e.type,a+=o[s].nx*o[s].ny*o[s].size;var l=D(t,r),c=D(t,r);if(c>=8192)throw"Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";if(l<=c)for(var s=0;s<c-l+1;s++)i[s+l]=B(t,r);var f=new Uint16Array(65536),p=function(e,t){for(var r=0,n=0;n<65536;++n)(0==n||e[n>>3]&1<<(7&n))&&(t[r++]=n);for(var i=r-1;r<65536;)t[r++]=0;return i}(i,f),g=R(t,r);m(e.array,t,r,g,n,a);for(var s=0;s<e.channels;++s)for(var A=o[s],_=0;_<o[s].size;++_)!function(e,t,r,n,i,a,o){for(var s=o<16384,l=r>i?i:r,c=1;c<=l;)c<<=1;for(c>>=1,m=c,c>>=1;c>=1;){for(var m,f,p,g,A,_=0,v=0+a*(i-m),E=a*c,T=a*m,C=n*c,y=n*m;_<=v;_+=T){for(var S=_,R=_+n*(r-m);S<=R;S+=y){var b=S+C,B=S+E,I=B+C;s?(d(e[S+t],e[B+t]),f=u.a,g=u.b,d(e[b+t],e[I+t]),p=u.a,A=u.b,d(f,p),e[S+t]=u.a,e[b+t]=u.b,d(g,A)):(h(e[S+t],e[B+t]),f=u.a,g=u.b,h(e[b+t],e[I+t]),p=u.a,A=u.b,h(f,p),e[S+t]=u.a,e[b+t]=u.b,h(g,A)),e[B+t]=u.a,e[I+t]=u.b}if(r&c){var B=S+E;s?d(e[S+t],e[B+t]):h(e[S+t],e[B+t]),f=u.a,e[B+t]=u.b,e[S+t]=f}}if(i&c)for(var S=_,R=_+n*(r-m);S<=R;S+=y){var b=S+C;s?d(e[S+t],e[b+t]):h(e[S+t],e[b+t]),f=u.a,e[b+t]=u.b,e[S+t]=f}m=c,c>>=1}}(n,A.start+_,A.nx,A.size,A.ny,A.nx*A.size,p);for(var v=a,E=0;E<v;++E)n[E]=f[n[E]];for(var T=0,C=new Uint8Array(n.buffer.byteLength),y=0;y<e.lines;y++)for(var S=0;S<e.channels;S++){var A=o[S],b=A.nx*A.size,I=new Uint8Array(n.buffer,2*A.end,2*b);C.set(I,T),T+=2*b,A.end+=b}return new DataView(C.buffer)}function T(e){var t=G(e.array.slice(e.offset.value,e.offset.value+e.size));let r=e.lines*e.channels*e.width,n=1==e.type?new Uint16Array(r):new Uint32Array(r),i=0,a=0,o=[,,,,];for(let r=0;r<e.lines;r++)for(let r=0;r<e.channels;r++){let r=0;switch(e.type){case 1:o[0]=i,o[1]=o[0]+e.width,i=o[1]+e.width;for(let i=0;i<e.width;++i)r+=t[o[0]++]<<8|t[o[1]++],n[a]=r,a++;break;case 2:o[0]=i,o[1]=o[0]+e.width,o[2]=o[1]+e.width,i=o[2]+e.width;for(let i=0;i<e.width;++i)r+=t[o[0]++]<<24|t[o[1]++]<<16|t[o[2]++]<<8,n[a]=r,a++}}return new DataView(n.buffer)}function C(e){var t=e.viewer,r={value:e.offset.value},n=new Uint8Array(e.width*e.lines*(e.channels*e.type*2)),i={version:I(t,r),unknownUncompressedSize:I(t,r),unknownCompressedSize:I(t,r),acCompressedSize:I(t,r),dcCompressedSize:I(t,r),rleCompressedSize:I(t,r),rleUncompressedSize:I(t,r),rleRawSize:I(t,r),totalAcUncompressedCount:I(t,r),totalDcUncompressedCount:I(t,r),acCompression:I(t,r)};if(i.version<2)throw"EXRLoader.parse: "+P.compression+" version "+i.version+" is unsupported";for(var a=[],o=D(t,r)-2;o>0;){var l=y(t.buffer,r),c=B(t,r),u=c>>2&3,d=new Int8Array([(c>>4)-1])[0],h=B(t,r);a.push({name:l,index:d,type:h,compression:u}),o-=l.length+3}for(var f=P.channels,p=Array(e.channels),A=0;A<e.channels;++A){var _=p[A]={},E=f[A];_.name=E.name,_.compression=0,_.decoded=!1,_.type=E.pixelType,_.pLinear=E.pLinear,_.width=e.width,_.height=e.lines}for(var T={idx:[,,,]},C=0;C<e.channels;++C)for(var _=p[C],A=0;A<a.length;++A){var S=a[A];_.name==S.name&&(_.compression=S.compression,S.index>=0&&(T.idx[S.index]=C),_.offset=C)}if(i.acCompressedSize>0)switch(i.acCompression){case 0:var R=new Uint16Array(i.totalAcUncompressedCount);m(e.array,t,r,i.acCompressedSize,R,i.totalAcUncompressedCount);break;case 1:var b=e.array.slice(r.value,r.value+i.totalAcUncompressedCount),w=G(b),R=new Uint16Array(w.buffer);r.value+=i.totalAcUncompressedCount}if(i.dcCompressedSize>0){var x=new Uint16Array(v({array:e.array,offset:r,size:i.dcCompressedSize}).buffer);r.value+=i.dcCompressedSize}if(i.rleRawSize>0){var b=e.array.slice(r.value,r.value+i.rleCompressedSize),w=G(b),O=g(w.buffer);r.value+=i.rleCompressedSize}for(var N=0,L=Array(p.length),A=0;A<L.length;++A)L[A]=[];for(var F=0;F<e.lines;++F)for(var H=0;H<p.length;++H)L[H].push(N),N+=p[H].width*e.type*2;!function(e,t,r,n,i,a){var o=new DataView(a.buffer),l=r[e.idx[0]].width,c=r[e.idx[0]].height,u=Math.floor(l/8),d=Math.ceil(l/8),h=Math.ceil(c/8),m=l-(d-1)*8,f=c-(h-1)*8,p={value:0},g=[,,,],A=[,,,],_=[,,,],v=[,,,],E=[,,,];for(let r=0;r<3;++r)E[r]=t[e.idx[r]],g[r]=r<1?0:g[r-1]+d*h,A[r]=new Float32Array(64),_[r]=new Uint16Array(64),v[r]=new Uint16Array(64*d);for(let t=0;t<h;++t){var T,C,y=8;t==h-1&&(y=f);var S=8;for(let e=0;e<d;++e){e==d-1&&(S=m);for(let e=0;e<3;++e){_[e].fill(0),_[e][0]=i[g[e]++],function(e,t,r){for(var n,i=1;i<64;)65280==(n=t[e.value])?i=64:n>>8==255?i+=255&n:(r[i]=n,i++),e.value++}(p,n,_[e]),T=_[e],(C=A[e])[0]=M(T[0]),C[1]=M(T[1]),C[2]=M(T[5]),C[3]=M(T[6]),C[4]=M(T[14]),C[5]=M(T[15]),C[6]=M(T[27]),C[7]=M(T[28]),C[8]=M(T[2]),C[9]=M(T[4]),C[10]=M(T[7]),C[11]=M(T[13]),C[12]=M(T[16]),C[13]=M(T[26]),C[14]=M(T[29]),C[15]=M(T[42]),C[16]=M(T[3]),C[17]=M(T[8]),C[18]=M(T[12]),C[19]=M(T[17]),C[20]=M(T[25]),C[21]=M(T[30]),C[22]=M(T[41]),C[23]=M(T[43]),C[24]=M(T[9]),C[25]=M(T[11]),C[26]=M(T[18]),C[27]=M(T[24]),C[28]=M(T[31]),C[29]=M(T[40]),C[30]=M(T[44]),C[31]=M(T[53]),C[32]=M(T[10]),C[33]=M(T[19]),C[34]=M(T[23]),C[35]=M(T[32]),C[36]=M(T[39]),C[37]=M(T[45]),C[38]=M(T[52]),C[39]=M(T[54]),C[40]=M(T[20]),C[41]=M(T[22]),C[42]=M(T[33]),C[43]=M(T[38]),C[44]=M(T[46]),C[45]=M(T[51]),C[46]=M(T[55]),C[47]=M(T[60]),C[48]=M(T[21]),C[49]=M(T[34]),C[50]=M(T[37]),C[51]=M(T[47]),C[52]=M(T[50]),C[53]=M(T[56]),C[54]=M(T[59]),C[55]=M(T[61]),C[56]=M(T[35]),C[57]=M(T[36]),C[58]=M(T[48]),C[59]=M(T[49]),C[60]=M(T[57]),C[61]=M(T[58]),C[62]=M(T[62]),C[63]=M(T[63]),function(e){let t=.5*Math.cos(3.14159/16),r=.5*Math.cos(3.14159/8),n=.5*Math.cos(3*3.14159/16),i=.5*Math.cos(3*3.14159/8);for(var a=[,,,,],o=[,,,,],s=[,,,,],l=[,,,,],c=0;c<8;++c){var u=8*c;a[0]=r*e[u+2],a[1]=i*e[u+2],a[2]=r*e[u+6],a[3]=i*e[u+6],o[0]=t*e[u+1]+n*e[u+3]+.2777854612564676*e[u+5]+.09754573032714427*e[u+7],o[1]=n*e[u+1]-.09754573032714427*e[u+3]-t*e[u+5]-.2777854612564676*e[u+7],o[2]=.2777854612564676*e[u+1]-t*e[u+3]+.09754573032714427*e[u+5]+n*e[u+7],o[3]=.09754573032714427*e[u+1]-.2777854612564676*e[u+3]+n*e[u+5]-t*e[u+7],s[0]=.35355362513961314*(e[u+0]+e[u+4]),s[3]=.35355362513961314*(e[u+0]-e[u+4]),s[1]=a[0]+a[3],s[2]=a[1]-a[2],l[0]=s[0]+s[1],l[1]=s[3]+s[2],l[2]=s[3]-s[2],l[3]=s[0]-s[1],e[u+0]=l[0]+o[0],e[u+1]=l[1]+o[1],e[u+2]=l[2]+o[2],e[u+3]=l[3]+o[3],e[u+4]=l[3]-o[3],e[u+5]=l[2]-o[2],e[u+6]=l[1]-o[1],e[u+7]=l[0]-o[0]}for(var d=0;d<8;++d)a[0]=r*e[16+d],a[1]=i*e[16+d],a[2]=r*e[48+d],a[3]=i*e[48+d],o[0]=t*e[8+d]+n*e[24+d]+.2777854612564676*e[40+d]+.09754573032714427*e[56+d],o[1]=n*e[8+d]-.09754573032714427*e[24+d]-t*e[40+d]-.2777854612564676*e[56+d],o[2]=.2777854612564676*e[8+d]-t*e[24+d]+.09754573032714427*e[40+d]+n*e[56+d],o[3]=.09754573032714427*e[8+d]-.2777854612564676*e[24+d]+n*e[40+d]-t*e[56+d],s[0]=.35355362513961314*(e[d]+e[32+d]),s[3]=.35355362513961314*(e[d]-e[32+d]),s[1]=a[0]+a[3],s[2]=a[1]-a[2],l[0]=s[0]+s[1],l[1]=s[3]+s[2],l[2]=s[3]-s[2],l[3]=s[0]-s[1],e[0+d]=l[0]+o[0],e[8+d]=l[1]+o[1],e[16+d]=l[2]+o[2],e[24+d]=l[3]+o[3],e[32+d]=l[3]-o[3],e[40+d]=l[2]-o[2],e[48+d]=l[1]-o[1],e[56+d]=l[0]-o[0]}(A[e])}for(var R=A,b=0;b<64;++b){var B=R[0][b],I=R[1][b],w=R[2][b];R[0][b]=B+1.5747*w,R[1][b]=B-.1873*I-.4682*w,R[2][b]=B+1.8556*I}for(let t=0;t<3;++t)!function(e,t,r){for(var n,i=0;i<64;++i){t[r+i]=s.DataUtils.toHalfFloat((n=e[i])<=1?Math.sign(n)*Math.pow(Math.abs(n),2.2):Math.sign(n)*Math.pow(9.025013291561939,Math.abs(n)-1))}}(A[t],v[t],64*e)}let a=0;for(let n=0;n<3;++n){let i=r[e.idx[n]].type;for(let e=8*t;e<8*t+y;++e){a=E[n][e];for(let t=0;t<u;++t){let r=64*t+(7&e)*8;o.setUint16(a+0*i,v[n][r+0],!0),o.setUint16(a+2*i,v[n][r+1],!0),o.setUint16(a+4*i,v[n][r+2],!0),o.setUint16(a+6*i,v[n][r+3],!0),o.setUint16(a+8*i,v[n][r+4],!0),o.setUint16(a+10*i,v[n][r+5],!0),o.setUint16(a+12*i,v[n][r+6],!0),o.setUint16(a+14*i,v[n][r+7],!0),a+=16*i}}if(u!=d)for(let e=8*t;e<8*t+y;++e){let t=E[n][e]+8*u*2*i,r=64*u+(7&e)*8;for(let e=0;e<S;++e)o.setUint16(t+2*e*i,v[n][r+e],!0)}}}for(var x=new Uint16Array(l),o=new DataView(a.buffer),D=0;D<3;++D){r[e.idx[D]].decoded=!0;var O=r[e.idx[D]].type;if(2==r[D].type)for(var N=0;N<c;++N){let e=E[D][N];for(var L=0;L<l;++L)x[L]=o.getUint16(e+2*L*O,!0);for(var L=0;L<l;++L)o.setFloat32(e+2*L*O,M(x[L]),!0)}}}(T,L,p,R,x,n);for(var A=0;A<p.length;++A){var _=p[A];if(!_.decoded)if(2===_.compression)for(var U=0,k=0,F=0;F<e.lines;++F){for(var j=L[A][U],J=0;J<_.width;++J){for(var z=0;z<2*_.type;++z)n[j++]=O[k+z*_.width*_.height];k++}U++}else throw"EXRLoader.parse: unsupported channel compression"}return new DataView(n.buffer)}function y(e,t){for(var r=new Uint8Array(e),n=0;0!=r[t.value+n];)n+=1;var i=new TextDecoder().decode(r.slice(t.value,t.value+n));return t.value=t.value+n+1,i}function S(e,t){var r=e.getInt32(t.value,!0);return t.value=t.value+4,r}function R(e,t){var r=e.getUint32(t.value,!0);return t.value=t.value+4,r}function b(e,t){var r=e[t.value];return t.value=t.value+1,r}function B(e,t){var r=e.getUint8(t.value);return t.value=t.value+1,r}let I=function(e,t){let r;return r="getBigInt64"in DataView.prototype?Number(e.getBigInt64(t.value,!0)):e.getUint32(t.value+4,!0)+Number(e.getUint32(t.value,!0)<<32),t.value+=8,r};function w(e,t){var r=e.getFloat32(t.value,!0);return t.value+=4,r}function x(e,t){return s.DataUtils.toHalfFloat(w(e,t))}function M(e){var t=(31744&e)>>10,r=1023&e;return(e>>15?-1:1)*(t?31===t?r?NaN:1/0:Math.pow(2,t-15)*(1+r/1024):r/1024*6103515625e-14)}function D(e,t){var r=e.getUint16(t.value,!0);return t.value+=2,r}function O(e,t){return M(D(e,t))}let N=new DataView(e),L=new Uint8Array(e),F={value:0},P=function(e,t,r){let n={};if(0x1312f76!=e.getUint32(0,!0))throw"THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";n.version=e.getUint8(4);let i=e.getUint8(5);n.spec={singleTile:!!(2&i),longName:!!(4&i),deepFormat:!!(8&i),multiPart:!!(16&i)},r.value=8;for(var a=!0;a;){var o=y(t,r);if(0==o)a=!1;else{var s=y(t,r),l=R(e,r),c=function(e,t,r,n,i){var a,o,s,l,c,u,d;if("string"===n||"stringvector"===n||"iccProfile"===n)return a=new TextDecoder().decode(new Uint8Array(t).slice(r.value,r.value+i)),r.value=r.value+i,a;if("chlist"===n)return function(e,t,r,n){for(var i=r.value,a=[];r.value<i+n-1;){var o=y(t,r),s=S(e,r),l=B(e,r);r.value+=3;var c=S(e,r),u=S(e,r);a.push({name:o,pixelType:s,pLinear:l,xSampling:c,ySampling:u})}return r.value+=1,a}(e,t,r,i);if("chromaticities"===n)return o=w(e,r),s=w(e,r),l=w(e,r),c=w(e,r),u=w(e,r),{redX:o,redY:s,greenX:l,greenY:c,blueX:u,blueY:w(e,r),whiteX:w(e,r),whiteY:w(e,r)};if("compression"===n)return["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"][B(e,r)];if("box2i"===n)return d=R(e,r),{xMin:d,yMin:R(e,r),xMax:R(e,r),yMax:R(e,r)};else if("lineOrder"===n)return["INCREASING_Y"][B(e,r)];else if("float"===n)return w(e,r);else if("v2f"===n)return[w(e,r),w(e,r)];else if("v3f"===n)return[w(e,r),w(e,r),w(e,r)];else if("int"===n)return S(e,r);else if("rational"===n)return[S(e,r),R(e,r)];else if("timecode"===n)return[R(e,r),R(e,r)];else return"preview"===n?(r.value+=i,"skipped"):(r.value+=i,void 0)}(e,t,r,s,l);void 0===c?console.warn(`EXRLoader.parse: skipped unknown header attribute type '${s}'.`):n[o]=c}}if((-5&i)!=0)throw console.error("EXRHeader:",n),"THREE.EXRLoader: provided file is currently unsupported.";return n}(N,e,F),H=function(e,t,r,n,i){let a={size:0,viewer:t,array:r,offset:n,width:e.dataWindow.xMax-e.dataWindow.xMin+1,height:e.dataWindow.yMax-e.dataWindow.yMin+1,channels:e.channels.length,bytesPerLine:null,lines:null,inputSize:null,type:e.channels[0].pixelType,uncompress:null,getter:null,format:null,[U?"colorSpace":"encoding"]:null};switch(e.compression){case"NO_COMPRESSION":a.lines=1,a.uncompress=A;break;case"RLE_COMPRESSION":a.lines=1,a.uncompress=_;break;case"ZIPS_COMPRESSION":a.lines=1,a.uncompress=v;break;case"ZIP_COMPRESSION":a.lines=16,a.uncompress=v;break;case"PIZ_COMPRESSION":a.lines=32,a.uncompress=E;break;case"PXR24_COMPRESSION":a.lines=16,a.uncompress=T;break;case"DWAA_COMPRESSION":a.lines=32,a.uncompress=C;break;case"DWAB_COMPRESSION":a.lines=256,a.uncompress=C;break;default:throw"EXRLoader.parse: "+e.compression+" is unsupported"}if(a.scanlineBlockSize=a.lines,1==a.type)switch(i){case s.FloatType:a.getter=O,a.inputSize=2;break;case s.HalfFloatType:a.getter=D,a.inputSize=2}else if(2==a.type)switch(i){case s.FloatType:a.getter=w,a.inputSize=4;break;case s.HalfFloatType:a.getter=x,a.inputSize=4}else throw"EXRLoader.parse: unsupported pixelType "+a.type+" for "+e.compression+".";a.blockCount=(e.dataWindow.yMax+1)/a.scanlineBlockSize;for(var o=0;o<a.blockCount;o++)I(t,n);a.outputChannels=3==a.channels?4:a.channels;let l=a.width*a.height*a.outputChannels;switch(i){case s.FloatType:a.byteArray=new Float32Array(l),a.channels<a.outputChannels&&a.byteArray.fill(1,0,l);break;case s.HalfFloatType:a.byteArray=new Uint16Array(l),a.channels<a.outputChannels&&a.byteArray.fill(15360,0,l);break;default:console.error("THREE.EXRLoader: unsupported type: ",i)}return a.bytesPerLine=a.width*a.inputSize*a.channels,4==a.outputChannels?a.format=s.RGBAFormat:a.format=s.RedFormat,U?a.colorSpace="srgb-linear":a.encoding=3e3,a}(P,N,L,F,this.type),k={value:0},j={R:0,G:1,B:2,A:3,Y:0};for(let e=0;e<H.height/H.scanlineBlockSize;e++){let t=R(N,F);H.size=R(N,F),H.lines=t+H.scanlineBlockSize>H.height?H.height-t:H.scanlineBlockSize;let r=H.size<H.lines*H.bytesPerLine?H.uncompress(H):A(H);F.value+=H.size;for(let t=0;t<H.scanlineBlockSize;t++){let n=t+e*H.scanlineBlockSize;if(n>=H.height)break;for(let e=0;e<H.channels;e++){let i=j[P.channels[e].name];for(let a=0;a<H.width;a++){k.value=(t*(H.channels*H.width)+e*H.width+a)*H.inputSize;let o=(H.height-1-n)*(H.width*H.outputChannels)+a*H.outputChannels+i;H.byteArray[o]=H.getter(r,k)}}}}return{header:P,width:H.width,height:H.height,data:H.byteArray,format:H.format,[U?"colorSpace":"encoding"]:H[U?"colorSpace":"encoding"],type:this.type}}setDataType(e){return this.type=e,this}load(e,t,r,n){return super.load(e,function(e,r){U?e.colorSpace=r.colorSpace:e.encoding=r.encoding,e.minFilter=s.LinearFilter,e.magFilter=s.LinearFilter,e.generateMipmaps=!1,e.flipY=!1,t&&t(e,r)},r,n)}}let j=(e,t,r)=>{let n;switch(e){case s.UnsignedByteType:n=new Uint8ClampedArray(t*r*4);break;case s.HalfFloatType:n=new Uint16Array(t*r*4);break;case s.UnsignedIntType:n=new Uint32Array(t*r*4);break;case s.ByteType:n=new Int8Array(t*r*4);break;case s.ShortType:n=new Int16Array(t*r*4);break;case s.IntType:n=new Int32Array(t*r*4);break;case s.FloatType:n=new Float32Array(t*r*4);break;default:throw Error("Unsupported data type")}return n};class J{_renderer;_rendererIsDisposable=!1;_material;_scene;_camera;_quad;_renderTarget;_width;_height;_type;_colorSpace;_supportsReadPixels=!0;constructor(e){this._width=e.width,this._height=e.height,this._type=e.type,this._colorSpace=e.colorSpace;let t={format:s.RGBAFormat,depthBuffer:!1,stencilBuffer:!1,type:this._type,colorSpace:this._colorSpace,anisotropy:e.renderTargetOptions?.anisotropy!==void 0?e.renderTargetOptions?.anisotropy:1,generateMipmaps:e.renderTargetOptions?.generateMipmaps!==void 0&&e.renderTargetOptions?.generateMipmaps,magFilter:e.renderTargetOptions?.magFilter!==void 0?e.renderTargetOptions?.magFilter:s.LinearFilter,minFilter:e.renderTargetOptions?.minFilter!==void 0?e.renderTargetOptions?.minFilter:s.LinearFilter,samples:e.renderTargetOptions?.samples!==void 0?e.renderTargetOptions?.samples:void 0,wrapS:e.renderTargetOptions?.wrapS!==void 0?e.renderTargetOptions?.wrapS:s.ClampToEdgeWrapping,wrapT:e.renderTargetOptions?.wrapT!==void 0?e.renderTargetOptions?.wrapT:s.ClampToEdgeWrapping};if(this._material=e.material,e.renderer?this._renderer=e.renderer:(this._renderer=J.instantiateRenderer(),this._rendererIsDisposable=!0),this._scene=new s.Scene,this._camera=new s.OrthographicCamera,this._camera.position.set(0,0,10),this._camera.left=-.5,this._camera.right=.5,this._camera.top=.5,this._camera.bottom=-.5,this._camera.updateProjectionMatrix(),!((e,t,r,i)=>{if(void 0!==n)return n;let a=new s.WebGLRenderTarget(1,1,i);t.setRenderTarget(a);let o=new s.Mesh(new s.PlaneGeometry,new s.MeshBasicMaterial({color:0xffffff}));t.render(o,r),t.setRenderTarget(null);let l=j(e,a.width,a.height);return t.readRenderTargetPixels(a,0,0,a.width,a.height,l),a.dispose(),o.geometry.dispose(),o.material.dispose(),n=0!==l[0]})(this._type,this._renderer,this._camera,t)){let e;this._type===s.HalfFloatType&&(e=this._renderer.extensions.has("EXT_color_buffer_float")?s.FloatType:void 0),void 0!==e?(console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${s.FloatType}`),this._type=e):(this._supportsReadPixels=!1,console.warn("This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown"))}this._quad=new s.Mesh(new s.PlaneGeometry,this._material),this._quad.geometry.computeBoundingBox(),this._scene.add(this._quad),this._renderTarget=new s.WebGLRenderTarget(this.width,this.height,t),this._renderTarget.texture.mapping=e.renderTargetOptions?.mapping!==void 0?e.renderTargetOptions?.mapping:s.UVMapping}static instantiateRenderer(){let e=new s.WebGLRenderer;return e.setSize(128,128),e}render=()=>{this._renderer.setRenderTarget(this._renderTarget);try{this._renderer.render(this._scene,this._camera)}catch(e){throw this._renderer.setRenderTarget(null),e}this._renderer.setRenderTarget(null)};toArray(){if(!this._supportsReadPixels)throw Error("Can't read pixels in this browser");let e=j(this._type,this._width,this._height);return this._renderer.readRenderTargetPixels(this._renderTarget,0,0,this._width,this._height,e),e}toDataTexture(e){let t=new s.DataTexture(this.toArray(),this.width,this.height,s.RGBAFormat,this._type,e?.mapping||s.UVMapping,e?.wrapS||s.ClampToEdgeWrapping,e?.wrapT||s.ClampToEdgeWrapping,e?.magFilter||s.LinearFilter,e?.minFilter||s.LinearFilter,e?.anisotropy||1,s.LinearSRGBColorSpace);return t.generateMipmaps=e?.generateMipmaps!==void 0&&e?.generateMipmaps,t}disposeOnDemandRenderer(){this._renderer.setRenderTarget(null),this._rendererIsDisposable&&(this._renderer.dispose(),this._renderer.forceContextLoss())}dispose(e){this.disposeOnDemandRenderer(),e&&this.renderTarget.dispose(),this.material instanceof s.ShaderMaterial&&Object.values(this.material.uniforms).forEach(e=>{e.value instanceof s.Texture&&e.value.dispose()}),Object.values(this.material).forEach(e=>{e instanceof s.Texture&&e.dispose()}),this.material.dispose(),this._quad.geometry.dispose()}get width(){return this._width}set width(e){this._width=e,this._renderTarget.setSize(this._width,this._height)}get height(){return this._height}set height(e){this._height=e,this._renderTarget.setSize(this._width,this._height)}get renderer(){return this._renderer}get renderTarget(){return this._renderTarget}set renderTarget(e){this._renderTarget=e,this._width=e.width,this._height=e.height}get material(){return this._material}get type(){return this._type}get colorSpace(){return this._colorSpace}}new Uint8Array(4);let z=e=>{let t=new DataView(e.buffer,e.byteOffset,e.byteLength),r=0,n=()=>{let e=t.getUint16(r);return r+=2,e},i=()=>{let e=t.getUint32(r);return r+=4,e},a=n();if(0!==a)throw Error(`Unsupported ISO 21496-1 minimum_version ${a}`);n();let o=t.getUint8(r++);if(4&o)throw Error("ISO 21496-1 metadata with HDR base image is not supported");let s=128&o?3:1,l=8&o?i():void 0,c=e=>{let n=e?(()=>{let e=t.getInt32(r);return r+=4,e})():i(),a=l??i();if(0===a)throw Error("Invalid ISO 21496-1 fraction with zero denominator");return n/a},u=c(!1),d=c(!1);if(u>d)throw Error("ISO 21496-1 metadata with HDR base image is not supported");let h=[],m=[],f=[],p=[],g=[];for(let e=0;e<s;e++)h.push(c(!0)),m.push(c(!0)),f.push(c(!1)),p.push(c(!0)),g.push(c(!0));let A=e=>3===s?e:[e[0],e[0],e[0]];return{gainMapMin:A(h),gainMapMax:A(m),gamma:A(f),offsetSdr:A(p),offsetHdr:A(g),hdrCapacityMin:u,hdrCapacityMax:d}};class K extends Error{}class X extends Error{}let W=Array.from("urn:iso:std:iso:ts:21496:-1\0",e=>e.charCodeAt(0)),Y=(e,t,r)=>{let n=RegExp(`${t}="([^"]*)"`,"i").exec(e);if(n)return n[1];let i=RegExp(`<${t}[^>]*>([\\s\\S]*?)</${t}>`,"i").exec(e);if(i){let e=i[1].match(/<rdf:li>([^<]*)<\/rdf:li>/g);return e&&3===e.length?e.map(e=>e.replace(/<\/?rdf:li>/g,"")):i[1].trim()}if(void 0!==r)return r;throw Error(`Can't find ${t} in gainmap metadata`)};class V{options;constructor(e){this.options={debug:!!e&&void 0!==e.debug&&e.debug,extractFII:!e||void 0===e.extractFII||e.extractFII,extractNonFII:!e||void 0===e.extractNonFII||e.extractNonFII}}extract(e){return new Promise((t,r)=>{let n,i=this.options.debug,a=new DataView(e.buffer);if(65496!==a.getUint16(0))return void r(Error("Not a valid jpeg"));let o=a.byteLength,s=2,l=0;for(;s<o;){if(++l>250)return void r(Error(`Found no marker after ${l} loops 😵`));if(255!==a.getUint8(s))return void r(Error(`Not a valid marker at offset 0x${s.toString(16)}, found: 0x${a.getUint8(s).toString(16)}`));if(n=a.getUint8(s+1),i&&console.log(`Marker: ${n.toString(16)}`),226===n){i&&console.log("Found APP2 marker (0xffe2)");let e=s+4;if(0x4d504600===a.getUint32(e)){let n,i=e+4;if(18761===a.getUint16(i))n=!1;else{if(19789!==a.getUint16(i))return void r(Error("No valid endianness marker found in TIFF header"));n=!0}if(42!==a.getUint16(i+2,!n))return void r(Error("Not valid TIFF data! (no 0x002A marker)"));let o=a.getUint32(i+4,!n);if(o<8)return void r(Error("Not valid TIFF data! (First offset less than 8)"));let s=i+o,l=a.getUint16(s,!n),c=s+2,u=0;for(let e=c;e<c+12*l;e+=12)45057===a.getUint16(e,!n)&&(u=a.getUint32(e+8,!n));let d=s+2+12*l+4,h=[];for(let e=d;e<d+16*u;e+=16){let t={MPType:a.getUint32(e,!n),size:a.getUint32(e+4,!n),dataOffset:a.getUint32(e+8,!n),dependantImages:a.getUint32(e+12,!n),start:-1,end:-1,isFII:!1};t.dataOffset?(t.start=i+t.dataOffset,t.isFII=!1):(t.start=0,t.isFII=!0),t.end=t.start+t.size,h.push(t)}if(this.options.extractNonFII&&h.length){let e=new Blob([a]),r=[];for(let t of h){if(t.isFII&&!this.options.extractFII)continue;let n=e.slice(t.start,t.end+1,"image/jpeg");r.push(n)}t(r)}}}s+=2+a.getUint16(s+2)}})}}let Q=async e=>{let t=(e=>{let t=new DataView(e.buffer,e.byteOffset,e.byteLength),r=4+W.length;for(let n=0;n+r<e.length;n++){if(255!==e[n]||226!==e[n+1]||!W.every((t,r)=>e[n+4+r]===t))continue;let i=Math.min(e.length,n+2+t.getUint16(n+2));if(!(i-(n+r)<=4))try{return z(e.subarray(n+r,i))}catch(e){return}}})(e)??(e=>{let t,r=(t="undefined"!=typeof TextDecoder?new TextDecoder().decode(e):e.toString()).indexOf("<x:xmpmeta");for(;-1!==r;){let e=t.indexOf("x:xmpmeta>",r),n=t.slice(r,e+10);try{let e=Y(n,"hdrgm:GainMapMin","0"),t=Y(n,"hdrgm:GainMapMax"),r=Y(n,"hdrgm:Gamma","1"),i=Y(n,"hdrgm:OffsetSDR","0.015625"),a=Y(n,"hdrgm:OffsetHDR","0.015625"),o=/hdrgm:HDRCapacityMin="([^"]*)"/.exec(n),s=o?o[1]:"0",l=/hdrgm:HDRCapacityMax="([^"]*)"/.exec(n);if(!l)throw Error("Incomplete gainmap metadata");let c=l[1];return{gainMapMin:Array.isArray(e)?e.map(e=>parseFloat(e)):[parseFloat(e),parseFloat(e),parseFloat(e)],gainMapMax:Array.isArray(t)?t.map(e=>parseFloat(e)):[parseFloat(t),parseFloat(t),parseFloat(t)],gamma:Array.isArray(r)?r.map(e=>parseFloat(e)):[parseFloat(r),parseFloat(r),parseFloat(r)],offsetSdr:Array.isArray(i)?i.map(e=>parseFloat(e)):[parseFloat(i),parseFloat(i),parseFloat(i)],offsetHdr:Array.isArray(a)?a.map(e=>parseFloat(e)):[parseFloat(a),parseFloat(a),parseFloat(a)],hdrCapacityMin:parseFloat(s),hdrCapacityMax:parseFloat(c)}}catch(e){}r=t.indexOf("<x:xmpmeta",e)}})(e);if(!t)throw new X("Gain map XMP metadata not found");let r=new V({extractFII:!0,extractNonFII:!0}),n=await r.extract(e);if(2!==n.length)throw new K("Gain map recovery image not found");return{sdr:new Uint8Array(await n[0].arrayBuffer()),gainMap:new Uint8Array(await n[1].arrayBuffer()),metadata:t}},Z=e=>new Promise((t,r)=>{let n=document.createElement("img");n.onload=()=>{t(n)},n.onerror=e=>{r(e)},n.src=URL.createObjectURL(e)}),q=async(e,t,r)=>{let n,i,a=t?new Blob([t],{type:"image/jpeg"}):void 0,o=new Blob([e],{type:"image/jpeg"}),s=!1;if("undefined"==typeof createImageBitmap){let e=await Promise.all([a?Z(a):Promise.resolve(void 0),Z(o)]);i=e[0],n=e[1],s="flipY"===r}else{let e=await Promise.all([a?createImageBitmap(a,{imageOrientation:r||"flipY"}):Promise.resolve(void 0),createImageBitmap(o,{imageOrientation:r||"flipY"})]);i=e[0],n=e[1]}return{sdrImage:n,gainMapImage:i,needsFlip:s}};class $ extends s.Loader{_renderer;_renderTargetOptions;_internalLoadingManager;_config;constructor(e,t){super(t),this._config=e,e.renderer&&(this._renderer=e.renderer),this._internalLoadingManager=new s.LoadingManager}setRenderer(e){return this._renderer=e,this}setRenderTargetOptions(e){return this._renderTargetOptions=e,this}prepareQuadRenderer(){this._renderer||console.warn("WARNING: A Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.");let e=this._config.createMaterial({gainMapMax:[1,1,1],gainMapMin:[0,0,0],gamma:[1,1,1],offsetHdr:[1,1,1],offsetSdr:[1,1,1],hdrCapacityMax:1,hdrCapacityMin:0,maxDisplayBoost:1,gainMap:new s.Texture,sdr:new s.Texture});return this._config.createQuadRenderer({width:16,height:16,type:s.HalfFloatType,colorSpace:s.LinearSRGBColorSpace,material:e,renderer:this._renderer,renderTargetOptions:this._renderTargetOptions})}processImages(e,t,r){return q(e,t,r)}createTextures(e,t,r){let n=new s.Texture(t||new ImageData(2,2),s.UVMapping,s.ClampToEdgeWrapping,s.ClampToEdgeWrapping,s.LinearFilter,s.LinearMipMapLinearFilter,s.RGBAFormat,s.UnsignedByteType,1,s.LinearSRGBColorSpace);n.flipY=r,n.needsUpdate=!0;let i=new s.Texture(e,s.UVMapping,s.ClampToEdgeWrapping,s.ClampToEdgeWrapping,s.LinearFilter,s.LinearMipMapLinearFilter,s.RGBAFormat,s.UnsignedByteType,1,s.SRGBColorSpace);return i.flipY=r,i.needsUpdate=!0,{gainMap:n,sdr:i}}updateQuadRenderer(e,t,r,n,i){e.width=t.width,e.height=t.height,e.material.gainMap=r,e.material.sdr=n,e.material.gainMapMin=i.gainMapMin,e.material.gainMapMax=i.gainMapMax,e.material.offsetHdr=i.offsetHdr,e.material.offsetSdr=i.offsetSdr,e.material.gamma=i.gamma,e.material.hdrCapacityMin=i.hdrCapacityMin,e.material.hdrCapacityMax=i.hdrCapacityMax,e.material.maxDisplayBoost=Math.pow(2,i.hdrCapacityMax),e.material.needsUpdate=!0}}let ee=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,et=`
// min half float value
#define HALF_FLOAT_MIN vec3( -65504, -65504, -65504 )
// max half float value
#define HALF_FLOAT_MAX vec3( 65504, 65504, 65504 )

uniform sampler2D sdr;
uniform sampler2D gainMap;
uniform vec3 gamma;
uniform vec3 offsetHdr;
uniform vec3 offsetSdr;
uniform vec3 gainMapMin;
uniform vec3 gainMapMax;
uniform float weightFactor;

varying vec2 vUv;

void main() {
  vec3 rgb = texture2D( sdr, vUv ).rgb;
  vec3 recovery = texture2D( gainMap, vUv ).rgb;
  vec3 logRecovery = pow( recovery, gamma );
  vec3 logBoost = gainMapMin * ( 1.0 - logRecovery ) + gainMapMax * logRecovery;
  vec3 hdrColor = (rgb + offsetSdr) * exp2( logBoost * weightFactor ) - offsetHdr;
  vec3 clampedHdrColor = max( HALF_FLOAT_MIN, min( HALF_FLOAT_MAX, hdrColor ));
  gl_FragColor = vec4( clampedHdrColor , 1.0 );
}
`;class er extends s.ShaderMaterial{_maxDisplayBoost;_hdrCapacityMin;_hdrCapacityMax;constructor({gamma:e,offsetHdr:t,offsetSdr:r,gainMapMin:n,gainMapMax:i,maxDisplayBoost:a,hdrCapacityMin:o,hdrCapacityMax:l,sdr:c,gainMap:u}){super({name:"GainMapDecoderMaterial",vertexShader:ee,fragmentShader:et,uniforms:{sdr:{value:c},gainMap:{value:u},gamma:{value:new s.Vector3(1/e[0],1/e[1],1/e[2])},offsetHdr:{value:new s.Vector3().fromArray(t)},offsetSdr:{value:new s.Vector3().fromArray(r)},gainMapMin:{value:new s.Vector3().fromArray(n)},gainMapMax:{value:new s.Vector3().fromArray(i)},weightFactor:{value:(Math.log2(a)-o)/(l-o)}},blending:s.NoBlending,depthTest:!1,depthWrite:!1}),this._maxDisplayBoost=a,this._hdrCapacityMin=o,this._hdrCapacityMax=l,this.needsUpdate=!0,this.uniformsNeedUpdate=!0}get sdr(){return this.uniforms.sdr.value}set sdr(e){this.uniforms.sdr.value=e}get gainMap(){return this.uniforms.gainMap.value}set gainMap(e){this.uniforms.gainMap.value=e}get offsetHdr(){return this.uniforms.offsetHdr.value.toArray()}set offsetHdr(e){this.uniforms.offsetHdr.value.fromArray(e)}get offsetSdr(){return this.uniforms.offsetSdr.value.toArray()}set offsetSdr(e){this.uniforms.offsetSdr.value.fromArray(e)}get gainMapMin(){return this.uniforms.gainMapMin.value.toArray()}set gainMapMin(e){this.uniforms.gainMapMin.value.fromArray(e)}get gainMapMax(){return this.uniforms.gainMapMax.value.toArray()}set gainMapMax(e){this.uniforms.gainMapMax.value.fromArray(e)}get gamma(){let e=this.uniforms.gamma.value;return[1/e.x,1/e.y,1/e.z]}set gamma(e){let t=this.uniforms.gamma.value;t.x=1/e[0],t.y=1/e[1],t.z=1/e[2]}get hdrCapacityMin(){return this._hdrCapacityMin}set hdrCapacityMin(e){this._hdrCapacityMin=e,this.calculateWeight()}get hdrCapacityMax(){return this._hdrCapacityMax}set hdrCapacityMax(e){this._hdrCapacityMax=e,this.calculateWeight()}get maxDisplayBoost(){return this._maxDisplayBoost}set maxDisplayBoost(e){this._maxDisplayBoost=Math.max(1,Math.min(65504,e)),this.calculateWeight()}calculateWeight(){let e=(Math.log2(this._maxDisplayBoost)-this._hdrCapacityMin)/(this._hdrCapacityMax-this._hdrCapacityMin);this.uniforms.weightFactor.value=Math.max(0,Math.min(1,e))}}!s.WebGLRenderer;class en extends ${constructor(e,t){super({renderer:e,createMaterial:e=>new er(e),createQuadRenderer:e=>new J(e)},t)}async render(e,t,r,n){let{sdrImage:i,gainMapImage:a,needsFlip:o}=await this.processImages(r,n,"flipY"),{gainMap:s,sdr:l}=this.createTextures(i,a,o);this.updateQuadRenderer(e,i,s,l,t),e.render()}}class ei extends en{load([e,t,r],n,i,a){let o,l,c,u=this.prepareQuadRenderer(),d=async()=>{if(o&&l&&c){try{await this.render(u,c,o,l)}catch(n){this.manager.itemError(e),this.manager.itemError(t),this.manager.itemError(r),"function"==typeof a&&a(n),u.disposeOnDemandRenderer();return}"function"==typeof n&&n(u),this.manager.itemEnd(e),this.manager.itemEnd(t),this.manager.itemEnd(r),u.disposeOnDemandRenderer()}},h=!0,m=0,f=0,p=!0,g=0,A=0,_=!0,v=0,E=0,T=()=>{"function"==typeof i&&i(new ProgressEvent("progress",{lengthComputable:h&&p&&_,loaded:f+A+E,total:m+g+v}))};this.manager.itemStart(e),this.manager.itemStart(t),this.manager.itemStart(r);let C=new s.FileLoader(this._internalLoadingManager);C.setResponseType("arraybuffer"),C.setRequestHeader(this.requestHeader),C.setPath(this.path),C.setWithCredentials(this.withCredentials),C.load(e,async e=>{if("string"==typeof e)throw Error("Invalid sdr buffer");o=e,await d()},e=>{h=e.lengthComputable,f=e.loaded,m=e.total,T()},t=>{this.manager.itemError(e),"function"==typeof a&&a(t)});let y=new s.FileLoader(this._internalLoadingManager);y.setResponseType("arraybuffer"),y.setRequestHeader(this.requestHeader),y.setPath(this.path),y.setWithCredentials(this.withCredentials),y.load(t,async e=>{if("string"==typeof e)throw Error("Invalid gainmap buffer");l=e,await d()},e=>{p=e.lengthComputable,A=e.loaded,g=e.total,T()},e=>{this.manager.itemError(t),"function"==typeof a&&a(e)});let S=new s.FileLoader(this._internalLoadingManager);return S.setRequestHeader(this.requestHeader),S.setPath(this.path),S.setWithCredentials(this.withCredentials),S.load(r,async e=>{if("string"!=typeof e)throw Error("Invalid metadata string");c=JSON.parse(e),await d()},e=>{_=e.lengthComputable,E=e.loaded,v=e.total,T()},e=>{this.manager.itemError(r),"function"==typeof a&&a(e)}),u}}class ea extends en{load(e,t,r,n){let i=this.prepareQuadRenderer(),a=new s.FileLoader(this._internalLoadingManager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),this.manager.itemStart(e),a.load(e,async r=>{let a,o,s;if("string"==typeof r)throw Error("Invalid buffer, received [string], was expecting [ArrayBuffer]");let l=new Uint8Array(r);try{let e=await Q(l);a=e.sdr,o=e.gainMap,s=e.metadata}catch(t){if(t instanceof X||t instanceof K)console.warn(`Failure to reconstruct an HDR image from ${e}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`),s={gainMapMin:[0,0,0],gainMapMax:[1,1,1],gamma:[1,1,1],hdrCapacityMin:0,hdrCapacityMax:1,offsetHdr:[0,0,0],offsetSdr:[0,0,0]},a=l;else throw t}try{await this.render(i,s,a.buffer,o?.buffer)}catch(t){this.manager.itemError(e),"function"==typeof n&&n(t),i.disposeOnDemandRenderer();return}"function"==typeof t&&t(i),this.manager.itemEnd(e),i.disposeOnDemandRenderer()},r,t=>{this.manager.itemError(e),"function"==typeof n&&n(t)}),i}}let eo={apartment:"lebombo_1k.hdr",city:"potsdamer_platz_1k.hdr",dawn:"kiara_1_dawn_1k.hdr",forest:"forest_slope_1k.hdr",lobby:"st_fagans_interior_1k.hdr",night:"dikhololo_night_1k.hdr",park:"rooitou_park_1k.hdr",studio:"studio_small_03_1k.hdr",sunset:"venice_sunset_1k.hdr",warehouse:"empty_warehouse_01_1k.hdr"},es="https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/",el=e=>Array.isArray(e),ec=["/px.png","/nx.png","/py.png","/ny.png","/pz.png","/nz.png"];function eu({files:e=ec,path:t="",preset:r,colorSpace:n,extensions:i}={}){r&&(em(r),e=eo[r],t=es);let l=el(e),{extension:c,isCubemap:u}=ef(e),d=ep(c);if(!d)throw Error("useEnvironment: Unrecognized file extension: "+e);let h=(0,o.C)(e=>e.gl);(0,a.useLayoutEffect)(()=>{("webp"===c||"jpg"===c||"jpeg"===c)&&h.domElement.addEventListener("webglcontextlost",function(){o.G.clear(d,l?[e]:e)},{once:!0})},[e,h.domElement]);let m=(0,o.G)(d,l?[e]:e,e=>{("webp"===c||"jpg"===c||"jpeg"===c)&&e.setRenderer(h),null==e.setPath||e.setPath(t),i&&i(e)}),f=l?m[0]:m;if("jpg"===c||"jpeg"===c||"webp"===c){var p;f=null==(p=f.renderTarget)?void 0:p.texture}return f.mapping=u?s.CubeReflectionMapping:s.EquirectangularReflectionMapping,f.colorSpace=null!=n?n:u?"srgb":"srgb-linear",f}let ed={files:ec,path:"",preset:void 0,extensions:void 0};eu.preload=e=>{let t={...ed,...e},{files:r,path:n=""}=t,{preset:i,extensions:a}=t;i&&(em(i),r=eo[i],n=es);let{extension:s}=ef(r);if("webp"===s||"jpg"===s||"jpeg"===s)throw Error("useEnvironment: Preloading gainmaps is not supported");let l=ep(s);if(!l)throw Error("useEnvironment: Unrecognized file extension: "+r);o.G.preload(l,el(r)?[r]:r,e=>{null==e.setPath||e.setPath(n),a&&a(e)})};let eh={files:ec,preset:void 0};function em(e){if(!(e in eo))throw Error("Preset must be one of: "+Object.keys(eo).join(", "))}function ef(e){var t;let r=el(e)&&6===e.length,n=el(e)&&3===e.length&&e.some(e=>e.endsWith("json")),i=el(e)?e[0]:e;return{extension:r?"cube":n?"webp":i.startsWith("data:application/exr")?"exr":i.startsWith("data:application/hdr")?"hdr":i.startsWith("data:image/jpeg")?"jpg":null==(t=i.split(".").pop())||null==(t=t.split("?"))||null==(t=t.shift())?void 0:t.toLowerCase(),isCubemap:r,isGainmap:n}}function ep(e){return"cube"===e?s.CubeTextureLoader:"hdr"===e?u:"exr"===e?k:"jpg"===e||"jpeg"===e?ea:"webp"===e?ei:null}function eg(e,t,r,n,i={}){var a,s,l,c;let u,d;i={backgroundBlurriness:0,backgroundIntensity:1,backgroundRotation:[0,0,0],environmentIntensity:1,environmentRotation:[0,0,0],...i};let h=(d=u=t||r).current&&d.current.isScene?u.current:u,m=h.background,f=h.environment,p={backgroundBlurriness:h.backgroundBlurriness,backgroundIntensity:h.backgroundIntensity,backgroundRotation:null!=(a=null==(s=h.backgroundRotation)||null==s.clone?void 0:s.clone())?a:[0,0,0],environmentIntensity:h.environmentIntensity,environmentRotation:null!=(l=null==(c=h.environmentRotation)||null==c.clone?void 0:c.clone())?l:[0,0,0]};return"only"!==e&&(h.environment=n),e&&(h.background=n),(0,o.s)(h,i),()=>{"only"!==e&&(h.environment=f),e&&(h.background=m),(0,o.s)(h,p)}}function eA({scene:e,background:t=!1,map:r,...n}){let i=(0,o.C)(e=>e.scene);return a.useLayoutEffect(()=>{if(r)return eg(t,e,i,r,n)}),null}function e_({background:e=!1,scene:t,blur:r,backgroundBlurriness:n,backgroundIntensity:i,backgroundRotation:s,environmentIntensity:l,environmentRotation:c,...u}){let d=eu(u),h=(0,o.C)(e=>e.scene);return a.useLayoutEffect(()=>eg(e,t,h,d,{backgroundBlurriness:null!=r?r:n,backgroundIntensity:i,backgroundRotation:s,environmentIntensity:l,environmentRotation:c})),a.useEffect(()=>()=>{d.dispose()},[d]),null}function ev({children:e,near:t=.1,far:r=1e3,resolution:n=256,frames:i=1,map:l,background:c=!1,blur:u,backgroundBlurriness:d,backgroundIntensity:h,backgroundRotation:m,environmentIntensity:f,environmentRotation:p,scene:g,files:A,path:_,preset:v,extensions:E}){let T=(0,o.C)(e=>e.gl),C=(0,o.C)(e=>e.scene),y=a.useRef(null),[S]=a.useState(()=>new s.Scene),R=a.useMemo(()=>{let e=new s.WebGLCubeRenderTarget(n);return e.texture.type=s.HalfFloatType,e},[n]);a.useEffect(()=>()=>{R.dispose()},[R]),a.useLayoutEffect(()=>{if(1===i){let e=T.autoClear;T.autoClear=!0,y.current.update(T,S),T.autoClear=e}return eg(c,g,C,R.texture,{backgroundBlurriness:null!=u?u:d,backgroundIntensity:h,backgroundRotation:m,environmentIntensity:f,environmentRotation:p})},[e,S,R.texture,g,C,c,i,T]);let b=1;return(0,o.D)(()=>{if(i===1/0||b<i){let e=T.autoClear;T.autoClear=!0,y.current.update(T,S),T.autoClear=e,b++}}),a.createElement(a.Fragment,null,(0,o.o)(a.createElement(a.Fragment,null,e,a.createElement("cubeCamera",{ref:y,args:[t,r,R]}),A||v?a.createElement(e_,{background:!0,files:A,preset:v,path:_,extensions:E}):l?a.createElement(eA,{background:!0,map:l,extensions:E}):null),S))}function eE(e){var t,r,n,s;let l=eu(e),u=e.map||l;a.useMemo(()=>(0,o.e)({GroundProjectedEnvImpl:c}),[]),a.useEffect(()=>()=>{l.dispose()},[l]);let d=a.useMemo(()=>[u],[u]),h=null==(t=e.ground)?void 0:t.height,m=null==(r=e.ground)?void 0:r.radius,f=null!=(n=null==(s=e.ground)?void 0:s.scale)?n:1e3;return a.createElement(a.Fragment,null,a.createElement(eA,(0,i.A)({},e,{map:u})),a.createElement("groundProjectedEnvImpl",{args:d,scale:f,height:h,radius:m}))}function eT(e){return e.ground?a.createElement(eE,e):e.map?a.createElement(eA,e):e.children?a.createElement(ev,e):a.createElement(e_,e)}eu.clear=e=>{let t={...eh,...e},{files:r}=t,{preset:n}=t;n&&(em(n),r=eo[n]);let{extension:i}=ef(r),a=ep(i);if(!a)throw Error("useEnvironment: Unrecognized file extension: "+r);o.G.clear(a,el(r)?[r]:r)}},1433:(e,t,r)=>{let n;r.d(t,{vm:()=>tv,VO:()=>tA,m5:()=>tC,A8:()=>ty});var i,a,o,s,l,c,u=r(5155),d=r(99),h=r(8381),m=r(3303),f=r(2115),p=r(7548),g=r(6659);let A=`// Reference: https://github.com/mrdoob/three.js/blob/r171/examples/jsm/csm/CSMShader.js

#ifndef SHADOW_CASCADE_COUNT
#error "SHADOW_CASCADE_COUNT macro must be defined."
#endif // SHADOW_CASCADE_COUNT

int getCascadeIndex(
  const mat4 viewMatrix,
  const vec3 worldPosition,
  const vec2 intervals[SHADOW_CASCADE_COUNT],
  const float near,
  const float far
) {
  vec4 viewPosition = viewMatrix * vec4(worldPosition, 1.0);
  float depth = viewZToOrthographicDepth(viewPosition.z, near, far);
  vec2 interval;
  #pragma unroll_loop_start
  for (int i = 0; i < 4; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
    interval = intervals[i];
    if (depth >= interval.x && depth < interval.y) {
      return UNROLLED_LOOP_INDEX;
    }
    #endif // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
  }
  #pragma unroll_loop_end
  return SHADOW_CASCADE_COUNT - 1;
}

int getFadedCascadeIndex(
  const mat4 viewMatrix,
  const vec3 worldPosition,
  const vec2 intervals[SHADOW_CASCADE_COUNT],
  const float near,
  const float far,
  const float jitter
) {
  vec4 viewPosition = viewMatrix * vec4(worldPosition, 1.0);
  float depth = viewZToOrthographicDepth(viewPosition.z, near, far);

  vec2 interval;
  float intervalCenter;
  float closestEdge;
  float margin;
  int nextIndex = -1;
  int prevIndex = -1;
  float alpha;

  #pragma unroll_loop_start
  for (int i = 0; i < 4; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
    interval = intervals[i];
    intervalCenter = (interval.x + interval.y) * 0.5;
    closestEdge = depth < intervalCenter ? interval.x : interval.y;
    margin = closestEdge * closestEdge * 0.5;
    interval += margin * vec2(-0.5, 0.5);

    #if UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT - 1
    if (depth >= interval.x && depth < interval.y) {
      prevIndex = nextIndex;
      nextIndex = UNROLLED_LOOP_INDEX;
      alpha = saturate(min(depth - interval.x, interval.y - depth) / margin);
    }
    #else // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT - 1
    // Don't fade out the last cascade.
    if (depth >= interval.x) {
      prevIndex = nextIndex;
      nextIndex = UNROLLED_LOOP_INDEX;
      alpha = saturate((depth - interval.x) / margin);
    }
    #endif // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT - 1
    #endif // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
  }
  #pragma unroll_loop_end

  return jitter <= alpha
    ? nextIndex
    : prevIndex;
}
`,_=`// cSpell:words logdepthbuf

#ifdef DEPTH_PACKING
float readDepthValue(const sampler2D depthBuffer, const vec2 uv) {
  #if DEPTH_PACKING == 3201
  return unpackRGBAToDepth(texture(depthBuffer, uv));
  #else // DEPTH_PACKING == 3201
  return texture(depthBuffer, uv).r;
  #endif // DEPTH_PACKING == 3201
}
#endif // DEPTH_PACKING

float reverseLogDepth(const float depth, const float near, const float far) {
  #if defined(USE_LOGDEPTHBUF) || defined(USE_LOGARITHMIC_DEPTH_BUFFER)
  float d = pow(2.0, depth * log2(far + 1.0)) - 1.0;
  float a = far / (far - near);
  float b = far * near / (near - far);
  return a + b / d;
  #else // defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(USE_LOGARITHMIC_DEPTH_BUFFER)
  return depth;
  #endif // defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(USE_LOGARITHMIC_DEPTH_BUFFER)
}

float linearizeDepth(const float depth, const float near, const float far) {
  float ndc = depth * 2.0 - 1.0;
  return 2.0 * near * far / (far + near - ndc * (far - near));
}
`,v=`// Reference: https://advances.realtimerendering.com/s2014/index.html#_NEXT_GENERATION_POST

float interleavedGradientNoise(const vec2 coord) {
  const vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
  return fract(magic.z * fract(dot(coord, magic.xy)));
}
`,E=`#if !defined(saturate)
#define saturate(a) clamp(a, 0.0, 1.0)
#endif // !defined(saturate)

float remap(const float x, const float min1, const float max1, const float min2, const float max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

vec2 remap(const vec2 x, const vec2 min1, const vec2 max1, const vec2 min2, const vec2 max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

vec3 remap(const vec3 x, const vec3 min1, const vec3 max1, const vec3 min2, const vec3 max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

vec4 remap(const vec4 x, const vec4 min1, const vec4 max1, const vec4 min2, const vec4 max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

float remapClamped(
  const float x,
  const float min1,
  const float max1,
  const float min2,
  const float max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

vec2 remapClamped(
  const vec2 x,
  const vec2 min1,
  const vec2 max1,
  const vec2 min2,
  const vec2 max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

vec3 remapClamped(
  const vec3 x,
  const vec3 min1,
  const vec3 max1,
  const vec3 min2,
  const vec3 max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

vec4 remapClamped(
  const vec4 x,
  const vec4 min1,
  const vec4 max1,
  const vec4 min2,
  const vec4 max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

// Implicitly remap to 0 and 1
float remap(const float x, const float min1, const float max1) {
  return (x - min1) / (max1 - min1);
}

vec2 remap(const vec2 x, const vec2 min1, const vec2 max1) {
  return (x - min1) / (max1 - min1);
}

vec3 remap(const vec3 x, const vec3 min1, const vec3 max1) {
  return (x - min1) / (max1 - min1);
}

vec4 remap(const vec4 x, const vec4 min1, const vec4 max1) {
  return (x - min1) / (max1 - min1);
}

float remapClamped(const float x, const float min1, const float max1) {
  return saturate((x - min1) / (max1 - min1));
}

vec2 remapClamped(const vec2 x, const vec2 min1, const vec2 max1) {
  return saturate((x - min1) / (max1 - min1));
}

vec3 remapClamped(const vec3 x, const vec3 min1, const vec3 max1) {
  return saturate((x - min1) / (max1 - min1));
}

vec4 remapClamped(const vec4 x, const vec4 min1, const vec4 max1) {
  return saturate((x - min1) / (max1 - min1));
}
`,T=`// Reference: https://jcgt.org/published/0003/02/01/paper.pdf

vec2 signNotZero(vec2 v) {
  return vec2(v.x >= 0.0 ? 1.0 : -1.0, v.y >= 0.0 ? 1.0 : -1.0);
}

vec2 packNormalToVec2(vec3 v) {
  vec2 p = v.xy * (1.0 / (abs(v.x) + abs(v.y) + abs(v.z)));
  return v.z <= 0.0
    ? (1.0 - abs(p.yx)) * signNotZero(p)
    : p;
}

vec3 unpackVec2ToNormal(vec2 e) {
  vec3 v = vec3(e.xy, 1.0 - abs(e.x) - abs(e.y));
  if (v.z < 0.0) {
    v.xy = (1.0 - abs(v.yx)) * signNotZero(v.xy);
  }
  return normalize(v);
}
`,C=`float raySphereFirstIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const float radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  float c = dot(a, a) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  return discriminant < 0.0
    ? -1.0
    : (-b - sqrt(discriminant)) * 0.5;
}

float raySphereFirstIntersection(const vec3 origin, const vec3 direction, const float radius) {
  return raySphereFirstIntersection(origin, direction, vec3(0.0), radius);
}

vec4 raySphereFirstIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const vec4 radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  vec4 c = dot(a, a) - radius * radius;
  vec4 discriminant = b * b - 4.0 * c;
  vec4 mask = step(discriminant, vec4(0.0));
  return mix((-b - sqrt(max(vec4(0.0), discriminant))) * 0.5, vec4(-1.0), mask);
}

vec4 raySphereFirstIntersection(const vec3 origin, const vec3 direction, const vec4 radius) {
  return raySphereFirstIntersection(origin, direction, vec3(0.0), radius);
}

float raySphereSecondIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const float radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  float c = dot(a, a) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  return discriminant < 0.0
    ? -1.0
    : (-b + sqrt(discriminant)) * 0.5;
}

float raySphereSecondIntersection(const vec3 origin, const vec3 direction, const float radius) {
  return raySphereSecondIntersection(origin, direction, vec3(0.0), radius);
}

vec4 raySphereSecondIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const vec4 radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  vec4 c = dot(a, a) - radius * radius;
  vec4 discriminant = b * b - 4.0 * c;
  vec4 mask = step(discriminant, vec4(0.0));
  return mix((-b + sqrt(max(vec4(0.0), discriminant))) * 0.5, vec4(-1.0), mask);
}

vec4 raySphereSecondIntersection(const vec3 origin, const vec3 direction, const vec4 radius) {
  return raySphereSecondIntersection(origin, direction, vec3(0.0), radius);
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const float radius,
  out float intersection1,
  out float intersection2
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  float c = dot(a, a) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  if (discriminant < 0.0) {
    intersection1 = -1.0;
    intersection2 = -1.0;
    return;
  } else {
    float Q = sqrt(discriminant);
    intersection1 = (-b - Q) * 0.5;
    intersection2 = (-b + Q) * 0.5;
  }
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const float radius,
  out float intersection1,
  out float intersection2
) {
  raySphereIntersections(origin, direction, vec3(0.0), radius, intersection1, intersection2);
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const vec4 radius,
  out vec4 intersection1,
  out vec4 intersection2
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  vec4 c = dot(a, a) - radius * radius;
  vec4 discriminant = b * b - 4.0 * c;
  vec4 mask = step(discriminant, vec4(0.0));
  vec4 Q = sqrt(max(vec4(0.0), discriminant));
  intersection1 = mix((-b - Q) * 0.5, vec4(-1.0), mask);
  intersection2 = mix((-b + Q) * 0.5, vec4(-1.0), mask);
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const vec4 radius,
  out vec4 intersection1,
  out vec4 intersection2
) {
  raySphereIntersections(origin, direction, vec3(0.0), radius, intersection1, intersection2);
}
`,y=`vec3 screenToView(
  const vec2 uv,
  const float depth,
  const float viewZ,
  const mat4 projectionMatrix,
  const mat4 inverseProjectionMatrix
) {
  vec4 clip = vec4(vec3(uv, depth) * 2.0 - 1.0, 1.0);
  float clipW = projectionMatrix[2][3] * viewZ + projectionMatrix[3][3];
  clip *= clipW;
  return (inverseProjectionMatrix * clip).xyz;
}
`,S=`// Reference: https://www.gamedev.net/tutorials/programming/graphics/contact-hardening-soft-shadows-made-fast-r4906/

vec2 vogelDisk(const int index, const int sampleCount, const float phi) {
  const float goldenAngle = 2.39996322972865332;
  float r = sqrt(float(index) + 0.5) / sqrt(float(sampleCount));
  float theta = float(index) * goldenAngle + phi;
  return r * vec2(cos(theta), sin(theta));
}
`,R="https://media.githubusercontent.com/media/takram-design-engineering/three-geospatial/eac103980f20c0956f2d3215833e73514be08462/packages/atmosphere/assets/stars.bin",b=new p.Vector3;function B(e,t,r,n){let i=r.projectOnSurface(e,b);return null!=i?r.getOsculatingSphereCenter(i,t,n).negate():n.setScalar(0)}let I="u">typeof window&&null!=window.requestIdleCallback?window.requestIdleCallback:function(e,t={}){let r=t.timeout??1,n=performance.now();return setTimeout(()=>{e({get didTimeout(){return null==t.timeout&&performance.now()-n-1>r},timeRemaining:()=>Math.max(0,1+(performance.now()-n))})},1)},w=`// Based on: https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/functions.glsl

/**
 * Copyright (c) 2017 Eric Bruneton
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Precomputed Atmospheric Scattering
 * Copyright (c) 2008 INRIA
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */

Number ClampCosine(const Number mu) {
  return clamp(mu, Number(-1.0), Number(1.0));
}

Length ClampDistance(const Length d) {
  return max(d, 0.0 * m);
}

Length ClampRadius(const AtmosphereParameters atmosphere, const Length r) {
  return clamp(r, atmosphere.bottom_radius, atmosphere.top_radius);
}

Length SafeSqrt(const Area a) {
  return sqrt(max(a, 0.0 * m2));
}

Length DistanceToTopAtmosphereBoundary(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  Area discriminant = r * r * (mu * mu - 1.0) +
      atmosphere.top_radius * atmosphere.top_radius;
  return ClampDistance(-r * mu + SafeSqrt(discriminant));
}

Length DistanceToBottomAtmosphereBoundary(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  Area discriminant = r * r * (mu * mu - 1.0) +
      atmosphere.bottom_radius * atmosphere.bottom_radius;
  return ClampDistance(-r * mu - SafeSqrt(discriminant));
}

bool RayIntersectsGround(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  return mu < 0.0 && r * r * (mu * mu - 1.0) +
      atmosphere.bottom_radius * atmosphere.bottom_radius >= 0.0 * m2;
}

Number GetTextureCoordFromUnitRange(const Number x, const int texture_size) {
  return 0.5 / Number(texture_size) + x * (1.0 - 1.0 / Number(texture_size));
}

vec2 GetTransmittanceTextureUvFromRMu(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  // Distance to top atmosphere boundary for a horizontal ray at ground level.
  Length H = sqrt(atmosphere.top_radius * atmosphere.top_radius -
      atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the horizon.
  Length rho =
      SafeSqrt(r * r - atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the top atmosphere boundary for the ray (r,mu), and its minimum
  // and maximum values over all mu - obtained for (r,1) and (r,mu_horizon).
  Length d = DistanceToTopAtmosphereBoundary(atmosphere, r, mu);
  Length d_min = atmosphere.top_radius - r;
  Length d_max = rho + H;
  Number x_mu = (d - d_min) / (d_max - d_min);
  Number x_r = rho / H;
  return vec2(GetTextureCoordFromUnitRange(x_mu, TRANSMITTANCE_TEXTURE_WIDTH),
              GetTextureCoordFromUnitRange(x_r, TRANSMITTANCE_TEXTURE_HEIGHT));
}

DimensionlessSpectrum GetTransmittanceToTopAtmosphereBoundary(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  vec2 uv = GetTransmittanceTextureUvFromRMu(atmosphere, r, mu);
  // @shotamatsuda: Added for the precomputation stage in half-float precision.
  #ifdef TRANSMITTANCE_PRECISION_LOG
  // Manually interpolate the transmittance instead of the optical depth.
  const vec2 size = vec2(TRANSMITTANCE_TEXTURE_WIDTH, TRANSMITTANCE_TEXTURE_HEIGHT);
  const vec3 texel_size = vec3(1.0 / size, 0.0);
  vec2 coord = (uv * size) - 0.5;
  vec2 i = (floor(coord) + 0.5) * texel_size.xy;
  vec2 f = fract(coord);
  vec4 t1 = exp(-texture(transmittance_texture, i));
  vec4 t2 = exp(-texture(transmittance_texture, i + texel_size.xz));
  vec4 t3 = exp(-texture(transmittance_texture, i + texel_size.zy));
  vec4 t4 = exp(-texture(transmittance_texture, i + texel_size.xy));
  return DimensionlessSpectrum(mix(mix(t1, t2, f.x), mix(t3, t4, f.x), f.y));
  #else // TRANSMITTANCE_PRECISION_LOG
  return DimensionlessSpectrum(texture(transmittance_texture, uv));
  #endif // TRANSMITTANCE_PRECISION_LOG
}

DimensionlessSpectrum GetTransmittance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu, const Length d,
    const bool ray_r_mu_intersects_ground) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  assert(d >= 0.0 * m);

  Length r_d = ClampRadius(atmosphere, sqrt(d * d + 2.0 * r * mu * d + r * r));
  Number mu_d = ClampCosine((r * mu + d) / r_d);

  if (ray_r_mu_intersects_ground) {
    return min(
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r_d, -mu_d) /
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r, -mu),
        DimensionlessSpectrum(1.0));
  } else {
    return min(
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r, mu) /
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r_d, mu_d),
        DimensionlessSpectrum(1.0));
  }
}

DimensionlessSpectrum GetTransmittanceToSun(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu_s) {
  Number sin_theta_h = atmosphere.bottom_radius / r;
  Number cos_theta_h = -sqrt(max(1.0 - sin_theta_h * sin_theta_h, 0.0));
  return GetTransmittanceToTopAtmosphereBoundary(
          atmosphere, transmittance_texture, r, mu_s) *
      smoothstep(-sin_theta_h * atmosphere.sun_angular_radius / rad,
                 sin_theta_h * atmosphere.sun_angular_radius / rad,
                 mu_s - cos_theta_h);
}

InverseSolidAngle RayleighPhaseFunction(const Number nu) {
  InverseSolidAngle k = 3.0 / (16.0 * PI * sr);
  return k * (1.0 + nu * nu);
}

InverseSolidAngle MiePhaseFunction(const Number g, const Number nu) {
  InverseSolidAngle k = 3.0 / (8.0 * PI * sr) * (1.0 - g * g) / (2.0 + g * g);
  return k * (1.0 + nu * nu) / pow(1.0 + g * g - 2.0 * g * nu, 1.5);
}

vec4 GetScatteringTextureUvwzFromRMuMuSNu(const AtmosphereParameters atmosphere,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  assert(mu_s >= -1.0 && mu_s <= 1.0);
  assert(nu >= -1.0 && nu <= 1.0);

  // Distance to top atmosphere boundary for a horizontal ray at ground level.
  Length H = sqrt(atmosphere.top_radius * atmosphere.top_radius -
      atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the horizon.
  Length rho =
      SafeSqrt(r * r - atmosphere.bottom_radius * atmosphere.bottom_radius);
  Number u_r = GetTextureCoordFromUnitRange(rho / H, SCATTERING_TEXTURE_R_SIZE);

  // Discriminant of the quadratic equation for the intersections of the ray
  // (r,mu) with the ground (see RayIntersectsGround).
  Length r_mu = r * mu;
  Area discriminant =
      r_mu * r_mu - r * r + atmosphere.bottom_radius * atmosphere.bottom_radius;
  Number u_mu;
  if (ray_r_mu_intersects_ground) {
    // Distance to the ground for the ray (r,mu), and its minimum and maximum
    // values over all mu - obtained for (r,-1) and (r,mu_horizon).
    Length d = -r_mu - SafeSqrt(discriminant);
    Length d_min = r - atmosphere.bottom_radius;
    Length d_max = rho;
    u_mu = 0.5 - 0.5 * GetTextureCoordFromUnitRange(d_max == d_min ? 0.0 :
        (d - d_min) / (d_max - d_min), SCATTERING_TEXTURE_MU_SIZE / 2);
  } else {
    // Distance to the top atmosphere boundary for the ray (r,mu), and its
    // minimum and maximum values over all mu - obtained for (r,1) and
    // (r,mu_horizon).
    Length d = -r_mu + SafeSqrt(discriminant + H * H);
    Length d_min = atmosphere.top_radius - r;
    Length d_max = rho + H;
    u_mu = 0.5 + 0.5 * GetTextureCoordFromUnitRange(
        (d - d_min) / (d_max - d_min), SCATTERING_TEXTURE_MU_SIZE / 2);
  }

  Length d = DistanceToTopAtmosphereBoundary(
      atmosphere, atmosphere.bottom_radius, mu_s);
  Length d_min = atmosphere.top_radius - atmosphere.bottom_radius;
  Length d_max = H;
  Number a = (d - d_min) / (d_max - d_min);
  Length D = DistanceToTopAtmosphereBoundary(
      atmosphere, atmosphere.bottom_radius, atmosphere.mu_s_min);
  Number A = (D - d_min) / (d_max - d_min);
  // An ad-hoc function equal to 0 for mu_s = mu_s_min (because then d = D and
  // thus a = A), equal to 1 for mu_s = 1 (because then d = d_min and thus
  // a = 0), and with a large slope around mu_s = 0, to get more texture
  // samples near the horizon.
  Number u_mu_s = GetTextureCoordFromUnitRange(
      max(1.0 - a / A, 0.0) / (1.0 + a), SCATTERING_TEXTURE_MU_S_SIZE);

  Number u_nu = (nu + 1.0) / 2.0;
  return vec4(u_nu, u_mu_s, u_mu, u_r);
}

vec2 GetIrradianceTextureUvFromRMuS(const AtmosphereParameters atmosphere,
    const Length r, const Number mu_s) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu_s >= -1.0 && mu_s <= 1.0);
  Number x_r = (r - atmosphere.bottom_radius) /
      (atmosphere.top_radius - atmosphere.bottom_radius);
  Number x_mu_s = mu_s * 0.5 + 0.5;
  return vec2(GetTextureCoordFromUnitRange(x_mu_s, IRRADIANCE_TEXTURE_WIDTH),
              GetTextureCoordFromUnitRange(x_r, IRRADIANCE_TEXTURE_HEIGHT));
}

IrradianceSpectrum GetIrradiance(
    const AtmosphereParameters atmosphere,
    const IrradianceTexture irradiance_texture,
    const Length r, const Number mu_s) {
  vec2 uv = GetIrradianceTextureUvFromRMuS(atmosphere, r, mu_s);
  return IrradianceSpectrum(texture(irradiance_texture, uv));
}
`,x=`// Based on: https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/definitions.glsl

/**
 * Copyright (c) 2017 Eric Bruneton
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */

#define assert(x)

#define Length float
#define Wavelength float
#define Angle float
#define SolidAngle float
#define Power float
#define LuminousPower float

#define Number float
#define InverseLength float
#define Area float
#define Volume float
#define NumberDensity float
#define Irradiance float
#define Radiance float
#define SpectralPower float
#define SpectralIrradiance float
#define SpectralRadiance float
#define SpectralRadianceDensity float
#define ScatteringCoefficient float
#define InverseSolidAngle float
#define LuminousIntensity float
#define Luminance float
#define Illuminance float

// A generic function from Wavelength to some other type.
#define AbstractSpectrum vec3
// A function from Wavelength to Number.
#define DimensionlessSpectrum vec3
// A function from Wavelength to SpectralPower.
#define PowerSpectrum vec3
// A function from Wavelength to SpectralIrradiance.
#define IrradianceSpectrum vec3
// A function from Wavelength to SpectralRadiance.
#define RadianceSpectrum vec3
// A function from Wavelength to SpectralRadianceDensity.
#define RadianceDensitySpectrum vec3
// A function from Wavelength to ScatteringCoefficient.
#define ScatteringSpectrum vec3

// A position in 3D (3 length values).
#define Position vec3
// A unit direction vector in 3D (3 unit-less values).
#define Direction vec3
// A vector of 3 luminance values.
#define Luminance3 vec3
// A vector of 3 illuminance values.
#define Illuminance3 vec3

#define TransmittanceTexture sampler2D
#define AbstractScatteringTexture sampler3D
#define ReducedScatteringTexture sampler3D
#define ScatteringTexture sampler3D
#define ScatteringDensityTexture sampler3D
#define IrradianceTexture sampler2D

const Length m = 1.0;
const Wavelength nm = 1.0;
const Angle rad = 1.0;
const SolidAngle sr = 1.0;
const Power watt = 1.0;
const LuminousPower lm = 1.0;

#if !defined(PI)
const float PI = 3.14159265358979323846;
#endif // !defined(PI)

const Length km = 1000.0 * m;
const Area m2 = m * m;
const Volume m3 = m * m * m;
const Angle pi = PI * rad;
const Angle deg = pi / 180.0;
const Irradiance watt_per_square_meter = watt / m2;
const Radiance watt_per_square_meter_per_sr = watt / (m2 * sr);
const SpectralIrradiance watt_per_square_meter_per_nm = watt / (m2 * nm);
const SpectralRadiance watt_per_square_meter_per_sr_per_nm = watt / (m2 * sr * nm);
const SpectralRadianceDensity watt_per_cubic_meter_per_sr_per_nm = watt / (m3 * sr * nm);
const LuminousIntensity cd = lm / sr;
const LuminousIntensity kcd = 1000.0 * cd;
const Luminance cd_per_square_meter = cd / m2;
const Luminance kcd_per_square_meter = kcd / m2;

struct DensityProfileLayer {
  Length width;
  Number exp_term;
  InverseLength exp_scale;
  InverseLength linear_term;
  Number constant_term;
};

struct DensityProfile {
  DensityProfileLayer layers[2];
};

// See AtmosphereParameter.ts for further details.
struct AtmosphereParameters {
  IrradianceSpectrum solar_irradiance;
  Angle sun_angular_radius;
  Length bottom_radius;
  Length top_radius;
  DensityProfile rayleigh_density;
  ScatteringSpectrum rayleigh_scattering;
  DensityProfile mie_density;
  ScatteringSpectrum mie_scattering;
  ScatteringSpectrum mie_extinction;
  Number mie_phase_function_g;
  DensityProfile absorption_density;
  ScatteringSpectrum absorption_extinction;
  DimensionlessSpectrum ground_albedo;
  Number mu_s_min;
};
`,M=`// Based on: https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/functions.glsl

/**
 * Copyright (c) 2017 Eric Bruneton
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Precomputed Atmospheric Scattering
 * Copyright (c) 2008 INRIA
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifdef COMBINED_SCATTERING_TEXTURES
vec3 GetExtrapolatedSingleMieScattering(
    const AtmosphereParameters atmosphere, const vec4 scattering) {
  // Algebraically this can never be negative, but rounding errors can produce
  // that effect for sufficiently short view rays.
  // @shotamatsuda: Avoid division by infinitesimal values.
  // See https://github.com/takram-design-engineering/three-geospatial/issues/47
  if (scattering.r < 1e-5) {
    return vec3(0.0);
  }
  return scattering.rgb * scattering.a / scattering.r *
	    (atmosphere.rayleigh_scattering.r / atmosphere.mie_scattering.r) *
	    (atmosphere.mie_scattering / atmosphere.rayleigh_scattering);
}
#endif // COMBINED_SCATTERING_TEXTURES

IrradianceSpectrum GetCombinedScattering(
    const AtmosphereParameters atmosphere,
    const ReducedScatteringTexture scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground,
    out IrradianceSpectrum single_mie_scattering) {
  vec4 uvwz = GetScatteringTextureUvwzFromRMuMuSNu(
      atmosphere, r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  Number tex_coord_x = uvwz.x * Number(SCATTERING_TEXTURE_NU_SIZE - 1);
  Number tex_x = floor(tex_coord_x);
  Number lerp = tex_coord_x - tex_x;
  vec3 uvw0 = vec3((tex_x + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  vec3 uvw1 = vec3((tex_x + 1.0 + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
#ifdef COMBINED_SCATTERING_TEXTURES
  vec4 combined_scattering =
      texture(scattering_texture, uvw0) * (1.0 - lerp) +
      texture(scattering_texture, uvw1) * lerp;
  IrradianceSpectrum scattering = IrradianceSpectrum(combined_scattering);
  single_mie_scattering =
      GetExtrapolatedSingleMieScattering(atmosphere, combined_scattering);
#else // COMBINED_SCATTERING_TEXTURES
  IrradianceSpectrum scattering = IrradianceSpectrum(
      texture(scattering_texture, uvw0) * (1.0 - lerp) +
      texture(scattering_texture, uvw1) * lerp);
  single_mie_scattering = IrradianceSpectrum(
      texture(single_mie_scattering_texture, uvw0) * (1.0 - lerp) +
      texture(single_mie_scattering_texture, uvw1) * lerp);
#endif // COMBINED_SCATTERING_TEXTURES
  return scattering;
}

// @shotamatsuda: Added for reading higher-order scattering texture.
#ifdef HAS_HIGHER_ORDER_SCATTERING_TEXTURE
IrradianceSpectrum GetScattering(
    const AtmosphereParameters atmosphere,
    const ReducedScatteringTexture scattering_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground) {
  vec4 uvwz = GetScatteringTextureUvwzFromRMuMuSNu(
      atmosphere, r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  Number tex_coord_x = uvwz.x * Number(SCATTERING_TEXTURE_NU_SIZE - 1);
  Number tex_x = floor(tex_coord_x);
  Number lerp = tex_coord_x - tex_x;
  vec3 uvw0 = vec3((tex_x + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  vec3 uvw1 = vec3((tex_x + 1.0 + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  IrradianceSpectrum scattering = IrradianceSpectrum(
      texture(scattering_texture, uvw0) * (1.0 - lerp) +
      texture(scattering_texture, uvw1) * lerp);
  return scattering;
}
#endif // HAS_HIGHER_ORDER_SCATTERING_TEXTURE

RadianceSpectrum GetSkyRadiance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const ReducedScatteringTexture scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    Position camera, const Direction view_ray, const Length shadow_length,
    const Direction sun_direction,
    out DimensionlessSpectrum transmittance) {
  // Compute the distance to the top atmosphere boundary along the view ray,
  // assuming the viewer is in space (or NaN if the view ray does not intersect
  // the atmosphere).
  Length r = length(camera);
  Length rmu = dot(camera, view_ray);
  // @shotamatsuda: Use SafeSqrt instead.
  // See: https://github.com/takram-design-engineering/three-geospatial/pull/26
  Length distance_to_top_atmosphere_boundary = -rmu -
      SafeSqrt(rmu * rmu - r * r +
          atmosphere.top_radius * atmosphere.top_radius);
  // If the viewer is in space and the view ray intersects the atmosphere, move
  // the viewer to the top atmosphere boundary (along the view ray):
  if (distance_to_top_atmosphere_boundary > 0.0 * m) {
    camera = camera + view_ray * distance_to_top_atmosphere_boundary;
    r = atmosphere.top_radius;
    rmu += distance_to_top_atmosphere_boundary;
  } else if (r > atmosphere.top_radius) {
    // If the view ray does not intersect the atmosphere, simply return 0.
    transmittance = DimensionlessSpectrum(1.0);
    return RadianceSpectrum(0.0 * watt_per_square_meter_per_sr_per_nm);
  }
  // Compute the r, mu, mu_s and nu parameters needed for the texture lookups.
  Number mu = rmu / r;
  Number mu_s = dot(camera, sun_direction) / r;
  Number nu = dot(view_ray, sun_direction);

  // @shotamatsuda: For rendering points below the bottom atmosphere.
  #ifdef GROUND
  bool ray_r_mu_intersects_ground = RayIntersectsGround(atmosphere, r, mu);
  #else // GROUND
  bool ray_r_mu_intersects_ground = false;
  #endif // GROUND

  transmittance = ray_r_mu_intersects_ground ? DimensionlessSpectrum(0.0) :
      GetTransmittanceToTopAtmosphereBoundary(
          atmosphere, transmittance_texture, r, mu);
  IrradianceSpectrum single_mie_scattering;
  IrradianceSpectrum scattering;
  if (shadow_length == 0.0 * m) {
    scattering = GetCombinedScattering(
        atmosphere, scattering_texture, single_mie_scattering_texture,
        r, mu, mu_s, nu, ray_r_mu_intersects_ground,
        single_mie_scattering);
  } else {
    // Case of light shafts (shadow_length is the total length noted l in our
    // paper): we omit the scattering between the camera and the point at
    // distance l, by implementing Eq. (18) of the paper (shadow_transmittance
    // is the T(x,x_s) term, scattering is the S|x_s=x+lv term).
    Length d = shadow_length;
    Length r_p =
        ClampRadius(atmosphere, sqrt(d * d + 2.0 * r * mu * d + r * r));
    Number mu_p = (r * mu + d) / r_p;
    Number mu_s_p = (r * mu_s + d * nu) / r_p;

    scattering = GetCombinedScattering(
        atmosphere, scattering_texture, single_mie_scattering_texture,
        r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground,
        single_mie_scattering);
    DimensionlessSpectrum shadow_transmittance =
        GetTransmittance(atmosphere, transmittance_texture,
            r, mu, shadow_length, ray_r_mu_intersects_ground);
    // @shotamatsuda: Occlude only single Rayleigh scattering by the shadow.
#ifdef HAS_HIGHER_ORDER_SCATTERING_TEXTURE
    IrradianceSpectrum higher_order_scattering = GetScattering(
        atmosphere, higher_order_scattering_texture,
        r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground);
    IrradianceSpectrum single_scattering = scattering - higher_order_scattering;
    scattering = single_scattering * shadow_transmittance + higher_order_scattering;
#else // HAS_HIGHER_ORDER_SCATTERING_TEXTURE
    scattering = scattering * shadow_transmittance;
#endif // HAS_HIGHER_ORDER_SCATTERING_TEXTURE
    single_mie_scattering = single_mie_scattering * shadow_transmittance;
  }
  return scattering * RayleighPhaseFunction(nu) + single_mie_scattering *
      MiePhaseFunction(atmosphere.mie_phase_function_g, nu);
}

// @shotamatsuda: Returns the point on the ray closest to the origin.
vec3 ClosestPointOnRay(const Position camera, const Position point) {
  Position ray = point - camera;
  Number t = clamp(-dot(camera, ray) / dot(ray, ray), 0.0, 1.0);
  return camera + t * ray;
}

vec2 RaySphereIntersections(
    const Position camera, const Direction direction, const Length radius) {
  float b = 2.0 * dot(direction, camera);
  float c = dot(camera, camera) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  float Q = sqrt(discriminant);
  return vec2(-b - Q, -b + Q) * 0.5;
}

// @shotamatsuda: Clip the view ray at the bottom atmosphere boundary.
bool ClipAtBottomAtmosphere(
    const AtmosphereParameters atmosphere,
    const Direction view_ray, inout Position camera, inout Position point) {
  const Length eps = 0.0;
  Length bottom_radius = atmosphere.bottom_radius + eps;
  Length r_camera = length(camera);
  Length r_point = length(point);
  bool camera_below = r_camera < bottom_radius;
  bool point_below = r_point < bottom_radius;

  vec2 t = RaySphereIntersections(camera, view_ray, bottom_radius);
  Position intersection = camera + view_ray * (camera_below ? t.y : t.x);
  camera = camera_below ? intersection : camera;
  point = point_below ? intersection : point;

  return camera_below && point_below;
}

RadianceSpectrum GetSkyRadianceToPoint(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const ReducedScatteringTexture scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    Position camera, Position point, const Length shadow_length,
    const Direction sun_direction, out DimensionlessSpectrum transmittance) {
  // @shotamatsuda: Avoid artifacts when the ray does not intersect the top
  // atmosphere boundary.
  if (length(ClosestPointOnRay(camera, point)) > atmosphere.top_radius) {
    transmittance = vec3(1.0);
    return vec3(0.0);
  }

  Direction view_ray = normalize(point - camera);
  if (ClipAtBottomAtmosphere(atmosphere, view_ray, camera, point)) {
    transmittance = vec3(1.0);
    return vec3(0.0);
  }

  // Compute the distance to the top atmosphere boundary along the view ray,
  // assuming the viewer is in space (or NaN if the view ray does not intersect
  // the atmosphere).
  Length r = length(camera);
  Length rmu = dot(camera, view_ray);
  // @shotamatsuda: Use SafeSqrt instead.
  // See: https://github.com/takram-design-engineering/three-geospatial/pull/26
  Length distance_to_top_atmosphere_boundary = -rmu -
      SafeSqrt(rmu * rmu - r * r +
          atmosphere.top_radius * atmosphere.top_radius);
  // If the viewer is in space and the view ray intersects the atmosphere, move
  // the viewer to the top atmosphere boundary (along the view ray):
  if (distance_to_top_atmosphere_boundary > 0.0 * m) {
    camera = camera + view_ray * distance_to_top_atmosphere_boundary;
    r = atmosphere.top_radius;
    rmu += distance_to_top_atmosphere_boundary;
  }

  // Compute the r, mu, mu_s and nu parameters for the first texture lookup.
  Number mu = rmu / r;
  Number mu_s = dot(camera, sun_direction) / r;
  Number nu = dot(view_ray, sun_direction);
  Length d = length(point - camera);
  bool ray_r_mu_intersects_ground = RayIntersectsGround(atmosphere, r, mu);

  // @shotamatsuda: Hack to avoid rendering artifacts near the horizon, due to
  // finite atmosphere texture resolution and finite floating point precision.
  // See: https://github.com/ebruneton/precomputed_atmospheric_scattering/pull/32
  if (!ray_r_mu_intersects_ground) {
    Number mu_horizon = -SafeSqrt(1.0 -
        (atmosphere.bottom_radius * atmosphere.bottom_radius) / (r * r));
    const Number eps = 0.004;
    mu = max(mu, mu_horizon + eps);
  }

  transmittance = GetTransmittance(atmosphere, transmittance_texture,
      r, mu, d, ray_r_mu_intersects_ground);

  IrradianceSpectrum single_mie_scattering;
  IrradianceSpectrum scattering = GetCombinedScattering(
      atmosphere, scattering_texture, single_mie_scattering_texture,
      r, mu, mu_s, nu, ray_r_mu_intersects_ground,
      single_mie_scattering);

  // Compute the r, mu, mu_s and nu parameters for the second texture lookup.
  // If shadow_length is not 0 (case of light shafts), we want to ignore the
  // scattering along the last shadow_length meters of the view ray, which we
  // do by subtracting shadow_length from d (this way scattering_p is equal to
  // the S|x_s=x_0-lv term in Eq. (17) of our paper).
  d = max(d - shadow_length, 0.0 * m);
  Length r_p = ClampRadius(atmosphere, sqrt(d * d + 2.0 * r * mu * d + r * r));
  Number mu_p = (r * mu + d) / r_p;
  Number mu_s_p = (r * mu_s + d * nu) / r_p;

  IrradianceSpectrum single_mie_scattering_p;
  IrradianceSpectrum scattering_p = GetCombinedScattering(
      atmosphere, scattering_texture, single_mie_scattering_texture,
      r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground,
      single_mie_scattering_p);

  // Combine the lookup results to get the scattering between camera and point.
  DimensionlessSpectrum shadow_transmittance = transmittance;
  if (shadow_length > 0.0 * m) {
    // This is the T(x,x_s) term in Eq. (17) of our paper, for light shafts.
    shadow_transmittance = GetTransmittance(atmosphere, transmittance_texture,
        r, mu, d, ray_r_mu_intersects_ground);
  }
  // @shotamatsuda: Occlude only single Rayleigh scattering by the shadow.
#ifdef HAS_HIGHER_ORDER_SCATTERING_TEXTURE
  IrradianceSpectrum higher_order_scattering = GetScattering(
      atmosphere, higher_order_scattering_texture,
      r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  IrradianceSpectrum single_scattering = scattering - higher_order_scattering;
  IrradianceSpectrum higher_order_scattering_p = GetScattering(
      atmosphere, higher_order_scattering_texture,
      r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground);
  IrradianceSpectrum single_scattering_p =
      scattering_p - higher_order_scattering_p;
  scattering =
      single_scattering - shadow_transmittance * single_scattering_p +
      higher_order_scattering - transmittance * higher_order_scattering_p;
#else // HAS_HIGHER_ORDER_SCATTERING_TEXTURE
  scattering = scattering - shadow_transmittance * scattering_p;
#endif // HAS_HIGHER_ORDER_SCATTERING_TEXTURE

  single_mie_scattering =
      single_mie_scattering - shadow_transmittance * single_mie_scattering_p;
#ifdef COMBINED_SCATTERING_TEXTURES
  single_mie_scattering = GetExtrapolatedSingleMieScattering(
      atmosphere, vec4(scattering, single_mie_scattering.r));
#endif // COMBINED_SCATTERING_TEXTURES

  // Hack to avoid rendering artifacts when the sun is below the horizon.
  single_mie_scattering = single_mie_scattering *
      smoothstep(Number(0.0), Number(0.01), mu_s);

  return scattering * RayleighPhaseFunction(nu) + single_mie_scattering *
      MiePhaseFunction(atmosphere.mie_phase_function_g, nu);
}

IrradianceSpectrum GetSunAndSkyIrradiance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const IrradianceTexture irradiance_texture,
    const Position point, const Direction normal, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  Length r = length(point);
  Number mu_s = dot(point, sun_direction) / r;

  // Indirect irradiance (approximated if the surface is not horizontal).
  sky_irradiance = GetIrradiance(atmosphere, irradiance_texture, r, mu_s) *
      (1.0 + dot(normal, point) / r) * 0.5;

  // Direct irradiance.
  return atmosphere.solar_irradiance *
      GetTransmittanceToSun(
          atmosphere, transmittance_texture, r, mu_s) *
      max(dot(normal, sun_direction), 0.0);
}

// @shotamatsuda: Added for the clouds.
IrradianceSpectrum GetSunAndSkyScalarIrradiance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const IrradianceTexture irradiance_texture,
    const Position point, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  Length r = length(point);
  Number mu_s = dot(point, sun_direction) / r;

  // Indirect irradiance. Integral over sphere yields 2π.
  sky_irradiance = GetIrradiance(atmosphere, irradiance_texture, r, mu_s) *
      2.0 * PI;

  // Direct irradiance. Omit the cosine term.
  return atmosphere.solar_irradiance *
      GetTransmittanceToSun(atmosphere, transmittance_texture, r, mu_s);
}

Luminance3 GetSolarLuminance() {
  return ATMOSPHERE.solar_irradiance /
      (PI * ATMOSPHERE.sun_angular_radius * ATMOSPHERE.sun_angular_radius) *
      SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

Luminance3 GetSkyLuminance(
    const Position camera, Direction view_ray, const Length shadow_length,
    const Direction sun_direction, out DimensionlessSpectrum transmittance) {
  return GetSkyRadiance(ATMOSPHERE, transmittance_texture,
      scattering_texture, single_mie_scattering_texture,
      camera, view_ray, shadow_length, sun_direction,
      transmittance) * SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

Luminance3 GetSkyLuminanceToPoint(
    const Position camera, const Position point, const Length shadow_length,
    const Direction sun_direction, out DimensionlessSpectrum transmittance) {
  return GetSkyRadianceToPoint(ATMOSPHERE, transmittance_texture,
      scattering_texture, single_mie_scattering_texture,
      camera, point, shadow_length, sun_direction, transmittance) *
      SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

Illuminance3 GetSunAndSkyIlluminance(
    const Position p, const Direction normal, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  IrradianceSpectrum sun_irradiance = GetSunAndSkyIrradiance(
      ATMOSPHERE, transmittance_texture, irradiance_texture, p, normal,
      sun_direction, sky_irradiance);
  sky_irradiance *= SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
  return sun_irradiance * SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

// @shotamatsuda: Added for the clouds.
Illuminance3 GetSunAndSkyScalarIlluminance(
    const Position p, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  IrradianceSpectrum sun_irradiance = GetSunAndSkyScalarIrradiance(
      ATMOSPHERE, transmittance_texture, irradiance_texture, p,
      sun_direction, sky_irradiance);
  sky_irradiance *= SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
  return sun_irradiance * SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

#define GetSolarRadiance GetSolarLuminance
#define GetSkyRadiance GetSkyLuminance
#define GetSkyRadianceToPoint GetSkyLuminanceToPoint
#define GetSunAndSkyIrradiance GetSunAndSkyIlluminance
#define GetSunAndSkyScalarIrradiance GetSunAndSkyScalarIlluminance
`,D=`// Based on: https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/functions.glsl

/**
 * Copyright (c) 2017 Eric Bruneton
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Precomputed Atmospheric Scattering
 * Copyright (c) 2008 INRIA
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */

Number GetLayerDensity(const DensityProfileLayer layer, const Length altitude) {
  Number density = layer.exp_term * exp(layer.exp_scale * altitude) +
      layer.linear_term * altitude + layer.constant_term;
  return clamp(density, Number(0.0), Number(1.0));
}

Number GetProfileDensity(const DensityProfile profile, const Length altitude) {
  DensityProfileLayer layers[2] = profile.layers;
  return altitude < layers[0].width
    ? GetLayerDensity(layers[0], altitude)
    : GetLayerDensity(layers[1], altitude);
}

Length ComputeOpticalLengthToTopAtmosphereBoundary(
    const AtmosphereParameters atmosphere, const DensityProfile profile,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  // Number of intervals for the numerical integration.
  const int SAMPLE_COUNT = 500;
  // The integration step, i.e. the length of each integration interval.
  Length dx =
      DistanceToTopAtmosphereBoundary(atmosphere, r, mu) / Number(SAMPLE_COUNT);
  // Integration loop.
  Length result = 0.0 * m;
  for (int i = 0; i <= SAMPLE_COUNT; ++i) {
    Length d_i = Number(i) * dx;
    // Distance between the current sample point and the planet center.
    Length r_i = sqrt(d_i * d_i + 2.0 * r * mu * d_i + r * r);
    // Number density at the current sample point (divided by the number density
    // at the bottom of the atmosphere, yielding a dimensionless number).
    Number y_i = GetProfileDensity(profile, r_i - atmosphere.bottom_radius);
    // Sample weight (from the trapezoidal rule).
    Number weight_i = i == 0 || i == SAMPLE_COUNT ? 0.5 : 1.0;
    result += y_i * weight_i * dx;
  }
  return result;
}

DimensionlessSpectrum ComputeTransmittanceToTopAtmosphereBoundary(
    const AtmosphereParameters atmosphere, const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  vec3 optical_depth = (
      atmosphere.rayleigh_scattering *
          ComputeOpticalLengthToTopAtmosphereBoundary(
              atmosphere, atmosphere.rayleigh_density, r, mu) +
      atmosphere.mie_extinction *
          ComputeOpticalLengthToTopAtmosphereBoundary(
              atmosphere, atmosphere.mie_density, r, mu) +
      atmosphere.absorption_extinction *
          ComputeOpticalLengthToTopAtmosphereBoundary(
              atmosphere, atmosphere.absorption_density, r, mu));
  // @shotamatsuda: Added for the precomputation stage in half-float precision.
  #ifdef TRANSMITTANCE_PRECISION_LOG
  return optical_depth;
  #else // TRANSMITTANCE_PRECISION_LOG
  return exp(-optical_depth);
  #endif // TRANSMITTANCE_PRECISION_LOG
}

Number GetUnitRangeFromTextureCoord(const Number u, const int texture_size) {
  return (u - 0.5 / Number(texture_size)) / (1.0 - 1.0 / Number(texture_size));
}

void GetRMuFromTransmittanceTextureUv(const AtmosphereParameters atmosphere,
    const vec2 uv, out Length r, out Number mu) {
  assert(uv.x >= 0.0 && uv.x <= 1.0);
  assert(uv.y >= 0.0 && uv.y <= 1.0);
  Number x_mu = GetUnitRangeFromTextureCoord(uv.x, TRANSMITTANCE_TEXTURE_WIDTH);
  Number x_r = GetUnitRangeFromTextureCoord(uv.y, TRANSMITTANCE_TEXTURE_HEIGHT);
  // Distance to top atmosphere boundary for a horizontal ray at ground level.
  Length H = sqrt(atmosphere.top_radius * atmosphere.top_radius -
      atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the horizon, from which we can compute r:
  Length rho = H * x_r;
  r = sqrt(rho * rho + atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the top atmosphere boundary for the ray (r,mu), and its minimum
  // and maximum values over all mu - obtained for (r,1) and (r,mu_horizon) -
  // from which we can recover mu:
  Length d_min = atmosphere.top_radius - r;
  Length d_max = rho + H;
  Length d = d_min + x_mu * (d_max - d_min);
  mu = d == 0.0 * m ? Number(1.0) : (H * H - rho * rho - d * d) / (2.0 * r * d);
  mu = ClampCosine(mu);
}

DimensionlessSpectrum ComputeTransmittanceToTopAtmosphereBoundaryTexture(
    const AtmosphereParameters atmosphere, const vec2 frag_coord) {
  const vec2 TRANSMITTANCE_TEXTURE_SIZE =
      vec2(TRANSMITTANCE_TEXTURE_WIDTH, TRANSMITTANCE_TEXTURE_HEIGHT);
  Length r;
  Number mu;
  GetRMuFromTransmittanceTextureUv(
      atmosphere, frag_coord / TRANSMITTANCE_TEXTURE_SIZE, r, mu);
  return ComputeTransmittanceToTopAtmosphereBoundary(atmosphere, r, mu);
}

void ComputeSingleScatteringIntegrand(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const Length d, const bool ray_r_mu_intersects_ground,
    out DimensionlessSpectrum rayleigh, out DimensionlessSpectrum mie) {
  Length r_d = ClampRadius(atmosphere, sqrt(d * d + 2.0 * r * mu * d + r * r));
  Number mu_s_d = ClampCosine((r * mu_s + d * nu) / r_d);
  DimensionlessSpectrum transmittance =
      GetTransmittance(
          atmosphere, transmittance_texture, r, mu, d,
          ray_r_mu_intersects_ground) *
      GetTransmittanceToSun(
          atmosphere, transmittance_texture, r_d, mu_s_d);
  rayleigh = transmittance * GetProfileDensity(
      atmosphere.rayleigh_density, r_d - atmosphere.bottom_radius);
  mie = transmittance * GetProfileDensity(
      atmosphere.mie_density, r_d - atmosphere.bottom_radius);
}

Length DistanceToNearestAtmosphereBoundary(const AtmosphereParameters atmosphere,
    Length r, Number mu, bool ray_r_mu_intersects_ground) {
  if (ray_r_mu_intersects_ground) {
    return DistanceToBottomAtmosphereBoundary(atmosphere, r, mu);
  } else {
    return DistanceToTopAtmosphereBoundary(atmosphere, r, mu);
  }
}

void ComputeSingleScattering(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground,
    out IrradianceSpectrum rayleigh, out IrradianceSpectrum mie) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  assert(mu_s >= -1.0 && mu_s <= 1.0);
  assert(nu >= -1.0 && nu <= 1.0);

  // Number of intervals for the numerical integration.
  const int SAMPLE_COUNT = 50;
  // The integration step, i.e. the length of each integration interval.
  Length dx =
      DistanceToNearestAtmosphereBoundary(atmosphere, r, mu,
          ray_r_mu_intersects_ground) / Number(SAMPLE_COUNT);
  // Integration loop.
  DimensionlessSpectrum rayleigh_sum = DimensionlessSpectrum(0.0);
  DimensionlessSpectrum mie_sum = DimensionlessSpectrum(0.0);
  for (int i = 0; i <= SAMPLE_COUNT; ++i) {
    Length d_i = Number(i) * dx;
    // The Rayleigh and Mie single scattering at the current sample point.
    DimensionlessSpectrum rayleigh_i;
    DimensionlessSpectrum mie_i;
    ComputeSingleScatteringIntegrand(atmosphere, transmittance_texture,
        r, mu, mu_s, nu, d_i, ray_r_mu_intersects_ground, rayleigh_i, mie_i);
    // Sample weight (from the trapezoidal rule).
    Number weight_i = (i == 0 || i == SAMPLE_COUNT) ? 0.5 : 1.0;
    rayleigh_sum += rayleigh_i * weight_i;
    mie_sum += mie_i * weight_i;
  }
  rayleigh = rayleigh_sum * dx * atmosphere.solar_irradiance *
      atmosphere.rayleigh_scattering;
  mie = mie_sum * dx * atmosphere.solar_irradiance * atmosphere.mie_scattering;
}

void GetRMuMuSNuFromScatteringTextureUvwz(const AtmosphereParameters atmosphere,
    const vec4 uvwz, out Length r, out Number mu, out Number mu_s,
    out Number nu, out bool ray_r_mu_intersects_ground) {
  assert(uvwz.x >= 0.0 && uvwz.x <= 1.0);
  assert(uvwz.y >= 0.0 && uvwz.y <= 1.0);
  assert(uvwz.z >= 0.0 && uvwz.z <= 1.0);
  assert(uvwz.w >= 0.0 && uvwz.w <= 1.0);

  // Distance to top atmosphere boundary for a horizontal ray at ground level.
  Length H = sqrt(atmosphere.top_radius * atmosphere.top_radius -
      atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the horizon.
  Length rho =
      H * GetUnitRangeFromTextureCoord(uvwz.w, SCATTERING_TEXTURE_R_SIZE);
  r = sqrt(rho * rho + atmosphere.bottom_radius * atmosphere.bottom_radius);

  if (uvwz.z < 0.5) {
    // Distance to the ground for the ray (r,mu), and its minimum and maximum
    // values over all mu - obtained for (r,-1) and (r,mu_horizon) - from which
    // we can recover mu:
    Length d_min = r - atmosphere.bottom_radius;
    Length d_max = rho;
    Length d = d_min + (d_max - d_min) * GetUnitRangeFromTextureCoord(
        1.0 - 2.0 * uvwz.z, SCATTERING_TEXTURE_MU_SIZE / 2);
    mu = d == 0.0 * m ? Number(-1.0) :
        ClampCosine(-(rho * rho + d * d) / (2.0 * r * d));
    ray_r_mu_intersects_ground = true;
  } else {
    // Distance to the top atmosphere boundary for the ray (r,mu), and its
    // minimum and maximum values over all mu - obtained for (r,1) and
    // (r,mu_horizon) - from which we can recover mu:
    Length d_min = atmosphere.top_radius - r;
    Length d_max = rho + H;
    Length d = d_min + (d_max - d_min) * GetUnitRangeFromTextureCoord(
        2.0 * uvwz.z - 1.0, SCATTERING_TEXTURE_MU_SIZE / 2);
    mu = d == 0.0 * m ? Number(1.0) :
        ClampCosine((H * H - rho * rho - d * d) / (2.0 * r * d));
    ray_r_mu_intersects_ground = false;
  }

  Number x_mu_s =
      GetUnitRangeFromTextureCoord(uvwz.y, SCATTERING_TEXTURE_MU_S_SIZE);
  Length d_min = atmosphere.top_radius - atmosphere.bottom_radius;
  Length d_max = H;
  Length D = DistanceToTopAtmosphereBoundary(
      atmosphere, atmosphere.bottom_radius, atmosphere.mu_s_min);
  Number A = (D - d_min) / (d_max - d_min);
  Number a = (A - x_mu_s * A) / (1.0 + x_mu_s * A);
  Length d = d_min + min(a, A) * (d_max - d_min);
  mu_s = d == 0.0 * m ? Number(1.0) :
     ClampCosine((H * H - d * d) / (2.0 * atmosphere.bottom_radius * d));

  nu = ClampCosine(uvwz.x * 2.0 - 1.0);
}

void GetRMuMuSNuFromScatteringTextureFragCoord(
    const AtmosphereParameters atmosphere, const vec3 frag_coord,
    out Length r, out Number mu, out Number mu_s, out Number nu,
    out bool ray_r_mu_intersects_ground) {
  const vec4 SCATTERING_TEXTURE_SIZE = vec4(
      SCATTERING_TEXTURE_NU_SIZE - 1,
      SCATTERING_TEXTURE_MU_S_SIZE,
      SCATTERING_TEXTURE_MU_SIZE,
      SCATTERING_TEXTURE_R_SIZE);
  Number frag_coord_nu =
      floor(frag_coord.x / Number(SCATTERING_TEXTURE_MU_S_SIZE));
  Number frag_coord_mu_s =
      mod(frag_coord.x, Number(SCATTERING_TEXTURE_MU_S_SIZE));
  vec4 uvwz =
      vec4(frag_coord_nu, frag_coord_mu_s, frag_coord.y, frag_coord.z) /
          SCATTERING_TEXTURE_SIZE;
  GetRMuMuSNuFromScatteringTextureUvwz(
      atmosphere, uvwz, r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  // Clamp nu to its valid range of values, given mu and mu_s.
  nu = clamp(nu, mu * mu_s - sqrt((1.0 - mu * mu) * (1.0 - mu_s * mu_s)),
      mu * mu_s + sqrt((1.0 - mu * mu) * (1.0 - mu_s * mu_s)));
}

void ComputeSingleScatteringTexture(const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture, const vec3 frag_coord,
    out IrradianceSpectrum rayleigh, out IrradianceSpectrum mie) {
  Length r;
  Number mu;
  Number mu_s;
  Number nu;
  bool ray_r_mu_intersects_ground;
  GetRMuMuSNuFromScatteringTextureFragCoord(atmosphere, frag_coord,
      r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  ComputeSingleScattering(atmosphere, transmittance_texture,
      r, mu, mu_s, nu, ray_r_mu_intersects_ground, rayleigh, mie);
}

AbstractSpectrum GetScattering(
    const AtmosphereParameters atmosphere,
    const AbstractScatteringTexture scattering_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground) {
  vec4 uvwz = GetScatteringTextureUvwzFromRMuMuSNu(
      atmosphere, r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  Number tex_coord_x = uvwz.x * Number(SCATTERING_TEXTURE_NU_SIZE - 1);
  Number tex_x = floor(tex_coord_x);
  Number lerp = tex_coord_x - tex_x;
  vec3 uvw0 = vec3((tex_x + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  vec3 uvw1 = vec3((tex_x + 1.0 + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  return AbstractSpectrum(texture(scattering_texture, uvw0) * (1.0 - lerp) +
      texture(scattering_texture, uvw1) * lerp);
}

RadianceSpectrum GetScattering(
    const AtmosphereParameters atmosphere,
    const ReducedScatteringTexture single_rayleigh_scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    const ScatteringTexture multiple_scattering_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground,
    const int scattering_order) {
  if (scattering_order == 1) {
    IrradianceSpectrum rayleigh = GetScattering(
        atmosphere, single_rayleigh_scattering_texture, r, mu, mu_s, nu,
        ray_r_mu_intersects_ground);
    IrradianceSpectrum mie = GetScattering(
        atmosphere, single_mie_scattering_texture, r, mu, mu_s, nu,
        ray_r_mu_intersects_ground);
    return rayleigh * RayleighPhaseFunction(nu) +
        mie * MiePhaseFunction(atmosphere.mie_phase_function_g, nu);
  } else {
    return GetScattering(
        atmosphere, multiple_scattering_texture, r, mu, mu_s, nu,
        ray_r_mu_intersects_ground);
  }
}

IrradianceSpectrum GetIrradiance(
    const AtmosphereParameters atmosphere,
    const IrradianceTexture irradiance_texture,
    const Length r, const Number mu_s);

RadianceDensitySpectrum ComputeScatteringDensity(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const ReducedScatteringTexture single_rayleigh_scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    const ScatteringTexture multiple_scattering_texture,
    const IrradianceTexture irradiance_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const int scattering_order) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  assert(mu_s >= -1.0 && mu_s <= 1.0);
  assert(nu >= -1.0 && nu <= 1.0);
  assert(scattering_order >= 2);

  // Compute unit direction vectors for the zenith, the view direction omega and
  // and the sun direction omega_s, such that the cosine of the view-zenith
  // angle is mu, the cosine of the sun-zenith angle is mu_s, and the cosine of
  // the view-sun angle is nu. The goal is to simplify computations below.
  vec3 zenith_direction = vec3(0.0, 0.0, 1.0);
  vec3 omega = vec3(sqrt(1.0 - mu * mu), 0.0, mu);
  Number sun_dir_x = omega.x == 0.0 ? 0.0 : (nu - mu * mu_s) / omega.x;
  Number sun_dir_y = sqrt(max(1.0 - sun_dir_x * sun_dir_x - mu_s * mu_s, 0.0));
  vec3 omega_s = vec3(sun_dir_x, sun_dir_y, mu_s);

  const int SAMPLE_COUNT = 16;
  const Angle dphi = pi / Number(SAMPLE_COUNT);
  const Angle dtheta = pi / Number(SAMPLE_COUNT);
  RadianceDensitySpectrum rayleigh_mie =
      RadianceDensitySpectrum(0.0 * watt_per_cubic_meter_per_sr_per_nm);

  // Nested loops for the integral over all the incident directions omega_i.
  for (int l = 0; l < SAMPLE_COUNT; ++l) {
    Angle theta = (Number(l) + 0.5) * dtheta;
    Number cos_theta = cos(theta);
    Number sin_theta = sin(theta);
    bool ray_r_theta_intersects_ground =
        RayIntersectsGround(atmosphere, r, cos_theta);

    // The distance and transmittance to the ground only depend on theta, so we
    // can compute them in the outer loop for efficiency.
    Length distance_to_ground = 0.0 * m;
    DimensionlessSpectrum transmittance_to_ground = DimensionlessSpectrum(0.0);
    DimensionlessSpectrum ground_albedo = DimensionlessSpectrum(0.0);
    if (ray_r_theta_intersects_ground) {
      distance_to_ground =
          DistanceToBottomAtmosphereBoundary(atmosphere, r, cos_theta);
      transmittance_to_ground =
          GetTransmittance(atmosphere, transmittance_texture, r, cos_theta,
              distance_to_ground, true /* ray_intersects_ground */);
      ground_albedo = atmosphere.ground_albedo;
    }

    for (int m = 0; m < 2 * SAMPLE_COUNT; ++m) {
      Angle phi = (Number(m) + 0.5) * dphi;
      vec3 omega_i =
          vec3(cos(phi) * sin_theta, sin(phi) * sin_theta, cos_theta);
      SolidAngle domega_i = (dtheta / rad) * (dphi / rad) * sin(theta) * sr;

      // The radiance L_i arriving from direction omega_i after n-1 bounces is
      // the sum of a term given by the precomputed scattering texture for the
      // (n-1)-th order:
      Number nu1 = dot(omega_s, omega_i);
      RadianceSpectrum incident_radiance = GetScattering(atmosphere,
          single_rayleigh_scattering_texture, single_mie_scattering_texture,
          multiple_scattering_texture, r, omega_i.z, mu_s, nu1,
          ray_r_theta_intersects_ground, scattering_order - 1);

      // and of the contribution from the light paths with n-1 bounces and whose
      // last bounce is on the ground. This contribution is the product of the
      // transmittance to the ground, the ground albedo, the ground BRDF, and
      // the irradiance received on the ground after n-2 bounces.
      vec3 ground_normal =
          normalize(zenith_direction * r + omega_i * distance_to_ground);
      IrradianceSpectrum ground_irradiance = GetIrradiance(
          atmosphere, irradiance_texture, atmosphere.bottom_radius,
          dot(ground_normal, omega_s));
      incident_radiance += transmittance_to_ground *
          ground_albedo * (1.0 / (PI * sr)) * ground_irradiance;

      // The radiance finally scattered from direction omega_i towards direction
      // -omega is the product of the incident radiance, the scattering
      // coefficient, and the phase function for directions omega and omega_i
      // (all this summed over all particle types, i.e. Rayleigh and Mie).
      Number nu2 = dot(omega, omega_i);
      Number rayleigh_density = GetProfileDensity(
          atmosphere.rayleigh_density, r - atmosphere.bottom_radius);
      Number mie_density = GetProfileDensity(
          atmosphere.mie_density, r - atmosphere.bottom_radius);
      rayleigh_mie += incident_radiance * (
          atmosphere.rayleigh_scattering * rayleigh_density *
              RayleighPhaseFunction(nu2) +
          atmosphere.mie_scattering * mie_density *
              MiePhaseFunction(atmosphere.mie_phase_function_g, nu2)) *
          domega_i;
    }
  }
  return rayleigh_mie;
}

RadianceSpectrum ComputeMultipleScattering(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const ScatteringDensityTexture scattering_density_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  assert(mu_s >= -1.0 && mu_s <= 1.0);
  assert(nu >= -1.0 && nu <= 1.0);

  // Number of intervals for the numerical integration.
  const int SAMPLE_COUNT = 50;
  // The integration step, i.e. the length of each integration interval.
  Length dx =
      DistanceToNearestAtmosphereBoundary(
          atmosphere, r, mu, ray_r_mu_intersects_ground) /
              Number(SAMPLE_COUNT);
  // Integration loop.
  RadianceSpectrum rayleigh_mie_sum =
      RadianceSpectrum(0.0 * watt_per_square_meter_per_sr_per_nm);
  for (int i = 0; i <= SAMPLE_COUNT; ++i) {
    Length d_i = Number(i) * dx;

    // The r, mu and mu_s parameters at the current integration point (see the
    // single scattering section for a detailed explanation).
    Length r_i =
        ClampRadius(atmosphere, sqrt(d_i * d_i + 2.0 * r * mu * d_i + r * r));
    Number mu_i = ClampCosine((r * mu + d_i) / r_i);
    Number mu_s_i = ClampCosine((r * mu_s + d_i * nu) / r_i);

    // The Rayleigh and Mie multiple scattering at the current sample point.
    RadianceSpectrum rayleigh_mie_i =
        GetScattering(
            atmosphere, scattering_density_texture, r_i, mu_i, mu_s_i, nu,
            ray_r_mu_intersects_ground) *
        GetTransmittance(
            atmosphere, transmittance_texture, r, mu, d_i,
            ray_r_mu_intersects_ground) *
        dx;
    // Sample weight (from the trapezoidal rule).
    Number weight_i = (i == 0 || i == SAMPLE_COUNT) ? 0.5 : 1.0;
    rayleigh_mie_sum += rayleigh_mie_i * weight_i;
  }
  return rayleigh_mie_sum;
}

RadianceDensitySpectrum ComputeScatteringDensityTexture(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const ReducedScatteringTexture single_rayleigh_scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    const ScatteringTexture multiple_scattering_texture,
    const IrradianceTexture irradiance_texture,
    const vec3 frag_coord, const int scattering_order) {
  Length r;
  Number mu;
  Number mu_s;
  Number nu;
  bool ray_r_mu_intersects_ground;
  GetRMuMuSNuFromScatteringTextureFragCoord(atmosphere, frag_coord,
      r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  return ComputeScatteringDensity(atmosphere, transmittance_texture,
      single_rayleigh_scattering_texture, single_mie_scattering_texture,
      multiple_scattering_texture, irradiance_texture, r, mu, mu_s, nu,
      scattering_order);
}

RadianceSpectrum ComputeMultipleScatteringTexture(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const ScatteringDensityTexture scattering_density_texture,
    const vec3 frag_coord, out Number nu) {
  Length r;
  Number mu;
  Number mu_s;
  bool ray_r_mu_intersects_ground;
  GetRMuMuSNuFromScatteringTextureFragCoord(atmosphere, frag_coord,
      r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  return ComputeMultipleScattering(atmosphere, transmittance_texture,
      scattering_density_texture, r, mu, mu_s, nu,
      ray_r_mu_intersects_ground);
}

IrradianceSpectrum ComputeDirectIrradiance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu_s) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu_s >= -1.0 && mu_s <= 1.0);

  Number alpha_s = atmosphere.sun_angular_radius / rad;
  // Approximate average of the cosine factor mu_s over the visible fraction of
  // the Sun disc.
  Number average_cosine_factor =
    mu_s < -alpha_s ? 0.0 : (mu_s > alpha_s ? mu_s :
        (mu_s + alpha_s) * (mu_s + alpha_s) / (4.0 * alpha_s));

  return atmosphere.solar_irradiance *
      GetTransmittanceToTopAtmosphereBoundary(
          atmosphere, transmittance_texture, r, mu_s) * average_cosine_factor;

}

IrradianceSpectrum ComputeIndirectIrradiance(
    const AtmosphereParameters atmosphere,
    const ReducedScatteringTexture single_rayleigh_scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    const ScatteringTexture multiple_scattering_texture,
    const Length r, const Number mu_s, const int scattering_order) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu_s >= -1.0 && mu_s <= 1.0);
  assert(scattering_order >= 1);

  const int SAMPLE_COUNT = 32;
  const Angle dphi = pi / Number(SAMPLE_COUNT);
  const Angle dtheta = pi / Number(SAMPLE_COUNT);

  IrradianceSpectrum result =
      IrradianceSpectrum(0.0 * watt_per_square_meter_per_nm);
  vec3 omega_s = vec3(sqrt(1.0 - mu_s * mu_s), 0.0, mu_s);
  for (int j = 0; j < SAMPLE_COUNT / 2; ++j) {
    Angle theta = (Number(j) + 0.5) * dtheta;
    for (int i = 0; i < 2 * SAMPLE_COUNT; ++i) {
      Angle phi = (Number(i) + 0.5) * dphi;
      vec3 omega =
          vec3(cos(phi) * sin(theta), sin(phi) * sin(theta), cos(theta));
      SolidAngle domega = (dtheta / rad) * (dphi / rad) * sin(theta) * sr;

      Number nu = dot(omega, omega_s);
      result += GetScattering(atmosphere, single_rayleigh_scattering_texture,
          single_mie_scattering_texture, multiple_scattering_texture,
          r, omega.z, mu_s, nu, false /* ray_r_theta_intersects_ground */,
          scattering_order) *
              omega.z * domega;
    }
  }
  return result;
}

void GetRMuSFromIrradianceTextureUv(const AtmosphereParameters atmosphere,
    const vec2 uv, out Length r, out Number mu_s) {
  assert(uv.x >= 0.0 && uv.x <= 1.0);
  assert(uv.y >= 0.0 && uv.y <= 1.0);
  Number x_mu_s = GetUnitRangeFromTextureCoord(uv.x, IRRADIANCE_TEXTURE_WIDTH);
  Number x_r = GetUnitRangeFromTextureCoord(uv.y, IRRADIANCE_TEXTURE_HEIGHT);
  r = atmosphere.bottom_radius +
      x_r * (atmosphere.top_radius - atmosphere.bottom_radius);
  mu_s = ClampCosine(2.0 * x_mu_s - 1.0);
}

const vec2 IRRADIANCE_TEXTURE_SIZE =
    vec2(IRRADIANCE_TEXTURE_WIDTH, IRRADIANCE_TEXTURE_HEIGHT);

IrradianceSpectrum ComputeDirectIrradianceTexture(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const vec2 frag_coord) {
  Length r;
  Number mu_s;
  GetRMuSFromIrradianceTextureUv(
      atmosphere, frag_coord / IRRADIANCE_TEXTURE_SIZE, r, mu_s);
  return ComputeDirectIrradiance(atmosphere, transmittance_texture, r, mu_s);
}

IrradianceSpectrum ComputeIndirectIrradianceTexture(
    const AtmosphereParameters atmosphere,
    const ReducedScatteringTexture single_rayleigh_scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    const ScatteringTexture multiple_scattering_texture,
    const vec2 frag_coord, const int scattering_order) {
  Length r;
  Number mu_s;
  GetRMuSFromIrradianceTextureUv(
      atmosphere, frag_coord / IRRADIANCE_TEXTURE_SIZE, r, mu_s);
  return ComputeIndirectIrradiance(atmosphere,
      single_rayleigh_scattering_texture, single_mie_scattering_texture,
      multiple_scattering_texture, r, mu_s, scattering_order);
}
`,O=new p.Vector3(.2126,.7152,.0722),N=["solarIrradiance","sunAngularRadius","bottomRadius","topRadius","rayleighDensity","rayleighScattering","mieDensity","mieScattering","mieExtinction","miePhaseFunctionG","absorptionDensity","absorptionExtinction","groundAlbedo","muSMin","skyRadianceToLuminance","sunRadianceToLuminance"];class L{constructor(e,t,r,n,i){this.width=e,this.expTerm=t,this.expScale=r,this.linearTerm=n,this.constantTerm=i}toUniform(){return new p.Uniform({width:this.width,exp_term:this.expTerm,exp_scale:this.expScale,linear_term:this.linearTerm,constant_term:this.constantTerm})}}let F=class{constructor(e){this.solarIrradiance=new p.Vector3(1.474,1.8504,1.91198),this.sunAngularRadius=.004675,this.bottomRadius=636e4,this.topRadius=642e4,this.rayleighDensity=[new L(0,0,0,0,0),new L(0,1,-.125,0,0)],this.rayleighScattering=new p.Vector3(.005802,.013558,.0331),this.mieDensity=[new L(0,0,0,0,0),new L(0,1,-.833333,0,0)],this.mieScattering=new p.Vector3(.003996,.003996,.003996),this.mieExtinction=new p.Vector3(.00444,.00444,.00444),this.miePhaseFunctionG=.8,this.absorptionDensity=[new L(25,0,0,1/15,-2/3),new L(0,0,0,-1/15,8/3)],this.absorptionExtinction=new p.Vector3(65e-5,.001881,85e-6),this.groundAlbedo=new p.Color().setScalar(.1),this.muSMin=Math.cos((0,g.F2)(120)),this.sunRadianceToLuminance=new p.Vector3(98242.786222,69954.398112,66475.012354),this.skyRadianceToLuminance=new p.Vector3(114974.916437,71305.954816,65310.548555),this.sunRadianceToRelativeLuminance=new p.Vector3,this.skyRadianceToRelativeLuminance=new p.Vector3,function(e,t){if(null!=t)for(let r of N){let n=t[r];null!=n&&(e[r]instanceof p.Vector3?e[r].copy(n):e[r]=n)}}(this,e);let t=O.dot(this.sunRadianceToLuminance);this.sunRadianceToRelativeLuminance.copy(this.sunRadianceToLuminance).divideScalar(t),this.skyRadianceToRelativeLuminance.copy(this.skyRadianceToLuminance).divideScalar(t)}toUniform(){return new p.Uniform({solar_irradiance:this.solarIrradiance,sun_angular_radius:this.sunAngularRadius,bottom_radius:.001*this.bottomRadius,top_radius:.001*this.topRadius,rayleigh_density:{layers:this.rayleighDensity.map(e=>e.toUniform().value)},rayleigh_scattering:this.rayleighScattering,mie_density:{layers:this.mieDensity.map(e=>e.toUniform().value)},mie_scattering:this.mieScattering,mie_extinction:this.mieExtinction,mie_phase_function_g:this.miePhaseFunctionG,absorption_density:{layers:this.absorptionDensity.map(e=>e.toUniform().value)},absorption_extinction:this.absorptionExtinction,ground_albedo:this.groundAlbedo,mu_s_min:this.muSMin})}};F.DEFAULT=new F;let P=`precision highp sampler2DArray;

#include "core/depth"
#include "core/math"
#include "core/packing"
#include "core/transform"
#ifdef HAS_SHADOW
#include "core/raySphereIntersection"
#include "core/cascadedShadowMaps"
#include "core/interleavedGradientNoise"
#include "core/vogelDisk"
#endif // HAS_SHADOW

#include "bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "bruneton/common"
#include "bruneton/runtime"

uniform sampler2D normalBuffer;

uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 inverseProjectionMatrix;
uniform mat4 inverseViewMatrix;
uniform float bottomRadius;
uniform mat4 worldToECEFMatrix;
uniform float geometricErrorCorrectionAmount;
uniform vec3 sunDirection;
uniform float cosSunAngularRadius;
uniform vec3 moonDirection;
uniform float moonAngularRadius;
uniform float lunarRadianceScale;
uniform float albedoScale;

#include "sky"

#ifdef HAS_LIGHTING_MASK
uniform sampler2D lightingMaskBuffer;
#endif // HAS_LIGHTING_MASK

// prettier-ignore
#define LIGHTING_MASK_CHANNEL_ LIGHTING_MASK_CHANNEL

#ifdef HAS_OVERLAY
uniform sampler2D overlayBuffer;
#endif // HAS_OVERLAY

#ifdef HAS_SHADOW
uniform sampler2DArray shadowBuffer;
uniform vec2 shadowIntervals[SHADOW_CASCADE_COUNT];
uniform mat4 shadowMatrices[SHADOW_CASCADE_COUNT];
uniform mat4 inverseShadowMatrices[SHADOW_CASCADE_COUNT];
uniform float shadowFar;
uniform float shadowTopHeight;
uniform float shadowRadius;
uniform sampler3D stbnTexture;
uniform int frame;
#endif // HAS_SHADOW

#ifdef HAS_SHADOW_LENGTH
uniform sampler2D shadowLengthBuffer;
#endif // HAS_SHADOW_LENGTH

varying vec3 vCameraPosition;
varying vec3 vRayDirection;
varying vec3 vGeometryAltitudeCorrection;
varying vec3 vEllipsoidRadiiSquared;

vec3 readNormal(const vec2 uv, out bool degenerate) {
  vec3 normal = texture(normalBuffer, uv).xyz;
  degenerate = normal == vec3(0.0);
  #ifdef OCT_ENCODED_NORMAL
  return unpackVec2ToNormal(normal.xy);
  #else // OCT_ENCODED_NORMAL
  return 2.0 * normal - 1.0;
  #endif // OCT_ENCODED_NORMAL
}

void correctGeometricError(inout vec3 positionECEF, inout vec3 normalECEF) {
  // TODO: The error is pronounced at the edge of the ellipsoid due to the
  // large difference between the sphere position and the unprojected position
  // at the current fragment. Calculating the sphere position from the fragment
  // UV may resolve this.

  // Correct way is slerp, but this will be small-angle interpolation anyways.
  vec3 sphereNormal = normalize(positionECEF / vEllipsoidRadiiSquared);
  vec3 spherePosition = ATMOSPHERE.bottom_radius * sphereNormal;
  normalECEF = mix(normalECEF, sphereNormal, geometricErrorCorrectionAmount);
  positionECEF = mix(positionECEF, spherePosition, geometricErrorCorrectionAmount);
}

#if defined(SUN_LIGHT) || defined(SKY_LIGHT)

vec3 getSunSkyIrradiance(
  const vec3 positionECEF,
  const vec3 normal,
  const vec3 inputColor,
  const float sunTransmittance
) {
  // Assume lambertian BRDF. If both SUN_LIGHT and SKY_LIGHT are not defined,
  // regard the inputColor as radiance at the texel.
  vec3 diffuse = inputColor * albedoScale * RECIPROCAL_PI;
  vec3 skyIrradiance;
  vec3 sunIrradiance = GetSunAndSkyIrradiance(positionECEF, normal, sunDirection, skyIrradiance);

  #ifdef HAS_SHADOW
  sunIrradiance *= sunTransmittance;
  #endif // HAS_SHADOW

  #if defined(SUN_LIGHT) && defined(SKY_LIGHT)
  return diffuse * (sunIrradiance + skyIrradiance);
  #elif defined(SUN_LIGHT)
  return diffuse * sunIrradiance;
  #elif defined(SKY_LIGHT)
  return diffuse * skyIrradiance;
  #endif // defined(SUN_LIGHT) && defined(SKY_LIGHT)
}

#endif // defined(SUN_LIGHT) || defined(SKY_LIGHT)

#if defined(TRANSMITTANCE) || defined(INSCATTER)

void applyTransmittanceInscatter(const vec3 positionECEF, float shadowLength, inout vec3 radiance) {
  vec3 transmittance;
  vec3 inscatter = GetSkyRadianceToPoint(
    vCameraPosition,
    positionECEF,
    shadowLength,
    sunDirection,
    transmittance
  );
  #ifdef TRANSMITTANCE
  radiance = radiance * transmittance;
  #endif // TRANSMITTANCE
  #ifdef INSCATTER
  radiance = radiance + inscatter;
  #endif // INSCATTER
}

#endif // defined(TRANSMITTANCE) || defined(INSCATTER)

#ifdef HAS_SHADOW

float getSTBN() {
  ivec3 size = textureSize(stbnTexture, 0);
  vec3 scale = 1.0 / vec3(size);
  return texture(stbnTexture, vec3(gl_FragCoord.xy, float(frame % size.z)) * scale).r;
}

vec2 getShadowUv(const vec3 worldPosition, const int cascadeIndex) {
  vec4 clip = shadowMatrices[cascadeIndex] * vec4(worldPosition, 1.0);
  clip /= clip.w;
  return clip.xy * 0.5 + 0.5;
}

float getDistanceToShadowTop(const vec3 positionECEF) {
  // Distance to the top of the shadows along the sun direction, which matches
  // the ray origin of BSM.
  return raySphereSecondIntersection(
    positionECEF / METER_TO_LENGTH_UNIT, // TODO: Make units consistent
    sunDirection,
    vec3(0.0),
    bottomRadius + shadowTopHeight
  );
}

float readShadowOpticalDepth(const vec2 uv, const float distanceToTop, const int cascadeIndex) {
  // r: frontDepth, g: meanExtinction, b: maxOpticalDepth, a: maxOpticalDepthTail
  vec4 shadow = texture(shadowBuffer, vec3(uv, float(cascadeIndex)));
  // Omit adding maxOpticalDepthTail to avoid pronounced aliasing. Ground
  // shadow will be attenuated by inscatter anyways.
  return min(shadow.b, shadow.g * max(0.0, distanceToTop - shadow.r));
}

float sampleShadowOpticalDepthPCF(
  const vec3 worldPosition,
  const float distanceToTop,
  const float radius,
  const int cascadeIndex
) {
  vec2 uv = getShadowUv(worldPosition, cascadeIndex);
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
    return 0.0;
  }

  vec2 texelSize = vec2(1.0) / vec2(textureSize(shadowBuffer, 0).xy);
  float sum = 0.0;
  vec2 offset;
  #pragma unroll_loop_start
  for (int i = 0; i < 16; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_SAMPLE_COUNT
    offset = vogelDisk(
      UNROLLED_LOOP_INDEX,
      SHADOW_SAMPLE_COUNT,
      interleavedGradientNoise(gl_FragCoord.xy) * PI2
    );
    sum += readShadowOpticalDepth(uv + offset * radius * texelSize, distanceToTop, cascadeIndex);
    #endif // UNROLLED_LOOP_INDEX < SHADOW_SAMPLE_COUNT
  }
  #pragma unroll_loop_end
  return sum / float(SHADOW_SAMPLE_COUNT);
}

float sampleShadowOpticalDepth(
  const vec3 worldPosition,
  const vec3 positionECEF,
  const float radius,
  const float jitter
) {
  float distanceToTop = getDistanceToShadowTop(positionECEF);
  if (distanceToTop <= 0.0) {
    return 0.0;
  }
  int cascadeIndex = getFadedCascadeIndex(
    viewMatrix,
    worldPosition,
    shadowIntervals,
    cameraNear,
    shadowFar,
    jitter
  );
  return cascadeIndex >= 0
    ? sampleShadowOpticalDepthPCF(worldPosition, distanceToTop, radius, cascadeIndex)
    : 0.0;
}

float getShadowRadius(const vec3 worldPosition) {
  vec4 clip = shadowMatrices[0] * vec4(worldPosition, 1.0);
  clip /= clip.w;

  // Offset by 1px in each direction in shadow's clip coordinates.
  vec2 shadowSize = vec2(textureSize(shadowBuffer, 0));
  vec3 offset = vec3(2.0 / shadowSize, 0.0);
  vec4 clipX = clip + offset.xzzz;
  vec4 clipY = clip + offset.zyzz;

  // Convert back to world space.
  vec4 worldX = inverseShadowMatrices[0] * clipX;
  vec4 worldY = inverseShadowMatrices[0] * clipY;

  // Project into the main camera's clip space.
  mat4 viewProjectionMatrix = projectionMatrix * viewMatrix;
  vec4 projected = viewProjectionMatrix * vec4(worldPosition, 1.0);
  vec4 projectedX = viewProjectionMatrix * worldX;
  vec4 projectedY = viewProjectionMatrix * worldY;
  projected /= projected.w;
  projectedX /= projectedX.w;
  projectedY /= projectedY.w;

  // Take the mean of pixel sizes.
  vec2 center = (projected.xy * 0.5 + 0.5) * resolution;
  vec2 offsetX = (projectedX.xy * 0.5 + 0.5) * resolution;
  vec2 offsetY = (projectedY.xy * 0.5 + 0.5) * resolution;
  float size = max(length(offsetX - center), length(offsetY - center));

  return remapClamped(size, 10.0, 50.0, 0.0, shadowRadius);
}

#endif // HAS_SHADOW

void mainImage(const vec4 inputColor, const vec2 uv, out vec4 outputColor) {
  #if defined(HAS_LIGHTING_MASK) && defined(DEBUG_SHOW_LIGHTING_MASK)
  outputColor.rgb = vec3(texture(lightingMaskBuffer, uv).LIGHTING_MASK_CHANNEL_);
  outputColor.a = 1.0;
  return;
  #endif // defined(HAS_LIGHTING_MASK) && defined(DEBUG_SHOW_LIGHTING_MASK)

  float shadowLength = 0.0;
  #ifdef HAS_SHADOW_LENGTH
  shadowLength = texture(shadowLengthBuffer, uv).r;
  #endif // HAS_SHADOW_LENGTH

  #ifdef HAS_OVERLAY
  vec4 overlay = texture(overlayBuffer, uv);
  if (overlay.a == 1.0) {
    outputColor = overlay;
    return;
  }
  #endif // HAS_OVERLAY

  vec3 rayDirection = normalize(vRayDirection);
  vec3 dRDdx = dFdx(rayDirection);
  vec3 dRDdy = dFdy(rayDirection);
  float fragmentAngle = length(dRDdx + dRDdy) / length(rayDirection);

  float depth = readDepthValue(depthBuffer, uv);
  if (depth >= 1.0 - 1e-8) {
    #ifdef SKY
    outputColor.rgb = getSkyRadiance(
      vCameraPosition,
      rayDirection,
      shadowLength,
      sunDirection,
      moonDirection,
      moonAngularRadius,
      lunarRadianceScale,
      fragmentAngle
    );
    outputColor.a = 1.0;
    #else // SKY
    outputColor = inputColor;
    #endif // SKY

    #ifdef HAS_OVERLAY
    outputColor.rgb = outputColor.rgb * (1.0 - overlay.a) + overlay.rgb;
    #endif // HAS_OVERLAY
    return;
  }
  depth = reverseLogDepth(depth, cameraNear, cameraFar);

  // Reconstruct position and normal in world space.
  vec3 viewPosition = screenToView(
    uv,
    depth,
    getViewZ(depth),
    projectionMatrix,
    inverseProjectionMatrix
  );
  vec3 worldPosition = (inverseViewMatrix * vec4(viewPosition, 1.0)).xyz;
  vec3 positionECEF = (worldToECEFMatrix * vec4(worldPosition, 1.0)).xyz;
  positionECEF = positionECEF * METER_TO_LENGTH_UNIT + vGeometryAltitudeCorrection;

  vec3 viewNormal;
  bool degenerateNormal = false;
  #ifdef RECONSTRUCT_NORMAL
  vec3 dVPdx = dFdx(viewPosition);
  vec3 dVPdy = dFdy(viewPosition);
  viewNormal = normalize(cross(dVPdx, dVPdy));
  #elif defined(HAS_NORMALS)
  viewNormal = readNormal(uv, degenerateNormal);
  #endif // defined(HAS_NORMALS)

  #if defined(RECONSTRUCT_NORMAL) || defined(HAS_NORMALS)
  vec3 worldNormal = (inverseViewMatrix * vec4(viewNormal, 0.0)).xyz;
  vec3 normalECEF = (worldToECEFMatrix * vec4(worldNormal, 0.0)).xyz;
  #else // defined(RECONSTRUCT_NORMAL) || defined(HAS_NORMALS)
  vec3 normalECEF = normalize(positionECEF);
  #endif // defined(RECONSTRUCT_NORMAL) || defined(HAS_NORMALS)

  #ifdef CORRECT_GEOMETRIC_ERROR
  correctGeometricError(positionECEF, normalECEF);
  #endif // CORRECT_GEOMETRIC_ERROR

  #ifdef HAS_SHADOW
  float stbn = getSTBN();
  float radius = getShadowRadius(worldPosition);
  float opticalDepth = sampleShadowOpticalDepth(worldPosition, positionECEF, radius, stbn);
  float sunTransmittance = exp(-opticalDepth);
  #else // HAS_SHADOW
  float sunTransmittance = 1.0;
  #endif // HAS_SHADOW

  vec3 radiance;
  #if defined(SUN_LIGHT) || defined(SKY_LIGHT)
  // WORKAROUND: When both post-process lighting and sky options are enabled,
  // stars have degenerate normals. We use this to disable irradiance, which is
  // irrelevant for them.
  if (!degenerateNormal) {
    radiance = getSunSkyIrradiance(positionECEF, normalECEF, inputColor.rgb, sunTransmittance);
  } else {
    radiance = inputColor.rgb;
  }
  #ifdef HAS_LIGHTING_MASK
  float lightingMask = texture(lightingMaskBuffer, uv).LIGHTING_MASK_CHANNEL_;
  radiance = mix(inputColor.rgb, radiance, lightingMask);
  #endif // HAS_LIGHTING_MASK
  #else // defined(SUN_LIGHT) || defined(SKY_LIGHT)
  radiance = inputColor.rgb;
  #endif // defined(SUN_LIGHT) || defined(SKY_LIGHT)

  #if defined(TRANSMITTANCE) || defined(INSCATTER)
  applyTransmittanceInscatter(positionECEF, shadowLength, radiance);
  #endif // defined(TRANSMITTANCE) || defined(INSCATTER)

  outputColor = vec4(radiance, inputColor.a);

  #ifdef HAS_OVERLAY
  outputColor.rgb = outputColor.rgb * (1.0 - overlay.a) + overlay.rgb;
  #endif // HAS_OVERLAY
}
`,G=`uniform mat4 inverseViewMatrix;
uniform mat4 inverseProjectionMatrix;
uniform vec3 cameraPosition;
uniform mat4 worldToECEFMatrix;
uniform vec3 altitudeCorrection;
uniform float geometricErrorCorrectionAmount;
uniform vec3 ellipsoidRadii;

varying vec3 vCameraPosition;
varying vec3 vRayDirection;
varying vec3 vGeometryAltitudeCorrection;
varying vec3 vEllipsoidRadiiSquared;

void getCameraRay(out vec3 origin, out vec3 direction) {
  bool isPerspective = inverseProjectionMatrix[2][3] != 0.0; // 4th entry in the 3rd column

  if (isPerspective) {
    // Calculate the camera ray for a perspective camera.
    vec4 viewPosition = inverseProjectionMatrix * vec4(position, 1.0);
    vec4 worldDirection = inverseViewMatrix * vec4(viewPosition.xyz, 0.0);
    origin = cameraPosition;
    direction = worldDirection.xyz;
  } else {
    // Unprojected points to calculate direction.
    vec4 nearPoint = inverseProjectionMatrix * vec4(position.xy, -1.0, 1.0);
    vec4 farPoint = inverseProjectionMatrix * vec4(position.xy, -0.9, 1.0);
    nearPoint /= nearPoint.w;
    farPoint /= farPoint.w;

    // Calculate world values.
    vec4 worldDirection = inverseViewMatrix * vec4(farPoint.xyz - nearPoint.xyz, 0.0);
    vec4 worldOrigin = inverseViewMatrix * nearPoint;

    // Outputs
    direction = worldDirection.xyz;
    origin = worldOrigin.xyz;
  }
}

void mainSupport() {
  vec3 direction, origin;
  getCameraRay(origin, direction);

  vec3 cameraPositionECEF = (worldToECEFMatrix * vec4(origin, 1.0)).xyz;
  vCameraPosition = (cameraPositionECEF + altitudeCorrection) * METER_TO_LENGTH_UNIT;
  vRayDirection = (worldToECEFMatrix * vec4(direction, 0.0)).xyz;

  vGeometryAltitudeCorrection = altitudeCorrection * METER_TO_LENGTH_UNIT;
  // Gradually turn off the altitude correction on geometries as the geometric
  // error correction takes effect, because that on the ideal sphere will be
  // over corrected.
  // See: https://github.com/takram-design-engineering/three-geospatial/pull/23#issuecomment-2542914656
  #ifdef CORRECT_GEOMETRIC_ERROR
  vGeometryAltitudeCorrection *= 1.0 - geometricErrorCorrectionAmount;
  #endif // CORRECT_GEOMETRIC_ERROR

  vec3 radii = ellipsoidRadii * METER_TO_LENGTH_UNIT;
  vEllipsoidRadiiSquared = radii * radii;
}
`,H=`vec3 getLunarRadiance(const float moonAngularRadius) {
  // Not a physical number but the order of 10^-6 relative to the sun may fit.
  vec3 radiance =
    ATMOSPHERE.solar_irradiance *
    0.000002 /
    (PI * moonAngularRadius * moonAngularRadius) *
    SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
  return radiance;
}

float intersectSphere(const vec3 ray, const vec3 point, const float radius) {
  vec3 P = -point;
  float PoR = dot(P, ray);
  float D = dot(P, P) - radius * radius;
  return -PoR - sqrt(PoR * PoR - D);
}

float orenNayarDiffuse(const vec3 L, const vec3 V, const vec3 N) {
  float NoL = dot(N, L);
  float NoV = dot(N, V);
  float s = dot(L, V) - NoL * NoV;
  float t = mix(1.0, max(NoL, NoV), step(0.0, s));
  return max(0.0, NoL) * (0.62406015 + 0.41284404 * s / t);
}

vec3 getSkyRadiance(
  const vec3 cameraPosition,
  const vec3 rayDirection,
  const float shadowLength,
  const vec3 sunDirection,
  const vec3 moonDirection,
  const float moonAngularRadius,
  const float lunarRadianceScale,
  const float fragmentAngle
) {
  vec3 transmittance;
  vec3 radiance = GetSkyRadiance(
    cameraPosition,
    rayDirection,
    shadowLength,
    sunDirection,
    transmittance
  );

  // Rendering celestial objects without perspective doesn't make sense.
  #ifdef PERSPECTIVE_CAMERA

  #ifdef SUN
  float viewDotSun = dot(rayDirection, sunDirection);
  if (viewDotSun > cosSunAngularRadius) {
    float angle = acos(clamp(viewDotSun, -1.0, 1.0));
    float antialias = smoothstep(
      ATMOSPHERE.sun_angular_radius,
      ATMOSPHERE.sun_angular_radius - fragmentAngle,
      angle
    );
    radiance += transmittance * GetSolarRadiance() * antialias;
  }
  #endif // SUN

  #ifdef MOON
  float intersection = intersectSphere(rayDirection, moonDirection, moonAngularRadius);
  if (intersection > 0.0) {
    vec3 normal = normalize(moonDirection - rayDirection * intersection);
    float diffuse = orenNayarDiffuse(-sunDirection, rayDirection, normal);
    float viewDotMoon = dot(rayDirection, moonDirection);
    float angle = acos(clamp(viewDotMoon, -1.0, 1.0));
    float antialias = smoothstep(moonAngularRadius, moonAngularRadius - fragmentAngle, angle);
    radiance +=
      transmittance *
      getLunarRadiance(moonAngularRadius) *
      lunarRadianceScale *
      diffuse *
      antialias;
  }
  #endif // MOON

  #endif // PERSPECTIVE_CAMERA

  return radiance;
}
`;var U=Object.defineProperty,k=(e,t,r,n)=>{for(var i,a=void 0,o=e.length-1;o>=0;o--)(i=e[o])&&(a=i(t,r,a)||a);return a&&U(t,r,a),a};let j=new p.Vector3,J=new p.Vector3,z=new g.pX,K={blendFunction:m.cf.NORMAL,octEncodedNormal:!1,reconstructNormal:!1,ellipsoid:g.C1.WGS84,correctAltitude:!0,correctGeometricError:!0,sunLight:!1,skyLight:!1,transmittance:!0,inscatter:!0,albedoScale:1,sky:!1,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1,ground:!0};class X extends m.Mj{constructor(e=new p.Camera,t,r=F.DEFAULT){let{blendFunction:n,normalBuffer:i=null,octEncodedNormal:a,reconstructNormal:o,irradianceTexture:s=null,scatteringTexture:l=null,transmittanceTexture:c=null,singleMieScatteringTexture:u=null,higherOrderScatteringTexture:d=null,ellipsoid:h,correctAltitude:f,correctGeometricError:R,sunDirection:b,sunLight:B,skyLight:I,transmittance:D,inscatter:O,albedoScale:N,sky:L,sun:U,moon:k,moonDirection:j,moonAngularRadius:J,lunarRadianceScale:z,ground:X}={...K,...t};super("AerialPerspectiveEffect",(0,g.uw)((0,g.Qe)(P,{core:{depth:_,packing:T,math:E,transform:y,raySphereIntersection:C,cascadedShadowMaps:A,interleavedGradientNoise:v,vogelDisk:S},bruneton:{common:w,definitions:x,runtime:M},sky:H})),{blendFunction:n,vertexShader:G,attributes:m.IF.DEPTH,uniforms:new Map(Object.entries({normalBuffer:new p.Uniform(i),projectionMatrix:new p.Uniform(new p.Matrix4),viewMatrix:new p.Uniform(new p.Matrix4),inverseProjectionMatrix:new p.Uniform(new p.Matrix4),inverseViewMatrix:new p.Uniform(new p.Matrix4),cameraPosition:new p.Uniform(new p.Vector3),bottomRadius:new p.Uniform(r.bottomRadius),ellipsoidRadii:new p.Uniform(new p.Vector3),worldToECEFMatrix:new p.Uniform(new p.Matrix4),altitudeCorrection:new p.Uniform(new p.Vector3),geometricErrorCorrectionAmount:new p.Uniform(0),sunDirection:new p.Uniform(b?.clone()??new p.Vector3),cosSunAngularRadius:new p.Uniform(r.sunAngularRadius),albedoScale:new p.Uniform(N),moonDirection:new p.Uniform(j?.clone()??new p.Vector3),moonAngularRadius:new p.Uniform(J),lunarRadianceScale:new p.Uniform(z),overlayBuffer:new p.Uniform(null),shadowBuffer:new p.Uniform(null),shadowMapSize:new p.Uniform(new p.Vector2),shadowIntervals:new p.Uniform([]),shadowMatrices:new p.Uniform([]),inverseShadowMatrices:new p.Uniform([]),shadowFar:new p.Uniform(0),shadowTopHeight:new p.Uniform(0),shadowRadius:new p.Uniform(3),stbnTexture:new p.Uniform(null),frame:new p.Uniform(0),shadowLengthBuffer:new p.Uniform(null),lightingMaskBuffer:new p.Uniform(null),ATMOSPHERE:r.toUniform(),SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:new p.Uniform(r.sunRadianceToRelativeLuminance),SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:new p.Uniform(r.skyRadianceToRelativeLuminance),irradiance_texture:new p.Uniform(s),scattering_texture:new p.Uniform(l),transmittance_texture:new p.Uniform(c),single_mie_scattering_texture:new p.Uniform(null),higher_order_scattering_texture:new p.Uniform(null)})),defines:new Map([["TRANSMITTANCE_TEXTURE_WIDTH","256"],["TRANSMITTANCE_TEXTURE_HEIGHT","64"],["SCATTERING_TEXTURE_R_SIZE","32"],["SCATTERING_TEXTURE_MU_SIZE","128"],["SCATTERING_TEXTURE_MU_S_SIZE","32"],["SCATTERING_TEXTURE_NU_SIZE","8"],["IRRADIANCE_TEXTURE_WIDTH","64"],["IRRADIANCE_TEXTURE_HEIGHT","16"],["METER_TO_LENGTH_UNIT","0.0010000"]])}),this.camera=e,this.atmosphere=r,this.overlay=null,this.shadow=null,this.shadowLength=null,this.lightingMask=null,this.hasNormals=!1,this.combinedScatteringTextures=!1,this.hasHigherOrderScatteringTexture=!1,this.shadowSampleCount=8,this.octEncodedNormal=a,this.reconstructNormal=o,this.singleMieScatteringTexture=u,this.higherOrderScatteringTexture=d,this.ellipsoid=h,this.correctAltitude=f,this.correctGeometricError=R,this.sunLight=B,this.skyLight=I,this.transmittance=D,this.inscatter=O,this.sky=L,this.sun=U,this.moon=k,this.ground=X}get mainCamera(){return this.camera}set mainCamera(e){this.camera=e}copyCameraSettings(e){let{projectionMatrix:t,matrixWorldInverse:r,projectionMatrixInverse:n,matrixWorld:i}=e,a=this.uniforms;a.get("projectionMatrix").value.copy(t),a.get("viewMatrix").value.copy(r),a.get("inverseProjectionMatrix").value.copy(n),a.get("inverseViewMatrix").value.copy(i);let o=e.getWorldPosition(a.get("cameraPosition").value),s=a.get("worldToECEFMatrix").value,l=j.copy(o).applyMatrix4(s);try{let e=z.setFromECEF(l).height,r=J.set(0,this.ellipsoid.maximumRadius,-Math.max(0,e)).applyMatrix4(t);a.get("geometricErrorCorrectionAmount").value=(0,g.Ih)((0,g.Ew)(r.y,41.5,13.8,0,1))}catch{return}let c=a.get("altitudeCorrection");this.correctAltitude?B(l,this.atmosphere.bottomRadius,this.ellipsoid,c.value):c.value.setScalar(0)}updateOverlay(){let e=!1,{uniforms:t,defines:r,overlay:n}=this,i=r.has("HAS_OVERLAY"),a=null!=n;return a!==i&&(a?r.set("HAS_OVERLAY","1"):(r.delete("HAS_OVERLAY"),t.get("overlayBuffer").value=null),e=!0),a&&(t.get("overlayBuffer").value=n.map),e}updateShadow(){let e=!1,{uniforms:t,defines:r,shadow:n}=this,i=r.has("HAS_SHADOW"),a=null!=n;return a!==i&&(a?r.set("HAS_SHADOW","1"):(r.delete("HAS_SHADOW"),t.get("shadowBuffer").value=null),e=!0),a&&(r.get("SHADOW_CASCADE_COUNT")!==`${n.cascadeCount}`&&(r.set("SHADOW_CASCADE_COUNT",n.cascadeCount.toFixed(0)),e=!0),t.get("shadowBuffer").value=n.map,t.get("shadowMapSize").value=n.mapSize,t.get("shadowIntervals").value=n.intervals,t.get("shadowMatrices").value=n.matrices,t.get("inverseShadowMatrices").value=n.inverseMatrices,t.get("shadowFar").value=n.far,t.get("shadowTopHeight").value=n.topHeight),e}updateShadowLength(){let e=!1,{uniforms:t,defines:r,shadowLength:n}=this,i=r.has("HAS_SHADOW_LENGTH"),a=null!=n;return a!==i&&(a?r.set("HAS_SHADOW_LENGTH","1"):(r.delete("HAS_SHADOW_LENGTH"),t.get("shadowLengthBuffer").value=null),e=!0),a&&(t.get("shadowLengthBuffer").value=n.map),e}updateLightingMask(){let e=!1,{uniforms:t,defines:r,lightingMask:n}=this,i=r.has("HAS_LIGHTING_MASK"),a=null!=n;if(a!==i&&(a?r.set("HAS_LIGHTING_MASK","1"):(r.delete("HAS_LIGHTING_MASK"),t.get("lightingMaskBuffer").value=null),e=!0),a){t.get("lightingMaskBuffer").value=n.map;let i=r.get("LIGHTING_MASK_CHANNEL"),a=n.channel;a!==i&&(/^[rgba]$/.test(a)?(r.set("LIGHTING_MASK_CHANNEL",a),e=!0):console.error(`Expression validation failed: ${a}`))}return e}update(e,t,r){this.copyCameraSettings(this.camera);let n=!1;n||=this.updateOverlay(),n||=this.updateShadow(),n||=this.updateShadowLength(),(n||=this.updateLightingMask())&&this.setChanged(),++this.uniforms.get("frame").value}get normalBuffer(){return this.uniforms.get("normalBuffer").value}set normalBuffer(e){this.uniforms.get("normalBuffer").value=e,this.hasNormals=null!=e}get irradianceTexture(){return this.uniforms.get("irradiance_texture").value}set irradianceTexture(e){this.uniforms.get("irradiance_texture").value=e}get scatteringTexture(){return this.uniforms.get("scattering_texture").value}set scatteringTexture(e){this.uniforms.get("scattering_texture").value=e}get transmittanceTexture(){return this.uniforms.get("transmittance_texture").value}set transmittanceTexture(e){this.uniforms.get("transmittance_texture").value=e}get singleMieScatteringTexture(){return this.uniforms.get("single_mie_scattering_texture").value}set singleMieScatteringTexture(e){this.uniforms.get("single_mie_scattering_texture").value=e,this.combinedScatteringTextures=null==e}get higherOrderScatteringTexture(){return this.uniforms.get("higher_order_scattering_texture").value}set higherOrderScatteringTexture(e){this.uniforms.get("higher_order_scattering_texture").value=e,this.hasHigherOrderScatteringTexture=null!=e}get ellipsoid(){return this._ellipsoid}set ellipsoid(e){this._ellipsoid=e,this.uniforms.get("ellipsoidRadii").value.copy(e.radii)}get worldToECEFMatrix(){return this.uniforms.get("worldToECEFMatrix").value}get sunDirection(){return this.uniforms.get("sunDirection").value}get sunAngularRadius(){return this.uniforms.get("ATMOSPHERE").value.sun_angular_radius}set sunAngularRadius(e){this.uniforms.get("ATMOSPHERE").value.sun_angular_radius=e,this.uniforms.get("cosSunAngularRadius").value=Math.cos(e)}get albedoScale(){return this.uniforms.get("albedoScale").value}set albedoScale(e){this.uniforms.get("albedoScale").value=e}get moonDirection(){return this.uniforms.get("moonDirection").value}get moonAngularRadius(){return this.uniforms.get("moonAngularRadius").value}set moonAngularRadius(e){this.uniforms.get("moonAngularRadius").value=e}get lunarRadianceScale(){return this.uniforms.get("lunarRadianceScale").value}set lunarRadianceScale(e){this.uniforms.get("lunarRadianceScale").value=e}get stbnTexture(){return this.uniforms.get("stbnTexture").value}set stbnTexture(e){this.uniforms.get("stbnTexture").value=e}get shadowRadius(){return this.uniforms.get("shadowRadius").value}set shadowRadius(e){this.uniforms.get("shadowRadius").value=e}}k([(0,g.E8)("OCT_ENCODED_NORMAL")],X.prototype,"octEncodedNormal"),k([(0,g.E8)("RECONSTRUCT_NORMAL")],X.prototype,"reconstructNormal"),k([(0,g.E8)("HAS_NORMALS")],X.prototype,"hasNormals"),k([(0,g.E8)("COMBINED_SCATTERING_TEXTURES")],X.prototype,"combinedScatteringTextures"),k([(0,g.E8)("HAS_HIGHER_ORDER_SCATTERING_TEXTURE")],X.prototype,"hasHigherOrderScatteringTexture"),k([(0,g.E8)("CORRECT_GEOMETRIC_ERROR")],X.prototype,"correctGeometricError"),k([(0,g.E8)("SUN_LIGHT")],X.prototype,"sunLight"),k([(0,g.E8)("SKY_LIGHT")],X.prototype,"skyLight"),k([(0,g.E8)("TRANSMITTANCE")],X.prototype,"transmittance"),k([(0,g.E8)("INSCATTER")],X.prototype,"inscatter"),k([(0,g.E8)("SKY")],X.prototype,"sky"),k([(0,g.E8)("SUN")],X.prototype,"sun"),k([(0,g.E8)("MOON")],X.prototype,"moon"),k([(0,g.E8)("GROUND")],X.prototype,"ground"),k([(0,g.HW)("SHADOW_SAMPLE_COUNT",{min:1,max:16})],X.prototype,"shadowSampleCount");var W=Object.defineProperty,Y=(e,t,r,n)=>{for(var i,a=void 0,o=e.length-1;o>=0;o--)(i=e[o])&&(a=i(t,r,a)||a);return a&&W(t,r,a),a};let V=new p.Vector3,Q={ellipsoid:g.C1.WGS84,correctAltitude:!0,renderTargetCount:1};class Z extends p.RawShaderMaterial{constructor(e,t=F.DEFAULT){let{irradianceTexture:r=null,scatteringTexture:n=null,transmittanceTexture:i=null,singleMieScatteringTexture:a=null,higherOrderScatteringTexture:o=null,ellipsoid:s,correctAltitude:l,sunDirection:c,sunAngularRadius:u,renderTargetCount:d,...h}={...Q,...e};super({toneMapped:!1,depthWrite:!1,depthTest:!1,...h,uniforms:{cameraPosition:new p.Uniform(new p.Vector3),worldToECEFMatrix:new p.Uniform(new p.Matrix4),altitudeCorrection:new p.Uniform(new p.Vector3),sunDirection:new p.Uniform(c?.clone()??new p.Vector3),cosSunAngularRadius:new p.Uniform(t.sunAngularRadius),ATMOSPHERE:t.toUniform(),SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:new p.Uniform(t.sunRadianceToRelativeLuminance),SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:new p.Uniform(t.skyRadianceToRelativeLuminance),irradiance_texture:new p.Uniform(r),scattering_texture:new p.Uniform(n),transmittance_texture:new p.Uniform(i),single_mie_scattering_texture:new p.Uniform(null),higher_order_scattering_texture:new p.Uniform(null),...h.uniforms},defines:{PI:`${Math.PI}`,TRANSMITTANCE_TEXTURE_WIDTH:"256",TRANSMITTANCE_TEXTURE_HEIGHT:"64",SCATTERING_TEXTURE_R_SIZE:"32",SCATTERING_TEXTURE_MU_SIZE:"128",SCATTERING_TEXTURE_MU_S_SIZE:"32",SCATTERING_TEXTURE_NU_SIZE:"8",IRRADIANCE_TEXTURE_WIDTH:"64",IRRADIANCE_TEXTURE_HEIGHT:"16",METER_TO_LENGTH_UNIT:"0.0010000",...h.defines}}),this.atmosphere=t,this.combinedScatteringTextures=!1,this.hasHigherOrderScatteringTexture=!1,this.singleMieScatteringTexture=a,this.higherOrderScatteringTexture=o,this.ellipsoid=s,this.correctAltitude=l,null!=u&&(this.sunAngularRadius=u),this.renderTargetCount=d}copyCameraSettings(e){let t=this.uniforms,r=e.getWorldPosition(t.cameraPosition.value),n=V.copy(r).applyMatrix4(t.worldToECEFMatrix.value),i=t.altitudeCorrection.value;this.correctAltitude?B(n,this.atmosphere.bottomRadius,this.ellipsoid,i):i.setScalar(0)}onBeforeCompile(e,t){e.fragmentShader=function(e,t){let r="",n="";for(let e=1;e<t;++e)r+=`layout(location = ${e}) out float renderTarget${e};
`,n+=`renderTarget${e} = 0.0;
`;return e.replace("#include <mrt_layout>",r).replace("#include <mrt_output>",n)}(e.fragmentShader,this.renderTargetCount)}onBeforeRender(e,t,r,n,i,a){this.copyCameraSettings(r)}get irradianceTexture(){return this.uniforms.irradiance_texture.value}set irradianceTexture(e){this.uniforms.irradiance_texture.value=e}get scatteringTexture(){return this.uniforms.scattering_texture.value}set scatteringTexture(e){this.uniforms.scattering_texture.value=e}get transmittanceTexture(){return this.uniforms.transmittance_texture.value}set transmittanceTexture(e){this.uniforms.transmittance_texture.value=e}get singleMieScatteringTexture(){return this.uniforms.single_mie_scattering_texture.value}set singleMieScatteringTexture(e){this.uniforms.single_mie_scattering_texture.value=e,this.combinedScatteringTextures=null==e}get higherOrderScatteringTexture(){return this.uniforms.higher_order_scattering_texture.value}set higherOrderScatteringTexture(e){this.uniforms.higher_order_scattering_texture.value=e,this.hasHigherOrderScatteringTexture=null!=e}get worldToECEFMatrix(){return this.uniforms.worldToECEFMatrix.value}get sunDirection(){return this.uniforms.sunDirection.value}get sunAngularRadius(){return this.uniforms.ATMOSPHERE.value.sun_angular_radius}set sunAngularRadius(e){this.uniforms.ATMOSPHERE.value.sun_angular_radius=e,this.uniforms.cosSunAngularRadius.value=Math.cos(e)}get renderTargetCount(){return this._renderTargetCount}set renderTargetCount(e){e!==this.renderTargetCount&&(this._renderTargetCount=e,this.needsUpdate=!0)}}Y([(0,g.E8)("COMBINED_SCATTERING_TEXTURES")],Z.prototype,"combinedScatteringTextures"),Y([(0,g.E8)("HAS_HIGHER_ORDER_SCATTERING_TEXTURE")],Z.prototype,"hasHigherOrderScatteringTexture");let q=new Date("2000-01-01T12:00:00Z"),$=2*Math.PI,ee=180/Math.PI*3600;function et(e){if(!Number.isFinite(e))throw console.trace(),`Value is not a finite number: ${e}`;return e}function er(e){return e-Math.floor(e)}!function(e){e.Sun="Sun",e.Moon="Moon",e.Mercury="Mercury",e.Venus="Venus",e.Earth="Earth",e.Mars="Mars",e.Jupiter="Jupiter",e.Saturn="Saturn",e.Uranus="Uranus",e.Neptune="Neptune",e.Pluto="Pluto",e.SSB="SSB",e.EMB="EMB",e.Star1="Star1",e.Star2="Star2",e.Star3="Star3",e.Star4="Star4",e.Star5="Star5",e.Star6="Star6",e.Star7="Star7",e.Star8="Star8"}(i||(i={}));let en=[i.Star1,i.Star2,i.Star3,i.Star4,i.Star5,i.Star6,i.Star7,i.Star8],ei=[{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0}];function ea(e){let t=function(e){let t=en.indexOf(e);return t>=0?ei[t]:null}(e);return t&&t.dist>0?t:null}!function(e){e[e.From2000=0]="From2000",e[e.Into2000=1]="Into2000"}(a||(a={}));let eo={Mercury:[[[[4.40250710144,0,0],[.40989414977,1.48302034195,26087.9031415742],[.050462942,4.47785489551,52175.8062831484],[.00855346844,1.16520322459,78263.70942472259],[.00165590362,4.11969163423,104351.61256629678],[34561897e-11,.77930768443,130439.51570787099],[7583476e-11,3.71348404924,156527.41884944518]],[[26087.90313685529,0,0],[.01131199811,6.21874197797,26087.9031415742],[.00292242298,3.04449355541,52175.8062831484],[75775081e-11,6.08568821653,78263.70942472259],[19676525e-11,2.80965111777,104351.61256629678]]],[[[.11737528961,1.98357498767,26087.9031415742],[.02388076996,5.03738959686,52175.8062831484],[.01222839532,3.14159265359,0],[.0054325181,1.79644363964,78263.70942472259],[.0012977877,4.83232503958,104351.61256629678],[31866927e-11,1.58088495658,130439.51570787099],[7963301e-11,4.60972126127,156527.41884944518]],[[.00274646065,3.95008450011,26087.9031415742],[99737713e-11,3.14159265359,0]]],[[[.39528271651,0,0],[.07834131818,6.19233722598,26087.9031415742],[.00795525558,2.95989690104,52175.8062831484],[.00121281764,6.01064153797,78263.70942472259],[21921969e-11,2.77820093972,104351.61256629678],[4354065e-11,5.82894543774,130439.51570787099]],[[.0021734774,4.65617158665,26087.9031415742],[44141826e-11,1.42385544001,52175.8062831484]]]],Venus:[[[[3.17614666774,0,0],[.01353968419,5.59313319619,10213.285546211],[89891645e-11,5.30650047764,20426.571092422],[5477194e-11,4.41630661466,7860.4193924392],[3455741e-11,2.6996444782,11790.6290886588],[2372061e-11,2.99377542079,3930.2096962196],[1317168e-11,5.18668228402,26.2983197998],[1664146e-11,4.25018630147,1577.3435424478],[1438387e-11,4.15745084182,9683.5945811164],[1200521e-11,6.15357116043,30639.856638633]],[[10213.28554621638,0,0],[95617813e-11,2.4640651111,10213.285546211],[7787201e-11,.6247848222,20426.571092422]]],[[[.05923638472,.26702775812,10213.285546211],[40107978e-11,1.14737178112,20426.571092422],[32814918e-11,3.14159265359,0]],[[.00287821243,1.88964962838,10213.285546211]]],[[[.72334820891,0,0],[.00489824182,4.02151831717,10213.285546211],[1658058e-11,4.90206728031,20426.571092422],[1378043e-11,1.12846591367,11790.6290886588],[1632096e-11,2.84548795207,7860.4193924392],[498395e-11,2.58682193892,9683.5945811164],[221985e-11,2.01346696541,19367.1891622328],[237454e-11,2.55136053886,15720.8387848784]],[[34551041e-11,.89198706276,10213.285546211]]]],Earth:[[[[1.75347045673,0,0],[.03341656453,4.66925680415,6283.0758499914],[34894275e-11,4.62610242189,12566.1516999828],[3417572e-11,2.82886579754,3.523118349],[3497056e-11,2.74411783405,5753.3848848968],[3135899e-11,3.62767041756,77713.7714681205],[2676218e-11,4.41808345438,7860.4193924392],[2342691e-11,6.13516214446,3930.2096962196],[1273165e-11,2.03709657878,529.6909650946],[1324294e-11,.74246341673,11506.7697697936],[901854e-11,2.04505446477,26.2983197998],[1199167e-11,1.10962946234,1577.3435424478],[857223e-11,3.50849152283,398.1490034082],[779786e-11,1.17882681962,5223.6939198022],[99025e-10,5.23268072088,5884.9268465832],[753141e-11,2.53339052847,5507.5532386674],[505267e-11,4.58292599973,18849.2275499742],[492392e-11,4.20505711826,775.522611324],[356672e-11,2.91954114478,.0673103028],[284125e-11,1.89869240932,796.2980068164],[242879e-11,.34481445893,5486.777843175],[317087e-11,5.84901948512,11790.6290886588],[271112e-11,.31486255375,10977.078804699],[206217e-11,4.80646631478,2544.3144198834],[205478e-11,1.86953770281,5573.1428014331],[202318e-11,2.45767790232,6069.7767545534],[126225e-11,1.08295459501,20.7753954924],[155516e-11,.83306084617,213.299095438]],[[6283.0758499914,0,0],[.00206058863,2.67823455808,6283.0758499914],[4303419e-11,2.63512233481,12566.1516999828]],[[8721859e-11,1.07253635559,6283.0758499914]]],[[],[[.00227777722,3.4137662053,6283.0758499914],[3805678e-11,3.37063423795,12566.1516999828]]],[[[1.00013988784,0,0],[.01670699632,3.09846350258,6283.0758499914],[13956024e-11,3.05524609456,12566.1516999828],[308372e-10,5.19846674381,77713.7714681205],[1628463e-11,1.17387558054,5753.3848848968],[1575572e-11,2.84685214877,7860.4193924392],[924799e-11,5.45292236722,11506.7697697936],[542439e-11,4.56409151453,3930.2096962196],[47211e-10,3.66100022149,5884.9268465832],[85831e-11,1.27079125277,161000.6857376741],[57056e-11,2.01374292245,83996.84731811189],[55736e-11,5.2415979917,71430.69561812909],[174844e-11,3.01193636733,18849.2275499742],[243181e-11,4.2734953079,11790.6290886588]],[[.00103018607,1.10748968172,6283.0758499914],[1721238e-11,1.06442300386,12566.1516999828]],[[4359385e-11,5.78455133808,6283.0758499914]]]],Mars:[[[[6.20347711581,0,0],[.18656368093,5.0503710027,3340.6124266998],[.01108216816,5.40099836344,6681.2248533996],[91798406e-11,5.75478744667,10021.8372800994],[27744987e-11,5.97049513147,3.523118349],[10610235e-11,2.93958560338,2281.2304965106],[12315897e-11,.84956094002,2810.9214616052],[8926784e-11,4.15697846427,.0172536522],[8715691e-11,6.11005153139,13362.4497067992],[6797556e-11,.36462229657,398.1490034082],[7774872e-11,3.33968761376,5621.8429232104],[3575078e-11,1.6618650571,2544.3144198834],[4161108e-11,.22814971327,2942.4634232916],[3075252e-11,.85696614132,191.4482661116],[2628117e-11,.64806124465,3337.0893083508],[2937546e-11,6.07893711402,.0673103028],[2389414e-11,5.03896442664,796.2980068164],[2579844e-11,.02996736156,3344.1355450488],[1528141e-11,1.14979301996,6151.533888305],[1798806e-11,.65634057445,529.6909650946],[1264357e-11,3.62275122593,5092.1519581158],[1286228e-11,3.06796065034,2146.1654164752],[1546404e-11,2.91579701718,1751.539531416],[1024902e-11,3.69334099279,8962.4553499102],[891566e-11,.18293837498,16703.062133499],[858759e-11,2.4009381194,2914.0142358238],[832715e-11,2.46418619474,3340.5951730476],[83272e-10,4.49495782139,3340.629680352],[712902e-11,3.66335473479,1059.3819301892],[748723e-11,3.82248614017,155.4203994342],[723861e-11,.67497311481,3738.761430108],[635548e-11,2.92182225127,8432.7643848156],[655162e-11,.48864064125,3127.3133312618],[550474e-11,3.81001042328,.9803210682],[55275e-10,4.47479317037,1748.016413067],[425966e-11,.55364317304,6283.0758499914],[415131e-11,.49662285038,213.299095438],[472167e-11,3.62547124025,1194.4470102246],[306551e-11,.38052848348,6684.7479717486],[312141e-11,.99853944405,6677.7017350506],[293198e-11,4.22131299634,20.7753954924],[302375e-11,4.48618007156,3532.0606928114],[274027e-11,.54222167059,3340.545116397],[281079e-11,5.88163521788,1349.8674096588],[231183e-11,1.28242156993,3870.3033917944],[283602e-11,5.7688543494,3149.1641605882],[236117e-11,5.75503217933,3333.498879699],[274033e-11,.13372524985,3340.6797370026],[299395e-11,2.78323740866,6254.6266625236]],[[3340.61242700512,0,0],[.01457554523,3.60433733236,3340.6124266998],[.00168414711,3.92318567804,6681.2248533996],[20622975e-11,4.26108844583,10021.8372800994],[3452392e-11,4.7321039319,3.523118349],[2586332e-11,4.60670058555,13362.4497067992],[841535e-11,4.45864030426,2281.2304965106]],[[58152577e-11,2.04961712429,3340.6124266998],[13459579e-11,2.45738706163,6681.2248533996]]],[[[.03197134986,3.76832042431,3340.6124266998],[.00298033234,4.10616996305,6681.2248533996],[.00289104742,0,0],[31365539e-11,4.4465105309,10021.8372800994],[34841e-9,4.7881254926,13362.4497067992]],[[.00217310991,6.04472194776,3340.6124266998],[20976948e-11,3.14159265359,0],[12834709e-11,1.60810667915,6681.2248533996]]],[[[1.53033488271,0,0],[.1418495316,3.47971283528,3340.6124266998],[.00660776362,3.81783443019,6681.2248533996],[46179117e-11,4.15595316782,10021.8372800994],[8109733e-11,5.55958416318,2810.9214616052],[7485318e-11,1.77239078402,5621.8429232104],[5523191e-11,1.3643630377,2281.2304965106],[382516e-10,4.49407183687,13362.4497067992],[2306537e-11,.09081579001,2544.3144198834],[1999396e-11,5.36059617709,3337.0893083508],[2484394e-11,4.9254563992,2942.4634232916],[1960195e-11,4.74249437639,3344.1355450488],[1167119e-11,2.11260868341,5092.1519581158],[1102816e-11,5.00908403998,398.1490034082],[899066e-11,4.40791133207,529.6909650946],[992252e-11,5.83861961952,6151.533888305],[807354e-11,2.10217065501,1059.3819301892],[797915e-11,3.44839203899,796.2980068164],[740975e-11,1.49906336885,2146.1654164752]],[[.01107433345,2.03250524857,3340.6124266998],[.00103175887,2.37071847807,6681.2248533996],[128772e-9,0,0],[1081588e-10,2.70888095665,10021.8372800994]],[[44242249e-11,.47930604954,3340.6124266998],[8138042e-11,.86998389204,6681.2248533996]]]],Jupiter:[[[[.59954691494,0,0],[.09695898719,5.06191793158,529.6909650946],[.00573610142,1.44406205629,7.1135470008],[.00306389205,5.41734730184,1059.3819301892],[97178296e-11,4.14264726552,632.7837393132],[72903078e-11,3.64042916389,522.5774180938],[64263975e-11,3.41145165351,103.0927742186],[39806064e-11,2.29376740788,419.4846438752],[38857767e-11,1.27231755835,316.3918696566],[27964629e-11,1.7845459182,536.8045120954],[1358973e-10,5.7748104079,1589.0728952838],[8246349e-11,3.5822792584,206.1855484372],[8768704e-11,3.63000308199,949.1756089698],[7368042e-11,5.0810119427,735.8765135318],[626315e-10,.02497628807,213.299095438],[6114062e-11,4.51319998626,1162.4747044078],[4905396e-11,1.32084470588,110.2063212194],[5305285e-11,1.30671216791,14.2270940016],[5305441e-11,4.18625634012,1052.2683831884],[4647248e-11,4.69958103684,3.9321532631],[3045023e-11,4.31676431084,426.598190876],[2609999e-11,1.56667394063,846.0828347512],[2028191e-11,1.06376530715,3.1813937377],[1764763e-11,2.14148655117,1066.49547719],[1722972e-11,3.88036268267,1265.5674786264],[1920945e-11,.97168196472,639.897286314],[1633223e-11,3.58201833555,515.463871093],[1431999e-11,4.29685556046,625.6701923124],[973272e-11,4.09764549134,95.9792272178]],[[529.69096508814,0,0],[.00489503243,4.2208293947,529.6909650946],[.00228917222,6.02646855621,7.1135470008],[30099479e-11,4.54540782858,1059.3819301892],[2072092e-10,5.45943156902,522.5774180938],[12103653e-11,.16994816098,536.8045120954],[6067987e-11,4.42422292017,103.0927742186],[5433968e-11,3.98480737746,419.4846438752],[4237744e-11,5.89008707199,14.2270940016]],[[47233601e-11,4.32148536482,7.1135470008],[30649436e-11,2.929777887,529.6909650946],[14837605e-11,3.14159265359,0]]],[[[.02268615702,3.55852606721,529.6909650946],[.00109971634,3.90809347197,1059.3819301892],[.00110090358,0,0],[8101428e-11,3.60509572885,522.5774180938],[6043996e-11,4.25883108339,1589.0728952838],[6437782e-11,.30627119215,536.8045120954]],[[78203446e-11,1.52377859742,529.6909650946]]],[[[5.20887429326,0,0],[.25209327119,3.49108639871,529.6909650946],[.00610599976,3.84115365948,1059.3819301892],[.00282029458,2.57419881293,632.7837393132],[.00187647346,2.07590383214,522.5774180938],[86792905e-11,.71001145545,419.4846438752],[72062974e-11,.21465724607,536.8045120954],[65517248e-11,5.9799588479,316.3918696566],[29134542e-11,1.67759379655,103.0927742186],[30135335e-11,2.16132003734,949.1756089698],[23453271e-11,3.54023522184,735.8765135318],[22283743e-11,4.19362594399,1589.0728952838],[23947298e-11,.2745803748,7.1135470008],[13032614e-11,2.96042965363,1162.4747044078],[970336e-10,1.90669633585,206.1855484372],[12749023e-11,2.71550286592,1052.2683831884],[7057931e-11,2.18184839926,1265.5674786264],[6137703e-11,6.26418240033,846.0828347512],[2616976e-11,2.00994012876,1581.959348283]],[[.0127180152,2.64937512894,529.6909650946],[61661816e-11,3.00076460387,1059.3819301892],[53443713e-11,3.89717383175,522.5774180938],[31185171e-11,4.88276958012,536.8045120954],[41390269e-11,0,0]]]],Saturn:[[[[.87401354025,0,0],[.11107659762,3.96205090159,213.299095438],[.01414150957,4.58581516874,7.1135470008],[.00398379389,.52112032699,206.1855484372],[.00350769243,3.30329907896,426.598190876],[.00206816305,.24658372002,103.0927742186],[792713e-9,3.84007056878,220.4126424388],[23990355e-11,4.66976924553,110.2063212194],[16573588e-11,.43719228296,419.4846438752],[14906995e-11,5.76903183869,316.3918696566],[1582029e-10,.93809155235,632.7837393132],[14609559e-11,1.56518472,3.9321532631],[13160301e-11,4.44891291899,14.2270940016],[15053543e-11,2.71669915667,639.897286314],[13005299e-11,5.98119023644,11.0457002639],[10725067e-11,3.12939523827,202.2533951741],[5863206e-11,.23656938524,529.6909650946],[5227757e-11,4.20783365759,3.1813937377],[6126317e-11,1.76328667907,277.0349937414],[5019687e-11,3.17787728405,433.7117378768],[459255e-10,.61977744975,199.0720014364],[4005867e-11,2.24479718502,63.7358983034],[2953796e-11,.98280366998,95.9792272178],[387367e-10,3.22283226966,138.5174968707],[2461186e-11,2.03163875071,735.8765135318],[3269484e-11,.77492638211,949.1756089698],[1758145e-11,3.2658010994,522.5774180938],[1640172e-11,5.5050445305,846.0828347512],[1391327e-11,4.02333150505,323.5054166574],[1580648e-11,4.37265307169,309.2783226558],[1123498e-11,2.83726798446,415.5524906121],[1017275e-11,3.71700135395,227.5261894396],[848642e-11,3.1915017083,209.3669421749]],[[213.2990952169,0,0],[.01297370862,1.82834923978,213.299095438],[.00564345393,2.88499717272,7.1135470008],[93734369e-11,1.06311793502,426.598190876],[.00107674962,2.27769131009,206.1855484372],[40244455e-11,2.04108104671,220.4126424388],[19941774e-11,1.2795439047,103.0927742186],[10511678e-11,2.7488034213,14.2270940016],[6416106e-11,.38238295041,639.897286314],[4848994e-11,2.43037610229,419.4846438752],[4056892e-11,2.92133209468,110.2063212194],[3768635e-11,3.6496533078,3.9321532631]],[[.0011644133,1.17988132879,7.1135470008],[91841837e-11,.0732519584,213.299095438],[36661728e-11,0,0],[15274496e-11,4.06493179167,206.1855484372]]],[[[.04330678039,3.60284428399,213.299095438],[.00240348302,2.85238489373,426.598190876],[84745939e-11,0,0],[30863357e-11,3.48441504555,220.4126424388],[34116062e-11,.57297307557,206.1855484372],[1473407e-10,2.11846596715,639.897286314],[9916667e-11,5.79003188904,419.4846438752],[6993564e-11,4.7360468972,7.1135470008],[4807588e-11,5.43305312061,316.3918696566]],[[.00198927992,4.93901017903,213.299095438],[36947916e-11,3.14159265359,0],[17966989e-11,.5197943111,426.598190876]]],[[[9.55758135486,0,0],[.52921382865,2.39226219573,213.299095438],[.01873679867,5.2354960466,206.1855484372],[.01464663929,1.64763042902,426.598190876],[.00821891141,5.93520042303,316.3918696566],[.00547506923,5.0153261898,103.0927742186],[.0037168465,2.27114821115,220.4126424388],[.00361778765,3.13904301847,7.1135470008],[.00140617506,5.70406606781,632.7837393132],[.00108974848,3.29313390175,110.2063212194],[69006962e-11,5.94099540992,419.4846438752],[61053367e-11,.94037691801,639.897286314],[48913294e-11,1.55733638681,202.2533951741],[34143772e-11,.19519102597,277.0349937414],[32401773e-11,5.47084567016,949.1756089698],[20936596e-11,.46349251129,735.8765135318],[9796004e-11,5.20477537945,1265.5674786264],[11993338e-11,5.98050967385,846.0828347512],[208393e-9,1.52102476129,433.7117378768],[15298404e-11,3.0594381494,529.6909650946],[6465823e-11,.17732249942,1052.2683831884],[11380257e-11,1.7310542704,522.5774180938],[3419618e-11,4.94550542171,1581.959348283]],[[.0618298134,.2584351148,213.299095438],[.00506577242,.71114625261,206.1855484372],[.00341394029,5.79635741658,426.598190876],[.00188491195,.47215589652,220.4126424388],[.00186261486,3.14159265359,0],[.00143891146,1.40744822888,7.1135470008]],[[.00436902572,4.78671677509,213.299095438]]]],Uranus:[[[[5.48129294297,0,0],[.09260408234,.89106421507,74.7815985673],[.01504247898,3.6271926092,1.4844727083],[.00365981674,1.89962179044,73.297125859],[.00272328168,3.35823706307,149.5631971346],[70328461e-11,5.39254450063,63.7358983034],[68892678e-11,6.09292483287,76.2660712756],[61998615e-11,2.26952066061,2.9689454166],[61950719e-11,2.85098872691,11.0457002639],[2646877e-10,3.14152083966,71.8126531507],[25710476e-11,6.11379840493,454.9093665273],[2107885e-10,4.36059339067,148.0787244263],[17818647e-11,1.74436930289,36.6485629295],[14613507e-11,4.73732166022,3.9321532631],[11162509e-11,5.8268179635,224.3447957019],[1099791e-10,.48865004018,138.5174968707],[9527478e-11,2.95516862826,35.1640902212],[7545601e-11,5.236265824,109.9456887885],[4220241e-11,3.23328220918,70.8494453042],[40519e-9,2.277550173,151.0476698429],[3354596e-11,1.0654900738,4.4534181249],[2926718e-11,4.62903718891,9.5612275556],[349034e-10,5.48306144511,146.594251718],[3144069e-11,4.75199570434,77.7505439839],[2922333e-11,5.35235361027,85.8272988312],[2272788e-11,4.36600400036,70.3281804424],[2051219e-11,1.51773566586,.1118745846],[2148602e-11,.60745949945,38.1330356378],[1991643e-11,4.92437588682,277.0349937414],[1376226e-11,2.04283539351,65.2203710117],[1666902e-11,3.62744066769,380.12776796],[1284107e-11,3.11347961505,202.2533951741],[1150429e-11,.93343589092,3.1813937377],[1533221e-11,2.58594681212,52.6901980395],[1281604e-11,.54271272721,222.8603229936],[1372139e-11,4.19641530878,111.4301614968],[1221029e-11,.1990065003,108.4612160802],[946181e-11,1.19253165736,127.4717966068],[1150989e-11,4.17898916639,33.6796175129]],[[74.7815986091,0,0],[.00154332863,5.24158770553,74.7815985673],[24456474e-11,1.71260334156,1.4844727083],[9258442e-11,.4282973235,11.0457002639],[8265977e-11,1.50218091379,63.7358983034],[915016e-10,1.41213765216,149.5631971346]]],[[[.01346277648,2.61877810547,74.7815985673],[623414e-9,5.08111189648,149.5631971346],[61601196e-11,3.14159265359,0],[9963722e-11,1.61603805646,76.2660712756],[992616e-10,.57630380333,73.297125859]],[[34101978e-11,.01321929936,74.7815985673]]],[[[19.21264847206,0,0],[.88784984413,5.60377527014,74.7815985673],[.03440836062,.32836099706,73.297125859],[.0205565386,1.7829515933,149.5631971346],[.0064932241,4.52247285911,76.2660712756],[.00602247865,3.86003823674,63.7358983034],[.00496404167,1.40139935333,454.9093665273],[.00338525369,1.58002770318,138.5174968707],[.00243509114,1.57086606044,71.8126531507],[.00190522303,1.99809394714,1.4844727083],[.00161858838,2.79137786799,148.0787244263],[.00143706183,1.38368544947,11.0457002639],[93192405e-11,.17437220467,36.6485629295],[71424548e-11,4.24509236074,224.3447957019],[89806014e-11,3.66105364565,109.9456887885],[39009723e-11,1.66971401684,70.8494453042],[46677296e-11,1.39976401694,35.1640902212],[39025624e-11,3.36234773834,277.0349937414],[36755274e-11,3.88649278513,146.594251718],[30348723e-11,.70100838798,151.0476698429],[29156413e-11,3.180563367,77.7505439839],[22637073e-11,.72518687029,529.6909650946],[11959076e-11,1.7504339214,984.6003316219],[25620756e-11,5.25656086672,380.12776796]],[[.01479896629,3.67205697578,74.7815985673]]]],Neptune:[[[[5.31188633046,0,0],[.0179847553,2.9010127389,38.1330356378],[.01019727652,.48580922867,1.4844727083],[.00124531845,4.83008090676,36.6485629295],[42064466e-11,5.41054993053,2.9689454166],[37714584e-11,6.09221808686,35.1640902212],[33784738e-11,1.24488874087,76.2660712756],[16482741e-11,7727998e-11,491.5579294568],[9198584e-11,4.93747051954,39.6175083461],[899425e-10,.27462171806,175.1660598002]],[[38.13303563957,0,0],[16604172e-11,4.86323329249,1.4844727083],[15744045e-11,2.27887427527,38.1330356378]]],[[[.03088622933,1.44104372644,38.1330356378],[27780087e-11,5.91271884599,76.2660712756],[27623609e-11,0,0],[15355489e-11,2.52123799551,36.6485629295],[15448133e-11,3.50877079215,39.6175083461]]],[[[30.07013205828,0,0],[.27062259632,1.32999459377,38.1330356378],[.01691764014,3.25186135653,36.6485629295],[.00807830553,5.18592878704,1.4844727083],[.0053776051,4.52113935896,35.1640902212],[.00495725141,1.5710564165,491.5579294568],[.00274571975,1.84552258866,175.1660598002],[1201232e-10,1.92059384991,1021.2488945514],[.00121801746,5.79754470298,76.2660712756],[.00100896068,.3770272493,73.297125859],[.00135134092,3.37220609835,39.6175083461],[7571796e-11,1.07149207335,388.4651552382]]]]},es=function(e){var t,r,n,i,a,o,s;let l=2e3+(e-14)/365.24217;return l<-500?-20+32*(t=(l-1820)/100)*t:l<500?(r=(t=l/100)*t,n=t*r,i=r*r,a=r*n,o=n*n,10583.6-1014.41*t+33.78311*r-5.952053*n-.1798452*i+.022174192*a+.0090316521*o):l<1600?(r=(t=(l-1e3)/100)*t,n=t*r,i=r*r,a=r*n,o=n*n,1574.2-556.01*t+71.23472*r+.319781*n-.8503463*i-.005050998*a+.0083572073*o):l<1700?(r=(t=l-1600)*t,n=t*r,120-.9808*t-.01532*r+n/7129):l<1800?(r=(t=l-1700)*t,n=t*r,i=r*r,8.83+.1603*t-.0059285*r+13336e-8*n-i/1174e3):l<1860?(r=(t=l-1800)*t,n=t*r,i=r*r,a=r*n,o=n*n,s=n*i,13.72-.332447*t+.0068612*r+.0041116*n-37436e-8*i+121272e-10*a-1699e-10*o+875e-12*s):l<1900?(r=(t=l-1860)*t,n=t*r,i=r*r,a=r*n,7.62+.5737*t-.251754*r+.01680668*n-4473624e-10*i+a/233174):l<1920?(r=(t=l-1900)*t,n=t*r,i=r*r,-2.79+1.494119*t-.0598939*r+.0061966*n-197e-6*i):l<1941?(r=(t=l-1920)*t,n=t*r,21.2+.84493*t-.0761*r+.0020936*n):l<1961?(r=(t=l-1950)*t,n=t*r,29.07+.407*t-r/233+n/2547):l<1986?(r=(t=l-1975)*t,n=t*r,45.45+1.067*t-r/260-n/718):l<2005?(r=(t=l-2e3)*t,n=t*r,i=r*r,a=r*n,63.86+.3345*t-.060374*r+.0017275*n+651814e-9*i+2373599e-11*a):l<2050?62.92+.32217*(t=l-2e3)+.005589*t*t:l<2150?-20+32*(t=(l-1820)/100)*t-.5628*(2150-l):-20+32*(t=(l-1820)/100)*t};function el(e){return e+es(e)/86400}class ec{constructor(e){if(e instanceof ec){this.date=e.date,this.ut=e.ut,this.tt=e.tt;return}if(e instanceof Date&&Number.isFinite(e.getTime())){this.date=e,this.ut=(e.getTime()-q.getTime())/864e5,this.tt=el(this.ut);return}if(Number.isFinite(e)){this.date=new Date(q.getTime()+864e5*e),this.ut=e,this.tt=el(this.ut);return}throw"Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date."}static FromTerrestrialTime(e){let t=new ec(e);for(;;){let r=e-t.tt;if(1e-12>Math.abs(r))return t;t=t.AddDays(r)}}toString(){return this.date.toISOString()}AddDays(e){return new ec(this.ut+e)}}function eu(e){return e instanceof ec?e:new ec(e)}function ed(e){var t=e.tt/36525;return(((((-434e-10*t-576e-9)*t+.0020034)*t-1831e-7)*t-46.836769)*t+84381.406)/3600}function eh(e){if(!o||Math.abs(o.tt-e.tt)>1e-6){let t=function(e){function t(e){return e%1296e3*484813681109536e-20}let r=e.tt/36525,n=t(1287104.79305+129596581.0481*r),i=t(335779.526232+1739527262.8478*r),a=t(1072260.70369+1602961601.209*r),o=t(450160.398036-6962890.5431*r),s=Math.sin(o),l=Math.cos(o),c=(-0xa417da1-174666*r)*s+33386*l,u=(0x57c9b6b+9086*r)*l+15377*s,d=2*(i-a+o);return c+=(-0xc8f8da-1675*r)*(s=Math.sin(d))-13696*(l=Math.cos(d)),u+=(5730336-3015*r)*l-4587*s,c+=(-2276413-234*r)*(s=Math.sin(d=2*(i+o)))+2796*(l=Math.cos(d)),u+=(978459-485*r)*l+1374*s,c+=(2074554+207*r)*(s=Math.sin(d=2*o))-698*(l=Math.cos(d)),u+=(-897492+470*r)*l-291*s,{dpsi:-135e-6+1e-7*(c+=(1475877-3633*r)*(s=Math.sin(n))+11817*(l=Math.cos(n))),deps:388e-6+1e-7*(u+=(73871-184*r)*l-1924*s)}}(e),r=ed(e),n=r+t.deps/3600;o={tt:e.tt,dpsi:t.dpsi,deps:t.deps,ee:t.dpsi*Math.cos(.017453292519943295*r)/15,mobl:r,tobl:n}}return o}function em(e,t){let r=e.tt/36525,n=((((-951e-10*r+132851e-9)*r-.00114045)*r-1.0790069)*r+5038.481507)*r,i=((((3337e-10*r-467e-9)*r-.00772503)*r+.0512623)*r-.025754)*r+84381.406,o=((((-56e-9*r+170663e-9)*r-.00121197)*r-2.3814292)*r+10.556403)*r;n*=484813681109536e-20,i*=484813681109536e-20,o*=484813681109536e-20;let s=Math.sin(-n),l=Math.cos(-n),c=Math.sin(-i),u=Math.cos(-i),d=Math.sin(o),h=Math.cos(o),m=h*l-s*d*u,f=h*s*.9174821430652418+d*u*l*.9174821430652418-.397776969112606*d*c,p=h*s*.397776969112606+d*u*l*.397776969112606+.9174821430652418*d*c,g=-d*l-s*h*u,A=-d*s*.9174821430652418+h*u*l*.9174821430652418-.397776969112606*h*c,_=-d*s*.397776969112606+h*u*l*.397776969112606+.9174821430652418*h*c,v=s*c,E=-c*l*.9174821430652418-.397776969112606*u,T=-c*l*.397776969112606+.9174821430652418*u;if(t===a.Into2000)return new eA([[m,f,p],[g,A,_],[v,E,T]]);if(t===a.From2000)return new eA([[m,g,v],[f,A,E],[p,_,T]]);throw"Invalid precess direction"}class ef{constructor(e,t,r,n){this.x=e,this.y=t,this.z=r,this.t=n}Length(){return Math.hypot(this.x,this.y,this.z)}}class ep{constructor(e,t,r,n,i,a,o){this.x=e,this.y=t,this.z=r,this.vx=n,this.vy=i,this.vz=a,this.t=o}}class eg{constructor(e,t,r){this.lat=et(e),this.lon=et(t),this.dist=et(r)}}class eA{constructor(e){this.rot=e}}function e_(e){var t,r;let n=eu(e),i=function(e){let t=e.tt/36525;function r(e,t,r,n){let i=[];for(let a=0;a<=t-e;++a)i.push(function(e,t){let r,n=[];for(r=0;r<=t-e;++r)n.push(0);return{min:e,array:n}}(r,n));return{min:e,array:i}}function n(e,t,r){let n=e.array[t-e.min];return n.array[r-n.min]}function i(e,t,r,n){let i=e.array[t-e.min];i.array[r-i.min]=n}let a,o,s,l,c,u,d,h,m,f,p,g,A,_,v,E,T,C,y,S,R,b,B,I=r(-6,6,1,4),w=r(-6,6,1,4);function x(e){return Math.sin($*e)}d=t*t,m=0,B=0,p=0,g=3422.7;var M,D,O,N,L,F,P,G,H,U,k=x(.19833+.05611*t),j=x(.27869+.04508*t),J=x(.16827-.36903*t),z=x(.34734-5.37261*t),K=x(.10498-5.37899*t),X=x(.42681-.41855*t),W=x(.14943-5.37511*t);for(C=.84*k+.31*j+14.27*J+7.26*z+.28*K+.24*X,y=2.94*k+.31*j+14.27*J+9.34*z+1.12*K+.83*X,S=-6.4*k-1.89*X,R=.21*k+.31*j+14.27*J-88.7*z-15.3*K+.24*X-1.86*W,b=C-S,h=-3332e-9*x(.59734-5.37261*t)-539e-9*x(.35498-5.37899*t)-64e-9*x(.39943-5.37511*t),A=$*er(.60643382+1336.85522467*t-313e-8*d)+C/ee,_=$*er(.37489701+1325.55240982*t+2565e-8*d)+y/ee,v=$*er(.99312619+99.99735956*t-44e-8*d)+S/ee,E=$*er(.25909118+1342.2278298*t-892e-8*d)+R/ee,T=$*er(.82736186+1236.85308708*t-397e-8*d)+b/ee,c=1;c<=4;++c){switch(c){case 1:s=_,o=4,l=1.000002208;break;case 2:s=v,o=3,l=.997504612-.002495388*t;break;case 3:s=E,o=4,l=1.000002708+139.978*h;break;case 4:s=T,o=6,l=1;break;default:throw`Internal error: I = ${c}`}for(i(I,0,c,1),i(I,1,c,Math.cos(s)*l),i(w,0,c,0),i(w,1,c,Math.sin(s)*l),u=2;u<=o;++u){let e,t;M=n(I,u-1,c),D=n(w,u-1,c),O=n(I,1,c),N=n(w,1,c),e=M*O-D*N,t=D*O+M*N,i(I,u,c,e),i(w,u,c,t)}for(u=1;u<=o;++u)L=-u,F=c,P=n(I,u,c),i(I,L,F,P),G=-u,H=c,U=-n(w,u,c),i(w,G,H,U)}function Y(e,t,r,i){for(var a,o,s,l,c={x:1,y:0},u=[0,e,t,r,i],d=1;d<=4;++d){let e,t;0!==u[d]&&(a=c.x,o=c.y,s=n(I,u[d],d),l=n(w,u[d],d),e=a*s-o*l,t=o*s+a*l,c.x=e,c.y=t)}return c}function V(e,t,r,n,i,a,o,s){var l=Y(i,a,o,s);m+=e*l.y,B+=t*l.y,p+=r*l.x,g+=n*l.x}function Q(e,t,r,n,i){return e*Y(t,r,n,i).y}V(13.902,14.06,-.001,.2607,0,0,0,4),V(.403,-4.01,.394,.0023,0,0,0,3),V(2369.912,2373.36,.601,28.2333,0,0,0,2),V(-125.154,-112.79,-.725,-.9781,0,0,0,1),V(1.979,6.98,-.445,.0433,1,0,0,4),V(191.953,192.72,.029,3.0861,1,0,0,2),V(-8.466,-13.51,.455,-.1093,1,0,0,1),V(22639.5,22609.07,.079,186.5398,1,0,0,0),V(18.609,3.59,-.094,.0118,1,0,0,-1),V(-4586.465,-4578.13,-.077,34.3117,1,0,0,-2),V(3.215,5.44,.192,-.0386,1,0,0,-3),V(-38.428,-38.64,.001,.6008,1,0,0,-4),V(-.393,-1.43,-.092,.0086,1,0,0,-6),V(-.289,-1.59,.123,-.0053,0,1,0,4),V(-24.42,-25.1,.04,-.3,0,1,0,2),V(18.023,17.93,.007,.1494,0,1,0,1),V(-668.146,-126.98,-1.302,-.3997,0,1,0,0),V(.56,.32,-.001,-.0037,0,1,0,-1),V(-165.145,-165.06,.054,1.9178,0,1,0,-2),V(-1.877,-6.46,-.416,.0339,0,1,0,-4),V(.213,1.02,-.074,.0054,2,0,0,4),V(14.387,14.78,-.017,.2833,2,0,0,2),V(-.586,-1.2,.054,-.01,2,0,0,1),V(769.016,767.96,.107,10.1657,2,0,0,0),V(1.75,2.01,-.018,.0155,2,0,0,-1),V(-211.656,-152.53,5.679,-.3039,2,0,0,-2),V(1.225,.91,-.03,-.0088,2,0,0,-3),V(-30.773,-34.07,-.308,.3722,2,0,0,-4),V(-.57,-1.4,-.074,.0109,2,0,0,-6),V(-2.921,-11.75,.787,-.0484,1,1,0,2),V(1.267,1.52,-.022,.0164,1,1,0,1),V(-109.673,-115.18,.461,-.949,1,1,0,0),V(-205.962,-182.36,2.056,1.4437,1,1,0,-2),V(.233,.36,.012,-.0025,1,1,0,-3),V(-4.391,-9.66,-.471,.0673,1,1,0,-4),V(.283,1.53,-.111,.006,1,-1,0,4),V(14.577,31.7,-1.54,.2302,1,-1,0,2),V(147.687,138.76,.679,1.1528,1,-1,0,0),V(-1.089,.55,.021,0,1,-1,0,-1),V(28.475,23.59,-.443,-.2257,1,-1,0,-2),V(-.276,-.38,-.006,-.0036,1,-1,0,-3),V(.636,2.27,.146,-.0102,1,-1,0,-4),V(-.189,-1.68,.131,-.0028,0,2,0,2),V(-7.486,-.66,-.037,-.0086,0,2,0,0),V(-8.096,-16.35,-.74,.0918,0,2,0,-2),V(-5.741,-.04,0,-9e-4,0,0,2,2),V(.255,0,0,0,0,0,2,1),V(-411.608,-.2,0,-.0124,0,0,2,0),V(.584,.84,0,.0071,0,0,2,-1),V(-55.173,-52.14,0,-.1052,0,0,2,-2),V(.254,.25,0,-.0017,0,0,2,-3),V(.025,-1.67,0,.0031,0,0,2,-4),V(1.06,2.96,-.166,.0243,3,0,0,2),V(36.124,50.64,-1.3,.6215,3,0,0,0),V(-13.193,-16.4,.258,-.1187,3,0,0,-2),V(-1.187,-.74,.042,.0074,3,0,0,-4),V(-.293,-.31,-.002,.0046,3,0,0,-6),V(-.29,-1.45,.116,-.0051,2,1,0,2),V(-7.649,-10.56,.259,-.1038,2,1,0,0),V(-8.627,-7.59,.078,-.0192,2,1,0,-2),V(-2.74,-2.54,.022,.0324,2,1,0,-4),V(1.181,3.32,-.212,.0213,2,-1,0,2),V(9.703,11.67,-.151,.1268,2,-1,0,0),V(-.352,-.37,.001,-.0028,2,-1,0,-1),V(-2.494,-1.17,-.003,-.0017,2,-1,0,-2),V(.36,.2,-.012,-.0043,2,-1,0,-4),V(-1.167,-1.25,.008,-.0106,1,2,0,0),V(-7.412,-6.12,.117,.0484,1,2,0,-2),V(-.311,-.65,-.032,.0044,1,2,0,-4),V(.757,1.82,-.105,.0112,1,-2,0,2),V(2.58,2.32,.027,.0196,1,-2,0,0),V(2.533,2.4,-.014,-.0212,1,-2,0,-2),V(-.344,-.57,-.025,.0036,0,3,0,-2),V(-.992,-.02,0,0,1,0,2,2),V(-45.099,-.02,0,-.001,1,0,2,0),V(-.179,-9.52,0,-.0833,1,0,2,-2),V(-.301,-.33,0,.0014,1,0,2,-4),V(-6.382,-3.37,0,-.0481,1,0,-2,2),V(39.528,85.13,0,-.7136,1,0,-2,0),V(9.366,.71,0,-.0112,1,0,-2,-2),V(.202,.02,0,0,1,0,-2,-4),V(.415,.1,0,.0013,0,1,2,0),V(-2.152,-2.26,0,-.0066,0,1,2,-2),V(-1.44,-1.3,0,.0014,0,1,-2,2),V(.384,-.04,0,0,0,1,-2,-2),V(1.938,3.6,-.145,.0401,4,0,0,0),V(-.952,-1.58,.052,-.013,4,0,0,-2),V(-.551,-.94,.032,-.0097,3,1,0,0),V(-.482,-.57,.005,-.0045,3,1,0,-2),V(.681,.96,-.026,.0115,3,-1,0,0),V(-.297,-.27,.002,-9e-4,2,2,0,-2),V(.254,.21,-.003,0,2,-2,0,-2),V(-.25,-.22,.004,.0014,1,3,0,-2),V(-3.996,0,0,4e-4,2,0,2,0),V(.557,-.75,0,-.009,2,0,2,-2),V(-.459,-.38,0,-.0053,2,0,-2,2),V(-1.298,.74,0,4e-4,2,0,-2,0),V(.538,1.14,0,-.0141,2,0,-2,-2),V(.263,.02,0,0,1,1,2,0),V(.426,.07,0,-6e-4,1,1,-2,-2),V(-.304,.03,0,3e-4,1,-1,2,0),V(-.372,-.19,0,-.0027,1,-1,-2,2),V(.418,0,0,0,0,0,4,0),V(-.33,-.04,0,0,3,0,2,0),f=0+Q(-526.069,0,0,1,-2)+Q(-3.352,0,0,1,-4)+Q(44.297,1,0,1,-2)+Q(-6,1,0,1,-4)+Q(20.599,-1,0,1,0)+Q(-30.598,-1,0,1,-2)+Q(-24.649,-2,0,1,0)+Q(-2,-2,0,1,-2)+Q(-22.571,0,1,1,-2)+Q(10.985,0,-1,1,-2),m+=.82*x(.7736-62.5512*t)+.31*x(.0466-125.1025*t)+.35*x(.5785-25.1042*t)+.66*x(.4591+1335.8075*t)+.64*x(.313-91.568*t)+1.14*x(.148+1331.2898*t)+.21*x(.5918+1056.5859*t)+.44*x(.5784+1322.8595*t)+.24*x(.2275-5.7374*t)+.28*x(.2965+2.6929*t)+.33*x(.3132+6.3368*t);let Z=(1.000002708+139.978*h)*(18518.511+1.189+p)*Math.sin(a=E+B/ee)-6.24*Math.sin(3*a)+f;return{geo_eclip_lon:$*er((A+m/ee)/$),geo_eclip_lat:Math.PI/648e3*Z,distance_au:4263520978299708e-20*ee/(.999953253*g)}}(n),o=i.distance_au*Math.cos(i.geo_eclip_lat),s=[o*Math.cos(i.geo_eclip_lon),o*Math.sin(i.geo_eclip_lon),i.distance_au*Math.sin(i.geo_eclip_lat)],l=(t=function(e,t){let r=.017453292519943295*e,n=Math.cos(r),i=Math.sin(r);return[t[0],t[1]*n-t[2]*i,t[1]*i+t[2]*n]}(ed(n),s),r=em(n,a.Into2000),[r.rot[0][0]*t[0]+r.rot[1][0]*t[1]+r.rot[2][0]*t[2],r.rot[0][1]*t[0]+r.rot[1][1]*t[1]+r.rot[2][1]*t[2],r.rot[0][2]*t[0]+r.rot[1][2]*t[1]+r.rot[2][2]*t[2]]);return new ef(l[0],l[1],l[2],n)}function ev(e,t,r){let n=1,i=0;for(let a of e){let e=0;for(let[r,n,i]of a)e+=r*Math.cos(n+t*i);let o=n*e;r&&(o%=$),i+=o,n*=t}return i}function eE(e,t){let r=1,n=0,i=0,a=0;for(let o of e){let e=0,s=0;for(let[r,n,i]of o){let o=n+t*i;e+=r*i*Math.sin(o),a>0&&(s+=r*Math.cos(o))}i+=a*n*s-r*e,n=r,r*=t,++a}return i}function eT(e){return new eb(e[0]+44036e-11*e[1]-190919e-12*e[2],-479966e-12*e[0]+.917482137087*e[1]-.397776982902*e[2],.397776982902*e[1]+.917482137087*e[2])}function eC(e,t,r){let n=r*Math.cos(t);return[n*Math.cos(e),n*Math.sin(e),r*Math.sin(t)]}function ey(e,t){let r=t.tt/365250,n=ev(e[0],r,!0);return eT(eC(n,ev(e[1],r,!1),ev(e[2],r,!1))).ToAstroVector(t)}function eS(e,t,r,n){let i=n/(n+2959122082855911e-19),a=ey(eo[r],t);e.x+=i*a.x,e.y+=i*a.y,e.z+=i*a.z}let eR=[[-73e4,[-26.118207232108,-14.376168177825,3.384402515299],[.0016339372163656,-.0027861699588508,-.0013585880229445]],[-700800,[41.974905202127,-.448502952929,-12.770351505989],[73458569351457e-17,.0022785014891658,48619778602049e-17]],[-671600,[14.706930780744,44.269110540027,9.353698474772],[-.00210001479998,22295915939915e-17,70143443551414e-17]],[-642400,[-29.441003929957,-6.43016153057,6.858481011305],[84495803960544e-17,-.0030783914758711,-.0012106305981192]],[-613200,[39.444396946234,-6.557989760571,-13.913760296463],[.0011480029005873,.0022400006880665,35168075922288e-17]],[-584e3,[20.2303809507,43.266966657189,7.382966091923],[-.0019754081700585,53457141292226e-17,75929169129793e-17]],[-554800,[-30.65832536462,2.093818874552,9.880531138071],[61010603013347e-18,-.0031326500935382,-99346125151067e-17]],[-525600,[35.737703251673,-12.587706024764,-14.677847247563],[.0015802939375649,.0021347678412429,19074436384343e-17]],[-496400,[25.466295188546,41.367478338417,5.216476873382],[-.0018054401046468,8328308359951e-16,80260156912107e-17]],[-467200,[-29.847174904071,10.636426313081,12.297904180106],[-63257063052907e-17,-.0029969577578221,-74476074151596e-17]],[-438e3,[30.774692107687,-18.236637015304,-14.945535879896],[.0020113162005465,.0019353827024189,-20937793168297e-19]],[-408800,[30.243153324028,38.656267888503,2.938501750218],[-.0016052508674468,.0011183495337525,83333973416824e-17]],[-379600,[-27.288984772533,18.643162147874,14.023633623329],[-.0011856388898191,-.0027170609282181,-49015526126399e-17]],[-350400,[24.519605196774,-23.245756064727,-14.626862367368],[.0024322321483154,.0016062008146048,-23369181613312e-17]],[-321200,[34.505274805875,35.125338586954,.557361475637],[-.0013824391637782,.0013833397561817,84823598806262e-17]],[-292e3,[-23.275363915119,25.818514298769,15.055381588598],[-.0016062295460975,-.0023395961498533,-24377362639479e-17]],[-262800,[17.050384798092,-27.180376290126,-13.608963321694],[.0028175521080578,.0011358749093955,-49548725258825e-17]],[-233600,[38.093671910285,30.880588383337,-1.843688067413],[-.0011317697153459,.0016128814698472,84177586176055e-17]],[-204400,[-18.197852930878,31.932869934309,15.438294826279],[-.0019117272501813,-.0019146495909842,-19657304369835e-18]],[-175200,[8.528924039997,-29.618422200048,-11.805400994258],[.0031034370787005,5139363329243e-16,-77293066202546e-17]],[-146e3,[40.94685725864,25.904973592021,-4.256336240499],[-83652705194051e-17,.0018129497136404,8156422827306e-16]],[-116800,[-12.326958895325,36.881883446292,15.217158258711],[-.0021166103705038,-.001481442003599,17401209844705e-17]],[-87600,[-.633258375909,-30.018759794709,-9.17193287495],[.0032016994581737,-25279858672148e-17,-.0010411088271861]],[-58400,[42.936048423883,20.344685584452,-6.588027007912],[-50525450073192e-17,.0019910074335507,77440196540269e-17]],[-29200,[-5.975910552974,40.61180995846,14.470131723673],[-.0022184202156107,-.0010562361130164,33652250216211e-17]],[0,[-9.875369580774,-27.978926224737,-5.753711824704],[.0030287533248818,-.0011276087003636,-.0012651326732361]],[29200,[43.958831986165,14.214147973292,-8.808306227163],[-14717608981871e-17,.0021404187242141,71486567806614e-17]],[58400,[.67813676352,43.094461639362,13.243238780721],[-.0022358226110718,-63233636090933e-17,47664798895648e-17]],[87600,[-18.282602096834,-23.30503958666,-1.766620508028],[.0025567245263557,-.0019902940754171,-.0013943491701082]],[116800,[43.873338744526,7.700705617215,-10.814273666425],[23174803055677e-17,.0022402163127924,62988756452032e-17]],[146e3,[7.392949027906,44.382678951534,11.629500214854],[-.002193281545383,-21751799585364e-17,59556516201114e-17]],[175200,[-24.981690229261,-16.204012851426,2.466457544298],[.001819398914958,-.0026765419531201,-.0013848283502247]],[204400,[42.530187039511,.845935508021,-12.554907527683],[65059779150669e-17,.0022725657282262,51133743202822e-17]],[233600,[13.999526486822,44.462363044894,9.669418486465],[-.0021079296569252,17533423831993e-17,69128485798076e-17]],[262800,[-29.184024803031,-7.371243995762,6.493275957928],[93581363109681e-17,-.0030610357109184,-.0012364201089345]],[292e3,[39.831980671753,-6.078405766765,-13.909815358656],[.0011117769689167,.0022362097830152,36230548231153e-17]],[321200,[20.294955108476,43.417190420251,7.450091985932],[-.0019742157451535,53102050468554e-17,75938408813008e-17]],[350400,[-30.66999230216,2.318743558955,9.973480913858],[45605107450676e-18,-.0031308219926928,-99066533301924e-17]],[379600,[35.626122155983,-12.897647509224,-14.777586508444],[.0016015684949743,.0021171931182284,18002516202204e-17]],[408800,[26.133186148561,41.232139187599,5.00640132622],[-.0017857704419579,86046232702817e-17,80614690298954e-17]],[438e3,[-29.57674022923,11.863535943587,12.631323039872],[-72292830060955e-17,-.0029587820140709,-708242964503e-15]],[467200,[29.910805787391,-19.159019294,-15.013363865194],[.0020871080437997,.0018848372554514,-38528655083926e-18]],[496400,[31.375957451819,38.050372720763,2.433138343754],[-.0015546055556611,.0011699815465629,83565439266001e-17]],[525600,[-26.360071336928,20.662505904952,14.414696258958],[-.0013142373118349,-.0026236647854842,-42542017598193e-17]],[554800,[22.599441488648,-24.508879898306,-14.484045731468],[.0025454108304806,.0014917058755191,-30243665086079e-17]],[584e3,[35.877864013014,33.894226366071,-.224524636277],[-.0012941245730845,.0014560427668319,84762160640137e-17]],[613200,[-21.538149762417,28.204068269761,15.321973799534],[-.001731211740901,-.0021939631314577,-1631691327518e-16]],[642400,[13.971521374415,-28.339941764789,-13.083792871886],[.0029334630526035,91860931752944e-17,-59939422488627e-17]],[671600,[39.526942044143,28.93989736011,-2.872799527539],[-.0010068481658095,.001702113288809,83578230511981e-17]],[700800,[-15.576200701394,34.399412961275,15.466033737854],[-.0020098814612884,-.0017191109825989,70414782780416e-18]],[73e4,[4.24325283709,-30.118201690825,-10.707441231349],[.0031725847067411,1609846120227e-16,-90672150593868e-17]]];class eb{constructor(e,t,r){this.x=e,this.y=t,this.z=r}clone(){return new eb(this.x,this.y,this.z)}ToAstroVector(e){return new ef(this.x,this.y,this.z,e)}static zero(){return new eb(0,0,0)}quadrature(){return this.x*this.x+this.y*this.y+this.z*this.z}add(e){return new eb(this.x+e.x,this.y+e.y,this.z+e.z)}sub(e){return new eb(this.x-e.x,this.y-e.y,this.z-e.z)}incr(e){this.x+=e.x,this.y+=e.y,this.z+=e.z}decr(e){this.x-=e.x,this.y-=e.y,this.z-=e.z}mul(e){return new eb(e*this.x,e*this.y,e*this.z)}div(e){return new eb(this.x/e,this.y/e,this.z/e)}mean(e){return new eb((this.x+e.x)/2,(this.y+e.y)/2,(this.z+e.z)/2)}neg(){return new eb(-this.x,-this.y,-this.z)}}class eB{constructor(e,t,r){this.tt=e,this.r=t,this.v=r}clone(){return new eB(this.tt,this.r,this.v)}sub(e){return new eB(this.tt,this.r.sub(e.r),this.v.sub(e.v))}}function eI(e,t,r,n){let i=n/(n+2959122082855911e-19),a=function(e,t){let r=t/365250,n=ev(e[0],r,!0),i=ev(e[1],r,!1),a=ev(e[2],r,!1),o=eE(e[0],r),s=eE(e[1],r),l=eE(e[2],r),c=Math.cos(n),u=Math.sin(n),d=Math.cos(i),h=Math.sin(i),m=l*d*c-a*h*c*s-a*d*u*o,f=l*d*u-a*h*u*s+a*d*c*o,p=+(l*h)+a*d*s;return new eB(t,eT(eC(n,i,a)),eT([m/365250,f/365250,p/365250]))}(eo[r],t);return e.r.incr(a.r.mul(i)),e.v.incr(a.v.mul(i)),a}function ew(e,t,r){let n=r.sub(e),i=n.quadrature();return n.mul(t/(i*Math.sqrt(i)))}class ex{constructor(e){let t=new eB(e,new eb(0,0,0),new eb(0,0,0));this.Jupiter=eI(t,e,i.Jupiter,2825345909524226e-22),this.Saturn=eI(t,e,i.Saturn,8459715185680659e-23),this.Uranus=eI(t,e,i.Uranus,1292024916781969e-23),this.Neptune=eI(t,e,i.Neptune,1524358900784276e-23),this.Jupiter.r.decr(t.r),this.Jupiter.v.decr(t.v),this.Saturn.r.decr(t.r),this.Saturn.v.decr(t.v),this.Uranus.r.decr(t.r),this.Uranus.v.decr(t.v),this.Neptune.r.decr(t.r),this.Neptune.v.decr(t.v),this.Sun=new eB(e,t.r.mul(-1),t.v.mul(-1))}Acceleration(e){let t=ew(e,2959122082855911e-19,this.Sun.r);return t.incr(ew(e,2825345909524226e-22,this.Jupiter.r)),t.incr(ew(e,8459715185680659e-23,this.Saturn.r)),t.incr(ew(e,1292024916781969e-23,this.Uranus.r)),t.incr(ew(e,1524358900784276e-23,this.Neptune.r)),t}}class eM{constructor(e,t,r,n){this.tt=e,this.r=t,this.v=r,this.a=n}clone(){return new eM(this.tt,this.r.clone(),this.v.clone(),this.a.clone())}}class eD{constructor(e,t){this.bary=e,this.grav=t}}function eO(e,t,r,n){return new eb(t.x+e*(r.x+e*n.x/2),t.y+e*(r.y+e*n.y/2),t.z+e*(r.z+e*n.z/2))}function eN(e,t,r){return new eb(t.x+e*r.x,t.y+e*r.y,t.z+e*r.z)}function eL(e,t){let r=e-t.tt,n=new ex(e),i=eO(r,t.r,t.v,t.a),a=n.Acceleration(i).mean(t.a),o=eO(r,t.r,t.v,a),s=t.v.add(a.mul(r)),l=n.Acceleration(o);return new eD(n,new eM(e,o,s,l))}let eF=[];function eP(e,t){let r=Math.floor(e);return r<0?0:r>=t?t-1:r}function eG(e){let t=function(e){let[t,[r,n,i],[a,o,s]]=e;return new eB(t,new eb(r,n,i),new eb(a,o,s))}(e),r=new ex(t.tt),n=t.r.add(r.Sun.r),i=t.v.add(r.Sun.v),a=r.Acceleration(n);return new eD(r,new eM(t.tt,n,i,a))}function eH(e,t,r){let n=eG(e),i=Math.ceil((t-n.grav.tt)/r);for(let e=0;e<i;++e)n=eL(e+1===i?t:n.grav.tt+r,n.grav);return n}function eU(e,t){var r=eu(t);if(e in eo)return ey(eo[e],r);if(e===i.Pluto){let e=function(e,t){let r,n,i,a=function(e,t){let r=eR[0][0];if(t<r||t>eR[50][0])return null;let n=eP((t-r)/29200,50);if(!e[n]){let t=e[n]=[];t[0]=eG(eR[n]).grav,t[200]=eG(eR[n+1]).grav;let r,a=t[0].tt;for(r=1;r<200;++r)t[r]=eL(a+=146,t[r-1]).grav;a=t[200].tt;var i=[];for(i[200]=t[200],r=199;r>0;--r)i[r]=eL(a-=146,i[r+1]).grav;for(r=199;r>0;--r){let e=r/200;t[r].r=t[r].r.mul(1-e).add(i[r].r.mul(e)),t[r].v=t[r].v.mul(1-e).add(i[r].v.mul(e)),t[r].a=t[r].a.mul(1-e).add(i[r].a.mul(e))}}return e[n]}(eF,e.tt);if(a){let t=eP((e.tt-a[0].tt)/146,200),i=a[t],o=a[t+1],s=i.a.mean(o.a),l=eO(e.tt-i.tt,i.r,i.v,s),c=eN(e.tt-i.tt,i.v,s),u=eO(e.tt-o.tt,o.r,o.v,s),d=eN(e.tt-o.tt,o.v,s),h=(e.tt-i.tt)/146;r=l.mul(1-h).add(u.mul(h)),n=c.mul(1-h).add(d.mul(h))}else{let t;r=(t=e.tt<eR[0][0]?eH(eR[0],e.tt,-146):eH(eR[50],e.tt,146)).grav.r,n=t.grav.v,i=t.bary}return i||(i=new ex(e.tt)),r=r.sub(i.Sun.r),n=n.sub(i.Sun.v),new ep(r.x,r.y,r.z,n.x,n.y,n.z,e)}(r);return new ef(e.x,e.y,e.z,r)}if(e===i.Sun)return new ef(0,0,0,r);if(e===i.Moon){var n=ey(eo.Earth,r),a=e_(r);return new ef(n.x+a.x,n.y+a.y,n.z+a.z,r)}if(e===i.EMB){let e=ey(eo.Earth,r),t=e_(r);return new ef(e.x+t.x/82.30056,e.y+t.y/82.30056,e.z+t.z/82.30056,r)}if(e===i.SSB){let e=new ef(0,0,0,r);return eS(e,r,i.Jupiter,2825345909524226e-22),eS(e,r,i.Saturn,8459715185680659e-23),eS(e,r,i.Uranus,1292024916781969e-23),eS(e,r,i.Neptune,1524358900784276e-23),e}let o=ea(e);if(o)return function(e,t){t=eu(t);let r=.017453292519943295*e.lat,n=.017453292519943295*e.lon,i=e.dist*Math.cos(r);return new ef(i*Math.cos(n),i*Math.sin(n),e.dist*Math.sin(r),t)}(new eg(o.dec,15*o.ra,o.dist),r);throw`HelioVector: Unknown body "${e}"`}class ek{constructor(e,t,r,n){this.observerBody=e,this.targetBody=t,this.aberration=r,this.observerPos=n}Position(e){this.aberration&&(this.observerPos=eU(this.observerBody,e));let t=eU(this.targetBody,e);return new ef(t.x-this.observerPos.x,t.y-this.observerPos.y,t.z-this.observerPos.z,e)}}!function(e){e[e.Pericenter=0]="Pericenter",e[e.Apocenter=1]="Apocenter"}(s||(s={})),!function(e){e.Penumbral="penumbral",e.Partial="partial",e.Annular="annular",e.Total="total"}(l||(l={})),function(e){e[e.Invalid=0]="Invalid",e[e.Ascending=1]="Ascending",e[e.Descending=-1]="Descending"}(c||(c={}));let ej=new p.Vector3,eJ=new p.Matrix4;function ez(e){return e instanceof ec?e:new ec(e instanceof Date?e:new Date(e))}function eK(e,t=new p.Matrix4){let r=ez(e);return function(e,t=new p.Matrix4){let[r,n,i]=e.rot;return t.set(r[0],n[0],i[0],0,r[1],n[1],i[1],0,r[2],n[2],i[2],0,0,0,0,1)}(function(e,t,r){let n=.017453292519943295*et(r),i=Math.cos(n),a=Math.sin(n),o=1,s=[[0,0,0],[0,0,0],[0,0,0]];return s[0][0]=i*e.rot[0][0]-a*e.rot[0][o],s[0][o]=a*e.rot[0][0]+i*e.rot[0][o],s[0][t]=e.rot[0][t],s[o][0]=i*e.rot[o][0]-a*e.rot[o][o],s[o][o]=a*e.rot[o][0]+i*e.rot[o][o],s[o][t]=e.rot[o][t],s[t][0]=i*e.rot[t][0]-a*e.rot[t][o],s[t][o]=a*e.rot[t][0]+i*e.rot[t][o],s[t][t]=e.rot[t][t],new eA(s)}(function(e){let t=em(e=eu(e),a.From2000),r=function(e,t){let r=eh(e),n=.017453292519943295*r.mobl,i=.017453292519943295*r.tobl,o=484813681109536e-20*r.dpsi,s=Math.cos(n),l=Math.sin(n),c=Math.cos(i),u=Math.sin(i),d=Math.cos(o),h=Math.sin(o),m=-h*s,f=-h*l,p=h*c,g=d*s*c+l*u,A=d*l*c-s*u,_=h*u,v=d*s*u-l*c,E=d*l*u+s*c;if(t===a.From2000)return new eA([[d,p,_],[m,g,v],[f,A,E]]);if(t===a.Into2000)return new eA([[d,m,f],[p,g,A],[_,v,E]]);throw"Invalid precess direction"}(e,a.From2000);return new eA([[r.rot[0][0]*t.rot[0][0]+r.rot[1][0]*t.rot[0][1]+r.rot[2][0]*t.rot[0][2],r.rot[0][1]*t.rot[0][0]+r.rot[1][1]*t.rot[0][1]+r.rot[2][1]*t.rot[0][2],r.rot[0][2]*t.rot[0][0]+r.rot[1][2]*t.rot[0][1]+r.rot[2][2]*t.rot[0][2]],[r.rot[0][0]*t.rot[1][0]+r.rot[1][0]*t.rot[1][1]+r.rot[2][0]*t.rot[1][2],r.rot[0][1]*t.rot[1][0]+r.rot[1][1]*t.rot[1][1]+r.rot[2][1]*t.rot[1][2],r.rot[0][2]*t.rot[1][0]+r.rot[1][2]*t.rot[1][1]+r.rot[2][2]*t.rot[1][2]],[r.rot[0][0]*t.rot[2][0]+r.rot[1][0]*t.rot[2][1]+r.rot[2][0]*t.rot[2][2],r.rot[0][1]*t.rot[2][0]+r.rot[1][1]*t.rot[2][1]+r.rot[2][1]*t.rot[2][2],r.rot[0][2]*t.rot[2][0]+r.rot[1][2]*t.rot[2][1]+r.rot[2][2]*t.rot[2][2]]])}(r),2,-15*function(e){var t,r=eu(e);if(!n||n.tt!==r.tt){let e,i=r.tt/36525,a=((15*eh(r).ee+.014506+((((-368e-10*i-29956e-9)*i-44e-8)*i+1.3915817)*i+4612.156534)*i)/3600+((e=(.779057273264+.00273781191135448*(t=r).ut+t.ut%1)%1*360)<0&&(e+=360),e))%360/15;a<0&&(a+=24),n={tt:r.tt,st:a}}return n.st}(r)),t)}function eX(e,t,r,n,a){if(function(e,t=new p.Vector3){let{x:r,y:n,z:i}=e;t.set(r,n,i)}(function(e,t,r){let n=eu(t);switch(e){case i.Earth:return new ef(0,0,0,n);case i.Moon:return e_(n);default:let a=function(e,t,r,n){let i,a=eu(e);if(ea(r)){let e=eU(r,a),n=eU(t,a);return new ef(e.x-n.x,e.y-n.y,e.z-n.z,a)}i=eU(t,a);let o=new ek(t,r,n,i);return function(e,t){let r=t,n=0;for(let i=0;i<10;++i){let i=e(r),a=i.Length()/173.1446326846693;if(a>1)throw"Object is too distant for light-travel solver.";let o=t.AddDays(-a);if((n=Math.abs(o.tt-r.tt))<1e-9)return i;r=o}throw`Light-travel time solver did not converge: dt = ${n}`}(e=>o.Position(e),a)}(n,i.Earth,e,r);return a.t=n,a}}(e,t,!1),r),null!=n){let e=eK(t,eJ).transpose();r.sub(ej.copy(n).applyMatrix4(e).multiplyScalar(6684587122671076e-27))}return r.normalize()}m.oF;let eW=`precision highp float;
precision highp sampler3D;

#include "bruneton/definitions"
#include "bruneton/common"
#include "bruneton/precompute"

uniform AtmosphereParameters ATMOSPHERE;

uniform sampler2D transmittanceTexture;

layout(location = 0) out vec4 outputColor;

void main() {
  vec3 deltaIrradiance;
  vec3 irradiance;
  deltaIrradiance = ComputeDirectIrradianceTexture(
    ATMOSPHERE,
    transmittanceTexture,
    gl_FragCoord.xy
  );
  irradiance = vec3(0.0);
  outputColor = vec4(OUTPUT, 1.0);
}
`,eY=`precision highp float;
precision highp sampler3D;

#include "bruneton/definitions"
#include "bruneton/common"
#include "bruneton/precompute"

uniform AtmosphereParameters ATMOSPHERE;

uniform mat3 luminanceFromRadiance;
uniform sampler3D singleRayleighScatteringTexture;
uniform sampler3D singleMieScatteringTexture;
uniform sampler3D multipleScatteringTexture;
uniform int scatteringOrder;

layout(location = 0) out vec4 outputColor;

void main() {
  vec3 deltaIrradiance;
  vec3 irradiance;
  deltaIrradiance = ComputeIndirectIrradianceTexture(
    ATMOSPHERE,
    singleRayleighScatteringTexture,
    singleMieScatteringTexture,
    multipleScatteringTexture,
    gl_FragCoord.xy,
    scatteringOrder
  );
  irradiance = luminanceFromRadiance * deltaIrradiance;
  outputColor = vec4(OUTPUT, 1.0);
}
`,eV=`precision highp float;
precision highp sampler3D;

#include "bruneton/definitions"
#include "bruneton/common"
#include "bruneton/precompute"

uniform AtmosphereParameters ATMOSPHERE;

uniform mat3 luminanceFromRadiance;
uniform sampler2D transmittanceTexture;
uniform sampler3D scatteringDensityTexture;
uniform int layer;

layout(location = 0) out vec4 outputColor;

void main() {
  vec4 deltaMultipleScattering;
  vec4 scattering;
  float nu;
  deltaMultipleScattering.rgb = ComputeMultipleScatteringTexture(
    ATMOSPHERE,
    transmittanceTexture,
    scatteringDensityTexture,
    vec3(gl_FragCoord.xy, float(layer) + 0.5),
    nu
  );
  deltaMultipleScattering.a = 1.0;
  scattering = vec4(
    luminanceFromRadiance * deltaMultipleScattering.rgb / RayleighPhaseFunction(nu),
    0.0
  );
  outputColor = OUTPUT;
}
`,eQ=`precision highp float;
precision highp sampler3D;

#include "bruneton/definitions"
#include "bruneton/common"
#include "bruneton/precompute"

uniform AtmosphereParameters ATMOSPHERE;

uniform sampler2D transmittanceTexture;
uniform sampler3D singleRayleighScatteringTexture;
uniform sampler3D singleMieScatteringTexture;
uniform sampler3D multipleScatteringTexture;
uniform sampler2D irradianceTexture;
uniform int scatteringOrder;
uniform int layer;

layout(location = 0) out vec4 scatteringDensity;

void main() {
  scatteringDensity.rgb = ComputeScatteringDensityTexture(
    ATMOSPHERE,
    transmittanceTexture,
    singleRayleighScatteringTexture,
    singleMieScatteringTexture,
    multipleScatteringTexture,
    irradianceTexture,
    vec3(gl_FragCoord.xy, float(layer) + 0.5),
    scatteringOrder
  );
  scatteringDensity.a = 1.0;
}
`,eZ=`precision highp float;
precision highp sampler3D;

#include "bruneton/definitions"
#include "bruneton/common"
#include "bruneton/precompute"

uniform AtmosphereParameters ATMOSPHERE;

uniform mat3 luminanceFromRadiance;
uniform sampler2D transmittanceTexture;
uniform int layer;

layout(location = 0) out vec4 outputColor;

void main() {
  vec4 deltaRayleigh;
  vec4 deltaMie;
  vec4 scattering;
  vec4 singleMieScattering;
  ComputeSingleScatteringTexture(
    ATMOSPHERE,
    transmittanceTexture,
    vec3(gl_FragCoord.xy, float(layer) + 0.5),
    deltaRayleigh.rgb,
    deltaMie.rgb
  );
  deltaRayleigh.a = 1.0;
  deltaMie.a = 1.0;
  scattering = vec4(
    luminanceFromRadiance * deltaRayleigh.rgb,
    (luminanceFromRadiance * deltaMie.rgb).r
  );
  singleMieScattering.rgb = luminanceFromRadiance * deltaMie.rgb;
  singleMieScattering.a = 1.0;
  outputColor = OUTPUT;
}
`,eq=`precision highp float;
precision highp sampler3D;

#include "bruneton/definitions"
#include "bruneton/common"
#include "bruneton/precompute"

uniform AtmosphereParameters ATMOSPHERE;

layout(location = 0) out vec4 transmittance;

void main() {
  transmittance.rgb = ComputeTransmittanceToTopAtmosphereBoundaryTexture(
    ATMOSPHERE,
    gl_FragCoord.xy
  );
  transmittance.a = 1.0;
}
`,e$=`
  precision highp float;
  in vec2 position;
  void main() {
    gl_Position = vec4(position, 1.0, 1.0);
  }
`;function e1(e,t,r){let n=new p.WebGLRenderTarget(t,r,{depthBuffer:!1,type:e,format:p.RGBAFormat}),i=n.texture;return i.minFilter=p.LinearFilter,i.magFilter=p.LinearFilter,i.wrapS=p.ClampToEdgeWrapping,i.wrapT=p.ClampToEdgeWrapping,i.colorSpace=p.NoColorSpace,n}function e0(e,t,r,n){let i=new p.WebGL3DRenderTarget(t,r,n,{depthBuffer:!1,type:e,format:p.RGBAFormat}),a=i.texture;return a.minFilter=p.LinearFilter,a.magFilter=p.LinearFilter,a.wrapS=p.ClampToEdgeWrapping,a.wrapT=p.ClampToEdgeWrapping,a.wrapR=p.ClampToEdgeWrapping,a.colorSpace=p.NoColorSpace,i}async function e2(e,t,r){let{width:n,height:i}=t,a=r.type===p.HalfFloatType?new Uint16Array(n*i*4):new Float32Array(n*i*4);await e.readRenderTargetPixelsAsync(t,0,0,t.width,t.height,a),r.userData.imageData=a}class e3{constructor(e){this.lambdas=new p.Vector3,this.luminanceFromRadiance=new p.Matrix3,e===p.HalfFloatType&&(this.opticalDepth=e1(e,256,64)),this.deltaIrradiance=e1(e,64,16),this.deltaRayleighScattering=e0(e,256,128,32),this.deltaMieScattering=e0(e,256,128,32),this.deltaScatteringDensity=e0(e,256,128,32),this.deltaMultipleScattering=this.deltaRayleighScattering}dispose(){this.opticalDepth?.dispose(),this.deltaIrradiance.dispose(),this.deltaRayleighScattering.dispose(),this.deltaMieScattering.dispose(),this.deltaScatteringDensity.dispose()}}class e4 extends p.RawShaderMaterial{constructor(e){super({glslVersion:p.GLSL3,vertexShader:e$,...e,defines:{TRANSMITTANCE_TEXTURE_WIDTH:"256",TRANSMITTANCE_TEXTURE_HEIGHT:"64",SCATTERING_TEXTURE_R_SIZE:"32",SCATTERING_TEXTURE_MU_SIZE:"128",SCATTERING_TEXTURE_MU_S_SIZE:"32",SCATTERING_TEXTURE_NU_SIZE:"8",IRRADIANCE_TEXTURE_WIDTH:"64",IRRADIANCE_TEXTURE_HEIGHT:"16",...e.defines}})}set additive(e){this.transparent=e,this.blending=e?p.CustomBlending:p.NoBlending,this.blendEquation=p.AddEquation,this.blendEquationAlpha=p.AddEquation,this.blendSrc=p.OneFactor,this.blendDst=p.OneFactor,this.blendSrcAlpha=p.OneFactor,this.blendDstAlpha=p.OneFactor}setUniforms(e){let t=this.uniforms;null!=t.luminanceFromRadiance&&t.luminanceFromRadiance.value.copy(e.luminanceFromRadiance),null!=t.singleRayleighScatteringTexture&&(t.singleRayleighScatteringTexture.value=e.deltaRayleighScattering.texture),null!=t.singleMieScatteringTexture&&(t.singleMieScatteringTexture.value=e.deltaMieScattering.texture),null!=t.multipleScatteringTexture&&(t.multipleScatteringTexture.value=e.deltaMultipleScattering.texture),null!=t.scatteringDensityTexture&&(t.scatteringDensityTexture.value=e.deltaScatteringDensity.texture),null!=t.irradianceTexture&&(t.irradianceTexture.value=e.deltaIrradiance.texture)}}class e9{constructor(e,{type:t=(0,g.e1)(e)?p.FloatType:p.HalfFloatType,combinedScattering:r=!0,higherOrderScattering:n=!0}={}){this.transmittanceMaterial=new e4({fragmentShader:(0,g.Qe)(eq,{bruneton:{common:w,definitions:x,precompute:D}})}),this.directIrradianceMaterial=new e4({fragmentShader:(0,g.Qe)(eW,{bruneton:{common:w,definitions:x,precompute:D}}),uniforms:{transmittanceTexture:new p.Uniform(null)}}),this.singleScatteringMaterial=new e4({fragmentShader:(0,g.Qe)(eZ,{bruneton:{common:w,definitions:x,precompute:D}}),uniforms:{luminanceFromRadiance:new p.Uniform(new p.Matrix3),transmittanceTexture:new p.Uniform(null),layer:new p.Uniform(0)}}),this.scatteringDensityMaterial=new e4({fragmentShader:(0,g.Qe)(eQ,{bruneton:{common:w,definitions:x,precompute:D}}),uniforms:{transmittanceTexture:new p.Uniform(null),singleRayleighScatteringTexture:new p.Uniform(null),singleMieScatteringTexture:new p.Uniform(null),multipleScatteringTexture:new p.Uniform(null),irradianceTexture:new p.Uniform(null),scatteringOrder:new p.Uniform(0),layer:new p.Uniform(0)}}),this.indirectIrradianceMaterial=new e4({fragmentShader:(0,g.Qe)(eY,{bruneton:{common:w,definitions:x,precompute:D}}),uniforms:{luminanceFromRadiance:new p.Uniform(new p.Matrix3),singleRayleighScatteringTexture:new p.Uniform(null),singleMieScatteringTexture:new p.Uniform(null),multipleScatteringTexture:new p.Uniform(null),scatteringOrder:new p.Uniform(0)}}),this.multipleScatteringMaterial=new e4({fragmentShader:(0,g.Qe)(eV,{bruneton:{common:w,definitions:x,precompute:D}}),uniforms:{luminanceFromRadiance:new p.Uniform(new p.Matrix3),transmittanceTexture:new p.Uniform(null),scatteringDensityTexture:new p.Uniform(null),layer:new p.Uniform(0)}}),this.mesh=new p.Mesh(new p.PlaneGeometry(2,2)),this.scene=new p.Scene().add(this.mesh),this.camera=new p.Camera,this.updating=!1,this.renderer=e,this.type=t,this.transmittanceRenderTarget=e1(t,256,64),this.scatteringRenderTarget=e0(t,256,128,32),this.irradianceRenderTarget=e1(t,64,16),r||(this.singleMieScatteringRenderTarget=e0(t,256,128,32)),n&&(this.higherOrderScatteringRenderTarget=e0(t,256,128,32)),this.textures={transmittanceTexture:this.transmittanceRenderTarget.texture,scatteringTexture:this.scatteringRenderTarget.texture,irradianceTexture:this.irradianceRenderTarget.texture,singleMieScatteringTexture:this.singleMieScatteringRenderTarget?.texture,higherOrderScatteringTexture:this.higherOrderScatteringRenderTarget?.texture}}render3DRenderTarget(e,t){for(let r=0;r<e.depth;++r)t.uniforms.layer.value=r,this.renderer.setRenderTarget(e,r),this.renderer.render(this.scene,this.camera)}computeTransmittance(e){let t=this.transmittanceMaterial;delete t.defines.TRANSMITTANCE_PRECISION_LOG,t.needsUpdate=!0,this.mesh.material=t,this.renderer.setRenderTarget(e.renderTarget),this.renderer.render(this.scene,this.camera)}computeOpticalDepth(e){let t=this.transmittanceMaterial;t.defines.TRANSMITTANCE_PRECISION_LOG="1",t.needsUpdate=!0,this.mesh.material=t,this.renderer.setRenderTarget(e.renderTarget),this.renderer.render(this.scene,this.camera)}computeDirectIrradiance(e){let t=this.directIrradianceMaterial;t.defines.OUTPUT=e.output,t.additive=e.additive,this.type===p.HalfFloatType?t.defines.TRANSMITTANCE_PRECISION_LOG="1":delete t.defines.TRANSMITTANCE_PRECISION_LOG,t.needsUpdate=!0,t.uniforms.transmittanceTexture.value=e.context.opticalDepth?.texture??this.transmittanceRenderTarget.texture,this.mesh.material=t,this.renderer.setRenderTarget(e.renderTarget),this.renderer.render(this.scene,this.camera)}computeSingleScattering(e){let t=this.singleScatteringMaterial;t.defines.OUTPUT=e.output,t.additive=e.additive,this.type===p.HalfFloatType?t.defines.TRANSMITTANCE_PRECISION_LOG="1":delete t.defines.TRANSMITTANCE_PRECISION_LOG,t.needsUpdate=!0,t.uniforms.transmittanceTexture.value=e.context.opticalDepth?.texture??this.transmittanceRenderTarget.texture,t.setUniforms(e.context),this.mesh.material=t,this.render3DRenderTarget(e.renderTarget,t)}computeScatteringDensity(e){let t=this.scatteringDensityMaterial;this.type===p.HalfFloatType?t.defines.TRANSMITTANCE_PRECISION_LOG="1":delete t.defines.TRANSMITTANCE_PRECISION_LOG,t.needsUpdate=!0;let r=t.uniforms;r.transmittanceTexture.value=e.context.opticalDepth?.texture??this.transmittanceRenderTarget.texture,r.scatteringOrder.value=e.scatteringOrder,t.setUniforms(e.context),this.mesh.material=t,this.render3DRenderTarget(e.renderTarget,t)}computeIndirectIrradiance(e){let t=this.indirectIrradianceMaterial;t.defines.OUTPUT=e.output,t.additive=e.additive,t.needsUpdate=!0,t.uniforms.scatteringOrder.value=e.scatteringOrder-1,t.setUniforms(e.context),this.mesh.material=t,this.renderer.setRenderTarget(e.renderTarget),this.renderer.render(this.scene,this.camera)}computeMultipleScattering(e){let t=this.multipleScatteringMaterial;t.defines.OUTPUT=e.output,t.additive=e.additive,this.type===p.HalfFloatType?t.defines.TRANSMITTANCE_PRECISION_LOG="1":delete t.defines.TRANSMITTANCE_PRECISION_LOG,t.needsUpdate=!0,t.uniforms.transmittanceTexture.value=e.context.opticalDepth?.texture??this.transmittanceRenderTarget.texture,t.setUniforms(e.context),this.mesh.material=t,this.render3DRenderTarget(e.renderTarget,t)}*precompute(e,t){this.computeTransmittance({renderTarget:this.transmittanceRenderTarget}),this.type===p.HalfFloatType&&(function(e,t){if(!e)throw Error("Invariant failed")}(null!=e.opticalDepth),this.computeOpticalDepth({renderTarget:e.opticalDepth})),this.computeDirectIrradiance({renderTarget:e.deltaIrradiance,context:e,output:"deltaIrradiance",additive:!1}),this.computeDirectIrradiance({renderTarget:this.irradianceRenderTarget,context:e,output:"irradiance",additive:t}),this.renderer.setRenderTarget(null),yield,this.computeSingleScattering({renderTarget:e.deltaRayleighScattering,context:e,output:"deltaRayleigh",additive:!1}),this.computeSingleScattering({renderTarget:e.deltaMieScattering,context:e,output:"deltaMie",additive:!1}),this.computeSingleScattering({renderTarget:this.scatteringRenderTarget,context:e,output:"scattering",additive:t}),null!=this.singleMieScatteringRenderTarget&&this.computeSingleScattering({renderTarget:this.singleMieScatteringRenderTarget,context:e,output:"singleMieScattering",additive:t}),this.renderer.setRenderTarget(null),yield;for(let t=2;t<=4;++t)this.computeScatteringDensity({renderTarget:e.deltaScatteringDensity,context:e,scatteringOrder:t}),this.computeIndirectIrradiance({renderTarget:e.deltaIrradiance,context:e,scatteringOrder:t,output:"deltaIrradiance",additive:!1}),this.computeIndirectIrradiance({renderTarget:this.irradianceRenderTarget,context:e,scatteringOrder:t,output:"irradiance",additive:!0}),this.computeMultipleScattering({renderTarget:e.deltaMultipleScattering,context:e,output:"deltaMultipleScattering",additive:!1}),this.computeMultipleScattering({renderTarget:this.scatteringRenderTarget,context:e,output:"scattering",additive:!0}),null!=this.higherOrderScatteringRenderTarget&&this.computeMultipleScattering({renderTarget:this.higherOrderScatteringRenderTarget,context:e,output:"scattering",additive:!0}),this.renderer.setRenderTarget(null),yield}async update(e=F.DEFAULT){this.updating=!0;let t=e.toUniform();this.transmittanceMaterial.uniforms.ATMOSPHERE=t,this.directIrradianceMaterial.uniforms.ATMOSPHERE=t,this.singleScatteringMaterial.uniforms.ATMOSPHERE=t,this.scatteringDensityMaterial.uniforms.ATMOSPHERE=t,this.indirectIrradianceMaterial.uniforms.ATMOSPHERE=t,this.multipleScatteringMaterial.uniforms.ATMOSPHERE=t;let r=this.renderer,n=new e3(this.type);n.lambdas.set(680,550,440),n.luminanceFromRadiance.identity();let i=r.autoClear;return r.autoClear=!1,await function(e){let t=e[Symbol.iterator]();return new Promise((e,r)=>{let n=()=>{try{let{value:r,done:i}=t.next();!0===i?e(r):I(n)}catch(e){r(e instanceof Error?e:Error())}};I(n)})}(this.precompute(n,!1)),r.autoClear=i,n.dispose(),await e2(this.renderer,this.transmittanceRenderTarget,this.transmittanceRenderTarget.texture),await e2(this.renderer,this.irradianceRenderTarget,this.irradianceRenderTarget.texture),this.updating=!1,this.disposeQueue?.(),this.textures}dispose(e={}){if(this.updating){this.disposeQueue=()=>{this.dispose(e),this.disposeQueue=void 0};return}let{textures:t=!0}=e;t||(this.transmittanceRenderTarget.textures.splice(0,1),this.scatteringRenderTarget.textures.splice(0,1),this.irradianceRenderTarget.textures.splice(0,1),this.singleMieScatteringRenderTarget?.textures.splice(0,1),this.higherOrderScatteringRenderTarget?.textures.splice(0,1)),this.transmittanceRenderTarget.dispose(),this.scatteringRenderTarget.dispose(),this.irradianceRenderTarget.dispose(),this.singleMieScatteringRenderTarget?.dispose(),this.higherOrderScatteringRenderTarget?.dispose(),this.transmittanceMaterial.dispose(),this.directIrradianceMaterial.dispose(),this.singleScatteringMaterial.dispose(),this.scatteringDensityMaterial.dispose(),this.indirectIrradianceMaterial.dispose(),this.multipleScatteringMaterial.dispose(),this.mesh.geometry.dispose()}}let e6={width:256,height:64},e8={width:256,height:128,depth:32},e5={width:64,height:16};class e7 extends p.Loader{constructor({format:e="exr",type:t=p.HalfFloatType,combinedScattering:r=!0,higherOrderScattering:n=!0}={},i){super(i),this.format=e,this.type=t,this.combinedScattering=r,this.higherOrderScattering=n}setType(e){return this.type=(0,g.e1)(e)?p.FloatType:p.HalfFloatType,this}load(e,t,r,n){let i={},a=({key:a,loader:o,path:s})=>(o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(this.withCredentials),o.load(function(){var e;return e="object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments),function(e){var t=[];if(0===e.length)return"";if("string"!=typeof e[0])throw TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var r=e.shift();e[0]=r+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var n=0;n<e.length;n++){var i=e[n];if("string"!=typeof i)throw TypeError("Url must be a string. Received "+i);""!==i&&(n>0&&(i=i.replace(/^[\/]+/,"")),i=n<e.length-1?i.replace(/[\/]+$/,""):i.replace(/[\/]+$/,"/"),t.push(i))}var a=t.join("/"),o=(a=a.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return o.shift()+(o.length>0?"?":"")+o.join("&")}(e)}(e,s),e=>{e.type=this.type,this.type===p.FloatType&&((0,g.pK)(e.image),null!=e.image.data&&(e.image.data=new Float32Array(new g.lp(e.image.data?.buffer)))),e.minFilter=p.LinearFilter,e.magFilter=p.LinearFilter,i[`${a}Texture`]=e,null!=i.irradianceTexture&&null!=i.scatteringTexture&&null!=i.transmittanceTexture&&(this.combinedScattering||null!=i.singleMieScatteringTexture)&&(!this.higherOrderScattering||null!=i.higherOrderScatteringTexture)&&t?.(i)},r,n));return"exr"===this.format?{transmittanceTexture:a({key:"transmittance",loader:new g.Gp(e6,this.manager),path:"transmittance.exr"}),scatteringTexture:a({key:"scattering",loader:new g.r8(e8,this.manager),path:"scattering.exr"}),irradianceTexture:a({key:"irradiance",loader:new g.Gp(e5,this.manager),path:"irradiance.exr"}),singleMieScatteringTexture:this.combinedScattering?void 0:a({key:"singleMieScattering",loader:new g.r8(e8,this.manager),path:"single_mie_scattering.exr"}),higherOrderScatteringTexture:this.higherOrderScattering?a({key:"higherOrderScattering",loader:new g.r8(e8,this.manager),path:"higher_order_scattering.exr"}):void 0}:{transmittanceTexture:a({key:"transmittance",loader:new g.BR(p.DataTexture,g.oW,e6,this.manager),path:"transmittance.bin"}),scatteringTexture:a({key:"scattering",loader:new g.BR(p.Data3DTexture,g.oW,e8,this.manager),path:"scattering.bin"}),irradianceTexture:a({key:"irradiance",loader:new g.BR(p.DataTexture,g.oW,e5,this.manager),path:"irradiance.bin"}),singleMieScatteringTexture:this.combinedScattering?void 0:a({key:"singleMieScattering",loader:new g.BR(p.Data3DTexture,g.oW,e8,this.manager),path:"single_mie_scattering.bin"}),higherOrderScatteringTexture:this.higherOrderScattering?a({key:"higherOrderScattering",loader:new g.BR(p.Data3DTexture,g.oW,e8,this.manager),path:"higher_order_scattering.bin"}):void 0}}}g.C1.WGS84,p.LightProbe;let te=`precision highp float;
precision highp sampler3D;

#define RECIPROCAL_PI 0.3183098861837907

#include "core/raySphereIntersection"

#include "bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "bruneton/common"
#include "bruneton/runtime"

uniform vec3 sunDirection;
uniform float cosSunAngularRadius;
uniform vec3 moonDirection;
uniform float moonAngularRadius;
uniform float lunarRadianceScale;
uniform vec3 groundAlbedo;

#include "sky"

#ifdef HAS_SHADOW_LENGTH
uniform sampler2D shadowLengthBuffer;
#endif // HAS_SHADOW_LENGTH

in vec2 vUv;
in vec3 vCameraPosition;
in vec3 vRayDirection;

layout(location = 0) out vec4 outputColor;

#include <mrt_layout>

void main() {
  float shadowLength = 0.0;
  #ifdef HAS_SHADOW_LENGTH
  shadowLength = texture(shadowLengthBuffer, vUv).r;
  #endif // HAS_SHADOW_LENGTH

  vec3 cameraPosition = vCameraPosition;
  vec3 rayDirection = normalize(vRayDirection);
  vec3 dRDdx = dFdx(rayDirection);
  vec3 dRDdy = dFdy(rayDirection);
  float fragmentAngle = length(dRDdx + dRDdy) / length(rayDirection);

  #ifdef GROUND_ALBEDO

  float r = length(cameraPosition);
  float mu = dot(cameraPosition, rayDirection) / r;
  bool intersectsGround = RayIntersectsGround(ATMOSPHERE, r, mu);
  if (intersectsGround) {
    float distanceToGround = raySphereFirstIntersection(
      cameraPosition,
      rayDirection,
      ATMOSPHERE.bottom_radius
    );
    vec3 groundPosition = rayDirection * distanceToGround + cameraPosition;
    vec3 surfaceNormal = normalize(groundPosition);
    vec3 skyIrradiance;
    vec3 sunIrradiance = GetSunAndSkyIrradiance(
      cameraPosition,
      surfaceNormal,
      sunDirection,
      skyIrradiance
    );
    vec3 transmittance;
    vec3 inscatter = GetSkyRadianceToPoint(
      cameraPosition,
      ATMOSPHERE.bottom_radius * surfaceNormal,
      shadowLength,
      sunDirection,
      transmittance
    );
    vec3 radiance = groundAlbedo * RECIPROCAL_PI * (sunIrradiance + skyIrradiance);
    outputColor.rgb = radiance * transmittance + inscatter;
  } else {
    outputColor.rgb = getSkyRadiance(
      cameraPosition,
      rayDirection,
      shadowLength,
      sunDirection,
      moonDirection,
      moonAngularRadius,
      lunarRadianceScale,
      fragmentAngle
    );
  }

  #else // GROUND_ALBEDO

  outputColor.rgb = getSkyRadiance(
    cameraPosition,
    rayDirection,
    shadowLength,
    sunDirection,
    moonDirection,
    moonAngularRadius,
    lunarRadianceScale,
    fragmentAngle
  );

  #endif // GROUND_ALBEDO

  outputColor.a = 1.0;

  #include <mrt_output>
}
`,tt=`precision highp float;
precision highp sampler3D;

uniform mat4 inverseProjectionMatrix;
uniform mat4 inverseViewMatrix;
uniform vec3 cameraPosition;
uniform mat4 worldToECEFMatrix;
uniform vec3 altitudeCorrection;

layout(location = 0) in vec3 position;

out vec2 vUv;
out vec3 vCameraPosition;
out vec3 vRayDirection;

void getCameraRay(out vec3 origin, out vec3 direction) {
  bool isPerspective = inverseProjectionMatrix[2][3] != 0.0; // 4th entry in the 3rd column

  if (isPerspective) {
    // Calculate the camera ray for a perspective camera.
    vec4 viewPosition = inverseProjectionMatrix * vec4(position, 1.0);
    vec4 worldDirection = inverseViewMatrix * vec4(viewPosition.xyz, 0.0);
    origin = cameraPosition;
    direction = worldDirection.xyz;
  } else {
    // Unprojected points to calculate direction.
    vec4 nearPoint = inverseProjectionMatrix * vec4(position.xy, -1.0, 1.0);
    vec4 farPoint = inverseProjectionMatrix * vec4(position.xy, -0.9, 1.0);
    nearPoint /= nearPoint.w;
    farPoint /= farPoint.w;

    // Calculate world values
    vec4 worldDirection = inverseViewMatrix * vec4(farPoint.xyz - nearPoint.xyz, 0.0);
    vec4 worldOrigin = inverseViewMatrix * nearPoint;

    // Outputs
    direction = worldDirection.xyz;
    origin = worldOrigin.xyz;
  }
}

void main() {
  vUv = position.xy * 0.5 + 0.5;

  vec3 direction, origin;
  getCameraRay(origin, direction);

  vec3 cameraPositionECEF = (worldToECEFMatrix * vec4(origin, 1.0)).xyz;
  vCameraPosition = (cameraPositionECEF + altitudeCorrection) * METER_TO_LENGTH_UNIT;
  vRayDirection = (worldToECEFMatrix * vec4(direction, 0.0)).xyz;

  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`;var tr=Object.defineProperty,tn=(e,t,r,n)=>{for(var i,a=void 0,o=e.length-1;o>=0;o--)(i=e[o])&&(a=i(t,r,a)||a);return a&&tr(t,r,a),a};let ti={...Q,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1,ground:!0,groundAlbedo:new p.Color(0)};class ta extends Z{constructor(e){let{sun:t,moon:r,moonDirection:n,moonAngularRadius:i,lunarRadianceScale:a,ground:o,groundAlbedo:s,...l}={...ti,...e};super({name:"SkyMaterial",glslVersion:p.GLSL3,vertexShader:tt,fragmentShader:(0,g.Qe)(te,{core:{raySphereIntersection:C},bruneton:{common:w,definitions:x,runtime:M},sky:H}),...l,uniforms:{inverseProjectionMatrix:new p.Uniform(new p.Matrix4),inverseViewMatrix:new p.Uniform(new p.Matrix4),moonDirection:new p.Uniform(n?.clone()??new p.Vector3),moonAngularRadius:new p.Uniform(i),lunarRadianceScale:new p.Uniform(a),groundAlbedo:new p.Uniform(s.clone()),shadowLengthBuffer:new p.Uniform(null),...l.uniforms},defines:{PERSPECTIVE_CAMERA:"1"},depthWrite:!1,depthTest:!0}),this.shadowLength=null,this.sun=t,this.moon=r,this.ground=o}onBeforeRender(e,t,r,n,i,a){super.onBeforeRender(e,t,r,n,i,a);let{uniforms:o,defines:s}=this;o.inverseProjectionMatrix.value.copy(r.projectionMatrixInverse),o.inverseViewMatrix.value.copy(r.matrixWorld);let l=null!=s.PERSPECTIVE_CAMERA,c=!0===r.isPerspectiveCamera;c!==l&&(c?s.PERSPECTIVE_CAMERA="1":delete s.PERSPECTIVE_CAMERA,this.needsUpdate=!0);let u=this.groundAlbedo,d=null!=s.GROUND_ALBEDO,h=0!==u.r||0!==u.g||0!==u.b;h!==d&&(h?this.defines.GROUND_ALBEDO="1":delete this.defines.GROUND_ALBEDO,this.needsUpdate=!0);let m=this.shadowLength,f=null!=s.HAS_SHADOW_LENGTH,p=null!=m;p!==f&&(p?s.HAS_SHADOW_LENGTH="1":(delete s.HAS_SHADOW_LENGTH,o.shadowLengthBuffer.value=null),this.needsUpdate=!0),p&&(o.shadowLengthBuffer.value=m.map)}get moonDirection(){return this.uniforms.moonDirection.value}get moonAngularRadius(){return this.uniforms.moonAngularRadius.value}set moonAngularRadius(e){this.uniforms.moonAngularRadius.value=e}get lunarRadianceScale(){return this.uniforms.lunarRadianceScale.value}set lunarRadianceScale(e){this.uniforms.lunarRadianceScale.value=e}get groundAlbedo(){return this.uniforms.groundAlbedo.value}}tn([(0,g.E8)("SUN")],ta.prototype,"sun"),tn([(0,g.E8)("MOON")],ta.prototype,"moon"),tn([(0,g.E8)("GROUND")],ta.prototype,"ground");class to extends p.BufferGeometry{constructor(e){super();let t=new Int16Array(e),r=new Uint8Array(e),n=new p.InterleavedBuffer(t,5),i=new p.InterleavedBuffer(r,10);this.setAttribute("position",new p.InterleavedBufferAttribute(n,3,0,!0)),this.setAttribute("magnitude",new p.InterleavedBufferAttribute(i,1,6,!0)),this.setAttribute("color",new p.InterleavedBufferAttribute(i,3,7,!0)),this.boundingSphere=new p.Sphere(new p.Vector3,1)}}let ts=`precision highp float;
precision highp sampler3D;

#include "bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "bruneton/common"
#include "bruneton/runtime"

uniform vec3 sunDirection;

in vec3 vCameraPosition;
in vec3 vRayDirection;

layout(location = 0) out vec4 outputColor;

#include <mrt_layout>

in vec3 vColor;

void main() {
  #if !defined(PERSPECTIVE_CAMERA)
  outputColor = vec4(0.0);
  discard; // Rendering celestial objects without perspective doesn't make sense.
  #endif // !defined(PERSPECTIVE_CAMERA)

  #ifdef BACKGROUND
  vec3 rayDirection = normalize(vRayDirection);
  float r = length(vCameraPosition);
  float mu = dot(vCameraPosition, rayDirection) / r;

  if (RayIntersectsGround(ATMOSPHERE, r, mu)) {
    discard;
  }

  vec3 transmittance;
  vec3 radiance = GetSkyRadiance(
    vCameraPosition,
    normalize(vRayDirection),
    0.0, // Shadow length
    sunDirection,
    transmittance
  );
  radiance += transmittance * vColor;
  outputColor = vec4(radiance, 1.0);
  #else // BACKGROUND
  outputColor = vec4(vColor, 1.0);
  #endif // BACKGROUND

  #include <mrt_output>
}
`,tl=`precision highp float;
precision highp sampler3D;

#define saturate(x) clamp(x, 0.0, 1.0)

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 viewMatrix;
uniform mat4 matrixWorld;
uniform vec3 cameraPosition;
uniform float cameraFar;
uniform mat4 worldToECEFMatrix;
uniform vec3 altitudeCorrection;
uniform float pointSize;
uniform vec2 magnitudeRange;
uniform float intensity;

layout(location = 0) in vec3 position;
layout(location = 1) in float magnitude;
layout(location = 2) in vec3 color;

out vec3 vCameraPosition;
out vec3 vRayDirection;
out vec3 vEllipsoidCenter;
out vec3 vColor;

void main() {
  // Magnitude is stored between 0 to 1 within the given range.
  float m = mix(magnitudeRange.x, magnitudeRange.y, magnitude);
  vec3 v = pow(vec3(10.0), -vec3(magnitudeRange, m) / 2.5);
  vColor = vec3(intensity * color);
  vColor *= saturate((v.z - v.y) / (v.x - v.y));

  #ifdef BACKGROUND
  vec3 worldDirection = normalize(matrixWorld * vec4(position, 1.0)).xyz;
  vec3 cameraPositionECEF = (worldToECEFMatrix * vec4(cameraPosition, 1.0)).xyz;
  vCameraPosition = (cameraPositionECEF + altitudeCorrection) * METER_TO_LENGTH_UNIT;
  vRayDirection = (worldToECEFMatrix * vec4(worldDirection, 0.0)).xyz;
  gl_Position =
    projectionMatrix * viewMatrix * vec4(cameraPosition + worldDirection * cameraFar, 1.0);
  #else // BACKGROUND
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  #endif // BACKGROUND

  gl_PointSize = pointSize;
}
`;var tc=Object.defineProperty,tu=(e,t,r,n)=>{for(var i,a=void 0,o=e.length-1;o>=0;o--)(i=e[o])&&(a=i(t,r,a)||a);return a&&tc(t,r,a),a};let td={...Q,pointSize:1,intensity:1,background:!0,ground:!0};class th extends Z{constructor(e){let{pointSize:t,intensity:r,background:n,ground:i,...a}={...td,...e};super({name:"StarsMaterial",glslVersion:p.GLSL3,vertexShader:tl,fragmentShader:(0,g.Qe)(ts,{bruneton:{common:w,definitions:x,runtime:M}}),...a,uniforms:{projectionMatrix:new p.Uniform(new p.Matrix4),modelViewMatrix:new p.Uniform(new p.Matrix4),viewMatrix:new p.Uniform(new p.Matrix4),matrixWorld:new p.Uniform(new p.Matrix4),cameraFar:new p.Uniform(0),pointSize:new p.Uniform(0),magnitudeRange:new p.Uniform(new p.Vector2(-2,8)),intensity:new p.Uniform(r),...a.uniforms},defines:{PERSPECTIVE_CAMERA:"1"},depthWrite:!0,depthTest:!0}),this.pointSize=t,this.background=n,this.ground=i}onBeforeRender(e,t,r,n,i,a){super.onBeforeRender(e,t,r,n,i,a);let o=this.uniforms;o.projectionMatrix.value.copy(r.projectionMatrix),o.modelViewMatrix.value.copy(r.modelViewMatrix),o.viewMatrix.value.copy(r.matrixWorldInverse),o.matrixWorld.value.copy(i.matrixWorld),o.cameraFar.value=r.far,o.pointSize.value=this.pointSize*e.getPixelRatio();let s=!0===r.isPerspectiveCamera;null!=this.defines.PERSPECTIVE_CAMERA!==s&&(s?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}get magnitudeRange(){return this.uniforms.magnitudeRange.value}get intensity(){return this.uniforms.intensity.value}set intensity(e){this.uniforms.intensity.value=e}}tu([(0,g.E8)("BACKGROUND")],th.prototype,"background"),tu([(0,g.E8)("GROUND")],th.prototype,"ground"),g.C1.WGS84,p.DirectionalLight;var tm=r(8945);function tf(){let e=new p.BufferGeometry,t=new Float32Array([-1,-1,3,-1,-1,3]);return e.boundingSphere=new p.Sphere,e.boundingSphere.set(new p.Vector3,1/0),e.setAttribute("position",new p.BufferAttribute(t,2)),e}let tp=f.forwardRef(function({children:e,...t},r){let n=f.useMemo(tf,[]);return f.createElement("mesh",(0,tm.A)({ref:r,geometry:n,frustumCulled:!1},t),e)}),tg=(0,f.createContext)({}),tA=({ref:e,textures:t,ellipsoid:r=g.C1.WGS84,correctAltitude:n=!0,ground:a=!0,date:o,children:s})=>{let l=(0,f.useRef)({sunDirection:new p.Vector3,moonDirection:new p.Vector3,worldToECEFMatrix:new p.Matrix4,inertialToECEFMatrix:new p.Matrix4,overlay:null,shadow:null,shadowLength:null,lightingMask:null}),c=(0,d.C)(({gl:e})=>e),h=(0,f.useMemo)(()=>"string"==typeof t?new e7().setType(c).load(t):void 0,[t,c]);(0,f.useEffect)(()=>{if(null!=h)return()=>{for(let e of Object.values(h))e?.dispose()}},[h]);let m=(0,f.useMemo)(()=>null==t?new e9(c):void 0,[t,c]);(0,f.useEffect)(()=>{if(null!=m)return m.update().catch(e=>{console.error(e)}),()=>{m.dispose()}},[m]);let A=m?.textures??("string"==typeof t?h:t),_=(0,f.useMemo)(()=>({textures:A,ellipsoid:r,correctAltitude:n,ground:a,transientStates:l.current}),[A,r,n,a]),v=(0,f.useMemo)(()=>{let{sunDirection:e,moonDirection:t,inertialToECEFMatrix:r}=l.current;return n=>{eK(n,r),(function(e,t=new p.Vector3,r){return eX(i.Sun,ez(e),t,void 0)})(n,e).applyMatrix4(r),(function(e,t=new p.Vector3,r){return eX(i.Moon,ez(e),t,void 0)})(n,t).applyMatrix4(r)}},[]),E=null==o||isNaN(+o)?void 0:+o;return(0,f.useEffect)(()=>{null!=E&&v(E)},[E,v]),(0,f.useImperativeHandle)(e,()=>({...l.current,textures:A,updateByDate:v}),[A,v]),(0,u.jsx)(tg.Provider,{value:_,children:s})};function t_(e){let{irradianceTexture:t,scatteringTexture:r,transmittanceTexture:n,singleMieScatteringTexture:i,higherOrderScatteringTexture:a,ellipsoid:o,correctAltitude:s,sunDirection:l,sunAngularRadius:c,ground:u,renderTargetCount:d,...h}=e;return[{irradianceTexture:t,scatteringTexture:r,transmittanceTexture:n,singleMieScatteringTexture:i,higherOrderScatteringTexture:a,ellipsoid:o,correctAltitude:s,sunDirection:l,sunAngularRadius:c,ground:u,renderTargetCount:d},h]}let tv=({ref:e,stbnTexture:t=g.cc,...r})=>{let{textures:n,transientStates:i,...a}=(0,f.useContext)(tg),[o,{blendFunction:s,...l}]=t_({...K,...a,...n,...r}),c=(0,f.useContext)(h.Pl),{normalPass:A,camera:_}=c,v="geometryPass"in c&&c.geometryPass instanceof m.AH&&"geometryTexture"in c.geometryPass&&c.geometryPass.geometryTexture instanceof p.Texture?c.geometryPass.geometryTexture:void 0,E=(0,f.useMemo)(()=>new X(void 0,{blendFunction:s}),[s]);(0,f.useEffect)(()=>()=>{E.dispose()},[E]);let[T,C]=(0,f.useState)(!1);(0,d.D)(()=>{null!=i&&(E.sunDirection.copy(i.sunDirection),E.moonDirection.copy(i.moonDirection),E.worldToECEFMatrix.copy(i.worldToECEFMatrix),E.overlay=i.overlay,E.shadow=i.shadow,E.shadowLength=i.shadowLength,E.lightingMask=i.lightingMask,T||null==E.shadow||C(!0))});let y=function(e){let t=(0,f.useMemo)(()=>"string"==typeof e?new g.tc().load(e):void 0,[e]);return(0,f.useEffect)(()=>{if(null!=t)return()=>{t.dispose()}},[t]),("string"==typeof e?t:e)??null}(T?t:void 0);return(0,u.jsx)("primitive",{ref:e,object:E,mainCamera:_,normalBuffer:v??A?.texture??null,...o,...l,stbnTexture:y,octEncodedNormal:null!=v})};function tE(e,t){if("function"==typeof e)return e(t);e&&(e.current=t)}var tT=parseInt(f.version.split(".")[0],10)>=19?function(e){return t=>{let r=[];for(let n of e){let e=tE(n,t),i="function"==typeof e;r.push(i?e:()=>tE(n,null))}return()=>{for(let e of r)e()}}}:function(e){return t=>{for(let r of e)tE(r,t)}};let tC=({ref:e,...t})=>{let{textures:r,transientStates:n,...i}=(0,f.useContext)(tg),[a,{sun:o,moon:s,moonDirection:l,moonAngularRadius:c,lunarRadianceScale:h,groundAlbedo:m,...p}]=t_({...ti,...i,...r,...t}),g=(0,f.useMemo)(()=>new ta,[]);return(0,f.useEffect)(()=>()=>{g.dispose()},[g]),(0,d.D)(()=>{null!=n&&(g.sunDirection.copy(n.sunDirection),g.moonDirection.copy(n.moonDirection),g.worldToECEFMatrix.copy(n.worldToECEFMatrix),g.shadowLength=n.shadowLength)}),(0,u.jsx)(tp,{...p,ref:e,children:(0,u.jsx)("primitive",{object:g,...a,sun:o,moon:s,moonDirection:l,moonAngularRadius:c,lunarRadianceScale:h,groundAlbedo:m})})},ty=({ref:e,data:t=R,...r})=>{let{textures:n,transientStates:i,...a}=(0,f.useContext)(tg),[o,{pointSize:s,intensity:l,background:c,...h}]=t_({...td,...a,...n,...r}),[m,p]=(0,f.useState)("string"!=typeof t?t:void 0);(0,f.useEffect)(()=>{if("string"==typeof t){let e=new g.TM;(async()=>{p(await e.loadAsync(t))})().catch(e=>{console.error(e)})}else p(t)},[t]);let A=(0,f.useMemo)(()=>null!=m?new to(m):void 0,[m]);(0,f.useEffect)(()=>()=>{A?.dispose()},[A]);let _=(0,f.useMemo)(()=>new th,[]);(0,f.useEffect)(()=>()=>{_.dispose()},[_]);let v=(0,f.useRef)(null);(0,d.D)(({camera:e})=>{null!=i&&!0===e.isPerspectiveCamera&&(_.sunDirection.copy(i.sunDirection),v.current?.setRotationFromMatrix(i.inertialToECEFMatrix),_.worldToECEFMatrix.copy(i.worldToECEFMatrix))});let E=(0,d.C)(({camera:e})=>e);return null==A||!0!==E.isPerspectiveCamera?null:(0,u.jsxs)("points",{ref:tT([v,e]),frustumCulled:!1,...h,children:[(0,u.jsx)("primitive",{object:A}),(0,u.jsx)("primitive",{object:_,...o,pointSize:s,intensity:l,background:c})]})}},1975:(e,t)=>{t.ConcurrentRoot=1,t.ContinuousEventPriority=8,t.DefaultEventPriority=32,t.DiscreteEventPriority=2},3531:(e,t,r)=>{let n;r.d(t,{p:()=>ec}),r(2115);var i=r(7548);let a=new WeakMap;class o extends i.Loader{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,r,n){let a=new i.FileLoader(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,e=>{let r={attributeIDs:this.defaultAttributeIDs,attributeTypes:this.defaultAttributeTypes,useUniqueIDs:!1};this.decodeGeometry(e,r).then(t).catch(n)},r,n)}decodeDracoFile(e,t,r,n){let i={attributeIDs:r||this.defaultAttributeIDs,attributeTypes:n||this.defaultAttributeTypes,useUniqueIDs:!!r};this.decodeGeometry(e,i).then(t)}decodeGeometry(e,t){let r;for(let e in t.attributeTypes){let r=t.attributeTypes[e];void 0!==r.BYTES_PER_ELEMENT&&(t.attributeTypes[e]=r.name)}let n=JSON.stringify(t);if(a.has(e)){let t=a.get(e);if(t.key===n)return t.promise;if(0===e.byteLength)throw Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i=this.workerNextTaskID++,o=e.byteLength,s=this._getWorker(i,o).then(n=>(r=n,new Promise((n,a)=>{r._callbacks[i]={resolve:n,reject:a},r.postMessage({type:"decode",id:i,taskConfig:t,buffer:e},[e])}))).then(e=>this._createGeometry(e.geometry));return s.catch(()=>!0).then(()=>{r&&i&&this._releaseTask(r,i)}),a.set(e,{key:n,promise:s}),s}_createGeometry(e){let t=new i.BufferGeometry;e.index&&t.setIndex(new i.BufferAttribute(e.index.array,1));for(let r=0;r<e.attributes.length;r++){let n=e.attributes[r],a=n.name,o=n.array,s=n.itemSize;t.setAttribute(a,new i.BufferAttribute(o,s))}return t}_loadLibrary(e,t){let r=new i.FileLoader(this.manager);return r.setPath(this.decoderPath),r.setResponseType(t),r.setWithCredentials(this.withCredentials),new Promise((t,n)=>{r.load(e,t,void 0,n)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e="object"!=typeof WebAssembly||"js"===this.decoderConfig.type,t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(t=>{let r=t[0];e||(this.decoderConfig.wasmBinary=t[1]);let n=s.toString(),i=["/* draco decoder */",r,"\n/* worker */",n.substring(n.indexOf("{")+1,n.lastIndexOf("}"))].join("\n");this.workerSourceURL=URL.createObjectURL(new Blob([i]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let e=new Worker(this.workerSourceURL);e._callbacks={},e._taskCosts={},e._taskLoad=0,e.postMessage({type:"init",decoderConfig:this.decoderConfig}),e.onmessage=function(t){let r=t.data;switch(r.type){case"decode":e._callbacks[r.id].resolve(r);break;case"error":e._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(e)}else this.workerPool.sort(function(e,t){return e._taskLoad>t._taskLoad?-1:1});let r=this.workerPool[this.workerPool.length-1];return r._taskCosts[e]=t,r._taskLoad+=t,r})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}function s(){let e,t;onmessage=function(r){let n=r.data;switch(n.type){case"init":e=n.decoderConfig,t=new Promise(function(t){e.onModuleLoaded=function(e){t({draco:e})},DracoDecoderModule(e)});break;case"decode":let i=n.buffer,a=n.taskConfig;t.then(e=>{let t=e.draco,r=new t.Decoder,o=new t.DecoderBuffer;o.Init(new Int8Array(i),i.byteLength);try{let e=function(e,t,r,n){let i,a,o=n.attributeIDs,s=n.attributeTypes,l=t.GetEncodedGeometryType(r);if(l===e.TRIANGULAR_MESH)i=new e.Mesh,a=t.DecodeBufferToMesh(r,i);else if(l===e.POINT_CLOUD)i=new e.PointCloud,a=t.DecodeBufferToPointCloud(r,i);else throw Error("THREE.DRACOLoader: Unexpected geometry type.");if(!a.ok()||0===i.ptr)throw Error("THREE.DRACOLoader: Decoding failed: "+a.error_msg());let c={index:null,attributes:[]};for(let r in o){let a,l,u=self[s[r]];if(n.useUniqueIDs)l=o[r],a=t.GetAttributeByUniqueId(i,l);else{if(-1===(l=t.GetAttributeId(i,e[o[r]])))continue;a=t.GetAttribute(i,l)}c.attributes.push(function(e,t,r,n,i,a){let o=a.num_components(),s=r.num_points()*o,l=s*i.BYTES_PER_ELEMENT,c=function(e,t){switch(t){case Float32Array:return e.DT_FLOAT32;case Int8Array:return e.DT_INT8;case Int16Array:return e.DT_INT16;case Int32Array:return e.DT_INT32;case Uint8Array:return e.DT_UINT8;case Uint16Array:return e.DT_UINT16;case Uint32Array:return e.DT_UINT32}}(e,i),u=e._malloc(l);t.GetAttributeDataArrayForAllPoints(r,a,c,l,u);let d=new i(e.HEAPF32.buffer,u,s).slice();return e._free(u),{name:n,array:d,itemSize:o}}(e,t,i,r,u,a))}return l===e.TRIANGULAR_MESH&&(c.index=function(e,t,r){let n=3*r.num_faces(),i=4*n,a=e._malloc(i);t.GetTrianglesUInt32Array(r,i,a);let o=new Uint32Array(e.HEAPF32.buffer,a,n).slice();return e._free(a),{array:o,itemSize:1}}(e,t,i)),e.destroy(i),c}(t,r,o,a),i=e.attributes.map(e=>e.array.buffer);e.index&&i.push(e.index.array.buffer),self.postMessage({type:"decode",id:n.id,geometry:e},i)}catch(e){console.error(e),self.postMessage({type:"error",id:n.id,error:e.message})}finally{t.destroy(o),t.destroy(r)}})}}}function l(e,t){if(t===i.TrianglesDrawMode)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(t!==i.TriangleFanDrawMode&&t!==i.TriangleStripDrawMode)return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),e;{let r=e.getIndex();if(null===r){let t=[],n=e.getAttribute("position");if(void 0===n)return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e;for(let e=0;e<n.count;e++)t.push(e);e.setIndex(t),r=e.getIndex()}let n=r.count-2,a=[];if(r)if(t===i.TriangleFanDrawMode)for(let e=1;e<=n;e++)a.push(r.getX(0)),a.push(r.getX(e)),a.push(r.getX(e+1));else for(let e=0;e<n;e++)e%2==0?(a.push(r.getX(e)),a.push(r.getX(e+1)),a.push(r.getX(e+2))):(a.push(r.getX(e+2)),a.push(r.getX(e+1)),a.push(r.getX(e)));a.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let o=e.clone();return o.setIndex(a),o.clearGroups(),o}}var c=r(4814);function u(e){if("undefined"!=typeof TextDecoder)return new TextDecoder().decode(e);let t="";for(let r=0,n=e.length;r<n;r++)t+=String.fromCharCode(e[r]);try{return decodeURIComponent(escape(t))}catch(e){return t}}let d="srgb",h="srgb-linear";class m extends i.Loader{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new v(e)}),this.register(function(e){return new E(e)}),this.register(function(e){return new w(e)}),this.register(function(e){return new x(e)}),this.register(function(e){return new M(e)}),this.register(function(e){return new C(e)}),this.register(function(e){return new y(e)}),this.register(function(e){return new S(e)}),this.register(function(e){return new R(e)}),this.register(function(e){return new _(e)}),this.register(function(e){return new b(e)}),this.register(function(e){return new T(e)}),this.register(function(e){return new I(e)}),this.register(function(e){return new B(e)}),this.register(function(e){return new g(e)}),this.register(function(e){return new D(e)}),this.register(function(e){return new O(e)})}load(e,t,r,n){let a,o=this;if(""!==this.resourcePath)a=this.resourcePath;else if(""!==this.path){let t=i.LoaderUtils.extractUrlBase(e);a=i.LoaderUtils.resolveURL(t,this.path)}else a=i.LoaderUtils.extractUrlBase(e);this.manager.itemStart(e);let s=function(t){n?n(t):console.error(t),o.manager.itemError(e),o.manager.itemEnd(e)},l=new i.FileLoader(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(r){try{o.parse(r,a,function(r){t(r),o.manager.itemEnd(e)},s)}catch(e){s(e)}},r,s)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return -1===this.pluginCallbacks.indexOf(e)&&this.pluginCallbacks.push(e),this}unregister(e){return -1!==this.pluginCallbacks.indexOf(e)&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,r,n){let i,a={},o={};if("string"==typeof e)i=JSON.parse(e);else if(e instanceof ArrayBuffer)if(u(new Uint8Array(e.slice(0,4)))===N){try{a[p.KHR_BINARY_GLTF]=new F(e)}catch(e){n&&n(e);return}i=JSON.parse(a[p.KHR_BINARY_GLTF].content)}else i=JSON.parse(u(new Uint8Array(e)));else i=e;if(void 0===i.asset||i.asset.version[0]<2){n&&n(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let s=new en(i,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});s.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](s);t.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[t.name]=t,a[t.name]=!0}if(i.extensionsUsed)for(let e=0;e<i.extensionsUsed.length;++e){let t=i.extensionsUsed[e],r=i.extensionsRequired||[];switch(t){case p.KHR_MATERIALS_UNLIT:a[t]=new A;break;case p.KHR_DRACO_MESH_COMPRESSION:a[t]=new P(i,this.dracoLoader);break;case p.KHR_TEXTURE_TRANSFORM:a[t]=new G;break;case p.KHR_MESH_QUANTIZATION:a[t]=new H;break;default:r.indexOf(t)>=0&&void 0===o[t]&&console.warn('THREE.GLTFLoader: Unknown extension "'+t+'".')}}s.setExtensions(a),s.setPlugins(o),s.parse(r,n)}parseAsync(e,t){let r=this;return new Promise(function(n,i){r.parse(e,t,n,i)})}}function f(){let e={};return{get:function(t){return e[t]},add:function(t,r){e[t]=r},remove:function(t){delete e[t]},removeAll:function(){e={}}}}let p={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class g{constructor(e){this.parser=e,this.name=p.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let r=0,n=t.length;r<n;r++){let n=t[r];n.extensions&&n.extensions[this.name]&&void 0!==n.extensions[this.name].light&&e._addNodeRef(this.cache,n.extensions[this.name].light)}}_loadLight(e){let t,r=this.parser,n="light:"+e,a=r.cache.get(n);if(a)return a;let o=r.json,s=((o.extensions&&o.extensions[this.name]||{}).lights||[])[e],l=new i.Color(0xffffff);void 0!==s.color&&l.setRGB(s.color[0],s.color[1],s.color[2],h);let c=void 0!==s.range?s.range:0;switch(s.type){case"directional":(t=new i.DirectionalLight(l)).target.position.set(0,0,-1),t.add(t.target);break;case"point":(t=new i.PointLight(l)).distance=c;break;case"spot":(t=new i.SpotLight(l)).distance=c,s.spot=s.spot||{},s.spot.innerConeAngle=void 0!==s.spot.innerConeAngle?s.spot.innerConeAngle:0,s.spot.outerConeAngle=void 0!==s.spot.outerConeAngle?s.spot.outerConeAngle:Math.PI/4,t.angle=s.spot.outerConeAngle,t.penumbra=1-s.spot.innerConeAngle/s.spot.outerConeAngle,t.target.position.set(0,0,-1),t.add(t.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+s.type)}return t.position.set(0,0,0),t.decay=2,$(t,s),void 0!==s.intensity&&(t.intensity=s.intensity),t.name=r.createUniqueName(s.name||"light_"+e),a=Promise.resolve(t),r.cache.add(n,a),a}getDependency(e,t){if("light"===e)return this._loadLight(t)}createNodeAttachment(e){let t=this,r=this.parser,n=r.json.nodes[e],i=(n.extensions&&n.extensions[this.name]||{}).light;return void 0===i?null:this._loadLight(i).then(function(e){return r._getNodeRef(t.cache,i,e)})}}class A{constructor(){this.name=p.KHR_MATERIALS_UNLIT}getMaterialType(){return i.MeshBasicMaterial}extendParams(e,t,r){let n=[];e.color=new i.Color(1,1,1),e.opacity=1;let a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){let t=a.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],h),e.opacity=t[3]}void 0!==a.baseColorTexture&&n.push(r.assignTexture(e,"map",a.baseColorTexture,d))}return Promise.all(n)}}class _{constructor(e){this.parser=e,this.name=p.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let n=r.extensions[this.name].emissiveStrength;return void 0!==n&&(t.emissiveIntensity=n),Promise.resolve()}}class v{constructor(e){this.parser=e,this.name=p.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?i.MeshPhysicalMaterial:null}extendMaterialParams(e,t){let r=this.parser,n=r.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let a=[],o=n.extensions[this.name];if(void 0!==o.clearcoatFactor&&(t.clearcoat=o.clearcoatFactor),void 0!==o.clearcoatTexture&&a.push(r.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),void 0!==o.clearcoatRoughnessFactor&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),void 0!==o.clearcoatRoughnessTexture&&a.push(r.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),void 0!==o.clearcoatNormalTexture&&(a.push(r.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),void 0!==o.clearcoatNormalTexture.scale)){let e=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new i.Vector2(e,e)}return Promise.all(a)}}class E{constructor(e){this.parser=e,this.name=p.KHR_MATERIALS_DISPERSION}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?i.MeshPhysicalMaterial:null}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let n=r.extensions[this.name];return t.dispersion=void 0!==n.dispersion?n.dispersion:0,Promise.resolve()}}class T{constructor(e){this.parser=e,this.name=p.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?i.MeshPhysicalMaterial:null}extendMaterialParams(e,t){let r=this.parser,n=r.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let i=[],a=n.extensions[this.name];return void 0!==a.iridescenceFactor&&(t.iridescence=a.iridescenceFactor),void 0!==a.iridescenceTexture&&i.push(r.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),void 0!==a.iridescenceIor&&(t.iridescenceIOR=a.iridescenceIor),void 0===t.iridescenceThicknessRange&&(t.iridescenceThicknessRange=[100,400]),void 0!==a.iridescenceThicknessMinimum&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),void 0!==a.iridescenceThicknessMaximum&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),void 0!==a.iridescenceThicknessTexture&&i.push(r.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(i)}}class C{constructor(e){this.parser=e,this.name=p.KHR_MATERIALS_SHEEN}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?i.MeshPhysicalMaterial:null}extendMaterialParams(e,t){let r=this.parser,n=r.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let a=[];t.sheenColor=new i.Color(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=n.extensions[this.name];if(void 0!==o.sheenColorFactor){let e=o.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],h)}return void 0!==o.sheenRoughnessFactor&&(t.sheenRoughness=o.sheenRoughnessFactor),void 0!==o.sheenColorTexture&&a.push(r.assignTexture(t,"sheenColorMap",o.sheenColorTexture,d)),void 0!==o.sheenRoughnessTexture&&a.push(r.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(a)}}class y{constructor(e){this.parser=e,this.name=p.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?i.MeshPhysicalMaterial:null}extendMaterialParams(e,t){let r=this.parser,n=r.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let i=[],a=n.extensions[this.name];return void 0!==a.transmissionFactor&&(t.transmission=a.transmissionFactor),void 0!==a.transmissionTexture&&i.push(r.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(i)}}class S{constructor(e){this.parser=e,this.name=p.KHR_MATERIALS_VOLUME}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?i.MeshPhysicalMaterial:null}extendMaterialParams(e,t){let r=this.parser,n=r.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let a=[],o=n.extensions[this.name];t.thickness=void 0!==o.thicknessFactor?o.thicknessFactor:0,void 0!==o.thicknessTexture&&a.push(r.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let s=o.attenuationColor||[1,1,1];return t.attenuationColor=new i.Color().setRGB(s[0],s[1],s[2],h),Promise.all(a)}}class R{constructor(e){this.parser=e,this.name=p.KHR_MATERIALS_IOR}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?i.MeshPhysicalMaterial:null}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let n=r.extensions[this.name];return t.ior=void 0!==n.ior?n.ior:1.5,Promise.resolve()}}class b{constructor(e){this.parser=e,this.name=p.KHR_MATERIALS_SPECULAR}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?i.MeshPhysicalMaterial:null}extendMaterialParams(e,t){let r=this.parser,n=r.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let a=[],o=n.extensions[this.name];t.specularIntensity=void 0!==o.specularFactor?o.specularFactor:1,void 0!==o.specularTexture&&a.push(r.assignTexture(t,"specularIntensityMap",o.specularTexture));let s=o.specularColorFactor||[1,1,1];return t.specularColor=new i.Color().setRGB(s[0],s[1],s[2],h),void 0!==o.specularColorTexture&&a.push(r.assignTexture(t,"specularColorMap",o.specularColorTexture,d)),Promise.all(a)}}class B{constructor(e){this.parser=e,this.name=p.EXT_MATERIALS_BUMP}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?i.MeshPhysicalMaterial:null}extendMaterialParams(e,t){let r=this.parser,n=r.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let i=[],a=n.extensions[this.name];return t.bumpScale=void 0!==a.bumpFactor?a.bumpFactor:1,void 0!==a.bumpTexture&&i.push(r.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(i)}}class I{constructor(e){this.parser=e,this.name=p.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?i.MeshPhysicalMaterial:null}extendMaterialParams(e,t){let r=this.parser,n=r.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let i=[],a=n.extensions[this.name];return void 0!==a.anisotropyStrength&&(t.anisotropy=a.anisotropyStrength),void 0!==a.anisotropyRotation&&(t.anisotropyRotation=a.anisotropyRotation),void 0!==a.anisotropyTexture&&i.push(r.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(i)}}class w{constructor(e){this.parser=e,this.name=p.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,r=t.json,n=r.textures[e];if(!n.extensions||!n.extensions[this.name])return null;let i=n.extensions[this.name],a=t.options.ktx2Loader;if(!a)if(!(r.extensionsRequired&&r.extensionsRequired.indexOf(this.name)>=0))return null;else throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return t.loadTextureImage(e,i.source,a)}}class x{constructor(e){this.parser=e,this.name=p.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,r=this.parser,n=r.json,i=n.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=n.images[a.source],s=r.textureLoader;if(o.uri){let e=r.options.manager.getHandler(o.uri);null!==e&&(s=e)}return this.detectSupport().then(function(i){if(i)return r.loadTextureImage(e,a.source,s);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return r.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(1===t.height)}})),this.isSupported}}class M{constructor(e){this.parser=e,this.name=p.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,r=this.parser,n=r.json,i=n.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=n.images[a.source],s=r.textureLoader;if(o.uri){let e=r.options.manager.getHandler(o.uri);null!==e&&(s=e)}return this.detectSupport().then(function(i){if(i)return r.loadTextureImage(e,a.source,s);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return r.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(1===t.height)}})),this.isSupported}}class D{constructor(e){this.name=p.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,r=t.bufferViews[e];if(!r.extensions||!r.extensions[this.name])return null;{let e=r.extensions[this.name],n=this.parser.getDependency("buffer",e.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported)if(!(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0))return null;else throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return n.then(function(t){let r=e.byteOffset||0,n=e.byteLength||0,a=e.count,o=e.byteStride,s=new Uint8Array(t,r,n);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(a,o,s,e.mode,e.filter).then(function(e){return e.buffer}):i.ready.then(function(){let t=new ArrayBuffer(a*o);return i.decodeGltfBuffer(new Uint8Array(t),a,o,s,e.mode,e.filter),t})})}}}class O{constructor(e){this.name=p.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,r=t.nodes[e];if(!r.extensions||!r.extensions[this.name]||void 0===r.mesh)return null;for(let e of t.meshes[r.mesh].primitives)if(e.mode!==J.TRIANGLES&&e.mode!==J.TRIANGLE_STRIP&&e.mode!==J.TRIANGLE_FAN&&void 0!==e.mode)return null;let n=r.extensions[this.name].attributes,a=[],o={};for(let e in n)a.push(this.parser.getDependency("accessor",n[e]).then(t=>(o[e]=t,o[e])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),r=t.isGroup?t.children:[t],n=e[0].count,a=[];for(let e of r){let t=new i.Matrix4,r=new i.Vector3,s=new i.Quaternion,l=new i.Vector3(1,1,1),c=new i.InstancedMesh(e.geometry,e.material,n);for(let e=0;e<n;e++)o.TRANSLATION&&r.fromBufferAttribute(o.TRANSLATION,e),o.ROTATION&&s.fromBufferAttribute(o.ROTATION,e),o.SCALE&&l.fromBufferAttribute(o.SCALE,e),c.setMatrixAt(e,t.compose(r,s,l));for(let t in o)if("_COLOR_0"===t){let e=o[t];c.instanceColor=new i.InstancedBufferAttribute(e.array,e.itemSize,e.normalized)}else"TRANSLATION"!==t&&"ROTATION"!==t&&"SCALE"!==t&&e.geometry.setAttribute(t,o[t]);i.Object3D.prototype.copy.call(c,e),this.parser.assignFinalMaterial(c),a.push(c)}return t.isGroup?(t.clear(),t.add(...a),t):a[0]}))}}let N="glTF",L={JSON:0x4e4f534a,BIN:5130562};class F{constructor(e){this.name=p.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,12);if(this.header={magic:u(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==N)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-12,n=new DataView(e,12),i=0;for(;i<r;){let t=n.getUint32(i,!0);i+=4;let r=n.getUint32(i,!0);if(i+=4,r===L.JSON){let r=new Uint8Array(e,12+i,t);this.content=u(r)}else if(r===L.BIN){let r=12+i;this.body=e.slice(r,r+t)}i+=t}if(null===this.content)throw Error("THREE.GLTFLoader: JSON content not found.")}}class P{constructor(e,t){if(!t)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=p.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let r=this.json,n=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},s={},l={};for(let e in a)o[Y[e]||e.toLowerCase()]=a[e];for(let t in e.attributes){let n=Y[t]||t.toLowerCase();if(void 0!==a[t]){let i=r.accessors[e.attributes[t]],a=z[i.componentType];l[n]=a.name,s[n]=!0===i.normalized}}return t.getDependency("bufferView",i).then(function(e){return new Promise(function(t,r){n.decodeDracoFile(e,function(e){for(let t in e.attributes){let r=e.attributes[t],n=s[t];void 0!==n&&(r.normalized=n)}t(e)},o,l,h,r)})})}}class G{constructor(){this.name=p.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(void 0===t.texCoord||t.texCoord===e.channel)&&void 0===t.offset&&void 0===t.rotation&&void 0===t.scale||(e=e.clone(),void 0!==t.texCoord&&(e.channel=t.texCoord),void 0!==t.offset&&e.offset.fromArray(t.offset),void 0!==t.rotation&&(e.rotation=t.rotation),void 0!==t.scale&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class H{constructor(){this.name=p.KHR_MESH_QUANTIZATION}}class U extends i.Interpolant{constructor(e,t,r,n){super(e,t,r,n)}copySampleValue_(e){let t=this.resultBuffer,r=this.sampleValues,n=this.valueSize,i=e*n*3+n;for(let e=0;e!==n;e++)t[e]=r[i+e];return t}interpolate_(e,t,r,n){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=2*o,l=3*o,c=n-t,u=(r-t)/c,d=u*u,h=d*u,m=e*l,f=m-l,p=-2*h+3*d,g=h-d,A=1-p,_=g-d+u;for(let e=0;e!==o;e++){let t=a[f+e+o],r=a[f+e+s]*c,n=a[m+e+o],l=a[m+e]*c;i[e]=A*t+_*r+p*n+g*l}return i}}let k=new i.Quaternion;class j extends U{interpolate_(e,t,r,n){let i=super.interpolate_(e,t,r,n);return k.fromArray(i).normalize().toArray(i),i}}let J={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},z={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},K={9728:i.NearestFilter,9729:i.LinearFilter,9984:i.NearestMipmapNearestFilter,9985:i.LinearMipmapNearestFilter,9986:i.NearestMipmapLinearFilter,9987:i.LinearMipmapLinearFilter},X={33071:i.ClampToEdgeWrapping,33648:i.MirroredRepeatWrapping,10497:i.RepeatWrapping},W={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Y={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",...c.r>=152?{TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3"}:{TEXCOORD_0:"uv",TEXCOORD_1:"uv2"},COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},V={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Q={CUBICSPLINE:void 0,LINEAR:i.InterpolateLinear,STEP:i.InterpolateDiscrete},Z={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function q(e,t,r){for(let n in r.extensions)void 0===e[n]&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=r.extensions[n])}function $(e,t){void 0!==t.extras&&("object"==typeof t.extras?Object.assign(e.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function ee(e){let t="",r=Object.keys(e).sort();for(let n=0,i=r.length;n<i;n++)t+=r[n]+":"+e[r[n]]+";";return t}function et(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}let er=new i.Matrix4;class en{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new f,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let r=!1,n=!1,a=-1;"undefined"!=typeof navigator&&void 0!==navigator.userAgent&&(r=!0===/^((?!chrome|android).)*safari/i.test(navigator.userAgent),a=(n=navigator.userAgent.indexOf("Firefox")>-1)?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),"undefined"==typeof createImageBitmap||r||n&&a<98?this.textureLoader=new i.TextureLoader(this.options.manager):this.textureLoader=new i.ImageBitmapLoader(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new i.FileLoader(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),"use-credentials"===this.options.crossOrigin&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let r=this,n=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([r.getDependencies("scene"),r.getDependencies("animation"),r.getDependencies("camera")])}).then(function(t){let a={scene:t[0][n.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:n.asset,parser:r,userData:{}};return q(i,a,n),$(a,n),Promise.all(r._invokeAll(function(e){return e.afterRoot&&e.afterRoot(a)})).then(function(){for(let e of a.scenes)e.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],r=this.json.meshes||[];for(let r=0,n=t.length;r<n;r++){let n=t[r].joints;for(let t=0,r=n.length;t<r;t++)e[n[t]].isBone=!0}for(let t=0,n=e.length;t<n;t++){let n=e[t];void 0!==n.mesh&&(this._addNodeRef(this.meshCache,n.mesh),void 0!==n.skin&&(r[n.mesh].isSkinnedMesh=!0)),void 0!==n.camera&&this._addNodeRef(this.cameraCache,n.camera)}}_addNodeRef(e,t){void 0!==t&&(void 0===e.refs[t]&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,r){if(e.refs[t]<=1)return r;let n=r.clone(),i=(e,t)=>{let r=this.associations.get(e);for(let[n,a]of(null!=r&&this.associations.set(t,r),e.children.entries()))i(a,t.children[n])};return i(r,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let r=0;r<t.length;r++){let n=e(t[r]);if(n)return n}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let r=[];for(let n=0;n<t.length;n++){let i=e(t[n]);i&&r.push(i)}return r}getDependency(e,t){let r=e+":"+t,n=this.cache.get(r);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case"mesh":n=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(!(n=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)})))throw Error("Unknown type: "+e)}this.cache.add(r,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){let r=this;t=Promise.all((this.json[e+("mesh"===e?"es":"s")]||[]).map(function(t,n){return r.getDependency(e,n)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],r=this.fileLoader;if(t.type&&"arraybuffer"!==t.type)throw Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(void 0===t.uri&&0===e)return Promise.resolve(this.extensions[p.KHR_BINARY_GLTF].body);let n=this.options;return new Promise(function(e,a){r.load(i.LoaderUtils.resolveURL(t.uri,n.path),e,void 0,function(){a(Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(e){let r=t.byteLength||0,n=t.byteOffset||0;return e.slice(n,n+r)})}loadAccessor(e){let t=this,r=this.json,n=this.json.accessors[e];if(void 0===n.bufferView&&void 0===n.sparse){let e=W[n.type],t=z[n.componentType],r=!0===n.normalized,a=new t(n.count*e);return Promise.resolve(new i.BufferAttribute(a,e,r))}let a=[];return void 0!==n.bufferView?a.push(this.getDependency("bufferView",n.bufferView)):a.push(null),void 0!==n.sparse&&(a.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(a).then(function(e){let a,o,s=e[0],l=W[n.type],c=z[n.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=n.byteOffset||0,m=void 0!==n.bufferView?r.bufferViews[n.bufferView].byteStride:void 0,f=!0===n.normalized;if(m&&m!==d){let e=Math.floor(h/m),r="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+e+":"+n.count,d=t.cache.get(r);d||(a=new c(s,e*m,n.count*m/u),d=new i.InterleavedBuffer(a,m/u),t.cache.add(r,d)),o=new i.InterleavedBufferAttribute(d,l,h%m/u,f)}else a=null===s?new c(n.count*l):new c(s,h,n.count*l),o=new i.BufferAttribute(a,l,f);if(void 0!==n.sparse){let t=W.SCALAR,r=z[n.sparse.indices.componentType],a=n.sparse.indices.byteOffset||0,u=n.sparse.values.byteOffset||0,d=new r(e[1],a,n.sparse.count*t),h=new c(e[2],u,n.sparse.count*l);null!==s&&(o=new i.BufferAttribute(o.array.slice(),o.itemSize,o.normalized));for(let e=0,t=d.length;e<t;e++){let t=d[e];if(o.setX(t,h[e*l]),l>=2&&o.setY(t,h[e*l+1]),l>=3&&o.setZ(t,h[e*l+2]),l>=4&&o.setW(t,h[e*l+3]),l>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return o})}loadTexture(e){let t=this.json,r=this.options,n=t.textures[e].source,i=t.images[n],a=this.textureLoader;if(i.uri){let e=r.manager.getHandler(i.uri);null!==e&&(a=e)}return this.loadTextureImage(e,n,a)}loadTextureImage(e,t,r){let n=this,a=this.json,o=a.textures[e],s=a.images[t],l=(s.uri||s.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,r).then(function(t){t.flipY=!1,t.name=o.name||s.name||"",""===t.name&&"string"==typeof s.uri&&!1===s.uri.startsWith("data:image/")&&(t.name=s.uri);let r=(a.samplers||{})[o.sampler]||{};return t.magFilter=K[r.magFilter]||i.LinearFilter,t.minFilter=K[r.minFilter]||i.LinearMipmapLinearFilter,t.wrapS=X[r.wrapS]||i.RepeatWrapping,t.wrapT=X[r.wrapT]||i.RepeatWrapping,n.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let r=this.json,n=this.options;if(void 0!==this.sourceCache[e])return this.sourceCache[e].then(e=>e.clone());let a=r.images[e],o=self.URL||self.webkitURL,s=a.uri||"",l=!1;if(void 0!==a.bufferView)s=this.getDependency("bufferView",a.bufferView).then(function(e){l=!0;let t=new Blob([e],{type:a.mimeType});return s=o.createObjectURL(t)});else if(void 0===a.uri)throw Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let c=Promise.resolve(s).then(function(e){return new Promise(function(r,a){let o=r;!0===t.isImageBitmapLoader&&(o=function(e){let t=new i.Texture(e);t.needsUpdate=!0,r(t)}),t.load(i.LoaderUtils.resolveURL(e,n.path),o,void 0,a)})}).then(function(e){var t;return!0===l&&o.revokeObjectURL(s),$(e,a),e.userData.mimeType=a.mimeType||((t=a.uri).search(/\.jpe?g($|\?)/i)>0||0===t.search(/^data\:image\/jpeg/)?"image/jpeg":t.search(/\.webp($|\?)/i)>0||0===t.search(/^data\:image\/webp/)?"image/webp":"image/png"),e}).catch(function(e){throw console.error("THREE.GLTFLoader: Couldn't load texture",s),e});return this.sourceCache[e]=c,c}assignTexture(e,t,r,n){let i=this;return this.getDependency("texture",r.index).then(function(a){if(!a)return null;if(void 0!==r.texCoord&&r.texCoord>0&&((a=a.clone()).channel=r.texCoord),i.extensions[p.KHR_TEXTURE_TRANSFORM]){let e=void 0!==r.extensions?r.extensions[p.KHR_TEXTURE_TRANSFORM]:void 0;if(e){let t=i.associations.get(a);a=i.extensions[p.KHR_TEXTURE_TRANSFORM].extendTexture(a,e),i.associations.set(a,t)}}return void 0!==n&&("number"==typeof n&&(n=3001===n?d:h),"colorSpace"in a?a.colorSpace=n:a.encoding=n===d?3001:3e3),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,r=e.material,n=void 0===t.attributes.tangent,a=void 0!==t.attributes.color,o=void 0===t.attributes.normal;if(e.isPoints){let e="PointsMaterial:"+r.uuid,t=this.cache.get(e);t||(t=new i.PointsMaterial,i.Material.prototype.copy.call(t,r),t.color.copy(r.color),t.map=r.map,t.sizeAttenuation=!1,this.cache.add(e,t)),r=t}else if(e.isLine){let e="LineBasicMaterial:"+r.uuid,t=this.cache.get(e);t||(t=new i.LineBasicMaterial,i.Material.prototype.copy.call(t,r),t.color.copy(r.color),t.map=r.map,this.cache.add(e,t)),r=t}if(n||a||o){let e="ClonedMaterial:"+r.uuid+":";n&&(e+="derivative-tangents:"),a&&(e+="vertex-colors:"),o&&(e+="flat-shading:");let t=this.cache.get(e);t||(t=r.clone(),a&&(t.vertexColors=!0),o&&(t.flatShading=!0),n&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(r))),r=t}e.material=r}getMaterialType(){return i.MeshStandardMaterial}loadMaterial(e){let t,r=this,n=this.json,a=this.extensions,o=n.materials[e],s={},l=o.extensions||{},c=[];if(l[p.KHR_MATERIALS_UNLIT]){let e=a[p.KHR_MATERIALS_UNLIT];t=e.getMaterialType(),c.push(e.extendParams(s,o,r))}else{let n=o.pbrMetallicRoughness||{};if(s.color=new i.Color(1,1,1),s.opacity=1,Array.isArray(n.baseColorFactor)){let e=n.baseColorFactor;s.color.setRGB(e[0],e[1],e[2],h),s.opacity=e[3]}void 0!==n.baseColorTexture&&c.push(r.assignTexture(s,"map",n.baseColorTexture,d)),s.metalness=void 0!==n.metallicFactor?n.metallicFactor:1,s.roughness=void 0!==n.roughnessFactor?n.roughnessFactor:1,void 0!==n.metallicRoughnessTexture&&(c.push(r.assignTexture(s,"metalnessMap",n.metallicRoughnessTexture)),c.push(r.assignTexture(s,"roughnessMap",n.metallicRoughnessTexture))),t=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,s)})))}!0===o.doubleSided&&(s.side=i.DoubleSide);let u=o.alphaMode||Z.OPAQUE;if(u===Z.BLEND?(s.transparent=!0,s.depthWrite=!1):(s.transparent=!1,u===Z.MASK&&(s.alphaTest=void 0!==o.alphaCutoff?o.alphaCutoff:.5)),void 0!==o.normalTexture&&t!==i.MeshBasicMaterial&&(c.push(r.assignTexture(s,"normalMap",o.normalTexture)),s.normalScale=new i.Vector2(1,1),void 0!==o.normalTexture.scale)){let e=o.normalTexture.scale;s.normalScale.set(e,e)}if(void 0!==o.occlusionTexture&&t!==i.MeshBasicMaterial&&(c.push(r.assignTexture(s,"aoMap",o.occlusionTexture)),void 0!==o.occlusionTexture.strength&&(s.aoMapIntensity=o.occlusionTexture.strength)),void 0!==o.emissiveFactor&&t!==i.MeshBasicMaterial){let e=o.emissiveFactor;s.emissive=new i.Color().setRGB(e[0],e[1],e[2],h)}return void 0!==o.emissiveTexture&&t!==i.MeshBasicMaterial&&c.push(r.assignTexture(s,"emissiveMap",o.emissiveTexture,d)),Promise.all(c).then(function(){let n=new t(s);return o.name&&(n.name=o.name),$(n,o),r.associations.set(n,{materials:e}),o.extensions&&q(a,n,o),n})}createUniqueName(e){let t=i.PropertyBinding.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,r=this.extensions,n=this.primitiveCache,a=[];for(let o=0,s=e.length;o<s;o++){let s=e[o],l=function(e){let t,r=e.extensions&&e.extensions[p.KHR_DRACO_MESH_COMPRESSION];if(t=r?"draco:"+r.bufferView+":"+r.indices+":"+ee(r.attributes):e.indices+":"+ee(e.attributes)+":"+e.mode,void 0!==e.targets)for(let r=0,n=e.targets.length;r<n;r++)t+=":"+ee(e.targets[r]);return t}(s),c=n[l];if(c)a.push(c.promise);else{let e;e=s.extensions&&s.extensions[p.KHR_DRACO_MESH_COMPRESSION]?function(e){return r[p.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(r){return ei(r,e,t)})}(s):ei(new i.BufferGeometry,s,t),n[l]={primitive:s,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,r=this.json,n=this.extensions,a=r.meshes[e],o=a.primitives,s=[];for(let e=0,t=o.length;e<t;e++){var c;let t=void 0===o[e].material?(void 0===(c=this.cache).DefaultMaterial&&(c.DefaultMaterial=new i.MeshStandardMaterial({color:0xffffff,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:i.FrontSide})),c.DefaultMaterial):this.getDependency("material",o[e].material);s.push(t)}return s.push(t.loadGeometries(o)),Promise.all(s).then(function(r){let s=r.slice(0,r.length-1),c=r[r.length-1],u=[];for(let r=0,d=c.length;r<d;r++){let d,h=c[r],m=o[r],f=s[r];if(m.mode===J.TRIANGLES||m.mode===J.TRIANGLE_STRIP||m.mode===J.TRIANGLE_FAN||void 0===m.mode)!0===(d=!0===a.isSkinnedMesh?new i.SkinnedMesh(h,f):new i.Mesh(h,f)).isSkinnedMesh&&d.normalizeSkinWeights(),m.mode===J.TRIANGLE_STRIP?d.geometry=l(d.geometry,i.TriangleStripDrawMode):m.mode===J.TRIANGLE_FAN&&(d.geometry=l(d.geometry,i.TriangleFanDrawMode));else if(m.mode===J.LINES)d=new i.LineSegments(h,f);else if(m.mode===J.LINE_STRIP)d=new i.Line(h,f);else if(m.mode===J.LINE_LOOP)d=new i.LineLoop(h,f);else if(m.mode===J.POINTS)d=new i.Points(h,f);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&function(e,t){if(e.updateMorphTargets(),void 0!==t.weights)for(let r=0,n=t.weights.length;r<n;r++)e.morphTargetInfluences[r]=t.weights[r];if(t.extras&&Array.isArray(t.extras.targetNames)){let r=t.extras.targetNames;if(e.morphTargetInfluences.length===r.length){e.morphTargetDictionary={};for(let t=0,n=r.length;t<n;t++)e.morphTargetDictionary[r[t]]=t}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}(d,a),d.name=t.createUniqueName(a.name||"mesh_"+e),$(d,a),m.extensions&&q(n,d,m),t.assignFinalMaterial(d),u.push(d)}for(let r=0,n=u.length;r<n;r++)t.associations.set(u[r],{meshes:e,primitives:r});if(1===u.length)return a.extensions&&q(n,u[0],a),u[0];let d=new i.Group;a.extensions&&q(n,d,a),t.associations.set(d,{meshes:e});for(let e=0,t=u.length;e<t;e++)d.add(u[e]);return d})}loadCamera(e){let t,r=this.json.cameras[e],n=r[r.type];return n?("perspective"===r.type?t=new i.PerspectiveCamera(i.MathUtils.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):"orthographic"===r.type&&(t=new i.OrthographicCamera(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),r.name&&(t.name=this.createUniqueName(r.name)),$(t,r),Promise.resolve(t)):void console.warn("THREE.GLTFLoader: Missing camera parameters.")}loadSkin(e){let t=this.json.skins[e],r=[];for(let e=0,n=t.joints.length;e<n;e++)r.push(this._loadNodeShallow(t.joints[e]));return void 0!==t.inverseBindMatrices?r.push(this.getDependency("accessor",t.inverseBindMatrices)):r.push(null),Promise.all(r).then(function(e){let r=e.pop(),n=[],a=[];for(let o=0,s=e.length;o<s;o++){let s=e[o];if(s){n.push(s);let e=new i.Matrix4;null!==r&&e.fromArray(r.array,16*o),a.push(e)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[o])}return new i.Skeleton(n,a)})}loadAnimation(e){let t=this.json,r=this,n=t.animations[e],a=n.name?n.name:"animation_"+e,o=[],s=[],l=[],c=[],u=[];for(let e=0,t=n.channels.length;e<t;e++){let t=n.channels[e],r=n.samplers[t.sampler],i=t.target,a=i.node,d=void 0!==n.parameters?n.parameters[r.input]:r.input,h=void 0!==n.parameters?n.parameters[r.output]:r.output;void 0!==i.node&&(o.push(this.getDependency("node",a)),s.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",h)),c.push(r),u.push(i))}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(e){let t=e[0],n=e[1],o=e[2],s=e[3],l=e[4],c=[];for(let e=0,i=t.length;e<i;e++){let i=t[e],a=n[e],u=o[e],d=s[e],h=l[e];if(void 0===i)continue;i.updateMatrix&&i.updateMatrix();let m=r._createAnimationTracks(i,a,u,d,h);if(m)for(let e=0;e<m.length;e++)c.push(m[e])}return new i.AnimationClip(a,void 0,c)})}createNodeMesh(e){let t=this.json,r=this,n=t.nodes[e];return void 0===n.mesh?null:r.getDependency("mesh",n.mesh).then(function(e){let t=r._getNodeRef(r.meshCache,n.mesh,e);return void 0!==n.weights&&t.traverse(function(e){if(e.isMesh)for(let t=0,r=n.weights.length;t<r;t++)e.morphTargetInfluences[t]=n.weights[t]}),t})}loadNode(e){let t=this.json.nodes[e],r=this._loadNodeShallow(e),n=[],i=t.children||[];for(let e=0,t=i.length;e<t;e++)n.push(this.getDependency("node",i[e]));let a=void 0===t.skin?Promise.resolve(null):this.getDependency("skin",t.skin);return Promise.all([r,Promise.all(n),a]).then(function(e){let t=e[0],r=e[1],n=e[2];null!==n&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(n,er)});for(let e=0,n=r.length;e<n;e++)t.add(r[e]);return t})}_loadNodeShallow(e){let t=this.json,r=this.extensions,n=this;if(void 0!==this.nodeCache[e])return this.nodeCache[e];let a=t.nodes[e],o=a.name?n.createUniqueName(a.name):"",s=[],l=n._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return l&&s.push(l),void 0!==a.camera&&s.push(n.getDependency("camera",a.camera).then(function(e){return n._getNodeRef(n.cameraCache,a.camera,e)})),n._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){s.push(e)}),this.nodeCache[e]=Promise.all(s).then(function(t){let s;if((s=!0===a.isBone?new i.Bone:t.length>1?new i.Group:1===t.length?t[0]:new i.Object3D)!==t[0])for(let e=0,r=t.length;e<r;e++)s.add(t[e]);if(a.name&&(s.userData.name=a.name,s.name=o),$(s,a),a.extensions&&q(r,s,a),void 0!==a.matrix){let e=new i.Matrix4;e.fromArray(a.matrix),s.applyMatrix4(e)}else void 0!==a.translation&&s.position.fromArray(a.translation),void 0!==a.rotation&&s.quaternion.fromArray(a.rotation),void 0!==a.scale&&s.scale.fromArray(a.scale);return n.associations.has(s)||n.associations.set(s,{}),n.associations.get(s).nodes=e,s}),this.nodeCache[e]}loadScene(e){let t=this.extensions,r=this.json.scenes[e],n=this,a=new i.Group;r.name&&(a.name=n.createUniqueName(r.name)),$(a,r),r.extensions&&q(t,a,r);let o=r.nodes||[],s=[];for(let e=0,t=o.length;e<t;e++)s.push(n.getDependency("node",o[e]));return Promise.all(s).then(function(e){for(let t=0,r=e.length;t<r;t++)a.add(e[t]);return n.associations=(e=>{let t=new Map;for(let[e,r]of n.associations)(e instanceof i.Material||e instanceof i.Texture)&&t.set(e,r);return e.traverse(e=>{let r=n.associations.get(e);null!=r&&t.set(e,r)}),t})(a),a})}_createAnimationTracks(e,t,r,n,a){let o,s=[],l=e.name?e.name:e.uuid,c=[];switch(V[a.path]===V.weights?e.traverse(function(e){e.morphTargetInfluences&&c.push(e.name?e.name:e.uuid)}):c.push(l),V[a.path]){case V.weights:o=i.NumberKeyframeTrack;break;case V.rotation:o=i.QuaternionKeyframeTrack;break;case V.position:case V.scale:o=i.VectorKeyframeTrack;break;default:o=1===r.itemSize?i.NumberKeyframeTrack:i.VectorKeyframeTrack}let u=void 0!==n.interpolation?Q[n.interpolation]:i.InterpolateLinear,d=this._getArrayFromAccessor(r);for(let e=0,r=c.length;e<r;e++){let r=new o(c[e]+"."+V[a.path],t.array,d,u);"CUBICSPLINE"===n.interpolation&&this._createCubicSplineTrackInterpolant(r),s.push(r)}return s}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=et(t.constructor),r=new Float32Array(t.length);for(let n=0,i=t.length;n<i;n++)r[n]=t[n]*e;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(e){return new(this instanceof i.QuaternionKeyframeTrack?j:U)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function ei(e,t,r){let n=t.attributes,a=[];for(let t in n){let i=Y[t]||t.toLowerCase();i in e.attributes||a.push(function(t,n){return r.getDependency("accessor",t).then(function(t){e.setAttribute(n,t)})}(n[t],i))}if(void 0!==t.indices&&!e.index){let n=r.getDependency("accessor",t.indices).then(function(t){e.setIndex(t)});a.push(n)}return $(e,t),!function(e,t,r){let n=t.attributes,a=new i.Box3;if(void 0===n.POSITION)return;{let e=r.json.accessors[n.POSITION],t=e.min,o=e.max;if(void 0===t||void 0===o)return console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");if(a.set(new i.Vector3(t[0],t[1],t[2]),new i.Vector3(o[0],o[1],o[2])),e.normalized){let t=et(z[e.componentType]);a.min.multiplyScalar(t),a.max.multiplyScalar(t)}}let o=t.targets;if(void 0!==o){let e=new i.Vector3,t=new i.Vector3;for(let n=0,i=o.length;n<i;n++){let i=o[n];if(void 0!==i.POSITION){let n=r.json.accessors[i.POSITION],a=n.min,o=n.max;if(void 0!==a&&void 0!==o){if(t.setX(Math.max(Math.abs(a[0]),Math.abs(o[0]))),t.setY(Math.max(Math.abs(a[1]),Math.abs(o[1]))),t.setZ(Math.max(Math.abs(a[2]),Math.abs(o[2]))),n.normalized){let e=et(z[n.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}a.expandByVector(e)}e.boundingBox=a;let s=new i.Sphere;a.getCenter(s.center),s.radius=a.min.distanceTo(a.max)/2,e.boundingSphere=s}(e,t,r),Promise.all(a).then(function(){return void 0!==t.targets?function(e,t,r){let n=!1,i=!1,a=!1;for(let e=0,r=t.length;e<r;e++){let r=t[e];if(void 0!==r.POSITION&&(n=!0),void 0!==r.NORMAL&&(i=!0),void 0!==r.COLOR_0&&(a=!0),n&&i&&a)break}if(!n&&!i&&!a)return Promise.resolve(e);let o=[],s=[],l=[];for(let c=0,u=t.length;c<u;c++){let u=t[c];if(n){let t=void 0!==u.POSITION?r.getDependency("accessor",u.POSITION):e.attributes.position;o.push(t)}if(i){let t=void 0!==u.NORMAL?r.getDependency("accessor",u.NORMAL):e.attributes.normal;s.push(t)}if(a){let t=void 0!==u.COLOR_0?r.getDependency("accessor",u.COLOR_0):e.attributes.color;l.push(t)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(l)]).then(function(t){let r=t[0],o=t[1],s=t[2];return n&&(e.morphAttributes.position=r),i&&(e.morphAttributes.normal=o),a&&(e.morphAttributes.color=s),e.morphTargetsRelative=!0,e})}(e,t.targets,r):e})}var ea=r(99);let eo=null,es="https://www.gstatic.com/draco/versioned/decoders/1.5.5/";function el(e=!0,t=!0,r){return i=>{r&&r(i),e&&(eo||(eo=new o),eo.setDecoderPath("string"==typeof e?e:es),i.setDRACOLoader(eo)),t&&i.setMeshoptDecoder((()=>{let e;if(n)return n;let t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),r=new Uint8Array([32,0,65,253,3,1,2,34,4,106,6,5,11,8,7,20,13,33,12,16,128,9,116,64,19,113,127,15,10,21,22,14,255,66,24,54,136,107,18,23,192,26,114,118,132,17,77,101,130,144,27,87,131,44,45,74,156,154,70,167]);if("object"!=typeof WebAssembly)return{supported:!1};let i="B9h9z9tFBBBF8fL9gBB9gLaaaaaFa9gEaaaB9gFaFa9gEaaaFaEMcBFFFGGGEIIILF9wFFFLEFBFKNFaFCx/IFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBF8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBGy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBEn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBIi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBKI9z9iqlBOc+x8ycGBM/qQFTa8jUUUUBCU/EBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAGTkUUUBRNCUoBAG9uC/wgBZHKCUGAKCUG9JyRVAECFJRICBRcGXEXAcAF9PQFAVAFAclAcAVJAF9JyRMGXGXAG9FQBAMCbJHKC9wZRSAKCIrCEJCGrRQANCUGJRfCBRbAIRTEXGXAOATlAQ9PQBCBRISEMATAQJRIGXAS9FQBCBRtCBREEXGXAOAIlCi9PQBCBRISLMANCU/CBJAEJRKGXGXGXGXGXATAECKrJ2BBAtCKZrCEZfIBFGEBMAKhB83EBAKCNJhB83EBSEMAKAI2BIAI2BBHmCKrHYAYCE6HYy86BBAKCFJAICIJAYJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCGJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCEJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCIJAYAmJHY2BBAI2BFHmCKrHPAPCE6HPy86BBAKCLJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCKJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCOJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCNJAYAmJHY2BBAI2BGHmCKrHPAPCE6HPy86BBAKCVJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCcJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCMJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCSJAYAmJHm2BBAI2BEHICKrHYAYCE6HYy86BBAKCQJAmAYJHm2BBAICIrCEZHYAYCE6HYy86BBAKCfJAmAYJHm2BBAICGrCEZHYAYCE6HYy86BBAKCbJAmAYJHK2BBAICEZHIAICE6HIy86BBAKAIJRISGMAKAI2BNAI2BBHmCIrHYAYCb6HYy86BBAKCFJAICNJAYJHY2BBAmCbZHmAmCb6Hmy86BBAKCGJAYAmJHm2BBAI2BFHYCIrHPAPCb6HPy86BBAKCEJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCIJAmAYJHm2BBAI2BGHYCIrHPAPCb6HPy86BBAKCLJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCKJAmAYJHm2BBAI2BEHYCIrHPAPCb6HPy86BBAKCOJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCNJAmAYJHm2BBAI2BIHYCIrHPAPCb6HPy86BBAKCVJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCcJAmAYJHm2BBAI2BLHYCIrHPAPCb6HPy86BBAKCMJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCSJAmAYJHm2BBAI2BKHYCIrHPAPCb6HPy86BBAKCQJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCfJAmAYJHm2BBAI2BOHICIrHYAYCb6HYy86BBAKCbJAmAYJHK2BBAICbZHIAICb6HIy86BBAKAIJRISFMAKAI8pBB83BBAKCNJAICNJ8pBB83BBAICTJRIMAtCGJRtAECTJHEAS9JQBMMGXAIQBCBRISEMGXAM9FQBANAbJ2BBRtCBRKAfREEXAEANCU/CBJAKJ2BBHTCFrCBATCFZl9zAtJHt86BBAEAGJREAKCFJHKAM9HQBMMAfCFJRfAIRTAbCFJHbAG9HQBMMABAcAG9sJANCUGJAMAG9sTkUUUBpANANCUGJAMCaJAG9sJAGTkUUUBpMAMCBAIyAcJRcAIQBMC9+RKSFMCBC99AOAIlAGCAAGCA9Ly6yRKMALCU/EBJ8kUUUUBAKM+OmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUFT+JUUUBpALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM+lLKFaF99GaG99FaG99GXGXAGCI9HQBAF9FQFEXGXGX9DBBB8/9DBBB+/ABCGJHG1BB+yAB1BBHE+yHI+L+TABCFJHL1BBHK+yHO+L+THN9DBBBB9gHVyAN9DBB/+hANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE86BBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG86BBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG86BBABCIJRBAFCaJHFQBSGMMAF9FQBEXGXGX9DBBB8/9DBBB+/ABCIJHG8uFB+yAB8uFBHE+yHI+L+TABCGJHL8uFBHK+yHO+L+THN9DBBBB9gHVyAN9DB/+g6ANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE87FBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG87FBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG87FBABCNJRBAFCaJHFQBMMM/SEIEaE99EaF99GXAF9FQBCBREABRIEXGXGX9D/zI818/AICKJ8uFBHLCEq+y+VHKAI8uFB+y+UHO9DB/+g6+U9DBBB8/9DBBB+/AO9DBBBB9gy+SHN+L9DBBB9P9d9FQBAN+oRVSFMCUUUU94RVMAICIJ8uFBRcAICGJ8uFBRMABALCFJCEZAEqCFWJAV87FBGXGXAKAM+y+UHN9DB/+g6+U9DBBB8/9DBBB+/AN9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRMSFMCUUUU94RMMABALCGJCEZAEqCFWJAM87FBGXGXAKAc+y+UHK9DB/+g6+U9DBBB8/9DBBB+/AK9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRcSFMCUUUU94RcMABALCaJCEZAEqCFWJAc87FBGXGX9DBBU8/AOAO+U+TANAN+U+TAKAK+U+THO9DBBBBAO9DBBBB9gy+R9DB/+g6+U9DBBB8/+SHO+L9DBBB9P9d9FQBAO+oRcSFMCUUUU94RcMABALCEZAEqCFWJAc87FBAICNJRIAECIJREAFCaJHFQBMMM9JBGXAGCGrAF9sHF9FQBEXABAB8oGBHGCNWCN91+yAGCi91CnWCUUU/8EJ+++U84GBABCIJRBAFCaJHFQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEM/lFFFaGXGXAFABqCEZ9FQBABRESFMGXGXAGCT9PQBABRESFMABREEXAEAF8oGBjGBAECIJAFCIJ8oGBjGBAECNJAFCNJ8oGBjGBAECSJAFCSJ8oGBjGBAECTJREAFCTJRFAGC9wJHGCb9LQBMMAGCI9JQBEXAEAF8oGBjGBAFCIJRFAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF2BB86BBAECFJREAFCFJRFAGCaJHGQBMMABMoFFGaGXGXABCEZ9FQBABRESFMAFCgFZC+BwsN9sRIGXGXAGCT9PQBABRESFMABREEXAEAIjGBAECSJAIjGBAECNJAIjGBAECIJAIjGBAECTJREAGC9wJHGCb9LQBMMAGCI9JQBEXAEAIjGBAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF86BBAECFJREAGCaJHGQBMMABMMMFBCUNMIT9kBB";WebAssembly.validate(t)&&(i="B9h9z9tFBBBFiI9gBB9gLaaaaaFa9gEaaaB9gFaFaEMcBBFBFFGGGEILF9wFFFLEFBFKNFaFCx/aFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBG8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBIy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBKi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBOn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBNI9z9iqlBVc+N9IcIBTEM9+FLa8jUUUUBCTlRBCBRFEXCBRGCBREEXABCNJAGJAECUaAFAGrCFZHIy86BBAEAIJREAGCFJHGCN9HQBMAFCx+YUUBJAE86BBAFCEWCxkUUBJAB8pEN83EBAFCFJHFCUG9HQBMMk8lLbaE97F9+FaL978jUUUUBCU/KBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAG/8cBBCUoBAG9uC/wgBZHKCUGAKCUG9JyRNAECFJRKCBRVGXEXAVAF9PQFANAFAVlAVANJAF9JyRcGXGXAG9FQBAcCbJHIC9wZHMCE9sRSAMCFWRQAICIrCEJCGrRfCBRbEXAKRTCBRtGXEXGXAOATlAf9PQBCBRKSLMALCU/CBJAtAM9sJRmATAfJRKCBREGXAMCoB9JQBAOAKlC/gB9JQBCBRIEXAmAIJREGXGXGXGXGXATAICKrJ2BBHYCEZfIBFGEBMAECBDtDMIBSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMIBAKCTJRKMGXGXGXGXGXAYCGrCEZfIBFGEBMAECBDtDMITSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMITAKCTJRKMGXGXGXGXGXAYCIrCEZfIBFGEBMAECBDtDMIASEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMIAAKCTJRKMGXGXGXGXGXAYCKrfIBFGEBMAECBDtDMI8wSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCIJAeDeBJAYCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCNJAeDeBJAYCx+YUUBJ2BBJRKSFMAEAKDBBBDMI8wAKCTJRKMAICoBJREAICUFJAM9LQFAERIAOAKlC/fB9LQBMMGXAEAM9PQBAECErRIEXGXAOAKlCi9PQBCBRKSOMAmAEJRYGXGXGXGXGXATAECKrJ2BBAICKZrCEZfIBFGEBMAYCBDtDMIBSEMAYAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAYAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAYAKDBBBDMIBAKCTJRKMAICGJRIAECTJHEAM9JQBMMGXAK9FQBAKRTAtCFJHtCI6QGSFMMCBRKSEMGXAM9FQBALCUGJAbJREALAbJDBGBReCBRYEXAEALCU/CBJAYJHIDBIBHdCFD9tAdCFDbHPD9OD9hD9RHdAIAMJDBIBH8ZCFD9tA8ZAPD9OD9hD9RH8ZDQBTFtGmEYIPLdKeOnHpAIAQJDBIBHyCFD9tAyAPD9OD9hD9RHyAIASJDBIBH8cCFD9tA8cAPD9OD9hD9RH8cDQBTFtGmEYIPLdKeOnH8dDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGEAeD9uHeDyBjGBAEAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeApA8dDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeAdA8ZDQNiV8ZcpMyS8cQ8df8eb8fHdAyA8cDQNiV8ZcpMyS8cQ8df8eb8fH8ZDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeAdA8ZDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJREAYCTJHYAM9JQBMMAbCIJHbAG9JQBMMABAVAG9sJALCUGJAcAG9s/8cBBALALCUGJAcCaJAG9sJAG/8cBBMAcCBAKyAVJRVAKQBMC9+RKSFMCBC99AOAKlAGCAAGCA9Ly6yRKMALCU/KBJ8kUUUUBAKMNBT+BUUUBM+KmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUF/8MBALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM/dLEK97FaF97GXGXAGCI9HQBAF9FQFCBRGEXABABDBBBHECiD+rFCiD+sFD/6FHIAECND+rFCiD+sFD/6FAID/gFAECTD+rFCiD+sFD/6FHLD/gFD/kFD/lFHKCBDtD+2FHOAICUUUU94DtHND9OD9RD/kFHI9DBB/+hDYAIAID/mFAKAKD/mFALAOALAND9OD9RD/kFHIAID/mFD/kFD/kFD/jFD/nFHLD/mF9DBBX9LDYHOD/kFCgFDtD9OAECUUU94DtD9OD9QAIALD/mFAOD/kFCND+rFCU/+EDtD9OD9QAKALD/mFAOD/kFCTD+rFCUU/8ODtD9OD9QDMBBABCTJRBAGCIJHGAF9JQBSGMMAF9FQBCBRGEXABCTJHVAVDBBBHECBDtHOCUU98D8cFCUU98D8cEHND9OABDBBBHKAEDQILKOSQfbPden8c8d8e8fCggFDtD9OD/6FAKAEDQBFGENVcMTtmYi8ZpyHECTD+sFD/6FHID/gFAECTD+rFCTD+sFD/6FHLD/gFD/kFD/lFHE9DB/+g6DYALAEAOD+2FHOALCUUUU94DtHcD9OD9RD/kFHLALD/mFAEAED/mFAIAOAIAcD9OD9RD/kFHEAED/mFD/kFD/kFD/jFD/nFHID/mF9DBBX9LDYHOD/kFCTD+rFALAID/mFAOD/kFCggEDtD9OD9QHLAEAID/mFAOD/kFCaDbCBDnGCBDnECBDnKCBDnOCBDncCBDnMCBDnfCBDnbD9OHEDQNVi8ZcMpySQ8c8dfb8e8fD9QDMBBABAKAND9OALAEDQBFTtGEmYILPdKOenD9QDMBBABCAJRBAGCIJHGAF9JQBMMM/hEIGaF97FaL978jUUUUBCTlREGXAF9FQBCBRIEXAEABDBBBHLABCTJHKDBBBHODQILKOSQfbPden8c8d8e8fHNCTD+sFHVCID+rFDMIBAB9DBBU8/DY9D/zI818/DYAVCEDtD9QD/6FD/nFHVALAODQBFGENVcMTtmYi8ZpyHLCTD+rFCTD+sFD/6FD/mFHOAOD/mFAVALCTD+sFD/6FD/mFHcAcD/mFAVANCTD+rFCTD+sFD/6FD/mFHNAND/mFD/kFD/kFD/lFCBDtD+4FD/jF9DB/+g6DYHVD/mF9DBBX9LDYHLD/kFCggEDtHMD9OAcAVD/mFALD/kFCTD+rFD9QHcANAVD/mFALD/kFCTD+rFAOAVD/mFALD/kFAMD9OD9QHVDQBFTtGEmYILPdKOenHLD8dBAEDBIBDyB+t+J83EBABCNJALD8dFAEDBIBDyF+t+J83EBAKAcAVDQNVi8ZcMpySQ8c8dfb8e8fHVD8dBAEDBIBDyG+t+J83EBABCiJAVD8dFAEDBIBDyE+t+J83EBABCAJRBAICIJHIAF9JQBMMM9jFF97GXAGCGrAF9sHG9FQBCBRFEXABABDBBBHECND+rFCND+sFD/6FAECiD+sFCnD+rFCUUU/8EDtD+uFD/mFDMBBABCTJRBAFCIJHFAG9JQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEMMMFBCUNMIT9tBB");let a=WebAssembly.instantiate(function(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;++r){let n=e.charCodeAt(r);t[r]=n>96?n-71:n>64?n-65:n>47?n+4:n>46?63:62}let n=0;for(let i=0;i<e.length;++i)t[n++]=t[i]<60?r[t[i]]:(t[i]-60)*64+t[++i];return t.buffer.slice(0,n)}(i),{}).then(t=>{(e=t.instance).exports.__wasm_call_ctors()});function o(t,r,n,i,a,o){let s=e.exports.sbrk,l=n+3&-4,c=s(l*i),u=s(a.length),d=new Uint8Array(e.exports.memory.buffer);d.set(a,u);let h=t(c,n,i,u,a.length);if(0===h&&o&&o(c,l,i),r.set(d.subarray(c,c+n*i)),s(c-s(0)),0!==h)throw Error(`Malformed buffer data: ${h}`)}let s={0:"",1:"meshopt_decodeFilterOct",2:"meshopt_decodeFilterQuat",3:"meshopt_decodeFilterExp",NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},l={0:"meshopt_decodeVertexBuffer",1:"meshopt_decodeIndexBuffer",2:"meshopt_decodeIndexSequence",ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"};return n={ready:a,supported:!0,decodeVertexBuffer(t,r,n,i,a){o(e.exports.meshopt_decodeVertexBuffer,t,r,n,i,e.exports[s[a]])},decodeIndexBuffer(t,r,n,i){o(e.exports.meshopt_decodeIndexBuffer,t,r,n,i)},decodeIndexSequence(t,r,n,i){o(e.exports.meshopt_decodeIndexSequence,t,r,n,i)},decodeGltfBuffer(t,r,n,i,a,c){o(e.exports[l[a]],t,r,n,i,e.exports[s[c]])}}})())}}let ec=(e,t,r,n)=>(0,ea.G)(m,e,el(t,r,n));ec.preload=(e,t,r,n)=>ea.G.preload(m,e,el(t,r,n)),ec.clear=e=>ea.G.clear(m,e),ec.setDecoderPath=e=>{es=e}},3617:(e,t,r)=>{r.d(t,{o:()=>i});var n=r(7548);class i{setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}}new n.OrthographicCamera(-1,1,1,-1,0,1);class a extends n.BufferGeometry{constructor(){super(),this.setAttribute("position",new n.Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new n.Float32BufferAttribute([0,2,0,0,2,0],2))}}new a},3646:(e,t,r)=>{let n,i;r.d(t,{E:()=>v});var a=r(8945),o=r(2115),s=r(2669),l=r(7548),c=r(99);let u=new l.Vector3,d=new l.Vector3,h=new l.Vector3,m=new l.Vector2;function f(e,t,r){let n=u.setFromMatrixPosition(e.matrixWorld);n.project(t);let i=r.width/2,a=r.height/2;return[n.x*i+i,-(n.y*a)+a]}let p=e=>1e-10>Math.abs(e)?0:e;function g(e,t,r=""){let n="matrix3d(";for(let r=0;16!==r;r++)n+=p(t[r]*e.elements[r])+(15!==r?",":")");return r+n}let A=(n=[1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1],e=>g(e,n)),_=(i=e=>[1/e,1/e,1/e,1,-1/e,-1/e,-1/e,-1,1/e,1/e,1/e,1,1,1,1,1],(e,t)=>g(e,i(t),"translate(-50%,-50%)")),v=o.forwardRef(({children:e,eps:t=.001,style:r,className:n,prepend:i,center:g,fullscreen:v,portal:E,distanceFactor:T,sprite:C=!1,transform:y=!1,occlude:S,onOcclude:R,castShadow:b,receiveShadow:B,material:I,geometry:w,zIndexRange:x=[0x1000037,0],calculatePosition:M=f,as:D="div",wrapperClass:O,pointerEvents:N="auto",...L},F)=>{let{gl:P,camera:G,scene:H,size:U,raycaster:k,events:j,viewport:J}=(0,c.C)(),[z]=o.useState(()=>document.createElement(D)),K=o.useRef(null),X=o.useRef(null),W=o.useRef(0),Y=o.useRef([0,0]),V=o.useRef(null),Q=o.useRef(null),Z=(null==E?void 0:E.current)||j.connected||P.domElement.parentNode,q=o.useRef(null),$=o.useRef(!1),ee=o.useMemo(()=>S&&"blending"!==S||Array.isArray(S)&&S.length&&function(e){return e&&"object"==typeof e&&"current"in e}(S[0]),[S]);o.useLayoutEffect(()=>{let e=P.domElement;S&&"blending"===S?(e.style.zIndex=`${Math.floor(x[0]/2)}`,e.style.position="absolute",e.style.pointerEvents="none"):(e.style.zIndex=null,e.style.position=null,e.style.pointerEvents=null)},[S]),o.useLayoutEffect(()=>{if(X.current){let e=K.current=s.createRoot(z);if(H.updateMatrixWorld(),y)z.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{let e=M(X.current,G,U);z.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${e[0]}px,${e[1]}px,0);transform-origin:0 0;`}return Z&&(i?Z.prepend(z):Z.appendChild(z)),()=>{Z&&Z.removeChild(z),e.unmount()}}},[Z,y]),o.useLayoutEffect(()=>{O&&(z.className=O)},[O]);let et=o.useMemo(()=>y?{position:"absolute",top:0,left:0,width:U.width,height:U.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:g?"translate3d(-50%,-50%,0)":"none",...v&&{top:-U.height/2,left:-U.width/2,width:U.width,height:U.height},...r},[r,g,v,U,y]),er=o.useMemo(()=>({position:"absolute",pointerEvents:N}),[N]);o.useLayoutEffect(()=>{var t,i;$.current=!1,y?null==(t=K.current)||t.render(o.createElement("div",{ref:V,style:et},o.createElement("div",{ref:Q,style:er},o.createElement("div",{ref:F,className:n,style:r,children:e})))):null==(i=K.current)||i.render(o.createElement("div",{ref:F,style:et,className:n,children:e}))});let en=o.useRef(!0);(0,c.D)(e=>{if(X.current){G.updateMatrixWorld(),X.current.updateWorldMatrix(!0,!1);let e=y?Y.current:M(X.current,G,U);if(y||Math.abs(W.current-G.zoom)>t||Math.abs(Y.current[0]-e[0])>t||Math.abs(Y.current[1]-e[1])>t){let t=function(e,t){let r=u.setFromMatrixPosition(e.matrixWorld),n=d.setFromMatrixPosition(t.matrixWorld),i=r.sub(n),a=t.getWorldDirection(h);return i.angleTo(a)>Math.PI/2}(X.current,G),r=!1;ee&&(Array.isArray(S)?r=S.map(e=>e.current):"blending"!==S&&(r=[H]));let n=en.current;r?en.current=function(e,t,r,n){let i=u.setFromMatrixPosition(e.matrixWorld),a=i.clone();a.project(t),m.set(a.x,a.y),r.setFromCamera(m,t);let o=r.intersectObjects(n,!0);if(o.length){let e=o[0].distance;return i.distanceTo(r.ray.origin)<e}return!0}(X.current,G,k,r)&&!t:en.current=!t,n!==en.current&&(R?R(!en.current):z.style.display=en.current?"block":"none");let i=Math.floor(x[0]/2),a=S?ee?[x[0],i]:[i-1,0]:x;if(z.style.zIndex=`${function(e,t,r){if(t instanceof l.PerspectiveCamera||t instanceof l.OrthographicCamera){let n=u.setFromMatrixPosition(e.matrixWorld),i=d.setFromMatrixPosition(t.matrixWorld),a=n.distanceTo(i),o=(r[1]-r[0])/(t.far-t.near),s=r[1]-o*t.far;return Math.round(o*a+s)}}(X.current,G,a)}`,y){let[e,t]=[U.width/2,U.height/2],r=G.projectionMatrix.elements[5]*t,{isOrthographicCamera:n,top:i,left:a,bottom:o,right:s}=G,l=A(G.matrixWorldInverse),c=n?`scale(${r})translate(${p(-(s+a)/2)}px,${p((i+o)/2)}px)`:`translateZ(${r}px)`,u=X.current.matrixWorld;C&&((u=G.matrixWorldInverse.clone().transpose().copyPosition(u).scale(X.current.scale)).elements[3]=u.elements[7]=u.elements[11]=0,u.elements[15]=1),z.style.width=U.width+"px",z.style.height=U.height+"px",z.style.perspective=n?"":`${r}px`,V.current&&Q.current&&(V.current.style.transform=`${c}${l}translate(${e}px,${t}px)`,Q.current.style.transform=_(u,1/((T||10)/400)))}else{let t=void 0===T?1:function(e,t){if(t instanceof l.OrthographicCamera)return t.zoom;if(!(t instanceof l.PerspectiveCamera))return 1;{let r=u.setFromMatrixPosition(e.matrixWorld),n=d.setFromMatrixPosition(t.matrixWorld);return 1/(2*Math.tan(t.fov*Math.PI/180/2)*r.distanceTo(n))}}(X.current,G)*T;z.style.transform=`translate3d(${e[0]}px,${e[1]}px,0) scale(${t})`}Y.current=e,W.current=G.zoom}}if(!ee&&q.current&&!$.current)if(y){if(V.current){let e=V.current.children[0];if(null!=e&&e.clientWidth&&null!=e&&e.clientHeight){let{isOrthographicCamera:t}=G;if(t||w)L.scale&&(Array.isArray(L.scale)?L.scale instanceof l.Vector3?q.current.scale.copy(L.scale.clone().divideScalar(1)):q.current.scale.set(1/L.scale[0],1/L.scale[1],1/L.scale[2]):q.current.scale.setScalar(1/L.scale));else{let t=(T||10)/400,r=e.clientWidth*t,n=e.clientHeight*t;q.current.scale.set(r,n,1)}$.current=!0}}}else{let t=z.children[0];if(null!=t&&t.clientWidth&&null!=t&&t.clientHeight){let e=1/J.factor,r=t.clientWidth*e,n=t.clientHeight*e;q.current.scale.set(r,n,1),$.current=!0}q.current.lookAt(e.camera.position)}});let ei=o.useMemo(()=>({vertexShader:y?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[y]);return o.createElement("group",(0,a.A)({},L,{ref:X}),S&&!ee&&o.createElement("mesh",{castShadow:b,receiveShadow:B,ref:q},w||o.createElement("planeGeometry",null),I||o.createElement("shaderMaterial",{side:l.DoubleSide,vertexShader:ei.vertexShader,fragmentShader:ei.fragmentShader})))})},3654:(e,t,r)=>{var n=r(2115),i=r(4806),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=i.useSyncExternalStore,s=n.useRef,l=n.useEffect,c=n.useMemo,u=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,i){var d=s(null);if(null===d.current){var h={hasValue:!1,value:null};d.current=h}else h=d.current;var m=o(e,(d=c(function(){function e(e){if(!l){if(l=!0,o=e,e=n(e),void 0!==i&&h.hasValue){var t=h.value;if(i(t,e))return s=t}return s=e}if(t=s,a(o,e))return t;var r=n(e);return void 0!==i&&i(t,r)?(o=e,t):(o=e,s=r)}var o,s,l=!1,c=void 0===r?null:r;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,r,n,i]))[0],d[1]);return l(function(){h.hasValue=!0,h.value=m},[m]),u(m),m}},4735:(e,t,r)=>{r.d(t,{Af:()=>s,Nz:()=>i,u5:()=>l,y3:()=>d});var n=r(2115);function i(e,t,r){if(!e)return;if(!0===r(e))return e;let n=t?e.return:e.child;for(;n;){let e=i(n,t,r);if(e)return e;n=t?null:n.sibling}}function a(e){try{return Object.defineProperties(e,{_currentRenderer:{get:()=>null,set(){}},_currentRenderer2:{get:()=>null,set(){}}})}catch(t){return e}}(()=>{var e,t;return"undefined"!=typeof window&&((null==(e=window.document)?void 0:e.createElement)||(null==(t=window.navigator)?void 0:t.product)==="ReactNative")})()?n.useLayoutEffect:n.useEffect;let o=a(n.createContext(null));class s extends n.Component{render(){return n.createElement(o.Provider,{value:this._reactInternals},this.props.children)}}function l(){let e=n.useContext(o);if(null===e)throw Error("its-fine: useFiber must be called within a <FiberProvider />!");let t=n.useId();return n.useMemo(()=>{for(let r of[e,null==e?void 0:e.alternate]){if(!r)continue;let e=i(r,!1,e=>{let r=e.memoizedState;for(;r;){if(r.memoizedState===t)return!0;r=r.next}});if(e)return e}},[e,t])}let c=Symbol.for("react.context"),u=e=>null!==e&&"object"==typeof e&&"$$typeof"in e&&e.$$typeof===c;function d(){let e=function(){let e=l(),[t]=n.useState(()=>new Map);t.clear();let r=e;for(;r;){let e=r.type;u(e)&&e!==o&&!t.has(e)&&t.set(e,n.use(a(e))),r=r.return}return t}();return n.useMemo(()=>Array.from(e.keys()).reduce((t,r)=>i=>n.createElement(t,null,n.createElement(r.Provider,{...i,value:e.get(r)})),e=>n.createElement(s,{...e})),[e])}},4806:(e,t,r)=>{e.exports=r(125)},4814:(e,t,r)=>{r.d(t,{r:()=>n});let n=parseInt(r(7548).REVISION.replace(/\D+/g,""))},5661:(e,t,r)=>{r.d(t,{O:()=>s});var n=r(8945),i=r(99),a=r(2115),o=r(7548);let s=a.forwardRef(({light:e,args:t,map:r,toneMapped:s=!1,color:l="white",form:c="rect",intensity:u=1,scale:d=1,target:h=[0,0,0],children:m,...f},p)=>{let g=a.useRef(null);return a.useImperativeHandle(p,()=>g.current,[]),a.useLayoutEffect(()=>{m||f.material||((0,i.s)(g.current.material,{color:l}),g.current.material.color.multiplyScalar(u))},[l,u,m,f.material]),a.useLayoutEffect(()=>{f.rotation||g.current.quaternion.identity(),h&&!f.rotation&&("boolean"==typeof h?g.current.lookAt(0,0,0):g.current.lookAt(Array.isArray(h)?new o.Vector3(...h):h))},[h,f.rotation]),d=Array.isArray(d)&&2===d.length?[d[0],d[1],1]:d,a.createElement("mesh",(0,n.A)({ref:g,scale:d},f),"circle"===c?a.createElement("ringGeometry",{args:t||[0,.5,64]}):"ring"===c?a.createElement("ringGeometry",{args:t||[.25,.5,64]}):"rect"===c||"plane"===c?a.createElement("planeGeometry",{args:t||[1,1]}):"box"===c?a.createElement("boxGeometry",{args:t||[1,1,1]}):a.createElement(c,{args:t}),m||a.createElement("meshBasicMaterial",{toneMapped:s,map:r,side:o.DoubleSide}),e&&a.createElement("pointLight",(0,n.A)({castShadow:!0},e)))})},5951:(e,t,r)=>{r.d(t,{zo:()=>s});var n=r(2115),i=r(7548),a=r(99);let o=e=>e===Object(e)&&!Array.isArray(e)&&"function"!=typeof e;function s(e,t){let r=(0,a.C)(e=>e.gl),s=(0,a.G)(i.TextureLoader,o(e)?Object.values(e):e);return(0,n.useLayoutEffect)(()=>{null==t||t(s)},[t]),(0,n.useEffect)(()=>{if("initTexture"in r){let e=[];Array.isArray(s)?e=s:s instanceof i.Texture?e=[s]:o(s)&&(e=Object.values(s)),e.forEach(e=>{e instanceof i.Texture&&r.initTexture(e)})}},[r,s]),(0,n.useMemo)(()=>{if(!o(e))return s;{let t={},r=0;for(let n in e)t[n]=s[r++];return t}},[e,s])}s.preload=e=>a.G.preload(i.TextureLoader,e),s.clear=e=>a.G.clear(i.TextureLoader,e)},6451:(e,t)=>{function r(e,t){var r=e.length;for(e.push(t);0<r;){var n=r-1>>>1,i=e[n];if(0<a(i,t))e[n]=t,e[r]=i,r=n;else break}}function n(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;for(var n=0,i=e.length,o=i>>>1;n<o;){var s=2*(n+1)-1,l=e[s],c=s+1,u=e[c];if(0>a(l,r))c<i&&0>a(u,l)?(e[n]=u,e[c]=r,n=c):(e[n]=l,e[s]=r,n=s);else if(c<i&&0>a(u,r))e[n]=u,e[c]=r,n=c;else break}}return t}function a(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}if(t.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var o,s=performance;t.unstable_now=function(){return s.now()}}else{var l=Date,c=l.now();t.unstable_now=function(){return l.now()-c}}var u=[],d=[],h=1,m=null,f=3,p=!1,g=!1,A=!1,_="function"==typeof setTimeout?setTimeout:null,v="function"==typeof clearTimeout?clearTimeout:null,E="undefined"!=typeof setImmediate?setImmediate:null;function T(e){for(var t=n(d);null!==t;){if(null===t.callback)i(d);else if(t.startTime<=e)i(d),t.sortIndex=t.expirationTime,r(u,t);else break;t=n(d)}}function C(e){if(A=!1,T(e),!g)if(null!==n(u))g=!0,M();else{var t=n(d);null!==t&&D(C,t.startTime-e)}}var y=!1,S=-1,R=5,b=-1;function B(){return!(t.unstable_now()-b<R)}function I(){if(y){var e=t.unstable_now();b=e;var r=!0;try{e:{g=!1,A&&(A=!1,v(S),S=-1),p=!0;var a=f;try{t:{for(T(e),m=n(u);null!==m&&!(m.expirationTime>e&&B());){var s=m.callback;if("function"==typeof s){m.callback=null,f=m.priorityLevel;var l=s(m.expirationTime<=e);if(e=t.unstable_now(),"function"==typeof l){m.callback=l,T(e),r=!0;break t}m===n(u)&&i(u),T(e)}else i(u);m=n(u)}if(null!==m)r=!0;else{var c=n(d);null!==c&&D(C,c.startTime-e),r=!1}}break e}finally{m=null,f=a,p=!1}}}finally{r?o():y=!1}}}if("function"==typeof E)o=function(){E(I)};else if("undefined"!=typeof MessageChannel){var w=new MessageChannel,x=w.port2;w.port1.onmessage=I,o=function(){x.postMessage(null)}}else o=function(){_(I,0)};function M(){y||(y=!0,o())}function D(e,r){S=_(function(){e(t.unstable_now())},r)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,M())},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var r=f;f=t;try{return e()}finally{f=r}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=f;f=e;try{return t()}finally{f=r}},t.unstable_scheduleCallback=function(e,i,a){var o=t.unstable_now();switch(a="object"==typeof a&&null!==a&&"number"==typeof(a=a.delay)&&0<a?o+a:o,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=0x3fffffff;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,e={id:h++,callback:i,priorityLevel:e,startTime:a,expirationTime:s,sortIndex:-1},a>o?(e.sortIndex=a,r(d,e),null===n(u)&&e===n(d)&&(A?(v(S),S=-1):A=!0,D(C,a-o))):(e.sortIndex=s,r(u,e),g||p||(g=!0,M())),e},t.unstable_shouldYield=B,t.unstable_wrapCallback=function(e){var t=f;return function(){var r=f;f=t;try{return e.apply(this,arguments)}finally{f=r}}}},6659:(e,t,r)=>{let n;r.d(t,{TM:()=>V,cc:()=>o,BR:()=>ra,r8:()=>rm,Gp:()=>rf,C1:()=>f,lp:()=>rt,pX:()=>_,tc:()=>s,qE:()=>ro,E8:()=>ru,HW:()=>rh,e1:()=>Q,iu:()=>rn,oW:()=>r_,F2:()=>rs,pK:()=>rv,Ew:()=>rl,Qe:()=>function e(t,r){return t.replace(rg,(t,n)=>{let i=n.split("/").reduce((e,t)=>"string"!=typeof e&&null!=e?e[t]:void 0,r);if("string"!=typeof i)throw Error(`Could not find include for ${n}.`);return e(i,r)})},Ih:()=>rc,uw:()=>rC});var i=r(7548);function a(e,t){if(!e)throw Error("Invariant failed")}let o="https://media.githubusercontent.com/media/takram-design-engineering/three-geospatial/9627216cc50057994c98a2118f3c4a23765d43b9/packages/core/assets/stbn.bin";i.BufferGeometry;class s extends i.Loader{load(e,t,r,n){let o=new i.Data3DTexture,s=new i.FileLoader(this.manager);return s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.setResponseType("arraybuffer"),s.load(e,e=>{a(e instanceof ArrayBuffer),o.image.data=new Uint8Array(e),o.image.width=128,o.image.height=128,o.image.depth=64,o.type=i.UnsignedByteType,o.format=i.RedFormat,o.minFilter=i.NearestFilter,o.magFilter=i.NearestFilter,o.wrapS=i.RepeatWrapping,o.wrapT=i.RepeatWrapping,o.wrapR=i.RepeatWrapping,o.needsUpdate=!0,t?.(o)},r,n),o}}let l=new i.Vector3;function c(e,t,r=new i.Vector3,n){let{x:a,y:o,z:s}=e,u=t.x,d=t.y,h=t.z,m=a*a*u,f=o*o*d,p=s*s*h,g=m+f+p,A=Math.sqrt(1/g);if(!Number.isFinite(A))return;let _=l.copy(e).multiplyScalar(A);if(g<(n?.centerTolerance??.1))return r.copy(_);let v=_.multiply(t).multiplyScalar(2),E=(1-A)*e.length()/(v.length()/2),T=0,C,y,S,R;do{E-=T,C=1/(1+E*u),y=1/(1+E*d),S=1/(1+E*h);let e=C*C,t=y*y,r=S*S,n=e*C,i=t*y,a=r*S;T=-((R=m*e+f*t+p*r-1)/((m*n*u+f*i*d+p*a*h)*2))}while(Math.abs(R)>1e-12);return r.set(a*C,o*y,s*S)}let u=new i.Vector3,d=new i.Vector3,h=new i.Vector3,m=class{constructor(e,t,r){this.radii=new i.Vector3(e,t,r)}get minimumRadius(){return Math.min(this.radii.x,this.radii.y,this.radii.z)}get maximumRadius(){return Math.max(this.radii.x,this.radii.y,this.radii.z)}get flattening(){return 1-this.minimumRadius/this.maximumRadius}get eccentricity(){return Math.sqrt(this.eccentricitySquared)}get eccentricitySquared(){let e=this.maximumRadius**2;return(e-this.minimumRadius**2)/e}reciprocalRadii(e=new i.Vector3){let{x:t,y:r,z:n}=this.radii;return e.set(1/t,1/r,1/n)}reciprocalRadiiSquared(e=new i.Vector3){let{x:t,y:r,z:n}=this.radii;return e.set(1/t**2,1/r**2,1/n**2)}projectOnSurface(e,t=new i.Vector3,r){return c(e,this.reciprocalRadiiSquared(),t,r)}getSurfaceNormal(e,t=new i.Vector3){return t.multiplyVectors(this.reciprocalRadiiSquared(u),e).normalize()}getEastNorthUpVectors(e,t=new i.Vector3,r=new i.Vector3,n=new i.Vector3){this.getSurfaceNormal(e,n),t.set(-e.y,e.x,0).normalize(),r.crossVectors(n,t).normalize()}getEastNorthUpFrame(e,t=new i.Matrix4){return this.getEastNorthUpVectors(e,u,d,h),t.makeBasis(u,d,h).setPosition(e)}getNorthUpEastFrame(e,t=new i.Matrix4){return this.getEastNorthUpVectors(e,u,d,h),t.makeBasis(d,h,u).setPosition(e)}getIntersection(e,t=new i.Vector3){let r=this.reciprocalRadii(u),n=d.copy(r).multiply(e.origin),a=h.copy(r).multiply(e.direction),o=n.lengthSq(),s=a.lengthSq(),l=n.dot(a),c=l**2-s*(o-1);if(1===o)return t.copy(e.origin);if(o>1){if(l>=0||c<0)return;let r=Math.sqrt(c);return e.at(Math.min((-l-r)/s,(-l+r)/s),t)}if(o<1){let r=Math.sqrt(l**2-s*(o-1));return e.at((-l+r)/s,t)}if(l<0)return e.at(-l/s,t)}getOsculatingSphereCenter(e,t,r=new i.Vector3){a(this.radii.x===this.radii.y);let n=this.radii.x**2,o=this.radii.z**2,s=u.set(e.x/n,e.y/n,e.z/o).normalize();return r.copy(s.multiplyScalar(-t).add(e))}getNormalAtHorizon(e,t,r=new i.Vector3){a(this.radii.x===this.radii.y);let n=this.radii.x**2,o=this.radii.z**2,s=(e.x*t.x+e.y*t.y)/n+e.z*t.z/o;s/=(e.x**2+e.y**2)/n+e.z**2/o;let l=u.copy(t).multiplyScalar(-s).add(e);return r.set(l.x/n,l.y/n,l.z/o).normalize()}};m.WGS84=new m(6378137,6378137,6356752.314245179);let f=m;i.BufferGeometry;let p=new i.Vector3,g=new i.Vector3,A=class e{constructor(e=0,t=0,r=0){this.longitude=e,this.latitude=t,this.height=r}set(e,t,r){return this.longitude=e,this.latitude=t,null!=r&&(this.height=r),this}clone(){return new e(this.longitude,this.latitude,this.height)}copy(e){return this.longitude=e.longitude,this.latitude=e.latitude,this.height=e.height,this}equals(e){return e.longitude===this.longitude&&e.latitude===this.latitude&&e.height===this.height}setLongitude(e){return this.longitude=e,this}setLatitude(e){return this.latitude=e,this}setHeight(e){return this.height=e,this}normalize(){return this.longitude<e.MIN_LONGITUDE&&(this.longitude+=2*Math.PI),this}setFromECEF(e,t){let r=(t?.ellipsoid??f.WGS84).reciprocalRadiiSquared(p),n=c(e,r,g,t);if(null==n)throw Error(`Could not project position to ellipsoid surface: ${e.toArray()}`);let i=p.multiplyVectors(n,r).normalize();this.longitude=Math.atan2(i.y,i.x),this.latitude=Math.asin(i.z);let a=p.subVectors(e,n);return this.height=Math.sign(a.dot(e))*a.length(),this}toECEF(e=new i.Vector3,t){let r=t?.ellipsoid??f.WGS84,n=p.multiplyVectors(r.radii,r.radii),a=Math.cos(this.latitude),o=g.set(a*Math.cos(this.longitude),a*Math.sin(this.longitude),Math.sin(this.latitude)).normalize();return e.multiplyVectors(n,o),e.divideScalar(Math.sqrt(o.dot(e))).add(o.multiplyScalar(this.height))}fromArray(e,t=0){return this.longitude=e[t],this.latitude=e[t+1],this.height=e[t+2],this}toArray(e=[],t=0){return e[t]=this.longitude,e[t+1]=this.latitude,e[t+2]=this.height,e}*[Symbol.iterator](){yield this.longitude,yield this.latitude,yield this.height}};A.MIN_LONGITUDE=-Math.PI,A.MAX_LONGITUDE=Math.PI,A.MIN_LATITUDE=-Math.PI/2,A.MAX_LATITUDE=Math.PI/2;let _=A;var v=Uint8Array,E=Uint16Array,T=Int32Array,C=new v([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),y=new v([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),S=new v([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),R=function(e,t){for(var r=new E(31),n=0;n<31;++n)r[n]=t+=1<<e[n-1];for(var i=new T(r[30]),n=1;n<30;++n)for(var a=r[n];a<r[n+1];++a)i[a]=a-r[n]<<5|n;return{b:r,r:i}},b=R(C,2),B=b.b,I=b.r;B[28]=258,I[258]=28;var w=R(y,0),x=w.b;w.r;for(var M=new E(32768),D=0;D<32768;++D){var O=(43690&D)>>1|(21845&D)<<1;O=(61680&(O=(52428&O)>>2|(13107&O)<<2))>>4|(3855&O)<<4,M[D]=((65280&O)>>8|(255&O)<<8)>>1}for(var N=function(e,t,r){for(var n,i=e.length,a=0,o=new E(t);a<i;++a)e[a]&&++o[e[a]-1];var s=new E(t);for(a=1;a<t;++a)s[a]=s[a-1]+o[a-1]<<1;if(r){n=new E(1<<t);var l=15-t;for(a=0;a<i;++a)if(e[a])for(var c=a<<4|e[a],u=t-e[a],d=s[e[a]-1]++<<u,h=d|(1<<u)-1;d<=h;++d)n[M[d]>>l]=c}else for(a=0,n=new E(i);a<i;++a)e[a]&&(n[a]=M[s[e[a]-1]++]>>15-e[a]);return n},L=new v(288),D=0;D<144;++D)L[D]=8;for(var D=144;D<256;++D)L[D]=9;for(var D=256;D<280;++D)L[D]=7;for(var D=280;D<288;++D)L[D]=8;for(var F=new v(32),D=0;D<32;++D)F[D]=5;var P=N(L,9,1),G=N(F,5,1),H=function(e){for(var t=e[0],r=1;r<e.length;++r)e[r]>t&&(t=e[r]);return t},U=function(e,t,r){var n=t/8|0;return(e[n]|e[n+1]<<8)>>(7&t)&r},k=function(e,t){var r=t/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(7&t)},j=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],J=function(e,t,r){var n=Error(t||j[e]);if(n.code=e,Error.captureStackTrace&&Error.captureStackTrace(n,J),!r)throw n;return n},z=function(e,t,r,n){var i,a,o,s=e.length,l=n?n.length:0;if(!s||t.f&&!t.l)return r||new v(0);var c=!r,u=c||2!=t.i,d=t.i;c&&(r=new v(3*s));var h=function(e){var t=r.length;if(e>t){var n=new v(Math.max(2*t,e));n.set(r),r=n}},m=t.f||0,f=t.p||0,p=t.b||0,g=t.l,A=t.d,_=t.m,E=t.n,T=8*s;do{if(!g){m=U(e,f,1);var R=U(e,f+1,3);if(f+=3,R)if(1==R)g=P,A=G,_=9,E=5;else if(2==R){var b=U(e,f,31)+257,I=U(e,f+10,15)+4,w=b+U(e,f+5,31)+1;f+=14;for(var M=new v(w),D=new v(19),O=0;O<I;++O)D[S[O]]=U(e,f+3*O,7);f+=3*I;for(var L=H(D),F=(1<<L)-1,j=N(D,L,1),O=0;O<w;){var z=j[U(e,f,F)];f+=15&z;var K=z>>4;if(K<16)M[O++]=K;else{var X=0,W=0;for(16==K?(W=3+U(e,f,3),f+=2,X=M[O-1]):17==K?(W=3+U(e,f,7),f+=3):18==K&&(W=11+U(e,f,127),f+=7);W--;)M[O++]=X}}var Y=M.subarray(0,b),V=M.subarray(b);_=H(Y),E=H(V),g=N(Y,_,1),A=N(V,E,1)}else J(1);else{var K=((f+7)/8|0)+4,Q=e[K-4]|e[K-3]<<8,Z=K+Q;if(Z>s){d&&J(0);break}u&&h(p+Q),r.set(e.subarray(K,Z),p),t.b=p+=Q,t.p=f=8*Z,t.f=m;continue}if(f>T){d&&J(0);break}}u&&h(p+131072);for(var q=(1<<_)-1,$=(1<<E)-1,ee=f;;ee=f){var X=g[k(e,f)&q],et=X>>4;if((f+=15&X)>T){d&&J(0);break}if(X||J(2),et<256)r[p++]=et;else if(256==et){ee=f,g=null;break}else{var er=et-254;if(et>264){var O=et-257,en=C[O];er=U(e,f,(1<<en)-1)+B[O],f+=en}var ei=A[k(e,f)&$],ea=ei>>4;ei||J(3),f+=15&ei;var V=x[ea];if(ea>3){var en=y[ea];V+=k(e,f)&(1<<en)-1,f+=en}if(f>T){d&&J(0);break}u&&h(p+131072);var eo=p+er;if(p<V){var es=l-V,el=Math.min(V,eo);for(es+p<0&&J(3);p<el;++p)r[p]=n[es+p]}for(;p<eo;++p)r[p]=r[p-V]}}t.l=g,t.p=ee,t.b=p,t.f=m,g&&(m=1,t.m=_,t.d=A,t.n=E)}while(!m);return p!=r.length&&c?(i=r,(a=0)<0&&(a=0),(null==(o=p)||o>i.length)&&(o=i.length),new v(i.subarray(a,o))):r.subarray(0,p)},K=new v(0);function X(e,t){var r;return z(e.subarray((r=t&&t.dictionary,((15&e[0])!=8||e[0]>>4>7||(e[0]<<8|e[1])%31)&&J(6,"invalid zlib data"),(e[1]>>5&1)==+!r&&J(6,"invalid zlib data: "+(32&e[1]?"need":"unexpected")+" dictionary"),(e[1]>>3&4)+2),-4),{i:2},t&&t.out,t&&t.dictionary)}var W="undefined"!=typeof TextDecoder&&new TextDecoder;try{W.decode(K,{stream:!0})}catch(e){}"function"==typeof queueMicrotask&&queueMicrotask;class Y extends i.DataTextureLoader{parse(e){let t={l:0,c:0,lc:0};function r(e,r,n,i,a){for(;n<e;)r=r<<8|b(i,a),n+=8;t.l=r>>(n-=e)&(1<<e)-1,t.c=r,t.lc=n}let n=Array(59),a={c:0,lc:0};function o(e,t,r,n){e=e<<8|b(r,n),t+=8,a.c=e,a.lc=t}let s={c:0,lc:0};function l(e,t,r,n,i,l,c,u,d){if(e==t){n<8&&(o(r,n,i,l),r=a.c,n=a.lc);let e=r>>(n-=8);if(e=new Uint8Array([e])[0],u.value+e>d)return!1;let t=c[u.value-1];for(;e-- >0;)c[u.value++]=t}else{if(!(u.value<d))return!1;c[u.value++]=e}s.c=r,s.lc=n}function c(e){let t=65535&e;return t>32767?t-65536:t}let u={a:0,b:0};function d(e,t){let r=c(e),n=c(t),i=r+(1&n)+(n>>1),a=i-n;u.a=i,u.b=a}function h(e,t){let r=65535&t,n=(65535&e)-(r>>1)&65535;u.a=r+n-32768&65535,u.b=n}function m(e,i,c,u,d,h){let m=c.value,f=R(i,c),p=R(i,c);c.value+=4;let g=R(i,c);if(c.value+=4,f<0||f>=65537||p<0||p>=65537)throw Error("Something wrong with HUF_ENCSIZE");let A=Array(65537),_=Array(16384);for(let e=0;e<16384;e++)_[e]={},_[e].len=0,_[e].lit=0,_[e].p=null;let v=u-(c.value-m);if(!function(e,i,a,o,s,l){let c=0,u=0;for(;o<=s;o++){if(i.value-i.value>a)return!1;r(6,c,u,e,i);let n=t.l;if(c=t.c,u=t.lc,l[o]=n,63==n){if(i.value-i.value>a)throw Error("Something wrong with hufUnpackEncTable");r(8,c,u,e,i);let n=t.l+6;if(c=t.c,u=t.lc,o+n>s+1)throw Error("Something wrong with hufUnpackEncTable");for(;n--;)l[o++]=0;o--}else if(n>=59){let e=n-59+2;if(o+e>s+1)throw Error("Something wrong with hufUnpackEncTable");for(;e--;)l[o++]=0;o--}}!function(e){for(let e=0;e<=58;++e)n[e]=0;for(let t=0;t<65537;++t)n[e[t]]+=1;let t=0;for(let e=58;e>0;--e){let r=t+n[e]>>1;n[e]=t,t=r}for(let t=0;t<65537;++t){let r=e[t];r>0&&(e[t]=r|n[r]++<<6)}}(l)}(e,c,v,f,p,A),g>8*(u-(c.value-m)))throw Error("Something wrong with hufUncompress");!function(e,t,r,n){for(;t<=r;t++){let r=e[t]>>6,i=63&e[t];if(r>>i)throw Error("Invalid table entry");if(i>14){let e=n[r>>i-14];if(e.len)throw Error("Invalid table entry");if(e.lit++,e.p){let t=e.p;e.p=Array(e.lit);for(let r=0;r<e.lit-1;++r)e.p[r]=t[r]}else e.p=[,];e.p[e.lit-1]=t}else if(i){let e=0;for(let a=1<<14-i;a>0;a--){let a=n[(r<<14-i)+e];if(a.len||a.p)throw Error("Invalid table entry");a.len=i,a.lit=t,e++}}}}(A,f,p,_),function(e,t,r,n,i,c,u,d,h){let m=0,f=0,p=Math.trunc(n.value+(i+7)/8);for(;n.value<p;)for(o(m,f,r,n),m=a.c,f=a.lc;f>=14;){let i=t[m>>f-14&16383];if(i.len)f-=i.len,l(i.lit,c,m,f,r,n,d,h,u),m=s.c,f=s.lc;else{let t;if(!i.p)throw Error("hufDecode issues");for(t=0;t<i.lit;t++){let g=63&e[i.p[t]];for(;f<g&&n.value<p;)o(m,f,r,n),m=a.c,f=a.lc;if(f>=g&&e[i.p[t]]>>6==(m>>f-g&(1<<g)-1)){f-=g,l(i.p[t],c,m,f,r,n,d,h,u),m=s.c,f=s.lc;break}}if(t==i.lit)throw Error("hufDecode issues")}}let g=8-i&7;for(m>>=g,f-=g;f>0;){let e=t[m<<14-f&16383];if(e.len)f-=e.len,l(e.lit,c,m,f,r,n,d,h,u),m=s.c,f=s.lc;else throw Error("hufDecode issues")}}(A,_,e,c,g,p,h,d,{value:0})}function f(e){for(let t=1;t<e.length;t++){let r=e[t-1]+e[t]-128;e[t]=r}}function p(e,t){let r=0,n=Math.floor((e.length+1)/2),i=0,a=e.length-1;for(;!(i>a)&&(t[i++]=e[r++],!(i>a));){;t[i++]=e[n++]}}function g(e){let t=e.byteLength,r=[],n=0,i=new DataView(e);for(;t>0;){let e=i.getInt8(n++);if(e<0){let a=-e;t-=a+1;for(let e=0;e<a;e++)r.push(i.getUint8(n++))}else{t-=2;let a=i.getUint8(n++);for(let t=0;t<e+1;t++)r.push(a)}}return r}function A(e){return new DataView(e.array.buffer,e.offset.value,e.size)}function _(e){let t=new Uint8Array(g(e.viewer.buffer.slice(e.offset.value,e.offset.value+e.size))),r=new Uint8Array(t.length);return f(t),p(t,r),new DataView(r.buffer)}function v(e){let t=X(e.array.slice(e.offset.value,e.offset.value+e.size)),r=new Uint8Array(t.length);return f(t),p(t,r),new DataView(r.buffer)}function E(e){let t=e.viewer,r={value:e.offset.value},n=new Uint16Array(e.columns*e.lines*(e.inputChannels.length*e.type)),i=new Uint8Array(8192),a=0,o=Array(e.inputChannels.length);for(let t=0,r=e.inputChannels.length;t<r;t++)o[t]={},o[t].start=a,o[t].end=o[t].start,o[t].nx=e.columns,o[t].ny=e.lines,o[t].size=e.type,a+=o[t].nx*o[t].ny*o[t].size;let s=D(t,r),l=D(t,r);if(l>=8192)throw Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(s<=l)for(let e=0;e<l-s+1;e++)i[e+s]=B(t,r);let c=new Uint16Array(65536),f=function(e,t){let r=0;for(let n=0;n<65536;++n)(0==n||e[n>>3]&1<<(7&n))&&(t[r++]=n);let n=r-1;for(;r<65536;)t[r++]=0;return n}(i,c),p=R(t,r);m(e.array,t,r,p,n,a);for(let t=0;t<e.inputChannels.length;++t){let e=o[t];for(let r=0;r<o[t].size;++r)!function(e,t,r,n,i,a,o){let s,l,c=o<16384,m=r>i?i:r,f=1;for(;f<=m;)f<<=1;for(f>>=1,s=f,f>>=1;f>=1;){let o,m,p,g,A=(l=0)+a*(i-s),_=a*f,v=a*s,E=n*f,T=n*s;for(;l<=A;l+=v){let i=l,a=l+n*(r-s);for(;i<=a;i+=T){let r=i+E,n=i+_,a=n+E;c?(d(e[i+t],e[n+t]),o=u.a,p=u.b,d(e[r+t],e[a+t]),m=u.a,g=u.b,d(o,m),e[i+t]=u.a,e[r+t]=u.b,d(p,g)):(h(e[i+t],e[n+t]),o=u.a,p=u.b,h(e[r+t],e[a+t]),m=u.a,g=u.b,h(o,m),e[i+t]=u.a,e[r+t]=u.b,h(p,g)),e[n+t]=u.a,e[a+t]=u.b}if(r&f){let r=i+_;c?d(e[i+t],e[r+t]):h(e[i+t],e[r+t]),o=u.a,e[r+t]=u.b,e[i+t]=o}}if(i&f){let i=l,a=l+n*(r-s);for(;i<=a;i+=T){let r=i+E;c?d(e[i+t],e[r+t]):h(e[i+t],e[r+t]),o=u.a,e[r+t]=u.b,e[i+t]=o}}s=f,f>>=1}}(n,e.start+r,e.nx,e.size,e.ny,e.nx*e.size,f)}var g=a;for(let e=0;e<g;++e)n[e]=c[n[e]];let A=0,_=new Uint8Array(n.buffer.byteLength);for(let t=0;t<e.lines;t++)for(let t=0;t<e.inputChannels.length;t++){let e=o[t],r=e.nx*e.size,i=new Uint8Array(n.buffer,2*e.end,2*r);_.set(i,A),A+=2*r,e.end+=r}return new DataView(_.buffer)}function T(e){let t=X(e.array.slice(e.offset.value,e.offset.value+e.size)),r=new DataView(new ArrayBuffer(e.inputChannels.length*e.lines*e.columns*e.totalBytes)),n=0,i=0,a=[,,,,];for(let o=0;o<e.lines;o++)for(let o=0;o<e.inputChannels.length;o++){let s=0;switch(e.inputChannels[o].pixelType){case 1:a[0]=n,a[1]=a[0]+e.columns,n=a[1]+e.columns;for(let n=0;n<e.columns;++n)s+=t[a[0]++]<<8|t[a[1]++],r.setUint16(i,s,!0),i+=2;break;case 2:a[0]=n,a[1]=a[0]+e.columns,a[2]=a[1]+e.columns,n=a[2]+e.columns;for(let n=0;n<e.columns;++n)s+=t[a[0]++]<<24|t[a[1]++]<<16|t[a[2]++]<<8,r.setUint32(i,s,!0),i+=4}}return r}function C(e){let t,r,n,a=e.viewer,o={value:e.offset.value},s=new Uint8Array(e.columns*e.lines*(e.inputChannels.length*e.type*2)),l={version:I(a,o),unknownUncompressedSize:I(a,o),unknownCompressedSize:I(a,o),acCompressedSize:I(a,o),dcCompressedSize:I(a,o),rleCompressedSize:I(a,o),rleUncompressedSize:I(a,o),rleRawSize:I(a,o),totalAcUncompressedCount:I(a,o),totalDcUncompressedCount:I(a,o),acCompression:I(a,o)};if(l.version<2)throw Error("EXRLoader.parse: "+U.compression+" version "+l.version+" is unsupported");let c=[],u=D(a,o)-2;for(;u>0;){let e=y(a.buffer,o),t=B(a,o),r=t>>2&3,n=new Int8Array([(t>>4)-1])[0],i=B(a,o);c.push({name:e,index:n,type:i,compression:r}),u-=e.length+3}let d=U.channels,h=Array(e.inputChannels.length);for(let t=0;t<e.inputChannels.length;++t){let r=h[t]={},n=d[t];r.name=n.name,r.compression=0,r.decoded=!1,r.type=n.pixelType,r.pLinear=n.pLinear,r.width=e.columns,r.height=e.lines}let f={idx:[,,,]};for(let t=0;t<e.inputChannels.length;++t){let e=h[t];for(let r=0;r<c.length;++r){let n=c[r];e.name==n.name&&(e.compression=n.compression,n.index>=0&&(f.idx[n.index]=t),e.offset=t)}}if(l.acCompressedSize>0)switch(l.acCompression){case 0:t=new Uint16Array(l.totalAcUncompressedCount),m(e.array,a,o,l.acCompressedSize,t,l.totalAcUncompressedCount);break;case 1:t=new Uint16Array(X(e.array.slice(o.value,o.value+l.totalAcUncompressedCount)).buffer),o.value+=l.totalAcUncompressedCount}l.dcCompressedSize>0&&(r=new Uint16Array(v({array:e.array,offset:o,size:l.dcCompressedSize}).buffer),o.value+=l.dcCompressedSize),l.rleRawSize>0&&(n=g(X(e.array.slice(o.value,o.value+l.rleCompressedSize)).buffer),o.value+=l.rleCompressedSize);let p=0,A=Array(h.length);for(let e=0;e<A.length;++e)A[e]=[];for(let t=0;t<e.lines;++t)for(let t=0;t<h.length;++t)A[t].push(p),p+=h[t].width*e.type*2;!function(e,t,r,n,a,o){let s=new DataView(o.buffer),l=r[e.idx[0]].width,c=r[e.idx[0]].height,u=Math.floor(l/8),d=Math.ceil(l/8),h=Math.ceil(c/8),m=l-(d-1)*8,f=c-(h-1)*8,p={value:0},g=[,,,],A=[,,,],_=[,,,],v=[,,,],E=[,,,];for(let r=0;r<3;++r)E[r]=t[e.idx[r]],g[r]=r<1?0:g[r-1]+d*h,A[r]=new Float32Array(64),_[r]=new Uint16Array(64),v[r]=new Uint16Array(64*d);for(let t=0;t<h;++t){let o=8;t==h-1&&(o=f);let l=8;for(let e=0;e<d;++e){e==d-1&&(l=m);for(let e=0;e<3;++e){var T,C;_[e].fill(0),_[e][0]=a[g[e]++],function(e,t,r){let n,i=1;for(;i<64;)65280==(n=t[e.value])?i=64:n>>8==255?i+=255&n:(r[i]=n,i++),e.value++}(p,n,_[e]),T=_[e],(C=A[e])[0]=M(T[0]),C[1]=M(T[1]),C[2]=M(T[5]),C[3]=M(T[6]),C[4]=M(T[14]),C[5]=M(T[15]),C[6]=M(T[27]),C[7]=M(T[28]),C[8]=M(T[2]),C[9]=M(T[4]),C[10]=M(T[7]),C[11]=M(T[13]),C[12]=M(T[16]),C[13]=M(T[26]),C[14]=M(T[29]),C[15]=M(T[42]),C[16]=M(T[3]),C[17]=M(T[8]),C[18]=M(T[12]),C[19]=M(T[17]),C[20]=M(T[25]),C[21]=M(T[30]),C[22]=M(T[41]),C[23]=M(T[43]),C[24]=M(T[9]),C[25]=M(T[11]),C[26]=M(T[18]),C[27]=M(T[24]),C[28]=M(T[31]),C[29]=M(T[40]),C[30]=M(T[44]),C[31]=M(T[53]),C[32]=M(T[10]),C[33]=M(T[19]),C[34]=M(T[23]),C[35]=M(T[32]),C[36]=M(T[39]),C[37]=M(T[45]),C[38]=M(T[52]),C[39]=M(T[54]),C[40]=M(T[20]),C[41]=M(T[22]),C[42]=M(T[33]),C[43]=M(T[38]),C[44]=M(T[46]),C[45]=M(T[51]),C[46]=M(T[55]),C[47]=M(T[60]),C[48]=M(T[21]),C[49]=M(T[34]),C[50]=M(T[37]),C[51]=M(T[47]),C[52]=M(T[50]),C[53]=M(T[56]),C[54]=M(T[59]),C[55]=M(T[61]),C[56]=M(T[35]),C[57]=M(T[36]),C[58]=M(T[48]),C[59]=M(T[49]),C[60]=M(T[57]),C[61]=M(T[58]),C[62]=M(T[62]),C[63]=M(T[63]),function(e){let t=.5*Math.cos(3*3.14159/16),r=.5*Math.cos(3*3.14159/8),n=[,,,,],i=[,,,,],a=[,,,,],o=[,,,,];for(let s=0;s<8;++s){let l=8*s;n[0]=.4619398297234211*e[l+2],n[1]=r*e[l+2],n[2]=.4619398297234211*e[l+6],n[3]=r*e[l+6],i[0]=.4903926563794112*e[l+1]+t*e[l+3]+.2777854612564676*e[l+5]+.09754573032714427*e[l+7],i[1]=t*e[l+1]-.09754573032714427*e[l+3]-.4903926563794112*e[l+5]-.2777854612564676*e[l+7],i[2]=.2777854612564676*e[l+1]-.4903926563794112*e[l+3]+.09754573032714427*e[l+5]+t*e[l+7],i[3]=.09754573032714427*e[l+1]-.2777854612564676*e[l+3]+t*e[l+5]-.4903926563794112*e[l+7],a[0]=.35355362513961314*(e[l+0]+e[l+4]),a[3]=.35355362513961314*(e[l+0]-e[l+4]),a[1]=n[0]+n[3],a[2]=n[1]-n[2],o[0]=a[0]+a[1],o[1]=a[3]+a[2],o[2]=a[3]-a[2],o[3]=a[0]-a[1],e[l+0]=o[0]+i[0],e[l+1]=o[1]+i[1],e[l+2]=o[2]+i[2],e[l+3]=o[3]+i[3],e[l+4]=o[3]-i[3],e[l+5]=o[2]-i[2],e[l+6]=o[1]-i[1],e[l+7]=o[0]-i[0]}for(let s=0;s<8;++s)n[0]=.4619398297234211*e[16+s],n[1]=r*e[16+s],n[2]=.4619398297234211*e[48+s],n[3]=r*e[48+s],i[0]=.4903926563794112*e[8+s]+t*e[24+s]+.2777854612564676*e[40+s]+.09754573032714427*e[56+s],i[1]=t*e[8+s]-.09754573032714427*e[24+s]-.4903926563794112*e[40+s]-.2777854612564676*e[56+s],i[2]=.2777854612564676*e[8+s]-.4903926563794112*e[24+s]+.09754573032714427*e[40+s]+t*e[56+s],i[3]=.09754573032714427*e[8+s]-.2777854612564676*e[24+s]+t*e[40+s]-.4903926563794112*e[56+s],a[0]=.35355362513961314*(e[s]+e[32+s]),a[3]=.35355362513961314*(e[s]-e[32+s]),a[1]=n[0]+n[3],a[2]=n[1]-n[2],o[0]=a[0]+a[1],o[1]=a[3]+a[2],o[2]=a[3]-a[2],o[3]=a[0]-a[1],e[0+s]=o[0]+i[0],e[8+s]=o[1]+i[1],e[16+s]=o[2]+i[2],e[24+s]=o[3]+i[3],e[32+s]=o[3]-i[3],e[40+s]=o[2]-i[2],e[48+s]=o[1]-i[1],e[56+s]=o[0]-i[0]}(A[e])}var y=A;for(let e=0;e<64;++e){let t=y[0][e],r=y[1][e],n=y[2][e];y[0][e]=t+1.5747*n,y[1][e]=t-.1873*r-.4682*n,y[2][e]=t+1.8556*r}for(let t=0;t<3;++t)!function(e,t,r){for(let a=0;a<64;++a){var n;t[r+a]=i.DataUtils.toHalfFloat((n=e[a])<=1?Math.sign(n)*Math.pow(Math.abs(n),2.2):Math.sign(n)*Math.pow(9.025013291561939,Math.abs(n)-1))}}(A[t],v[t],64*e)}let c=0;for(let n=0;n<3;++n){let i=r[e.idx[n]].type;for(let e=8*t;e<8*t+o;++e){c=E[n][e];for(let t=0;t<u;++t){let r=64*t+(7&e)*8;s.setUint16(c+0*i,v[n][r+0],!0),s.setUint16(c+2*i,v[n][r+1],!0),s.setUint16(c+4*i,v[n][r+2],!0),s.setUint16(c+6*i,v[n][r+3],!0),s.setUint16(c+8*i,v[n][r+4],!0),s.setUint16(c+10*i,v[n][r+5],!0),s.setUint16(c+12*i,v[n][r+6],!0),s.setUint16(c+14*i,v[n][r+7],!0),c+=16*i}}if(u!=d)for(let e=8*t;e<8*t+o;++e){let t=E[n][e]+8*u*2*i,r=64*u+(7&e)*8;for(let e=0;e<l;++e)s.setUint16(t+2*e*i,v[n][r+e],!0)}}}let S=new Uint16Array(l);s=new DataView(o.buffer);for(let t=0;t<3;++t){r[e.idx[t]].decoded=!0;let n=r[e.idx[t]].type;if(2==r[t].type)for(let e=0;e<c;++e){let r=E[t][e];for(let e=0;e<l;++e)S[e]=s.getUint16(r+2*e*n,!0);for(let e=0;e<l;++e)s.setFloat32(r+2*e*n,M(S[e]),!0)}}}(f,A,h,t,r,s);for(let t=0;t<h.length;++t){let r=h[t];if(!r.decoded)if(2===r.compression){let i=0,a=0;for(let o=0;o<e.lines;++o){let e=A[t][i];for(let t=0;t<r.width;++t){for(let t=0;t<2*r.type;++t)s[e++]=n[a+t*r.width*r.height];a++}i++}}else throw Error("EXRLoader.parse: unsupported channel compression")}return new DataView(s.buffer)}function y(e,t){let r=new Uint8Array(e),n=0;for(;0!=r[t.value+n];)n+=1;let i=new TextDecoder().decode(r.slice(t.value,t.value+n));return t.value=t.value+n+1,i}function S(e,t){let r=e.getInt32(t.value,!0);return t.value=t.value+4,r}function R(e,t){let r=e.getUint32(t.value,!0);return t.value=t.value+4,r}function b(e,t){let r=e[t.value];return t.value=t.value+1,r}function B(e,t){let r=e.getUint8(t.value);return t.value=t.value+1,r}let I=function(e,t){let r;return r="getBigInt64"in DataView.prototype?Number(e.getBigInt64(t.value,!0)):e.getUint32(t.value+4,!0)+Number(e.getUint32(t.value,!0)<<32),t.value+=8,r};function w(e,t){let r=e.getFloat32(t.value,!0);return t.value+=4,r}function x(e,t){return i.DataUtils.toHalfFloat(w(e,t))}function M(e){let t=(31744&e)>>10,r=1023&e;return(e>>15?-1:1)*(t?31===t?r?NaN:1/0:Math.pow(2,t-15)*(1+r/1024):r/1024*6103515625e-14)}function D(e,t){let r=e.getUint16(t.value,!0);return t.value+=2,r}function O(e,t){return M(D(e,t))}function N(e,t,r,n){let i=Array(e);for(let a=0;a<e;a++){let e=1<<a,o=t/e|0;"ROUND_UP"==n&&o*e<t&&(o+=1);let s=Math.max(o,1);i[a]=(s+r-1)/r|0}return i}function L(){let e=this.offset,t={value:0};for(let r=0;r<this.tileCount;r++){let r=S(this.viewer,e),n=S(this.viewer,e);e.value+=8,this.size=R(this.viewer,e);let i=r*this.blockWidth,a=n*this.blockHeight;this.columns=i+this.blockWidth>this.width?this.width-i:this.blockWidth,this.lines=a+this.blockHeight>this.height?this.height-a:this.blockHeight;let o=this.columns*this.totalBytes,s=this.size<this.lines*o?this.uncompress(this):A(this);e.value+=this.size;for(let e=0;e<this.lines;e++){let r=e*this.columns*this.totalBytes;for(let n=0;n<this.inputChannels.length;n++){let o=U.channels[n].name,l=this.channelByteOffsets[o]*this.columns,c=this.decodeChannels[o];if(void 0===c)continue;t.value=r+l;let u=(this.height-(1+a+e))*this.outLineWidth;for(let e=0;e<this.columns;e++){let r=u+(e+i)*this.outputChannels+c;this.byteArray[r]=this.getter(s,t)}}}}}function F(){let e=this.offset,t={value:0};for(let r=0;r<this.height/this.blockHeight;r++){let n=S(this.viewer,e)-U.dataWindow.yMin;this.size=R(this.viewer,e),this.lines=n+this.blockHeight>this.height?this.height-n:this.blockHeight;let i=this.columns*this.totalBytes,a=this.size<this.lines*i?this.uncompress(this):A(this);e.value+=this.size;for(let e=0;e<this.blockHeight;e++){let n=r*this.blockHeight,o=e+this.scanOrder(n);if(o>=this.height)continue;let s=e*i,l=(this.height-1-o)*this.outLineWidth;for(let e=0;e<this.inputChannels.length;e++){let r=U.channels[e].name,n=this.channelByteOffsets[r]*this.columns,i=this.decodeChannels[r];if(void 0!==i){t.value=s+n;for(let e=0;e<this.columns;e++){let r=l+e*this.outputChannels+i;this.byteArray[r]=this.getter(a,t)}}}}}}let P={value:0},G=new DataView(e),H=new Uint8Array(e),U=function(e,t,r){let n={};if(0x1312f76!=e.getUint32(0,!0))throw Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");n.version=e.getUint8(4);let i=e.getUint8(5);n.spec={singleTile:!!(2&i),longName:!!(4&i),deepFormat:!!(8&i),multiPart:!!(16&i)},r.value=8;let a=!0;for(;a;){let i=y(t,r);if(0==i)a=!1;else{let a=y(t,r),o=R(e,r),s=function(e,t,r,n,i){if("string"===n||"stringvector"===n||"iccProfile"===n){let e=new TextDecoder().decode(new Uint8Array(t).slice(r.value,r.value+i));return r.value=r.value+i,e}if("chlist"===n)return function(e,t,r,n){let i=r.value,a=[];for(;r.value<i+n-1;){let n=y(t,r),i=S(e,r),o=B(e,r);r.value+=3;let s=S(e,r),l=S(e,r);a.push({name:n,pixelType:i,pLinear:o,xSampling:s,ySampling:l})}return r.value+=1,a}(e,t,r,i);if("chromaticities"===n)return function(e,t){let r=w(e,t),n=w(e,t),i=w(e,t),a=w(e,t),o=w(e,t),s=w(e,t);return{redX:r,redY:n,greenX:i,greenY:a,blueX:o,blueY:s,whiteX:w(e,t),whiteY:w(e,t)}}(e,r);if("compression"===n)return["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"][B(e,r)];if("box2i"===n){let t=S(e,r),n=S(e,r);return{xMin:t,yMin:n,xMax:S(e,r),yMax:S(e,r)}}else if("envmap"===n)return["ENVMAP_LATLONG","ENVMAP_CUBE"][B(e,r)];else if("tiledesc"===n){let t=R(e,r),n=R(e,r),i=B(e,r);return{xSize:t,ySize:n,levelMode:["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"][15&i],roundingMode:["ROUND_DOWN","ROUND_UP"][i>>4]}}else if("lineOrder"===n)return["INCREASING_Y","DECREASING_Y","RANDOM_Y"][B(e,r)];else if("float"===n)return w(e,r);else if("v2f"===n)return[w(e,r),w(e,r)];else if("v3f"===n){let t=w(e,r);return[t,w(e,r),w(e,r)]}else if("int"===n)return S(e,r);else if("rational"===n)return[S(e,r),R(e,r)];else if("timecode"===n)return[R(e,r),R(e,r)];else return"preview"===n?(r.value+=i,"skipped"):(r.value+=i,void 0)}(e,t,r,a,o);void 0===s?console.warn("THREE.EXRLoader: Skipped unknown header attribute type '".concat(a,"'.")):n[i]=s}}if((-7&i)!=0)throw console.error("THREE.EXRHeader:",n),Error("THREE.EXRLoader: Provided file is currently unsupported.");return n}(G,e,P),k=function(e,t,r,n,a){let o={size:0,viewer:t,array:r,offset:n,width:e.dataWindow.xMax-e.dataWindow.xMin+1,height:e.dataWindow.yMax-e.dataWindow.yMin+1,inputChannels:e.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:i.LinearSRGBColorSpace};switch(e.compression){case"NO_COMPRESSION":o.blockHeight=1,o.uncompress=A;break;case"RLE_COMPRESSION":o.blockHeight=1,o.uncompress=_;break;case"ZIPS_COMPRESSION":o.blockHeight=1,o.uncompress=v;break;case"ZIP_COMPRESSION":o.blockHeight=16,o.uncompress=v;break;case"PIZ_COMPRESSION":o.blockHeight=32,o.uncompress=E;break;case"PXR24_COMPRESSION":o.blockHeight=16,o.uncompress=T;break;case"DWAA_COMPRESSION":o.blockHeight=32,o.uncompress=C;break;case"DWAB_COMPRESSION":o.blockHeight=256,o.uncompress=C;break;default:throw Error("EXRLoader.parse: "+e.compression+" is unsupported")}let s={};for(let t of e.channels)switch(t.name){case"Y":case"R":case"G":case"B":case"A":s[t.name]=!0,o.type=t.pixelType}let l=!1;if(s.R&&s.G&&s.B)l=!s.A,o.outputChannels=4,o.decodeChannels={R:0,G:1,B:2,A:3};else if(s.Y)o.outputChannels=1,o.decodeChannels={Y:0};else throw Error("EXRLoader.parse: file contains unsupported data channels.");if(1==o.type)switch(a){case i.FloatType:o.getter=O;break;case i.HalfFloatType:o.getter=D}else if(2==o.type)switch(a){case i.FloatType:o.getter=w;break;case i.HalfFloatType:o.getter=x}else throw Error("EXRLoader.parse: unsupported pixelType "+o.type+" for "+e.compression+".");o.columns=o.width;let c=o.width*o.height*o.outputChannels;switch(a){case i.FloatType:o.byteArray=new Float32Array(c),l&&o.byteArray.fill(1,0,c);break;case i.HalfFloatType:o.byteArray=new Uint16Array(c),l&&o.byteArray.fill(15360,0,c);break;default:console.error("THREE.EXRLoader: unsupported type: ",a)}let u=0;for(let t of e.channels)void 0!==o.decodeChannels[t.name]&&(o.channelByteOffsets[t.name]=u),u+=2*t.pixelType;if(o.totalBytes=u,o.outLineWidth=o.width*o.outputChannels,"INCREASING_Y"===e.lineOrder?o.scanOrder=e=>e:o.scanOrder=e=>o.height-1-e,4==o.outputChannels?(o.format=i.RGBAFormat,o.colorSpace=i.LinearSRGBColorSpace):(o.format=i.RedFormat,o.colorSpace=i.NoColorSpace),e.spec.singleTile){o.blockHeight=e.tiles.ySize,o.blockWidth=e.tiles.xSize;let r=function(e,t,r){let n=0;switch(e.levelMode){case"ONE_LEVEL":n=1;break;case"MIPMAP_LEVELS":n=function(e,t){let r=Math.log2(e);return"ROUND_DOWN"==t?Math.floor(r):Math.ceil(r)}(Math.max(t,r),e.roundingMode)+1;break;case"RIPMAP_LEVELS":throw Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return n}(e.tiles,o.width,o.height),i=N(r,o.width,e.tiles.xSize,e.tiles.roundingMode),a=N(r,o.height,e.tiles.ySize,e.tiles.roundingMode);o.tileCount=i[0]*a[0];for(let e=0;e<r;e++)for(let r=0;r<a[e];r++)for(let r=0;r<i[e];r++)I(t,n);o.decode=L.bind(o)}else{o.blockWidth=o.width;let e=Math.ceil(o.height/o.blockHeight);for(let r=0;r<e;r++)I(t,n);o.decode=F.bind(o)}return o}(U,G,H,P,this.type);return k.decode(),{header:U,width:k.width,height:k.height,data:k.byteArray,format:k.format,colorSpace:k.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,r,n){return super.load(e,function(e,r){e.colorSpace=r.colorSpace,e.minFilter=i.LinearFilter,e.magFilter=i.LinearFilter,e.generateMipmaps=!1,e.flipY=!1,t&&t(e,r)},r,n)}constructor(e){super(e),this.type=i.HalfFloatType}}class V extends i.Loader{load(e,t,r,n){let o=new i.FileLoader(this.manager);o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(this.withCredentials),o.load(e,r=>{a(r instanceof ArrayBuffer);try{t(r)}catch(t){null!=n?n(t):console.error(t),this.manager.itemError(e)}},r,n)}}function Q(e){return e instanceof i.WebGLRenderer?null!=e.getContext().getExtension("OES_texture_float_linear"):e.backend.hasFeature?.("float32-filterable")??!1}let Z="This constructor is not a subclass of Float16Array",q="The constructor property value is not an object",$="Attempting to access detached ArrayBuffer",ee="Cannot convert undefined or null to object",et="Cannot mix BigInt and other types, use explicit conversions",er="@@iterator property is not callable",en="Reduce of empty array with no initial value",ei="Offset is out of bounds";function ea(e){return(t,...r)=>es(e,t,r)}function eo(e,t){return ea(ed(e,t).get)}let{apply:es,construct:el,defineProperty:ec,get:eu,getOwnPropertyDescriptor:ed,getPrototypeOf:eh,has:em,ownKeys:ef,set:ep,setPrototypeOf:eg}=Reflect,eA=Proxy,{EPSILON:e_,MAX_SAFE_INTEGER:ev,isFinite:eE,isNaN:eT}=Number,{iterator:eC,species:ey,toStringTag:eS,for:eR}=Symbol,eb=Object,{create:eB,defineProperty:eI,freeze:ew,is:ex}=eb,eM=eb.prototype,eD=eM.__lookupGetter__?ea(eM.__lookupGetter__):(e,t)=>{if(null==e)throw tp(ee);let r=eb(e);do{let e=ed(r,t);if(void 0!==e)return eO(e,"get")?e.get:void 0}while(null!==(r=eh(r)))},eO=eb.hasOwn||ea(eM.hasOwnProperty),eN=Array,eL=eN.isArray,eF=eN.prototype,eP=ea(eF.join),eG=ea(eF.push),eH=ea(eF.toLocaleString),eU=eF[eC],ek=ea(eU),{abs:ej,trunc:eJ}=Math,ez=ArrayBuffer,eK=ez.isView,eX=ez.prototype,eW=ea(eX.slice),eY=eo(eX,"byteLength"),eV="u">typeof SharedArrayBuffer?SharedArrayBuffer:null,eQ=eV&&eo(eV.prototype,"byteLength"),eZ=eh(Uint8Array),eq=eZ.from,e$=eZ.prototype,e1=e$[eC],e0=ea(e$.keys),e2=ea(e$.values),e3=ea(e$.entries),e4=ea(e$.set),e9=ea(e$.reverse),e6=ea(e$.fill),e8=ea(e$.copyWithin),e5=ea(e$.sort),e7=ea(e$.slice),te=ea(e$.subarray),tt=eo(e$,"buffer"),tr=eo(e$,"byteOffset"),tn=eo(e$,"length"),ti=eo(e$,eS),ta=Uint8Array,to=Uint16Array,ts=(...e)=>es(eq,to,e),tl=Uint32Array,tc=Float32Array,tu=eh([][eC]()),td=ea(tu.next),th=ea(function*(){}().next),tm=eh(tu),tf=ea(DataView.prototype.getUint16),tp=TypeError,tg=RangeError,tA=WeakSet,t_=tA.prototype,tv=ea(t_.add),tE=ea(t_.has),tT=WeakMap,tC=tT.prototype,ty=ea(tC.get),tS=ea(tC.has),tR=ea(tC.set),tb=new tT,tB=eB(null,{next:{value:function(){return td(ty(tb,this))}},[eC]:{value:function(){return this}}});function tI(e){if(e[eC]===eU&&tu.next===td)return e;let t=eB(tB);return tR(tb,t,ek(e)),t}let tw=new tT,tx=eB(tm,{next:{value:function(){return th(ty(tw,this))},writable:!0,configurable:!0}});for(let e of ef(tu))"next"!==e&&eI(tx,e,ed(tu,e));function tM(e){let t=eB(tx);return tR(tw,t,e),t}function tD(e){return null!==e&&"object"==typeof e||"function"==typeof e}function tO(e){return null!==e&&"object"==typeof e}function tN(e){return void 0!==ti(e)}function tL(e){let t=ti(e);return"BigInt64Array"===t||"BigUint64Array"===t}function tF(e){if(null===eV)return!1;try{return eQ(e),!0}catch{return!1}}function tP(e){return!!eL(e)&&e[eC]===eU&&tu.next===td}function tG(e){if("string"!=typeof e)return!1;let t=+e;return e===t+""&&!!eE(t)&&t===eJ(t)}let tH=eR("__Float16Array__"),tU=1/e_,tk=9765625e-10*tU,tj=new ez(4),tJ=new tc(tj),tz=new tl(tj),tK=new to(512),tX=new ta(512);for(let e=0;e<256;++e){let t=e-127;t<-24?(tK[e]=0,tK[256|e]=32768,tX[e]=24,tX[256|e]=24):t<-14?(tK[e]=1024>>-t-14,tK[256|e]=1024>>-t-14|32768,tX[e]=-t-1,tX[256|e]=-t-1):t<=15?(tK[e]=t+15<<10,tK[256|e]=t+15<<10|32768,tX[e]=13,tX[256|e]=13):t<128?(tK[e]=31744,tK[256|e]=64512,tX[e]=24,tX[256|e]=24):(tK[e]=31744,tK[256|e]=64512,tX[e]=13,tX[256|e]=13)}function tW(e){tJ[0]=function(e){let t=+e;if(!eE(t)||0===t)return t;let r=t>0?1:-1,n=ej(t);if(n<6103515625e-14)return r*(n/5960464477539063e-23+tU-tU)*5960464477539063e-23;let i=(1+tk)*n,a=i-(i-n);return a>65504||eT(a)?1/0*r:r*a}(e);let t=tz[0],r=t>>23&511;return tK[r]+((8388607&t)>>tX[r])}let tY=new tl(2048);for(let e=1;e<1024;++e){let t=e<<13,r=0;for(;(8388608&t)==0;)t<<=1,r-=8388608;t&=-8388609,r+=0x38800000,tY[e]=t|r}for(let e=1024;e<2048;++e)tY[e]=0x38000000+(e-1024<<13);let tV=new tl(64);for(let e=1;e<31;++e)tV[e]=e<<23;tV[31]=0x47800000,tV[32]=0x80000000;for(let e=33;e<63;++e)tV[e]=0x80000000+(e-32<<23);tV[63]=0xc7800000;let tQ=new to(64);for(let e=1;e<64;++e)32!==e&&(tQ[e]=1024);function tZ(e){let t=e>>10;return tz[0]=tY[tQ[t]+(1023&e)]+tV[t],tJ[0]}function tq(e){let t=+e;return eT(t)||0===t?0:eJ(t)}function t$(e){let t=tq(e);return t<0?0:t<ev?t:ev}function t1(e,t){if(!tD(e))throw tp("This is not an object");let r=e.constructor;if(void 0===r)return t;if(!tD(r))throw tp(q);return r[ey]??t}function t0(e){if(tF(e))return!1;try{return eW(e,0,0),!1}catch{}return!0}function t2(e,t){let r=eT(e),n=eT(t);if(r&&n)return 0;if(r)return 1;if(n||e<t)return -1;if(e>t)return 1;if(0===e&&0===t){let r=ex(e,0),n=ex(t,0);if(!r&&n)return -1;if(r&&!n)return 1}return 0}let t3=new tT;function t4(e){return tS(t3,e)||!eK(e)&&function(e){if(!tO(e))return!1;let t=eh(e);if(!tO(t))return!1;let r=t.constructor;if(void 0===r)return!1;if(!tD(r))throw tp(q);return em(r,tH)}(e)}function t9(e){if(!t4(e))throw tp("This is not a Float16Array object")}function t6(e,t){let r=t4(e),n=tN(e);if(!r&&!n)throw tp("Species constructor didn't return TypedArray object");if("number"==typeof t&&(r?tn(t8(e)):tn(e))<t)throw tp("Derived constructor created TypedArray object which was too small length");if(tL(e))throw tp(et)}function t8(e){let t=ty(t3,e);if(void 0!==t){if(t0(tt(t)))throw tp($);return t}let r=e.buffer;if(t0(r))throw tp($);return ty(t3,el(rt,[r,e.byteOffset,e.length],e.constructor))}function t5(e){let t=tn(e),r=[];for(let n=0;n<t;++n)r[n]=tZ(e[n]);return r}let t7=new tA;for(let e of ef(e$)){if(e===eS)continue;let t=ed(e$,e);eO(t,"get")&&"function"==typeof t.get&&tv(t7,t.get)}let re=ew({get:(e,t,r)=>tG(t)&&eO(e,t)?tZ(eu(e,t)):tE(t7,eD(e,t))?eu(e,t):eu(e,t,r),set:(e,t,r,n)=>tG(t)&&eO(e,t)?ep(e,t,tW(r)):ep(e,t,r,n),getOwnPropertyDescriptor(e,t){if(tG(t)&&eO(e,t)){let r=ed(e,t);return r.value=tZ(r.value),r}return ed(e,t)},defineProperty:(e,t,r)=>(tG(t)&&eO(e,t)&&eO(r,"value")&&(r.value=tW(r.value)),ec(e,t,r))});class rt{constructor(e,t,r){let n;if(t4(e))n=el(to,[t8(e)],new.target);else if(tD(e)&&!function(e){return function(e){try{return!eL(e)&&(eY(e),!0)}catch{return!1}}(e)||tF(e)}(e)){let t,r;if(tN(e)){if(t=e,r=tn(e),t0(tt(e)))throw tp($);if(tL(e))throw tp(et);n=el(to,[new ez(2*r)],new.target)}else{let i=e[eC];if(null!=i&&"function"!=typeof i)throw tp(er);null!=i?tP(e)?(t=e,r=e.length):r=(t=[...e]).length:r=t$((t=e).length),n=el(to,[r],new.target)}for(let e=0;e<r;++e)n[e]=tW(t[e])}else n=el(to,arguments,new.target);let i=new eA(n,re);return tR(t3,i,n),i}static from(e,...t){let r,n;if(!em(this,tH))throw tp(Z);if(this===rt){if(t4(e)&&0===t.length){let t=t8(e),r=new to(tt(t),tr(t),tn(t));return new rt(tt(e7(r)))}if(0===t.length)return new rt(tt(ts(e,tW)));let r=t[0];return new rt(tt(ts(e,function(e,...t){return tW(es(r,this,[e,...tI(t)]))},t[1])))}let i=e[eC];if(null!=i&&"function"!=typeof i)throw tp(er);if(null!=i)tP(e)?(r=e,n=e.length):tN(e)&&e[eC]===e1&&tu.next===td?(r=e,n=tn(e)):n=(r=[...e]).length;else{if(null==e)throw tp(ee);n=t$((r=eb(e)).length)}let a=new this(n);if(0===t.length)for(let e=0;e<n;++e)a[e]=r[e];else{let e=t[0],i=t[1];for(let t=0;t<n;++t)a[t]=es(e,i,[r[t],t])}return a}static of(...e){if(!em(this,tH))throw tp(Z);let t=e.length;if(this===rt){let r=new rt(t),n=t8(r);for(let r=0;r<t;++r)n[r]=tW(e[r]);return r}let r=new this(t);for(let n=0;n<t;++n)r[n]=e[n];return r}keys(){return t9(this),e0(t8(this))}values(){t9(this);let e=t8(this);return tM(function*(){for(let t of e2(e))yield tZ(t)}())}entries(){t9(this);let e=t8(this);return tM(function*(){for(let[t,r]of e3(e))yield[t,tZ(r)]}())}at(e){t9(this);let t=t8(this),r=tn(t),n=tq(e),i=n>=0?n:r+n;if(!(i<0||i>=r))return tZ(t[i])}with(e,t){t9(this);let r=t8(this),n=tn(r),i=tq(e),a=i>=0?i:n+i;if(a<0||a>=n)throw tg(ei);let o=new to(tt(r),tr(r),tn(r)),s=new rt(tt(e7(o)));return t8(s)[a]=tW(+t),s}map(e,...t){t9(this);let r=t8(this),n=tn(r),i=t[0],a=t1(r,rt);if(a===rt){let t=new rt(n),a=t8(t);for(let t=0;t<n;++t){let n=tZ(r[t]);a[t]=tW(es(e,i,[n,t,this]))}return t}let o=new a(n);t6(o,n);for(let t=0;t<n;++t){let n=tZ(r[t]);o[t]=es(e,i,[n,t,this])}return o}filter(e,...t){t9(this);let r=t8(this),n=tn(r),i=t[0],a=[];for(let t=0;t<n;++t){let n=tZ(r[t]);es(e,i,[n,t,this])&&eG(a,n)}let o=new(t1(r,rt))(a);return t6(o),o}reduce(e,...t){let r,n;t9(this);let i=t8(this),a=tn(i);if(0===a&&0===t.length)throw tp(en);0===t.length?(r=tZ(i[0]),n=1):(r=t[0],n=0);for(let t=n;t<a;++t)r=e(r,tZ(i[t]),t,this);return r}reduceRight(e,...t){let r,n;t9(this);let i=t8(this),a=tn(i);if(0===a&&0===t.length)throw tp(en);0===t.length?(r=tZ(i[a-1]),n=a-2):(r=t[0],n=a-1);for(let t=n;t>=0;--t)r=e(r,tZ(i[t]),t,this);return r}forEach(e,...t){t9(this);let r=t8(this),n=tn(r),i=t[0];for(let t=0;t<n;++t)es(e,i,[tZ(r[t]),t,this])}find(e,...t){t9(this);let r=t8(this),n=tn(r),i=t[0];for(let t=0;t<n;++t){let n=tZ(r[t]);if(es(e,i,[n,t,this]))return n}}findIndex(e,...t){t9(this);let r=t8(this),n=tn(r),i=t[0];for(let t=0;t<n;++t)if(es(e,i,[tZ(r[t]),t,this]))return t;return -1}findLast(e,...t){t9(this);let r=t8(this),n=tn(r),i=t[0];for(let t=n-1;t>=0;--t){let n=tZ(r[t]);if(es(e,i,[n,t,this]))return n}}findLastIndex(e,...t){t9(this);let r=t8(this),n=tn(r),i=t[0];for(let t=n-1;t>=0;--t)if(es(e,i,[tZ(r[t]),t,this]))return t;return -1}every(e,...t){t9(this);let r=t8(this),n=tn(r),i=t[0];for(let t=0;t<n;++t)if(!es(e,i,[tZ(r[t]),t,this]))return!1;return!0}some(e,...t){t9(this);let r=t8(this),n=tn(r),i=t[0];for(let t=0;t<n;++t)if(es(e,i,[tZ(r[t]),t,this]))return!0;return!1}set(e,...t){t9(this);let r=t8(this),n=tq(t[0]);if(n<0)throw tg(ei);if(null==e)throw tp(ee);if(tL(e))throw tp(et);if(t4(e))return e4(t8(this),t8(e),n);if(tN(e)&&t0(tt(e)))throw tp($);let i=tn(r),a=eb(e),o=t$(a.length);if(n===1/0||o+n>i)throw tg(ei);for(let e=0;e<o;++e)r[e+n]=tW(a[e])}reverse(){return t9(this),e9(t8(this)),this}toReversed(){t9(this);let e=t8(this),t=new to(tt(e),tr(e),tn(e)),r=new rt(tt(e7(t)));return e9(t8(r)),r}fill(e,...t){return t9(this),e6(t8(this),tW(e),...tI(t)),this}copyWithin(e,t,...r){return t9(this),e8(t8(this),e,t,...tI(r)),this}sort(e){t9(this);let t=t8(this),r=void 0!==e?e:t2;return e5(t,(e,t)=>r(tZ(e),tZ(t))),this}toSorted(e){t9(this);let t=t8(this);if(void 0!==e&&"function"!=typeof e)throw new tp("The comparison function must be either a function or undefined");let r=void 0!==e?e:t2,n=new to(tt(t),tr(t),tn(t)),i=new rt(tt(e7(n)));return e5(t8(i),(e,t)=>r(tZ(e),tZ(t))),i}slice(e,t){let r,n;t9(this);let i=t8(this),a=t1(i,rt);if(a===rt){let r=new to(tt(i),tr(i),tn(i));return new rt(tt(e7(r,e,t)))}let o=tn(i),s=tq(e),l=void 0===t?o:tq(t);r=s===-1/0?0:s<0?o+s>0?o+s:0:o<s?o:s;let c=(n=l===-1/0?0:l<0?o+l>0?o+l:0:o<l?o:l)-r>0?n-r:0,u=new a(c);if(t6(u,c),0===c)return u;if(t0(tt(i)))throw tp($);let d=0;for(;r<n;)u[d]=tZ(i[r]),++r,++d;return u}subarray(e,t){t9(this);let r=t8(this),n=t1(r,rt),i=te(new to(tt(r),tr(r),tn(r)),e,t),a=new n(tt(i),tr(i),tn(i));return t6(a),a}indexOf(e,...t){t9(this);let r=t8(this),n=tn(r),i=tq(t[0]);if(i===1/0)return -1;i<0&&(i+=n)<0&&(i=0);for(let t=i;t<n;++t)if(eO(r,t)&&tZ(r[t])===e)return t;return -1}lastIndexOf(e,...t){t9(this);let r=t8(this),n=tn(r),i=t.length>=1?tq(t[0]):n-1;if(i===-1/0)return -1;i>=0?i=i<n-1?i:n-1:i+=n;for(let t=i;t>=0;--t)if(eO(r,t)&&tZ(r[t])===e)return t;return -1}includes(e,...t){t9(this);let r=t8(this),n=tn(r),i=tq(t[0]);if(i===1/0)return!1;i<0&&(i+=n)<0&&(i=0);let a=eT(e);for(let t=i;t<n;++t){let n=tZ(r[t]);if(a&&eT(n)||n===e)return!0}return!1}join(e){return t9(this),eP(t5(t8(this)),e)}toLocaleString(...e){return t9(this),eH(t5(t8(this)),...tI(e))}get[eS](){if(t4(this))return"Float16Array"}}eI(rt,"BYTES_PER_ELEMENT",{value:2}),eI(rt,tH,{}),eg(rt,eZ);let rr=rt.prototype;function rn(e){return e instanceof Int8Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof rt||e instanceof Float32Array||e instanceof Float64Array}eI(rr,"BYTES_PER_ELEMENT",{value:2}),eI(rr,eC,{value:rr.values,writable:!0,configurable:!0}),eg(rr,e$);class ri extends i.Loader{constructor(e,t){super(t),this.parser=e}load(e,t,r,n){let i=new V(this.manager);i.setRequestHeader(this.requestHeader),i.setPath(this.path),i.setWithCredentials(this.withCredentials),i.load(e,r=>{try{t(this.parser(r))}catch(t){null!=n?n(t):console.error(t),this.manager.itemError(e)}},r,n)}}class ra extends i.Loader{constructor(e,t,r={},n){super(n),this.textureClass=e,this.parser=t,this.options={format:i.RGBAFormat,minFilter:i.LinearFilter,magFilter:i.LinearFilter,...r}}load(e,t,r,n){let o=new this.textureClass,s=new ri(this.parser,this.manager);return s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(this.withCredentials),s.load(e,e=>{o.image.data=e instanceof rt?new Uint16Array(e.buffer):e;let{width:r,height:n,depth:s,...l}=this.options;null!=r&&(o.image.width=r),null!=n&&(o.image.height=n),"depth"in o.image&&null!=s&&(o.image.depth=s),o.type=function(e){let t=e instanceof Int8Array?i.ByteType:e instanceof Uint8Array||e instanceof Uint8ClampedArray?i.UnsignedByteType:e instanceof Int16Array?i.ShortType:e instanceof Uint16Array?i.UnsignedShortType:e instanceof Int32Array?i.IntType:e instanceof Uint32Array?i.UnsignedIntType:e instanceof rt?i.HalfFloatType:e instanceof Float32Array||e instanceof Float64Array?i.FloatType:null;return a(null!=t),t}(e),Object.assign(o,l),o.needsUpdate=!0,t?.(o)},r,n),o}}let ro=i.MathUtils.clamp,rs=(i.MathUtils.euclideanModulo,i.MathUtils.inverseLerp,i.MathUtils.lerp,i.MathUtils.degToRad);function rl(e,t,r,n=0,a=1){return i.MathUtils.mapLinear(e,t,r,n,a)}function rc(e){return Math.min(Math.max(e,0),1)}function ru(e){return(t,r)=>{t instanceof i.Material?Object.defineProperty(t,r,{enumerable:!0,get(){return this.defines?.[e]!=null},set(t){t!==this[r]&&(t?(this.defines??={},this.defines[e]="1"):delete this.defines?.[e],this.needsUpdate=!0)}}):Object.defineProperty(t,r,{enumerable:!0,get(){return this.defines.has(e)},set(t){t!==this[r]&&(t?this.defines.set(e,"1"):this.defines.delete(e),this.setChanged())}})}}function rd(e){return"number"==typeof e?Math.floor(e):"string"==typeof e?parseInt(e,10):"boolean"==typeof e?+e:0}function rh(e,{min:t=Number.MIN_SAFE_INTEGER,max:r=Number.MAX_SAFE_INTEGER}={}){return(n,a)=>{n instanceof i.Material?Object.defineProperty(n,a,{enumerable:!0,get(){let t=this.defines?.[e];return null!=t?rd(t):0},set(n){n!==this[a]&&(this.defines??={},this.defines[e]=ro(n,t,r).toFixed(0),this.needsUpdate=!0)}}):Object.defineProperty(n,a,{enumerable:!0,get(){let t=this.defines.get(e);return null!=t?rd(t):0},set(n){n!==this[a]&&(this.defines.set(e,ro(n,t,r).toFixed(0)),this.setChanged())}})}}i.MathUtils.radToDeg,i.MathUtils.isPowerOfTwo,i.MathUtils.ceilPowerOfTwo,i.MathUtils.floorPowerOfTwo,i.MathUtils.normalize;class rm extends i.Loader{constructor(e={},t){super(t),this.options=e}load(e,t,r,n){let{width:a,height:o,depth:s}=this.options,l=new i.Data3DTexture(null,a,o,s),c=new Y(this.manager);return c.setRequestHeader(this.requestHeader),c.setPath(this.path),c.setWithCredentials(this.withCredentials),c.load(e,r=>{let{image:i}=r;l.image={data:i.data,width:a??i.width,height:o??i.height,depth:s??Math.sqrt(i.height)},l.type=r.type,l.format=r.format,l.colorSpace=r.colorSpace,l.needsUpdate=!0;try{t?.(l)}catch(t){null!=n?n(t):console.error(t),this.manager.itemError(e)}},r,n),l}}class rf extends i.Loader{constructor(e={},t){super(t),this.options=e}load(e,t,r,n){let{width:a,height:o}=this.options,s=new i.DataTexture(null,a,o),l=new Y(this.manager);return l.setRequestHeader(this.requestHeader),l.setPath(this.path),l.setWithCredentials(this.withCredentials),l.load(e,r=>{let{image:i}=r;s.image={data:i.data,width:a??i.width,height:o??i.height},s.type=r.type,s.format=r.format,s.colorSpace=r.colorSpace,s.needsUpdate=!0;try{t?.(s)}catch(t){null!=n?n(t):console.error(t),this.manager.itemError(e)}},r,n),s}}let rp=class e{constructor(e=0,t=0,r=0,n=0){this.west=e,this.south=t,this.east=r,this.north=n}get width(){let e=this.east;return e<this.west&&(e+=2*Math.PI),e-this.west}get height(){return this.north-this.south}set(e,t,r,n){return this.west=e,this.south=t,this.east=r,this.north=n,this}clone(){return new e(this.west,this.south,this.east,this.north)}copy(e){return this.west=e.west,this.south=e.south,this.east=e.east,this.north=e.north,this}equals(e){return e.west===this.west&&e.south===this.south&&e.east===this.east&&e.north===this.north}at(e,t,r=new _){return r.set(this.west+(this.east-this.west)*e,this.north+(this.south-this.north)*t)}fromArray(e,t=0){return this.west=e[t],this.south=e[t+1],this.east=e[t+2],this.north=e[t+3],this}toArray(e=[],t=0){return e[t]=this.west,e[t+1]=this.south,e[t+2]=this.east,e[t+3]=this.north,e}*[Symbol.iterator](){yield this.west,yield this.south,yield this.east,yield this.north}};rp.MAX=new rp(_.MIN_LONGITUDE,_.MIN_LATITUDE,_.MAX_LONGITUDE,_.MAX_LATITUDE);let rg=/^[ \t]*#include +"([\w\d./]+)"/gm;class rA{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return this.x=e,this.y=t,null!=r&&(this.z=r),this}clone(){return new rA(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}getParent(e=new rA){let t=2**this.z,r=this.x/t,n=this.y/t,i=this.z-1,a=2**i;return e.set(Math.floor(r*a),Math.floor(n*a),i)}*traverseChildren(e,t){let{x:r,y:n,z:i}=this;for(let a of ve(r,n,i,i+e,t))yield a}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}let r_=(e,t)=>(function(e,t,r,i=!0){if(i===function(){if(null!=n)return n;let e=new Uint32Array([0x10000000]);return n=0===new Uint8Array(e.buffer,e.byteOffset,e.byteLength)[0]}())return new t(e);let a=Object.assign(new DataView(e),{getFloat16(e,t){return function(e,t,...r){return tZ(tf(e,t,...tI(r)))}(this,e,t)}}),o=new t(a.byteLength/t.BYTES_PER_ELEMENT);for(let e=0,n=0;e<o.length;++e,n+=t.BYTES_PER_ELEMENT)o[e]=a[r](n,i);return o})(e,rt,"getFloat16",t);function rv(e){}let rE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*(?:i\s*\+\+|\+\+\s*i)\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rT(e,t,r,n){let i="";for(let e=parseInt(t,10);e<parseInt(r,10);++e)i+=n.replace(/\[\s*i\s*\]/g,`[${e}]`).replace(/UNROLLED_LOOP_INDEX/g,`${e}`);return i}function rC(e){return e.replace(rE,rT)}},6750:(e,t,r)=>{r.d(t,{N:()=>g});var n=r(8945),i=r(99),a=r(2115),o=r(7548),s=Object.defineProperty;class l{constructor(){((e,t,r)=>((e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r)(e,"symbol"!=typeof t?t+"":t,r))(this,"_listeners")}addEventListener(e,t){void 0===this._listeners&&(this._listeners={});let r=this._listeners;void 0===r[e]&&(r[e]=[]),-1===r[e].indexOf(t)&&r[e].push(t)}hasEventListener(e,t){if(void 0===this._listeners)return!1;let r=this._listeners;return void 0!==r[e]&&-1!==r[e].indexOf(t)}removeEventListener(e,t){if(void 0===this._listeners)return;let r=this._listeners[e];if(void 0!==r){let e=r.indexOf(t);-1!==e&&r.splice(e,1)}}dispatchEvent(e){if(void 0===this._listeners)return;let t=this._listeners[e.type];if(void 0!==t){e.target=this;let r=t.slice(0);for(let t=0,n=r.length;t<n;t++)r[t].call(this,e);e.target=null}}}var c=Object.defineProperty,u=(e,t,r)=>(((e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r)(e,"symbol"!=typeof t?t+"":t,r),r);let d=new o.Ray,h=new o.Plane,m=Math.cos(Math.PI/180*70),f=(e,t)=>(e%t+t)%t;class p extends l{constructor(e,t){super(),u(this,"object"),u(this,"domElement"),u(this,"enabled",!0),u(this,"target",new o.Vector3),u(this,"minDistance",0),u(this,"maxDistance",1/0),u(this,"minZoom",0),u(this,"maxZoom",1/0),u(this,"minPolarAngle",0),u(this,"maxPolarAngle",Math.PI),u(this,"minAzimuthAngle",-1/0),u(this,"maxAzimuthAngle",1/0),u(this,"enableDamping",!1),u(this,"dampingFactor",.05),u(this,"enableZoom",!0),u(this,"zoomSpeed",1),u(this,"enableRotate",!0),u(this,"rotateSpeed",1),u(this,"enablePan",!0),u(this,"panSpeed",1),u(this,"screenSpacePanning",!0),u(this,"keyPanSpeed",7),u(this,"zoomToCursor",!1),u(this,"autoRotate",!1),u(this,"autoRotateSpeed",2),u(this,"reverseOrbit",!1),u(this,"reverseHorizontalOrbit",!1),u(this,"reverseVerticalOrbit",!1),u(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),u(this,"mouseButtons",{LEFT:o.MOUSE.ROTATE,MIDDLE:o.MOUSE.DOLLY,RIGHT:o.MOUSE.PAN}),u(this,"touches",{ONE:o.TOUCH.ROTATE,TWO:o.TOUCH.DOLLY_PAN}),u(this,"target0"),u(this,"position0"),u(this,"zoom0"),u(this,"_domElementKeyEvents",null),u(this,"getPolarAngle"),u(this,"getAzimuthalAngle"),u(this,"setPolarAngle"),u(this,"setAzimuthalAngle"),u(this,"getDistance"),u(this,"getZoomScale"),u(this,"listenToKeyEvents"),u(this,"stopListenToKeyEvents"),u(this,"saveState"),u(this,"reset"),u(this,"update"),u(this,"connect"),u(this,"dispose"),u(this,"dollyIn"),u(this,"dollyOut"),u(this,"getScale"),u(this,"setScale"),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>p.phi,this.getAzimuthalAngle=()=>p.theta,this.setPolarAngle=e=>{let t=f(e,2*Math.PI),n=p.phi;n<0&&(n+=2*Math.PI),t<0&&(t+=2*Math.PI);let i=Math.abs(t-n);2*Math.PI-i<i&&(t<n?t+=2*Math.PI:n+=2*Math.PI),g.phi=t-n,r.update()},this.setAzimuthalAngle=e=>{let t=f(e,2*Math.PI),n=p.theta;n<0&&(n+=2*Math.PI),t<0&&(t+=2*Math.PI);let i=Math.abs(t-n);2*Math.PI-i<i&&(t<n?t+=2*Math.PI:n+=2*Math.PI),g.theta=t-n,r.update()},this.getDistance=()=>r.object.position.distanceTo(r.target),this.listenToKeyEvents=e=>{e.addEventListener("keydown",ee),this._domElementKeyEvents=e},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",ee),this._domElementKeyEvents=null},this.saveState=()=>{r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=()=>{r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(n),r.update(),l=s.NONE},this.update=(()=>{let t=new o.Vector3,i=new o.Vector3(0,1,0),a=new o.Quaternion().setFromUnitVectors(e.up,i),u=a.clone().invert(),f=new o.Vector3,v=new o.Quaternion,E=2*Math.PI;return function(){let T=r.object.position;a.setFromUnitVectors(e.up,i),u.copy(a).invert(),t.copy(T).sub(r.target),t.applyQuaternion(a),p.setFromVector3(t),r.autoRotate&&l===s.NONE&&N(2*Math.PI/60/60*r.autoRotateSpeed),r.enableDamping?(p.theta+=g.theta*r.dampingFactor,p.phi+=g.phi*r.dampingFactor):(p.theta+=g.theta,p.phi+=g.phi);let C=r.minAzimuthAngle,y=r.maxAzimuthAngle;isFinite(C)&&isFinite(y)&&(C<-Math.PI?C+=E:C>Math.PI&&(C-=E),y<-Math.PI?y+=E:y>Math.PI&&(y-=E),C<=y?p.theta=Math.max(C,Math.min(y,p.theta)):p.theta=p.theta>(C+y)/2?Math.max(C,p.theta):Math.min(y,p.theta)),p.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,p.phi)),p.makeSafe(),!0===r.enableDamping?r.target.addScaledVector(_,r.dampingFactor):r.target.add(_),r.zoomToCursor&&x||r.object.isOrthographicCamera?p.radius=k(p.radius):p.radius=k(p.radius*A),t.setFromSpherical(p),t.applyQuaternion(u),T.copy(r.target).add(t),r.object.matrixAutoUpdate||r.object.updateMatrix(),r.object.lookAt(r.target),!0===r.enableDamping?(g.theta*=1-r.dampingFactor,g.phi*=1-r.dampingFactor,_.multiplyScalar(1-r.dampingFactor)):(g.set(0,0,0),_.set(0,0,0));let S=!1;if(r.zoomToCursor&&x){let n=null;if(r.object instanceof o.PerspectiveCamera&&r.object.isPerspectiveCamera){let e=t.length();n=k(e*A);let i=e-n;r.object.position.addScaledVector(I,i),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){let e=new o.Vector3(w.x,w.y,0);e.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/A)),r.object.updateProjectionMatrix(),S=!0;let i=new o.Vector3(w.x,w.y,0);i.unproject(r.object),r.object.position.sub(i).add(e),r.object.updateMatrixWorld(),n=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;null!==n&&(r.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(n).add(r.object.position):(d.origin.copy(r.object.position),d.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(d.direction))<m?e.lookAt(r.target):(h.setFromNormalAndCoplanarPoint(r.object.up,r.target),d.intersectPlane(h,r.target))))}else r.object instanceof o.OrthographicCamera&&r.object.isOrthographicCamera&&(S=1!==A)&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/A)),r.object.updateProjectionMatrix());return A=1,x=!1,!!(S||f.distanceToSquared(r.object.position)>c||8*(1-v.dot(r.object.quaternion))>c)&&(r.dispatchEvent(n),f.copy(r.object.position),v.copy(r.object.quaternion),S=!1,!0)}})(),this.connect=e=>{r.domElement=e,r.domElement.style.touchAction="none",r.domElement.addEventListener("contextmenu",et),r.domElement.addEventListener("pointerdown",Q),r.domElement.addEventListener("pointercancel",q),r.domElement.addEventListener("wheel",$)},this.dispose=()=>{var e,t,n,i,a,o;r.domElement&&(r.domElement.style.touchAction="auto"),null==(e=r.domElement)||e.removeEventListener("contextmenu",et),null==(t=r.domElement)||t.removeEventListener("pointerdown",Q),null==(n=r.domElement)||n.removeEventListener("pointercancel",q),null==(i=r.domElement)||i.removeEventListener("wheel",$),null==(a=r.domElement)||a.ownerDocument.removeEventListener("pointermove",Z),null==(o=r.domElement)||o.ownerDocument.removeEventListener("pointerup",q),null!==r._domElementKeyEvents&&r._domElementKeyEvents.removeEventListener("keydown",ee)};let r=this,n={type:"change"},i={type:"start"},a={type:"end"},s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},l=s.NONE,c=1e-6,p=new o.Spherical,g=new o.Spherical,A=1,_=new o.Vector3,v=new o.Vector2,E=new o.Vector2,T=new o.Vector2,C=new o.Vector2,y=new o.Vector2,S=new o.Vector2,R=new o.Vector2,b=new o.Vector2,B=new o.Vector2,I=new o.Vector3,w=new o.Vector2,x=!1,M=[],D={};function O(){return Math.pow(.95,r.zoomSpeed)}function N(e){r.reverseOrbit||r.reverseHorizontalOrbit?g.theta+=e:g.theta-=e}function L(e){r.reverseOrbit||r.reverseVerticalOrbit?g.phi+=e:g.phi-=e}let F=(()=>{let e=new o.Vector3;return function(t,r){e.setFromMatrixColumn(r,0),e.multiplyScalar(-t),_.add(e)}})(),P=(()=>{let e=new o.Vector3;return function(t,n){!0===r.screenSpacePanning?e.setFromMatrixColumn(n,1):(e.setFromMatrixColumn(n,0),e.crossVectors(r.object.up,e)),e.multiplyScalar(t),_.add(e)}})(),G=(()=>{let e=new o.Vector3;return function(t,n){let i=r.domElement;if(i&&r.object instanceof o.PerspectiveCamera&&r.object.isPerspectiveCamera){let a=r.object.position;e.copy(a).sub(r.target);let o=e.length();F(2*t*(o*=Math.tan(r.object.fov/2*Math.PI/180))/i.clientHeight,r.object.matrix),P(2*n*o/i.clientHeight,r.object.matrix)}else i&&r.object instanceof o.OrthographicCamera&&r.object.isOrthographicCamera?(F(t*(r.object.right-r.object.left)/r.object.zoom/i.clientWidth,r.object.matrix),P(n*(r.object.top-r.object.bottom)/r.object.zoom/i.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}})();function H(e){r.object instanceof o.PerspectiveCamera&&r.object.isPerspectiveCamera||r.object instanceof o.OrthographicCamera&&r.object.isOrthographicCamera?A=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function U(e){if(!r.zoomToCursor||!r.domElement)return;x=!0;let t=r.domElement.getBoundingClientRect(),n=e.clientX-t.left,i=e.clientY-t.top,a=t.width,o=t.height;w.x=n/a*2-1,w.y=-(i/o*2)+1,I.set(w.x,w.y,1).unproject(r.object).sub(r.object.position).normalize()}function k(e){return Math.max(r.minDistance,Math.min(r.maxDistance,e))}function j(e){v.set(e.clientX,e.clientY)}function J(e){C.set(e.clientX,e.clientY)}function z(){if(1==M.length)v.set(M[0].pageX,M[0].pageY);else{let e=.5*(M[0].pageX+M[1].pageX),t=.5*(M[0].pageY+M[1].pageY);v.set(e,t)}}function K(){if(1==M.length)C.set(M[0].pageX,M[0].pageY);else{let e=.5*(M[0].pageX+M[1].pageX),t=.5*(M[0].pageY+M[1].pageY);C.set(e,t)}}function X(){let e=M[0].pageX-M[1].pageX,t=M[0].pageY-M[1].pageY,r=Math.sqrt(e*e+t*t);R.set(0,r)}function W(e){if(1==M.length)E.set(e.pageX,e.pageY);else{let t=en(e),r=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);E.set(r,n)}T.subVectors(E,v).multiplyScalar(r.rotateSpeed);let t=r.domElement;t&&(N(2*Math.PI*T.x/t.clientHeight),L(2*Math.PI*T.y/t.clientHeight)),v.copy(E)}function Y(e){if(1==M.length)y.set(e.pageX,e.pageY);else{let t=en(e),r=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);y.set(r,n)}S.subVectors(y,C).multiplyScalar(r.panSpeed),G(S.x,S.y),C.copy(y)}function V(e){var t;let n=en(e),i=e.pageX-n.x,a=e.pageY-n.y,o=Math.sqrt(i*i+a*a);b.set(0,o),B.set(0,Math.pow(b.y/R.y,r.zoomSpeed)),t=B.y,H(A/t),R.copy(b)}function Q(e){var t,n,a;!1!==r.enabled&&(0===M.length&&(null==(t=r.domElement)||t.ownerDocument.addEventListener("pointermove",Z),null==(n=r.domElement)||n.ownerDocument.addEventListener("pointerup",q)),a=e,M.push(a),"touch"===e.pointerType?function(e){switch(er(e),M.length){case 1:switch(r.touches.ONE){case o.TOUCH.ROTATE:if(!1===r.enableRotate)return;z(),l=s.TOUCH_ROTATE;break;case o.TOUCH.PAN:if(!1===r.enablePan)return;K(),l=s.TOUCH_PAN;break;default:l=s.NONE}break;case 2:switch(r.touches.TWO){case o.TOUCH.DOLLY_PAN:if(!1===r.enableZoom&&!1===r.enablePan)return;r.enableZoom&&X(),r.enablePan&&K(),l=s.TOUCH_DOLLY_PAN;break;case o.TOUCH.DOLLY_ROTATE:if(!1===r.enableZoom&&!1===r.enableRotate)return;r.enableZoom&&X(),r.enableRotate&&z(),l=s.TOUCH_DOLLY_ROTATE;break;default:l=s.NONE}break;default:l=s.NONE}l!==s.NONE&&r.dispatchEvent(i)}(e):function(e){let t;switch(e.button){case 0:t=r.mouseButtons.LEFT;break;case 1:t=r.mouseButtons.MIDDLE;break;case 2:t=r.mouseButtons.RIGHT;break;default:t=-1}switch(t){case o.MOUSE.DOLLY:if(!1===r.enableZoom)return;U(e),R.set(e.clientX,e.clientY),l=s.DOLLY;break;case o.MOUSE.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===r.enablePan)return;J(e),l=s.PAN}else{if(!1===r.enableRotate)return;j(e),l=s.ROTATE}break;case o.MOUSE.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===r.enableRotate)return;j(e),l=s.ROTATE}else{if(!1===r.enablePan)return;J(e),l=s.PAN}break;default:l=s.NONE}l!==s.NONE&&r.dispatchEvent(i)}(e))}function Z(e){!1!==r.enabled&&("touch"===e.pointerType?function(e){switch(er(e),l){case s.TOUCH_ROTATE:if(!1===r.enableRotate)return;W(e),r.update();break;case s.TOUCH_PAN:if(!1===r.enablePan)return;Y(e),r.update();break;case s.TOUCH_DOLLY_PAN:if(!1===r.enableZoom&&!1===r.enablePan)return;r.enableZoom&&V(e),r.enablePan&&Y(e),r.update();break;case s.TOUCH_DOLLY_ROTATE:if(!1===r.enableZoom&&!1===r.enableRotate)return;r.enableZoom&&V(e),r.enableRotate&&W(e),r.update();break;default:l=s.NONE}}(e):function(e){if(!1!==r.enabled)switch(l){case s.ROTATE:if(!1===r.enableRotate)return;E.set(e.clientX,e.clientY),T.subVectors(E,v).multiplyScalar(r.rotateSpeed);let t=r.domElement;t&&(N(2*Math.PI*T.x/t.clientHeight),L(2*Math.PI*T.y/t.clientHeight)),v.copy(E),r.update();break;case s.DOLLY:var n,i;if(!1===r.enableZoom)return;(b.set(e.clientX,e.clientY),B.subVectors(b,R),B.y>0)?(n=O(),H(A/n)):B.y<0&&(i=O(),H(A*i)),R.copy(b),r.update();break;case s.PAN:if(!1===r.enablePan)return;y.set(e.clientX,e.clientY),S.subVectors(y,C).multiplyScalar(r.panSpeed),G(S.x,S.y),C.copy(y),r.update()}}(e))}function q(e){var t,n,i;(function(e){delete D[e.pointerId];for(let t=0;t<M.length;t++)if(M[t].pointerId==e.pointerId)return void M.splice(t,1)})(e),0===M.length&&(null==(t=r.domElement)||t.releasePointerCapture(e.pointerId),null==(n=r.domElement)||n.ownerDocument.removeEventListener("pointermove",Z),null==(i=r.domElement)||i.ownerDocument.removeEventListener("pointerup",q)),r.dispatchEvent(a),l=s.NONE}function $(e){if(!1!==r.enabled&&!1!==r.enableZoom&&(l===s.NONE||l===s.ROTATE)){var t,n;e.preventDefault(),r.dispatchEvent(i),(U(e),e.deltaY<0)?(t=O(),H(A*t)):e.deltaY>0&&(n=O(),H(A/n)),r.update(),r.dispatchEvent(a)}}function ee(e){if(!1!==r.enabled&&!1!==r.enablePan){let t=!1;switch(e.code){case r.keys.UP:G(0,r.keyPanSpeed),t=!0;break;case r.keys.BOTTOM:G(0,-r.keyPanSpeed),t=!0;break;case r.keys.LEFT:G(r.keyPanSpeed,0),t=!0;break;case r.keys.RIGHT:G(-r.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),r.update())}}function et(e){!1!==r.enabled&&e.preventDefault()}function er(e){let t=D[e.pointerId];void 0===t&&(t=new o.Vector2,D[e.pointerId]=t),t.set(e.pageX,e.pageY)}function en(e){return D[(e.pointerId===M[0].pointerId?M[1]:M[0]).pointerId]}this.dollyIn=(e=O())=>{H(A*e),r.update()},this.dollyOut=(e=O())=>{H(A/e),r.update()},this.getScale=()=>A,this.setScale=e=>{H(e),r.update()},this.getZoomScale=()=>O(),void 0!==t&&this.connect(t),this.update()}}let g=a.forwardRef(({makeDefault:e,camera:t,regress:r,domElement:o,enableDamping:s=!0,keyEvents:l=!1,onChange:c,onStart:u,onEnd:d,...h},m)=>{let f=(0,i.C)(e=>e.invalidate),g=(0,i.C)(e=>e.camera),A=(0,i.C)(e=>e.gl),_=(0,i.C)(e=>e.events),v=(0,i.C)(e=>e.setEvents),E=(0,i.C)(e=>e.set),T=(0,i.C)(e=>e.get),C=(0,i.C)(e=>e.performance),y=t||g,S=o||_.connected||A.domElement,R=a.useMemo(()=>new p(y),[y]);return(0,i.D)(()=>{R.enabled&&R.update()},-1),a.useEffect(()=>(l&&R.connect(!0===l?S:l),R.connect(S),()=>void R.dispose()),[l,S,r,R,f]),a.useEffect(()=>{let e=e=>{f(),r&&C.regress(),c&&c(e)},t=e=>{u&&u(e)},n=e=>{d&&d(e)};return R.addEventListener("change",e),R.addEventListener("start",t),R.addEventListener("end",n),()=>{R.removeEventListener("start",t),R.removeEventListener("end",n),R.removeEventListener("change",e)}},[c,u,d,R,f,v]),a.useEffect(()=>{if(e){let e=T().controls;return E({controls:R}),()=>E({controls:e})}},[e,R]),a.createElement("primitive",(0,n.A)({ref:m,object:R,enableDamping:s},h))})},8381:(e,t,r)=>{r.d(t,{mK:()=>C,s0:()=>_,Pl:()=>g,fL:()=>y,Jp:()=>S,bt:()=>b,fE:()=>B});var n=r(5155),i=r(2115),a=r(7548),o=r(99),s=r(3303);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}new a.Vector2,new a.Vector2;function c(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}var u=function e(t,r,n){var i=this;c(this,e),l(this,"dot2",function(e,t){return i.x*e+i.y*t}),l(this,"dot3",function(e,t,r){return i.x*e+i.y*t+i.z*r}),this.x=t,this.y=r,this.z=n},d=[new u(1,1,0),new u(-1,1,0),new u(1,-1,0),new u(-1,-1,0),new u(1,0,1),new u(-1,0,1),new u(1,0,-1),new u(-1,0,-1),new u(0,1,1),new u(0,-1,1),new u(0,1,-1),new u(0,-1,-1)],h=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],m=Array(512),f=Array(512);!function(e){e>0&&e<1&&(e*=65536),(e=Math.floor(e))<256&&(e|=e<<8);for(var t,r=0;r<256;r++)t=1&r?h[r]^255&e:h[r]^e>>8&255,m[r]=m[r+256]=t,f[r]=f[r+256]=d[t%12]}(0);function p(e){var t=function(e){if("number"==typeof e)e=Math.abs(e);else if("string"==typeof e){var t=e;e=0;for(var r=0;r<t.length;r++)e=(e+(r+1)*(t.charCodeAt(r)%96))%0x7fffffff}return 0===e&&(e=311),e}(e);return function(){var e=48271*t%0x7fffffff;return t=e,e/0x7fffffff}}new function e(t){var r=this;c(this,e),l(this,"seed",0),l(this,"init",function(e){r.seed=e,r.value=p(e)}),l(this,"value",p(this.seed)),this.init(t)}(Math.random());a.BufferGeometry;r(1948);let g=(0,i.createContext)(null),A=e=>(2&e.getAttributes())==2,_=(0,i.memo)((0,i.forwardRef)(({children:e,camera:t,scene:r,resolutionScale:l,enabled:c=!0,renderPriority:u=1,autoClear:d=!0,depthBuffer:h,enableNormalPass:m,stencilBuffer:f,multisampling:p=8,frameBufferType:_=a.HalfFloatType},v)=>{let{gl:E,scene:T,camera:C,size:y}=(0,o.C)(),S=r||T,R=t||C,[b,B,I]=(0,i.useMemo)(()=>{let e=new s.s0(E,{depthBuffer:h,stencilBuffer:f,multisampling:p,frameBufferType:_});e.addPass(new s.AH(S,R));let t=null,r=null;return m&&((r=new s.Xe(S,R)).enabled=!1,e.addPass(r),void 0!==l&&((t=new s.SP({normalBuffer:r.texture,resolutionScale:l})).enabled=!1,e.addPass(t))),[e,r,t]},[R,E,h,f,p,_,S,m,l]);(0,i.useEffect)(()=>b?.setSize(y.width,y.height),[b,y]),(0,o.D)((e,t)=>{if(c){let e=E.autoClear;E.autoClear=d,f&&!d&&E.clearStencil(),b.render(t),E.autoClear=e}},c?u:0);let w=(0,i.useRef)(null);(0,i.useLayoutEffect)(()=>{let e=[],t=w.current.__r3f;if(t&&b){let r=t.children;for(let t=0;t<r.length;t++){let n=r[t].object;if(n instanceof s.Mj){let i=[n];if(!A(n)){let e=null;for(;(e=r[t+1]?.object)instanceof s.Mj&&!A(e);)i.push(e),t++}let a=new s.Vu(R,...i);e.push(a)}else n instanceof s.oF&&e.push(n)}for(let t of e)b?.addPass(t);B&&(B.enabled=!0),I&&(I.enabled=!0)}return()=>{for(let t of e)b?.removePass(t);B&&(B.enabled=!1),I&&(I.enabled=!1)}},[b,e,R,B,I]),(0,i.useEffect)(()=>{let e=E.toneMapping;return E.toneMapping=a.NoToneMapping,()=>{E.toneMapping=e}},[E]);let x=(0,i.useMemo)(()=>({composer:b,normalPass:B,downSamplingPass:I,resolutionScale:l,camera:R,scene:S}),[b,B,I,l,R,S]);return(0,i.useImperativeHandle)(v,()=>b,[b]),(0,n.jsx)(g.Provider,{value:x,children:(0,n.jsx)("group",{ref:w,children:e})})})),v=0,E=new WeakMap,T=(e,t)=>function({blendFunction:r=t?.blendFunction,opacity:a=t?.opacity,...s}){let l=E.get(e);if(!l){let t=`@react-three/postprocessing/${e.name}-${v++}`;(0,o.e)({[t]:e}),E.set(e,l=t)}let c=(0,o.C)(e=>e.camera),u=i.useMemo(()=>[...t?.args??[],...s.args??[{...t,...s}]],[JSON.stringify(s)]);return(0,n.jsx)(l,{camera:c,"blendMode-blendFunction":r,"blendMode-opacity-value":a,...s,args:u})};s.Mj;let C=T(s.bv,{blendFunction:0}),y=T(s.i,{blendFunction:5}),S=(s.hH,T(s.eF));var R=(e=>(e[e.Linear=0]="Linear",e[e.Radial=1]="Radial",e[e.MirroredLinear=2]="MirroredLinear",e))(R||{});s.Mj;let b=T(s.i4),B=T(s.K1),I=(s.To,{fragmentShader:`

    // original shader by Evan Wallace

    #define MAX_ITERATIONS 100

    uniform float blur;
    uniform float taper;
    uniform vec2 start;
    uniform vec2 end;
    uniform vec2 direction;
    uniform int samples;

    float random(vec3 scale, float seed) {
        /* use the fragment position for a different seed per-pixel */
        return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
    }

    void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
        vec4 color = vec4(0.0);
        float total = 0.0;
        vec2 startPixel = vec2(start.x * resolution.x, start.y * resolution.y);
        vec2 endPixel = vec2(end.x * resolution.x, end.y * resolution.y);
        float f_samples = float(samples);
        float half_samples = f_samples / 2.0;

        // use screen diagonal to normalize blur radii
        float maxScreenDistance = distance(vec2(0.0), resolution); // diagonal distance
        float gradientRadius = taper * (maxScreenDistance);
        float blurRadius = blur * (maxScreenDistance / 16.0);

        /* randomize the lookup values to hide the fixed number of samples */
        float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
        vec2 normal = normalize(vec2(startPixel.y - endPixel.y, endPixel.x - startPixel.x));
        float radius = smoothstep(0.0, 1.0, abs(dot(uv * resolution - startPixel, normal)) / gradientRadius) * blurRadius;

        #pragma unroll_loop_start
        for (int i = 0; i <= MAX_ITERATIONS; i++) {
            if (i >= samples) { break; } // return early if over sample count
            float f_i = float(i);
            float s_i = -half_samples + f_i;
            float percent = (s_i + offset - 0.5) / half_samples;
            float weight = 1.0 - abs(percent);
            vec4 sample_i = texture2D(inputBuffer, uv + normalize(direction) / resolution * percent * radius);
            /* switch to pre-multiplied alpha to correctly blur transparent images */
            sample_i.rgb *= sample_i.a;
            color += sample_i * weight;
            total += weight;
        }
        #pragma unroll_loop_end

        outputColor = color / total;

        /* switch back from pre-multiplied alpha */
        outputColor.rgb /= outputColor.a + 0.00001;
    }
    `});s.Mj;s.Mj;s.Mj},8807:(e,t,r)=>{e.exports=r(7719)},8828:(e,t,r)=>{e.exports=r(3654)},8870:(e,t,r)=>{e.exports=r(1975)},8945:(e,t,r)=>{r.d(t,{A:()=>n});function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}},9914:(e,t,r)=>{e.exports=r(6451)}}]);