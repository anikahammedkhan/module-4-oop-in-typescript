// Key of Guards 
type Alphanumeric = string | number;
function add(param: Alphanumeric, param2: Alphanumeric): Alphanumeric {
    if (typeof param === 'string' || typeof param2 === 'string') {
        return `${param}${param2}`;
    }
    return param + param2;
}

console.log(add(1, 2));
console.log(add('1', '2'));


// in Guard 

type NormalUser = {
    name: string;
}

type AdminUser = {
    name: string;
    role: "admin";
}

function printUser(user: NormalUser | AdminUser) {
    if ('role' in user) {
        console.log(`${user.name} is an admin`);
    } else {
        console.log(`${user.name} is a normal user`);
    }
}

const user1: NormalUser = {
    name: 'John'
}

const user2: AdminUser = {
    name: 'Jane',
    role: 'admin'
}

printUser(user1);
printUser(user2);

// instanceof Guard

class Animal3 {
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

class Dog extends Animal3 {
    constructor(name: string) {
        super(name, 'dog', 'woof');
    }
}

class Cat extends Animal3 {
    constructor(name: string) {
        super(name, 'cat', 'meow');
    }
}

function makeSound(animal: Animal3) {
    if (animal instanceof Dog) {
        console.log(`${animal.name} is a dog`);
    } else if (animal instanceof Cat) {
        console.log(`${animal.name} is a cat`);
    }
    animal.makeSound();
}

const dog3 = new Dog('Rex');
const cat = new Cat('Fluffy');

makeSound(dog3);
makeSound(cat);

// console.log(dog3 instanceof Animal3);
