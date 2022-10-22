// Importo la clase Animal
import Animal from './Animal'

//Creo la clase Cat
export default class Cat extends Animal {
    public constructor(name :string){
        super(name);
    }
    
    public makeSound(): void {
        console.log('meow meow\n');
    }
}