import{I as Y,w as v,jg as rt,aK as nt,aN as M,ho as ot,cO as $,fv as q,s as at,fG as ct,eV as ht,ga as ft}from"./index-Club40b3.js";import{N as ut,T as lt}from"./quat-B2H-09EB.js";import{r as mt,t as pt,e as dt}from"./quatf64-aQ5IuZRd.js";import{o as O,c as j,_ as _t,A as gt,H as K}from"./vec32-Aogwsubb.js";import{m as wt}from"./SceneLayer-v7yFzNxK.js";import{B as At}from"./vertexSpaceConversion-BGrOVcyV.js";import{C as d,D as b}from"./enums-Dk3osxpS.js";import{r as U}from"./resourceUtils-oo4xkgHi.js";import"./mat3f64-q3fE-ZOt.js";import"./MultiOriginJSONSupport-BEThRq27.js";import"./MeshTransform-DrbYjye5.js";import"./mat4f64-CSKppSlJ.js";import"./imageUtils-BYD0O-xd.js";import"./MeshVertexAttributes-CeE3R2Xo.js";import"./MeshLocalVertexSpace-ByQayPtb.js";import"./meshVertexSpaceUtils-D6nNPPQ9.js";import"./earcut-D9gy186-.js";import"./Indices-ClEu9ci1.js";import"./plane-CJUeklZq.js";import"./deduplicate-DF_08fcC.js";import"./projectPointToVector-DnOU-ij9.js";import"./spatialReferenceEllipsoidUtils-Bn5mK_Rv.js";import"./computeTranslationToOriginAndRotation-h-7E_X_V.js";import"./vec3-Cf933MCZ.js";import"./External-BvJLTbMY.js";import"./infoFor3D-CxdEiWhp.js";import"./mat3-DrMmd9ov.js";import"./meshSpatialReferenceScaleUtils-D5pitqTF.js";import"./APIKeyMixin-CygWNKme.js";import"./ArcGISService-Nvh9xVH1.js";import"./CustomParametersMixin-CWS7gQZS.js";import"./EditBusLayer-CuqbZRUQ.js";import"./uuid-Cl5lrJ4c.js";import"./OperationalLayer-Bg1GjXra.js";import"./commonProperties-C7qVnWA0.js";import"./PortalLayer-CB5zFuuX.js";import"./portalItemUtils-BFPvV2jZ.js";import"./SceneService-CeKHfG8q.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./HeightModelInfo-CyeP0S36.js";import"./jsonContext-BI9PU4gF.js";import"./resourceUtils-gGUNxE-o.js";import"./resourceUtils-CsnNz3Gn.js";import"./saveUtils-DzhlDo8E.js";import"./TemporalLayer-alZzuFqB.js";import"./TimeInfo-DkMYd3l4.js";import"./associatedFeatureServiceUtils-CBq2ED0n.js";import"./capabilities-D6exRNM4.js";import"./featureLayerUtils-DGP_qgKj.js";import"./FeatureReductionSelection-kviuNazU.js";import"./fieldProperties-BzPjeRbS.js";import"./I3SLayerDefinitions-mTKmhHxm.js";import"./labelingInfo-BYGFQ--y.js";import"./labelUtils-9UeHmwQ0.js";import"./LayerFloorInfo-CON6ZVex.js";import"./fetchService-Bjy9W1Mn.js";import"./persistable-DlUHgDaK.js";import"./MD5-C9MwAd2G.js";import"./resourceExtension-ByCmEpyF.js";import"./styleUtils-DYnR3WAv.js";import"./elevationInfoUtils-DCMXLaoE.js";import"./popupUtils-UvwxK4SE.js";import"./I3SUtil-Cni9tsdr.js";import"./projectVectorToVector-C98D5e7p.js";import"./sphere-CpXVSZcl.js";import"./I3SBinaryReader-CIQa7PbN.js";import"./VertexAttribute-BdZWZuT1.js";import"./floatRGBA-DE1VP_4t.js";import"./NormalAttribute.glsl-CmOtKs__.js";import"./interfaces-DDtDqZYj.js";import"./BindType-BmZEZMMh.js";import"./orientedBoundingBox-CfBJc7LD.js";import"./ViewingMode-dBUh39ak.js";import"./popupUtils-BfHjBcJF.js";import"./BufferView-BPSRUvGH.js";import"./vec4-Bn_0q4s2.js";import"./basicInterfaces-CZwQPxTp.js";function Tt(i){const t=tt(i);return t!=null?t.toDataURL():""}async function J(i,t){const e=tt(i);if(e==null)throw new Y("imageToArrayBuffer","Unsupported image type");const s=bt(i),r=await new Promise(o=>e.toBlob(o,s));if(v(t),!r)throw new Y("imageToArrayBuffer","Failed to encode image");const n=await r.arrayBuffer();return v(t),{data:n,type:s}}function bt(i){if(!(i instanceof HTMLImageElement))return"image/png";const t=i.src;if(rt(t)){const e=nt(t);return(e==null?void 0:e.mediaType)==="image/jpeg"?e.mediaType:"image/png"}return/\.png$/i.test(t)?"image/png":/\.(jpg|jpeg)$/i.test(t)?"image/jpeg":"image/png"}function tt(i){if(i instanceof HTMLCanvasElement)return i;if(i instanceof HTMLVideoElement)return null;const t=document.createElement("canvas");t.width=i.width,t.height=i.height;const e=t.getContext("2d");return i instanceof HTMLImageElement?e.drawImage(i,0,0,i.width,i.height):i instanceof ImageData&&e.putImageData(i,0,0),t}function Et(i){const t=[],e=new Uint8Array(i);for(let s=0;s<e.length;s++)t.push(String.fromCharCode(e[s]));return"data:application/octet-stream;base64,"+btoa(t.join(""))}function yt(i){if(i.byteLength<8)return!1;const t=new Uint8Array(i);return t[0]===137&&t[1]===80&&t[2]===78&&t[3]===71&&t[4]===13&&t[5]===10&&t[6]===26&&t[7]===10}var L;(function(i){i[i.JSON=1313821514]="JSON",i[i.BIN=5130562]="BIN"})(L||(L={}));let I=class N{constructor(t,e){if(!t)throw new Error("GLB requires a JSON gltf chunk");this._length=N.HEADER_SIZE,this._length+=N.CHUNK_HEADER_SIZE;const s=xt(t);if(this._length+=W(s.byteLength,4),e&&(this._length+=N.CHUNK_HEADER_SIZE,this._length+=e.byteLength,e.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this._length),this._outView=new DataView(this.buffer),this._writeHeader();const r=this._writeChunk(s,12,L.JSON,32);e&&this._writeChunk(e,r,L.BIN)}_writeHeader(){this._outView.setUint32(0,N.MAGIC,!0),this._outView.setUint32(4,N.VERSION,!0),this._outView.setUint32(8,this._length,!0)}_writeChunk(t,e,s,r=0){const n=W(t.byteLength,4);for(this._outView.setUint32(e,n,!0),this._outView.setUint32(e+=4,s,!0),Rt(this._outView.buffer,t,e+=4,0,t.byteLength),e+=t.byteLength;e%4;)r&&this._outView.setUint8(e,r),e++;return e}};function Rt(i,t,e,s,r){new Uint8Array(i,e,r).set(new Uint8Array(t,s,r),0)}function xt(i){return new TextEncoder().encode(i).buffer}function W(i,t){return t*Math.ceil(i/t)}I.HEADER_SIZE=12,I.CHUNK_HEADER_SIZE=8,I.MAGIC=1179937895,I.VERSION=2;var R,E,y,w,X,B,Z;(function(i){i[i.External=0]="External",i[i.DataURI=1]="DataURI",i[i.GLB=2]="GLB"})(R||(R={})),function(i){i[i.External=0]="External",i[i.DataURI=1]="DataURI",i[i.GLB=2]="GLB"}(E||(E={})),function(i){i[i.ARRAY_BUFFER=34962]="ARRAY_BUFFER",i[i.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(y||(y={})),function(i){i.SCALAR="SCALAR",i.VEC2="VEC2",i.VEC3="VEC3",i.VEC4="VEC4",i.MAT2="MAT2",i.MAT3="MAT3",i.MAT4="MAT4"}(w||(w={})),function(i){i[i.POINTS=0]="POINTS",i[i.LINES=1]="LINES",i[i.LINE_LOOP=2]="LINE_LOOP",i[i.LINE_STRIP=3]="LINE_STRIP",i[i.TRIANGLES=4]="TRIANGLES",i[i.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",i[i.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(X||(X={})),function(i){i.OPAQUE="OPAQUE",i.MASK="MASK",i.BLEND="BLEND"}(B||(B={})),function(i){i[i.NoColor=0]="NoColor",i[i.FaceColor=1]="FaceColor",i[i.VertexColor=2]="VertexColor"}(Z||(Z={}));let Nt=class{constructor(t,e,s,r,n){this._buffer=t,this._componentType=s,this._dataType=r,this._data=[],this._isFinalized=!1,this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,e.bufferViews||(e.bufferViews=[]),this.index=e.bufferViews.length,this._bufferView={buffer:t.index,byteLength:-1,target:n};const o=this._getElementSize();o>=4&&n!==y.ELEMENT_ARRAY_BUFFER&&(this._bufferView.byteStride=o),e.bufferViews.push(this._bufferView),this._numComponentsForDataType=this._calculateNumComponentsForDataType()}push(t){const e=this._data.length;if(this._data.push(t),this._accessorIndex>=0){const s=e%this._numComponentsForDataType,r=this._accessorMin[s];this._accessorMin[s]=typeof r!="number"?t:Math.min(r,t);const n=this._accessorMax[s];this._accessorMax[s]=typeof n!="number"?t:Math.max(n,t)}}get dataSize(){return this._data.length*this._sizeComponentType()}get byteSize(){function t(e,s){return s*Math.ceil(e/s)}return t(this.dataSize,4)}getByteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}get byteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}_createTypedArray(t,e){switch(this._componentType){case d.BYTE:return new Int8Array(t,e);case d.FLOAT:return new Float32Array(t,e);case d.SHORT:return new Int16Array(t,e);case d.UNSIGNED_BYTE:return new Uint8Array(t,e);case d.UNSIGNED_INT:return new Uint32Array(t,e);case d.UNSIGNED_SHORT:return new Uint16Array(t,e)}}writeOutToBuffer(t,e){this._createTypedArray(t,e).set(this._data)}writeAsync(t){if(this._asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this._asyncWritePromise=t.then(e=>{const s=new Uint8Array(e);for(let r=0;r<s.length;++r)this._data.push(s[r]);delete this._asyncWritePromise}),this._asyncWritePromise}startAccessor(t){if(this._accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this._accessorIndex=this._data.length,this._accessorAttribute=t;const e=this._numComponentsForDataType;this._accessorMin=new Array(e),this._accessorMax=new Array(e)}endAccessor(){if(this._accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const t=this._getElementSize(),e=this._numComponentsForDataType,s=(this._data.length-this._accessorIndex)/e;if(s%1)throw new Error("An accessor was ended with missing component values");for(let n=0;n<this._accessorMin.length;++n)typeof this._accessorMin[n]!="number"&&(this._accessorMin[n]=0),typeof this._accessorMax[n]!="number"&&(this._accessorMax[n]=0);const r={byteOffset:t*(this._accessorIndex/e),componentType:this._componentType,count:s,type:this._dataType,min:this._accessorMin,max:this._accessorMax,name:this._accessorAttribute};switch(this._accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this._componentType){case d.UNSIGNED_BYTE:case d.UNSIGNED_SHORT:r.normalized=!0}}return this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,r}get finalized(){return this._finalizedPromise?this._finalizedPromise:this._isFinalized?this._finalizedPromise=Promise.resolve():this._finalizedPromise=new Promise(t=>this._finalizedPromiseResolve=t)}async finalize(){const t=this._bufferView,e=this._buffer.getViewFinalizePromises(this);this._asyncWritePromise&&e.push(this._asyncWritePromise),await Promise.allSettled(e),this._isFinalized=!0,t.byteOffset=this.getByteOffset(),t.byteLength=this.dataSize,this._finalizedPromiseResolve&&this._finalizedPromiseResolve()}_getElementSize(){return this._sizeComponentType()*this._numComponentsForDataType}_sizeComponentType(){switch(this._componentType){case d.BYTE:case d.UNSIGNED_BYTE:return 1;case d.SHORT:case d.UNSIGNED_SHORT:return 2;case d.UNSIGNED_INT:case d.FLOAT:return 4}}_calculateNumComponentsForDataType(){switch(this._dataType){case w.SCALAR:return 1;case w.VEC2:return 2;case w.VEC3:return 3;case w.VEC4:case w.MAT2:return 4;case w.MAT3:return 9;case w.MAT4:return 16}}},Q=class{constructor(t){this._gltf=t,this._bufferViews=[],this._isFinalized=!1,t.buffers||(t.buffers=[]),this.index=t.buffers.length;const e={byteLength:-1};t.buffers.push(e),this._buffer=e}addBufferView(t,e,s){if(this._finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const r=new Nt(this,this._gltf,t,e,s);return this._bufferViews.push(r),r}getByteOffset(t){let e=0;for(const s of this._bufferViews){if(s===t)return e;e+=s.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(t){const e=[];for(const s of this._bufferViews){if(t&&s===t)return e;e.push(s.finalized)}return e}getArrayBuffer(){if(!this._isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const t=this._getTotalSize(),e=new ArrayBuffer(t);let s=0;for(const r of this._bufferViews)r.writeOutToBuffer(e,s),s+=r.byteSize;return e}finalize(){if(this._finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this._finalizePromise=Promise.allSettled(this.getViewFinalizePromises()).then(()=>{this._isFinalized=!0;const t=this.getArrayBuffer();this._buffer.byteLength=t.byteLength,this._buffer.uri=t}),this._gltf.extras.promises.push(this._finalizePromise),this._finalizePromise}_getTotalSize(){let t=0;for(const e of this._bufferViews)t+=e.byteSize;return t}};function It(i,t){if(i.components)for(const e of i.components)e.faces&&e.shading==="smooth"&&Mt(e,t)}function Mt(i,t){t.normal==null&&(t.normal=new Float32Array(t.position.length));const e=i.faces,{position:s,normal:r}=t,n=e.length/3;for(let o=0;o<n;++o){const a=3*e[3*o],c=3*e[3*o+1],h=3*e[3*o+2],f=O(St,s[a],s[a+1],s[a+2]),T=O(Ot,s[c],s[c+1],s[c+2]),g=O(Lt,s[h],s[h+1],s[h+2]),p=j(T,T,f),l=j(g,g,f),m=_t(p,p,l);r[a]+=m[0],r[a+1]+=m[1],r[a+2]+=m[2],r[c]+=m[0],r[c+1]+=m[1],r[c+2]+=m[2],r[h]+=m[0],r[h+1]+=m[1],r[h+2]+=m[2]}for(let o=0;o<r.length;o+=3)O(x,r[o],r[o+1],r[o+2]),gt(x,x),r[o]=x[0],r[o+1]=x[1],r[o+2]=x[2]}const St=M(),Ot=M(),Lt=M(),x=M(),P=()=>at.getLogger("esri.geometry.support.meshUtils.exporters.gltf.gltf");class Bt{constructor(t,e){this.options=e,this._materialMap=new Array,this._imageMap=new Map,this._textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:t.copyright,generator:t.generator},extras:{output:e.output,binChunkBuffer:null,promises:[]}},this._addScenes(t)}_addScenes(t){this.gltf.scene=t.defaultScene;const e=this.gltf.extras,s=e.output.buffer===R.GLB||e.output.image===E.GLB;s&&(e.binChunkBuffer=new Q(this.gltf)),t.forEachScene(r=>{this._addScene(r)}),s&&e.binChunkBuffer.finalize()}_addScene(t){this.gltf.scenes||(this.gltf.scenes=[]);const e={};t.name&&(e.name=t.name),t.forEachNode(s=>{e.nodes||(e.nodes=[]),e.nodes.push(...this._addNodes(s))}),this.gltf.scenes.push(e)}_addNodes(t){this.gltf.nodes||(this.gltf.nodes=[]);const e={};t.name&&(e.name=t.name);const s=t.translation;K(s,ot)||(e.translation=$(s));const r=t.rotation;ut(r,mt)||(e.rotation=pt(r));const n=t.scale;K(n,q)||(e.scale=$(n));const o=this.gltf.nodes.length;if(this.gltf.nodes.push(e),t.mesh&&t.mesh.vertexAttributes.position){const a=this._createMeshes(t.mesh),c=[o];if(a.length===1)this._addMesh(e,a[0]);else for(const h of a){const f={};this._addMesh(f,h),c.push(this.gltf.nodes.length),this.gltf.nodes.push(f)}return c}return t.forEachNode(a=>{e.children||(e.children=[]),e.children.push(...this._addNodes(a))}),[o]}_addMesh(t,e){var r;(r=this.gltf).meshes??(r.meshes=[]);const s=this.gltf.meshes.length;this.gltf.meshes.push(e),t.mesh=s}_createMeshes(t){var k;const e=this.gltf.extras,s=e.output.buffer===R.GLB;let r;r=s?e.binChunkBuffer:new Q(this.gltf);const n=this.options.origin,o=t.vertexSpace.clone();o.origin=[n.x,n.y,n.z??0];const a=At({vertexAttributes:t.vertexAttributes,vertexSpace:t.vertexSpace,transform:(k=this.options)!=null&&k.ignoreLocalTransform?null:t.transform,spatialReference:t.spatialReference},o,{targetUnit:this.options.unitConversionDisabled?void 0:"meters"});if(!a)return[];It(t,a),Ct(a);const{position:c,normal:h,tangent:f}=a,{uv:T,color:g}=t.vertexAttributes,p=r.addBufferView(d.FLOAT,w.VEC3,y.ARRAY_BUFFER);let l,m,_,A;h&&(l=r.addBufferView(d.FLOAT,w.VEC3,y.ARRAY_BUFFER)),T&&(m=r.addBufferView(d.FLOAT,w.VEC2,y.ARRAY_BUFFER)),f&&(_=r.addBufferView(d.FLOAT,w.VEC4,y.ARRAY_BUFFER)),g&&(A=r.addBufferView(d.UNSIGNED_BYTE,w.VEC4,y.ARRAY_BUFFER)),p.startAccessor("POSITION"),l&&l.startAccessor("NORMAL"),m&&m.startAccessor("TEXCOORD_0"),_&&_.startAccessor("TANGENT"),A&&A.startAccessor("COLOR_0");const st=a.position.length/3;for(let u=0;u<st;++u)p.push(c[3*u]),p.push(c[3*u+1]),p.push(c[3*u+2]),l&&h!=null&&(l.push(h[3*u]),l.push(h[3*u+1]),l.push(h[3*u+2])),m&&T!=null&&(m.push(T[2*u]),m.push(T[2*u+1])),_&&f!=null&&(_.push(f[4*u]),_.push(f[4*u+1]),_.push(f[4*u+2]),_.push(f[4*u+3])),A&&g!=null&&(A.push(g[4*u]),A.push(g[4*u+1]),A.push(g[4*u+2]),A.push(g[4*u+3]));const it=p.endAccessor(),H=this._addAccessor(p.index,it);let C,V,z,F,S;if(l){const u=l.endAccessor();C=this._addAccessor(l.index,u)}if(m){const u=m.endAccessor();V=this._addAccessor(m.index,u)}if(_){const u=_.endAccessor();z=this._addAccessor(_.index,u)}if(A){const u=A.endAccessor();F=this._addAccessor(A.index,u)}const D=[];return t.components&&t.components.length>0&&t.components[0].faces?(S=r.addBufferView(d.UNSIGNED_INT,w.SCALAR,y.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(S,t.components,D,H,C,V,z,F)):this._addMeshVertexNonIndexed(t.components,D,H,C,V,z,F),p.finalize(),l&&l.finalize(),m&&m.finalize(),_&&_.finalize(),S&&S.finalize(),A&&A.finalize(),s||r.finalize(),D}_addMaterial(t){if(t===null)return;const e=this._materialMap.indexOf(t);if(e!==-1)return e;this.gltf.materials||(this.gltf.materials=[]);const s={};switch(t.alphaMode){case"mask":s.alphaMode=B.MASK;break;case"auto":case"blend":s.alphaMode=B.BLEND}s.alphaCutoff=t.alphaCutoff,t.doubleSided&&(s.doubleSided=t.doubleSided),s.pbrMetallicRoughness={};const r=a=>a**2.1,n=a=>{const c=a.toRgba();return c[0]=r(c[0]/255),c[1]=r(c[1]/255),c[2]=r(c[2]/255),c};if(t.color!=null&&(s.pbrMetallicRoughness.baseColorFactor=n(t.color)),t.colorTexture!=null&&(s.pbrMetallicRoughness.baseColorTexture=this._createTextureInfo(t.colorTexture,t.colorTextureTransform)),t.normalTexture!=null&&(s.normalTexture=this._createTextureInfo(t.normalTexture,t.normalTextureTransform)),t instanceof wt){if(t.emissiveTexture!=null&&(s.emissiveTexture=this._createTextureInfo(t.emissiveTexture,t.emissiveTextureTransform)),t.emissiveColor!=null){const a=n(t.emissiveColor);s.emissiveFactor=[a[0],a[1],a[2]]}t.occlusionTexture!=null&&(s.occlusionTexture=this._createTextureInfo(t.occlusionTexture,t.occlusionTextureTransform)),t.metallicRoughnessTexture!=null&&(s.pbrMetallicRoughness.metallicRoughnessTexture=this._createTextureInfo(t.metallicRoughnessTexture,t.metallicRoughnessTextureTransform)),s.pbrMetallicRoughness.metallicFactor=t.metallic,s.pbrMetallicRoughness.roughnessFactor=t.roughness}else s.pbrMetallicRoughness.metallicFactor=1,s.pbrMetallicRoughness.roughnessFactor=1,P().warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");const o=this.gltf.materials.length;return this.gltf.materials.push(s),this._materialMap.push(t),o}_createTextureInfo(t,e){const s={index:this._addTexture(t)};return e&&(s.extensions||(s.extensions={}),s.extensions.KHR_texture_transform={scale:e.scale,offset:e.offset,rotation:ct(e.rotation)}),s}_addTexture(t){const e=this.gltf.textures??[];return this.gltf.textures=e,ht(this._textureMap,t,()=>{const s={sampler:this._addSampler(t),source:this._addImage(t)},r=e.length;return e.push(s),r})}_addImage(t){const e=this._imageMap.get(t);if(e!=null)return e;this.gltf.images||(this.gltf.images=[]);const s={};if(t.url)s.uri=t.url;else{const n=t.data;s.extras=n;for(let a=0;a<this.gltf.images.length;++a)if(n===this.gltf.images[a].extras)return a;const o=this.gltf.extras;switch(o.output.image){case E.GLB:{const a=o.binChunkBuffer.addBufferView(d.UNSIGNED_BYTE,w.SCALAR);if(U(n))n.data!=null&&a.writeOutToBuffer(n.data,0);else{const c=J(n,this.options.signal).then(({data:h,type:f})=>(s.mimeType=f,h));o.promises.push(a.writeAsync(c).then(()=>{a.finalize()}))}s.bufferView=a.index;break}case E.DataURI:if(U(n)){P().warnOnce("Image export for basis compressed textures not available.");break}s.uri=Tt(n);break;default:if(U(n)){P().warnOnce("Image export for basis compressed textures not available.");break}o.promises.push(J(n,this.options.signal).then(({data:a,type:c})=>{s.uri=a,s.mimeType=c}))}}const r=this.gltf.images.length;return this.gltf.images.push(s),this._imageMap.set(t,r),r}_addSampler(t){this.gltf.samplers||(this.gltf.samplers=[]);let e=b.REPEAT,s=b.REPEAT;if(typeof t.wrap=="string")switch(t.wrap){case"clamp":e=b.CLAMP_TO_EDGE,s=b.CLAMP_TO_EDGE;break;case"mirror":e=b.MIRRORED_REPEAT,s=b.MIRRORED_REPEAT}else{switch(t.wrap.vertical){case"clamp":s=b.CLAMP_TO_EDGE;break;case"mirror":s=b.MIRRORED_REPEAT}switch(t.wrap.horizontal){case"clamp":e=b.CLAMP_TO_EDGE;break;case"mirror":e=b.MIRRORED_REPEAT}}const r={wrapS:e,wrapT:s};for(let o=0;o<this.gltf.samplers.length;++o)if(JSON.stringify(r)===JSON.stringify(this.gltf.samplers[o]))return o;const n=this.gltf.samplers.length;return this.gltf.samplers.push(r),n}_addAccessor(t,e){this.gltf.accessors||(this.gltf.accessors=[]);const s={bufferView:t,byteOffset:e.byteOffset,componentType:e.componentType,count:e.count,type:e.type,min:e.min,max:e.max,name:e.name};e.normalized&&(s.normalized=!0);const r=this.gltf.accessors.length;return this.gltf.accessors.push(s),r}_addMeshVertexIndexed(t,e,s,r,n,o,a,c){const h=new Map;for(const f of e){t.startAccessor("INDICES");for(let l=0;l<f.faces.length;++l)t.push(f.faces[l]);const T=t.endAccessor(),g={attributes:{POSITION:r},indices:this._addAccessor(t.index,T),material:this._addMaterial(f.material)};n&&f.shading!=="flat"&&(g.attributes.NORMAL=n),o&&(g.attributes.TEXCOORD_0=o),a&&f.shading!=="flat"&&(g.attributes.TANGENT=a),c&&(g.attributes.COLOR_0=c);const p=h.get(f.name);if(p)p.primitives.push(g);else{const l={name:f.name,primitives:[g]};h.set(f.name,l),s.push(l)}}}_addMeshVertexNonIndexed(t,e,s,r,n,o,a){const c={primitives:[]};e.push(c);const h={attributes:{POSITION:s}};r&&(h.attributes.NORMAL=r),n&&(h.attributes.TEXCOORD_0=n),o&&(h.attributes.TANGENT=o),a&&(h.attributes.COLOR_0=a),t&&(h.material=this._addMaterial(t[0].material)),c.primitives.push(h)}}function Ct({position:i,normal:t,tangent:e}){G(i,3),G(t,3),G(e,4)}function G(i,t){if(i!=null)for(let e=1,s=2;e<i.length;e+=t,s+=t){const r=i[e],n=i[s];i[e]=n,i[s]=-r}}class Vt{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(t){if(this._scenes.includes(t))throw new Error("Scene already added");this._scenes.push(t)}removeScene(t){ft(this._scenes,t)}forEachScene(t){this._scenes.forEach(t)}}class zt{constructor(){this.name="",this._nodes=[]}addNode(t){if(this._nodes.includes(t))throw new Error("Node already added");this._nodes.push(t)}forEachNode(t){this._nodes.forEach(t)}}class Ft{constructor(t){this.mesh=t,this.name="",this.translation=M(),this.rotation=dt(),this.scale=$(q),this._nodes=[]}addNode(t){if(this._nodes.includes(t))throw new Error("Node already added");this._nodes.push(t)}forEachNode(t){this._nodes.forEach(t)}set rotationAngles(t){lt(this.rotation,t[0],t[1],t[2])}}const Dt="model.gltf",et="model.glb";async function Ut(i,t){var f,T;const e=new Bt(i,t).gltf,s=e.extras.promises;let r=1,n=1,o=null;await Promise.allSettled(s),v(t.signal);const a=t.jsonSpacing??4,c=new Map,h=JSON.stringify(e,(g,p)=>{var l,m;if(g!=="extras"){if(p instanceof ArrayBuffer){if(yt(p))switch((l=t.output)==null?void 0:l.image){case E.DataURI:case E.GLB:break;case E.External:default:{const _=`img${n}.png`;return n++,c.set(_,p),_}}switch((m=t.output)==null?void 0:m.buffer){case R.DataURI:return Et(p);case R.GLB:if(o)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(o=p);case R.External:default:{const _=`data${r}.bin`;return r++,c.set(_,p),_}}}return p}},a);return((f=t.output)==null?void 0:f.buffer)===R.GLB||((T=t.output)==null?void 0:T.image)===E.GLB?c.set(et,new I(h,o).buffer):c.set(Dt,h),c}async function Pt(i,t){const e=(await Ut(i,{output:{buffer:R.GLB,image:E.GLB},jsonSpacing:0,...t})).get(et);if(!(e&&e instanceof ArrayBuffer))throw new Error("failed to export to glb");return e}async function ls(i,t){const e=new Vt,s=new zt;return e.addScene(s),s.addNode(new Ft(i)),await Pt(e,{origin:i.origin,...t})}export{ls as toBinaryGLTF};
//# sourceMappingURL=gltfexport-DFzygrcJ.js.map
