import { useState } from "react";
import { useMapData } from "../../hooks/useMapData";
import { useParishSearch } from "../../hooks/useParishSearch";
import ParishSearch from "./ParishSearch";
import Legend from "./Legend";
import BasemapGallery from "./BasemapGallery";
import ContactUs from "./ContactUs";

const SidePanel = (props) => {
  const { mapElement, referenceElement } = props;
  const [isPanelCollapsed, setIsPanelCollapsed] = useState(true);
  const [activePanel, setActivePanel] = useState(null);

  const mapData = useMapData(mapElement);
  const searchState = useParishSearch(mapElement);

  const handleActionClick = (event) => {
    const nextPanel = event.currentTarget.dataset.actionId;
    if (!nextPanel) return;

    if (activePanel === nextPanel) {
      setIsPanelCollapsed(true);
      setActivePanel(null);
    } else {
      setIsPanelCollapsed(false);
      setActivePanel(nextPanel);
    }
  };

  const getPanelContent = () => {
    switch (activePanel) {
      case "parish-search":
        return (
          <ParishSearch
            counties={mapData.counties}
            municipalities={mapData.municipalities}
            parishes={mapData.parishes}
            loading={mapData.loading}
            error={mapData.error}
            selectedCounty={searchState.selection.county}
            selectedMunicipality={searchState.selection.municipality}
            selectedParish={searchState.selection.parish}
            onComboBoxSelect={searchState.handlers.onComboBoxSelect}
            onSearchResult={searchState.handlers.onSearchResult}
            onSearchClear={searchState.handlers.onSearchClear}
            searchText={searchState.searchText}
            referenceElement={referenceElement}
          />
        );
      case "legend":
        return <Legend referenceElement={referenceElement} />;
      case "basemap":
        return <BasemapGallery referenceElement={referenceElement} />;
      case "contact-us":
        return <ContactUs referenceElement={referenceElement} />;
      default:
        return null;
    }
  };

  return (
    <calcite-shell-panel
      slot="panel-end"
      width-scale="l"
      display-mode="dock"
      collapsed={isPanelCollapsed}
    >
      <calcite-action-bar
        slot="action-bar"
        expanded
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        {/* Top action group */}
        <calcite-action-group style={{ flexShrink: 0 }}>
          <calcite-action
            data-action-id="parish-search"
            text="Find a parish"
            text-enabled
            icon="search"
            active={activePanel === "parish-search"}
            onClick={handleActionClick}
          />
          <calcite-action
            data-action-id="legend"
            text="Legend"
            text-enabled
            icon="legend"
            active={activePanel === "legend"}
            onClick={handleActionClick}
          />
          <calcite-action
            data-action-id="basemap"
            text="Base Maps"
            text-enabled
            icon="basemap"
            active={activePanel === "basemap"}
            onClick={handleActionClick}
          />
        </calcite-action-group>

        {/* Flexible spacer */}
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            minHeight: "20px",
          }}
        ></div>

        {/* Bottom action group */}
        <calcite-action-group style={{ flexShrink: 0, marginTop: "auto" }}>
          <calcite-action
            data-action-id="contact-us"
            text="Contact Us"
            text-enabled
            icon="speech-bubble"
            active={activePanel === "contact-us"}
            onClick={handleActionClick}
          />
        </calcite-action-group>

        <calcite-tooltip slot="expand-tooltip">
          Toggle Action Bar
        </calcite-tooltip>
      </calcite-action-bar>

      {getPanelContent()}
    </calcite-shell-panel>
  );
};

export default SidePanel;
