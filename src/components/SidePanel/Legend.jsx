import React from 'react';
import "@arcgis/map-components/dist/components/arcgis-legend";
import { ArcgisLegend } from "@arcgis/map-components-react";
import {
    CalcitePanel,
} from "@esri/calcite-components-react";

const Legend = (props) => {
    const { referenceElement } = props;

    return (<CalcitePanel
        heading="Legend"
        id="legend"
        data-panel-id="legend"
        width-scale="l"
    >
        <ArcgisLegend referenceElement={referenceElement} />
    </CalcitePanel>)
}

export default Legend;