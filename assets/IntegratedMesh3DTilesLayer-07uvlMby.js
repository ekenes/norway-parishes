import{eA as j,ag as b,aX as A,eH as _,bR as x,bW as $,bY as E,aN as g,I as z,z as S,U as V,s as R,eB as X,j as u,m as d,k as W}from"./index-CaYX07dN.js";import{S as k}from"./MultiOriginJSONSupport-Bi5uKwj-.js";import{c as P,u as p,E as I,s as T,l as N,d as D,R as y}from"./vec32-wEariDHf.js";import{i as F}from"./APIKeyMixin-DwT4LJn1.js";import{l as G}from"./ArcGISService-DJzSwl4t.js";import{e as q}from"./CustomParametersMixin-Cb_T5l_q.js";import{b as K}from"./OperationalLayer-Da4YsTIo.js";import{j as B}from"./PortalLayer-Ciik5dRx.js";import{c as H,y as O}from"./commonProperties-DBW-YxFy.js";import{$ as U,Z as Y,w as Z}from"./elevationInfoUtils-BJGnT1-u.js";import"./portalItemUtils-BBW6qNW0.js";let m=class extends G(K(B(j(k(q(F(X))))))){constructor(i){super(i),this.operationalLayerType="IntegratedMesh3DTilesLayer",this.spatialReference=new b({wkid:4326,vcsWkid:115700}),this.fullExtent=new A(-180,-90,180,90,this.spatialReference),this.url=null,this.type="integrated-mesh-3dtiles",this.path=null,this.minScale=0,this.maxScale=0}set elevationInfo(i){this._set("elevationInfo",i),this._validateElevationInfo()}_verifyArray(i,r){if(!Array.isArray(i)||i.length<r)return!1;for(const n of i)if(typeof n!="number")return!1;return!0}_initFullExtent(i){var L,M;const r=(L=i.root)==null?void 0:L.boundingVolume;if(!r)return;if(r.box){const t=r==null?void 0:r.box;if(t[3]>7972671&&t[7]>7972671&&t[11]>7945940)return}const n=(M=i.root)==null?void 0:M.transform,h=g();if(r.region&&this._verifyArray(r.region,6)){const t=r.region,l=_(t[0]),o=_(t[1]),a=t[4],s=_(t[2]),e=_(t[3]),f=t[5];this.fullExtent=new A({xmin:l,ymin:o,zmin:a,xmax:s,ymax:e,zmax:f,spatialReference:this.spatialReference})}else if(r.sphere&&this._verifyArray(r.sphere,4)){const t=r.sphere,l=x(t[0],t[1],t[2]),o=t[3]/Math.sqrt(3),a=g();P(a,l,x(o,o,o));const s=g();if(p(s,l,x(o,o,o)),n&&this._verifyArray(n,16)){const v=n;I(h,a,v),T(a,h),I(h,s,v),T(s,h)}$(a,E,0,a,b.WGS84,0),$(s,E,0,s,b.WGS84,0);const e=g(),f=g();N(e,a,s),D(f,a,s),this.fullExtent=new A({xmin:e[0],ymin:e[1],zmin:e[2],xmax:f[0],ymax:f[1],zmax:f[2],spatialReference:this.spatialReference})}else if(r.box&&this._verifyArray(r.box,12)){const t=r.box,l=x(t[0],t[1],t[2]),o=x(t[3],t[4],t[5]),a=x(t[6],t[7],t[8]),s=x(t[9],t[10],t[11]),e=[];for(let c=0;c<8;++c)e.push(g());if(p(e[0],l,o),p(e[0],e[0],a),p(e[0],e[0],s),y(e[1],l,o),p(e[1],e[1],a),p(e[1],e[1],s),p(e[2],l,o),y(e[2],e[2],a),p(e[2],e[2],s),y(e[3],l,o),y(e[3],e[3],a),p(e[3],e[3],s),p(e[4],l,o),p(e[4],e[4],a),y(e[4],e[4],s),y(e[5],l,o),p(e[5],e[5],a),y(e[5],e[5],s),p(e[6],l,o),y(e[6],e[6],a),y(e[6],e[6],s),y(e[7],l,o),y(e[7],e[7],a),y(e[7],e[7],s),n&&this._verifyArray(n,16)){const c=n;for(let w=0;w<8;++w)I(e[w],e[w],c)}const f=x(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),v=x(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE);for(let c=0;c<8;++c)$(e[c],E,0,e[c],b.WGS84,0),N(v,v,e[c]),D(f,f,e[c]);this.fullExtent=new A({xmin:v[0],ymin:v[1],zmin:v[2],xmax:f[0],ymax:f[1],zmax:f[2],spatialReference:this.spatialReference})}}async load(i){return this.addResolvingPromise(this._doLoad(i)),this}async _doLoad(i){const r=i!=null?i.signal:null;try{await this.loadFromPortal({supportedTypes:["3DTiles Service"],validateItem:n=>{var h;if((h=n.typeKeywords)!=null&&h.includes("IntegratedMesh"))return!0;throw new z("portal:invalid-layer-item-type","Invalid layer item, expected '${expectedType}' ",{expectedType:"3DTiles Service containing IntegratedMesh"})}},i)}catch(n){S(n)}this.url&&await V(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:r}).then(h=>{this._initFullExtent(h.data)},h=>{S(h)})}async fetchAttributionData(){return this.load().then(()=>({}))}_validateElevationInfo(){const i=this.elevationInfo,r="Integrated mesh 3d tiles layers";U(R.getLogger(this),Y(r,"absolute-height",i)),U(R.getLogger(this),Z(r,i))}};u([d({type:["IntegratedMesh3DTilesLayer"]})],m.prototype,"operationalLayerType",void 0),u([d({type:b})],m.prototype,"spatialReference",void 0),u([d({type:A})],m.prototype,"fullExtent",void 0),u([d(H)],m.prototype,"elevationInfo",null),u([d({type:["show","hide"]})],m.prototype,"listMode",void 0),u([d(O)],m.prototype,"url",void 0),u([d({readOnly:!0})],m.prototype,"type",void 0),u([d({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],m.prototype,"path",void 0),u([d({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:!1,write:!1}}}})],m.prototype,"minScale",void 0),u([d({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:!1,write:!1}}}})],m.prototype,"maxScale",void 0),m=u([W("esri.layers.IntegratedMesh3DTilesLayer")],m);const le=m;export{le as default};
//# sourceMappingURL=IntegratedMesh3DTilesLayer-07uvlMby.js.map
