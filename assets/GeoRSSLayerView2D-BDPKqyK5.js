import{ao as l,dx as h,dy as g,ae as w,$ as d,dz as f,dA as n,j as u,k as V}from"./index-BlI3-bLW.js";import{j as b,y as S}from"./LayerView-cNLJnHXu.js";import{t as _}from"./GraphicContainer-DFdah3cc.js";import{F as T}from"./GraphicsView2D-DqSdAy4m.js";import"./utils-BQBvadb7.js";import"./Container-D5ErPAWA.js";import"./MapView-D3t7m4ht.js";import"./CollectionFlattener-3eM1v2LV.js";import"./TileInfo-DFJI64Z_.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-iMtMd3hw.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-h9VUyOKv.js";import"./signal-gB0lUyGH.js";import"./ColorBackground-Dh6WTEmw.js";import"./basemapUtils-CpQKNmzZ.js";import"./TablesMixin-BBwIJ_1A.js";import"./HeightModelInfo-C6jIS8MN.js";import"./ReactiveMap-3vvT9Kug.js";import"./a11yUtils-DmLyKZaj.js";import"./ViewingMode-dBUh39ak.js";import"./mat2df32-orApM5a3.js";import"./mat3-B87gwDFC.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-CL7wTv4C.js";import"./Tile-BOGsfmsF.js";import"./TileKey-Dpr9EkD2.js";import"./QueueProcessor--_FxnGSK.js";import"./quickselect-QQC62dOK.js";import"./vec32-Bu1rR2Op.js";import"./definitions-DyYHcW4a.js";import"./enums-Dk3osxpS.js";import"./Texture-BpDQ7iyl.js";import"./imageUtils-BHxjPLz8.js";import"./capabilities-DWNhET5Y.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-IeUjKp3y.js";import"./accessibleHandler-C7bYl-On.js";import"./GoTo-RVryM1qS.js";import"./ZoomViewModel-BUPOJ_U8.js";import"./EffectView-C1ZNJw2F.js";import"./layerViewUtils-Bhv08Mti.js";import"./AGraphicContainer-kcVCyFNP.js";import"./TechniqueInstance-DtRjyKit.js";import"./UpdateTracking2D-BWcqQWWe.js";import"./BindType-BmZEZMMh.js";import"./Util-NGItsJfU.js";import"./Program-p0oH2eN1.js";import"./BufferObject-BbYHURCf.js";import"./LabelMetric-Dl3C8inz.js";import"./VertexElementDescriptor-BLyltQyJ.js";import"./BoundingBox-CnpCxTZE.js";import"./TileContainer-CZfuwx_b.js";import"./WGLContainer-CbJIovZd.js";import"./VertexArrayObject-Dk06w4gg.js";import"./ProgramTemplate-ByBSBGwm.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-_HstTwJY.js";import"./config-BOD8--da.js";import"./earcut-D9gy186-.js";import"./featureConversionUtils-BeHCc4sF.js";import"./FeatureCommandQueue-C-uhr-hh.js";import"./CIMSymbolHelper-C_4SNn9W.js";import"./BidiEngine-QXap_35O.js";import"./fontUtils-Dv8IQ33j.js";import"./GeometryUtils-Cv4fMafs.js";import"./Rect-CUzevAry.js";import"./constants-F8oTIn7N.js";import"./AttributeStore-Cd7Swg3h.js";import"./TimeOnly-Bu1ihd0I.js";import"./timeSupport-CiRu6pZj.js";import"./labelUtils-DiXPDPuN.js";import"./normalizeUtilsSync-DD0qYUp2.js";let y=class extends b(S){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(t,o){if(!this.graphicsViews.length)return null;const e=this.layer;return this.graphicsViews.reverse().flatMap(r=>{const i=this._popupTemplates.get(r),s=r.hitTest(t);for(const p of s)p.layer=e,p.sourceLayer=e,p.popupTemplate=i;return s}).map(r=>({type:"graphic",graphic:r,layer:e,mapPoint:t}))}update(t){if(this.graphicsViews)for(const o of this.graphicsViews)o.processUpdate(t)}attach(){this.addAttachHandles([l(()=>{var t;return(t=this.layer)==null?void 0:t.featureCollections},t=>{this._clear();for(const{popupInfo:o,featureSet:e,layerDefinition:r}of t){const i=g.fromJSON(e),s=new w(i.features),p=r.drawingInfo,c=o?d.fromJSON(o):null,m=f(p.renderer),a=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:m,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[i.geometryType]=a,this._popupTemplates.set(a,c),i.geometryType!=="polygon"||this.layer.polygonSymbol?i.geometryType!=="polyline"||this.layer.lineSymbol?i.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=m.symbol):this.layer.lineSymbol=m.symbol:this.layer.polygonSymbol=m.symbol,this.graphicsViews.push(a),this.container.addChild(a.container)}},h),l(()=>{var t;return(t=this.layer)==null?void 0:t.polygonSymbol},t=>{this._graphicsViewMap.polygon.renderer=new n({symbol:t})},h),l(()=>{var t;return(t=this.layer)==null?void 0:t.lineSymbol},t=>{this._graphicsViewMap.polyline.renderer=new n({symbol:t})},h),l(()=>{var t;return(t=this.layer)==null?void 0:t.pointSymbol},t=>{this._graphicsViewMap.point.renderer=new n({symbol:t})},h)])}detach(){this._clear()}moveEnd(){}viewChange(){for(const t of this.graphicsViews)t.viewChange()}_clear(){this.container.removeAllChildren();for(const t of this.graphicsViews)t.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=u([V("esri.views.2d.layers.GeoRSSLayerView2D")],y);const Gt=y;export{Gt as default};
//# sourceMappingURL=GeoRSSLayerView2D-BDPKqyK5.js.map
