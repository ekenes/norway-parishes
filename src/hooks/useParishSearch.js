import { useState, useCallback, useRef, useEffect } from 'react';
import { HighlightManager } from '../utils/HighlightManager';

export const useParishSearch = (mapElement) => {
    const [selection, setSelection] = useState({
        county: '',
        municipality: '',
        parish: ''
    });

    const [searchText, setSearchText] = useState('');

    const lastSelection = useRef({
        county: '',
        municipality: '',
        parish: ''
    });

    const highlightManagerRef = useRef(null);



    const zoomToFeature = useCallback(async (whereClause) => {
        if (!mapElement?.map) return;

        try {
            const targetLayer = mapElement.map.layers.find(
                layer => layer.title === 'Parishes (sokn)'
            );

            if (!targetLayer) return;

            const extentResult = await targetLayer.queryExtent({ where: whereClause });
            if (extentResult?.extent) {
                // Highlight the feature
                if (highlightManagerRef.current) {
                    await highlightManagerRef.current.highlightFeature(targetLayer, whereClause);
                }
                await mapElement.view?.goTo(extentResult.extent);
            }
        } catch (error) {
            console.error('Error zooming to feature:', error);
        }
    }, [mapElement]);

    const shouldZoom = useCallback((newSelection) => {
        return JSON.stringify(newSelection) !== JSON.stringify(lastSelection.current);
    }, []);

    const handleComboBoxSelect = useCallback(async (county = null, municipality = null, parish = null) => {

        const newSelection = {
            county: county || '',
            municipality: municipality || '',
            parish: parish || ''
        };
        if (!shouldZoom(newSelection)) return;


        setSelection(newSelection);
        lastSelection.current = newSelection;

        if (parish && county && municipality) {
            const whereClause = `COUNTY = '${county.replace(/'/g, "''")}' AND MUNICIPALITY = '${municipality.replace(/'/g, "''")}' AND Par_NAME = '${parish.replace(/'/g, "''")}'`;
            await zoomToFeature(whereClause);
            setSearchText(parish + ', ' + municipality + ', ' + county);
        }
        else if (municipality && county) {
            const whereClause = `COUNTY = '${county.replace(/'/g, "''")}' AND MUNICIPALITY = '${municipality.replace(/'/g, "''")}'`;
            await zoomToFeature(whereClause);
            setSearchText(municipality + ', ' + county);
        }
        else if (county) {
            const whereClause = `COUNTY = '${county.replace(/'/g, "''")}'`;
            await zoomToFeature(whereClause);
            setSearchText(county);
        }
        else {
            handleSearchClear();
        }
    }, [zoomToFeature, shouldZoom]);


    const handleLocationSelect = useCallback((location) => {
        const { county, municipality, parish } = location;
        handleComboBoxSelect(county, municipality, parish);
    }, [handleComboBoxSelect]);

    useEffect(() => {
        if (mapElement?.view && !highlightManagerRef.current) {
            highlightManagerRef.current = new HighlightManager(mapElement.view, handleLocationSelect);
        }

        return () => {
            if (highlightManagerRef.current) {
                highlightManagerRef.current.destroy();
                highlightManagerRef.current = null;
            }
        };
    }, [mapElement?.view, handleLocationSelect]);

    const queryParishLayer = useCallback(async (geometry) => {
        if (!mapElement?.map) return null;

        const parishLayer = mapElement.map.layers.find(
            layer => layer.title === 'Parishes (sokn)'
        );

        if (!parishLayer) return null;

        try {
            const query = parishLayer.createQuery();
            query.geometry = geometry;
            query.spatialRelationship = "intersects";
            query.outFields = ["COUNTY", "MUNICIPALITY", "Par_NAME"];
            query.returnGeometry = false;

            const result = await parishLayer.queryFeatures(query);
            return result.features?.[0]?.attributes;
        } catch (error) {
            console.error('Error querying parish layer:', error);
            return null;
        }
    }, [mapElement]);

    const handleSearchResult = useCallback(async (event) => {
        try {
            const result = event.detail.result;
            if (!result?.feature?.geometry) return;

            if (result.name) {
                setSearchText(result.name);
            }

            const attributes = await queryParishLayer(result.feature.geometry);
            if (!attributes) return;

            const {
                COUNTY: county,
                MUNICIPALITY: municipality,
                Par_NAME: parish
            } = attributes;

            const searchName = result.name?.toLowerCase() || '';
            let newSelection = { ...selection };

            if (county?.toLowerCase() === searchName) {
                newSelection = {
                    county,
                    municipality: '',
                    parish: ''
                };
            } else if (municipality?.toLowerCase() === searchName) {
                newSelection = {
                    county,
                    municipality,
                    parish: ''
                };
            } else if (parish?.toLowerCase() === searchName) {
                newSelection = {
                    county,
                    municipality,
                    parish
                };
            } else {
                newSelection = {
                    county: county || '',
                    municipality: municipality || '',
                    parish: parish || ''
                };
            }

            if (shouldZoom(newSelection)) {
                setSelection(newSelection);
                lastSelection.current = newSelection;

                if (highlightManagerRef.current) {
                    await highlightManagerRef.current.highlightSearchResult(result);
                }
            }
        } catch (error) {
            console.error('Search result processing error:', error);
        }
    }, [queryParishLayer, selection, shouldZoom]);

    const handleSearchClear = () => {
        const newSelection = {
            county: '',
            municipality: '',
            parish: ''
        };
        setSelection(newSelection);
        lastSelection.current = newSelection;
        setSearchText('');
        if (highlightManagerRef.current) {
            highlightManagerRef.current.clearHighlight();
        }
    }
    return {
        selection,
        searchText,
        handlers: {
            onComboBoxSelect: handleComboBoxSelect,
            onSearchResult: handleSearchResult,
            onSearchClear: handleSearchClear
        }
    };
};