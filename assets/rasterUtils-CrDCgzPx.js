import{dB as E}from"./index-BlI3-bLW.js";import{P as d,U as A,L as _,D as T,G as C,o as s}from"./enums-Dk3osxpS.js";import{p as h,m as O}from"./Texture-BpDQ7iyl.js";function M(e,n,t="nearest",i=!1){const a=!(i&&n.pixelType==="u8"),o=a?A.FLOAT:A.UNSIGNED_BYTE,u=n.pixels==null||n.pixels.length===0?null:a?n.getAsRGBAFloat():n.getAsRGBA(),f=e.capabilities.textureFloatLinear,r=new h;return r.width=n.width,r.height=n.height,r.internalFormat=a?d.RGBA32F:C.RGBA,r.samplingMode=!f||t!=="bilinear"&&t!=="cubic"?_.NEAREST:_.LINEAR,r.dataType=o,r.wrapMode=T.CLAMP_TO_EDGE,new O(e,r,u)}function F(e,n){const{spacing:t,offsets:i,coefficients:a,size:[o,u]}=n,f=t[0]>1,r=new h;r.width=f?4*o:o,r.height=u,r.internalFormat=d.RGBA32F,r.dataType=A.FLOAT,r.samplingMode=_.NEAREST,r.wrapMode=T.CLAMP_TO_EDGE;const l=new Float32Array(f?o*u*16:2*i.length);if(f&&a!=null)for(let m=0,c=0;m<a.length;m++)l[c++]=a[m],m%3==2&&(l[c++]=1);else for(let m=0;m<u;m++)for(let c=0;c<o;c++){const g=4*(m*o+c),p=2*(c*u+m);l[g]=i[p],l[g+1]=i[p+1],l[g+3]=i[p]===-1?0:1}return new O(e,r,l)}function x(e,n){const t=new h;return t.internalFormat=C.RGBA,t.width=n.length/4,t.height=1,t.samplingMode=_.NEAREST,t.wrapMode=T.CLAMP_TO_EDGE,new O(e,t,n)}function G(e,n,t,i=1,a=!0){return{u_flipY:a,u_applyTransform:!!e,u_opacity:i,u_transformSpacing:e?e.spacing:E,u_transformGridSize:e?e.size:E,u_targetImageSize:n,u_srcImageSize:t}}function V(e,n){return{u_colormapOffset:n||0,u_colormapMaxIndex:e?e.length/4-1:0}}function k(e,n){return{u_scale:e,u_offset:n}}function B(e){return{u_bandCount:e.bandCount,u_minOutput:e.outMin,u_maxOutput:e.outMax,u_minCutOff:e.minCutOff,u_maxCutOff:e.maxCutOff,u_factor:e.factor,u_useGamma:e.useGamma,u_gamma:e.gamma,u_gammaCorrection:e.gammaCorrection}}function N(e){return{u_hillshadeType:e.hillshadeType,u_sinZcosAs:e.sinZcosAs,u_sinZsinAs:e.sinZsinAs,u_cosZs:e.cosZs,u_weights:e.weights,u_factor:e.factor,u_minValue:e.minValue,u_maxValue:e.maxValue}}function v(e,n){const t=e.gl,i=n.glName,a=new Map;if(i==null)return a;const o=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);let u;for(let f=0;f<o;f++)u=t.getActiveUniform(i,f),u&&a.set(u.name,{location:t.getUniformLocation(i,u.name),info:u});return a}function I(e,n,t){Object.keys(t).forEach(i=>{const a=n.get(i)||n.get(i+"[0]");a&&L(e,i,t[i],a)})}function R(e,n,t,i){t.length===i.length&&(i.some(a=>a==null)||t.some(a=>a==null)||t.forEach((a,o)=>{n.setUniform1i(a,o),e.bindTexture(i[o],o)}))}function L(e,n,t,i){if(i===null||t==null)return!1;const{info:a}=i;switch(a.type){case s.FLOAT:a.size>1?e.setUniform1fv(n,t):e.setUniform1f(n,t);break;case s.FLOAT_VEC2:e.setUniform2fv(n,t);break;case s.FLOAT_VEC3:e.setUniform3fv(n,t);break;case s.FLOAT_VEC4:e.setUniform4fv(n,t);break;case s.FLOAT_MAT3:e.setUniformMatrix3fv(n,t);break;case s.FLOAT_MAT4:e.setUniformMatrix4fv(n,t);break;case s.INT:a.size>1?e.setUniform1iv(n,t):e.setUniform1i(n,t);break;case s.BOOL:e.setUniform1i(n,t?1:0);break;case s.INT_VEC2:case s.BOOL_VEC2:e.setUniform2iv(n,t);break;case s.INT_VEC3:case s.BOOL_VEC3:e.setUniform3iv(n,t);break;case s.INT_VEC4:case s.BOOL_VEC4:e.setUniform4iv(n,t);break;default:return!1}return!0}export{N as A,R as O,v as T,V as _,F as c,M as f,k as g,I as h,G as l,x as m,B as p};
//# sourceMappingURL=rasterUtils-CrDCgzPx.js.map
