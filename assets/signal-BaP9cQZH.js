import{aJ as a,aH as i,aI as u}from"./index-Club40b3.js";class l{constructor(t,s){this._observable=new i,this._value=t,this._equalityFunction=s}get value(){return u(this._observable),this._value}set value(t){this._equalityFunction(t,this._value)||(this._value=t,this._observable.notify())}mutate(t){t(this._value),this._observable.notify()}}function r(e,t=a){return new l(e,t)}export{r};
//# sourceMappingURL=signal-BaP9cQZH.js.map
