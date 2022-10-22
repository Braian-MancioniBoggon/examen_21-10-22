// Importo la clase Animal
import Animal from './Animal'

//Creo la clase Dog
export default class Dog extends Animal {
    public constructor(name :string){
        super(name);
    }
    
    public makeSound(): void {
        console.log ('wuff wuff\n');
    }
}