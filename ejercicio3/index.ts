//Importo las clases
import ConsolaSobremesa from './Clases/ConsolaSobremesa'
import ConsolaPortatil from './Clases/ConsolaPortatil'

let consolaSobremesa :ConsolaSobremesa = new ConsolaSobremesa();
let consolaPortatil :ConsolaPortatil = new ConsolaPortatil();

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