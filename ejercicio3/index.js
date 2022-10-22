"use strict";
exports.__esModule = true;
//Importo las clases
var ConsolaSobremesa_1 = require("./Clases/ConsolaSobremesa");
var ConsolaPortatil_1 = require("./Clases/ConsolaPortatil");
var consolaSobremesa = new ConsolaSobremesa_1["default"]();
var consolaPortatil = new ConsolaPortatil_1["default"]();
console.log("Veo en la consola de sobremesa si hay alguien para jugar");
console.log(consolaSobremesa);
consolaSobremesa.mandarMensaje();
console.log("Nadie responde");
consolaSobremesa.prenderApagar();
consolaSobremesa.conectarDesconectarHdmi();
console.log(consolaSobremesa);
console.log("A jugar en la portatil entonces");
console.log(consolaPortatil);
consolaPortatil.jugarJuego();
