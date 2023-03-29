import esri = __esri;
import SearchSource = require("esri/widgets/Search/SearchSource");
import request = require("esri/request");
import Graphic = require("esri/Graphic");
import { Point } from "esri/geometry";
import Search = require("esri/widgets/Search");
import MapView = require("esri/views/MapView");
import { SimpleFillSymbol, SimpleMarkerSymbol } from "esri/symbols";
import LayerSearchSource = require("esri/widgets/Search/LayerSearchSource");

// rest APIs - https://ws.geonorge.no/stedsnavn/v1
// const ExampleUrl = "https://ws.geonorge.no/stedsnavn/v1/navn?sok=ekenes*&treffPerSide=15&side=1";
const url = "https://ws.geonorge.no/stedsnavn/v1/navn";

const spatialReference = {
  wkid: 4326
};

export function createFarmSearchWidget(view: MapView){

  const searchResultsLayer = view.map.layers.find( layer => layer.title === "parish-search-results") as esri.GraphicsLayer;

  const customSearchSource = new SearchSource({
    placeholder: "example: Ekenes",

    getSuggestions: (params) => {

      return request(url, {
        query: {
          sok: `${params.suggestTerm}*`,
        },
        responseType: "json"
      }).then((results) => {

        return results.data.navn.map((result: any) => {
          const name = result.skrivemåte;
          const type = result.navneobjekttype;
          const municipality = result.kommuner[0].kommunenavn;
          const county = result.fylker[0].fylkesnavn;
          const knr = result.kommuner[0].kommunenummer;
          const fnr = result.fylker[0].fylkesnummer;

          const location = result.representasjonspunkt;
          const lat = location.nord;
          const long = location.øst;

          return {
            key: name,
            location,
            sok: name,
            text: `${name} (${type}), ${municipality}, ${county}`,
            type,
            sourceIndex: params.sourceIndex,
            lat,
            long,
            knr,
            fnr
          };
        });
      });
    },

    // Provide a getResults method to find results from the suggestions
    getResults: (params) => {
      const { sok, knr, fnr } = params.suggestResult;
      return request(url, {
        query: { sok, knr, fnr },
        responseType: "json"
      }).then((results) => {
        // Parse the results of your custom search
        const searchResults = results.data.navn.map((result: any) => {

          const name = result.skrivemåte;
          const type = result.navneobjekttype;
          const muni = result.kommuner[0].kommunenavn;
          const county = result.fylker[0].fylkesnavn;

          const label = `${name} (${type}), ${muni}, ${county}`;

          const location = result.representasjonspunkt;
          const lat = location.nord;
          const long = location.øst;

          const attributes = {
            name,
            type,
            muni,
            county,
            lat,
            long
          };

          const graphic = new Graphic({
            geometry: new Point({
              x: long,
              y: lat,
              spatialReference
            }),
            attributes
          });
          // Return a Search Result
          const searchResult = {
            feature: graphic,
            name: label
          };
          return searchResult;
        });
        // Return an array of Search Results
        return searchResults;
      });
    }
  });

  const searchWidget = new Search({
    view: view,
    allPlaceholder: "Search farm or parish",
    includeDefaultSources: false,
    sources: [ customSearchSource ],
    locationEnabled: false
  });

  searchWidget.on("search-complete", (event) => {
    console.log("search-complete");
    console.log(event);
  });
  searchWidget.on("search-start", (event) => {
    console.log("search-start");
    console.log(event);
  });
  searchWidget.on("select-result", (event) => {
    console.log("select-result");
    console.log(event);
  });
  searchWidget.on("suggest-complete", (event) => {
    console.log("suggest-complete");
    console.log(event);
    searchResultsLayer.removeAll();

    const graphics = event.results[0].results.map((result: any) => {
      return new Graphic({
        geometry: new Point({
          x: result.long,
          y: result.lat,
          spatialReference
        }),
        attributes: {
          name: result.key,
          type: result.type,
          municipality: result.municipality,
          county: result.county
        },
        symbol: new SimpleMarkerSymbol({
          style: "diamond",
          color: "pink",
          size: 18,
          outline: {
            width: 1,
            color: "brown"
          }
        })
      });
    });
    searchResultsLayer.addMany(graphics);
  });
  searchWidget.on("suggest-start", (event) => {
    console.log("suggest-start");
    console.log(event);
  });

  return searchWidget;
};

export function createParishSearchWidget(view: MapView){

  const worldImageryLayer = view.map.layers.find( layer => layer.title === "world-imagery") as esri.TileLayer;
  const groupLayer = view.map.layers.find( layer => layer.title === "group-layer-results") as esri.GroupLayer;

  const searchResultsLayer = groupLayer.layers.find( layer => layer.title === "parish-search-results") as esri.GraphicsLayer;

  const parishLayer = view.map.layers.find( layer => layer.title === "Parishes (sokn)") as esri.FeatureLayer;
  const prestegjeldLayer = view.map.layers.find( layer => layer.title === "Prestegjeld") as esri.FeatureLayer;
  const countiesLayer = view.map.layers.find( layer => layer.title === "Counties (fylke)") as esri.FeatureLayer;

  const searchWidget = new Search({
    view,
    allPlaceholder: "Search parish or county",
    includeDefaultSources: false,
    resultGraphicEnabled: false,
    sources: [
      new LayerSearchSource({
        autoNavigate: true,
        layer: parishLayer,
        searchFields: ["Par_NAME"],
        popupEnabled: false,
        resultGraphicEnabled: false,
        suggestionTemplate: "{Par_NAME} ({BEGIN_}-{END_})",
        searchTemplate: "{Par_NAME} ({BEGIN_}-{END_})",
        displayField: "Par_NAME",
        exactMatch: false,
        outFields: ["Par_NAME", "BEGIN_", "END_"],
        name: "Parishes (sokn)",
        placeholder: "Dypvåg"
      }),
      new LayerSearchSource({
        autoNavigate: true,
        layer: countiesLayer,
        searchFields: ["COUNTY"],
        suggestionTemplate: "{COUNTY} ({BEGIN_}-{END_})",
        exactMatch: false,
        popupEnabled: false,
        resultGraphicEnabled: false,
        outFields: ["COUNTY", "BEGIN_", "END_"],
        placeholder: "example: Casey",
        name: "Counties (fylke)",
      })
     ],
    locationEnabled: false
  });

  searchWidget.on("search-complete", (event) => {
    console.log("search-complete");
    console.log(event);
  });
  searchWidget.on("search-start", (event) => {
    console.log("search-start");
    console.log(event);
  });
  searchWidget.on("select-result", (event) => {
    console.log("select-result");
    console.log(event);

    const feature = event.result.feature;
    feature.symbol = new SimpleFillSymbol({
      color: "rgba(255, 255, 255, 1)",
      outline: null
    });
    searchResultsLayer.graphics.add(feature);

    worldImageryLayer.effect = "blur(8px) brightness(1.2) grayscale(0.8)";
    groupLayer.effect = "brightness(1.7) drop-shadow(10px, 10px, 6px, black)";
    groupLayer.opacity = 1;
  });
  searchWidget.on("suggest-complete", (event) => {
    console.log("suggest-complete");
    console.log(event);
  });
  searchWidget.on("suggest-start", (event) => {
    console.log("suggest-start");
    console.log(event);
  });

  return searchWidget;
};