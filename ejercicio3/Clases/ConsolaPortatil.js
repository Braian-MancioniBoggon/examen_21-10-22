"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// Importo la clase Consola
var Consola_1 = require("./Consola");
//Creo la clase ConsolaPortatil
var ConsolaPortatil = /** @class */ (function (_super) {
    __extends(ConsolaPortatil, _super);
    function ConsolaPortatil() {
        var _this = _super.call(this) || this;
        _this.bateriaActual = 100;
        return _this;
    }
    ConsolaPortatil.prototype.getBateriaActual = function () {
        return this.bateriaActual;
    };
    return ConsolaPortatil;
}(Consola_1["default"]));
exports["default"] = ConsolaPortatil;
