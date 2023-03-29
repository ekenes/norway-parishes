var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define(["require", "exports", "esri/WebMap", "esri/views/MapView", "./search", "esri/widgets/Legend", "esri/widgets/Expand", "esri/widgets/LayerList", "esri/layers/GraphicsLayer", "esri/layers/TileLayer", "esri/layers/GroupLayer"], function (require, exports, WebMap, MapView, search_1, Legend, Expand, LayerList, GraphicsLayer, TileLayer, GroupLayer) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () { return __awaiter(void 0, void 0, void 0, function () {
        var view, worldImagery, focusedImagery, groupLayer, farmSearch, parishSearch;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    view = new MapView({
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
                    return [4 /*yield*/, view.when()];
                case 1:
                    _a.sent();
                    worldImagery = new TileLayer({
                        title: "world-imagery",
                        portalItem: {
                            id: "10df2279f9684e4a9f6a7f08febac2a9"
                        }
                    });
                    focusedImagery = new TileLayer({
                        portalItem: {
                            id: "10df2279f9684e4a9f6a7f08febac2a9"
                        }
                    });
                    groupLayer = new GroupLayer({
                        title: "group-layer-results",
                        layers: [
                            focusedImagery,
                            new GraphicsLayer({
                                blendMode: "destination-in",
                                title: "parish-search-results"
                            }),
                        ],
                        opacity: 0
                    });
                    // new UniqueValueRenderer({
                    //   fiel
                    // })
                    view.map.layers.unshift(groupLayer);
                    view.map.layers.unshift(worldImagery);
                    farmSearch = search_1.createFarmSearchWidget(view);
                    view.ui.add(new Expand({ content: farmSearch, view: view }), "top-right");
                    parishSearch = search_1.createParishSearchWidget(view);
                    view.ui.add(new Expand({ content: parishSearch, view: view }), "top-right");
                    // BEGIN_
                    // END_
                    view.ui.add(new Expand({ view: view, content: new Legend({ view: view }) }), "bottom-left");
                    view.ui.add(new Expand({ view: view, content: new LayerList({ view: view }) }), "bottom-left");
                    return [2 /*return*/];
            }
        });
    }); })();
});
//# sourceMappingURL=main.js.map