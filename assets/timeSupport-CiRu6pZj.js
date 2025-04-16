const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/geometryEngineJSON-Bts7Yptq.js","assets/geometryEngineBase-B0ZyeKAX.js","assets/_commonjsHelpers-DCkdB7M8.js","assets/index-BlI3-bLW.js","assets/index-DQ5T3qjA.css"])))=>i.map(i=>d[i]);
import{bn as G,j3 as D,j4 as Z,bo as v,dg as $,j5 as J,j6 as W,I as b,ct as O,ck as k,_ as H,cn as K}from"./index-BlI3-bLW.js";import{h as L,U as z,H as B,$ as Q,P as F,a as M,I as X,K as q}from"./featureConversionUtils-BeHCc4sF.js";const j=new G,ee=new G,w=new G,R={esriGeometryPoint:F,esriGeometryPolyline:Q,esriGeometryPolygon:B,esriGeometryMultipoint:z};function Te(e,t,n,i=e.hasZ,s=e.hasM){if(t==null)return null;const r=e.hasZ&&i,l=e.hasM&&s;if(n){const u=M(w,t,e.hasZ,e.hasM,"esriGeometryPoint",n,i,s);return F(u,r,l)}return F(t,r,l)}function E(e,t,n,i,s,r,l=t,u=n){var f,p,m;const o=t&&l,a=n&&u,c=i!=null?"coords"in i?i:i.geometry:null;if(c==null)return null;if(s){let I=L(ee,c,t,n,e,s,l,u);return r&&(I=M(w,I,o,a,e,r)),((f=R[e])==null?void 0:f.call(R,I,o,a))??null}if(r){const I=M(w,c,t,n,e,r,l,u);return((p=R[e])==null?void 0:p.call(R,I,o,a))??null}return X(j,c,t,n,l,u),((m=R[e])==null?void 0:m.call(R,j,o,a))??null}function Ge(e){return e&&C in e?JSON.parse(JSON.stringify(e,te)):e}const C="_geVersion",te=(e,t)=>e!==C?t:void 0;function A(e,t){return e?t?4:3:t?3:2}function Pe(e,t,n,i){if(!(t!=null&&t.lengths.length))return null;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const s=e.coords,r=[],l=n?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:u,coords:o}=t,a=A(n,i);let c=0;for(const f of u){const p=re(l,o,c,f,n,i);p&&r.push(p),c+=f*a}if(r.sort((f,p)=>{let m=f[2]-p[2];return m===0&&n&&(m=f[4]-p[4]),m}),r.length){let f=6*r[0][2];s[0]=r[0][0]/f,s[1]=r[0][1]/f,n&&(f=6*r[0][4],s[2]=f!==0?r[0][3]/f:0),(s[0]<l[0]||s[0]>l[1]||s[1]<l[2]||s[1]>l[3]||n&&(s[2]<l[4]||s[2]>l[5]))&&(s.length=0)}if(!s.length){const f=t.lengths[0]?ne(o,0,u[0],n,i):null;if(!f)return null;s[0]=f[0],s[1]=f[1],n&&f.length>2&&(s[2]=f[2])}return e}function re(e,t,n,i,s,r){const l=A(s,r);let u=n,o=n+l,a=0,c=0,f=0,p=0,m=0;for(let S=0,P=i-1;S<P;S++,u+=l,o+=l){const h=t[u],N=t[u+1],g=t[u+2],y=t[o],d=t[o+1],Y=t[o+2];let T=h*d-y*N;p+=T,a+=(h+y)*T,c+=(N+d)*T,s&&(T=h*Y-y*g,f+=(g+Y)*T,m+=T),h<e[0]&&(e[0]=h),h>e[1]&&(e[1]=h),N<e[2]&&(e[2]=N),N>e[3]&&(e[3]=N),s&&(g<e[4]&&(e[4]=g),g>e[5]&&(e[5]=g))}if(p>0&&(p*=-1),m>0&&(m*=-1),!p)return null;const I=[a,c,.5*p];return s&&(I[3]=f,I[4]=.5*m),I}function ne(e,t,n,i,s){const r=A(i,s);let l=t,u=t+r,o=0,a=0,c=0,f=0;for(let p=0,m=n-1;p<m;p++,l+=r,u+=r){const I=e[l],S=e[l+1],P=e[l+2],h=e[u],N=e[u+1],g=e[u+2],y=i?ie(I,S,P,h,N,g):se(I,S,h,N);if(y)if(o+=y,i){const d=oe(I,S,P,h,N,g);a+=y*d[0],c+=y*d[1],f+=y*d[2]}else{const d=le(I,S,h,N);a+=y*d[0],c+=y*d[1]}}return o>0?i?[a/o,c/o,f/o]:[a/o,c/o]:n>0?i?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function se(e,t,n,i){const s=n-e,r=i-t;return Math.sqrt(s*s+r*r)}function ie(e,t,n,i,s,r){const l=i-e,u=s-t,o=r-n;return Math.sqrt(l*l+u*u+o*o)}function le(e,t,n,i){return[e+.5*(n-e),t+.5*(i-t)]}function oe(e,t,n,i,s,r){return[e+.5*(i-e),t+.5*(s-t),n+.5*(r-n)]}function ue(e){return e==="mesh"?D:Z(e)}function x(e,t){return e?t?4:3:t?3:2}function ae(e,t,n,i){return U(e,t,n,i.coords[0],i.coords[1])}function fe(e,t,n,i,s,r){const l=x(s,r),{coords:u,lengths:o}=i;if(!o)return!1;for(let a=0,c=0;a<o.length;a++,c+=l)if(!U(e,t,n,u[c],u[c+1]))return!1;return!0}function U(e,t,n,i,s){if(!e)return!1;const r=x(t,n),{coords:l,lengths:u}=e;let o=!1,a=0;for(const c of u)o=ce(o,l,r,a,c,i,s),a+=c*r;return o}function ce(e,t,n,i,s,r,l){let u=e,o=i;for(let a=i,c=i+s*n;a<c;a+=n){o=a+n,o===c&&(o=i);const f=t[a],p=t[a+1],m=t[o],I=t[o+1];(p<l&&I>=l||I<l&&p>=l)&&f+(l-p)/(I-p)*(m-f)<r&&(u=!u)}return u}const _="unsupported-query",pe={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},V={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultiPatch:!1,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultiPatch:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function Ie(e){return e!=null&&V.spatialRelationship[e]===!0}function me(e){return e!=null&&V.queryGeometry[K(e)]===!0}function he(e){return e!=null&&V.layerGeometry[e]===!0}function Ne(){return H(()=>import("./geometryEngineJSON-Bts7Yptq.js").then(e=>e.g),__vite__mapDeps([0,1,2,3,4]))}function Ee(e,t,n,i,s){if(v(t)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains")){const r=q(new G,t,!1,!1);return Promise.resolve(l=>ae(r,!1,!1,l))}if(v(t)&&n==="esriGeometryMultipoint"){const r=q(new G,t,!1,!1);if(e==="esriSpatialRelContains")return Promise.resolve(l=>fe(r,!1,!1,l,i,s))}if($(t)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains"))return Promise.resolve(r=>J(t,E(n,i,s,r)));if($(t)&&n==="esriGeometryMultipoint"&&e==="esriSpatialRelContains")return Promise.resolve(r=>W(t,E(n,i,s,r)));if($(t)&&e==="esriSpatialRelIntersects"){const r=ue(n);return Promise.resolve(l=>r(t,E(n,i,s,l)))}return Ne().then(r=>{const l=r[pe[e]].bind(null,t.spatialReference,t);return u=>l(E(n,i,s,u))})}async function $e(e,t,n){var r;const{spatialRel:i,geometry:s}=e;if(s){if(!Ie(i))throw new b(_,"Unsupported query spatial relationship",{query:e});if(O(s.spatialReference)&&O(n)){if(!me(s))throw new b(_,"Unsupported query geometry type",{query:e});if(!he(t))throw new b(_,"Unsupported layer geometry type",{query:e});if(e.outSR)return k((r=e.geometry)==null?void 0:r.spatialReference,e.outSR)}}}function be(e){if($(e))return!0;if(v(e)){for(const t of e.rings)if(t.length!==5||t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1;return!0}return!1}async function _e(e,t){if(!e)return null;const n=t.featureAdapter,{startTimeField:i,endTimeField:s}=e;let r=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY;if(i&&s)await t.forEach(u=>{const o=n.getAttribute(u,i),a=n.getAttribute(u,s);o==null||isNaN(o)||(r=Math.min(r,o)),a==null||isNaN(a)||(l=Math.max(l,a))});else{const u=i||s;await t.forEach(o=>{const a=n.getAttribute(o,u);a==null||isNaN(a)||(r=Math.min(r,a),l=Math.max(l,a))})}return{start:r,end:l}}function ve(e,t,n){var o;if(!t||!e)return null;const{startTimeField:i,endTimeField:s}=e;if(!i&&!s)return null;const{start:r,end:l}=t;if(r===null&&l===null)return null;if(r===void 0&&l===void 0)return de();const u=((o=n.getAttributeAsTimestamp)==null?void 0:o.bind(n))??n.getAttribute.bind(n);return i&&s?ye(u,i,s,r,l):ge(u,i||s,r,l)}function ye(e,t,n,i,s){return i!=null&&s!=null?r=>{const l=e(r,t),u=e(r,n);return(l==null||l<=s)&&(u==null||u>=i)}:i!=null?r=>{const l=e(r,n);return l==null||l>=i}:s!=null?r=>{const l=e(r,t);return l==null||l<=s}:void 0}function ge(e,t,n,i){return n!=null&&i!=null&&n===i?s=>e(s,t)===n:n!=null&&i!=null?s=>{const r=e(s,t);return r!=null&&r>=n&&r<=i}:n!=null?s=>{const r=e(s,t);return r!=null&&r>=n}:i!=null?s=>{const r=e(s,t);return r!=null&&r<=i}:void 0}function de(){return()=>!1}export{be as I,Ee as P,E as a,_e as b,Ge as h,Pe as n,ve as t,$e as v,Te as y};
//# sourceMappingURL=timeSupport-CiRu6pZj.js.map
