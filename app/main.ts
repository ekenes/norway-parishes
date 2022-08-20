import esri = __esri;
import WebMap = require("esri/WebMap");
import MapView = require("esri/views/MapView");
import { createSearchWidget } from "./search";
import Legend = require("esri/widgets/Legend");
import Expand = require("esri/widgets/Expand");
import LayerList = require("esri/widgets/LayerList");
import GraphicsLayer = require("esri/layers/GraphicsLayer");
import { createSelect } from "./select";

( async () => {

  const view = new MapView({
    map: new WebMap({
      portalItem: {
        id: "454a0303bffb487abf2d6c2c36ff4f0f"
      }
    }),
    container: "viewDiv",
    constraints: {
      snapToZoom: false
    }
  });

  await view.when();
  view.map.layers.add(new GraphicsLayer({
    title: "search-results",
    effect: "bloom(1.5, 0.5px, 0.1) drop-shadow(3px, 3px, 3px, black)"
  }));

  const search = createSearchWidget(view);
  view.ui.add(new Expand({ content: search, view }), "top-right");

  // BEGIN_
  // END_

  view.ui.add(new Expand({ view, content: new Legend({ view }) }), "bottom-left");
  view.ui.add(new Expand({ view, content: new LayerList({ view }) }), "bottom-left");

})();