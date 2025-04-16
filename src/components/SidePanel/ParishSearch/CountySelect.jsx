// components/SidePanel/ParishSearchPanel/CountySelect.jsx
import React from 'react';
import {
    CalciteLabel,
    CalciteCombobox,
    CalciteComboboxItem,
} from "@esri/calcite-components-react";

const CountySelect = ({ counties, selectedCounty, onSelect }) => {
    const handleSelection = (event) => {
        const selected = event.target?.value;
        if (selected === selectedCounty) return;
        onSelect(selected);
    };

    return (
        <CalciteLabel>
            County (fylke)
            <CalciteCombobox
                placeholder="Select county name"
                selectionMode="single"
                id="county-combobox"
                onCalciteComboboxChange={handleSelection}
            >
                {counties.map((county) => (
                    <CalciteComboboxItem
                        key={county}
                        value={county}
                        textLabel={county}
                        selected={selectedCounty === county}
                    />
                ))}
            </CalciteCombobox>
        </CalciteLabel>
    );
};

export default CountySelect;