import{r as b,c as s,h as n,H as w,g}from"./index-CaYX07dN.js";import{b as D,f as q,t as u,h as p}from"./dom-b6dedd88-CWlTYAyV.js";import{f as A,c as h,d as T,a as G,F as y,r as F}from"./floating-ui-382f6e89-C4XB2pgY.js";import{g as L}from"./guid-9c230b6a-BxSjQh8J.js";import{u as k,I as E}from"./interactive-1a42577a-X0QwTOR8.js";import{i as M}from"./key-3ee05994-D63ExP77.js";import{c as x,s as C,a as S}from"./loadable-13e9ffb2-S69vqgLk.js";import{c as f}from"./observers-9c166451-CsKjvMAd.js";import{o as I}from"./openCloseComponent-4d1d6536-CMiXDKWr.js";import{g as m}from"./component-5f0a8be8-6CIDVndn.js";import"./debounce-6e4946fd-4Zc0Qe3n.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const R={dropdownTrigger:"trigger"},B=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host .calcite-dropdown-wrapper{--calcite-floating-ui-z-index:var(--calcite-z-index-dropdown);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index);visibility:hidden}.calcite-dropdown-wrapper .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset, left, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}.calcite-dropdown-wrapper[data-placement^=bottom] .calcite-floating-ui-anim{inset-block-start:-5px}.calcite-dropdown-wrapper[data-placement^=top] .calcite-floating-ui-anim{inset-block-start:5px}.calcite-dropdown-wrapper[data-placement^=left] .calcite-floating-ui-anim{left:5px}.calcite-dropdown-wrapper[data-placement^=right] .calcite-floating-ui-anim{left:-5px}.calcite-dropdown-wrapper[data-placement] .calcite-floating-ui-anim--active{opacity:1;inset-block:0;left:0}:host([open]) .calcite-dropdown-wrapper{visibility:visible}:host .calcite-dropdown-content{max-block-size:45vh;inline-size:auto;overflow-y:auto;overflow-x:hidden;background-color:var(--calcite-color-foreground-1);inline-size:var(--calcite-dropdown-width)}.calcite-trigger-container{position:relative;display:flex;block-size:100%;flex:1 1 auto;word-wrap:break-word;word-break:break-word}@media (forced-colors: active){:host([open]) .calcite-dropdown-wrapper{border:1px solid canvasText}}:host([width-scale=s]){--calcite-dropdown-width:12rem}:host([width-scale=m]){--calcite-dropdown-width:14rem}:host([width-scale=l]){--calcite-dropdown-width:16rem}:host([hidden]){display:none}[hidden]{display:none}",K=B,W=class{constructor(e){b(this,e),this.calciteDropdownSelect=s(this,"calciteDropdownSelect",6),this.calciteDropdownBeforeClose=s(this,"calciteDropdownBeforeClose",6),this.calciteDropdownClose=s(this,"calciteDropdownClose",6),this.calciteDropdownBeforeOpen=s(this,"calciteDropdownBeforeOpen",6),this.calciteDropdownOpen=s(this,"calciteDropdownOpen",6),this.items=[],this.groups=[],this.mutationObserver=f("mutation",()=>this.updateItems()),this.resizeObserver=f("resize",t=>this.resizeObserverCallback(t)),this.openTransitionProp="opacity",this.guid=`calcite-dropdown-${L()}`,this.focusLastDropdownItem=!1,this.setFilteredPlacements=()=>{const{el:t,flipPlacements:i}=this;this.filteredFlipPlacements=i?A(i,t):null},this.updateTriggers=t=>{this.triggers=t.target.assignedElements({flatten:!0}),this.reposition(!0)},this.updateItems=()=>{this.items=this.groups.map(t=>Array.from(t==null?void 0:t.querySelectorAll("calcite-dropdown-item"))).reduce((t,i)=>[...t,...i],[]),this.updateSelectedItems(),this.reposition(!0),this.items.forEach(t=>t.scale=this.scale)},this.updateGroups=t=>{const i=t.target.assignedElements({flatten:!0}).filter(o=>o==null?void 0:o.matches("calcite-dropdown-group"));this.groups=i,this.updateItems(),this.updateGroupScale()},this.resizeObserverCallback=t=>{t.forEach(i=>{const{target:o}=i;o===this.referenceEl?this.setDropdownWidth():o===this.scrollerEl&&this.setMaxScrollerHeight()})},this.setDropdownWidth=()=>{const{referenceEl:t,scrollerEl:i}=this,o=t==null?void 0:t.clientWidth;!o||!i||(i.style.minWidth=`${o}px`)},this.setMaxScrollerHeight=()=>{const{scrollerEl:t}=this;if(!t)return;this.reposition(!0);const i=this.getMaxScrollerHeight();t.style.maxHeight=i>0?`${i}px`:"",this.reposition(!0)},this.setScrollerAndTransitionEl=t=>{this.resizeObserver.observe(t),this.scrollerEl=t,this.transitionEl=t},this.setReferenceEl=t=>{this.referenceEl=t,h(this,this.referenceEl,this.floatingEl),this.resizeObserver.observe(t)},this.setFloatingEl=t=>{this.floatingEl=t,h(this,this.referenceEl,this.floatingEl)},this.keyDownHandler=t=>{if(!t.composedPath().includes(this.referenceEl))return;const{defaultPrevented:i,key:o}=t;if(!i){if(o==="Escape"){this.closeCalciteDropdown(),t.preventDefault();return}if(this.open&&t.shiftKey&&o==="Tab"){this.closeCalciteDropdown(),t.preventDefault();return}M(o)?(this.toggleDropdown(),t.preventDefault()):(o==="ArrowDown"||o==="ArrowUp")&&(this.focusLastDropdownItem=o==="ArrowUp",this.open=!0,this.el.addEventListener("calciteDropdownOpen",this.onOpenEnd))}},this.focusOnFirstActiveOrDefaultItem=()=>{const i=this.getTraversableItems().find(o=>o.selected)||(this.focusLastDropdownItem?this.items[this.items.length-1]:this.items[0]);this.focusLastDropdownItem=!1,i&&D(i)},this.onOpenEnd=()=>{this.focusOnFirstActiveOrDefaultItem(),this.el.removeEventListener("calciteDropdownOpen",this.onOpenEnd)},this.toggleDropdown=()=>{this.open=!this.open,this.open&&this.el.addEventListener("calciteDropdownOpen",this.onOpenEnd)},this.open=!1,this.closeOnSelectDisabled=!1,this.disabled=!1,this.flipPlacements=void 0,this.maxItems=0,this.overlayPositioning="absolute",this.placement=T,this.selectedItems=[],this.type="click",this.widthScale=void 0,this.scale="m"}openHandler(){if(I(this),this.disabled){this.open=!1;return}this.reposition(!0)}handleDisabledChange(e){e||(this.open=!1)}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}maxItemsHandler(){this.setMaxScrollerHeight()}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}handlePropsChange(){this.updateItems(),this.updateGroupScale()}async setFocus(){await x(this),q(this.referenceEl)}connectedCallback(){var e;(e=this.mutationObserver)==null||e.observe(this.el,{childList:!0,subtree:!0}),this.setFilteredPlacements(),this.open&&(this.openHandler(),I(this)),this.updateItems(),h(this,this.referenceEl,this.floatingEl)}componentWillLoad(){C(this)}componentDidLoad(){S(this),h(this,this.referenceEl,this.floatingEl)}componentDidRender(){k(this)}disconnectedCallback(){var e,t;(e=this.mutationObserver)==null||e.disconnect(),(t=this.resizeObserver)==null||t.disconnect(),G(this,this.referenceEl,this.floatingEl)}render(){const{open:e,guid:t}=this;return n(w,{key:"377c3d9687bc025f004b4efe58bfa5f0893d86d0"},n(E,{key:"9e2f48be045fc6db10cc7203a8b998ec2b6abafd",disabled:this.disabled},n("div",{key:"8607de2d53a4f8c4b29206ee56aa23ad4c2cbe3d",class:"calcite-trigger-container",id:`${t}-menubutton`,onClick:this.toggleDropdown,onKeyDown:this.keyDownHandler,ref:this.setReferenceEl},n("slot",{key:"07de8df34055ddc39301654a5ca312ddf293e6a9","aria-controls":`${t}-menu`,"aria-expanded":u(e),"aria-haspopup":"menu",name:R.dropdownTrigger,onSlotchange:this.updateTriggers})),n("div",{key:"c1469efb62eb704b021ce6479ad55deda59582d4","aria-hidden":u(!e),class:"calcite-dropdown-wrapper",ref:this.setFloatingEl},n("div",{key:"f875166d486a53cd393f17d9295974aa449d449f","aria-labelledby":`${t}-menubutton`,class:{"calcite-dropdown-content":!0,[y.animation]:!0,[y.animationActive]:e},id:`${t}-menu`,ref:this.setScrollerAndTransitionEl,role:"menu"},n("slot",{key:"bc6e61383aaf85b3d6242a86c50da68bc8b31e27",onSlotchange:this.updateGroups})))))}async reposition(e=!1){const{floatingEl:t,referenceEl:i,placement:o,overlayPositioning:r,filteredFlipPlacements:a}=this;return F(this,{floatingEl:t,referenceEl:i,overlayPositioning:r,placement:o,flipPlacements:a,type:"menu"},e)}closeCalciteDropdownOnClick(e){this.disabled||!this.open||e.composedPath().includes(this.el)||this.closeCalciteDropdown(!1)}closeCalciteDropdownOnEvent(e){this.closeCalciteDropdown(),e.stopPropagation()}closeCalciteDropdownOnOpenEvent(e){e.composedPath().includes(this.el)||(this.open=!1)}pointerEnterHandler(){this.disabled||this.type!=="hover"||this.toggleDropdown()}pointerLeaveHandler(){this.disabled||this.type!=="hover"||this.closeCalciteDropdown()}getTraversableItems(){return this.items.filter(e=>!e.disabled&&!e.hidden)}calciteInternalDropdownItemKeyEvent(e){const{keyboardEvent:t}=e.detail,i=t.target,o=this.getTraversableItems();switch(t.key){case"Tab":this.open=!1,this.updateTabIndexOfItems(i);break;case"ArrowDown":p(o,i,"next");break;case"ArrowUp":p(o,i,"previous");break;case"Home":p(o,i,"first");break;case"End":p(o,i,"last");break}e.stopPropagation()}handleItemSelect(e){this.updateSelectedItems(),e.stopPropagation(),this.calciteDropdownSelect.emit(),(!this.closeOnSelectDisabled||e.detail.requestedDropdownGroup.selectionMode==="none")&&this.closeCalciteDropdown(),e.stopPropagation()}updateGroupScale(){var e;(e=this.groups)==null||e.forEach(t=>t.scale=this.scale)}onBeforeOpen(){this.calciteDropdownBeforeOpen.emit()}onOpen(){this.calciteDropdownOpen.emit()}onBeforeClose(){this.calciteDropdownBeforeClose.emit()}onClose(){this.calciteDropdownClose.emit()}updateSelectedItems(){this.selectedItems=this.items.filter(e=>e.selected)}getMaxScrollerHeight(){const{maxItems:e,items:t}=this;let i=0,o=0,r;return this.groups.forEach(a=>{e>0&&i<e&&Array.from(a.children).forEach((c,d)=>{d===0&&(isNaN(r)&&(r=c.offsetTop),o+=r),i<e&&(o+=c.offsetHeight,i+=1)})}),t.length>e?o:0}closeCalciteDropdown(e=!0){this.open=!1,e&&D(this.triggers[0])}updateTabIndexOfItems(e){this.items.forEach(t=>{t.tabIndex=e!==t?-1:0})}static get delegatesFocus(){return!0}get el(){return g(this)}static get watchers(){return{open:["openHandler"],disabled:["handleDisabledChange"],flipPlacements:["flipPlacementsHandler"],maxItems:["maxItemsHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],scale:["handlePropsChange"]}}};W.style=K;const l={container:"container",containerNone:"container--none-selection",icon:"dropdown-item-icon",iconEnd:"dropdown-item-icon--end",iconStart:"dropdown-item-icon--start",itemContent:"dropdown-item-content",link:"dropdown-link"},U=":host{position:relative;display:block}.container{text-align:start}.dropdown-title{margin-block-end:-1px;display:block;cursor:default;overflow-wrap:break-word;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);font-weight:var(--calcite-font-weight-bold);color:var(--calcite-color-text-2)}.dropdown-separator{display:block;block-size:1px;background-color:var(--calcite-color-border-3)}:host([scale=s]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .dropdown-title{padding:0.5rem}:host([scale=m]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .dropdown-title{padding:0.75rem}:host([scale=l]){font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .dropdown-title{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}",$=U,N=class{constructor(e){b(this,e),this.calciteInternalDropdownItemChange=s(this,"calciteInternalDropdownItemChange",6),this.updateItems=()=>{Array.from(this.el.querySelectorAll("calcite-dropdown-item")).forEach(t=>t.selectionMode=this.selectionMode)},this.mutationObserver=f("mutation",()=>this.updateItems()),this.groupTitle=void 0,this.scale="m",this.selectionMode="single"}handlePropsChange(){this.updateItems()}connectedCallback(){var e;this.updateItems(),(e=this.mutationObserver)==null||e.observe(this.el,{childList:!0})}componentWillLoad(){this.groupPosition=this.getGroupPosition()}disconnectedCallback(){var e;(e=this.mutationObserver)==null||e.disconnect()}render(){const e=this.groupTitle?n("span",{"aria-hidden":"true",class:"dropdown-title"},this.groupTitle):null,t=this.groupPosition>0?n("div",{class:"dropdown-separator",role:"separator"}):null;return n(w,{key:"f41943751aefdb17d4f5d5bd8778c219cfd01a00","aria-label":this.groupTitle,role:"group"},n("div",{key:"87b78040b93c06081ca8282a785d466ed8fcf334",class:{[l.container]:!0}},t,e,n("slot",{key:"f635a5bdbe439315eba6292a4858cbd8519d23d1"})))}updateActiveItemOnChange(e){this.requestedDropdownGroup=e.detail.requestedDropdownGroup,this.requestedDropdownItem=e.detail.requestedDropdownItem,this.calciteInternalDropdownItemChange.emit({requestedDropdownGroup:this.requestedDropdownGroup,requestedDropdownItem:this.requestedDropdownItem})}getGroupPosition(){return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-dropdown-group"),this.el)}static get delegatesFocus(){return!0}get el(){return g(this)}static get watchers(){return{selectionMode:["handlePropsChange"]}}};N.style=$;const _=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;flex-grow:1;align-items:center;outline-color:transparent}.container{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-color-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);text-align:start}.container a{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-color-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);outline-color:transparent}.dropdown-item-content{flex:1 1 auto;padding-block:0.125rem}.dropdown-item-icon{position:relative;opacity:0;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:scale(0.9)}:host([scale=s]) .container{padding-block:0.25rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .dropdown-item-icon,:host([scale=s]) .dropdown-item-icon--start{padding-inline-end:var(--calcite-spacing-sm)}:host([scale=s]) .dropdown-item-icon--end{padding-inline-start:var(--calcite-spacing-sm)}:host([scale=m]) .container{padding-block:0.5rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .dropdown-item-icon,:host([scale=m]) .dropdown-item-icon--start{padding-inline-end:var(--calcite-spacing-md)}:host([scale=m]) .dropdown-item-icon--end{padding-inline-start:var(--calcite-spacing-md)}:host([scale=l]) .container{padding-block:0.625rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .dropdown-item-icon,:host([scale=l]) .dropdown-item-icon--start{padding-inline-end:var(--calcite-spacing-xl)}:host([scale=l]) .dropdown-item-icon--end{padding-inline-start:var(--calcite-spacing-xl)}:host(:focus){outline:2px solid transparent;outline-offset:2px;outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host(:focus) .container{color:var(--calcite-color-text-1);text-decoration-line:none}:host(:hover:not([disabled])) .container,:host(:active:not([disabled])) .container{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1);text-decoration-line:none}:host(:hover:not([disabled])) .dropdown-link,:host(:active:not([disabled])) .dropdown-link{color:var(--calcite-color-text-1)}:host(:active:not([disabled])) .container{background-color:var(--calcite-color-foreground-3)}:host([selected]) .container:not(.container--none-selection),:host([selected]) .dropdown-link{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}:host([selected]) .container:not(.container--none-selection) calcite-icon,:host([selected]) .dropdown-link calcite-icon{color:var(--calcite-color-brand)}:host(:hover:not([disabled])) .dropdown-item-icon{color:var(--calcite-color-border-1);opacity:1}:host([selected]) .dropdown-item-icon{color:var(--calcite-color-brand);opacity:1}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}`,V=_,j=class{constructor(e){b(this,e),this.calciteDropdownItemSelect=s(this,"calciteDropdownItemSelect",6),this.calciteInternalDropdownItemSelect=s(this,"calciteInternalDropdownItemSelect",6),this.calciteInternalDropdownItemKeyEvent=s(this,"calciteInternalDropdownItemKeyEvent",6),this.calciteInternalDropdownCloseRequest=s(this,"calciteInternalDropdownCloseRequest",6),this.disabled=!1,this.href=void 0,this.iconFlipRtl=void 0,this.iconStart=void 0,this.iconEnd=void 0,this.label=void 0,this.rel=void 0,this.selected=!1,this.target=void 0,this.selectionMode="single",this.scale="m"}async setFocus(){var e;await x(this),(e=this.el)==null||e.focus()}componentWillLoad(){C(this),this.initialize()}componentDidLoad(){S(this)}connectedCallback(){this.initialize()}componentDidRender(){k(this)}render(){const{href:e,selectionMode:t,label:i,iconFlipRtl:o}=this,r=n("calcite-icon",{key:"1ec1c941651dda8f39fa15427592141f04180f3e",class:l.iconStart,flipRtl:o==="start"||o==="both",icon:this.iconStart,scale:m(this.scale)}),a=n("span",{key:"3ab167ed4054ca34b4e13e72b752af6cf25522ae",class:l.itemContent},n("slot",{key:"88cf44809fb48450c66cc8f105bbda008a78157d"})),c=n("calcite-icon",{key:"32fb27182943a032c0037f1f878a95c194d2dff1",class:l.iconEnd,flipRtl:o==="end"||o==="both",icon:this.iconEnd,scale:m(this.scale)}),d=this.iconStart&&this.iconEnd?[r,a,c]:this.iconStart?[r,a]:this.iconEnd?[a,c]:a,O=e?n("a",{"aria-label":i,class:l.link,href:e,ref:H=>this.childLink=H,rel:this.rel,tabIndex:-1,target:this.target},d):d,P=e?null:t==="single"?"menuitemradio":t==="multiple"?"menuitemcheckbox":"menuitem",z=t!=="none"?u(this.selected):null,{disabled:v}=this;return n(w,{key:"beec8e51bf18bdcab1928181828b372cc70bb7ee","aria-checked":z,"aria-label":e?"":i,role:P,tabIndex:v?-1:0},n(E,{key:"5cbbd1074d6c571f4cac3a99e4a2c09bf113db55",disabled:v},n("div",{key:"bff025aeb280c9d0d829e5cf4d94e9392604e607",class:{[l.container]:!0,[l.containerNone]:t==="none"}},t!=="none"?n("calcite-icon",{class:l.icon,icon:t==="multiple"?"check":"bullet-point",scale:m(this.scale)}):null,O)))}onClick(){this.emitRequestedItem()}keyDownHandler(e){switch(e.key){case" ":case"Enter":this.emitRequestedItem(),this.href&&this.childLink.click(),e.preventDefault();break;case"Escape":this.calciteInternalDropdownCloseRequest.emit(),e.preventDefault();break;case"Tab":this.calciteInternalDropdownItemKeyEvent.emit({keyboardEvent:e});break;case"ArrowUp":case"ArrowDown":case"Home":case"End":e.preventDefault(),this.calciteInternalDropdownItemKeyEvent.emit({keyboardEvent:e});break}}updateActiveItemOnChange(e){e.composedPath().includes(this.parentDropdownGroupEl)&&(this.requestedDropdownGroup=e.detail.requestedDropdownGroup,this.requestedDropdownItem=e.detail.requestedDropdownItem,this.determineActiveItem()),e.stopPropagation()}initialize(){this.parentDropdownGroupEl=this.el.closest("calcite-dropdown-group"),this.selectionMode==="none"&&(this.selected=!1)}determineActiveItem(){switch(this.selectionMode){case"multiple":this.el===this.requestedDropdownItem&&(this.selected=!this.selected);break;case"single":this.el===this.requestedDropdownItem?this.selected=!0:this.requestedDropdownGroup===this.parentDropdownGroupEl&&(this.selected=!1);break;case"none":this.selected=!1;break}}emitRequestedItem(){this.calciteDropdownItemSelect.emit(),this.calciteInternalDropdownItemSelect.emit({requestedDropdownItem:this.el,requestedDropdownGroup:this.parentDropdownGroupEl})}get el(){return g(this)}};j.style=V;export{W as calcite_dropdown,N as calcite_dropdown_group,j as calcite_dropdown_item};
//# sourceMappingURL=calcite-dropdown_3.entry-BqzBjVvV.js.map
