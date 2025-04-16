import{r as h,c as b,h as l,g as f}from"./index-Club40b3.js";import{u,I as m}from"./interactive-1a42577a-BTyGj1zl.js";import{c as g}from"./observers-9c166451-B21XW3NK.js";import{d as p,c as v}from"./sortableComponent-d3c6a806-Ct4hlH-1.js";import{b as y}from"./dom-b6dedd88-B4jHZlw4.js";import"./guid-9c230b6a-BxSjQh8J.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const d={container:"container",containerHorizontal:"container--horizontal",containerVertical:"container--vertical"},O=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{display:flex;flex:1 1 auto}.container--vertical{flex-direction:column}.container--horizontal{flex-direction:row}:host([hidden]){display:none}[hidden]{display:none}",S=O,C=class{constructor(e){h(this,e),this.calciteListOrderChange=b(this,"calciteListOrderChange",6),this.items=[],this.mutationObserver=g("mutation",()=>{this.setUpSorting()}),this.dragEnabled=!0,this.canPull=void 0,this.canPut=void 0,this.dragSelector=void 0,this.group=void 0,this.handleSelector="calcite-handle",this.layout="vertical",this.disabled=!1,this.loading=!1}connectedCallback(){this.setUpSorting(),this.beginObserving()}disconnectedCallback(){p(this),this.endObserving()}componentDidRender(){u(this)}calciteHandleNudgeNextHandler(e){this.handleNudgeEvent(e)}onGlobalDragStart(){this.endObserving()}onGlobalDragEnd(){this.beginObserving()}onDragEnd(){}onDragStart(){}onDragSort(){this.items=Array.from(this.el.children),this.calciteListOrderChange.emit()}handleNudgeEvent(e){const{direction:r}=e.detail,t=e.composedPath().find(a=>a.matches(this.handleSelector)),i=this.items.find(a=>a.contains(t)||e.composedPath().includes(a)),c=this.items.length-1,n=this.items.indexOf(i);let o=!1,s;r==="up"?n===0?o=!0:s=n-1:n===c?s=0:n===c-1?o=!0:s=n+2,this.endObserving(),o?i.parentElement.appendChild(i):i.parentElement.insertBefore(i,this.items[s]),this.items=Array.from(this.el.children),this.beginObserving(),requestAnimationFrame(()=>y(t)),"selected"in t&&(t.selected=!0)}setUpSorting(){this.items=Array.from(this.el.children),v(this)}beginObserving(){var e;(e=this.mutationObserver)==null||e.observe(this.el,{childList:!0,subtree:!0})}endObserving(){var e;(e=this.mutationObserver)==null||e.disconnect()}render(){const{disabled:e,layout:r}=this,t=r==="horizontal"||!1;return l(m,{key:"ac305a674d12738f9f68dbc8bad42569098a0cb3",disabled:e},l("div",{key:"dca1ee832c59b93f546404512d703f843da58ccb",class:{[d.container]:!0,[d.containerVertical]:!t,[d.containerHorizontal]:t}},l("slot",{key:"92f9e08889d4cf08891571aa5ab233392a9f0fd9"})))}get el(){return f(this)}};C.style=S;export{C as calcite_sortable_list};
//# sourceMappingURL=calcite-sortable-list.entry-eoZ45mPz.js.map
