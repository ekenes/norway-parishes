import{cZ as S,fZ as i,f_ as M,f$ as P,g0 as s,a9 as R,g1 as T,g2 as c,aN as N,g3 as C,fG as G}from"./index-Club40b3.js";function O(u,o,t){const l=Math.sin(u),a=Math.cos(u),r=Math.sin(o),E=Math.cos(o),n=t;return n[0]=-l,n[4]=-r*a,n[8]=E*a,n[12]=0,n[1]=a,n[5]=-r*l,n[9]=E*l,n[13]=0,n[2]=0,n[6]=E,n[10]=r,n[14]=0,n[3]=0,n[7]=0,n[11]=0,n[15]=1,n}function W(u,o,t){return O(u,o,t),S(t,t),t}function g(u,o,t,l){if(u==null||l==null)return!1;const a=i(u,M),r=i(l,P);if(a===r&&!A(r)&&(a!==s.UNKNOWN||R(u,l)))return T(t,o),!0;if(A(r)){const n=c[a][s.LON_LAT],_=c[s.LON_LAT][r];return n!=null&&_!=null&&(n(o,0,e,0),_(e,0,f,0),O(L*e[0],L*e[1],t),t[12]=f[0],t[13]=f[1],t[14]=f[2],!0)}const E=A(a);if((r===s.WEB_MERCATOR||r===s.PLATE_CARREE||r===s.WGS84||r===s.CGCS2000)&&(a===s.WGS84||E||a===s.WEB_MERCATOR||a===s.CGCS2000)){const n=c[a][s.LON_LAT],_=c[s.LON_LAT][r];return n!=null&&_!=null&&(n(o,0,e,0),_(e,0,f,0),E?W(L*e[0],L*e[1],t):C(t),t[12]=f[0],t[13]=f[1],t[14]=f[2],!0)}return!1}function A(u){return u===s.SPHERICAL_ECEF||u===s.SPHERICAL_MARS_PCPF||u===s.SPHERICAL_MOON_PCPF||u===s.WGS84_ECEF}const L=G(1),e=N(),f=N();export{g as C};
//# sourceMappingURL=computeTranslationToOriginAndRotation-h-7E_X_V.js.map
