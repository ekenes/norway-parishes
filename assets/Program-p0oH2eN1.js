import{d2 as j,s as Y}from"./index-BlI3-bLW.js";import{E as ue}from"./BufferObject-BbYHURCf.js";import{a as de,e as R,m as M,b as me,c as O}from"./Texture-BpDQ7iyl.js";import{V as p,X as T,G as I,U as _e,t as X,n as C,M as b,F as ge,A as pe,B as A,H as x}from"./enums-Dk3osxpS.js";let Qe=class{constructor(e,r,t=r){this.internalFormat=e,this.width=r,this.height=t,this.multisampled=!1,this.samples=1}};function xe(i){return i.width<=0||i.height<=0||i.internalFormat==null?0:i.width*i.height*de(i.internalFormat)}let Te=class{constructor(e,r){this._context=e,this._descriptor=r,this.type=R.RenderBuffer,this._context.instanceCounter.increment(p.Renderbuffer,this);const t=this._context.gl;this.glName=t.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:n,height:o,internalFormat:a,multisampled:l}=r;l?t.renderbufferStorageMultisample(t.RENDERBUFFER,this.samples,a,n,o):t.renderbufferStorage(t.RENDERBUFFER,a,n,o),this._context.bindRenderbuffer(null)}get descriptor(){return this._descriptor}get samples(){const e=this._descriptor.samples,r=this._context.parameters.maxSamples;return e?Math.min(e,r):r}get usedMemory(){return xe(this._descriptor)}resize(e,r){const t=this._descriptor;if(t.width===e&&t.height===r)return;t.width=e,t.height=r;const n=this._context.gl;this._context.bindRenderbuffer(this),t.multisampled?n.renderbufferStorageMultisample(n.RENDERBUFFER,this.samples,t.internalFormat,t.width,t.height):n.renderbufferStorage(n.RENDERBUFFER,t.internalFormat,t.width,t.height),this._context.bindRenderbuffer(null)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(p.Renderbuffer,this),this._context=null)}};const Ee=()=>Y.getLogger("esri.views.webgl.FramebufferObject");let be=class F{constructor(e,r,t=null){this._context=e,this._glName=null,this._colorAttachments=new Map,this._depthStencilBuffer=null,this._depthStencilTexture=null,this._initialized=!1,e.instanceCounter.increment(p.FramebufferObject,this);const n=w(r)?r:new M(this._context,r);if(this._colorAttachments.set(T.COLOR_ATTACHMENT0,n),this._validateTextureDescriptor(n.descriptor),this._validateColorAttachmentPoint(T.COLOR_ATTACHMENT0),t!=null)if(Ae(t))this._depthStencilTexture=w(t)?t:new M(this._context,t),this._validateTextureDescriptor(this._depthStencilTexture.descriptor);else{const o=Se(t)?t:new Te(this._context,t);this._depthStencilBuffer=o,this._validateRenderBufferDescriptor(o.descriptor)}}dispose(){var r,t;if(this._colorAttachments.size===0&&!this._glName)return;const e=this._context.getBoundFramebufferObject();this._colorAttachments.forEach((n,o)=>{var a;return(a=this.detachColorTexture(o))==null?void 0:a.dispose()}),(r=this.detachDepthStencilBuffer())==null||r.dispose(),(t=this.detachDepthStencilTexture())==null||t.dispose(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(e),this._context.instanceCounter.decrement(p.FramebufferObject,this)}get glName(){return this._glName}get colorTexture(){return this._colorAttachments.get(T.COLOR_ATTACHMENT0)}get depthStencil(){return this._depthStencilTexture||this._depthStencilBuffer}get depthStencilTexture(){return this._depthStencilTexture}get width(){var r;const e=this._colorAttachments.get(T.COLOR_ATTACHMENT0);return((r=e==null?void 0:e.descriptor)==null?void 0:r.width)??0}get height(){var r;const e=this._colorAttachments.get(T.COLOR_ATTACHMENT0);return((r=e==null?void 0:e.descriptor)==null?void 0:r.height)??0}get usedMemory(){var e;return[...this._colorAttachments].reduce((r,[t,n])=>r+n.usedMemory,((e=this.depthStencil)==null?void 0:e.usedMemory)??0)}getColorTexture(e){const r=this._colorAttachments.get(e);return r&&w(r)?r:null}get colorAttachments(){return[...this._colorAttachments.keys()]}attachColorTexture(e,r=T.COLOR_ATTACHMENT0){var n;if(!e)return;this._validateColorAttachmentPoint(r);const t=e.descriptor;this._validateTextureDescriptor(t),(n=this.detachColorTexture(r))==null||n.dispose(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,r)),this._colorAttachments.set(r,e)}detachColorTexture(e=T.COLOR_ATTACHMENT0){const r=this._colorAttachments.get(e);if(r){if(this._initialized){const t=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e),this._context.bindFramebuffer(t)}return this._colorAttachments.delete(e),r}}setColorTextureTarget(e,r=T.COLOR_ATTACHMENT0){const t=this._colorAttachments.get(r);t&&this._framebufferTexture2D(t.glName,r,e)}attachDepthStencil(e){if(e)switch(e.type){case R.Texture:return this._attachDepthStencilTexture(e);case R.RenderBuffer:return this._attachDepthStencilBuffer(e)}}_attachDepthStencilTexture(e){var t;if(e==null)return;const r=e.descriptor;r.pixelFormat!==I.DEPTH_STENCIL&&r.pixelFormat!==I.DEPTH24_STENCIL8&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),r.dataType!==_e.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._validateTextureDescriptor(r),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,X)),(t=this._depthStencilTexture)==null||t.dispose(),this._depthStencilTexture=e}detachDepthStencilTexture(){const e=this._depthStencilTexture;if(e&&this._initialized){const r=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),this._framebufferTexture2D(null,X),this._context.bindFramebuffer(r)}return this._depthStencilTexture=null,e}_attachDepthStencilBuffer(e){if(e==null)return;const r=e.descriptor;if(this._validateRenderBufferDescriptor(r),this._disposeDepthStencilAttachments(),this._initialized){this._context.bindFramebuffer(this);const t=this._context.gl,n=this._getGLAttachmentPoint(r);t.framebufferRenderbuffer(C.FRAMEBUFFER,n,t.RENDERBUFFER,e.glName)}this._depthStencilBuffer=e}detachDepthStencilBuffer(){const e=this._depthStencilBuffer;if(e&&this._initialized){const r=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this);const t=this._context.gl,n=this._getGLAttachmentPoint(e.descriptor);t.framebufferRenderbuffer(C.FRAMEBUFFER,n,t.RENDERBUFFER,null),this._context.bindFramebuffer(r)}return this._depthStencilBuffer=null,e}copyToTexture(e,r,t,n,o,a,l){(e<0||r<0||o<0||a<0)&&console.error("Offsets cannot be negative!"),(t<=0||n<=0)&&console.error("Copy width and height must be greater than zero!");const s=l.descriptor;l.descriptor.target!==b.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),((s==null?void 0:s.width)==null||(s==null?void 0:s.height)==null||e+t>this.width||r+n>this.height||o+t>s.width||a+n>s.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const c=this._context,h=c.bindTexture(l,M.TEXTURE_UNIT_FOR_UPDATES);c.setActiveTexture(M.TEXTURE_UNIT_FOR_UPDATES),c.bindFramebuffer(this),c.gl.copyTexSubImage2D(b.TEXTURE_2D,0,o,a,e,r,t,n),c.bindTexture(h,M.TEXTURE_UNIT_FOR_UPDATES)}readPixels(e,r,t,n,o,a,l){(t<=0||n<=0)&&console.error("Copy width and height must be greater than zero!"),l||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(e,r,t,n,o,a,l)}async readPixelsAsync(e,r,t,n,o,a,l){const{gl:s}=this._context,c=ue.createPixelPack(this._context,ge.STREAM_READ,l.byteLength);this._context.bindBuffer(c);const h=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),s.readPixels(e,r,t,n,o,a,0),this._context.unbindBuffer(pe.PIXEL_PACK_BUFFER),this._context.bindFramebuffer(h),await c.getSubDataAsync(l),c.dispose()}resize(e,r){var n,o;if(this.width===e&&this.height===r)return;const t={width:e,height:r};U(t,this._context.parameters.maxTextureSize),this._colorAttachments.forEach(a=>a.resize(t.width,t.height)),(n=this._depthStencilTexture)==null||n.resize(t.width,t.height),this._initialized&&(U(t,this._context.parameters.maxRenderbufferSize),(o=this._depthStencilBuffer)==null||o.resize(t.width,t.height),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1)}initializeAndBind(e=C.FRAMEBUFFER){const r=this._context.gl;if(this._initialized)return void r.bindFramebuffer(e,this.glName);this._glName&&r.deleteFramebuffer(this._glName);const t=r.createFramebuffer();if(r.bindFramebuffer(e,t),this._colorAttachments.forEach((n,o)=>this._framebufferTexture2D(n.glName,o,$(n),e)),this._depthStencilBuffer){const n=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);r.framebufferRenderbuffer(e,n,r.RENDERBUFFER,this._depthStencilBuffer.glName)}else this._depthStencilTexture&&this._framebufferTexture2D(this._depthStencilTexture.glName,r.DEPTH_STENCIL_ATTACHMENT,$(this._depthStencilTexture),e);me()&&r.checkFramebufferStatus(e)!==r.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=t,this._initialized=!0}_framebufferTexture2D(e,r=T.COLOR_ATTACHMENT0,t=b.TEXTURE_2D,n=C.FRAMEBUFFER,o=0){this._context.gl.framebufferTexture2D(n,r,t,e,o)}_disposeDepthStencilAttachments(){const e=this._context.gl;if(this._depthStencilBuffer){if(this._initialized){this._context.bindFramebuffer(this);const r=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);e.framebufferRenderbuffer(C.FRAMEBUFFER,r,e.RENDERBUFFER,null)}this._depthStencilBuffer=j(this._depthStencilBuffer)}this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture=j(this._depthStencilTexture))}_validateTextureDescriptor(e){e.target!==b.TEXTURE_2D&&e.target!==b.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),U(e,this._context.parameters.maxTextureSize),this._validateBufferDimensions(e)}_validateRenderBufferDescriptor(e){U(e,this._context.parameters.maxRenderbufferSize),this._validateBufferDimensions(e)}_validateBufferDimensions(e){e.width<=0&&(e.width=this.width),e.height<=0&&(e.height=this.height),this.width>0&&this.height>0&&(this.width===e.width&&this.height===e.height||console.error("Attachment size must match framebuffer size!"))}_getGLAttachmentPoint(e){switch(e.internalFormat){case A.DEPTH_COMPONENT16:case A.DEPTH_COMPONENT24:case A.DEPTH_COMPONENT32F:return this._context.gl.DEPTH_ATTACHMENT;case A.DEPTH24_STENCIL8:case A.DEPTH32F_STENCIL8:case A.DEPTH_STENCIL:return this._context.gl.DEPTH_STENCIL_ATTACHMENT;case A.STENCIL_INDEX8:return this._context.gl.STENCIL_ATTACHMENT}}_validateColorAttachmentPoint(e){if(F._MAX_COLOR_ATTACHMENTS===-1){const{gl:t}=this._context;F._MAX_COLOR_ATTACHMENTS=t.getParameter(t.MAX_COLOR_ATTACHMENTS)}const r=e-T.COLOR_ATTACHMENT0;r+1>F._MAX_COLOR_ATTACHMENTS&&Y.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${r+1}. Implementation supports up to ${F._MAX_COLOR_ATTACHMENTS} color attachments`)}};function w(i){return i!=null&&"type"in i&&i.type===R.Texture}function Se(i){return i!=null&&"type"in i&&i.type===R.RenderBuffer}function Ae(i){return w(i)||i!=null&&"pixelFormat"in i}function U(i,e){const r=Math.max(i.width,i.height);if(r>e){Ee().warn(`Resizing FBO attachment size ${i.width}x${i.height} to device limit ${e}`);const t=e/r;return i.width=Math.round(i.width*t),i.height=Math.round(i.height*t),!1}return!0}function $(i){return i.descriptor.target===b.TEXTURE_CUBE_MAP?b.TEXTURE_CUBE_MAP_POSITIVE_X:b.TEXTURE_2D}be._MAX_COLOR_ATTACHMENTS=-1;const De=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"],Me=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"],z=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"],Ce=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT","textureSize","texelFetch"];var g=999,V=9999,L=0,N=1,G=2,q=3,K=4,v=5,Fe=6,ye=7,Re=8,Q=9,Ue=10,W=11,ve=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function we(){var i,e,r,t=0,n=0,o=g,a=[],l=[],s=1,c=0,h=0,f=!1,d=!1,_="";return function(u){return l=[],u!==null?te(u.replace?u.replace(/\r\n/g,`
`):u):re()};function m(u){u.length&&l.push({type:ve[o],data:u,position:h,line:s,column:c})}function te(u){var S;for(t=0,r=(_+=u).length;i=_[t],t<r;){switch(S=t,o){case L:t=ae();break;case N:t=oe();break;case G:t=k();break;case q:t=se();break;case K:t=he();break;case W:t=le();break;case v:t=ce();break;case V:t=fe();break;case Q:t=ne();break;case g:t=ie()}S!==t&&(_[S]===`
`?(c=0,++s):++c)}return n+=t,_=_.slice(t),l}function re(u){return a.length&&m(a.join("")),o=Ue,m("(eof)"),l}function ie(){return a=a.length?[]:a,e==="/"&&i==="*"?(h=n+t-1,o=L,e=i,t+1):e==="/"&&i==="/"?(h=n+t-1,o=N,e=i,t+1):i==="#"?(o=G,h=n+t,t):/\s/.test(i)?(o=Q,h=n+t,t):(f=/\d/.test(i),d=/[^\w_]/.test(i),h=n+t,o=f?K:d?q:V,t)}function ne(){return/[^\s]/g.test(i)?(m(a.join("")),o=g,t):(a.push(i),e=i,t+1)}function k(){return i!=="\r"&&i!==`
`||e==="\\"?(a.push(i),e=i,t+1):(m(a.join("")),o=g,t)}function oe(){return k()}function ae(){return i==="/"&&e==="*"?(a.push(i),m(a.join("")),o=g,t+1):(a.push(i),e=i,t+1)}function se(){if(e==="."&&/\d/.test(i))return o=v,t;if(e==="/"&&i==="*")return o=L,t;if(e==="/"&&i==="/")return o=N,t;if(i==="."&&a.length){for(;P(a););return o=v,t}if(i===";"||i===")"||i==="("){if(a.length)for(;P(a););return m(i),o=g,t+1}var u=a.length===2&&i!=="=";if(/[\w_\d\s]/.test(i)||u){for(;P(a););return o=g,t}return a.push(i),e=i,t+1}function P(u){for(var S,D,H=0;;){if(S=z.indexOf(u.slice(0,u.length+H).join("")),D=z[S],S===-1){if(H--+u.length>0)continue;D=u.slice(0,1).join("")}return m(D),h+=D.length,(a=a.slice(D.length)).length}}function le(){return/[^a-fA-F0-9]/.test(i)?(m(a.join("")),o=g,t):(a.push(i),e=i,t+1)}function he(){return i==="."||/[eE]/.test(i)?(a.push(i),o=v,e=i,t+1):i==="x"&&a.length===1&&a[0]==="0"?(o=W,a.push(i),e=i,t+1):/[^\d]/.test(i)?(m(a.join("")),o=g,t):(a.push(i),e=i,t+1)}function ce(){return i==="f"&&(a.push(i),e=i,t+=1),/[eE]/.test(i)||i==="-"&&/[eE]/.test(e)?(a.push(i),e=i,t+1):/[^\d]/.test(i)?(m(a.join("")),o=g,t):(a.push(i),e=i,t+1)}function fe(){if(/[^\d\w_]/.test(i)){var u=a.join("");return o=Me.indexOf(u)>-1?Re:Ce.indexOf(u)>-1?ye:Fe,m(a.join("")),o=g,t}return a.push(i),e=i,t+1}}function Pe(i){var e=we(),r=[];return r=(r=r.concat(e(i))).concat(e(null))}function Le(i){return Pe(i)}function Ne(i){return i.map(e=>e.type!=="eof"?e.data:"").join("")}const B=new Set(["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"]);function Be(i,e="100",r="300 es"){const t=/^\s*#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(const n of i)if(n.type==="preprocessor"){const o=t.exec(n.data);if(o){const a=o[1].replaceAll(/\s{2,}/g," ");if(a===r)return a;if(a===e)return n.data="#version "+r,e;throw new Error("unknown glsl version: "+a)}}return i.splice(0,0,{type:"preprocessor",data:"#version "+r},{type:"whitespace",data:`
`}),null}function Oe(i,e){for(let r=e-1;r>=0;r--){const t=i[r];if(t.type!=="whitespace"&&t.type!=="block-comment"){if(t.type!=="keyword")break;if(t.data==="attribute"||t.data==="in")return!0}}return!1}function y(i,e,r,t){t=t||r;for(const n of i)if(n.type==="ident"&&n.data===r)return t in e?e[t]++:e[t]=0,y(i,e,t+"_"+e[t],t);return r}function ee(i,e,r="afterVersion"){function t(s,c){for(let h=c;h<s.length;h++){const f=s[h];if(f.type==="operator"&&f.data===";")return h}return null}function n(s){let c=-1,h=0,f=-1;for(let d=0;d<s.length;d++){const _=s[d];if(_.type==="preprocessor"&&(/#(if|ifdef|ifndef)\s+.+/.test(_.data)?++h:/#endif\s*.*/.test(_.data)&&--h),r!=="afterVersion"&&r!=="afterPrecision"||_.type==="preprocessor"&&_.data.startsWith("#version")&&(f=Math.max(f,d)),r==="afterPrecision"&&_.type==="keyword"&&_.data==="precision"){const m=t(s,d);if(m===null)throw new Error("precision statement not followed by any semicolons!");f=Math.max(f,m)}c<f&&h===0&&(c=d)}return c+1}const o={data:`
`,type:"whitespace"},a=s=>s<i.length&&/[^\r\n]$/.test(i[s].data);let l=n(i);a(l-1)&&i.splice(l++,0,o);for(const s of e)i.splice(l++,0,s);a(l-1)&&a(l)&&i.splice(l,0,o)}function ke(i,e,r,t="lowp"){ee(i,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:t},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function He(i,e,r,t,n="lowp"){ee(i,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:t.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:n},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function je(i,e){let r,t,n=-1;for(let o=e;o<i.length;o++){const a=i[o];if(a.type==="operator"&&(a.data==="["&&(r=o),a.data==="]")){t=o;break}a.type==="integer"&&(n=parseInt(a.data,10))}return r&&t&&i.splice(r,t-r+1),n}function Z(i,e){if(i.startsWith("#version 300"))return i;const r=Le(i);if(Be(r,"100","300 es")==="300 es")return i;let t=null,n=null;const o={},a={};for(let l=0;l<r.length;++l){const s=r[l];switch(s.type){case"keyword":e===x.VERTEX_SHADER&&s.data==="attribute"?s.data="in":s.data==="varying"&&(s.data=e===x.VERTEX_SHADER?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(s.data.trim())&&(s.data=s.data.replaceAll(/(2D|Cube|EXT)/g,"")),e===x.FRAGMENT_SHADER&&s.data==="gl_FragColor"&&(t||(t=y(r,o,"fragColor"),ke(r,t,"vec4")),s.data=t),e===x.FRAGMENT_SHADER&&s.data==="gl_FragData"){const c=je(r,l+1),h=y(r,o,"fragData");He(r,h,"vec4",c,"mediump"),s.data=h}else e===x.FRAGMENT_SHADER&&s.data==="gl_FragDepthEXT"&&(n||(n=y(r,o,"gl_FragDepth")),s.data=n);break;case"ident":if(De.includes(s.data)){if(e===x.VERTEX_SHADER&&Oe(r,l))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");s.data in a||(a[s.data]=y(r,o,s.data)),s.data=a[s.data]}}}for(let l=r.length-1;l>=0;--l){const s=r[l];if(s.type==="preprocessor"){const c=s.data.match(/#extension\s+(.*):/);if(c!=null&&c[1]&&B.has(c[1].trim())){const d=r[l+1];r.splice(l,d&&d.type==="whitespace"?2:1)}const h=s.data.match(/#ifdef\s+(.*)/);h!=null&&h[1]&&B.has(h[1].trim())&&(s.data="#if 1");const f=s.data.match(/#ifndef\s+(.*)/);f!=null&&f[1]&&B.has(f[1].trim())&&(s.data="#if 0")}}return Ie(i,Ne(r))}function Ie(i,e){return e}const Xe=4294967295;class Je{constructor(e,r,t,n,o=new Map,a=[]){var c;this._context=e,this._locations=n,this._uniformBlockBindings=o,this._transformFeedbackVaryings=a,this._refCount=1,this._compiled=!1,this._linesOfCode=0,this._nameToUniformLocation=new Map,this._nameToUniform1=new Map,this._nameToUniform1v=new Map,this._nameToUniform2=new Map,this._nameToUniform3=new Map,this._nameToUniform4=new Map,this._nameToUniformMatrix3=new Map,this._nameToUniformMatrix4=new Map,e||console.error("RenderingContext isn't initialized!"),r.length===0&&console.error("Shaders source should not be empty!"),r=Z(r,x.VERTEX_SHADER),t=Z(t,x.FRAGMENT_SHADER),this._vShader=J(this._context,x.VERTEX_SHADER,r),this._fShader=J(this._context,x.FRAGMENT_SHADER,t),this._vShader&&this._fShader||console.error("Error loading shaders!"),this._context.instanceCounter.increment(p.Shader,this),O()&&(this.vertexShader=r,this.fragmentShader=t),this.usedMemory=r.length+t.length;const l=this._context.gl,s=l.createProgram();l.attachShader(s,this._vShader),l.attachShader(s,this._fShader),this._locations.forEach((h,f)=>l.bindAttribLocation(s,h,f)),(c=this._transformFeedbackVaryings)!=null&&c.length&&l.transformFeedbackVaryings(s,this._transformFeedbackVaryings,l.SEPARATE_ATTRIBS),l.linkProgram(s),O()&&!l.getProgramParameter(s,l.LINK_STATUS)&&console.error(`Could not link shader
validated: ${l.getProgramParameter(s,l.VALIDATE_STATUS)}, gl error ${l.getError()}, vertex: ${l.getShaderParameter(this._vShader,l.COMPILE_STATUS)}, fragment: ${l.getShaderParameter(this._fShader,l.COMPILE_STATUS)}, info log: ${l.getProgramInfoLog(s)}, vertex source: ${this.vertexShader}, fragment source: ${this.fragmentShader}`);for(const[h,f]of this._uniformBlockBindings){const d=l.getUniformBlockIndex(s,h);d<Xe&&l.uniformBlockBinding(s,d,f)}this._glName=s,this._context.instanceCounter.increment(p.Program,this)}get glName(){return this._glName}get hasGLName(){return this._glName!=null}get hasTransformFeedbackVaryings(){var e;return!!((e=this._transformFeedbackVaryings)!=null&&e.length)}get compiled(){if(this._compiled)return!0;const e=this._context.gl.getExtension("KHR_parallel_shader_compile");return e==null||this.glName==null?(this._compiled=!0,!0):(this._compiled=!!this._context.gl.getProgramParameter(this.glName,e.COMPLETION_STATUS_KHR),this._compiled)}dispose(){if(--this._refCount>0)return;const e=this._context.gl,r=this._context.instanceCounter;this._nameToUniformLocation.forEach(t=>t&&r.decrement(p.Uniform,t)),this._nameToUniformLocation.clear(),this._vShader&&(this._linesOfCode>0&&(r.decrement(p.LinesOfCode,this._vShader,this._linesOfCode),this._linesOfCode=0),e.deleteShader(this._vShader),this._vShader=null,r.decrement(p.Shader,this)),this._fShader&&(e.deleteShader(this._fShader),this._fShader=null),this._glName&&(e.deleteProgram(this._glName),this._glName=null,r.decrement(p.Program,this))}ref(){++this._refCount}_getUniformLocation(e){const r=this._nameToUniformLocation.get(e);if(r!==void 0)return r;if(this.glName){const t=this._context.gl.getUniformLocation(this.glName,e);return this._nameToUniformLocation.set(e,t),t&&this._context.instanceCounter.increment(p.Uniform,t),t}return null}hasUniform(e){return this._getUniformLocation(e)!=null}setUniform1i(e,r){const t=this._nameToUniform1.get(e);t!==void 0&&r===t||(this._context.gl.uniform1i(this._getUniformLocation(e),r),this._nameToUniform1.set(e,r))}setUniform1iv(e,r){E(this._nameToUniform1v,e,r)&&this._context.gl.uniform1iv(this._getUniformLocation(e),r)}setUniform2iv(e,r){E(this._nameToUniform2,e,r)&&this._context.gl.uniform2iv(this._getUniformLocation(e),r)}setUniform3iv(e,r){E(this._nameToUniform3,e,r)&&this._context.gl.uniform3iv(this._getUniformLocation(e),r)}setUniform4iv(e,r){E(this._nameToUniform4,e,r)&&this._context.gl.uniform4iv(this._getUniformLocation(e),r)}setUniform1f(e,r){const t=this._nameToUniform1.get(e);t!==void 0&&r===t||(this._context.gl.uniform1f(this._getUniformLocation(e),r),this._nameToUniform1.set(e,r))}setUniform1fv(e,r){E(this._nameToUniform1v,e,r)&&this._context.gl.uniform1fv(this._getUniformLocation(e),r)}setUniform2f(e,r,t){const n=this._nameToUniform2.get(e);n===void 0?(this._context.gl.uniform2f(this._getUniformLocation(e),r,t),this._nameToUniform2.set(e,[r,t])):r===n[0]&&t===n[1]||(this._context.gl.uniform2f(this._getUniformLocation(e),r,t),n[0]=r,n[1]=t)}setUniform2fv(e,r){E(this._nameToUniform2,e,r)&&this._context.gl.uniform2fv(this._getUniformLocation(e),r)}setUniform3f(e,r,t,n){const o=this._nameToUniform3.get(e);o===void 0?(this._context.gl.uniform3f(this._getUniformLocation(e),r,t,n),this._nameToUniform3.set(e,[r,t,n])):r===o[0]&&t===o[1]&&n===o[2]||(this._context.gl.uniform3f(this._getUniformLocation(e),r,t,n),o[0]=r,o[1]=t,o[2]=n)}setUniform3fv(e,r){const t=this._getUniformLocation(e);t!=null&&E(this._nameToUniform3,e,r)&&this._context.gl.uniform3fv(t,r)}setUniform4f(e,r,t,n,o){const a=this._nameToUniform4.get(e);a===void 0?(this._context.gl.uniform4f(this._getUniformLocation(e),r,t,n,o),this._nameToUniform4.set(e,[r,t,n,o])):a!==void 0&&r===a[0]&&t===a[1]&&n===a[2]&&o===a[3]||(this._context.gl.uniform4f(this._getUniformLocation(e),r,t,n,o),a[0]=r,a[1]=t,a[2]=n,a[3]=o)}setUniform4fv(e,r){const t=this._getUniformLocation(e);t!=null&&E(this._nameToUniform4,e,r)&&this._context.gl.uniform4fv(t,r)}setUniformMatrix3fv(e,r,t=!1){const n=this._getUniformLocation(e);n!=null&&E(this._nameToUniformMatrix3,e,r)&&this._context.gl.uniformMatrix3fv(n,t,r)}setUniformMatrix4fv(e,r,t=!1){const n=this._getUniformLocation(e);n!=null&&E(this._nameToUniformMatrix4,e,r)&&this._context.gl.uniformMatrix4fv(n,t,r)}stop(){}}function J(i,e,r){const t=i.gl,n=t.createShader(e);return t.shaderSource(n,r),t.compileShader(n),O()&&!t.getShaderParameter(n,t.COMPILE_STATUS)&&(console.error("Compile error in ".concat(e===x.VERTEX_SHADER?"vertex":"fragment"," shader")),console.error(t.getShaderInfoLog(n)),console.error($e(r))),n}function $e(i){let e=2;return i.replaceAll(`
`,()=>`
`+ze(e++)+":")}function ze(i){return i>=1e3?i.toString():("  "+i).slice(-3)}function E(i,e,r){const t=i.get(e);if(!t)return i.set(e,Array.from(r)),!0;const n=r.length;if(t.length!==n)return i.set(e,Array.from(r)),!0;for(let o=0;o<n;++o){const a=r[o];if(t[o]!==a){for(t[o]=a;o<n;++o)t[o]=r[o];return!0}}return!1}export{Qe as i,Je as r,Te as s,be as x};
//# sourceMappingURL=Program-p0oH2eN1.js.map
