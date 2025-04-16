import{r as M,c as N,h as r,g as V,F as W}from"./index-Club40b3.js";import{C as _,n as g,a as C,b as T,c as m,O as w,R as O,H as p,o as H,d as c,e as A,D as z,f as v,g as q,j as Se,p as X,k as ve,l as G,t as ye,m as Y,q as J,r as we,S as Z,s as Q,i as k,u as xe,v as E,w as Ie}from"./utils-3daeffe5-woILbvgM.js";import{i as ee,g as ke,f as Ae,b as De,e as Fe}from"./dom-b6dedd88-B4jHZlw4.js";import{u as Te,I as Oe}from"./interactive-1a42577a-BTyGj1zl.js";import{i as Pe}from"./key-3ee05994-D63ExP77.js";import{c as oe,s as se,a as le}from"./loadable-13e9ffb2-DZsIufML.js";import{c as He,d as Le}from"./locale-60f8ca58-Kl8S9pwc.js";import{c as Re,r as te,a as ze}from"./math-682795d0-CPc4dlb6.js";import{u as Ee,s as Ke,c as Ne,d as Me}from"./t9n-75defee3-BAOKWQI7.js";import{t as Ve}from"./throttle-1a76fbfb-CbcWxfsZ.js";import"./debounce-6e4946fd-4Zc0Qe3n.js";import"./guid-9c230b6a-BxSjQh8J.js";import"./observers-9c166451-B21XW3NK.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const $e=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([scale=s]){--calcite-color-picker-spacing:8px}:host([scale=s]) .container{inline-size:160px}:host([scale=s]) .saved-colors{gap:0.25rem;grid-template-columns:repeat(auto-fill, 20px)}:host([scale=m]){--calcite-color-picker-spacing:12px}:host([scale=m]) .container{inline-size:272px}:host([scale=l]){--calcite-color-picker-spacing:16px;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) .container{inline-size:464px}:host([scale=l]) .section:first-of-type{padding-block-start:var(--calcite-color-picker-spacing)}:host([scale=l]) .saved-colors{grid-template-columns:repeat(auto-fill, 32px)}:host([scale=l]) .control-section{flex-wrap:nowrap;align-items:baseline;flex-wrap:wrap}:host([scale=l]) .color-hex-options{display:flex;flex-shrink:1;flex-direction:column;justify-content:space-around}:host([scale=l]) .color-mode-container{flex-shrink:3}.container{background-color:var(--calcite-color-foreground-1);display:inline-block;border:1px solid var(--calcite-color-border-1)}.control-and-scope{position:relative;display:flex;cursor:pointer;touch-action:none}.color-field,.control-and-scope{-webkit-user-select:none;user-select:none}.scope{pointer-events:none;position:absolute;z-index:var(--calcite-z-index);block-size:1px;inline-size:1px;border-radius:9999px;background-color:transparent;font-size:var(--calcite-font-size--1);outline-color:transparent}.scope:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          );outline-offset:6px}.hex-and-channels-group{inline-size:100%}.hex-and-channels-group,.control-section{display:flex;flex-direction:row;flex-wrap:wrap}.section{padding-block:0 var(--calcite-color-picker-spacing);padding-inline:var(--calcite-color-picker-spacing)}.section:first-of-type{padding-block-start:var(--calcite-color-picker-spacing)}.sliders{display:flex;flex-direction:column;justify-content:space-between;margin-inline-start:var(--calcite-color-picker-spacing);gap:var(--calcite-spacing-xxs)}.preview-and-sliders{display:flex;align-items:center;padding:var(--calcite-color-picker-spacing)}.color-hex-options,.section--split{flex-grow:1}.header{display:flex;align-items:center;justify-content:space-between;color:var(--calcite-color-text-1)}.color-mode-container{padding-block-start:var(--calcite-color-picker-spacing)}.channels{display:flex;row-gap:0.125rem}.channel[data-channel-index="3"]{inline-size:159px}:host([scale=s]) .channels{flex-wrap:wrap}:host([scale=s]) .channel{flex-basis:30%;flex-grow:1}:host([scale=s]) .channel[data-channel-index="3"]{inline-size:unset;margin-inline-start:unset}:host([scale=l]) .channel[data-channel-index="3"]{inline-size:131px}.saved-colors{display:grid;gap:0.5rem;padding-block-start:var(--calcite-color-picker-spacing);grid-template-columns:repeat(auto-fill, 24px)}.saved-colors-buttons{display:flex}.saved-color{outline-offset:0;outline-color:transparent;cursor:pointer}.saved-color:focus{outline:2px solid var(--calcite-color-brand);outline-offset:2px}.saved-color:hover{transition:outline-color var(--calcite-internal-animation-timing-fast) ease-in-out;outline:2px solid var(--calcite-color-border-2);outline-offset:2px}:host([hidden]){display:none}[hidden]{display:none}`,je=$e,Be=16,Ue=class{constructor(t){M(this,t),this.calciteColorPickerChange=N(this,"calciteColorPickerChange",6),this.calciteColorPickerInput=N(this,"calciteColorPickerInput",6),this.internalColorUpdateContext=null,this.isActiveChannelInputEmpty=!1,this.mode=_.HEX,this.shiftKeyChannelAdjustment=0,this.upOrDownArrowKeyTracker=null,this.handleTabActivate=e=>{this.channelMode=e.currentTarget.getAttribute("data-color-mode"),this.updateChannelsFromColor(this.color)},this.handleColorFieldScopeKeyDown=e=>{const{key:n}=e,i={ArrowUp:{x:0,y:-10},ArrowRight:{x:10,y:0},ArrowDown:{x:0,y:10},ArrowLeft:{x:-10,y:0}};i[n]&&(e.preventDefault(),this.scopeOrientation=n==="ArrowDown"||n==="ArrowUp"?"vertical":"horizontal",this.captureColorFieldColor(this.colorFieldScopeLeft+i[n].x||0,this.colorFieldScopeTop+i[n].y||0,!1))},this.handleHueScopeKeyDown=e=>{const n=e.shiftKey?10:1,{key:i}=e,a={ArrowUp:1,ArrowRight:1,ArrowDown:-1,ArrowLeft:-1};if(a[i]){e.preventDefault();const o=a[i]*n,s=this.baseColorFieldColor.hue(),l=this.baseColorFieldColor.hue(s+o);this.internalColorSet(l,!1)}},this.handleHexInputChange=e=>{e.stopPropagation();const{isClearable:n,color:i}=this,o=e.target.value;if(n&&!o){this.internalColorSet(null);return}const s=i&&g(C(i,T(this.mode)));o!==s&&this.internalColorSet(m(o))},this.handleSavedColorSelect=e=>{const n=e.currentTarget;this.internalColorSet(m(n.color))},this.handleChannelInput=e=>{const n=e.currentTarget,i=Number(n.getAttribute("data-channel-index")),o=i===3?w.max:this.channelMode==="rgb"?O[Object.keys(O)[i]]:p[Object.keys(p)[i]];let s;if(!n.value)s="",this.isActiveChannelInputEmpty=!0,this.upOrDownArrowKeyTracker=null;else{const h=Number(n.value)+this.shiftKeyChannelAdjustment;s=Re(h,0,o).toString()}n.value=s,s!==""&&this.shiftKeyChannelAdjustment!==0?this.handleChannelChange(e):s!==""&&this.handleChannelChange(e)},this.handleChannelBlur=e=>{var s;const n=e.currentTarget,i=Number(n.getAttribute("data-channel-index")),a=[...this.channels];!n.value&&!this.isClearable&&(n.value=(s=a[i])==null?void 0:s.toString())},this.handleChannelFocus=e=>{e.currentTarget.selectText()},this.handleChannelChange=e=>{const n=e.currentTarget,i=Number(n.getAttribute("data-channel-index")),a=[...this.channels];if(this.isClearable&&!n.value){this.channels=[null,null,null,null],this.internalColorSet(null);return}const s=i===3;this.isActiveChannelInputEmpty&&this.upOrDownArrowKeyTracker&&(n.value=this.upOrDownArrowKeyTracker==="up"?(a[i]+1<=this.getChannelInputLimit(i)?a[i]+1:this.getChannelInputLimit(i)).toString():(a[i]-1>=0?a[i]-1:0).toString(),this.isActiveChannelInputEmpty=!1,this.upOrDownArrowKeyTracker=null);const l=n.value?Number(n.value):a[i];a[i]=s?H(l):l,this.updateColorFromChannels(a)},this.handleSavedColorKeyDown=e=>{Pe(e.key)&&(e.preventDefault(),this.handleSavedColorSelect(e))},this.handleColorFieldPointerDown=e=>{this.handleCanvasControlPointerDown(e,this.colorFieldRenderingContext,this.captureColorFieldColor,this.colorFieldScopeNode)},this.handleHueSliderPointerDown=e=>{this.handleCanvasControlPointerDown(e,this.hueSliderRenderingContext,this.captureHueSliderColor,this.hueScopeNode)},this.handleOpacitySliderPointerDown=e=>{this.handleCanvasControlPointerDown(e,this.opacitySliderRenderingContext,this.captureOpacitySliderValue,this.opacityScopeNode)},this.globalPointerUpHandler=e=>{if(!ee(e))return;const n=this.activeCanvasInfo;this.activeCanvasInfo=null,this.drawColorControls(),n&&this.calciteColorPickerChange.emit()},this.globalPointerMoveHandler=e=>{const{activeCanvasInfo:n,el:i}=this;if(!i.isConnected||!n)return;const{context:a,bounds:o}=n;let s,l;const{clientX:h,clientY:u}=e;a.canvas.matches(":hover")?(s=h-o.x,l=u-o.y):(h<o.x+o.width&&h>o.x?s=h-o.x:h<o.x?s=0:s=o.width,u<o.y+o.height&&u>o.y?l=u-o.y:u<o.y?l=0:l=o.height),a===this.colorFieldRenderingContext?this.captureColorFieldColor(s,l,!1):a===this.hueSliderRenderingContext?this.captureHueSliderColor(s):a===this.opacitySliderRenderingContext&&this.captureOpacitySliderValue(s)},this.storeColorFieldScope=e=>{this.colorFieldScopeNode=e},this.storeHueScope=e=>{this.hueScopeNode=e},this.renderChannelsTabTitle=e=>{const{channelMode:n,messages:i}=this,a=e===n,o=e==="rgb"?i.rgb:i.hsv;return r("calcite-tab-title",{class:c.colorMode,"data-color-mode":e,key:e,onCalciteTabsActivate:this.handleTabActivate,selected:a},o)},this.renderChannelsTab=e=>{const{isClearable:n,channelMode:i,channels:a,messages:o,alphaChannel:s}=this,l=e===i,u=e==="rgb"?[o.red,o.green,o.blue]:[o.hue,o.saturation,o.value],d=ke(this.el),f=s?a:a.slice(0,3);return r("calcite-tab",{class:c.control,key:e,selected:l},r("div",{class:c.channels,dir:"ltr"},f.map((b,S)=>{const I=S===3;return I&&(b=n&&!b?b:A(b)),this.renderChannel(b,S,u[S],d,I?"%":"")})))},this.renderChannel=(e,n,i,a,o)=>r("calcite-input-number",{class:c.channel,"data-channel-index":n,dir:a,key:n,label:i,lang:this.effectiveLocale,numberButtonType:"none",numberingSystem:this.numberingSystem,onCalciteInputNumberChange:this.handleChannelChange,onCalciteInputNumberInput:this.handleChannelInput,onCalciteInternalInputNumberBlur:this.handleChannelBlur,onCalciteInternalInputNumberFocus:this.handleChannelFocus,onKeyDown:this.handleKeyDown,scale:this.scale==="l"?"m":"s",style:{marginLeft:n>0&&!(this.scale==="s"&&this.alphaChannel&&n===3)?"-1px":""},suffixText:o,value:e==null?void 0:e.toString()}),this.deleteColor=()=>{const e=C(this.color,this.alphaChannel);if(!(this.savedColors.indexOf(e)>-1))return;const i=this.savedColors.filter(o=>o!==e);this.savedColors=i;const a=`${z}${this.storageId}`;this.storageId&&localStorage.setItem(a,JSON.stringify(i))},this.saveColor=()=>{const e=C(this.color,this.alphaChannel);if(this.savedColors.indexOf(e)>-1)return;const i=[...this.savedColors,e];this.savedColors=i;const a=`${z}${this.storageId}`;this.storageId&&localStorage.setItem(a,JSON.stringify(i))},this.drawColorControls=Ve((e="all")=>{(e==="all"||e==="color-field")&&this.colorFieldRenderingContext&&this.drawColorField(),(e==="all"||e==="hue-slider")&&this.hueSliderRenderingContext&&this.drawHueSlider(),this.alphaChannel&&(e==="all"||e==="opacity-slider")&&this.opacitySliderRenderingContext&&this.drawOpacitySlider()},Be),this.captureColorFieldColor=(e,n,i=!0)=>{const{dimensions:{colorField:{height:a,width:o}}}=this,s=Math.round(p.s/o*e),l=Math.round(p.v/a*(a-n));this.internalColorSet(this.baseColorFieldColor.hsv().saturationv(s).value(l),i)},this.initColorField=e=>{this.colorFieldRenderingContext=e.getContext("2d"),this.updateCanvasSize("color-field"),this.drawColorControls()},this.initHueSlider=e=>{this.hueSliderRenderingContext=e.getContext("2d"),this.updateCanvasSize("hue-slider"),this.drawHueSlider()},this.initOpacitySlider=e=>{e&&(this.opacitySliderRenderingContext=e.getContext("2d"),this.updateCanvasSize("opacity-slider"),this.drawOpacitySlider())},this.storeOpacityScope=e=>{this.opacityScopeNode=e},this.handleOpacityScopeKeyDown=e=>{const n=e.shiftKey?10:1,{key:i}=e,a={ArrowUp:.01,ArrowRight:.01,ArrowDown:-.01,ArrowLeft:-.01};if(a[i]){e.preventDefault();const o=a[i]*n,s=this.baseColorFieldColor.alpha(),l=this.baseColorFieldColor.alpha(s+o);this.internalColorSet(l,!1)}},this.allowEmpty=!1,this.alphaChannel=!1,this.channelsDisabled=!1,this.clearable=!1,this.color=v,this.disabled=!1,this.format="auto",this.hideChannels=!1,this.hexDisabled=!1,this.hideHex=!1,this.hideSaved=!1,this.savedDisabled=!1,this.scale="m",this.storageId=void 0,this.messageOverrides=void 0,this.numberingSystem=void 0,this.value=g(C(v,this.alphaChannel)),this.channelMode="rgb",this.channels=this.toChannels(v),this.defaultMessages=void 0,this.dimensions=q.m,this.effectiveLocale="",this.messages=void 0,this.savedColors=[],this.colorFieldScopeTop=void 0,this.colorFieldScopeLeft=void 0,this.hueScopeLeft=void 0,this.opacityScopeLeft=void 0,this.scopeOrientation=void 0}handleAllowEmptyOrClearableChange(){this.isClearable=this.clearable||this.allowEmpty}handleAlphaChannelChange(t){const{format:e}=this;t&&e!=="auto"&&!T(e)&&(console.warn(`ignoring alphaChannel as the current format (${e}) does not support alpha`),this.alphaChannel=!1)}handleAlphaChannelDimensionsChange(){this.effectiveSliderWidth=Se(this.dimensions,this.alphaChannel),this.drawColorControls()}handleColorChange(t,e){this.drawColorControls(),this.updateChannelsFromColor(t),this.previousColor=e}handleFormatOrAlphaChannelChange(){this.setMode(this.format),this.internalColorSet(this.color,!1,"internal")}handleScaleChange(t="m"){this.updateDimensions(t),this.updateCanvasSize("all"),this.drawColorControls()}onMessagesChange(){}handleValueChange(t,e){const{isClearable:n,format:i}=this,a=!n||t;let o=!1;if(a){const u=X(t);if(!u||i!=="auto"&&u!==i){this.showIncompatibleColorWarning(t,i),this.value=e;return}o=this.mode!==u,this.setMode(u,this.internalColorUpdateContext===null)}const s=this.activeCanvasInfo;if(this.internalColorUpdateContext==="initial")return;if(this.internalColorUpdateContext==="user-interaction"){this.calciteColorPickerInput.emit(),s||this.calciteColorPickerChange.emit();return}const l=n&&!t?null:m(t!=null&&typeof t=="object"&&T(this.mode)?ve(t):t),h=!G(l,this.color);(o||h)&&this.internalColorSet(l,this.alphaChannel&&!(this.mode.endsWith("a")||this.mode.endsWith("a-css")),"internal")}get baseColorFieldColor(){return this.color||this.previousColor||v}effectiveLocaleChange(){Ee(this,this.effectiveLocale)}handleChannelKeyUpOrDown(t){this.shiftKeyChannelAdjustment=0;const{key:e}=t;if(e!=="ArrowUp"&&e!=="ArrowDown"||!t.composedPath().some(a=>{var o;return(o=a.classList)==null?void 0:o.contains(c.channel)}))return;const{shiftKey:n}=t;if(t.preventDefault(),!this.color){this.internalColorSet(this.previousColor),t.stopPropagation();return}const i=9;this.shiftKeyChannelAdjustment=e==="ArrowUp"&&n?i:e==="ArrowDown"&&n?-9:0,e==="ArrowUp"&&(this.upOrDownArrowKeyTracker="up"),e==="ArrowDown"&&(this.upOrDownArrowKeyTracker="down")}getChannelInputLimit(t){return this.channelMode==="rgb"?O[Object.keys(O)[t]]:p[Object.keys(p)[t]]}focusScope(t){requestAnimationFrame(()=>{t.focus()})}handleCanvasControlPointerDown(t,e,n,i){ee(t)&&(window.addEventListener("pointermove",this.globalPointerMoveHandler),window.addEventListener("pointerup",this.globalPointerUpHandler,{once:!0}),this.activeCanvasInfo={context:e,bounds:e.canvas.getBoundingClientRect()},n.call(this,t.offsetX,t.offsetY),this.focusScope(i))}async setFocus(){await oe(this),Ae(this.el)}async componentWillLoad(){se(this),this.handleAllowEmptyOrClearableChange(),this.handleAlphaChannelDimensionsChange();const{isClearable:t,color:e,format:n,value:i}=this,a=t&&!i,o=X(i),s=a||n==="auto"&&o||n===o,l=a?null:s?m(i):e;s||this.showIncompatibleColorWarning(i,n),this.setMode(n,!1),this.internalColorSet(l,!1,"initial"),this.updateDimensions(this.scale);const h=`${z}${this.storageId}`;this.storageId&&localStorage.getItem(h)&&(this.savedColors=JSON.parse(localStorage.getItem(h))),await Ke(this)}connectedCallback(){He(this),Ne(this)}componentDidLoad(){le(this)}disconnectedCallback(){window.removeEventListener("pointermove",this.globalPointerMoveHandler),window.removeEventListener("pointerup",this.globalPointerUpHandler),Le(this),Me(this)}componentDidRender(){Te(this)}render(){const{channelsDisabled:t,color:e,colorFieldScopeLeft:n,colorFieldScopeTop:i,dimensions:{thumb:{radius:a}},hexDisabled:o,hideChannels:s,hideHex:l,hideSaved:h,hueScopeLeft:u,messages:d,alphaChannel:f,opacityScopeLeft:b,savedColors:S,savedDisabled:I,scale:x,scopeOrientation:L}=this,D=this.effectiveSliderWidth,F=e?C(e,f):null,re=a,ce=u??D*v.hue()/p.h,he=a,de=b??D*A(v.alpha())/w.max,$=e===null,R=L==="vertical",j=o||l,B=t||s,ue=I||h,[pe,Ce]=this.getAdjustedScopePosition(n,i),[fe,ge]=this.getAdjustedScopePosition(ce,re),[me,be]=this.getAdjustedScopePosition(de,he);return r(Oe,{key:"c4837ef7cbe25b5fc3f0c72fe82d0090c6e0cdb5",disabled:this.disabled},r("div",{key:"28230570482ee9d33df9518e3cca534e3fac44ac",class:c.container},r("div",{key:"83172bc55f13955f5b69b59300e68642d59999af",class:c.controlAndScope},r("canvas",{key:"c20db7054ab5ebdb1e13ba295ac463609c44de47",class:c.colorField,onPointerDown:this.handleColorFieldPointerDown,ref:this.initColorField}),r("div",{key:"1e44beb121ed5a2247a6d69bf42c49a7f1ce5829","aria-label":R?d.value:d.saturation,"aria-valuemax":R?p.v:p.s,"aria-valuemin":"0","aria-valuenow":(R?e==null?void 0:e.saturationv():e==null?void 0:e.value())||"0",class:{[c.scope]:!0,[c.colorFieldScope]:!0},onKeyDown:this.handleColorFieldScopeKeyDown,ref:this.storeColorFieldScope,role:"slider",style:{top:`${Ce||0}px`,left:`${pe||0}px`},tabindex:"0"})),r("div",{key:"5b873f4e7266cc654086f59c8483d3b4a65c8e8f",class:c.previewAndSliders},r("calcite-color-picker-swatch",{key:"db7c903a933ed061cc2edcd766fde70a8b670f00",class:c.preview,color:F,scale:this.alphaChannel?"l":this.scale}),r("div",{key:"33ea2354cbcfaa6677e82713bd8f02d1b83a9c26",class:c.sliders},r("div",{key:"28493b4bd177b8c97583cabeb5716a7cb7202e76",class:c.controlAndScope},r("canvas",{key:"d0a9ce7fb098b7434cd62f68b6b6092efcef3dc4",class:{[c.slider]:!0,[c.hueSlider]:!0},onPointerDown:this.handleHueSliderPointerDown,ref:this.initHueSlider}),r("div",{key:"2356120385aabf09384f0077dffb7881c55c5ea9","aria-label":d.hue,"aria-valuemax":p.h,"aria-valuemin":"0","aria-valuenow":(e==null?void 0:e.round().hue())||v.round().hue(),class:{[c.scope]:!0,[c.hueScope]:!0},onKeyDown:this.handleHueScopeKeyDown,ref:this.storeHueScope,role:"slider",style:{top:`${ge}px`,left:`${fe}px`},tabindex:"0"})),f?r("div",{class:c.controlAndScope},r("canvas",{class:{[c.slider]:!0,[c.opacitySlider]:!0},onPointerDown:this.handleOpacitySliderPointerDown,ref:this.initOpacitySlider}),r("div",{"aria-label":d.opacity,"aria-valuemax":w.max,"aria-valuemin":w.min,"aria-valuenow":(e||v).round().alpha(),class:{[c.scope]:!0,[c.opacityScope]:!0},onKeyDown:this.handleOpacityScopeKeyDown,ref:this.storeOpacityScope,role:"slider",style:{top:`${be}px`,left:`${me}px`},tabindex:"0"})):null)),j&&B?null:r("div",{class:{[c.controlSection]:!0,[c.section]:!0}},r("div",{class:c.hexAndChannelsGroup},j?null:r("div",{class:c.hexOptions},r("calcite-color-picker-hex-input",{allowEmpty:this.isClearable,alphaChannel:f,class:c.control,messages:d,numberingSystem:this.numberingSystem,onCalciteColorPickerHexInputChange:this.handleHexInputChange,scale:x,value:F})),B?null:r("calcite-tabs",{class:{[c.colorModeContainer]:!0,[c.splitSection]:!0},scale:x==="l"?"m":"s"},r("calcite-tab-nav",{slot:"title-group"},this.renderChannelsTabTitle("rgb"),this.renderChannelsTabTitle("hsv")),this.renderChannelsTab("rgb"),this.renderChannelsTab("hsv")))),ue?null:r("div",{class:{[c.savedColorsSection]:!0,[c.section]:!0}},r("div",{class:c.header},r("label",null,d.saved),r("div",{class:c.savedColorsButtons},r("calcite-button",{appearance:"transparent",class:c.deleteColor,disabled:$,iconStart:"minus",kind:"neutral",label:d.deleteColor,onClick:this.deleteColor,scale:x,type:"button"}),r("calcite-button",{appearance:"transparent",class:c.saveColor,disabled:$,iconStart:"plus",kind:"neutral",label:d.saveColor,onClick:this.saveColor,scale:x,type:"button"}))),S.length>0?r("div",{class:c.savedColors},[...S.map(U=>r("calcite-color-picker-swatch",{class:c.savedColor,color:U,key:U,onClick:this.handleSavedColorSelect,onKeyDown:this.handleSavedColorKeyDown,scale:x,tabIndex:0}))]):null)))}handleKeyDown(t){t.key==="Enter"&&t.preventDefault()}showIncompatibleColorWarning(t,e){console.warn(`ignoring color value (${t}) as it is not compatible with the current format (${e})`)}setMode(t,e=!0){const n=t==="auto"?this.mode:t;this.mode=this.ensureCompatibleMode(n,e)}ensureCompatibleMode(t,e){const{alphaChannel:n}=this,i=T(t);if(n&&!i){const a=ye(t);return e&&console.warn(`setting format to (${a}) as the provided one (${t}) does not support alpha`),a}if(!n&&i){const a=Y(t);return e&&console.warn(`setting format to (${a}) as the provided one (${t}) does not support alpha`),a}return t}captureHueSliderColor(t){const e=J/this.effectiveSliderWidth*t;this.internalColorSet(this.baseColorFieldColor.hue(e),!1)}captureOpacitySliderValue(t){const e=H(w.max/this.effectiveSliderWidth*t);this.internalColorSet(this.baseColorFieldColor.alpha(e),!1)}internalColorSet(t,e=!0,n="user-interaction"){e&&G(t,this.color)||(this.internalColorUpdateContext=n,this.color=t,this.value=this.toValue(t),this.internalColorUpdateContext=null)}toValue(t,e=this.mode){if(!t)return null;if(e.includes("hex")){const a=e===_.HEXA;return g(C(t.round(),a),a)}if(e.includes("-css")){const a=t[e.replace("-css","").replace("a","")]().round().string();if((e.endsWith("a")||e.endsWith("a-css"))&&t.alpha()===1){const s=a.slice(0,3),l=a.slice(4,-1);return`${s}a(${l}, ${t.alpha()})`}return a}const i=t[Y(e)]().round().object();return e.endsWith("a")?we(i):i}getSliderCapSpacing(){const{dimensions:{slider:{height:t},thumb:{radius:e}}}=this;return e*2-t}updateDimensions(t="m"){this.dimensions=q[t]}drawColorField(){const t=this.colorFieldRenderingContext,{dimensions:{colorField:{height:e,width:n}}}=this;t.fillStyle=this.baseColorFieldColor.hsv().saturationv(100).value(100).alpha(1).string(),t.fillRect(0,0,n,e);const i=t.createLinearGradient(0,0,n,0);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(0,0,n,e);const a=t.createLinearGradient(0,0,0,e);a.addColorStop(0,"rgba(0,0,0,0)"),a.addColorStop(1,"rgba(0,0,0,1)"),t.fillStyle=a,t.fillRect(0,0,n,e),this.drawActiveColorFieldColor()}setCanvasContextSize(t,{height:e,width:n}){if(!t)return;const i=window.devicePixelRatio||1;t.width=n*i,t.height=e*i,t.style.height=`${e}px`,t.style.width=`${n}px`,t.getContext("2d").scale(i,i)}updateCanvasSize(t="all"){var i,a,o;const{dimensions:e}=this;(t==="all"||t==="color-field")&&this.setCanvasContextSize((i=this.colorFieldRenderingContext)==null?void 0:i.canvas,e.colorField);const n={width:this.effectiveSliderWidth,height:e.slider.height+(e.thumb.radius-e.slider.height/2)*2};(t==="all"||t==="hue-slider")&&this.setCanvasContextSize((a=this.hueSliderRenderingContext)==null?void 0:a.canvas,n),(t==="all"||t==="opacity-slider")&&this.setCanvasContextSize((o=this.opacitySliderRenderingContext)==null?void 0:o.canvas,n)}drawActiveColorFieldColor(){const{color:t}=this;if(!t)return;const e=t.hsv(),{dimensions:{colorField:{height:n,width:i},thumb:{radius:a}}}=this,o=e.saturationv()/(p.s/i),s=n-e.value()/(p.v/n);requestAnimationFrame(()=>{this.colorFieldScopeLeft=o,this.colorFieldScopeTop=s}),this.drawThumb(this.colorFieldRenderingContext,a,o,s,e,!1)}drawThumb(t,e,n,i,a,o){const l=2*Math.PI,h=1;if(t.beginPath(),t.arc(n,i,e,0,l),t.fillStyle="#fff",t.fill(),t.strokeStyle="rgba(0,0,0,0.3)",t.lineWidth=h,t.stroke(),o&&a.alpha()<1){const d=t.createPattern(this.getCheckeredBackgroundPattern(),"repeat");t.beginPath(),t.arc(n,i,e-3,0,l),t.fillStyle=d,t.fill()}t.globalCompositeOperation="source-atop",t.beginPath(),t.arc(n,i,e-3,0,l);const u=o?a.alpha():1;t.fillStyle=a.rgb().alpha(u).string(),t.fill(),t.globalCompositeOperation="source-over"}drawActiveHueSliderColor(){const{color:t}=this;if(!t)return;const e=t.hsv().saturationv(100).value(100),{dimensions:{thumb:{radius:n}}}=this,i=this.effectiveSliderWidth,a=e.hue()/(J/i),o=n,s=this.getSliderBoundX(a,i,n);requestAnimationFrame(()=>{this.hueScopeLeft=s}),this.drawThumb(this.hueSliderRenderingContext,n,s,o,e,!1)}drawHueSlider(){const t=this.hueSliderRenderingContext,{dimensions:{slider:{height:e},thumb:{radius:n}}}=this,i=0,a=n-e/2,o=this.effectiveSliderWidth,s=t.createLinearGradient(0,0,o,0),l=["red","yellow","lime","cyan","blue","magenta","#ff0004"],h=1/(l.length-1);let u=0;l.forEach(d=>{s.addColorStop(u,m(d).string()),u+=h}),t.clearRect(0,0,o,e+this.getSliderCapSpacing()*2),this.drawSliderPath(t,e,o,i,a),t.fillStyle=s,t.fill(),t.strokeStyle="rgba(0,0,0,0.3)",t.lineWidth=1,t.stroke(),this.drawActiveHueSliderColor()}drawOpacitySlider(){const t=this.opacitySliderRenderingContext,{baseColorFieldColor:e,dimensions:{slider:{height:n},thumb:{radius:i}}}=this,a=0,o=i-n/2,s=this.effectiveSliderWidth;t.clearRect(0,0,s,n+this.getSliderCapSpacing()*2);const l=t.createLinearGradient(0,o,s,0),h=e.rgb().alpha(0),u=e.rgb().alpha(.5),d=e.rgb().alpha(1);l.addColorStop(0,h.string()),l.addColorStop(.5,u.string()),l.addColorStop(1,d.string()),this.drawSliderPath(t,n,s,a,o);const f=t.createPattern(this.getCheckeredBackgroundPattern(),"repeat");t.fillStyle=f,t.fill(),t.fillStyle=l,t.fill(),t.strokeStyle="rgba(0,0,0,0.3)",t.lineWidth=1,t.stroke(),this.drawActiveOpacitySliderColor()}drawSliderPath(t,e,n,i,a){const o=e/2+1;t.beginPath(),t.moveTo(i+o,a),t.lineTo(i+n-o,a),t.quadraticCurveTo(i+n,a,i+n,a+o),t.lineTo(i+n,a+e-o),t.quadraticCurveTo(i+n,a+e,i+n-o,a+e),t.lineTo(i+o,a+e),t.quadraticCurveTo(i,a+e,i,a+e-o),t.lineTo(i,a+o),t.quadraticCurveTo(i,a,i+o,a),t.closePath()}getCheckeredBackgroundPattern(){if(this.checkerPattern)return this.checkerPattern;const t=document.createElement("canvas");t.width=10,t.height=10;const e=t.getContext("2d");return e.fillStyle="#ccc",e.fillRect(0,0,10,10),e.fillStyle="#fff",e.fillRect(0,0,5,5),e.fillRect(5,5,5,5),this.checkerPattern=t,t}drawActiveOpacitySliderColor(){const{color:t}=this;if(!t)return;const e=t,{dimensions:{thumb:{radius:n}}}=this,i=this.effectiveSliderWidth,a=A(e.alpha())/(w.max/i),o=n,s=this.getSliderBoundX(a,i,n);requestAnimationFrame(()=>{this.opacityScopeLeft=s}),this.drawThumb(this.opacitySliderRenderingContext,n,s,o,e,!0)}getSliderBoundX(t,e,n){const i=ze(t,e,n);return i===0?t:i===-1?te(t,0,e,n,n*2):te(t,0,e,e-n*2,e-n)}updateColorFromChannels(t){this.internalColorSet(m(t,this.channelMode))}updateChannelsFromColor(t){this.channels=t?this.toChannels(t):[null,null,null,null]}toChannels(t){const{channelMode:e}=this,n=t[e]().array().map((i,a)=>a===3?i:Math.floor(i));return n.length===3&&n.push(1),n}getAdjustedScopePosition(t,e){return[t-Z/2,e-Z/2]}static get assetsDirs(){return["assets"]}get el(){return V(this)}static get watchers(){return{allowEmpty:["handleAllowEmptyOrClearableChange"],clearable:["handleAllowEmptyOrClearableChange"],alphaChannel:["handleAlphaChannelChange","handleAlphaChannelDimensionsChange","handleFormatOrAlphaChannelChange"],dimensions:["handleAlphaChannelDimensionsChange"],color:["handleColorChange"],format:["handleFormatOrAlphaChannelChange"],scale:["handleScaleChange"],messageOverrides:["onMessagesChange"],value:["handleValueChange"],effectiveLocale:["effectiveLocaleChange"]}}};Ue.style=je;const K={container:"container",hexInput:"hex-input",opacityInput:"opacity-input"},We=":host{display:block}.container{display:flex;inline-size:100%;flex-wrap:nowrap;align-items:center}.hex-input{flex-grow:1;text-transform:uppercase}.opacity-input{inline-size:68px;margin-inline-start:-1px}:host([scale=s]) .container{flex-wrap:wrap;row-gap:0.125rem}:host([scale=s]) .opacity-input{inline-size:unset;margin-inline-start:unset}:host([scale=l]) .opacity-input{inline-size:88px}:host([hidden]){display:none}[hidden]{display:none}",_e=We,ne=m(),qe=class{constructor(t){M(this,t),this.calciteColorPickerHexInputChange=N(this,"calciteColorPickerHexInputChange",6),this.onHexInputBlur=()=>{const e=this.hexInputNode,n=e.value,i=`#${n}`,{allowEmpty:a,internalColor:o}=this,s=a&&!n,l=E(i);Q(i,this.alphaChannel)&&this.onHexInputChange(),!(s||k(i)&&l)&&(e.value=a&&!o?"":this.formatHexForInternalInput(xe(o.object())))},this.onOpacityInputBlur=()=>{const e=this.opacityInputNode,n=e.value,{allowEmpty:i,internalColor:a}=this;i&&!n||(e.value=i&&!a?"":this.formatOpacityForInternalInput(a))},this.onOpacityInputInput=()=>{this.onOpacityInputChange()},this.onHexInputChange=()=>{let n=this.hexInputNode.value;if(n){const i=g(n,!1);if(k(i)&&this.alphaChannel&&this.internalColor){const o=g(this.internalColor.hexa(),!0).slice(-2);n=`${i+o}`}}this.internalSetValue(n,this.value)},this.onOpacityInputChange=()=>{var i;const e=this.opacityInputNode;let n;if(!e.value)n=e.value;else{const a=H(Number(e.value));n=(i=this.internalColor)==null?void 0:i.alpha(a).hexa()}this.internalSetValue(n,this.value)},this.onInputFocus=e=>{e.type==="calciteInternalInputTextFocus"?this.hexInputNode.selectText():this.opacityInputNode.selectText()},this.onHexInputInput=()=>{const e=`#${this.hexInputNode.value}`,n=this.value;k(e,this.alphaChannel)&&E(e,this.alphaChannel)&&this.internalSetValue(e,n)},this.onInputKeyDown=e=>{const{altKey:n,ctrlKey:i,metaKey:a,shiftKey:o}=e,{alphaChannel:s,hexInputNode:l,internalColor:h,value:u}=this,{key:d}=e,f=e.composedPath();if(d==="Tab"&&Q(u,this.alphaChannel)||d==="Enter"){f.includes(l)?this.onHexInputChange():this.onOpacityInputChange(),d==="Enter"&&e.preventDefault();return}const b=d==="ArrowDown"||d==="ArrowUp",S=this.value;if(b){if(!u){this.internalSetValue(this.previousNonNullValue,S),e.preventDefault();return}const D=d==="ArrowUp"?1:-1,F=o?10:1;this.internalSetValue(C(this.nudgeRGBChannels(h,F*D,f.includes(l)?"rgb":"a"),s),S),e.preventDefault();return}const I=n||i||a,x=d.length===1,L=Ie.test(d);x&&!I&&!L&&e.preventDefault()},this.onHexInputPaste=e=>{const n=e.clipboardData.getData("text");k(n,this.alphaChannel)&&E(n,this.alphaChannel)&&(e.preventDefault(),this.hexInputNode.value=n.slice(1),this.internalSetValue(n,this.value))},this.previousNonNullValue=this.value,this.storeHexInputRef=e=>{this.hexInputNode=e},this.storeOpacityInputRef=e=>{this.opacityInputNode=e},this.allowEmpty=!1,this.alphaChannel=!1,this.hexLabel="Hex",this.messages=void 0,this.numberingSystem=void 0,this.scale="m",this.value=g(C(ne,this.alphaChannel),this.alphaChannel,!0),this.internalColor=ne}connectedCallback(){const{allowEmpty:t,alphaChannel:e,value:n}=this;if(n){const i=g(n,e);k(i,e)&&this.internalSetValue(i,i,!1);return}t&&this.internalSetValue(null,null,!1)}componentWillLoad(){se(this)}componentDidLoad(){le(this)}handleValueChange(t,e){this.internalSetValue(t,e,!1)}render(){const{alphaChannel:t,hexLabel:e,internalColor:n,messages:i,scale:a,value:o}=this,s=this.formatHexForInternalInput(o),l=this.formatOpacityForInternalInput(n),h=a==="l"?"m":"s";return r("div",{key:"70f804fdbc3c29fdf49616f56c39593fdc3717da",class:K.container},r("calcite-input-text",{key:"777d1f8ffa673a0d74f049d4a6bdacbf3510006a",class:K.hexInput,label:(i==null?void 0:i.hex)||e,maxLength:this.alphaChannel?8:6,onCalciteInputTextChange:this.onHexInputChange,onCalciteInputTextInput:this.onHexInputInput,onCalciteInternalInputTextBlur:this.onHexInputBlur,onCalciteInternalInputTextFocus:this.onInputFocus,onKeyDown:this.onInputKeyDown,onPaste:this.onHexInputPaste,prefixText:"#",ref:this.storeHexInputRef,scale:h,value:s}),t?r("calcite-input-number",{class:K.opacityInput,key:"opacity-input",label:i==null?void 0:i.opacity,max:w.max,maxLength:3,min:w.min,numberButtonType:"none",numberingSystem:this.numberingSystem,onCalciteInputNumberInput:this.onOpacityInputInput,onCalciteInternalInputNumberBlur:this.onOpacityInputBlur,onCalciteInternalInputNumberFocus:this.onInputFocus,onKeyDown:this.onInputKeyDown,ref:this.storeOpacityInputRef,scale:h,suffixText:"%",value:l}):null)}async setFocus(){return await oe(this),De(this.hexInputNode)}internalSetValue(t,e,n=!0){if(t){const{alphaChannel:i}=this,a=g(t,i,i);if(k(a,i)){const{internalColor:o}=this,s=m(a),l=g(C(s,i),i),h=!o||l!==g(C(o,i),i);this.internalColor=s,this.previousNonNullValue=l,this.value=l,h&&n&&this.calciteColorPickerHexInputChange.emit();return}}else if(this.allowEmpty){this.internalColor=null,this.value=null,n&&this.calciteColorPickerHexInputChange.emit();return}this.value=e}formatHexForInternalInput(t){return t?t.replace("#","").slice(0,6):""}formatOpacityForInternalInput(t){return t?`${A(t.alpha())}`:""}nudgeRGBChannels(t,e,n){let i;const a=t.array(),o=a.slice(0,3);if(n==="rgb")i=[...o.map(l=>l+e),this.alphaChannel?a[3]:void 0];else{const s=H(A(t.alpha())+e);i=[...o,s]}return m(i)}get el(){return V(this)}static get watchers(){return{value:["handleValueChange"]}}};qe.style=_e;const P={swatch:"swatch",noColorSwatch:"swatch--no-color",checker:"checker"},ie={borderLight:"rgba(0, 0, 0, 0.3)",borderDark:"rgba(255, 255, 255, 0.15)"},ae=4,y={squareSize:ae,size:ae*2},Xe=":host{position:relative;display:inline-flex}:host([scale=s]){block-size:1.25rem;inline-size:1.25rem}:host([scale=m]){block-size:1.5rem;inline-size:1.5rem}:host([scale=l]){block-size:2rem;inline-size:2rem}.swatch{overflow:hidden;block-size:inherit;inline-size:inherit}.swatch rect{transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.swatch--no-color rect{fill:var(--calcite-color-foreground-1)}.swatch--no-color line{stroke:var(--calcite-color-status-danger)}.checker{fill:#cacaca}:host([hidden]){display:none}[hidden]{display:none}",Ge=Xe,Ye=class{constructor(t){M(this,t),this.active=!1,this.color=void 0,this.scale="m"}handleColorChange(t){this.internalColor=t?m(t):null}componentWillLoad(){this.handleColorChange(this.color)}render(){const t=!this.internalColor,e={[P.swatch]:!0,[P.noColorSwatch]:t};return r("svg",{key:"d808ca40b9f81aad24291cabcfaf95d74d89f7cd",class:e,xmlns:"http://www.w3.org/2000/svg"},this.renderSwatch())}renderSwatch(){const{active:t,el:e,internalColor:n}=this,i=t?"100%":"0",o=Fe(e)==="light"?ie.borderLight:ie.borderDark,s=!n,l={height:"100%",rx:i,stroke:o,strokeWidth:"2",width:"100%"};if(s)return r(W,null,r("clipPath",{id:"shape"},r("rect",{height:"100%",rx:i,width:"100%"})),this.renderSwatchRect({clipPath:`inset(0 round ${i})`,...l}),r("line",{"clip-path":"url(#shape)","stroke-width":"3",x1:"100%",x2:"0",y1:"0",y2:"100%"}));const h=n.alpha(),u=C(n),d=C(n,h<1);return r(W,null,r("title",null,d),r("defs",null,r("pattern",{height:y.size,id:"checker",patternUnits:"userSpaceOnUse",width:y.size,x:"0",y:"0"},r("rect",{class:P.checker,height:y.squareSize,width:y.squareSize,x:"0",y:"0"}),r("rect",{class:P.checker,height:y.squareSize,width:y.squareSize,x:y.squareSize,y:y.squareSize}))),this.renderSwatchRect({fill:"url(#checker)",rx:l.rx,height:l.height,width:l.width}),this.renderSwatchRect({clipPath:h<1?"polygon(100% 0, 0 0, 0 100%)":`inset(0 round ${i})`,fill:u,...l}),h<1?this.renderSwatchRect({clipPath:"polygon(100% 0, 100% 100%, 0 100%)",fill:d,key:"opacity-fill",...l}):null)}renderSwatchRect({clipPath:t,fill:e,height:n,key:i,rx:a,stroke:o,strokeWidth:s,width:l}){return r("rect",{"clip-path":t,fill:e,height:n,key:i,rx:a,stroke:o,"stroke-width":s,width:l})}get el(){return V(this)}static get watchers(){return{color:["handleColorChange"]}}};Ye.style=Ge;export{Ue as calcite_color_picker,qe as calcite_color_picker_hex_input,Ye as calcite_color_picker_swatch};
//# sourceMappingURL=calcite-color-picker_3.entry-0pmF5kqT.js.map
