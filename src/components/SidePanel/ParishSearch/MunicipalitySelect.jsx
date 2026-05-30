// components/SidePanel/ParishSearchPanel/MunicipalitySelect.jsx
import { memo } from "react";

const MunicipalitySelect = ({
  counties,
  municipalities,
  selectedCounty,
  selectedMunicipality,
  onSelect,
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
      <calcite-combobox-item
        key={`${county}-${municipality}`}
        value={municipality}
        text-label={municipality}
        selected={selectedMunicipality === municipality}
      />
    ));
  };

  return (
    <calcite-label>
      Municipality
      <calcite-combobox
        placeholder="Select municipality"
        selection-mode="single"
        id="municipality-combobox"
        onCalciteComboboxChange={handleSelection}
      >
        {selectedCounty ? (
          <calcite-combobox-item-group
            key={selectedCounty}
            label={selectedCounty}
          >
            {renderMunicipalityItems(selectedCounty)}
          </calcite-combobox-item-group>
        ) : (
          counties.map((county) => (
            <calcite-combobox-item-group key={county} label={county}>
              {renderMunicipalityItems(county)}
            </calcite-combobox-item-group>
          ))
        )}
      </calcite-combobox>
    </calcite-label>
  );
};

export default memo(MunicipalitySelect);
