class Account {

    constructor(
        public readonly id: number,
        public owner: string,
        private _balance: number) { }

    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error('Invalid amount');
        }
        this._balance += amount;
    }

    get balance(): number {
        return this._balance;
    }

    set balance(value: number) {
        if (value < 0) {
            throw new Error('Invalid value');
        }
        this._balance = value;
    }
}

let account = new Account(123, 'Chuck', 0);

account.deposit(100);

console.log(account.balance);

class SeatAssignment {
    //Index signature property
    [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = 'Chuck';
seats.A2 = 'Sheli';