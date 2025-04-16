import{g9 as U,fd as k,dy as J,aX as C,I as W,cV as h,dQ as Y,bz as X,V as D,s as H,cj as Q,j as t,m as i,k as T,ez as L,eA as V,ag as j,gE as I,n as G,R as P,t as z,aQ as Z,fl as m,eB as A,eY as B,u as M,eZ as f,$ as K,gF as ee,gG as te}from"./index-CaYX07dN.js";import{S as re}from"./MultiOriginJSONSupport-Bi5uKwj-.js";import{y as ie,u as oe}from"./clientSideDefaults-BaTa1sjT.js";import{v as se,W as ae,z as ne,Y as le,S as pe}from"./wfsUtils-im7OzswT.js";import{e as ue}from"./CustomParametersMixin-Cb_T5l_q.js";import{c as de}from"./FeatureEffectLayer-DUDQwqKz.js";import{c as ye}from"./FeatureReductionLayer-CRRMF-pO.js";import{b as me}from"./OperationalLayer-Da4YsTIo.js";import{p as ce}from"./OrderedLayer-ZURXSBpZ.js";import{j as fe}from"./PortalLayer-Ciik5dRx.js";import{f as he}from"./RefreshableLayer-CkRekPl3.js";import{l as ge}from"./TemporalLayer-BTRMjqwQ.js";import{c as we,p as ve,d as Fe,b as xe,l as be,s as Oe,y as Se}from"./commonProperties-DBW-YxFy.js";import{s as Ie}from"./fieldProperties-QFwbmKex.js";import{n as Re,C as Ce}from"./labelingInfo-Bp9dmvH0.js";import{p as Te}from"./popupUtils-BRhiAAWL.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./capabilities-D6exRNM4.js";import"./geojson-DLc2O03d.js";import"./date-Ctp1FiBW.js";import"./xmlUtils-CtUoQO7q.js";import"./FeatureEffect-CXan94xZ.js";import"./FeatureReductionSelection-BoTNJckb.js";import"./featureLayerUtils-2pagGweI.js";import"./uuid-Cl5lrJ4c.js";import"./MD5-C9MwAd2G.js";import"./OrderByInfo-C5ybC2tZ.js";import"./portalItemUtils-BBW6qNW0.js";import"./TimeInfo-CYanYxnN.js";import"./labelUtils-BSe5K0uY.js";let u=class extends U{constructor(){super(...arguments),this._connection=null,this._workerHandler=null,this.capabilities=ie(!1,!1),this.type="wfs",this.refresh=k(async()=>{await this.load();const e={customParameters:this.layer.customParameters,maxRecordCount:this.layer.maxRecordCount,maxTotalRecordCount:this.layer.maxTotalRecordCount,maxPageCount:this.layer.maxPageCount},{extent:r}=await this._workerHandler.refresh(e);return r&&(this.sourceJSON.extent=r),{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}})}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker({signal:r})),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null,this._workerHandler=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,r={}){const s=await this.queryFeaturesJSON(e,r);return J.fromJSON(s)}async queryFeaturesJSON(e,r={}){return await this.load(r),this._workerHandler.queryFeatures(e?e.toJSON():void 0,r)}async queryFeatureCount(e,r={}){return await this.load(r),this._workerHandler.queryFeatureCount(e?e.toJSON():void 0,r)}async queryObjectIds(e,r={}){return await this.load(r),this._workerHandler.queryObjectIds(e?e.toJSON():void 0,r)}async queryExtent(e,r={}){await this.load(r);const s=await this._workerHandler.queryExtent(e?e.toJSON():void 0,r);return{count:s.count,extent:C.fromJSON(s.extent)}}async querySnapping(e,r={}){return await this.load(r),this._workerHandler.querySnapping(e,r)}async _createLoadOptions(e){var O,S;const{url:r,customParameters:s,name:n,namespaceUri:l,fields:a,geometryType:d,maxRecordCount:y,maxPageCount:g,maxTotalRecordCount:w,swapXY:v}=this.layer,c=this.layer.originOf("spatialReference")==="defaults"?void 0:this.layer.spatialReference;if(!r)throw new W("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await se(r,{customParameters:s,...e}));const $=["fields","geometryType","name","namespaceUri","swapXY"].some(F=>this.layer[F]==null),p=$?await ae(this.wfsCapabilities,n,l,{spatialReference:c,customParameters:s,signal:e==null?void 0:e.signal}):{...ne(a??[]),geometryType:d,name:n,namespaceUri:l,spatialReference:c,swapXY:v},q=le(this.wfsCapabilities.readFeatureTypes(),p.name,p.namespaceUri),_=h.toJSON(p.geometryType),{operations:b}=this.wfsCapabilities,E=b.GetFeature.url,N=b.GetFeature.outputFormat;return{customParameters:s,featureType:q,fields:((O=p.fields)==null?void 0:O.map(F=>F.toJSON()))??[],geometryField:p.geometryField,geometryType:_,getFeatureUrl:E,getFeatureOutputFormat:N,maxRecordCount:y,maxPageCount:g,maxTotalRecordCount:w,objectIdField:p.objectIdField,spatialReference:(S=p.spatialReference)==null?void 0:S.toJSON(),swapXY:!!p.swapXY}}async _startWorker(e){const[r,s]=await Y([this._createLoadOptions(e),X("WFSSourceWorker",{...e,strategy:D("feature-layers-workers")?"dedicated":"local",registryTarget:this})]),n=r.error||s.error||null,l=s.value||null;if(n)throw l&&l.close(),n;const a=r.value;this._connection=s.value,this._workerHandler=this._connection.createInvokeProxy();const d=await this._workerHandler.load(a,e);for(const y of d.warnings)H.getLogger(this.layer).warn("#load()",`${y.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:y});this.sourceJSON={dateFieldsTimeReference:{timeZoneIANA:Q},extent:d.extent,fields:a.fields,geometryType:a.geometryType,objectIdField:a.objectIdField,geometryField:a.geometryField,drawingInfo:oe(a.geometryType),name:a.featureType.title,wfsInfo:{name:a.featureType.name,featureUrl:a.getFeatureUrl,maxFeatures:a.maxRecordCount,swapXY:a.swapXY,supportedSpatialReferences:a.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:a.featureType.namespaceUri}}}};t([i()],u.prototype,"capabilities",void 0),t([i({constructOnly:!0})],u.prototype,"layer",void 0),t([i()],u.prototype,"sourceJSON",void 0),t([i()],u.prototype,"type",void 0),t([i()],u.prototype,"wfsCapabilities",void 0),u=t([T("esri.layers.graphics.sources.WFSSource")],u);var x;const R=Ie();let o=x=class extends ce(ue(ye(de(L(ge(he(V(me(fe(re(A))))))))))){static fromWFSLayerInfo(e){const{customParameters:r,fields:s,geometryField:n,geometryType:l,name:a,namespaceUri:d,objectIdField:y,spatialReference:g,swapXY:w,url:v,wfsCapabilities:c}=e;return new x({customParameters:r,fields:s,geometryField:n,geometryType:l,name:a,namespaceUri:d,objectIdField:y,spatialReference:g,swapXY:w,url:v,wfsCapabilities:c})}constructor(e){super(e),this.copyright=null,this.customParameters=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxRecordCount=3e3,this.maxPageCount=10,this.maxTotalRecordCount=2e5,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new u({layer:this}),this.spatialReference=j.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),I(this.renderer,this.fieldsIndex),G(this.timeInfo,this.fieldsIndex)})),Promise.resolve(this)}get capabilities(){var e;return(e=this.source)==null?void 0:e.capabilities}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,r,s){const n=e.filter(l=>l.name!==pe);this.geometryField&&n.unshift(new P({name:this.geometryField,alias:this.geometryField,type:"geometry"})),z(s,n.map(l=>l.toJSON()),r)}get parsedUrl(){return Z(this.url)}set renderer(e){I(e,this.fieldsIndex),this._set("renderer",e)}get wfsCapabilities(){var e;return(e=this.source)==null?void 0:e.wfsCapabilities}set wfsCapabilities(e){this.source&&(this.source.wfsCapabilities=e)}createPopupTemplate(e){return Te(this,e)}createQuery(){const e=new m({returnGeometry:!0,outFields:["*"],where:this.definitionExpression||"1=1"}),{timeOffset:r,timeExtent:s}=this;return e.timeExtent=r!=null&&s!=null?s.offset(-r.value,r.unit):s||null,e}getFieldDomain(e,r){var s;return(s=this.getField(e))==null?void 0:s.domain}getField(e){var r;return(r=this.fieldsIndex)==null?void 0:r.get(e)}queryFeatures(e,r){return this.load().then(()=>this.source.queryFeatures(m.from(e)||this.createQuery(),r)).then(s=>{if(s!=null&&s.features)for(const n of s.features)n.layer=n.sourceLayer=this;return s})}queryObjectIds(e,r){return this.load().then(()=>this.source.queryObjectIds(m.from(e)||this.createQuery(),r))}queryFeatureCount(e,r){return this.load().then(()=>this.source.queryFeatureCount(m.from(e)||this.createQuery(),r))}queryExtent(e,r){return this.load().then(()=>this.source.queryExtent(m.from(e)||this.createQuery(),r))}async hasDataChanged(){try{const{dataChanged:e,updates:r}=await this.source.refresh();return r!=null&&this.read(r,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};t([i({readOnly:!0})],o.prototype,"capabilities",null),t([i({type:String})],o.prototype,"copyright",void 0),t([i({readOnly:!0})],o.prototype,"createQueryVersion",null),t([i({json:{name:"wfsInfo.customParameters",write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0),ignoreOrigin:!0})}}})],o.prototype,"customParameters",void 0),t([i(B("dateFieldsTimeReference"))],o.prototype,"dateFieldsTimeZone",void 0),t([i({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),t([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),t([i({type:String})],o.prototype,"displayField",void 0),t([i(we)],o.prototype,"elevationInfo",void 0),t([i({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"featureUrl",void 0),t([i({type:[P],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],o.prototype,"fields",void 0),t([M("fields")],o.prototype,"writeFields",null),t([i(R.fieldsIndex)],o.prototype,"fieldsIndex",void 0),t([i({type:C,json:{name:"extent"}})],o.prototype,"fullExtent",void 0),t([i()],o.prototype,"geometryField",void 0),t([i({type:String,json:{read:{source:"layerDefinition.geometryType",reader:h.read},write:{target:"layerDefinition.geometryType",writer:h.write,ignoreOrigin:!0},origins:{service:{read:h.read}}}})],o.prototype,"geometryType",void 0),t([i({type:String})],o.prototype,"id",void 0),t([i(ve)],o.prototype,"labelsVisible",void 0),t([i({type:[Ce],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:Re},write:!0}})],o.prototype,"labelingInfo",void 0),t([i(Fe)],o.prototype,"legendEnabled",void 0),t([i({type:["show","hide"]})],o.prototype,"listMode",void 0),t([i({type:String})],o.prototype,"objectIdField",void 0),t([i({type:["WFS"]})],o.prototype,"operationalLayerType",void 0),t([i({type:f,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"maxRecordCount",void 0),t([i({type:f})],o.prototype,"maxPageCount",void 0),t([i({type:f})],o.prototype,"maxTotalRecordCount",void 0),t([i({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],o.prototype,"mode",void 0),t([i({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"name",void 0),t([i({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"namespaceUri",void 0),t([i(xe)],o.prototype,"opacity",void 0),t([i(R.outFields)],o.prototype,"outFields",void 0),t([i({readOnly:!0})],o.prototype,"parsedUrl",null),t([i(be)],o.prototype,"popupEnabled",void 0),t([i({type:K,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),t([i({types:te,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:ee,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],o.prototype,"renderer",null),t([i(Oe)],o.prototype,"screenSizePerspectiveEnabled",void 0),t([i({readOnly:!0})],o.prototype,"source",void 0),t([i({type:j,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],o.prototype,"spatialReference",void 0),t([i({readOnly:!0,type:[f],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"spatialReferences",void 0),t([i({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"swapXY",void 0),t([i({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],o.prototype,"title",void 0),t([i({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),t([i(Se)],o.prototype,"url",void 0),t([i({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"version",void 0),t([i()],o.prototype,"wfsCapabilities",null),o=x=t([T("esri.layers.WFSLayer")],o);const st=o;export{st as default};
//# sourceMappingURL=WFSLayer-KFqzK9RJ.js.map
