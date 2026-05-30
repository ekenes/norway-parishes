// components/SidePanel/ParishSearchPanel/CountySelect.jsx
const CountySelect = ({ counties, selectedCounty, onSelect }) => {
  const handleSelection = (event) => {
    const selected = event.target?.value;
    if (selected === selectedCounty) return;
    onSelect(selected);
  };

  return (
    <calcite-label>
      County (fylke)
      <calcite-combobox
        placeholder="Select county name"
        selection-mode="single"
        id="county-combobox"
        onCalciteComboboxChange={handleSelection}
      >
        {counties.map((county) => (
          <calcite-combobox-item
            key={county}
            value={county}
            text-label={county}
            selected={selectedCounty === county}
          />
        ))}
      </calcite-combobox>
    </calcite-label>
  );
};

export default CountySelect;
