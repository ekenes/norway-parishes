import{j as s,k as B,an as S,m as l,ie as I,ao as h,ar as R,dx as g,gs as C,s as k,dM as z,fj as O,ig as H,gb as j}from"./index-Club40b3.js";import{W as U,R as q}from"./Features-CSZGh54g.js";import{B as G,n as P,u as N,e as J}from"./jsxFactory-D5SMxxYk.js";import{e as K}from"./globalCss-IeUjKp3y.js";import{e as Q}from"./geometryUtils-CNN2WS8H.js";import"./substitute-BPwVBo6Y.js";import"./ReactiveSet-DpcwFecn.js";import"./ByteSizeUnit-BsxeN7wM.js";import"./AttachmentInfo-DxnhHQ1Q.js";import"./featureLayerUtils-DGP_qgKj.js";import"./uuid-Cl5lrJ4c.js";import"./Heading-CLyF4u-C.js";import"./a11yUtils-B2v4ITWo.js";import"./utils-DkTCm8ZK.js";import"./utils-Bgh6iT7n.js";import"./cimSymbolUtils-CB3lPhz0.js";import"./mat2df32-orApM5a3.js";import"./webStyleSymbolUtils-ldR7EU-j.js";import"./themeUtils-C3zvZbsE.js";import"./shared-LLFgsD6O.js";import"./TimeOnly-DGMQYCDQ.js";import"./FeatureLayer-BT8Bna_d.js";import"./MultiOriginJSONSupport-BEThRq27.js";import"./commonProperties-C7qVnWA0.js";import"./FeatureLayerBase-Brgke90g.js";import"./HeightModelInfo-CyeP0S36.js";import"./LayerFloorInfo-CON6ZVex.js";import"./Relationship-C52zRLrQ.js";import"./serviceCapabilitiesUtils-CiTafVMC.js";import"./editsZScale-Dm-aRfhz.js";import"./APIKeyMixin-CygWNKme.js";import"./ArcGISService-Nvh9xVH1.js";import"./CustomParametersMixin-CWS7gQZS.js";import"./EditBusLayer-CuqbZRUQ.js";import"./FeatureEffectLayer-C8jzoxly.js";import"./FeatureEffect-22EIS-1y.js";import"./FeatureReductionLayer-Cd7ZHusx.js";import"./FeatureReductionSelection-kviuNazU.js";import"./labelingInfo-BYGFQ--y.js";import"./labelUtils-9UeHmwQ0.js";import"./MD5-C9MwAd2G.js";import"./OperationalLayer-Bg1GjXra.js";import"./OrderedLayer-BPW7XlQy.js";import"./OrderByInfo-BdSameQq.js";import"./PortalLayer-CB5zFuuX.js";import"./portalItemUtils-BFPvV2jZ.js";import"./RefreshableLayer-8wKJynh4.js";import"./TemporalLayer-alZzuFqB.js";import"./TimeInfo-DkMYd3l4.js";import"./FeatureTemplate-4pdVRtmp.js";import"./FeatureType-5k9utpDt.js";import"./fieldProperties-BzPjeRbS.js";import"./versionUtils-CA5wZBTi.js";import"./styleUtils-DYnR3WAv.js";import"./popupUtils-UvwxK4SE.js";import"./AlphaCutoff-UcccL64p.js";import"./interfaces-CL2NbQte.js";import"./ReactiveMap-DqPTRyUa.js";import"./NetworkElement-DfYN2Y9z.js";import"./Association-BPG-8ep-.js";import"./layerViewUtils-B5mfX9zq.js";import"./GoTo-DB7hDTs4.js";import"./scaleUtils-Cv2mp88o.js";const m="esri-popup",_=`${m}--is-docked`,u={base:m,baseHidden:`${m}--hidden`,main:`${m}__main-container`,shadow:`${m}--shadow`,isDocked:_,isDockedTopLeft:`${_}-top-left`,isDockedTopCenter:`${_}-top-center`,isDockedTopRight:`${_}-top-right`,isDockedBottomLeft:`${_}-bottom-left`,isDockedBottomCenter:`${_}-bottom-center`,isDockedBottomRight:`${_}-bottom-right`,alignTopCenter:`${m}--aligned-top-center`,alignBottomCenter:`${m}--aligned-bottom-center`,alignTopLeft:`${m}--aligned-top-left`,alignBottomLeft:`${m}--aligned-bottom-left`,alignTopRight:`${m}--aligned-top-right`,alignBottomRight:`${m}--aligned-bottom-right`,pointer:`${m}__pointer`,pointerDirection:`${m}__pointer-direction`};let A=class extends U{constructor(t){super(t)}};A=s([B("esri.widgets.Popup.PopupViewModel")],A);const T=A;let v=class extends S{constructor(){super(...arguments),this.actionBar=!0,this.closeButton=!0,this.collapseButton=!0,this.featureNavigation=!0,this.featureListLayerTitle=!0,this.heading=!0,this.spinner=!0}};s([l({type:Boolean,nonNullable:!0})],v.prototype,"actionBar",void 0),s([l({type:Boolean,nonNullable:!0})],v.prototype,"closeButton",void 0),s([l({type:Boolean,nonNullable:!0})],v.prototype,"collapseButton",void 0),s([l({type:Boolean,nonNullable:!0})],v.prototype,"featureNavigation",void 0),s([l({type:Boolean,nonNullable:!0})],v.prototype,"featureListLayerTitle",void 0),s([l({type:Boolean,nonNullable:!0})],v.prototype,"heading",void 0),s([l({type:Boolean,nonNullable:!0})],v.prototype,"spinner",void 0),v=s([B("esri.widgets.Popup.PopupVisibleElements")],v);const L=v,X=200,$={buttonEnabled:!0,position:"auto",breakpoint:{width:544}};let a=class extends G{constructor(t,e){super(t,e),this._dockAction=new I({id:"popup-dock-action"}),this._featuresWidget=new q({responsiveActionsEnabled:!0}),this._containerNode=null,this._mainContainerNode=null,this._pointerOffsetInPx=16,this._focusAbortController=null,this.alignment="auto",this.dockEnabled=!1,this.headingLevel=2,this.messages=null,this.viewModel=new T,this.visibleElements=new L}initialize(){this.addHandles([h(()=>{var t,e;return[(e=(t=this.viewModel)==null?void 0:t.view)==null?void 0:e.widthBreakpoint,this.dockEnabled]},()=>this._handleDockIcon(),g),h(()=>{var t,e;return[this.dockEnabled,(t=this.messages)==null?void 0:t.undock,(e=this.messages)==null?void 0:e.dock]},()=>this._handleDockEnabled(),g),h(()=>this.dockOptions,t=>{const{_dockAction:e}=this,i=this._featuresWidget.headerActions;i.remove(e),t.buttonEnabled&&i.add(e)},g),h(()=>{var t;return(t=this.viewModel)==null?void 0:t.screenLocation},()=>this._positionContainer()),h(()=>{var t;return[(t=this.viewModel)==null?void 0:t.active,this.dockEnabled]},()=>this._toggleScreenLocationEnabled()),h(()=>{var t,e,i,r,p,o,n;return[(t=this.viewModel)==null?void 0:t.screenLocation,(i=(e=this.viewModel)==null?void 0:e.view)==null?void 0:i.padding,(p=(r=this.viewModel)==null?void 0:r.view)==null?void 0:p.size,(o=this.viewModel)==null?void 0:o.active,(n=this.viewModel)==null?void 0:n.location,this.alignment]},()=>this.reposition()),h(()=>{var t,e;return(e=(t=this.viewModel)==null?void 0:t.view)==null?void 0:e.size},(t,e)=>this._updateDockEnabledForViewSize(t,e)),h(()=>{var t;return(t=this.viewModel)==null?void 0:t.view},(t,e)=>this._viewChange(t,e)),h(()=>{var t,e;return(e=(t=this.viewModel)==null?void 0:t.view)==null?void 0:e.ready},(t,e)=>this._viewReadyChange(t??!1,e??!1)),h(()=>this.viewModel,()=>this._featuresWidget.viewModel=this.viewModel,g),h(()=>this._featureNavigationTop,t=>this._featuresWidget.featureNavigationTop=t,g),h(()=>this.headingLevel,t=>this._featuresWidget.headingLevel=t,g),h(()=>this.visibleElements.actionBar,t=>this._featuresWidget.visibleElements.actionBar=!!t,g),h(()=>this.visibleElements.closeButton,t=>this._featuresWidget.visibleElements.closeButton=!!t,g),h(()=>this.visibleElements.collapseButton,t=>this._featuresWidget.visibleElements.collapseButton=!!t,g),h(()=>this.visibleElements.heading,t=>this._featuresWidget.visibleElements.heading=!!t,g),h(()=>this.visibleElements.spinner,t=>this._featuresWidget.visibleElements.spinner=!!t,g),h(()=>this.visibleElements.featureNavigation,t=>this._featuresWidget.visibleElements.featureNavigation=!!t,g),h(()=>this.visibleElements.featureListLayerTitle,t=>this._featuresWidget.visibleElements.featureListLayerTitle=!!t,g),R(()=>this._featuresWidget,"trigger-header-action",t=>{t.action===this._dockAction&&(this.dockEnabled=!this.dockEnabled)})])}normalizeCtorArgs(t){const e={...t};return(t==null?void 0:t.visibleElements)!=null&&(e.visibleElements=new L(t.visibleElements),t.collapseEnabled!=null&&(e.visibleElements.collapseButton=t.collapseEnabled),t.spinnerEnabled!=null&&(e.visibleElements.spinner=t.spinnerEnabled)),e}destroy(){var t,e;this._dockAction.destroy(),(t=this._featuresWidget)==null||t.destroy(),(e=this._focusAbortController)==null||e.abort()}get _featureNavigationTop(){const{currentAlignment:t,currentDockPosition:e}=this;return t==="bottom-left"||t==="bottom-center"||t==="bottom-right"||e==="top-left"||e==="top-center"||e==="top-right"}get actions(){return this.viewModel.actions}set actions(t){this.viewModel.actions=t}get active(){return this.viewModel.active}get autoCloseEnabled(){return this.viewModel.autoCloseEnabled}set autoCloseEnabled(t){this.viewModel.autoCloseEnabled=t}get defaultPopupTemplateEnabled(){return this.viewModel.defaultPopupTemplateEnabled}set defaultPopupTemplateEnabled(t){this.viewModel.defaultPopupTemplateEnabled=t}get content(){return this.viewModel.content}set content(t){this.viewModel.content=t}get collapsed(){return this._featuresWidget.collapsed}set collapsed(t){this._featuresWidget.collapsed=t}get collapseEnabled(){return C(k.getLogger(this),"collapseEnabled",{replacement:"PopupVisibleElements.collapseButton",version:"4.29"}),this.visibleElements.collapseButton}set collapseEnabled(t){C(k.getLogger(this),"collapseEnabled",{replacement:"PopupVisibleElements.collapseButton",version:"4.29"}),this.visibleElements.collapseButton=t}get currentAlignment(){return this._getCurrentAlignment()}get currentDockPosition(){return this._getCurrentDockPosition()}get dockOptions(){return this._get("dockOptions")||$}set dockOptions(t){var c,d;const e={...$},i=(d=(c=this.viewModel)==null?void 0:c.view)==null?void 0:d.breakpoints,r={};i&&(r.width=i.xsmall,r.height=i.xsmall);const p={...e,...t},o={...e.breakpoint,...r},{breakpoint:n}=p;typeof n=="object"?p.breakpoint={...o,...n}:n&&(p.breakpoint=o),this._set("dockOptions",p),this._setCurrentDockPosition(),this.reposition()}get featureCount(){return this.viewModel.featureCount}get featureMenuOpen(){return this.viewModel.featureMenuOpen}set featureMenuOpen(t){this.viewModel.featureMenuOpen=t}get features(){return this.viewModel.features}set features(t){this.viewModel.features=t}get goToOverride(){return this.viewModel.goToOverride}set goToOverride(t){this.viewModel.goToOverride=t}get highlightEnabled(){return this.viewModel.highlightEnabled}set highlightEnabled(t){this.viewModel.highlightEnabled=t}get icon(){return"popup"}set icon(t){this._overrideIfSome("icon",t)}get location(){return this.viewModel.location}set location(t){this.viewModel.location=t}get label(){var t;return((t=this.messages)==null?void 0:t.widgetLabel)??""}set label(t){this._overrideIfSome("label",t)}get promises(){return this.viewModel.promises}set promises(t){this.viewModel.promises=t}get selectedFeature(){return this.viewModel.selectedFeature}get selectedFeatureIndex(){return this.viewModel.selectedFeatureIndex}set selectedFeatureIndex(t){this.viewModel.selectedFeatureIndex=t}get selectedFeatureWidget(){return this._featuresWidget.selectedFeatureWidget}get spinnerEnabled(){return C(k.getLogger(this),"spinnerEnabled",{replacement:"PopupVisibleElements.spinner",version:"4.29"}),this.visibleElements.spinner}set spinnerEnabled(t){C(k.getLogger(this),"spinnerEnabled",{replacement:"PopupVisibleElements.spinner",version:"4.29"}),this.visibleElements.spinner=t}get title(){return this.viewModel.title}set title(t){this.viewModel.title=t}get updateLocationEnabled(){return this.viewModel.updateLocationEnabled}set updateLocationEnabled(t){this.viewModel.updateLocationEnabled=t}get view(){return this.viewModel.view}set view(t){this.viewModel.view=t}get visible(){return this.viewModel.visible}set visible(t){this.viewModel.visible=t}blur(){const{active:t}=this.viewModel;t||k.getLogger(this).warn("Popup can only be blurred when currently active."),this._featuresWidget.blur()}clear(){return this.viewModel.clear()}close(){this.visible=!1}fetchFeatures(t,e){return this.viewModel.fetchFeatures(t,e)}focus(){const{active:t}=this.viewModel;t||k.getLogger(this).warn("Popup can only be focused when currently active."),this._handleFocus()}next(){return this.viewModel.next()}open(t){const e=!!t&&!!t.featureMenuOpen,i={collapsed:!!t&&!!t.collapsed,featureMenuOpen:e};this.set(i),this.viewModel.open(t),t!=null&&t.shouldFocus&&this._handleFocus(!0)}previous(){return this.viewModel.previous()}reposition(){this.renderNow(),this._positionContainer(),this._setCurrentAlignment()}triggerAction(t){return this.viewModel.triggerAction(t)}render(){var f,E,y,w;const{dockEnabled:t,currentAlignment:e,currentDockPosition:i}=this,{active:r,screenLocation:p}=this.viewModel,o=r&&t,n=r&&!t,c=(E=(f=this.selectedFeature)==null?void 0:f.layer)==null?void 0:E.title,d=(w=(y=this.selectedFeature)==null?void 0:y.layer)==null?void 0:w.id,b={[u.alignTopCenter]:e==="top-center",[u.alignBottomCenter]:e==="bottom-center",[u.alignTopLeft]:e==="top-left",[u.alignBottomLeft]:e==="bottom-left",[u.alignTopRight]:e==="top-right",[u.alignBottomRight]:e==="bottom-right",[u.isDocked]:o,[u.shadow]:n,[u.isDockedTopLeft]:i==="top-left",[u.isDockedTopCenter]:i==="top-center",[u.isDockedTopRight]:i==="top-right",[u.isDockedBottomLeft]:i==="bottom-left",[u.isDockedBottomCenter]:i==="bottom-center",[u.isDockedBottomRight]:i==="bottom-right"};return P("div",{afterCreate:this._positionContainer,afterUpdate:this._positionContainer,bind:this,class:this.classes(u.base,b,{[u.baseHidden]:!p&&!t}),"data-layer-id":d,"data-layer-title":c,role:"presentation"},r?[this._renderMainContainer(),this._renderPointer()]:null)}_renderPointer(){return this.dockEnabled?null:P("div",{class:u.pointer,key:"popup-pointer",role:"presentation"},P("div",{class:this.classes(u.pointerDirection,u.shadow)}))}_renderMainContainer(){const{dockEnabled:t}=this,e={[u.shadow]:t};return P("div",{afterCreate:this._setMainContainerNode,afterUpdate:this._setMainContainerNode,bind:this,class:this.classes(u.main,K.widget,e)},this._featuresWidget.render())}_getAnimationDurationMS(){const{_containerNode:t}=this;return t?1e3*parseFloat(window.getComputedStyle(t).animationDuration):X}async _handleFocus(t=!1){var i;(i=this._focusAbortController)==null||i.abort(),this._focusAbortController=new AbortController;const e=this._focusAbortController.signal;t&&await z(()=>{var r;return((r=this.viewModel)==null?void 0:r.active)===!0},{signal:e}),await O(H(e)),await O(j(this._getAnimationDurationMS(),e)),this._featuresWidget.focus()}_isOutsideView(t){const{popupHeight:e,popupWidth:i,screenLocation:r,side:p,view:o}=t;if(isNaN(i)||isNaN(e)||!o||!r)return!1;const n=o.padding;return p==="right"&&r.x+i/2>o.width-n.right||p==="left"&&r.x-i/2<n.left||p==="top"&&r.y-e<n.top||p==="bottom"&&r.y+e>o.height-n.bottom}_calculateAutoAlignment(t){if(t!=="auto")return t;const{_pointerOffsetInPx:e,_containerNode:i,_mainContainerNode:r,viewModel:p}=this,{screenLocation:o,view:n}=p;if(o==null||!n||!i)return"top-center";function c(V){return parseInt(V.replaceAll(/[^-\d.]/g,""),10)}const d=r?window.getComputedStyle(r,null):null,b=d?c(d.getPropertyValue("max-height")):0,f=d?c(d.getPropertyValue("height")):0,{height:E,width:y}=i.getBoundingClientRect(),w=y+e,M=Math.max(E,b,f)+e,W=this._isOutsideView({popupHeight:M,popupWidth:w,screenLocation:o,side:"right",view:n}),x=this._isOutsideView({popupHeight:M,popupWidth:w,screenLocation:o,side:"left",view:n}),D=this._isOutsideView({popupHeight:M,popupWidth:w,screenLocation:o,side:"top",view:n}),F=this._isOutsideView({popupHeight:M,popupWidth:w,screenLocation:o,side:"bottom",view:n});return x?D?"bottom-right":"top-right":W?D?"bottom-left":"top-left":D?F?"top-center":"bottom-center":"top-center"}_callCurrentAlignment(t){return typeof t=="function"?t.call(this):t}_getCurrentAlignment(){const{alignment:t,dockEnabled:e}=this;return e||!this.viewModel.active?null:this._calculatePositionResult(this._calculateAutoAlignment(this._callCurrentAlignment(t)))}_setCurrentAlignment(){this._set("currentAlignment",this._getCurrentAlignment())}_setCurrentDockPosition(){this._set("currentDockPosition",this._getCurrentDockPosition())}_calculatePositionResult(t){const e=["left","right"];return N(this.container)&&e.reverse(),t==null?void 0:t.replace(/leading/gi,e[0]).replaceAll(/trailing/gi,e[1])}_callDockPosition(t){return typeof t=="function"?t.call(this):t}_getDockPosition(){var t;return this._calculatePositionResult(this._calculateAutoDockPosition(this._callDockPosition((t=this.dockOptions)==null?void 0:t.position)))}_getCurrentDockPosition(){return this.dockEnabled&&this.viewModel.active?this._getDockPosition():null}_calculateAutoDockPosition(t){var n;if(t!=="auto")return t;const e=(n=this.viewModel)==null?void 0:n.view,i=N(this.container)?"top-left":"top-right";if(!e)return i;const r=e.padding||{left:0,right:0},p=e.width-r.left-r.right,{breakpoints:o}=e;return o&&p<=o.xsmall?"bottom-center":i}_getDockIcon(){const t=this._getDockPosition();if(this.dockEnabled)return"minimize";switch(t){case"top-left":case"bottom-left":return"dock-left";case"top-center":return"maximize";case"bottom-center":return"dock-bottom";default:return"dock-right"}}_handleDockIcon(){this._dockAction.icon=this._getDockIcon()}_handleDockEnabled(){var t,e;this._dockAction.title=this.dockEnabled?(t=this.messages)==null?void 0:t.undock:(e=this.messages)==null?void 0:e.dock}_setMainContainerNode(t){this._mainContainerNode=t}_positionContainer(t=this._containerNode){if(t&&(this._containerNode=t),!this._containerNode)return;const{screenLocation:e}=this.viewModel,{width:i}=this._containerNode.getBoundingClientRect(),r=this._calculatePositionStyle(e,i);r&&Object.assign(this._containerNode.style,r)}_calculateFullWidth(t){const{currentAlignment:e,_pointerOffsetInPx:i}=this;return e==="top-left"||e==="bottom-left"||e==="top-right"||e==="bottom-right"?t+i:t}_calculateAlignmentPosition(t,e,i,r){const{currentAlignment:p,_pointerOffsetInPx:o}=this;if(!i)return;const{padding:n}=i,c=r/2,d=i.height-e,b=i.width-t;return p==="bottom-center"?{top:e+o-n.top,left:t-c-n.left}:p==="top-left"?{bottom:d+o-n.bottom,right:b+o-n.right}:p==="bottom-left"?{top:e+o-n.top,right:b+o-n.right}:p==="top-right"?{bottom:d+o-n.bottom,left:t+o-n.left}:p==="bottom-right"?{top:e+o-n.top,left:t+o-n.left}:p==="top-center"?{bottom:d+o-n.bottom,left:t-c-n.left}:void 0}_calculatePositionStyle(t,e){const{dockEnabled:i,view:r}=this;if(!r)return;if(i)return{left:"",top:"",right:"",bottom:""};if(t==null||!e)return;const p=this._calculateFullWidth(e),o=this._calculateAlignmentPosition(t.x,t.y,r,p);return o?{top:o.top!==void 0?`${o.top}px`:"auto",left:o.left!==void 0?`${o.left}px`:"auto",bottom:o.bottom!==void 0?`${o.bottom}px`:"auto",right:o.right!==void 0?`${o.right}px`:"auto"}:void 0}_viewChange(t,e){t&&e&&(this.close(),this.clear())}_viewReadyChange(t,e){t?this._wireUpView():e&&(this.close(),this.clear())}_wireUpView(){this._setDockEnabledForViewSize(this.dockOptions)}_dockingThresholdCrossed(t,e,i){const[r,p]=t,[o,n]=e,{width:c=0,height:d=0}=i??{};return r<=c&&o>c||r>c&&o<=c||p<=d&&n>d||p>d&&n<=d}_updateDockEnabledForViewSize(t,e){var b,f;if(!t||!e)return;const i=((f=(b=this.viewModel)==null?void 0:b.view)==null?void 0:f.padding)||{left:0,right:0,top:0,bottom:0},r=i.left+i.right,p=i.top+i.bottom,o=[],n=[];o[0]=t[0]-r,o[1]=t[1]-p,n[0]=e[0]-r,n[1]=e[1]-p;const{dockOptions:c}=this,d=c.breakpoint;this._dockingThresholdCrossed(o,n,d)&&this._setDockEnabledForViewSize(c),this._setCurrentDockPosition()}_toggleScreenLocationEnabled(){const{dockEnabled:t,viewModel:e}=this;if(!e)return;const i=e.active&&!t;e.screenLocationEnabled=i}_shouldDockAtCurrentViewSize(t){var c,d;const e=t.breakpoint,i=(d=(c=this.viewModel)==null?void 0:c.view)==null?void 0:d.ui;if(!i)return!1;const{width:r,height:p}=i;if(isNaN(r)||isNaN(p)||!e)return!1;const o=e.hasOwnProperty("width")&&r<=(e.width??0),n=e.hasOwnProperty("height")&&p<=(e.height??0);return o||n}_setDockEnabledForViewSize(t){t.breakpoint&&(this.dockEnabled=this._shouldDockAtCurrentViewSize(t))}};s([l({readOnly:!0})],a.prototype,"_featureNavigationTop",null),s([l()],a.prototype,"actions",null),s([l({readOnly:!0})],a.prototype,"active",null),s([l()],a.prototype,"alignment",void 0),s([l()],a.prototype,"autoCloseEnabled",null),s([l()],a.prototype,"defaultPopupTemplateEnabled",null),s([l()],a.prototype,"content",null),s([l()],a.prototype,"collapsed",null),s([l()],a.prototype,"collapseEnabled",null),s([l({readOnly:!0})],a.prototype,"currentAlignment",null),s([l({readOnly:!0})],a.prototype,"currentDockPosition",null),s([l()],a.prototype,"dockOptions",null),s([l()],a.prototype,"dockEnabled",void 0),s([l({readOnly:!0})],a.prototype,"featureCount",null),s([l()],a.prototype,"featureMenuOpen",null),s([l()],a.prototype,"features",null),s([l()],a.prototype,"goToOverride",null),s([l()],a.prototype,"headingLevel",void 0),s([l()],a.prototype,"highlightEnabled",null),s([l()],a.prototype,"icon",null),s([l()],a.prototype,"location",null),s([l()],a.prototype,"label",null),s([l(),J("esri/widgets/Popup/t9n/Popup")],a.prototype,"messages",void 0),s([l()],a.prototype,"promises",null),s([l({readOnly:!0})],a.prototype,"selectedFeature",null),s([l()],a.prototype,"selectedFeatureIndex",null),s([l({readOnly:!0})],a.prototype,"selectedFeatureWidget",null),s([l()],a.prototype,"spinnerEnabled",null),s([l()],a.prototype,"title",null),s([l()],a.prototype,"updateLocationEnabled",null),s([l()],a.prototype,"view",null),s([l({type:T}),Q(["triggerAction","trigger-action"])],a.prototype,"viewModel",void 0),s([l()],a.prototype,"visible",null),s([l({type:L,nonNullable:!0})],a.prototype,"visibleElements",void 0),a=s([B("esri.widgets.Popup")],a);const le=a;export{le as default};
//# sourceMappingURL=Popup-BeXfMmr2.js.map
