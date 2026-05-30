import { useState, useEffect } from "react";
import "@arcgis/map-components/dist/components/arcgis-search";
import CountySelect from "./CountySelect";
import MunicipalitySelect from "./MunicipalitySelect";
import ParishSelect from "./ParishSelect";

const ParishSearch = (props) => {
  const {
    counties,
    parishes,
    municipalities,
    referenceElement,
    selectedCounty,
    selectedMunicipality,
    selectedParish,
    onComboBoxSelect,
    onSearchResult,
    onSearchClear,
    searchText,
  } = props;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!counties || !parishes || !municipalities) {
      setLoading(true);
      return;
    }
    setLoading(false);
  }, [counties, parishes, municipalities]);

  const onSuggestComplete = (event) => {
    if (event.detail.results && event.detail.results.length > 0) {
      // Get the first source's results
      const sourceResults = event.detail.results[0];

      if (sourceResults && sourceResults.results) {
        // Filter to keep only suggestions whole last chars are 'NOR'
        const filteredResults = sourceResults.results.filter((suggestion) => {
          const text = suggestion.text || "";
          return text.includes("NOR") && text.slice(-3) === "NOR";
        });

        // Replace the original results with filtered ones
        sourceResults.results = filteredResults;
      }
    }
  };

  return (
    <calcite-panel
      heading="Find a parish"
      id="parish-search"
      data-panel-id="parish-search"
      width-scale="l"
    >
      <div className="panel-content">
        {loading && <calcite-loader label="Loading data..." />}
        {!loading && (
          <>
            <div className="border border-stone-400 p-2 my-2">
              <CountySelect
                counties={counties}
                selectedCounty={selectedCounty}
                onSelect={onComboBoxSelect}
              />
              <MunicipalitySelect
                counties={counties}
                municipalities={municipalities}
                selectedCounty={selectedCounty}
                selectedMunicipality={selectedMunicipality}
                onSelect={onComboBoxSelect}
              />
              <ParishSelect
                counties={counties}
                municipalities={municipalities}
                parishes={parishes}
                selectedCounty={selectedCounty}
                selectedMunicipality={selectedMunicipality}
                selectedParish={selectedParish}
                onSelect={onComboBoxSelect}
              />
            </div>
            <div className="border border-stone-400 p-2 my-2">
              <calcite-label>
                Farm/property
                <arcgis-search
                  id="parish-search-widget"
                  reference-element={referenceElement}
                  onArcgisSelectResult={onSearchResult}
                  onArcgisClear={onSearchClear}
                  search-term={searchText}
                  popup-disabled={true}
                  max-suggestions={100}
                  onArcgisSuggestComplete={onSuggestComplete}
                />
              </calcite-label>
            </div>
          </>
        )}
      </div>
    </calcite-panel>
  );
};

export default ParishSearch;
