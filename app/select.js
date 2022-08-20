define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function createSelect(values) {
        var select = document.createElement("calcite-select");
        var option = document.createElement("calcite-option");
        option.value = "";
        option.label = "";
        select.appendChild(option);
        values.forEach(function (value) {
            var option = document.createElement("calcite-option");
            option.value = value;
            option.label = value;
            select.appendChild(option);
        });
        return select;
    }
    exports.createSelect = createSelect;
});
//# sourceMappingURL=select.js.map