interface IVehicle {
    start(): void;
    stop(): void;
    move(): void;
}

class Vehicle implements IVehicle {
    constructor(
        public name: string,
        public model: string,
        public color: string,
    ) {

    }
    start(): void {
        console.log('start');
    }
    stop(): void {
        console.log('stop');
    }
    move(): void {
        console.log('move');
    }
    test(): void {
        console.log('test');
    }
}

const vehicle1 = new Vehicle('toyota', '2020', 'red');
// vehicle1.start();
// vehicle1.stop();
// vehicle1.move();
// vehicle1.test();


// abstraction class 

abstract class Vehicle2 implements IVehicle {
    constructor(
        public name: string,
        public model: string,
        public color: string,
    ) {

    }
    abstract start(): void
    abstract stop(): void
    move(): void {
        console.log('move');
    }
}

class Car extends Vehicle2 {
    constructor(
        public name: string,
        public model: string,
        public color: string,
    ) {
        super(name, model, color);
    }
    start(): void {
        console.log('start...........');
    }
    stop(): void {
        console.log('stop...........');
    }
    move(): void {
        console.log('move...........');
    }
}

