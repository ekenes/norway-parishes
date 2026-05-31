import "@arcgis/map-components/dist/components/arcgis-legend";

const Legend = (props) => {
  const { referenceElement } = props;

  return (
    <calcite-panel
      heading="Legend"
      id="legend"
      data-panel-id="legend"
      width-scale="l"
    >
      <arcgis-legend referenceElement={referenceElement} />
    </calcite-panel>
  );
};

export default Legend;
