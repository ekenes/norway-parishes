import{cO as v,aN as a,aR as f}from"./index-BlI3-bLW.js";import{s as P}from"./sphere-CIp6bdxt.js";import{s as b,c as u,P as e,j as h,u as w,g as m}from"./vec32-Bu1rR2Op.js";import{c as s}from"./plane-ELSex9JT.js";function p(o){return o?{origin:v(o.origin),vector:v(o.vector)}:{origin:a(),vector:a()}}function R(o,t,r=p()){return b(r.origin,o),u(r.vector,t,o),r}function d(o,t){const r=u(s.get(),t,o.origin),g=e(o.vector,r),n=e(o.vector,o.vector),i=f(g/n,0,1),c=u(s.get(),m(s.get(),o.vector,i),r);return e(c,c)}function k(o,t,r){return x(o,t,0,1,r)}function x(o,t,r,g,n){const{vector:i,origin:c}=o,$=u(s.get(),t,c),j=e(i,$)/h(i);return m(n,i,f(j,r,g)),w(n,n,o.origin)}new P(()=>p());export{x as A,d as M,R as b,k as j,p as v};
//# sourceMappingURL=lineSegment-BrBb3QVm.js.map
