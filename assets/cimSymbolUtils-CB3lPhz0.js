import{aY as s,aZ as f,a_ as b,a$ as k,b0 as M,b1 as u}from"./index-Club40b3.js";function S(e){const o=[];return n(f(e),o),o.length?new s(u(o[0])):null}function n(e,o){var l;if(!e)return;let t;t=e.type==="CIMTextSymbol"?e.symbol:e;const a=e.type==="CIMPolygonSymbol";if(t!=null&&t.symbolLayers){for(const r of t.symbolLayers)if(!(r.colorLocked||a&&(b(r)||k(r)&&r.markerPlacement&&M(r.markerPlacement))))switch(r.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":r.tintColor&&m(o,r.tintColor);break;case"CIMVectorMarker":(l=r.markerGraphics)==null||l.forEach(c=>{n(c.symbol,o)});break;case"CIMSolidStroke":case"CIMSolidFill":m(o,r.color);break;case"CIMHatchFill":n(r.lineSymbol,o)}}}function m(e,o){for(const t of e)if(t.join(".")===o.join("."))return;e.push(o)}function P(e,o,t){o instanceof s||(o=new s(o));const a=f(e);a&&i(a,o)}function i(e,o,t){var r;if(!e)return;let a;a=e.type==="CIMTextSymbol"?e.symbol:e;const l=(a==null?void 0:a.type)==="CIMPolygonSymbol";if(a!=null&&a.symbolLayers)for(const c of a.symbolLayers){if(c.colorLocked||l&&(b(c)||k(c)&&c.markerPlacement&&M(c.markerPlacement)))continue;const y=o.toArray();switch(c.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":c.tintColor=y;break;case"CIMVectorMarker":(r=c.markerGraphics)==null||r.forEach(C=>{i(C.symbol,o)});break;case"CIMSolidStroke":case"CIMSolidFill":c.color=y;break;case"CIMHatchFill":i(c.lineSymbol,o)}}}export{S as C,P as I};
//# sourceMappingURL=cimSymbolUtils-CB3lPhz0.js.map
