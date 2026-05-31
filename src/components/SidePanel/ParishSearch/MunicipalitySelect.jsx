// components/SidePanel/ParishSearchPanel/MunicipalitySelect.jsx
import { memo, useEffect, useRef } from "react";

const MunicipalitySelect = ({
  counties,
  municipalities,
  selectedCounty,
  selectedMunicipality,
  onSelect,
}) => {
  const comboboxRef = useRef(null);

  useEffect(() => {
    const comboboxEl = comboboxRef.current;
    if (!comboboxEl) return;

    const handleSelection = (event) => {
      const selected =
        event.currentTarget?.selectedItems?.[0]?.value ||
        event.detail?.selectedItems?.[0]?.value ||
        "";
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

    comboboxEl.addEventListener("calciteComboboxChange", handleSelection);

    return () => {
      comboboxEl.removeEventListener("calciteComboboxChange", handleSelection);
    };
  }, [municipalities, onSelect, selectedCounty, selectedMunicipality]);

  useEffect(() => {
    const comboboxEl = comboboxRef.current;
    if (!comboboxEl) return;
    comboboxEl.value = selectedMunicipality || "";
  }, [selectedMunicipality]);

  const renderMunicipalityItems = (county) => {
    if (!municipalities[county]) return null;

    return municipalities[county].map((municipality) => (
      <calcite-combobox-item
        key={`${county}-${municipality}`}
        value={municipality}
        text-label={municipality}
        selected={selectedMunicipality === municipality ? true : undefined}
      />
    ));
  };

  return (
    <calcite-label>
      Municipality
      <calcite-combobox
        ref={comboboxRef}
        placeholder="Select municipality"
        selection-mode="single"
        id="municipality-combobox"
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
