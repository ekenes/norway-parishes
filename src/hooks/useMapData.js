import { useState, useEffect, useCallback } from 'react';
import uniqueValues from "@arcgis/core/smartMapping/statistics/uniqueValues";

export const useMapData = (mapElement) => {
    const [data, setData] = useState({
        counties: [],
        municipalities: {},
        parishes: {},
        loading: true,
        error: null
    });

    const fetchUniqueValues = useCallback(async (layer, field, whereClause = null) => {
        try {
            const params = { layer, field };
            if (whereClause) {
                params.sqlWhere = whereClause;
            }

            const { uniqueValueInfos } = await uniqueValues(params);
            return uniqueValueInfos
                .map(info => info.value)
                .filter(Boolean)
                .sort();
        } catch (error) {
            console.error(`Error fetching unique values for ${field}:`, error);
            return [];
        }
    }, []);

    const initializeData = useCallback(async () => {
        if (!mapElement?.ready || !mapElement.map) return;

        try {
            setData(prev => ({ ...prev, loading: true, error: null }));
            const parishLayer = mapElement.map.layers.find(
                layer => layer.title === "Parishes (sokn)"
            );

            if (!parishLayer) throw new Error('Parish layer not found');

            const counties = await fetchUniqueValues(parishLayer, "COUNTY");
            const municipalityByCounty = {};
            const parishByMunicipality = {};

            await Promise.all(counties.map(async (county) => {
                const municipalities = await fetchUniqueValues(
                    parishLayer,
                    "MUNICIPALITY",
                    `COUNTY = '${county.replace(/'/g, "''")}'`
                );

                municipalityByCounty[county] = municipalities;
                parishByMunicipality[county] = {};

                await Promise.all(municipalities.map(async (municipality) => {
                    const parishes = await fetchUniqueValues(
                        parishLayer,
                        "PAR_Name",
                        `COUNTY = '${county.replace(/'/g, "''")}' AND MUNICIPALITY = '${municipality.replace(/'/g, "''")}'`
                    );
                    parishByMunicipality[county][municipality] = parishes;
                }));
            }));

            setData({
                counties,
                municipalities: municipalityByCounty,
                parishes: parishByMunicipality,
                loading: false,
                error: null
            });
        } catch (error) {
            console.error('Error initializing map data:', error);
            setData(prev => ({
                ...prev,
                loading: false,
                error: 'Failed to load map data'
            }));
        }
    }, [mapElement, fetchUniqueValues]);

    useEffect(() => {
        initializeData();
    }, [initializeData]);

    return data;
};