class Person {
    takeNap(): void {
        console.log('Sleeping');
    }
}

class Student5 extends Person {
    takeNap(): void {
        console.log('Sleeping a lot');
    }
}

class Developer extends Person {
    takeNap(): void {
        console.log('Sleeping a little');
    }
}

function makePersonTakeNap(person: Person) {
    person.takeNap();
}

const person1 = new Person();
const person2 = new Student5();
const person3 = new Developer();

makePersonTakeNap(person1);
makePersonTakeNap(person2);
makePersonTakeNap(person3);


class Shape {
    getArea() {
    }
}

class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

class Square extends Shape {
    side: number;
    constructor(side: number) {
        super();
        this.side = side;
    }
    getArea(): number {
        return this.side ** 2;
    }
}

class Rectangle extends Shape {
    length: number;
    width: number;
    constructor(length: number, width: number) {
        super();
        this.length = length;
        this.width = width;
    }
    getArea(): number {
        return this.length * this.width;
    }
}

function printArea(shape: Shape) {
    console.log(shape.getArea());
}

const circle = new Circle(5);
const square = new Square(5);
const rectangle = new Rectangle(5, 10);

printArea(circle);
printArea(square);
printArea(rectangle);