import "@arcgis/map-components/dist/components/arcgis-basemap-gallery";
import Basemap from "@arcgis/core/Basemap";

const BasemapGallery = (props) => {
  const { referenceElement } = props;
  const baseMapSources = [
    Basemap.fromId("topo-vector"),
    Basemap.fromId("satellite"),
    Basemap.fromId("hybrid"),
    Basemap.fromId("streets-navigation-vector"),
  ];

  return (
    <calcite-panel
      heading="BasemapGallery"
      id="basemap"
      data-panel-id="basemap"
      width-scale="l"
    >
      <arcgis-basemap-gallery
        referenceElement={referenceElement}
        source={baseMapSources}
      />
    </calcite-panel>
  );
};

export default BasemapGallery;
