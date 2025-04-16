import{r as A,c as C,h as i,H as w,g as E,D as z}from"./index-CaYX07dN.js";import{c as L,d as S}from"./conditionalSlot-167e1146-CCQuv1i7.js";import{s as g,a as f,f as H}from"./dom-b6dedd88-CWlTYAyV.js";import{a as O,s as D,c as T}from"./loadable-13e9ffb2-S69vqgLk.js";import{c as B,d as G}from"./locale-60f8ca58-Bc6v-0Q5.js";import{c as m}from"./observers-9c166451-CsKjvMAd.js";import{u as M,c as k,s as q,d as P}from"./t9n-75defee3-DTCt3l8w.js";import{t as d,E as F,q as U,g as W,o as N,a as _}from"./ExpandToggle-623527ca-BfIlJ3k6.js";import{d as j}from"./debounce-6e4946fd-4Zc0Qe3n.js";import"./guid-9c230b6a-BxSjQh8J.js";import"./key-3ee05994-D63ExP77.js";import"./resources-c6ed25f3-BhfbaUuh.js";import"./resources-fa285c14-Ka4DNstb.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const I={actionGroupEnd:"action-group--end"},u={actionsEnd:"actions-end",bottomActions:"bottom-actions",expandTooltip:"expand-tooltip"},R=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{pointer-events:auto;display:inline-flex;align-self:stretch;gap:var(--calcite-action-bar-items-space, 0)}:host([layout=vertical]){flex-direction:column}:host([layout=vertical]):host([overflow-actions-disabled]){overflow-y:auto}:host([layout=vertical]):host([expanded]){max-inline-size:var(--calcite-action-bar-expanded-max-width, auto)}:host([layout=vertical]) .action-group--end{margin-block-start:auto}:host([layout=vertical]) ::slotted(calcite-action-group:not(:last-of-type)){border-block-end-width:var(--calcite-border-width-sm)}:host([layout=horizontal]){flex-direction:row}:host([layout=horizontal]):host([overflow-actions-disabled]){overflow-x:auto}:host([layout=horizontal]) .action-group--end{margin-inline-start:auto}:host([layout=horizontal]) ::slotted(calcite-action-group:not(:last-of-type)){border-inline-end-width:var(--calcite-border-width-sm)}.action-group--end{justify-content:flex-end}:host([hidden]){display:none}[hidden]{display:none}",J=R,K=class{constructor(o){A(this,o),this.calciteActionBarToggle=C(this,"calciteActionBarToggle",6),this.mutationObserver=m("mutation",()=>{const{el:t,expanded:e}=this;d({el:t,expanded:e}),this.overflowActions()}),this.resizeObserver=m("resize",t=>this.resizeHandlerEntries(t)),this.actionMenuOpenHandler=t=>{if(t.target.menuOpen){const e=t.composedPath();Array.from(this.el.querySelectorAll("calcite-action-group")).forEach(s=>{e.includes(s)||(s.menuOpen=!1)})}},this.resizeHandlerEntries=t=>{t.forEach(this.resizeHandler)},this.resizeHandler=t=>{const{width:e,height:s}=t.contentRect;this.resize({width:e,height:s})},this.resize=j(({width:t,height:e})=>{const{el:s,expanded:h,expandDisabled:l,layout:c,overflowActionsDisabled:a}=this;if(a||c==="vertical"&&!e||c==="horizontal"&&!t)return;const r=U(s),p=l?r.length:r.length+1,n=Array.from(s.querySelectorAll("calcite-action-group"));this.setGroupLayout(n);const b=this.hasActionsEnd||this.hasBottomActions||!l?n.length+1:n.length,{actionHeight:v,actionWidth:x}=W(r),y=_({layout:c,actionCount:p,actionHeight:v,actionWidth:x,height:e,width:t,groupCount:b});N({actionGroups:n,expanded:h,overflowCount:y})},z.resize),this.toggleExpand=()=>{this.expanded=!this.expanded,this.calciteActionBarToggle.emit()},this.handleDefaultSlotChange=t=>{const e=g(t).filter(s=>s.matches("calcite-action-group"));this.setGroupLayout(e)},this.handleActionsEndSlotChange=t=>{this.hasActionsEnd=f(t)},this.handleBottomActionsSlotChange=t=>{this.hasBottomActions=f(t)},this.handleTooltipSlotChange=t=>{const e=g(t).filter(s=>s==null?void 0:s.matches("calcite-tooltip"));this.expandTooltip=e[0]},this.actionsEndGroupLabel=void 0,this.expandDisabled=!1,this.expanded=!1,this.layout="vertical",this.overflowActionsDisabled=!1,this.overlayPositioning="absolute",this.position=void 0,this.scale=void 0,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.hasActionsEnd=!1,this.hasBottomActions=!1,this.expandTooltip=void 0,this.defaultMessages=void 0}expandHandler(){this.overflowActions()}expandedHandler(){const{el:o,expanded:t}=this;d({el:o,expanded:t}),this.overflowActions()}layoutHandler(){this.updateGroups()}overflowDisabledHandler(o){var t,e;if(o){(t=this.resizeObserver)==null||t.disconnect();return}(e=this.resizeObserver)==null||e.observe(this.el),this.overflowActions()}onMessagesChange(){}effectiveLocaleChange(){M(this,this.effectiveLocale)}componentDidLoad(){const{el:o,expanded:t}=this;O(this),d({el:o,expanded:t}),this.overflowActions()}connectedCallback(){var e,s;const{el:o,expanded:t}=this;B(this),k(this),d({el:o,expanded:t}),(e=this.mutationObserver)==null||e.observe(o,{childList:!0,subtree:!0}),this.overflowActionsDisabled||(s=this.resizeObserver)==null||s.observe(o),this.overflowActions(),L(this)}async componentWillLoad(){D(this),await q(this)}disconnectedCallback(){var o,t;(o=this.mutationObserver)==null||o.disconnect(),(t=this.resizeObserver)==null||t.disconnect(),S(this),G(this),P(this)}async overflowActions(){this.resize({width:this.el.clientWidth,height:this.el.clientHeight})}async setFocus(){await T(this),H(this.el)}updateGroups(){this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group")))}setGroupLayout(o){o.forEach(t=>t.layout=this.layout)}renderBottomActionGroup(){const{expanded:o,expandDisabled:t,el:e,position:s,toggleExpand:h,scale:l,layout:c,messages:a,actionsEndGroupLabel:r,overlayPositioning:p}=this,n=t?null:i(F,{collapseLabel:a.collapseLabel,collapseText:a.collapse,el:e,expandLabel:a.expandLabel,expandText:a.expand,expanded:o,position:s,scale:l,toggle:h,tooltip:this.expandTooltip});return i("calcite-action-group",{class:I.actionGroupEnd,hidden:this.expandDisabled&&!(this.hasActionsEnd||this.hasBottomActions),label:r,layout:c,overlayPositioning:p,scale:l},i("slot",{name:u.actionsEnd,onSlotchange:this.handleActionsEndSlotChange}),i("slot",{name:u.bottomActions,onSlotchange:this.handleBottomActionsSlotChange}),i("slot",{name:u.expandTooltip,onSlotchange:this.handleTooltipSlotChange}),n)}render(){return i(w,{key:"ff6e365531a0ed2032864bb0777910c3932e9c6b",onCalciteActionMenuOpen:this.actionMenuOpenHandler},i("slot",{key:"f12b2f455752a62ee32b65224bed385940135a49",onSlotchange:this.handleDefaultSlotChange}),this.renderBottomActionGroup())}static get assetsDirs(){return["assets"]}get el(){return E(this)}static get watchers(){return{expandDisabled:["expandHandler"],expanded:["expandedHandler"],layout:["layoutHandler"],overflowActionsDisabled:["overflowDisabledHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};K.style=J;export{K as calcite_action_bar};
//# sourceMappingURL=calcite-action-bar.entry-BYx2k0NO.js.map
