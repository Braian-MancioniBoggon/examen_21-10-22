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
//Creo la clase ConsolaSobremesa
var ConsolaSobremesa = /** @class */ (function (_super) {
    __extends(ConsolaSobremesa, _super);
    function ConsolaSobremesa() {
        var _this = _super.call(this) || this;
        _this.hdmiConectado = true;
        return _this;
    }
    ConsolaSobremesa.prototype.conectarDesconectarHdmi = function () {
        if (this.hdmiConectado) {
            this.hdmiConectado = false;
        }
        else {
            this.hdmiConectado = true;
        }
    };
    return ConsolaSobremesa;
}(Consola_1["default"]));
exports["default"] = ConsolaSobremesa;
