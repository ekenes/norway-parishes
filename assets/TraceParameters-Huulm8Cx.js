import{P as g,j as t,m as r,k as l,O as m,df as f,ag as v,u as j}from"./index-Club40b3.js";import{o as p}from"./NetworkElement-DfYN2Y9z.js";import{s as b}from"./WebMap-BueuDxS9.js";import"./ColorBackground-C9MmleQD.js";import"./CollectionFlattener-CDWmfFqW.js";import"./basemapUtils-DcCkyfUy.js";import"./TablesMixin-EU-_VM0Q.js";import"./MultiOriginJSONSupport-BEThRq27.js";import"./portalItemUtils-BFPvV2jZ.js";import"./interfaces-CL2NbQte.js";import"./TimeInfo-DkMYd3l4.js";import"./jsonContext-BI9PU4gF.js";import"./project-DeFuvCVW.js";import"./FeatureLayer-BT8Bna_d.js";import"./commonProperties-C7qVnWA0.js";import"./FeatureLayerBase-Brgke90g.js";import"./HeightModelInfo-CyeP0S36.js";import"./featureLayerUtils-DGP_qgKj.js";import"./uuid-Cl5lrJ4c.js";import"./LayerFloorInfo-CON6ZVex.js";import"./Relationship-C52zRLrQ.js";import"./serviceCapabilitiesUtils-CiTafVMC.js";import"./editsZScale-Dm-aRfhz.js";import"./APIKeyMixin-CygWNKme.js";import"./ArcGISService-Nvh9xVH1.js";import"./CustomParametersMixin-CWS7gQZS.js";import"./EditBusLayer-CuqbZRUQ.js";import"./FeatureEffectLayer-C8jzoxly.js";import"./FeatureEffect-22EIS-1y.js";import"./FeatureReductionLayer-Cd7ZHusx.js";import"./FeatureReductionSelection-kviuNazU.js";import"./labelingInfo-BYGFQ--y.js";import"./labelUtils-9UeHmwQ0.js";import"./MD5-C9MwAd2G.js";import"./OperationalLayer-Bg1GjXra.js";import"./OrderedLayer-BPW7XlQy.js";import"./OrderByInfo-BdSameQq.js";import"./PortalLayer-CB5zFuuX.js";import"./RefreshableLayer-8wKJynh4.js";import"./TemporalLayer-alZzuFqB.js";import"./FeatureTemplate-4pdVRtmp.js";import"./FeatureType-5k9utpDt.js";import"./fieldProperties-BzPjeRbS.js";import"./versionUtils-CA5wZBTi.js";import"./styleUtils-DYnR3WAv.js";import"./popupUtils-UvwxK4SE.js";import"./AlphaCutoff-UcccL64p.js";const a=new g({startingPoint:"starting-point",barrier:"barrier"});let i=class extends m{constructor(e){super(e),this.globalId=null,this.isFilterBarrier=!1,this.percentAlong=null,this.terminalId=null,this.type=null}};t([r({type:String,json:{write:!0}})],i.prototype,"globalId",void 0),t([r({type:Boolean,json:{write:!0}})],i.prototype,"isFilterBarrier",void 0),t([r({type:Number,json:{write:!0}})],i.prototype,"percentAlong",void 0),t([r({type:Number,json:{write:!0}})],i.prototype,"terminalId",void 0),t([r({type:a.apiValues,json:{type:a.jsonValues,read:{reader:a.read,source:"traceLocationType"},write:{writer:a.write,target:"traceLocationType"}}})],i.prototype,"type",void 0),i=t([l("esri.rest.networks.support.TraceLocation")],i);const h=i;var n;let o=n=class extends m{static from(e){return f(n,e)}constructor(e){super(e),this.namedTraceConfigurationGlobalId=null,this.gdbVersion=null,this.traceLocations=[],this.moment=null,this.outSpatialReference=null,this.traceConfiguration=null,this.resultTypes=null,this.traceType=null}writeOutSR(e,s,u){if(e!=null){const{wkid:d,latestWkid:y,wkt:c,wkt2:w}=e;s[u]=JSON.stringify({wkid:d??void 0,latestWkid:y??void 0,wkt:c??void 0,wkt2:w??void 0})}}};t([r({type:String,json:{read:{source:"traceConfigurationGlobalId"},write:{target:"traceConfigurationGlobalId"}}})],o.prototype,"namedTraceConfigurationGlobalId",void 0),t([r({type:String,json:{write:!0}})],o.prototype,"gdbVersion",void 0),t([r({type:[h],json:{write:!0}})],o.prototype,"traceLocations",void 0),t([r({type:Date,json:{type:Number,write:{writer:(e,s)=>{s.moment=e?e.getTime():null}}}})],o.prototype,"moment",void 0),t([r({type:v,json:{write:{allowNull:!0,target:"outSR"}}})],o.prototype,"outSpatialReference",void 0),t([j("outSpatialReference")],o.prototype,"writeOutSR",null),t([r({type:b,json:{write:!0}})],o.prototype,"traceConfiguration",void 0),t([r({type:[Object],json:{write:!0}})],o.prototype,"resultTypes",void 0),t([r({type:p.apiValues,json:{type:p.jsonValues,read:p.read,write:p.write}})],o.prototype,"traceType",void 0),o=n=t([l("esri.rest.networks.support.TraceParameters")],o);const wt=o;export{wt as default};
//# sourceMappingURL=TraceParameters-Huulm8Cx.js.map
