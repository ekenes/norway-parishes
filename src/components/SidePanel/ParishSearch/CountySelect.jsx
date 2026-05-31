// components/SidePanel/ParishSearchPanel/CountySelect.jsx
import { useEffect, useRef } from "react";

const CountySelect = ({ counties, selectedCounty, onSelect }) => {
  const comboboxRef = useRef(null);

  useEffect(() => {
    const comboboxEl = comboboxRef.current;
    if (!comboboxEl) return;

    const handleSelection = (event) => {
      const selected =
        event.currentTarget?.selectedItems?.[0]?.value ||
        event.detail?.selectedItems?.[0]?.value ||
        "";
      if (selected === selectedCounty) return;
      onSelect(selected);
    };

    comboboxEl.addEventListener("calciteComboboxChange", handleSelection);

    return () => {
      comboboxEl.removeEventListener("calciteComboboxChange", handleSelection);
    };
  }, [onSelect, selectedCounty]);

  useEffect(() => {
    const comboboxEl = comboboxRef.current;
    if (!comboboxEl) return;
    comboboxEl.value = selectedCounty || "";
  }, [selectedCounty]);

  return (
    <calcite-label>
      County (fylke)
      <calcite-combobox
        ref={comboboxRef}
        placeholder="Select county name"
        selection-mode="single"
        id="county-combobox"
      >
        {counties.map((county) => (
          <calcite-combobox-item
            key={county}
            value={county}
            text-label={county}
            selected={selectedCounty === county ? true : undefined}
          />
        ))}
      </calcite-combobox>
    </calcite-label>
  );
};

export default CountySelect;
