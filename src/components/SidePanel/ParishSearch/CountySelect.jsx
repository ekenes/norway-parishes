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
    <calcite-combobox
      ref={comboboxRef}
      placeholder="Select county name"
      selection-mode="single"
      selection-appearance="highlight"
      id="county-combobox"
      label="County (fylke)"
      label-text="County (fylke)"
    >
      {counties.map((county) => (
        <calcite-combobox-item
          key={county}
          value={county}
          heading={county}
          label={county}
          active={selectedCounty === county ? true : undefined}
          selected={selectedCounty === county ? true : undefined}
        />
      ))}
    </calcite-combobox>
  );
};

export default CountySelect;
