import{r as h,h as o,g as d}from"./index-CaYX07dN.js";import{e as m}from"./dom-b6dedd88-CWlTYAyV.js";import{i as u,h as f}from"./utils-3daeffe5-woILbvgM.js";import"./guid-9c230b6a-BxSjQh8J.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const c={thumbnail:"thumbnail",background:"background",initials:"initials",icon:"icon"};function b(e){e=g(e);let t=0;for(let a=0;a<e.length;a++)t=e.charCodeAt(a)+((t<<5)-t);let i="#";for(let a=0;a<3;a++){const r=t>>a*8&255;i+=("00"+r.toString(16)).substr(-2)}return i}function g(e){const t=Math.floor(e.length/2),i=e.split("").reverse().join("");return i.substring(t)+i.slice(0,t)}function v(e){let{r:t,g:i,b:a}=e;t/=255,i/=255,a/=255;const r=Math.max(t,i,a),n=Math.min(t,i,a),l=r-n;if(r===n)return 0;let s=(r+n)/2;switch(r){case t:s=(i-a)/l+(i<a?6:0);break;case i:s=(a-t)/l+2;break;case a:s=(t-i)/l+4;break}return Math.round(s*60)}function k(e){return v(f(e))}const p=":host{display:inline-block;overflow:hidden;border-radius:var(--calcite-avatar-corner-radius, 50%);color:var(--calcite-avatar-color, var(--calcite-color-text-2))}:host([scale=s]){block-size:1.5rem;inline-size:1.5rem;font-size:var(--calcite-font-size--3)}:host([scale=m]){block-size:2rem;inline-size:2rem;font-size:var(--calcite-font-size--2)}:host([scale=l]){block-size:2.75rem;inline-size:2.75rem;font-size:var(--calcite-font-size-0)}.icon{display:flex}.background{display:flex;block-size:100%;inline-size:100%;align-items:center;justify-content:center;border-radius:var(--calcite-avatar-corner-radius, 50%)}.initials{font-weight:var(--calcite-font-weight-bold);text-transform:uppercase}.thumbnail{block-size:100%;inline-size:100%;border-radius:var(--calcite-avatar-corner-radius, 50%)}:host([hidden]){display:none}[hidden]{display:none}",z=p,x=class{constructor(e){h(this,e),this.scale="m",this.thumbnail=void 0,this.fullName=void 0,this.username=void 0,this.userId=void 0,this.label=void 0,this.thumbnailFailedToLoad=!1}render(){return this.determineContent()}determineContent(){if(this.thumbnail&&!this.thumbnailFailedToLoad)return o("img",{alt:this.label||"",class:c.thumbnail,onError:()=>this.thumbnailFailedToLoad=!0,src:this.thumbnail});const e=this.generateInitials(),t=this.generateFillColor();return o("span",{"aria-label":this.label||this.fullName,class:c.background,role:"figure",style:{backgroundColor:t}},e?o("span",{"aria-hidden":"true",class:c.initials},e):o("calcite-icon",{class:c.icon,icon:"user",scale:this.scale}))}generateFillColor(){const{userId:e,username:t,fullName:i,el:a}=this,r=m(a),n=e&&`#${e.substr(e.length-6)}`,l=t||i||"",s=n&&u(n)?n:b(l);return!e&&!l||!u(s)?"var(--calcite-avatar-background-color, var(--calcite-color-foreground-2))":`var(--calcite-avatar-background-color, hsl(${k(s)}, 60%, ${r==="dark"?20:90}%))`}generateInitials(){const{fullName:e,username:t}=this;return e?e.trim().split(" ").map(i=>i.substring(0,1)).join(""):t?t.substring(0,2):!1}get el(){return d(this)}};x.style=z;export{x as calcite_avatar};
//# sourceMappingURL=calcite-avatar.entry-By1Up6f0.js.map
