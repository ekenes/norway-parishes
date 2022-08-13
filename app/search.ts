import SearchSource = require("esri/widgets/Search/SearchSource");
import request = require("esri/request");
import Graphic = require("esri/Graphic");
import { Point } from "esri/geometry";
import Search = require("esri/widgets/Search");
import MapView = require("esri/views/MapView");

// rest APIs - https://ws.geonorge.no/stedsnavn/v1
// const ExampleUrl = "https://ws.geonorge.no/stedsnavn/v1/navn?sok=ekenes*&treffPerSide=15&side=1";
const url = "https://ws.geonorge.no/stedsnavn/v1/navn";

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
        const muni = result.kommuner[0].kommunenavn;
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
          text: `${name} (${type}), ${muni}, ${county}`,
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
            spatialReference: {
              wkid: 4326
            }
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

export function createSearchWidget(view: MapView){

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
  });
  searchWidget.on("suggest-start", (event) => {
    console.log("suggest-start");
    console.log(event);
  });

  return searchWidget;
};