class BankAccount {
    id: number;
    name: string;
    private _balance: number;
    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    getBalance(): number {
        return this._balance;
    }
    deposit(amount: number): void {
        this._balance += amount;
    }
}

const myAccount = new BankAccount(1, 'sakib', 1000);
console.log(myAccount);


class StudentsAc extends BankAccount {
    constructor(id: number, name: string, balance: number) {
        super(id, name, balance);
    }
    test(): string {
        return this.getBalance().toString();
    }
}

const student3 = new StudentsAc(1, 'sakib', 1000);
console.log(student3.test());