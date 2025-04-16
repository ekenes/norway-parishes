const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/editingTools-C1ZxP0sv.js","assets/index-BlI3-bLW.js","assets/index-DQ5T3qjA.css","assets/projectVectorToVector-tbCN3rJ2.js","assets/projectPointToVector-DI38NV1n.js","assets/elevationInfoUtils-DYWR81oj.js","assets/vec32-Bu1rR2Op.js","assets/UpdatingHandles-h9VUyOKv.js","assets/geodesicUtils-BvsB3hPo.js","assets/geometryEngine-DDIA4LjT.js","assets/geometryEngineBase-B0ZyeKAX.js","assets/_commonjsHelpers-DCkdB7M8.js","assets/hydrated-D68hhxJV.js","assets/quat-WKekXwkC.js","assets/mat3f64-q3fE-ZOt.js","assets/quatf64-aQ5IuZRd.js","assets/ReactiveSet-DcdHPR8R.js","assets/ByteSizeUnit-BsxeN7wM.js","assets/plane-ELSex9JT.js","assets/mat4f64-CSKppSlJ.js","assets/sphere-CIp6bdxt.js","assets/mat3-B87gwDFC.js","assets/MeshTransform-C-qgZjqt.js","assets/meshVertexSpaceUtils-DTgChxUV.js","assets/MeshLocalVertexSpace-JIunC1y7.js","assets/MapView-D3t7m4ht.js","assets/CollectionFlattener-3eM1v2LV.js","assets/TileInfo-DFJI64Z_.js","assets/TileKey-DZd6gJy7.js","assets/jsxFactory-iMtMd3hw.js","assets/uuid-Cl5lrJ4c.js","assets/signal-gB0lUyGH.js","assets/ColorBackground-Dh6WTEmw.js","assets/basemapUtils-CpQKNmzZ.js","assets/TablesMixin-BBwIJ_1A.js","assets/HeightModelInfo-C6jIS8MN.js","assets/ReactiveMap-3vvT9Kug.js","assets/a11yUtils-DmLyKZaj.js","assets/ViewingMode-dBUh39ak.js","assets/mat2df32-orApM5a3.js","assets/vec2f32-BbH2jxlN.js","assets/unitBezier-BX6NeAEr.js","assets/Scheduler-CL7wTv4C.js","assets/Tile-BOGsfmsF.js","assets/TileKey-Dpr9EkD2.js","assets/QueueProcessor--_FxnGSK.js","assets/quickselect-QQC62dOK.js","assets/definitions-DyYHcW4a.js","assets/enums-Dk3osxpS.js","assets/Texture-BpDQ7iyl.js","assets/imageUtils-BHxjPLz8.js","assets/capabilities-DWNhET5Y.js","assets/themeUtils-C3zvZbsE.js","assets/globalCss-IeUjKp3y.js","assets/accessibleHandler-C7bYl-On.js","assets/GoTo-RVryM1qS.js","assets/ZoomViewModel-BUPOJ_U8.js","assets/earcut-D9gy186-.js","assets/triangle-CCvsAuVO.js","assets/lineSegment-BrBb3QVm.js","assets/spatialReferenceEllipsoidUtils-C_ngEmk8.js","assets/cimSymbolUtils-ByXmgaYr.js","assets/drapedUtils-BX6aF0JY.js","assets/boundedPlane-CJ1pc3-P.js"])))=>i.map(i=>d[i]);
import{an as u,fd as v,aq as l,fe as y,dx as d,ff as f,_ as g,j as r,m as n,k as T}from"./index-BlI3-bLW.js";import{h as w}from"./UpdatingHandles-h9VUyOKv.js";import{_ as p}from"./MapView-D3t7m4ht.js";import"./CollectionFlattener-3eM1v2LV.js";import"./TileInfo-DFJI64Z_.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-iMtMd3hw.js";import"./uuid-Cl5lrJ4c.js";import"./signal-gB0lUyGH.js";import"./ColorBackground-Dh6WTEmw.js";import"./basemapUtils-CpQKNmzZ.js";import"./TablesMixin-BBwIJ_1A.js";import"./HeightModelInfo-C6jIS8MN.js";import"./ReactiveMap-3vvT9Kug.js";import"./a11yUtils-DmLyKZaj.js";import"./ViewingMode-dBUh39ak.js";import"./mat2df32-orApM5a3.js";import"./mat3-B87gwDFC.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-CL7wTv4C.js";import"./Tile-BOGsfmsF.js";import"./TileKey-Dpr9EkD2.js";import"./QueueProcessor--_FxnGSK.js";import"./quickselect-QQC62dOK.js";import"./vec32-Bu1rR2Op.js";import"./definitions-DyYHcW4a.js";import"./enums-Dk3osxpS.js";import"./Texture-BpDQ7iyl.js";import"./imageUtils-BHxjPLz8.js";import"./capabilities-DWNhET5Y.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-IeUjKp3y.js";import"./accessibleHandler-C7bYl-On.js";import"./GoTo-RVryM1qS.js";import"./ZoomViewModel-BUPOJ_U8.js";const m={redo:"r",undo:"z"},h=Symbol(),c=Symbol(),_=Symbol();let i=class extends u{constructor(t){super(t),this._tool=null,this._updatingHandles=new w,this.enabled=!1,this._onPointerMove=v(async e=>{const o=await this._updatingHandles.addPromise(this._findElementAtScreenPoint(e));this.destroyed||(this.removeHandles(c),o&&o!==this.selectedElement&&(this.view.cursor="pointer",this.addHandles(l(()=>this.view.cursor=null),c)))})}initialize(){this.addHandles(y(this._updatingHandles)),this._updatingHandles.add(()=>this.enabled,t=>this._setEnabled(t),d),this._updatingHandles.add(()=>this._preferredInteractionTool,()=>this._preferredInteractionToolChanged())}get _validatedSelectedElement(){const t=this.selectedElement;if(!t)return null;const{layer:{source:e}}=this;return e?"hasElement"in e?e.hasElement(t)?t:null:e===t?t:null:null}get _preferredInteractionTool(){var t;return((t=this.options)==null?void 0:t.tool)??"transform"}get updating(){return this._updatingHandles.updating}_setEnabled(t){if(this.removeHandles(h),!t)return;const{view:e}=this;this.addHandles([e.on("immediate-click",o=>this._onClick(o),p.TOOL),e.on("pointer-move",o=>this._onPointerMove(o).catch(()=>{}),p.TOOL),e.on("key-down",o=>{var a,s;o.key===m.undo&&((a=this._tool)!=null&&a.canUndo())&&(this._tool.undo(),o.stopPropagation()),o.key===m.redo&&((s=this._tool)!=null&&s.canRedo())&&(this._tool.redo(),o.stopPropagation())}),this._updatingHandles.add(()=>this._validatedSelectedElement,o=>this._selectedElementChanged(o),d),l(()=>{e.cursor=null,this._removeTool()})],h)}async _findElementAtScreenPoint(t){const e=(await this.view.hitTest(t,{include:[this.layer]})).results[0];return(e==null?void 0:e.type)==="media"?e.element:null}async _onClick(t){await this._updatingHandles.addPromise(t.async(async()=>{const e=await this._findElementAtScreenPoint(t);this.destroyed||(e&&t.stopPropagation(),this.selectedElement=e,this.selectedElement&&(this.view.cursor=null))}))}_preferredInteractionToolChanged(){const{_tool:t}=this;t&&(this._preferredInteractionTool===t.type||this._updatingHandles.addPromise(this._recreateTool()))}async _recreateTool(){this.removeHandles(_),this._removeTool();const t=this._validatedSelectedElement;if(!t)return;const e=new AbortController;this.addHandles(f(e),_);const{TransformTool:o,ControlPointsTransformTool:a}=await g(()=>import("./editingTools-C1ZxP0sv.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63]));if(e.signal.aborted)return;const{view:s}=this;switch(this._preferredInteractionTool){case"transform":this._tool=new o({target:t,view:s});break;case"reshape":this._tool=new a({mediaElement:t,view:s})}this.addHandles([l(()=>{this._tool&&(s.tools.remove(this._tool),this._tool=null)})],this._tool),s.addAndActivateTool(this._tool)}_removeTool(){this._tool&&this.removeHandles(this._tool)}async _selectedElementChanged(t){t!=null&&t.georeference?await this._updatingHandles.addPromise(this._recreateTool()):this._removeTool()}};r([n()],i.prototype,"_validatedSelectedElement",null),r([n()],i.prototype,"_preferredInteractionTool",null),r([n({constructOnly:!0})],i.prototype,"view",void 0),r([n({constructOnly:!0})],i.prototype,"layer",void 0),r([n()],i.prototype,"selectedElement",void 0),r([n()],i.prototype,"enabled",void 0),r([n()],i.prototype,"options",void 0),r([n()],i.prototype,"updating",null),i=r([T("esri.views.2d.layers.support.MediaLayerInteraction")],i);export{i as MediaLayerInteraction};
//# sourceMappingURL=MediaLayerInteraction-DoWUxsv4.js.map
