import{aQ as c,d5 as y,f9 as f,U as S,bk as l,eW as o,cn as R,a9 as m,gT as g,dc as p,dy as d}from"./index-BlI3-bLW.js";function J(a){const t=a.geometry,n=a.toJSON(),e=n;let s,r,i;return t!=null&&(r=t.spatialReference,i=o(r),e.geometryType=R(t),e.geometry=JSON.stringify(t),e.inSR=i),n.outSR?(e.outSR=o(n.outSR),s=a.outSpatialReference):t&&(e.outSR=e.inSR,s=r),e.bin&&(e.bin=JSON.stringify(e.bin)),e.quantizationParameters&&(e.quantizationParameters=JSON.stringify(e.quantizationParameters)),e.outStatistics&&(e.outStatistics=JSON.stringify(e.outStatistics)),e.outTimeReference&&(e.outTimeReference=JSON.stringify(e.outTimeReference)),a.defaultSpatialReference&&m(r,s)&&(e.defaultSR=e.inSR,delete e.inSR,delete e.outSR),e}async function N(a,t,n){return O(a,t,n)}async function O(a,t,n={}){const e=typeof a=="string"?c(a):a,s=t.geometry?[t.geometry]:[],r=await y(s,null,{signal:n.signal}),i=r==null?void 0:r[0];i!=null&&((t=t.clone()).geometry=i);const u=f({...e.query,f:"json",...J(t)});return S(l(e.path,"queryBins"),{...n,query:{...u,...n.query}})}async function T(a,t,n){const{data:e}=await N(p(a),g.from(t),n);return d.fromJSON(e)}export{T as executeBinsQuery};
//# sourceMappingURL=executeBinsQuery-C4OBYv6w.js.map
