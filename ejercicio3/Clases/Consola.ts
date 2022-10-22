//Creo la clase Consola
export default class Consola {
    protected estaPrendida :boolean;

    public constructor(){
        this.estaPrendida=true;
    }

    public getEstaPrendido() :boolean{
        return this.estaPrendida;
    }

    public mandarMensaje() :void{
        console.log("Invitacion a partida enviada");
    }

    public jugarJuego() :void{
        console.log("It's a me... Mario")
    }

    public prenderApagar() :void{
        if (this.estaPrendida){
            this.estaPrendida=false;
        } else {
            this.estaPrendida=true;
        }
    }
}