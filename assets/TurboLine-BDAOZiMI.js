const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/libtess-asm-Ms1jkM9V.js","assets/_commonjsHelpers-DCkdB7M8.js","assets/libtess-tUH3L2cm.js"])))=>i.map(i=>d[i]);
import{V as bt,_ as wt,fp as Rt,cX as I,cW as D}from"./index-Club40b3.js";import{R as pt}from"./definitions-DyYHcW4a.js";const Mt=128e3;let dt=null,Vt=null;async function At(){return dt||(dt=Ut()),dt}async function Ut(){Vt=await(bt("esri-csp-restrictions")?await wt(()=>import("./libtess-asm-Ms1jkM9V.js"),__vite__mapDeps([0,1])).then(i=>i.l):await wt(()=>import("./libtess-tUH3L2cm.js"),__vite__mapDeps([2,1])).then(i=>i.l)).default({locateFile:i=>Rt(`esri/core/libs/libtess/${i}`)})}function Ot(r,i){const x=Math.max(r.length,Mt);return Vt.triangulate(r,i,x)}function mt(r,i){return r.x===i.x&&r.y===i.y}function kt(r){if(!r)return;const i=r.length;if(i<=1)return;let x=0;for(let f=1;f<i;f++)mt(r[f],r[x])||++x===f||(r[x]=r[f]);r.length=x+1}function k(r,i){return r.x=i.y,r.y=-i.x,r}function R(r,i){return r.x=-i.y,r.y=i.x,r}function Tt(r,i){return r.x=i.x,r.y=i.y,r}function ft(r,i){return r.x=-i.x,r.y=-i.y,r}function vt(r){return Math.sqrt(r.x*r.x+r.y*r.y)}function Bt(r,i){return r.x*i.y-r.y*i.x}function gt(r,i){return r.x*i.x+r.y*i.y}function et(r,i,x,f){return r.x=i.x*x+i.y*f,r.y=i.x*f-i.y*x,r}class Pt{constructor(i,x,f){this._writeVertex=i,this._writeTriangle=x,this._canUseThinTessellation=f,this._prevNormal={x:void 0,y:void 0},this._nextNormal={x:void 0,y:void 0},this._textureNormalLeft={x:0,y:1},this._textureNormalRight={x:0,y:-1},this._textureNormal={x:void 0,y:void 0},this._joinNormal={x:void 0,y:void 0},this._inner={x:void 0,y:void 0},this._outer={x:void 0,y:void 0},this._roundStart={x:void 0,y:void 0},this._roundEnd={x:void 0,y:void 0},this._startBreak={x:void 0,y:void 0},this._endBreak={x:void 0,y:void 0},this._innerPrev={x:void 0,y:void 0},this._innerNext={x:void 0,y:void 0},this._bevelStart={x:void 0,y:void 0},this._bevelEnd={x:void 0,y:void 0},this._bevelMiddle={x:void 0,y:void 0}}tessellate(i,x,f=this._canUseThinTessellation){kt(i),f&&x.halfWidth<pt&&!x.offset?this._tessellateThin(i,x):this._tessellate(i,x)}_tessellateThin(i,x){if(i.length<2)return;const f=x.wrapDistance||65535;let N=x.initialDistance||0,$=!1,C=i[0].x,F=i[0].y;const B=i.length;for(let W=1;W<B;++W){$&&($=!1,N=0);let X=i[W].x,j=i[W].y,b=X-C,v=j-F,T=Math.sqrt(b*b+v*v);if(b/=T,v/=T,N+T>f){$=!0;const t=(f-N)/T;T=f-N,X=(1-t)*C+t*X,j=(1-t)*F+t*j,--W}const o=this._writeVertex(C,F,0,0,b,v,v,-b,0,-1,N),y=this._writeVertex(C,F,0,0,b,v,-v,b,0,1,N);N+=T;const G=this._writeVertex(X,j,0,0,b,v,v,-b,0,-1,N),e=this._writeVertex(X,j,0,0,b,v,-v,b,0,1,N);this._writeTriangle(o,y,G),this._writeTriangle(y,G,e),C=X,F=j}}_tessellate(i,x){const f=i[0],N=i[i.length-1],$=mt(f,N),C=$?3:2;if(i.length<C)return;const F=x.pixelCoordRatio,B=x.capType!=null?x.capType:I.BUTT,W=x.joinType!=null?x.joinType:D.MITER,X=x.miterLimit!=null?Math.min(x.miterLimit,4):2,j=x.roundLimit!=null?Math.min(x.roundLimit,1.05):1.05,b=x.halfWidth!=null?x.halfWidth:2,v=!!x.textured;let T,o,y,G=null;const e=this._prevNormal,t=this._nextNormal;let K=-1,Q=-1;const n=this._joinNormal;let _,c;const xt=this._textureNormalLeft,st=this._textureNormalRight,w=this._textureNormal;let u=-1,l=-1;const _t=x.wrapDistance||65535;let h=x.initialDistance||0;const Et=this._writeVertex,Nt=this._writeTriangle,d=(p,nt,H,V,L,A)=>{const O=Et(o,y,_,c,H,V,p,nt,L,A,h);return u>=0&&l>=0&&O>=0&&Nt(u,l,O),u=l,l=O,O};$&&(T=i[i.length-2],t.x=N.x-T.x,t.y=N.y-T.y,Q=vt(t),t.x/=Q,t.y/=Q);let Y=!1;for(let p=0;p<i.length;++p){if(Y&&(Y=!1,h=0),T&&(e.x=-t.x,e.y=-t.y,K=Q,h+K>_t&&(Y=!0)),Y){const s=(_t-h)/K;K=_t-h,T={x:(1-s)*T.x+s*i[p].x,y:(1-s)*T.y+s*i[p].y},--p}else T=i[p];o=T.x,y=T.y;const nt=p<=0&&!Y,H=p===i.length-1;if(nt||(h+=K),G=H?$?i[1]:null:i[p+1],G?(t.x=G.x-o,t.y=G.y-y,Q=vt(t),t.x/=Q,t.y/=Q):(t.x=void 0,t.y=void 0),!$){if(nt){R(n,t),_=n.x,c=n.y,B===I.SQUARE&&(d(-t.y-t.x,t.x-t.y,t.x,t.y,0,-1),d(t.y-t.x,-t.x-t.y,t.x,t.y,0,1)),B===I.ROUND&&(d(-t.y-t.x,t.x-t.y,t.x,t.y,-1,-1),d(t.y-t.x,-t.x-t.y,t.x,t.y,-1,1)),B!==I.ROUND&&B!==I.BUTT||(d(-t.y,t.x,t.x,t.y,0,-1),d(t.y,-t.x,t.x,t.y,0,1));continue}if(H){k(n,e),_=n.x,c=n.y,B!==I.ROUND&&B!==I.BUTT||(d(e.y,-e.x,-e.x,-e.y,0,-1),d(-e.y,e.x,-e.x,-e.y,0,1)),B===I.SQUARE&&(d(e.y-e.x,-e.x-e.y,-e.x,-e.y,0,-1),d(-e.y-e.x,e.x-e.y,-e.x,-e.y,0,1)),B===I.ROUND&&(d(e.y-e.x,-e.x-e.y,-e.x,-e.y,1,-1),d(-e.y-e.x,e.x-e.y,-e.x,-e.y,1,1));continue}}let V,L,A=-Bt(e,t);if(Math.abs(A)<.01)gt(e,t)>0?(n.x=e.x,n.y=e.y,A=1,V=Number.MAX_VALUE,L=!0):(R(n,t),A=1,V=1,L=!1);else{n.x=(e.x+t.x)/A,n.y=(e.y+t.y)/A,V=vt(n);const s=(V-1)*b*F;L=V>4||s>K&&s>Q}_=n.x,c=n.y;let O=W;switch(W){case D.BEVEL:V<1.05&&(O=D.MITER);break;case D.ROUND:V<j&&(O=D.MITER);break;case D.MITER:V>X&&(O=D.BEVEL)}switch(O){case D.MITER:if(d(n.x,n.y,-e.x,-e.y,0,-1),d(-n.x,-n.y,-e.x,-e.y,0,1),H)break;if(v){const s=Y?0:h;u=this._writeVertex(o,y,_,c,t.x,t.y,n.x,n.y,0,-1,s),l=this._writeVertex(o,y,_,c,t.x,t.y,-n.x,-n.y,0,1,s)}break;case D.BEVEL:{const s=A<0;let g,m,q,M;if(s){const a=u;u=l,l=a,g=xt,m=st}else g=st,m=xt;if(L)q=s?R(this._innerPrev,e):k(this._innerPrev,e),M=s?k(this._innerNext,t):R(this._innerNext,t);else{const a=s?ft(this._inner,n):Tt(this._inner,n);q=a,M=a}const U=s?k(this._bevelStart,e):R(this._bevelStart,e);d(q.x,q.y,-e.x,-e.y,g.x,g.y);const yt=d(U.x,U.y,-e.x,-e.y,m.x,m.y);if(H)break;const P=s?R(this._bevelEnd,t):k(this._bevelEnd,t);if(L){const a=this._writeVertex(o,y,_,c,-e.x,-e.y,0,0,0,0,h);u=this._writeVertex(o,y,_,c,t.x,t.y,M.x,M.y,g.x,g.y,h),l=this._writeVertex(o,y,_,c,t.x,t.y,P.x,P.y,m.x,m.y,h),this._writeTriangle(yt,a,l)}else{if(v){const a=this._bevelMiddle;a.x=(U.x+P.x)/2,a.y=(U.y+P.y)/2,et(w,a,-e.x,-e.y),d(a.x,a.y,-e.x,-e.y,w.x,w.y),et(w,a,t.x,t.y),u=this._writeVertex(o,y,_,c,t.x,t.y,a.x,a.y,w.x,w.y,h),l=this._writeVertex(o,y,_,c,t.x,t.y,M.x,M.y,g.x,g.y,h)}else{const a=u;u=l,l=a}d(P.x,P.y,t.x,t.y,m.x,m.y)}if(s){const a=u;u=l,l=a}break}case D.ROUND:{const s=A<0;let g,m;if(s){const E=u;u=l,l=E,g=xt,m=st}else g=st,m=xt;const q=s?ft(this._inner,n):Tt(this._inner,n);let M,U;L?(M=s?R(this._innerPrev,e):k(this._innerPrev,e),U=s?k(this._innerNext,t):R(this._innerNext,t)):(M=q,U=q);const yt=s?k(this._roundStart,e):R(this._roundStart,e),P=s?R(this._roundEnd,t):k(this._roundEnd,t),a=d(M.x,M.y,-e.x,-e.y,g.x,g.y),ot=d(yt.x,yt.y,-e.x,-e.y,m.x,m.y);if(H)break;const z=this._writeVertex(o,y,_,c,-e.x,-e.y,0,0,0,0,h);L||this._writeTriangle(u,l,z);const S=ft(this._outer,q),J=this._writeVertex(o,y,_,c,t.x,t.y,P.x,P.y,m.x,m.y,h);let Z,tt;const lt=V>2;if(lt){let E;V!==Number.MAX_VALUE?(S.x/=V,S.y/=V,E=gt(e,S),E=(V*(E*E-1)+1)/E):E=-1,Z=s?k(this._startBreak,e):R(this._startBreak,e),Z.x+=e.x*E,Z.y+=e.y*E,tt=s?R(this._endBreak,t):k(this._endBreak,t),tt.x+=t.x*E,tt.y+=t.y*E}et(w,S,-e.x,-e.y);const ht=this._writeVertex(o,y,_,c,-e.x,-e.y,S.x,S.y,w.x,w.y,h);et(w,S,t.x,t.y);const ct=v?this._writeVertex(o,y,_,c,t.x,t.y,S.x,S.y,w.x,w.y,h):ht,ut=z,at=v?this._writeVertex(o,y,_,c,t.x,t.y,0,0,0,0,h):z;let it=-1,rt=-1;if(lt&&(et(w,Z,-e.x,-e.y),it=this._writeVertex(o,y,_,c,-e.x,-e.y,Z.x,Z.y,w.x,w.y,h),et(w,tt,t.x,t.y),rt=this._writeVertex(o,y,_,c,t.x,t.y,tt.x,tt.y,w.x,w.y,h)),v?lt?(this._writeTriangle(ut,ot,it),this._writeTriangle(ut,it,ht),this._writeTriangle(at,ct,rt),this._writeTriangle(at,rt,J)):(this._writeTriangle(ut,ot,ht),this._writeTriangle(at,ct,J)):lt?(this._writeTriangle(z,ot,it),this._writeTriangle(z,it,rt),this._writeTriangle(z,rt,J)):(this._writeTriangle(z,ot,ht),this._writeTriangle(z,ct,J)),L?(u=this._writeVertex(o,y,_,c,t.x,t.y,U.x,U.y,g.x,g.y,h),l=J):(u=v?this._writeVertex(o,y,_,c,t.x,t.y,U.x,U.y,g.x,g.y,h):a,this._writeTriangle(u,at,J),l=J),s){const E=u;u=l,l=E}break}}}}}export{Ot as a,Pt as c,At as i};
//# sourceMappingURL=TurboLine-BDAOZiMI.js.map
