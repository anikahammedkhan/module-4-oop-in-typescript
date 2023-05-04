class Animal {
    name: string;
    species: string;
    sound: string;
    constructor(name: string, species: string, sound: string) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }

    makeSound() {
        console.log(`${this.name} the ${this.species} says ${this.sound}`);
    }
}

const dog = new Animal('Rex', 'dog', 'woof');
dog.makeSound();