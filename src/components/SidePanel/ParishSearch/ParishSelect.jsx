// components/SidePanel/ParishSearchPanel/ParishSelect.jsx
import { memo } from "react";

const ParishSelect = ({
  counties,
  municipalities,
  parishes,
  selectedCounty,
  selectedMunicipality,
  selectedParish,
  onSelect,
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
      for (const [municipality, parishList] of Object.entries(
        municipalityMap,
      )) {
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
      <calcite-combobox-item
        key={`${county}-${municipality}-${parish}`}
        value={parish}
        text-label={parish}
        selected={selectedParish === parish}
      />
    ));
  };

  return (
    <calcite-label>
      Local parish (sokn)
      <calcite-combobox
        placeholder="Select local parish name"
        selection-mode="single"
        id="localparish-combobox"
        onCalciteComboboxChange={handleSelection}
      >
        {selectedCounty && selectedMunicipality ? (
          <calcite-combobox-item-group
            key={selectedCounty}
            label={selectedCounty}
          >
            <calcite-combobox-item-group
              key={`${selectedCounty}-${selectedMunicipality}`}
              label={selectedMunicipality}
            >
              {renderParishItems(selectedCounty, selectedMunicipality)}
            </calcite-combobox-item-group>
          </calcite-combobox-item-group>
        ) : selectedCounty ? (
          <calcite-combobox-item-group
            key={selectedCounty}
            label={selectedCounty}
          >
            {municipalities[selectedCounty]?.map((municipality) => (
              <calcite-combobox-item-group
                key={`${selectedCounty}-${municipality}`}
                label={municipality}
              >
                {renderParishItems(selectedCounty, municipality)}
              </calcite-combobox-item-group>
            ))}
          </calcite-combobox-item-group>
        ) : (
          counties.map((county) => (
            <calcite-combobox-item-group key={county} label={county}>
              {municipalities[county]?.map((municipality) => (
                <calcite-combobox-item-group
                  key={`${county}-${municipality}`}
                  label={municipality}
                >
                  {renderParishItems(county, municipality)}
                </calcite-combobox-item-group>
              ))}
            </calcite-combobox-item-group>
          ))
        )}
      </calcite-combobox>
    </calcite-label>
  );
};

export default memo(ParishSelect);
