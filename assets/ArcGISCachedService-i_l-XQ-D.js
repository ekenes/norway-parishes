import{j as l,m as r,o as m,ag as x,k as S}from"./index-Club40b3.js";import{z as h}from"./TileInfo-CH8_vkEc.js";import{e as I}from"./TileInfoTilemapCache-BOVdkner.js";import{T as O}from"./TilemapCache-BNGi9R84.js";const T=y=>{let t=class extends y{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}destroy(){var i,e;(e=(i=this.tilemapCache)==null?void 0:i.destroy)==null||e.call(i)}readMinScale(i,e){return e.minLOD!=null&&e.maxLOD!=null?i:0}readMaxScale(i,e){return e.minLOD!=null&&e.maxLOD!=null?i:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(i,e,f){var u;const v=(u=e.capabilities)==null?void 0:u.includes("Tilemap");let{minLOD:n,maxLOD:o,minScale:p,maxScale:c}=e;if(n==null&&o==null&&p!==0&&c!==0){const a=s=>Math.round(1e4*s)/1e4;p=a(p||e.tileInfo.lods[0].scale),c=a(c||e.tileInfo.lods[e.tileInfo.lods.length-1].scale);for(const s of e.tileInfo.lods){const d=a(s.scale);n=d>=p?s.level:n,o=d>=c?s.level:o}}if(v)return new O({layer:this,minLOD:n,maxLOD:o});if(e.tileInfo){const a=new h;return a.read(e.tileInfo,f),new I(a,n,o)}return null}};return l([r({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),l([r()],t.prototype,"minScale",void 0),l([m("service","minScale")],t.prototype,"readMinScale",null),l([r()],t.prototype,"maxScale",void 0),l([m("service","maxScale")],t.prototype,"readMaxScale",null),l([r({type:x})],t.prototype,"spatialReference",void 0),l([r({readOnly:!0})],t.prototype,"supportsBlankTile",null),l([r({type:h})],t.prototype,"tileInfo",void 0),l([r()],t.prototype,"tilemapCache",void 0),l([m("service","tilemapCache",["capabilities","tileInfo"])],t.prototype,"readTilemapCache",null),l([r()],t.prototype,"version",void 0),t=l([S("esri.layers.mixins.ArcGISCachedService")],t),t};export{T as p};
//# sourceMappingURL=ArcGISCachedService-i_l-XQ-D.js.map
