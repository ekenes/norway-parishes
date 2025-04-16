import{r as p,c as m,h as i,F as L,g as u}from"./index-CaYX07dN.js";import{c as w,d as z}from"./conditionalSlot-167e1146-CCQuv1i7.js";import{d as I,g as M,t as S}from"./dom-b6dedd88-CWlTYAyV.js";import{c as v,d as x}from"./locale-60f8ca58-Bc6v-0Q5.js";import{u as b,c as y,s as C,d as T}from"./t9n-75defee3-DTCt3l8w.js";import{H as k,c as D}from"./Heading-4aed0b02-C9J_dGv6.js";import{l as g}from"./logger-d56ad214-CMkSdhoJ.js";import{c as H}from"./observers-9c166451-CsKjvMAd.js";import"./guid-9c230b6a-BxSjQh8J.js";import"./key-3ee05994-D63ExP77.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const o={container:"container",header:"header",heading:"heading",close:"close",imageFrame:"image-frame",content:"content",info:"info"},O={close:"x"},f={thumbnail:"thumbnail"},G=`:host{position:relative;margin:1rem;box-sizing:border-box;display:flex;flex-direction:row;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-2);background-color:var(--calcite-color-foreground-1);font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-color-text-2)}:host *{box-sizing:border-box}.container{inline-size:100%;padding:1rem}:host([closed]),:host([closed]) .container{display:none}:host([selected]) .container{margin:0px;border-style:none;padding:0px}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.header{margin-block-end:0.5rem}.header .heading{padding:0px;font-size:var(--calcite-font-size-0);line-height:1.25rem;color:var(--calcite-color-text-1)}.container[hidden]{display:none}.content{display:flex}.info{padding-block:0px;padding-inline:1rem;inline-size:70%}.info:only-child{inline-size:100%;padding-inline:0px}::slotted(p){margin-block-start:0px}::slotted(a){outline-color:transparent;color:var(--calcite-color-brand)}::slotted(a:focus){outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.image-frame{inline-size:25%}.image-frame img{max-inline-size:100%}::slotted(img){max-inline-size:100%}:host([hidden]){display:none}[hidden]{display:none}`,R=G;g.deprecated("component",{name:"tip",removalVersion:4,suggested:["card","notice","panel","tile"]});const A=class{constructor(e){p(this,e),this.calciteTipDismiss=m(this,"calciteTipDismiss",6),this.hideTip=()=>{this.closed=!0,this.calciteTipDismiss.emit()},this.closed=!1,this.closeDisabled=!1,this.heading=void 0,this.headingLevel=void 0,this.selected=!1,this.messages=void 0,this.messageOverrides=void 0,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}effectiveLocaleChange(){b(this,this.effectiveLocale)}connectedCallback(){w(this),v(this),y(this)}async componentWillLoad(){await C(this)}disconnectedCallback(){z(this),x(this),T(this)}renderHeader(){var r;const{heading:e,headingLevel:t,el:n}=this,c=(r=n.closest("calcite-tip-manager"))==null?void 0:r.headingLevel,s=c?D(c+1):null,l=t||s;return e?i("header",{class:o.header},i(k,{class:o.heading,level:l},e)):null}renderDismissButton(){const{closeDisabled:e,hideTip:t}=this;return e?null:i("calcite-action",{class:o.close,icon:O.close,onClick:t,scale:"l",text:this.messages.close})}renderImageFrame(){const{el:e}=this;return I(e,f.thumbnail)?i("div",{class:o.imageFrame,key:"thumbnail"},i("slot",{name:f.thumbnail})):null}renderInfoNode(){return i("div",{class:o.info},i("slot",null))}renderContent(){return i("div",{class:o.content},this.renderImageFrame(),this.renderInfoNode())}render(){return i(L,{key:"0ee5bf1ba2df1cccf7e6684bd0480344b074b16b"},i("article",{key:"55effd0a9eaa055167507e216983713fc1767e13",class:o.container},this.renderHeader(),this.renderContent()),this.renderDismissButton())}static get assetsDirs(){return["assets"]}get el(){return u(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};A.style=R;const E=":host{box-sizing:border-box;display:block;background-color:var(--calcite-color-foreground-1);font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-color-text-2)}::slotted(calcite-tip){margin:0px;border-style:none;max-inline-size:var(--calcite-tip-max-width)}:host([hidden]){display:none}[hidden]{display:none}",F=E;g.deprecated("component",{name:"tip-group",removalVersion:4,suggested:["carousel","carousel-item"]});const N=class{constructor(e){p(this,e),this.groupTitle=void 0}render(){return i("slot",{key:"40d9094358a1ef9165e9261d9ca351b2530a7584"})}};N.style=F;const a={header:"header",heading:"heading",close:"close",container:"container",tipContainer:"tip-container",tipContainerAdvancing:"tip-container--advancing",tipContainerRetreating:"tip-container--retreating",pagination:"pagination",pagePosition:"page-position",pageNext:"page-next",pagePrevious:"page-previous"},d={chevronLeft:"chevron-left",chevronRight:"chevron-right",close:"x"},P=`:host{box-sizing:border-box;display:block;background-color:var(--calcite-color-foreground-1);font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-color-text-2);--calcite-tip-manager-height:19vh}:host *{box-sizing:border-box}:host([closed]){display:none}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.header{border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);padding-block:0px;padding-inline-end:0px;padding-inline-start:1rem}.header .heading{padding:0px;font-size:var(--calcite-font-size-1);line-height:1.5rem;font-weight:var(--calcite-font-weight-bold);color:var(--calcite-color-text-1)}.container{position:relative;overflow:hidden;outline-color:transparent;min-block-size:150px}.container:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.tip-container{margin-block-start:1px;display:flex;align-items:flex-start;justify-content:center;overflow:auto;padding:1rem;outline-color:transparent;animation-name:none;animation-duration:var(--calcite-animation-timing);block-size:var(--calcite-tip-manager-height)}.tip-container:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}::slotted(calcite-tip){margin:0px;border-style:none;max-inline-size:var(--calcite-tip-max-width)}.tip-container--advancing{animation-name:tip-advance}.tip-container--retreating{animation-name:tip-retreat}.pagination{display:flex;align-items:center;justify-content:center;padding-inline:0px;padding-block:0.75rem 0.5rem}.page-position{margin-block:0px;margin-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}@keyframes tip-advance{0%{opacity:0;transform:translate3d(50px, 0, 0) scale(0.99)}100%{opacity:1;transform:translate3d(0, 0, 0) scale(1)}}@keyframes tip-retreat{0%{opacity:0;transform:translate3d(-50px, 0, 0) scale(0.99)}100%{opacity:1;transform:translate3d(0, 0, 0) scale(1)}}:host([hidden]){display:none}[hidden]{display:none}`,_=P;g.deprecated("component",{name:"tip-manager",removalVersion:4,suggested:"carousel"});const $=class{constructor(e){p(this,e),this.calciteTipManagerClose=m(this,"calciteTipManagerClose",6),this.mutationObserver=H("mutation",()=>this.setUpTips()),this.hideTipManager=()=>{this.closed=!0,this.calciteTipManagerClose.emit()},this.previousClicked=()=>{this.previousTip()},this.nextClicked=()=>{this.nextTip()},this.tipManagerKeyDownHandler=t=>{if(t.target===this.container)switch(t.key){case"ArrowRight":t.preventDefault(),this.nextTip();break;case"ArrowLeft":t.preventDefault(),this.previousTip();break;case"Home":t.preventDefault(),this.selectedIndex=0;break;case"End":t.preventDefault(),this.selectedIndex=this.total-1;break}},this.storeContainerRef=t=>{this.container=t},this.closed=!1,this.headingLevel=void 0,this.messages=void 0,this.messageOverrides=void 0,this.selectedIndex=void 0,this.tips=void 0,this.total=void 0,this.direction=void 0,this.groupTitle=void 0,this.defaultMessages=void 0,this.effectiveLocale=""}closedChangeHandler(){this.direction=null}onMessagesChange(){}selectedChangeHandler(){this.showSelectedTip(),this.updateGroupTitle()}async effectiveLocaleChange(){await b(this,this.effectiveLocale),this.updateGroupTitle()}connectedCallback(){var e;v(this),y(this),this.setUpTips(),(e=this.mutationObserver)==null||e.observe(this.el,{childList:!0,subtree:!0})}async componentWillLoad(){await C(this),this.updateGroupTitle()}disconnectedCallback(){var e;(e=this.mutationObserver)==null||e.disconnect(),x(this),T(this)}async nextTip(){this.direction="advancing";const e=this.selectedIndex+1;this.selectedIndex=(e+this.total)%this.total}async previousTip(){this.direction="retreating";const e=this.selectedIndex-1;this.selectedIndex=(e+this.total)%this.total}setUpTips(){const e=Array.from(this.el.querySelectorAll("calcite-tip"));if(this.total=e.length,this.total===0)return;const t=this.el.querySelector("calcite-tip[selected]");this.tips=e,this.selectedIndex=t?e.indexOf(t):0,e.forEach(n=>{n.closeDisabled=!0}),this.showSelectedTip()}showSelectedTip(){this.tips.forEach((e,t)=>{const n=this.selectedIndex===t;e.selected=n,e.hidden=!n})}updateGroupTitle(){var e;if(this.tips){const n=this.tips[this.selectedIndex].closest("calcite-tip-group");this.groupTitle=(n==null?void 0:n.groupTitle)||((e=this.messages)==null?void 0:e.defaultGroupTitle)}}renderPagination(){const e=M(this.el),{selectedIndex:t,tips:n,total:c,messages:s}=this,l=s.next,r=s.previous,h=s.defaultPaginationLabel;return n.length>1?i("footer",{class:a.pagination},i("calcite-action",{class:a.pagePrevious,icon:e==="ltr"?d.chevronLeft:d.chevronRight,onClick:this.previousClicked,scale:"m",text:r}),i("span",{class:a.pagePosition},`${h} ${t+1}/${c}`),i("calcite-action",{class:a.pageNext,icon:e==="ltr"?d.chevronRight:d.chevronLeft,onClick:this.nextClicked,scale:"m",text:l})):null}render(){const{closed:e,direction:t,headingLevel:n,groupTitle:c,selectedIndex:s,messages:l,total:r}=this,h=l.close;return r===0?null:i("section",{"aria-hidden":S(e),class:a.container,hidden:e,onKeyDown:this.tipManagerKeyDownHandler,ref:this.storeContainerRef,tabIndex:0},i("header",{class:a.header},i(k,{class:a.heading,level:n},c),i("calcite-action",{class:a.close,onClick:this.hideTipManager,scale:"m",text:h},i("calcite-icon",{icon:d.close,scale:"m"}))),i("div",{class:{[a.tipContainer]:!0,[a.tipContainerAdvancing]:!e&&t==="advancing",[a.tipContainerRetreating]:!e&&t==="retreating"},key:s,tabIndex:0},i("slot",null)),this.renderPagination())}static get assetsDirs(){return["assets"]}get el(){return u(this)}static get watchers(){return{closed:["closedChangeHandler"],messageOverrides:["onMessagesChange"],selectedIndex:["selectedChangeHandler"],effectiveLocale:["effectiveLocaleChange"]}}};$.style=_;export{A as calcite_tip,N as calcite_tip_group,$ as calcite_tip_manager};
//# sourceMappingURL=calcite-tip_3.entry-C18j8ocq.js.map
