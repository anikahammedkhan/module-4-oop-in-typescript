class Parent {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours: number): string {
        return `this ${this.name} will sleep ${hours} hours`;
    }
}

class Student extends Parent {
    constructor(name: string, age: number, address: string) {
        super(name, age, address);
    }
}

const student1 = new Student('sakib', 20, 'dhaka');
console.log(student1.makeSleep(10));

class Teacher extends Parent {
    designation: string;
    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address);
        this.designation = designation;
    }
    takeClasses(classes: number): string {
        return `this ${this.name} will take ${classes} classes`;
    }
}

const teacher1 = new Teacher('sakib', 20, 'dhaka', 'teacher');
console.log(teacher1.takeClasses(10));