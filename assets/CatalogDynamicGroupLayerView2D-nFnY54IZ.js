import{j as o,m as d,k as $,ae as S,fd as U,gh as _,aq as x,fj as H,s as I,bb as g}from"./index-CaYX07dN.js";import{j as O,y as T}from"./LayerView-wpsa4vXn.js";import"./utils-BQBvadb7.js";import"./Container-D09D88uh.js";import"./MapView-DeTKAlfq.js";import"./CollectionFlattener-Cs8eeHoL.js";import"./TileInfo-BSYq2maB.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-Ki0Dm_pE.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-DVW4ffuw.js";import"./signal-h7c3Cbqx.js";import"./ColorBackground-DTkXfUEZ.js";import"./basemapUtils-DjtI-qAC.js";import"./TablesMixin-lGcuma7O.js";import"./HeightModelInfo-Ps3uWwtj.js";import"./ReactiveMap-DfX-JlfE.js";import"./a11yUtils-hxJ2PIAa.js";import"./ViewingMode-dBUh39ak.js";import"./mat2df32-orApM5a3.js";import"./mat3-D3paxIKo.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-r3JWdwa4.js";import"./Tile-BBKZKWu0.js";import"./TileKey-BQaxyr3S.js";import"./QueueProcessor-CNwMRf4k.js";import"./quickselect-QQC62dOK.js";import"./vec32-wEariDHf.js";import"./definitions-DyYHcW4a.js";import"./enums-Dk3osxpS.js";import"./Texture-Cm9QHY0k.js";import"./imageUtils-BjhJIfom.js";import"./capabilities-DWNhET5Y.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-IeUjKp3y.js";import"./accessibleHandler-Cd7wI78g.js";import"./GoTo-BKjZ7prJ.js";import"./ZoomViewModel-DURzd7wL.js";import"./EffectView-Bw9Ukhyr.js";import"./layerViewUtils-DC5ktDbq.js";const y=Symbol(),j=l=>{let r=class extends l{constructor(){super(...arguments),this.layerViews=new S,this._debouncedUpdate=U(async()=>{const{layer:e,parent:t}=this,a=t==null?void 0:t.footprintLayerView;let s=[];const p=this._createQuery();if(p&&a){const{features:u}=await a.queryFeatures(p);this.suspended||(s=u.map(h=>e.acquireLayer(h)))}this.removeHandles(y),this.addHandles(s,y)})}get creatingLayerViews(){var e;return((e=this.view)==null?void 0:e.layerViewManager.isCreatingLayerViewsForLayer(this.layer))??!1}isUpdating(){return this.creatingLayerViews||this.layer.updating||this.layerViews.some(e=>e.updating)}enableLayerUpdates(){return _([this._updatingHandles.addWhen(()=>{var e,t;return((t=(e=this.parent)==null?void 0:e.footprintLayerView)==null?void 0:t.dataUpdating)===!1},()=>this.updateLayers()),this._updatingHandles.add(()=>{var e,t,a,s,p;return[this.layer.maximumVisibleSublayers,(e=this.layer.parent)==null?void 0:e.orderBy,(a=(t=this.parent)==null?void 0:t.footprintLayerView)==null?void 0:a.filter,(p=(s=this.parent)==null?void 0:s.footprintLayerView)==null?void 0:p.timeExtent,this.suspended]},()=>this.updateLayers()),x(()=>this.removeHandles(y))])}updateLayers(){this.suspended?this.removeHandles(y):this._updatingHandles.addPromise(H(this._debouncedUpdate()).catch(e=>{I.getLogger(this).error(e)}))}_createQuery(){var V,v;const e=(V=this.parent)==null?void 0:V.footprintLayerView,t=(v=this.layer)==null?void 0:v.parent;if(!e||!t||t.destroyed)return null;const{layer:{maximumVisibleSublayers:a},view:{scale:s}}=this;if(!a)return null;const{itemTypeField:p,itemSourceField:u,itemNameField:h,minScaleField:c,maxScaleField:L,objectIdField:b,orderBy:w}=t,C=g(`${c} IS NULL OR ${s} <= ${c} OR ${c} = 0`,`${L} IS NULL OR ${s} >= ${L}`),n=w==null?void 0:w.find(m=>m.field&&!m.valueExpression),i=e.createQuery();if(i.returnGeometry=!1,i.num=a,i.outFields=[b,u,h],i.where=g(i.where,C),this.unsupportedItemTypes!=null){const m=`${p} NOT IN (${this.unsupportedItemTypes.map(F=>`'${F}'`)})`;i.where=g(i.where,m)}return n!=null&&n.field&&(i.orderByFields=[`${n.field} ${n.order==="descending"?"DESC":"ASC"}`],i.outFields.push(n.field)),i}};return o([d({readOnly:!0})],r.prototype,"creatingLayerViews",null),o([d()],r.prototype,"layer",void 0),o([d()],r.prototype,"layerViews",void 0),o([d({readOnly:!0})],r.prototype,"unsupportedItemTypes",void 0),o([d()],r.prototype,"parent",void 0),o([d({readOnly:!0})],r.prototype,"isUpdating",null),r=o([$("esri.views.layers.CatalogDynamicGroupLayerView")],r),r};let f=class extends j(O(T)){constructor(){super(...arguments),this.unsupportedItemTypes=["Scene Service"],this.layerViews=new S}attach(){this.addAttachHandles([this.layerViews.on("after-changes",()=>this._updateStageChildren()),this.enableLayerUpdates()])}detach(){this.container.removeAllChildren()}update(l){this.updateLayers()}viewChange(){}moveEnd(){this.requestUpdate()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((l,r)=>this.container.addChildAt(l.container,r))}};f=o([$("esri.views.2d.layers.CatalogDynamicGroupLayerView2D")],f);const $e=f;export{$e as default};
//# sourceMappingURL=CatalogDynamicGroupLayerView2D-nFnY54IZ.js.map
