const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/editingTools-B0Uzb-GU.js","assets/index-Club40b3.js","assets/index-DP-ePGHQ.css","assets/projectVectorToVector-C98D5e7p.js","assets/projectPointToVector-DnOU-ij9.js","assets/elevationInfoUtils-DCMXLaoE.js","assets/vec32-Aogwsubb.js","assets/UpdatingHandles-Dsl38oBb.js","assets/geodesicUtils-DLLGvWb_.js","assets/geometryEngine-DBs4u2je.js","assets/geometryEngineBase-B0ZyeKAX.js","assets/_commonjsHelpers-DCkdB7M8.js","assets/hydrated-CtzVTXz_.js","assets/quat-B2H-09EB.js","assets/mat3f64-q3fE-ZOt.js","assets/quatf64-aQ5IuZRd.js","assets/ReactiveSet-DpcwFecn.js","assets/ByteSizeUnit-BsxeN7wM.js","assets/plane-CJUeklZq.js","assets/mat4f64-CSKppSlJ.js","assets/sphere-CpXVSZcl.js","assets/mat3-DrMmd9ov.js","assets/MeshTransform-DrbYjye5.js","assets/meshVertexSpaceUtils-D6nNPPQ9.js","assets/MeshLocalVertexSpace-ByQayPtb.js","assets/MapView-BeVuNCRF.js","assets/CollectionFlattener-CDWmfFqW.js","assets/TileInfo-CH8_vkEc.js","assets/TileKey-DZd6gJy7.js","assets/jsxFactory-D5SMxxYk.js","assets/uuid-Cl5lrJ4c.js","assets/signal-BaP9cQZH.js","assets/ColorBackground-C9MmleQD.js","assets/basemapUtils-DcCkyfUy.js","assets/TablesMixin-EU-_VM0Q.js","assets/HeightModelInfo-CyeP0S36.js","assets/ReactiveMap-DqPTRyUa.js","assets/a11yUtils-B2v4ITWo.js","assets/ViewingMode-dBUh39ak.js","assets/mat2df32-orApM5a3.js","assets/vec2f32-BbH2jxlN.js","assets/unitBezier-BX6NeAEr.js","assets/Scheduler-C3tfNFXN.js","assets/Tile-DRBHg1ov.js","assets/TileKey-Ba8uBVQH.js","assets/QueueProcessor-D2gBLI6i.js","assets/quickselect-QQC62dOK.js","assets/definitions-DyYHcW4a.js","assets/enums-Dk3osxpS.js","assets/Texture-BcrxBDUu.js","assets/imageUtils-BYD0O-xd.js","assets/capabilities-DWNhET5Y.js","assets/themeUtils-C3zvZbsE.js","assets/globalCss-IeUjKp3y.js","assets/accessibleHandler-CU8kWlKG.js","assets/GoTo-DB7hDTs4.js","assets/ZoomViewModel-BnrDWQcO.js","assets/earcut-D9gy186-.js","assets/triangle-CH9lW1Vb.js","assets/lineSegment-C6dqmjUa.js","assets/spatialReferenceEllipsoidUtils-Bn5mK_Rv.js","assets/cimSymbolUtils-CB3lPhz0.js","assets/drapedUtils-bBpDQrpT.js","assets/boundedPlane-nIGzKOiu.js"])))=>i.map(i=>d[i]);
import{an as u,fd as v,aq as l,fe as y,dx as d,ff as f,_ as g,j as r,m as n,k as T}from"./index-Club40b3.js";import{h as w}from"./UpdatingHandles-Dsl38oBb.js";import{_ as p}from"./MapView-BeVuNCRF.js";import"./CollectionFlattener-CDWmfFqW.js";import"./TileInfo-CH8_vkEc.js";import"./TileKey-DZd6gJy7.js";import"./jsxFactory-D5SMxxYk.js";import"./uuid-Cl5lrJ4c.js";import"./signal-BaP9cQZH.js";import"./ColorBackground-C9MmleQD.js";import"./basemapUtils-DcCkyfUy.js";import"./TablesMixin-EU-_VM0Q.js";import"./HeightModelInfo-CyeP0S36.js";import"./ReactiveMap-DqPTRyUa.js";import"./a11yUtils-B2v4ITWo.js";import"./ViewingMode-dBUh39ak.js";import"./mat2df32-orApM5a3.js";import"./mat3-DrMmd9ov.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-C3tfNFXN.js";import"./Tile-DRBHg1ov.js";import"./TileKey-Ba8uBVQH.js";import"./QueueProcessor-D2gBLI6i.js";import"./quickselect-QQC62dOK.js";import"./vec32-Aogwsubb.js";import"./definitions-DyYHcW4a.js";import"./enums-Dk3osxpS.js";import"./Texture-BcrxBDUu.js";import"./imageUtils-BYD0O-xd.js";import"./capabilities-DWNhET5Y.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-IeUjKp3y.js";import"./accessibleHandler-CU8kWlKG.js";import"./GoTo-DB7hDTs4.js";import"./ZoomViewModel-BnrDWQcO.js";const m={redo:"r",undo:"z"},h=Symbol(),c=Symbol(),_=Symbol();let i=class extends u{constructor(t){super(t),this._tool=null,this._updatingHandles=new w,this.enabled=!1,this._onPointerMove=v(async e=>{const o=await this._updatingHandles.addPromise(this._findElementAtScreenPoint(e));this.destroyed||(this.removeHandles(c),o&&o!==this.selectedElement&&(this.view.cursor="pointer",this.addHandles(l(()=>this.view.cursor=null),c)))})}initialize(){this.addHandles(y(this._updatingHandles)),this._updatingHandles.add(()=>this.enabled,t=>this._setEnabled(t),d),this._updatingHandles.add(()=>this._preferredInteractionTool,()=>this._preferredInteractionToolChanged())}get _validatedSelectedElement(){const t=this.selectedElement;if(!t)return null;const{layer:{source:e}}=this;return e?"hasElement"in e?e.hasElement(t)?t:null:e===t?t:null:null}get _preferredInteractionTool(){var t;return((t=this.options)==null?void 0:t.tool)??"transform"}get updating(){return this._updatingHandles.updating}_setEnabled(t){if(this.removeHandles(h),!t)return;const{view:e}=this;this.addHandles([e.on("immediate-click",o=>this._onClick(o),p.TOOL),e.on("pointer-move",o=>this._onPointerMove(o).catch(()=>{}),p.TOOL),e.on("key-down",o=>{var a,s;o.key===m.undo&&((a=this._tool)!=null&&a.canUndo())&&(this._tool.undo(),o.stopPropagation()),o.key===m.redo&&((s=this._tool)!=null&&s.canRedo())&&(this._tool.redo(),o.stopPropagation())}),this._updatingHandles.add(()=>this._validatedSelectedElement,o=>this._selectedElementChanged(o),d),l(()=>{e.cursor=null,this._removeTool()})],h)}async _findElementAtScreenPoint(t){const e=(await this.view.hitTest(t,{include:[this.layer]})).results[0];return(e==null?void 0:e.type)==="media"?e.element:null}async _onClick(t){await this._updatingHandles.addPromise(t.async(async()=>{const e=await this._findElementAtScreenPoint(t);this.destroyed||(e&&t.stopPropagation(),this.selectedElement=e,this.selectedElement&&(this.view.cursor=null))}))}_preferredInteractionToolChanged(){const{_tool:t}=this;t&&(this._preferredInteractionTool===t.type||this._updatingHandles.addPromise(this._recreateTool()))}async _recreateTool(){this.removeHandles(_),this._removeTool();const t=this._validatedSelectedElement;if(!t)return;const e=new AbortController;this.addHandles(f(e),_);const{TransformTool:o,ControlPointsTransformTool:a}=await g(()=>import("./editingTools-B0Uzb-GU.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63]));if(e.signal.aborted)return;const{view:s}=this;switch(this._preferredInteractionTool){case"transform":this._tool=new o({target:t,view:s});break;case"reshape":this._tool=new a({mediaElement:t,view:s})}this.addHandles([l(()=>{this._tool&&(s.tools.remove(this._tool),this._tool=null)})],this._tool),s.addAndActivateTool(this._tool)}_removeTool(){this._tool&&this.removeHandles(this._tool)}async _selectedElementChanged(t){t!=null&&t.georeference?await this._updatingHandles.addPromise(this._recreateTool()):this._removeTool()}};r([n()],i.prototype,"_validatedSelectedElement",null),r([n()],i.prototype,"_preferredInteractionTool",null),r([n({constructOnly:!0})],i.prototype,"view",void 0),r([n({constructOnly:!0})],i.prototype,"layer",void 0),r([n()],i.prototype,"selectedElement",void 0),r([n()],i.prototype,"enabled",void 0),r([n()],i.prototype,"options",void 0),r([n()],i.prototype,"updating",null),i=r([T("esri.views.2d.layers.support.MediaLayerInteraction")],i);export{i as MediaLayerInteraction};
//# sourceMappingURL=MediaLayerInteraction-Cq3FWvf4.js.map
