import React, { useState } from 'react';
import {
    CalciteShellPanel,
    CalciteAction,
    CalciteActionBar
} from "@esri/calcite-components-react";
import { useMapData } from '../../hooks/useMapData';
import { useParishSearch } from '../../hooks/useParishSearch';
import ParishSearch from './ParishSearch';
import Legend from './Legend';
import BasemapGallery from './BasemapGallery';

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
            case 'parish-search':
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
            case 'legend':
                return <Legend referenceElement={referenceElement} />;
            case 'basemap':
                return <BasemapGallery referenceElement={referenceElement} />;
            default:
                return null;
        }
    };

    return (
        <CalciteShellPanel slot="panel-end" position="end" widthScale="l" displayMode="dock" collapsed={isPanelCollapsed} >
            <CalciteActionBar slot="action-bar" expanded="true">
                <CalciteAction
                    data-action-id="parish-search"
                    text="Find a parish"
                    icon="search"
                    active={activePanel === 'parish-search'}
                    onClick={handleActionClick}
                />
                <CalciteAction
                    data-action-id="legend"
                    text="Legend"
                    icon="legend"
                    active={activePanel === 'legend'}
                    onClick={handleActionClick}
                />
                <CalciteAction
                    data-action-id="basemap"
                    text="Base Maps"
                    icon="basemap"
                    active={activePanel === 'basemap'}
                    onClick={handleActionClick}
                />
                <calcite-tooltip slot="expand-tooltip"> Toggle Action Bar </calcite-tooltip>
            </CalciteActionBar>

            {getPanelContent()}
        </CalciteShellPanel>
    );
};

export default SidePanel;