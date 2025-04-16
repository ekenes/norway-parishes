import{r as d,c as r,h as n,g as h}from"./index-Club40b3.js";import{s as p,h as l}from"./dom-b6dedd88-B4jHZlw4.js";import{u as m,I as f}from"./interactive-1a42577a-BTyGj1zl.js";import{a as u,s as g,c as b}from"./loadable-13e9ffb2-DZsIufML.js";import"./guid-9c230b6a-BxSjQh8J.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const I=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}.container{display:flex;inline-size:100%;flex-wrap:wrap;gap:0.5rem}::slotted(calcite-chip){flex:none}:host([scale=s]) .container{gap:0.25rem}:host([scale=l]) .container{gap:0.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}",y=I,C=class{constructor(e){d(this,e),this.calciteChipGroupSelect=r(this,"calciteChipGroupSelect",6),this.items=[],this.updateItems=t=>{var a,i,c;const s=(a=this.slotRefEl)==null?void 0:a.assignedElements({flatten:!0}).filter(o=>o==null?void 0:o.matches("calcite-chip"));this.items=t?p(t):s,!(((i=this.items)==null?void 0:i.length)<1)&&((c=this.items)==null||c.forEach(o=>{o.interactive=!0,o.scale=this.scale,o.selectionMode=this.selectionMode,o.parentChipGroup=this.el}),this.setSelectedItems(!1))},this.updateSelectedItems=()=>{var t;this.selectedItems=(t=this.items)==null?void 0:t.filter(s=>s.selected)},this.setSelectedItems=(t,s)=>{var a;s&&((a=this.items)==null||a.forEach(i=>{const c=s===i;switch(this.selectionMode){case"multiple":c&&(i.selected=!i.selected);break;case"single":i.selected=c?!i.selected:!1;break;case"single-persist":i.selected=!!c;break}})),this.updateSelectedItems(),t&&this.calciteChipGroupSelect.emit()},this.disabled=!1,this.label=void 0,this.scale="m",this.selectionMode="none",this.selectedItems=[]}onSelectionModeChange(){this.updateItems()}componentDidRender(){m(this)}componentDidLoad(){u(this)}async componentWillLoad(){g(this)}calciteInternalChipKeyEventListener(e){var t;if(e.composedPath().includes(this.el)){const s=(t=this.items)==null?void 0:t.filter(a=>!a.disabled);switch(e.detail.key){case"ArrowRight":l(s,e.detail.target,"next");break;case"ArrowLeft":l(s,e.detail.target,"previous");break;case"Home":l(s,e.detail.target,"first");break;case"End":l(s,e.detail.target,"last");break}}e.stopPropagation()}calciteChipCloseListener(e){var s,a,i,c;const t=e.target;(s=this.items)!=null&&s.includes(t)&&(((a=this.items)==null?void 0:a.indexOf(t))>0?l(this.items,t,"previous"):((i=this.items)==null?void 0:i.indexOf(t))===0?l(this.items,t,"next"):l(this.items,t,"first")),this.items=(c=this.items)==null?void 0:c.filter(o=>o!==t),e.stopPropagation()}calciteChipSelectListener(e){e.composedPath().includes(this.el)&&this.setSelectedItems(!0,e.target),e.stopPropagation()}calciteInternalChipSelectListener(e){e.composedPath().includes(this.el)&&this.setSelectedItems(!1,e.target),e.stopPropagation()}calciteInternalSyncSelectedChips(e){e.composedPath().includes(this.el)&&(this.updateSelectedItems(),this.selectionMode==="single"&&this.selectedItems.length>1&&this.setSelectedItems(!1,e.target)),e.stopPropagation()}async setFocus(){var e;if(await b(this),!this.disabled)return(e=this.selectedItems[0]||this.items[0])==null?void 0:e.setFocus()}render(){const e=this.selectionMode==="none"||this.selectionMode==="multiple"?"group":"radiogroup",{disabled:t}=this;return n(f,{key:"0db5548f1c2854898191b4d6eb8140cae2faf3d8",disabled:t},n("div",{key:"60fc92fea20478ee6fde23d807f17f7f472c1f5a","aria-label":this.label,class:"container",role:e},n("slot",{key:"d43fcf04af0063cd4d00f46e6dd61347eafccb3b",onSlotchange:this.updateItems,ref:s=>this.slotRefEl=s})))}get el(){return h(this)}static get watchers(){return{selectionMode:["onSelectionModeChange"]}}};C.style=y;export{C as calcite_chip_group};
//# sourceMappingURL=calcite-chip-group.entry-Bi8sbzNr.js.map
