import { useRef, useState } from "react";
import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-zoom";
import "@arcgis/map-components/dist/components/arcgis-home";
import "@arcgis/map-components/dist/components/arcgis-features";
import SidePanel from "../components/SidePanel";

import "@arcgis/map-components/dist/components/arcgis-legend";

const Home = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const mapId = "arcgis-map";

  return (
    <calcite-shell>
      <arcgis-map
        id={mapId}
        item-id="e52ddcfbc95847f780d299d452815502"
        ref={mapRef}
        onArcgisViewReadyChange={(e) => setMap(e.target)}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <arcgis-home position="top-left" />
          <arcgis-zoom position="top-left" />
        </div>
      </arcgis-map>
      <SidePanel mapElement={map} referenceElement={`#${mapId}`} />
    </calcite-shell>
  );
};

export default Home;
