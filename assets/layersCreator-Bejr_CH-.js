import{S as I,ae as M}from"./index-CaYX07dN.js";import{L as A,e as b}from"./portalLayers-KzhaAXp6.js";import{b as L}from"./fetchService-DdJr6zgP.js";import{t as w}from"./styleUtils-B_cT8GaQ.js";import"./associatedFeatureServiceUtils-B1_Qm-ak.js";import"./portalItemUtils-BBW6qNW0.js";function v(e){return u(e,"notes")}function h(e){return u(e,"markup")}function C(e){return u(e,"route")}function u(e,r){return!(!e.layerType||e.layerType!=="ArcGISFeatureLayer")&&e.featureCollectionType===r}async function F(e,r,a){if(!r)return;const t=r.map(y=>x(y,a)),i=await Promise.allSettled(t);for(const y of i)y.status==="rejected"||y.value&&e.add(y.value)}const W={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISSceneServiceLayer:"SceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BuildingSceneLayer:"BuildingSceneLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",IntegratedMesh3DTilesLayer:"IntegratedMesh3DTilesLayer",IntegratedMeshLayer:"IntegratedMeshLayer",KML:"KMLLayer",LineOfSightLayer:"LineOfSightLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",PointCloudLayer:"PointCloudLayer",RasterDataLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",ViewshedLayer:"ViewshedLayer",Voxel:"VoxelLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},O={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},V={ArcGISFeatureLayer:"FeatureLayer"},k={ArcGISImageServiceLayer:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",DefaultTileLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WMS:"UnsupportedLayer",WebTiledLayer:"WebTileLayer"},g={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoJSON:"GeoJSONLayer",GeoRSS:"GeoRSSLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",KnowledgeGraphLayer:"KnowledgeGraphLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},T={ArcGISFeatureLayer:"FeatureLayer",SubtypeGroupTable:"UnsupportedLayer"},m={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",DefaultTileLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},B={...g,LinkChartLayer:"LinkChartLayer"},D={...T},U={...m};async function x(e,r){return E(await R(e,r),e,r)}async function E(e,r,a){const t=new e;return t.read(r,a.context),t.type==="group"&&(r.layerType==="GroupLayer"?await N(t,r,a):S(r)?J(t,r,a.context):G(r)&&await P(t,r,a.context)),await w(t,a.context),t}async function R(e,r){var c,o;const a=r.context,t=K(a);let i=e.layerType||e.type;!i&&(r!=null&&r.defaultLayerType)&&(i=r.defaultLayerType);const y=t[i];let n=y?L[y]:L.UnknownLayer;if(S(e)){const s=a==null?void 0:a.portal;if(e.itemId){const l=new I({id:e.itemId,portal:s});await l.load();const p=(await A(l,new b)).className||"UnknownLayer";n=L[p]}}else i==="ArcGISFeatureLayer"?v(e)||h(e)?n=L.MapNotesLayer:C(e)?n=L.RouteLayer:G(e)&&(n=L.GroupLayer):(c=e.wmtsInfo)!=null&&c.url&&e.wmtsInfo.layerIdentifier?n=L.WMTSLayer:i==="WFS"&&((o=e.wfsInfo)==null?void 0:o.version)!=="2.0.0"&&(n=L.UnsupportedLayer);return n()}function G(e){var r,a;return e.layerType!=="ArcGISFeatureLayer"||S(e)?!1:(((a=(r=e.featureCollection)==null?void 0:r.layers)==null?void 0:a.length)??0)>1}function S(e){return e.type==="Feature Collection"}function K(e){let r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=k;break;case"ground":r=O;break;case"tables":r=V;break;default:r=W}break;case"link-chart":switch(e.layerContainerType){case"basemap":r=U;break;case"tables":r=D;break;default:r=B}break;default:switch(e.layerContainerType){case"basemap":r=m;break;case"tables":r=T;break;default:r=g}}return r}async function N(e,r,a){const t=new M,i=F(t,Array.isArray(r.layers)?r.layers:[],a);try{try{if(await i,e.type==="group")return e.layers.addMany(t),e}catch(y){e.destroy();for(const n of t)n.destroy();throw y}}catch(y){throw y}}function J(e,r,a){r.itemId&&(e.portalItem=new I({id:r.itemId,portal:a==null?void 0:a.portal}),e.when(()=>{var i,y;const t=n=>{var s,l;const c=n.layerId;f(n,e,r,c,a);const o=(l=(s=r.featureCollection)==null?void 0:s.layers)==null?void 0:l[c];o&&n.read(o,a)};(i=e.layers)==null||i.forEach(t),(y=e.tables)==null||y.forEach(t)}))}async function P(e,r,a){var o;const t=L.FeatureLayer,i=await t(),y=r.featureCollection,n=y==null?void 0:y.showLegend,c=(o=y==null?void 0:y.layers)==null?void 0:o.map((s,l)=>{const p=new i;p.read(s,a);const d={...a,ignoreDefaults:!0};return f(p,e,r,l,d),n!=null&&p.read({showLegend:n},d),p});e.layers.addMany(c??[])}function f(e,r,a,t,i){var y;e.read({id:`${r.id}-sublayer-${t}`,visibility:((y=a.visibleLayers)==null?void 0:y.includes(t))??!0},i)}export{N as populateGroupLayer,F as populateOperationalLayers};
//# sourceMappingURL=layersCreator-Bejr_CH-.js.map
