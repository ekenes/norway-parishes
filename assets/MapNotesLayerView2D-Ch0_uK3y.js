import{d6 as u,ae as f,c4 as w,aq as m,ao as a,dx as h,ar as y,j as _,k as V}from"./index-BlI3-bLW.js";import{j as v,y as C}from"./LayerView-cNLJnHXu.js";import{t as c}from"./GraphicContainer-DFdah3cc.js";import{F as g}from"./GraphicsView2D-DqSdAy4m.js";import"./utils-BQBvadb7.js";import"./Container-D5ErPAWA.js";import"./MapView-D3t7m4ht.js";import"./CollectionFlattener-3eM1v2LV.js";import"./TileInfo-DFJI64Z_.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-iMtMd3hw.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-h9VUyOKv.js";import"./signal-gB0lUyGH.js";import"./ColorBackground-Dh6WTEmw.js";import"./basemapUtils-CpQKNmzZ.js";import"./TablesMixin-BBwIJ_1A.js";import"./HeightModelInfo-C6jIS8MN.js";import"./ReactiveMap-3vvT9Kug.js";import"./a11yUtils-DmLyKZaj.js";import"./ViewingMode-dBUh39ak.js";import"./mat2df32-orApM5a3.js";import"./mat3-B87gwDFC.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-CL7wTv4C.js";import"./Tile-BOGsfmsF.js";import"./TileKey-Dpr9EkD2.js";import"./QueueProcessor--_FxnGSK.js";import"./quickselect-QQC62dOK.js";import"./vec32-Bu1rR2Op.js";import"./definitions-DyYHcW4a.js";import"./enums-Dk3osxpS.js";import"./Texture-BpDQ7iyl.js";import"./imageUtils-BHxjPLz8.js";import"./capabilities-DWNhET5Y.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-IeUjKp3y.js";import"./accessibleHandler-C7bYl-On.js";import"./GoTo-RVryM1qS.js";import"./ZoomViewModel-BUPOJ_U8.js";import"./EffectView-C1ZNJw2F.js";import"./layerViewUtils-Bhv08Mti.js";import"./AGraphicContainer-kcVCyFNP.js";import"./TechniqueInstance-DtRjyKit.js";import"./UpdateTracking2D-BWcqQWWe.js";import"./BindType-BmZEZMMh.js";import"./Util-NGItsJfU.js";import"./Program-p0oH2eN1.js";import"./BufferObject-BbYHURCf.js";import"./LabelMetric-Dl3C8inz.js";import"./VertexElementDescriptor-BLyltQyJ.js";import"./BoundingBox-CnpCxTZE.js";import"./TileContainer-CZfuwx_b.js";import"./WGLContainer-CbJIovZd.js";import"./VertexArrayObject-Dk06w4gg.js";import"./ProgramTemplate-ByBSBGwm.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-_HstTwJY.js";import"./config-BOD8--da.js";import"./earcut-D9gy186-.js";import"./featureConversionUtils-BeHCc4sF.js";import"./FeatureCommandQueue-C-uhr-hh.js";import"./CIMSymbolHelper-C_4SNn9W.js";import"./BidiEngine-QXap_35O.js";import"./fontUtils-Dv8IQ33j.js";import"./GeometryUtils-Cv4fMafs.js";import"./Rect-CUzevAry.js";import"./constants-F8oTIn7N.js";import"./AttributeStore-Cd7Swg3h.js";import"./TimeOnly-Bu1ihd0I.js";import"./timeSupport-CiRu6pZj.js";import"./labelUtils-DiXPDPuN.js";import"./normalizeUtilsSync-DD0qYUp2.js";const d="sublayers",l="layerView",H=new Set(["default"]);let n=class extends v(C){constructor(){super(...arguments),this._highlightIds=new Map}*graphicsViews(){this._graphicsViewsFeatureCollectionMap==null?this._graphicsViews==null?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys()}async hitTest(i,t){return Array.from(this.graphicsViews(),e=>{const s=e.hitTest(i);if(this._graphicsViewsFeatureCollectionMap!=null){const o=this._graphicsViewsFeatureCollectionMap.get(e);for(const r of s)!r.popupTemplate&&o.popupTemplate&&(r.popupTemplate=o.popupTemplate),r.sourceLayer=r.layer=this.layer}return s}).flat().map(e=>({type:"graphic",graphic:e,layer:this.layer,mapPoint:i}))}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof u?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(s=>s&&s.uid):f.isCollection(i)&&(t=i.map(s=>s&&s.uid).toArray());const e=t==null?void 0:t.filter(w);return e!=null&&e.length?(this._addHighlight(e),m(()=>this._removeHighlight(e))):m()}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),e=this.layer.featureCollections;if(e!=null&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of e){const o=new c(this.view.featuresTilingScheme),r=new g({view:i,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:o});this._graphicsViewsFeatureCollectionMap.set(r,s),this.container.addChild(r.container),this.addHandles([a(()=>s.visible,p=>r.container.visible=p,h),a(()=>r.updating,()=>this.notifyChange("updating"),h)],l)}this._updateHighlight()}else this.layer.sublayers!=null&&this.addHandles(y(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),d)}detach(){this._destroyGraphicsViews(),this.removeHandles(d)}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(l);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),this.layer.sublayers==null)return;const i=[],t=this.view,e=()=>this.requestUpdate();for(const s of this.layer.sublayers){const o=new c(this.view.featuresTilingScheme);o.fadeTransitionEnabled=!0;const r=new g({view:t,graphics:s.graphics,requestUpdateCallback:e,container:o});this.addHandles([s.on("graphic-update",r.graphicUpdateHandler),a(()=>s.visible,p=>r.container.visible=p,h),a(()=>r.updating,()=>this.notifyChange("updating"),h)],l),this.container.addChild(r.container),i.push(r)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys()),t=this._getHighlightBits(H);for(const e of this.graphicsViews())e.setHighlight(i.map(s=>({objectId:s,highlightFlags:t})))}};n=_([V("esri.views.2d.layers.MapNotesLayerView2D")],n);const Ri=n;export{Ri as default};
//# sourceMappingURL=MapNotesLayerView2D-Ch0_uK3y.js.map
