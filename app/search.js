define(["require", "exports", "esri/widgets/Search/SearchSource", "esri/request", "esri/Graphic", "esri/geometry", "esri/widgets/Search", "esri/symbols", "esri/widgets/Search/LayerSearchSource"], function (require, exports, SearchSource, request, Graphic, geometry_1, Search, symbols_1, LayerSearchSource) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // rest APIs - https://ws.geonorge.no/stedsnavn/v1
    // const ExampleUrl = "https://ws.geonorge.no/stedsnavn/v1/navn?sok=ekenes*&treffPerSide=15&side=1";
    var url = "https://ws.geonorge.no/stedsnavn/v1/navn";
    var spatialReference = {
        wkid: 4326
    };
    function createFarmSearchWidget(view) {
        var searchResultsLayer = view.map.layers.find(function (layer) { return layer.title === "parish-search-results"; });
        var customSearchSource = new SearchSource({
            placeholder: "example: Ekenes",
            getSuggestions: function (params) {
                return request(url, {
                    query: {
                        sok: params.suggestTerm + "*",
                    },
                    responseType: "json"
                }).then(function (results) {
                    return results.data.navn.map(function (result) {
                        var name = result.skrivemåte;
                        var type = result.navneobjekttype;
                        var municipality = result.kommuner[0].kommunenavn;
                        var county = result.fylker[0].fylkesnavn;
                        var knr = result.kommuner[0].kommunenummer;
                        var fnr = result.fylker[0].fylkesnummer;
                        var location = result.representasjonspunkt;
                        var lat = location.nord;
                        var long = location.øst;
                        return {
                            key: name,
                            location: location,
                            sok: name,
                            text: name + " (" + type + "), " + municipality + ", " + county,
                            type: type,
                            sourceIndex: params.sourceIndex,
                            lat: lat,
                            long: long,
                            knr: knr,
                            fnr: fnr
                        };
                    });
                });
            },
            // Provide a getResults method to find results from the suggestions
            getResults: function (params) {
                var _a = params.suggestResult, sok = _a.sok, knr = _a.knr, fnr = _a.fnr;
                return request(url, {
                    query: { sok: sok, knr: knr, fnr: fnr },
                    responseType: "json"
                }).then(function (results) {
                    // Parse the results of your custom search
                    var searchResults = results.data.navn.map(function (result) {
                        var name = result.skrivemåte;
                        var type = result.navneobjekttype;
                        var muni = result.kommuner[0].kommunenavn;
                        var county = result.fylker[0].fylkesnavn;
                        var label = name + " (" + type + "), " + muni + ", " + county;
                        var location = result.representasjonspunkt;
                        var lat = location.nord;
                        var long = location.øst;
                        var attributes = {
                            name: name,
                            type: type,
                            muni: muni,
                            county: county,
                            lat: lat,
                            long: long
                        };
                        var graphic = new Graphic({
                            geometry: new geometry_1.Point({
                                x: long,
                                y: lat,
                                spatialReference: spatialReference
                            }),
                            attributes: attributes
                        });
                        // Return a Search Result
                        var searchResult = {
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
        var searchWidget = new Search({
            view: view,
            allPlaceholder: "Search farm or parish",
            includeDefaultSources: false,
            sources: [customSearchSource],
            locationEnabled: false
        });
        searchWidget.on("search-complete", function (event) {
            console.log("search-complete");
            console.log(event);
        });
        searchWidget.on("search-start", function (event) {
            console.log("search-start");
            console.log(event);
        });
        searchWidget.on("select-result", function (event) {
            console.log("select-result");
            console.log(event);
        });
        searchWidget.on("suggest-complete", function (event) {
            console.log("suggest-complete");
            console.log(event);
            searchResultsLayer.removeAll();
            var graphics = event.results[0].results.map(function (result) {
                return new Graphic({
                    geometry: new geometry_1.Point({
                        x: result.long,
                        y: result.lat,
                        spatialReference: spatialReference
                    }),
                    attributes: {
                        name: result.key,
                        type: result.type,
                        municipality: result.municipality,
                        county: result.county
                    },
                    symbol: new symbols_1.SimpleMarkerSymbol({
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
        searchWidget.on("suggest-start", function (event) {
            console.log("suggest-start");
            console.log(event);
        });
        return searchWidget;
    }
    exports.createFarmSearchWidget = createFarmSearchWidget;
    ;
    function createParishSearchWidget(view) {
        var searchResultsLayer = view.map.layers.find(function (layer) { return layer.title === "county-search-results"; });
        var parishLayer = view.map.layers.find(function (layer) { return layer.title === "Parishes (sokn)"; });
        var prestegjeldLayer = view.map.layers.find(function (layer) { return layer.title === "Prestegjeld"; });
        var countiesLayer = view.map.layers.find(function (layer) { return layer.title === "Counties (fylke)"; });
        var searchWidget = new Search({
            view: view,
            allPlaceholder: "Search parish or county",
            includeDefaultSources: false,
            sources: [
                new LayerSearchSource({
                    autoNavigate: true,
                    layer: parishLayer,
                    searchFields: ["Par_NAME"],
                    popupEnabled: true,
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
                    outFields: ["COUNTY", "BEGIN_", "END_"],
                    placeholder: "example: Casey",
                    name: "Counties (fylke)",
                })
            ],
            locationEnabled: false
        });
        searchWidget.on("search-complete", function (event) {
            console.log("search-complete");
            console.log(event);
            searchResultsLayer.removeAll();
            var graphics = event.results[0].results.map(function (result) {
                return new Graphic({
                    geometry: new geometry_1.Point({
                        x: result.long,
                        y: result.lat,
                        spatialReference: spatialReference
                    }),
                    attributes: {
                        name: result.key,
                        type: result.type,
                        municipality: result.municipality,
                        county: result.county
                    },
                    symbol: new symbols_1.SimpleMarkerSymbol({
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
        searchWidget.on("search-start", function (event) {
            console.log("search-start");
            console.log(event);
        });
        searchWidget.on("select-result", function (event) {
            console.log("select-result");
            console.log(event);
        });
        searchWidget.on("suggest-complete", function (event) {
            console.log("suggest-complete");
            console.log(event);
            searchResultsLayer.removeAll();
            // const graphics = event.results[0].results.map((result: any) => {
            //   return new Graphic({
            //     geometry: new Point({
            //       x: result.long,
            //       y: result.lat,
            //       spatialReference
            //     }),
            //     attributes: {
            //       name: result.key,
            //       type: result.type,
            //       municipality: result.municipality,
            //       county: result.county
            //     },
            //     symbol: new SimpleMarkerSymbol({
            //       style: "diamond",
            //       color: "pink",
            //       size: 18,
            //       outline: {
            //         width: 1,
            //         color: "brown"
            //       }
            //     })
            //   });
            // });
            // searchResultsLayer.addMany(graphics);
        });
        searchWidget.on("suggest-start", function (event) {
            console.log("suggest-start");
            console.log(event);
        });
        return searchWidget;
    }
    exports.createParishSearchWidget = createParishSearchWidget;
    ;
});
//# sourceMappingURL=search.js.map