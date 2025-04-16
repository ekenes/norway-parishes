import{q as k,n as m,o as w}from"./dom-b6dedd88-CE23o9Fg.js";import{c as y}from"./component-5f0a8be8-6CIDVndn.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const h="calciteInternalLabelClick",E="calciteInternalLabelConnected",f="calciteInternalLabelDisconnected",L="calcite-label",c=new WeakMap,d=new WeakMap,o=new WeakMap,b=new WeakMap,s=new Set,M=e=>{const{id:t}=e,l=t&&k(e,{selector:`${L}[for="${t}"]`});if(l)return l;const a=m(e,L);return!a||D(a,e)?null:a};function D(e,t){let l;const a="custom-element-ancestor-check",r=n=>{n.stopImmediatePropagation();const i=n.composedPath();l=i.slice(i.indexOf(t),i.indexOf(e))};return e.addEventListener(a,r,{once:!0}),t.dispatchEvent(new CustomEvent(a,{composed:!0,bubbles:!0})),e.removeEventListener(a,r),l.filter(n=>n!==t&&n!==e).filter(n=>{var i;return(i=n.tagName)==null?void 0:i.includes("-")}).length>0}function v(e){if(!e)return;const t=M(e.el);if(d.has(t)&&t===e.labelEl||!t&&s.has(e))return;const l=x.bind(e);if(t){e.labelEl=t;const a=c.get(t)||[];a.push(e),c.set(t,a.sort(g)),d.has(e.labelEl)||(d.set(e.labelEl,C),e.labelEl.addEventListener(h,C)),s.delete(e),document.removeEventListener(E,o.get(e)),b.set(e,l),document.addEventListener(f,l)}else s.has(e)||(l(),document.removeEventListener(f,b.get(e)))}function B(e){if(!e||(s.delete(e),document.removeEventListener(E,o.get(e)),document.removeEventListener(f,b.get(e)),o.delete(e),b.delete(e),!e.labelEl))return;const t=c.get(e.labelEl);t.length===1&&(e.labelEl.removeEventListener(h,d.get(e.labelEl)),d.delete(e.labelEl)),c.set(e.labelEl,t.filter(l=>l!==e).sort(g)),e.labelEl=null}function g(e,t){return w(e.el,t.el)?-1:1}function W(e){var t,l;return e.label||((l=(t=e.labelEl)==null?void 0:t.textContent)==null?void 0:l.trim())||""}function C(e){const t=e.detail.sourceEvent.target,l=c.get(this),a=l.find(n=>n.el===t);if(l.includes(a))return;const u=l[0];u.disabled||u.onLabelClick(e)}function O(){s.has(this)&&v(this)}function x(){s.add(this);const e=o.get(this)||O.bind(this);o.set(this,e),document.addEventListener(E,e)}async function q(e){var a;if(await y(e),c.has(e))return;const l=(a=e.ownerDocument)==null?void 0:a.getElementById(e.for);l&&requestAnimationFrame(()=>{for(const r of s)if(r.el===l){v(r);break}})}export{q as a,f as b,v as c,B as d,W as g,E as l};
//# sourceMappingURL=label-043ae25a-BueQNT0g.js.map
