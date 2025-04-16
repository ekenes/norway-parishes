import React from 'react';
import "@arcgis/map-components/dist/components/arcgis-basemap-gallery";
import { ArcgisBasemapGallery } from "@arcgis/map-components-react";
import Basemap from "@arcgis/core/Basemap";
import {
    CalcitePanel,
} from "@esri/calcite-components-react";

const BasemapGallery = (props) => {
    const { referenceElement } = props;
    const baseMapSources = [
        Basemap.fromId("topo-vector"),
        Basemap.fromId("satellite"),
        Basemap.fromId("hybrid"),
        Basemap.fromId("streets-navigation-vector")
    ]

    return (<CalcitePanel
        heading="BasemapGallery"
        id="basemap"
        data-panel-id="basemap"
        width-scale="l"
    >
        <ArcgisBasemapGallery referenceElement={referenceElement} source={baseMapSources} />
    </CalcitePanel>)
}

export default BasemapGallery;