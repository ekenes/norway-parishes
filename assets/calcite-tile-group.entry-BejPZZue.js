import{r as o,c as n,h as c,g as r}from"./index-CaYX07dN.js";import{u as d,I as h}from"./interactive-1a42577a-X0QwTOR8.js";import{c as p}from"./observers-9c166451-CsKjvMAd.js";import{h as l}from"./dom-b6dedd88-CWlTYAyV.js";import"./guid-9c230b6a-BxSjQh8J.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const m={container:"container"},u=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{box-sizing:border-box;display:inline-block}:host ::slotted(calcite-tile){margin-block-end:var(--calcite-spacing-px);margin-inline-end:var(--calcite-spacing-px)}.container{display:grid;grid-auto-rows:minmax(auto, 1fr)}:host([scale=s]) .container{grid-template-columns:repeat(auto-fit, minmax(100px, 1fr))}:host([scale=m]) .container{grid-template-columns:repeat(auto-fit, minmax(140px, 1fr))}:host([scale=l]) .container{grid-template-columns:repeat(auto-fit, minmax(160px, 1fr))}:host([layout=vertical]) .container{display:flex;flex-direction:column}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}",f=u,b=class{constructor(e){o(this,e),this.calciteTileGroupSelect=n(this,"calciteTileGroupSelect",6),this.items=[],this.getSlottedTiles=()=>{var i;return(i=this.slotEl)==null?void 0:i.assignedElements({flatten:!0}).filter(t=>t==null?void 0:t.matches("calcite-tile"))},this.mutationObserver=p("mutation",()=>this.updateTiles()),this.selectItem=i=>{var t;i&&((t=this.items)==null||t.forEach(s=>{const a=i===s;switch(this.selectionMode){case"multiple":a&&(s.selected=!s.selected);break;case"single":s.selected=a&&!s.selected;break;case"single-persist":s.selected=!!a;break}}),this.updateSelectedItems(),this.calciteTileGroupSelect.emit())},this.setSlotEl=i=>{this.slotEl=i},this.updateSelectedItems=()=>{var t,s;const i=(t=this.items)==null?void 0:t.filter(a=>a.selected);(this.selectionMode==="single"||this.selectionMode==="single-persist")&&(i==null?void 0:i.length)>1?(this.selectedItems=[i.pop()],(s=this.items)==null||s.forEach(a=>{this.selectedItems.indexOf(a)===-1&&(a.selected=!1)})):this.selectedItems=i??[]},this.updateTiles=()=>{var i;this.items=this.getSlottedTiles(),(i=this.items)==null||i.forEach(t=>{t.alignment=this.alignment,t.interactive=!0,t.layout=this.layout,t.scale=this.scale,t.selectionAppearance=this.selectionAppearance,t.selectionMode=this.selectionMode}),this.updateSelectedItems()},this.alignment="start",this.disabled=!1,this.label=void 0,this.layout="horizontal",this.scale="m",this.selectedItems=[],this.selectionAppearance="icon",this.selectionMode="none"}scaleWatcher(){this.updateTiles()}handleSelectionModeOrAppearanceChange(){this.updateTiles()}connectedCallback(){var e;(e=this.mutationObserver)==null||e.observe(this.el,{childList:!0}),this.updateTiles()}componentDidRender(){d(this)}disconnectedCallback(){var e;(e=this.mutationObserver)==null||e.disconnect()}calciteInternalTileKeyEventListener(e){var i;if(e.composedPath().includes(this.el)){e.preventDefault(),e.stopPropagation();const t=(i=this.items)==null?void 0:i.filter(s=>!s.disabled);switch(e.detail.key){case"ArrowDown":case"ArrowRight":l(t,e.detail.target,"next");break;case"ArrowUp":case"ArrowLeft":l(t,e.detail.target,"previous");break;case"Home":l(t,e.detail.target,"first");break;case"End":l(t,e.detail.target,"last");break}}}calciteTileSelectHandler(e){e.composedPath().includes(this.el)&&this.selectItem(e.target)}render(){const e=this.selectionMode==="none"||this.selectionMode==="multiple"?"group":"radiogroup";return c(h,{key:"b6652c98d563b78b3eda1dfffb61efdbbfbbae58",disabled:this.disabled},c("div",{key:"e708dc17cf003fd7799f3f510f2dd76bb236a418","aria-label":this.label,class:m.container,role:e},c("slot",{key:"e3fa46a38e975d2c45371fc9b5c1a89d271143e3",onSlotchange:this.updateTiles,ref:this.setSlotEl})))}get el(){return r(this)}static get watchers(){return{scale:["scaleWatcher"],selectionMode:["handleSelectionModeOrAppearanceChange"],selectionAppearance:["handleSelectionModeOrAppearanceChange"]}}};b.style=f;export{b as calcite_tile_group};
//# sourceMappingURL=calcite-tile-group.entry-BejPZZue.js.map
