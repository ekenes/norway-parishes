import esri = __esri;
import WebMap = require("esri/WebMap");
import MapView = require("esri/views/MapView");
import { createSearchWidget } from "./search";

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

  const search = createSearchWidget(view);
  view.ui.add(search, "top-right");

})();