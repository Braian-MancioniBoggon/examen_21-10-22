"use strict";
exports.__esModule = true;
//Creo la clase Consola
var Consola = /** @class */ (function () {
    function Consola() {
        this.estaPrendida = true;
    }
    Consola.prototype.getEstaPrendido = function () {
        return this.estaPrendida;
    };
    Consola.prototype.mandarMensaje = function () {
        console.log("Invitacion a partida enviada");
    };
    Consola.prototype.jugarJuego = function () {
        console.log("It's a me... Mario");
    };
    Consola.prototype.prenderApagar = function () {
        if (this.estaPrendida) {
            this.estaPrendida = false;
        }
        else {
            this.estaPrendida = true;
        }
    };
    return Consola;
}());
exports["default"] = Consola;
