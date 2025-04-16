import{timeZones as b}from"./time-zones-2baacc2d-ymzAOVTt.js";import{extractRegion as p}from"./region-ffaa69eb-4ZC4bVZm.js";import"./index-p4VH55K1-b928be86-CGe-ptQF.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const u=n=>n.map(o=>{const{label:a}=o,t=p(a);return{...o,continent:t}});async function v(){const n=[],o=b.map(t=>({label:t})),a=u(o);for(const t of a){const{label:e,continent:l}=t;if(t.visited)continue;t.visited=!0;const i={label:l,tzs:[{label:e}]};for(const r of a.filter(s=>!s.visited)){const{label:s,continent:c}=r;if(l===c){const m={label:s};i.tzs.push(m),r.visited=!0}}n.push(i)}return n.map(t=>(t.tzs=t.tzs.sort((e,l)=>e.label.localeCompare(l.label)),{label:t.label,tzs:t.tzs.map(e=>e.label)})).sort((t,e)=>t.label.localeCompare(e.label))}export{v as groupByRegion};
//# sourceMappingURL=index-24ae0bc4-Dnm3teax.js.map
