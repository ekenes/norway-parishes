import{E as g}from"./BufferObject-Bm6PoPv6.js";import{r as c}from"./Program-ByQcdSYQ.js";import{x as j,s as F}from"./Program-ByQcdSYQ.js";import"./index-BSR5w7Gk.js";import{t as p}from"./NestedMap-GuqgquCN.js";import{e as O,a as P}from"./ProgramTemplate-62S2gE2Y.js";import{m as A}from"./Texture-BUx2hr-Y.js";import{o as q}from"./VertexArrayObject-CJZVHOmQ.js";import"./enums-Dk3osxpS.js";class d{constructor(e){this._rctx=e,this._store=new p}dispose(){this._store.forAll(e=>e.dispose()),this._store.clear()}acquire(e,t,o,n){const r=this._store.get(e,t);if(r!=null)return r.ref(),r;const s=new c(this._rctx,e,t,o,n);return s.ref(),this._store.set(e,t,s),s}get test(){}}function m(i){const{options:e,value:t}=i;return typeof e[t]=="number"}function b(i){let e="";for(const t in i){const o=i[t];if(typeof o=="boolean")o&&(e+=`#define ${t}
`);else if(typeof o=="number")e+=`#define ${t} ${o.toFixed()}
`;else if(typeof o=="object")if(m(o)){const{value:n,options:r,namespace:s}=o,f=s?`${s}_`:"";for(const a in r)e+=`#define ${f}${a} ${r[a].toFixed()}
`;e+=`#define ${t} ${f}${n}
`}else{const n=o.options;let r=0;for(const s in n)e+=`#define ${n[s]} ${(r++).toFixed()}
`;e+=`#define ${t} ${n[o.value]}
`}}return e}export{g as BufferObject,j as FramebufferObject,c as Program,d as ProgramCache,F as Renderbuffer,O as ShaderCompiler,A as Texture,q as VertexArrayObject,P as createProgram,b as glslifyDefineMap};
//# sourceMappingURL=webglDeps-nYPbknEp.js.map
