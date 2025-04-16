// components/SidePanel/ParishSearchPanel/MunicipalitySelect.jsx
import React from 'react';
import {
    CalciteLabel,
    CalciteCombobox,
    CalciteComboboxItem,
    CalciteComboboxItemGroup
} from "@esri/calcite-components-react";

const MunicipalitySelect = ({
    counties,
    municipalities,
    selectedCounty,
    selectedMunicipality,
    onSelect
}) => {
    const handleSelection = (event) => {
        const selected = event.target?.value;
        if (selected === selectedMunicipality) return;

        if (!selected) {
            onSelect(selectedCounty);
            return;
        }

        // Find the county for the selected municipality
        for (const [county, municipalityList] of Object.entries(municipalities)) {
            if (municipalityList?.includes(selected)) {
                onSelect(county, selected);
                return;
            }
        }
    };

    const renderMunicipalityItems = (county) => {
        if (!municipalities[county]) return null;

        return municipalities[county].map((municipality) => (
            <CalciteComboboxItem
                key={`${county}-${municipality}`}
                value={municipality}
                textLabel={municipality}
                selected={selectedMunicipality === municipality}
            />
        ));
    };

    return (
        <CalciteLabel>
            Municipality
            <CalciteCombobox
                placeholder="Select municipality"
                selectionMode="single"
                id="municipality-combobox"
                onCalciteComboboxChange={handleSelection}
            >
                {selectedCounty ? (
                    <CalciteComboboxItemGroup
                        key={selectedCounty}
                        label={selectedCounty}
                    >
                        {renderMunicipalityItems(selectedCounty)}
                    </CalciteComboboxItemGroup>
                ) : (
                    counties.map(county => (
                        <CalciteComboboxItemGroup
                            key={county}
                            label={county}
                        >
                            {renderMunicipalityItems(county)}
                        </CalciteComboboxItemGroup>
                    ))
                )}
            </CalciteCombobox>
        </CalciteLabel>
    );
};

export default React.memo(MunicipalitySelect);