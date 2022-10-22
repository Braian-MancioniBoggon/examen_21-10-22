"use strict";
exports.__esModule = true;
//Importo las clases
var Dog_1 = require("./Clases/Dog");
var Cat_1 = require("./Clases/Cat");
//Creo un nuevo gato
var minino = new Cat_1["default"]('Pocky');
//El gato maulla
minino.makeSound(); // -> meow meow
//Creo un nuevo perro
var firulais = new Dog_1["default"]('Pocky');
//El perro ladra
firulais.makeSound(); // -> wuff wuff
