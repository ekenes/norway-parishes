import{d as e}from"./calcite-input-time-picker_2.entry-Cl-M8pQD.js";import"./index-Club40b3.js";import"./locale-60f8ca58-Kl8S9pwc.js";import"./form-8ec29459-Gp5dGvky.js";import"./dom-b6dedd88-B4jHZlw4.js";import"./guid-9c230b6a-BxSjQh8J.js";import"./interactive-1a42577a-BTyGj1zl.js";import"./key-3ee05994-D63ExP77.js";import"./label-043ae25a-fVHJCEKA.js";import"./component-5f0a8be8-6CIDVndn.js";import"./loadable-13e9ffb2-DZsIufML.js";import"./focusTrapComponent-7cfd1d69-C6Wy7g7n.js";import"./math-682795d0-CPc4dlb6.js";import"./t9n-75defee3-BAOKWQI7.js";import"./Validation-c59cb4eb-1sDcajSO.js";import"./input-871f5b21-j1u1wOBY.js";import"./observers-9c166451-B21XW3NK.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */var i="січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),s="січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"),p=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function M(m,_){var r=m.split("_");return _%10===1&&_%100!==11?r[0]:_%10>=2&&_%10<=4&&(_%100<10||_%100>=20)?r[1]:r[2]}function t(m,_,r){var a={ss:_?"секунда_секунди_секунд":"секунду_секунди_секунд",mm:_?"хвилина_хвилини_хвилин":"хвилину_хвилини_хвилин",hh:_?"година_години_годин":"годину_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"};return r==="m"?_?"хвилина":"хвилину":r==="h"?_?"година":"годину":m+" "+M(a[r],+m)}var o=function(_,r){return p.test(r)?i[_.month()]:s[_.month()]};o.s=s;o.f=i;var l={name:"uk",weekdays:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),weekdaysShort:"ндл_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),months:o,monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekStart:1,relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",m:t,mm:t,h:t,hh:t,d:"день",dd:t,M:"місяць",MM:t,y:"рік",yy:t},ordinal:function(_){return _},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., HH:mm",LLLL:"dddd, D MMMM YYYY р., HH:mm"}};e.locale(l,null,!0);export{l as default};
//# sourceMappingURL=uk-61308ab4-BpAF84PV.js.map
