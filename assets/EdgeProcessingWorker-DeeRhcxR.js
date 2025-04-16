import{I as l}from"./InterleavedLayout-DrWQE2qb.js";import{f as p,u as c,p as u,E as f,m as d,d as g}from"./edgeProcessing-BTqv5JYq.js";import"./BufferView-BPSRUvGH.js";import"./index-Club40b3.js";import"./vec32-Aogwsubb.js";import"./types-D0PSWh4d.js";import"./Util-D8NyMqxH.js";import"./deduplicate-DF_08fcC.js";import"./Indices-ClEu9ci1.js";import"./VertexAttribute-BdZWZuT1.js";import"./glUtil-7Uu_SdzS.js";import"./enums-Dk3osxpS.js";import"./VertexElementDescriptor-BLyltQyJ.js";function a(t,e){return e.push(t.buffer),{buffer:t.buffer,layout:new l(t.layout)}}class T{async extract(e){const i=o(e),n=p(i),r=[i.data.buffer];return{result:m(n,r),transferList:r}}async extractComponentsEdgeLocations(e){const i=o(e),n=c(i.data,i.skipDeduplicate,i.indices,i.indicesLength),r=u(n,w),s=[];return{result:a(r.regular.instancesData,s),transferList:s}}async extractEdgeLocations(e){const i=o(e),n=c(i.data,i.skipDeduplicate,i.indices,i.indicesLength),r=u(n,L),s=[];return{result:a(r.regular.instancesData,s),transferList:s}}}function o(t){return{data:f.createView(t.dataBuffer),indices:t.indicesType==="Uint32Array"?new Uint32Array(t.indices):t.indicesType==="Uint16Array"?new Uint16Array(t.indices):t.indices,indicesLength:t.indicesLength,writerSettings:t.writerSettings,skipDeduplicate:t.skipDeduplicate}}function m(t,e){return e.push(t.regular.lodInfo.lengths.buffer),e.push(t.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:a(t.regular.instancesData,e),lodInfo:{lengths:t.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:a(t.silhouette.instancesData,e),lodInfo:{lengths:t.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:t.averageEdgeLength}}class h{allocate(e){return g.createBuffer(e)}trim(e,i){return e.slice(0,i)}write(e,i,n){e.position0.setVec(i,n.position0),e.position1.setVec(i,n.position1)}}class y{allocate(e){return d.createBuffer(e)}trim(e,i){return e.slice(0,i)}write(e,i,n){e.position0.setVec(i,n.position0),e.position1.setVec(i,n.position1),e.componentIndex.set(i,n.componentIndex)}}const L=new h,w=new y;export{T as default};
//# sourceMappingURL=EdgeProcessingWorker-DeeRhcxR.js.map
