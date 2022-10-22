// Importo la clase Consola
import Consola from './Consola'

//Creo la clase ConsolaPortatil
export default class ConsolaPortatil extends Consola{
    protected bateriaActual :number;

    public constructor(){
        super();
        this.bateriaActual=100;
    }

    public getBateriaActual() :number{
        return this.bateriaActual;
    }
}