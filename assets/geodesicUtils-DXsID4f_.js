import{da as _,I as G,dh as H,di as tt,dj as q,dk as et,ag as J,db as nt,df as st,aV as at,c3 as it}from"./index-CaYX07dN.js";function K(t){if(!t)return null;const n=t.wkid;if(n)return tt[n];const e=t.wkt2??t.wkt;return e?ot(e):null}function ot(t){const n=et.exec(t);if(!n||n.length!==2)return null;const e=n[1].split(",");if(!e||e.length<3)return null;const c=parseFloat(e[1]),s=parseFloat(e[2]);return isNaN(c)||isNaN(s)?null:{a:c,f:s===0?0:1/s}}function C(t){const n=K(t);if(rt(n))return n;const e=n.a*(1-n.f);return Object.assign(n,{b:e,eSq:1-(e/n.a)**2,radius:(2*n.a+e)/3,densificationRatio:1e4/((2*n.a+e)/3)})}function rt(t){return t!=null&&"b"in t&&"eSq"in t&&"radius"in t}function O(t,n,e){const{a:c,eSq:s}=C(e),a=Math.sqrt(s),i=Math.sin(n[1]*q),l=c*n[0]*q;let r;return s>0?r=c*((1-s)*(i/(1-s*(i*i))-1/(2*a)*Math.log((1-a*i)/(1+a*i))))*.5:r=c*i,t[0]=l,t[1]=r,t}function E(t){return _(t)&&!!K(t)}function lt(t,n="square-meters"){if(t.some(i=>!E(i.spatialReference)))throw new G("geodesic-areas:invalid-spatial-reference","the input geometries spatial reference is not supported");const e=[];for(let i=0;i<t.length;i++){const l=t[i],r=l.spatialReference,{radius:h,densificationRatio:u}=C(r),o=h*u;e.push(ht(l,o))}const c=[],s=[0,0],a=[0,0];for(let i=0;i<e.length;i++){const{rings:l,spatialReference:r}=e[i];let h=0;for(let u=0;u<l.length;u++){const o=l[u];O(s,o[0],r),O(a,o[o.length-1],r);let M=a[0]*s[1]-s[0]*a[1];for(let d=0;d<o.length-1;d++)O(s,o[d+1],r),O(a,o[d],r),M+=a[0]*s[1]-s[0]*a[1];h+=M}h=H(h,"square-meters",n),c.push(h/-2)}return c}function ut(t,n="meters"){if(!t)throw new G("geodesic-lengths:invalid-geometries","the input geometries type is not supported");if(t.some(c=>!E(c.spatialReference)))throw new G("geodesic-lengths:invalid-spatial-reference","the input geometries spatial reference is not supported");const e=[];for(let c=0;c<t.length;c++){const s=t[c],{spatialReference:a}=s,i=s.type==="polyline"?s.paths:s.rings;let l=0;for(let r=0;r<i.length;r++){const h=i[r];let u=0;for(let o=1;o<h.length;o++){const M=h[o-1][0],d=h[o][0],m=h[o-1][1],g=h[o][1];if(m!==g||M!==d){const p=new L;Q(p,[M,m],[d,g],a),u+=p.distance}}l+=u}l=H(l,"meters",n),e.push(l)}return e}function ht(t,n){if(t.type!=="polyline"&&t.type!=="polygon")throw new G("geodesic-densify:invalid-geometry","the input geometry is neither polyline nor polygon");const{spatialReference:e}=t;if(!E(e))throw new G("geodesic-densify:invalid-spatial-reference","the input geometry spatial reference is not supported");const c=t.type==="polyline"?t.paths:t.rings,s=[],a=[0,0],i=new L;for(const r of c){const h=[];s.push(h),h.push([r[0][0],r[0][1]]);let u,o,M=r[0][0],d=r[0][1];for(let m=0;m<r.length-1;m++){if(u=r[m+1][0],o=r[m+1][1],M===u&&d===o)continue;const g=[M,d];Q(i,[M,d],[u,o],e);const{azimuth:p,distance:v}=i,w=v/n;if(w>1){for(let A=1;A<=w-1;A++)B(a,g,p,A*n,e),h.push(a.slice());B(a,g,p,(v+Math.floor(w-1)*n)/2,e),h.push(a.slice())}B(a,g,p,v,e),h.push(a.slice()),M=a[0],d=a[1]}}const l=st(J,e);return t.type==="polyline"?new at({paths:s,spatialReference:l}):new it({rings:s,spatialReference:l})}class L{constructor(n=0,e=void 0,c=void 0){this.distance=n,this.azimuth=e,this.reverseAzimuth=c}}function B(t,n,e,c,s){const a=n[0],i=n[1],l=a*q,r=i*q,h=(e??0)*q,{a:u,b:o,f:M}=C(s),d=Math.sin(h),m=Math.cos(h),g=(1-M)*Math.tan(r),p=1/Math.sqrt(1+g*g),v=g*p,w=Math.atan2(g,m),A=p*d,j=A*A,z=1-j,f=z*(u*u-o*o)/(o*o),I=1+f/16384*(4096+f*(f*(320-175*f)-768)),x=f/1024*(256+f*(f*(74-47*f)-128));let R,N,y,F,S=c/(o*I),b=2*Math.PI;for(;Math.abs(S-b)>1e-12;)y=Math.cos(2*w+S),R=Math.sin(S),N=Math.cos(S),F=x*R*(y+x/4*(N*(2*y*y-1)-x/6*y*(4*R*R-3)*(4*y*y-3))),b=S,S=c/(o*I)+F;const k=v*R-p*N*m,P=Math.atan2(v*N+p*R*m,(1-M)*Math.sqrt(j+k*k)),U=Math.atan2(R*d,p*N-v*R*m),$=M/16*z*(4+M*(4-3*z)),V=P/q,W=(l+(U-(1-$)*M*A*(S+$*R*(y+$*N*(2*y*y-1)))))/q;return t[0]=W,t[1]=V,t}function Q(t,n,e,c){const s=n[0]*q,a=n[1]*q,i=e[0]*q,l=e[1]*q,{a:r,b:h,f:u,radius:o}=C(c),M=i-s,d=Math.atan((1-u)*Math.tan(a)),m=Math.atan((1-u)*Math.tan(l)),g=Math.sin(d),p=Math.cos(d),v=Math.sin(m),w=Math.cos(m);let A,j,z,f,I,x,R,N,y,F,S=1e3,b=M;do{if(R=Math.sin(b),N=Math.cos(b),z=Math.sqrt(w*R*(w*R)+(p*v-g*w*N)*(p*v-g*w*N)),z===0)return t.distance=0,t.azimuth=void 0,t.reverseAzimuth=void 0,t;I=g*v+p*w*N,x=Math.atan2(z,I),y=p*w*R/z,j=1-y*y,f=I-2*g*v/j,isNaN(f)&&(f=0),F=u/16*j*(4+u*(4-3*j)),A=b,b=M+(1-F)*u*y*(x+F*z*(f+F*I*(2*f*f-1)))}while(Math.abs(b-A)>1e-12&&--S>0);if(S===0){const W=o,T=Math.acos(Math.sin(a)*Math.sin(l)+Math.cos(a)*Math.cos(l)*Math.cos(i-s))*W,D=i-s,X=Math.sin(D)*Math.cos(l),Y=Math.cos(a)*Math.sin(l)-Math.sin(a)*Math.cos(l)*Math.cos(D),Z=Math.atan2(X,Y);return t.azimuth=Z/q,t.distance=T,t.reverseAzimuth=void 0,t}const k=j*(r*r-h*h)/(h*h),P=k/1024*(256+k*(k*(74-47*k)-128)),U=h*(1+k/16384*(4096+k*(k*(320-175*k)-768)))*(x-P*z*(f+P/4*(I*(2*f*f-1)-P/6*f*(4*z*z-3)*(4*f*f-3)))),$=Math.atan2(w*Math.sin(b),p*v-g*w*Math.cos(b)),V=Math.atan2(p*Math.sin(b),p*v*Math.cos(b)-g*w);return t.azimuth=$/q,t.distance=U,t.reverseAzimuth=V/q,t}function ft(t){return E(t)?t:nt(t)?J.WGS84:null}export{ft as N,ut as R,L as b,B as j,Q as q,lt as v,E as y};
//# sourceMappingURL=geodesicUtils-DXsID4f_.js.map
