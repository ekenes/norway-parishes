import { useEffect, useRef, useState } from "react";
import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-zoom";
import "@arcgis/map-components/dist/components/arcgis-home";
import "@arcgis/map-components/dist/components/arcgis-coordinate-conversion";
import "@arcgis/map-components/dist/components/arcgis-expand";
import "@arcgis/map-components/dist/components/arcgis-features";
import SidePanel from "../components/SidePanel";

import "@arcgis/map-components/dist/components/arcgis-legend";

const Home = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const mapId = "arcgis-map";

  useEffect(() => {
    const mapEl = mapRef.current;
    if (!mapEl) return;

    const handleViewReady = () => {
      setMap(mapEl);
    };

    mapEl.addEventListener("arcgisViewReadyChange", handleViewReady);

    if (mapEl.ready) {
      setMap(mapEl);
    }

    return () => {
      mapEl.removeEventListener("arcgisViewReadyChange", handleViewReady);
    };
  }, []);

  return (
    <calcite-shell>
      <arcgis-map
        id={mapId}
        item-id="e52ddcfbc95847f780d299d452815502"
        ref={mapRef}
      >
        <arcgis-home slot="top-left"></arcgis-home>
        <arcgis-zoom slot="top-left"></arcgis-zoom>
        <arcgis-expand slot="bottom-left">
          <arcgis-coordinate-conversion
            mode="live"
            orientation="auto"
            hide-capture-button
          ></arcgis-coordinate-conversion>
        </arcgis-expand>
      </arcgis-map>
      <SidePanel mapElement={map} referenceElement={`#${mapId}`} />
    </calcite-shell>
  );
};

export default Home;
