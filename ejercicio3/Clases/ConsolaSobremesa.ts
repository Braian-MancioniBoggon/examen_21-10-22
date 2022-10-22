// Importo la clase Consola
import Consola from './Consola'

//Creo la clase ConsolaSobremesa
export default class ConsolaSobremesa extends Consola{
    protected hdmiConectado :boolean;

    public constructor(){
        super();
        this.hdmiConectado=true;
    }

    public conectarDesconectarHdmi() :void{
        if (this.hdmiConectado){
            this.hdmiConectado=false;
        } else {
            this.hdmiConectado=true;
        }
    }

}