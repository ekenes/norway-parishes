// components/SidePanel/ParishSearchPanel/ParishSelect.jsx
import React from 'react';
import {
    CalciteLabel,
    CalciteCombobox,
    CalciteComboboxItem,
    CalciteComboboxItemGroup
} from "@esri/calcite-components-react";

const ParishSelect = ({
    counties,
    municipalities,
    parishes,
    selectedCounty,
    selectedMunicipality,
    selectedParish,
    onSelect
}) => {
    const handleSelection = (event) => {
        const selected = event.target?.value;
        if (selected === selectedParish) return;

        if (!selected) {
            onSelect(selectedCounty, selectedMunicipality);
            return;
        }

        // Find the county and municipality for the selected parish
        for (const [county, municipalityMap] of Object.entries(parishes)) {
            for (const [municipality, parishList] of Object.entries(municipalityMap)) {
                if (parishList?.includes(selected)) {
                    onSelect(county, municipality, selected);
                    return;
                }
            }
        }
    };

    const renderParishItems = (county, municipality) => {
        if (!parishes[county]?.[municipality]) return null;

        return parishes[county][municipality].map((parish) => (
            <CalciteComboboxItem
                key={`${county}-${municipality}-${parish}`}
                value={parish}
                textLabel={parish}
                selected={selectedParish === parish}
            />
        ));
    };

    return (
        <CalciteLabel>
            Local parish (sokn)
            <CalciteCombobox
                placeholder="Select local parish name"
                selectionMode="single"
                id="localparish-combobox"
                onCalciteComboboxChange={handleSelection}
            >
                {(selectedCounty && selectedMunicipality) ? (
                    <CalciteComboboxItemGroup
                        key={selectedCounty}
                        label={selectedCounty}
                    >
                        <CalciteComboboxItemGroup
                            key={`${selectedCounty}-${selectedMunicipality}`}
                            label={selectedMunicipality}
                        >
                            {renderParishItems(selectedCounty, selectedMunicipality)}
                        </CalciteComboboxItemGroup>
                    </CalciteComboboxItemGroup>
                ) : selectedCounty ? (
                    <CalciteComboboxItemGroup
                        key={selectedCounty}
                        label={selectedCounty}
                    >
                        {municipalities[selectedCounty]?.map((municipality) => (
                            <CalciteComboboxItemGroup
                                key={`${selectedCounty}-${municipality}`}
                                label={municipality}
                            >
                                {renderParishItems(selectedCounty, municipality)}
                            </CalciteComboboxItemGroup>
                        ))}
                    </CalciteComboboxItemGroup>
                ) : (
                    counties.map((county) => (
                        <CalciteComboboxItemGroup
                            key={county}
                            label={county}
                        >
                            {municipalities[county]?.map((municipality) => (
                                <CalciteComboboxItemGroup
                                    key={`${county}-${municipality}`}
                                    label={municipality}
                                >
                                    {renderParishItems(county, municipality)}
                                </CalciteComboboxItemGroup>
                            ))}
                        </CalciteComboboxItemGroup>
                    ))
                )}
            </CalciteCombobox>
        </CalciteLabel>
    );
};

export default React.memo(ParishSelect);