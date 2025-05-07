import React, { useState } from 'react';
import {
    CalciteShellPanel,
    CalciteAction,
    CalciteActionBar,
    CalciteActionGroup
} from "@esri/calcite-components-react";
import { useMapData } from '../../hooks/useMapData';
import { useParishSearch } from '../../hooks/useParishSearch';
import ParishSearch from './ParishSearch';
import Legend from './Legend';
import BasemapGallery from './BasemapGallery';
import ContactUs from './ContactUs';

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
            case 'contact-us':
                return <ContactUs referenceElement={referenceElement} />;
            default:
                return null;
        }
    };

    return (
        <CalciteShellPanel slot="panel-end" position="end" widthScale="l" displayMode="dock" collapsed={isPanelCollapsed}>
            <CalciteActionBar
                slot="action-bar"
                expanded="true"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                }}
            >
                {/* Top action group */}
                <CalciteActionGroup style={{ flexShrink: 0 }}>
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
                </CalciteActionGroup>

                {/* Flexible spacer */}
                <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minHeight: '20px' }}></div>

                {/* Bottom action group */}
                <CalciteActionGroup style={{ flexShrink: 0, marginTop: 'auto' }}>
                    <CalciteAction
                        data-action-id="contact-us"
                        text="Contact Us"
                        icon="speech-bubble"
                        active={activePanel === 'contact-us'}
                        onClick={handleActionClick}
                    />
                </CalciteActionGroup>

                <calcite-tooltip slot="expand-tooltip">Toggle Action Bar</calcite-tooltip>
            </CalciteActionBar>

            {getPanelContent()}
        </CalciteShellPanel>
    );
};

export default SidePanel;