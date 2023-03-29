import esri = __esri;
import WebMap = require("esri/WebMap");
import MapView = require("esri/views/MapView");
import { createFarmSearchWidget, createParishSearchWidget } from "./search";
import Legend = require("esri/widgets/Legend");
import Expand = require("esri/widgets/Expand");
import LayerList = require("esri/widgets/LayerList");
import GraphicsLayer = require("esri/layers/GraphicsLayer");
import { createSelect } from "./select";
import TileLayer = require("esri/layers/TileLayer");
import GroupLayer = require("esri/layers/GroupLayer");
import UniqueValueInfo = require("esri/renderers/support/UniqueValueInfo");
import { UniqueValueRenderer } from "esri/rasterRenderers";

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
    },
    highlightOptions: {
      fillOpacity: 0,
      haloOpacity: 0
    }
  });

  await view.when();

  const worldImagery = new TileLayer({
    title: "world-imagery",
    portalItem: {
      id: "10df2279f9684e4a9f6a7f08febac2a9"
    }
  });

  const focusedImagery = new TileLayer({
    portalItem: {
      id: "10df2279f9684e4a9f6a7f08febac2a9"
    }
  });

  const groupLayer = new GroupLayer({
    title: "group-layer-results",
    layers: [
      focusedImagery,
      new GraphicsLayer({
        blendMode: "destination-in",
        title: "parish-search-results"
      }),
      // new GraphicsLayer({
      //   blendMode: "destination-in",
      //   title: "county-search-results"
      // })
    ],
    opacity: 0
  });

  // new UniqueValueRenderer({
  //   fiel
  // })


  view.map.layers.unshift(groupLayer);
  view.map.layers.unshift(worldImagery);

  const farmSearch = createFarmSearchWidget(view);
  view.ui.add(new Expand({ content: farmSearch, view }), "top-right");

  const parishSearch = createParishSearchWidget(view);
  view.ui.add(new Expand({ content: parishSearch, view }), "top-right");

  // BEGIN_
  // END_

  view.ui.add(new Expand({ view, content: new Legend({ view }) }), "bottom-left");
  view.ui.add(new Expand({ view, content: new LayerList({ view }) }), "bottom-left");

})();