import MapView = require("esri/views/MapView");
import esri = __esri;

export function createSelect(values: string[]){
  const select = document.createElement("calcite-select") as HTMLSelectElement;
  const option = document.createElement("calcite-option") as HTMLOptionElement;
  option.value = "";
  option.label = "";
  select.appendChild(option);

  values.forEach(value => {
    const option = document.createElement("calcite-option") as HTMLOptionElement;
    option.value = value;
    option.label = value;
    select.appendChild(option);
  });

  return select;
}