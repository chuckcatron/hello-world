let sales: number = 123456789;
let course: string = "TypeScript";
let is_published: boolean = true;

let numbers: number[] = [1, 2, 3];

let user: [number, string] = [1, 'Chuck'];

const enum Size {
    Small, Medium, Large
};

let size: Size = Size.Small;

console.log(size);

size = Size.Medium;

console.log(size);

function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022)
        return income < 50000 ? income * 1.5 : income * 1.75;
    else
        return income < 50000 ? 10000 : 25000;
}


type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1,
    name: 'Chuck',
    retire: (date: Date) => {
        console.log(date);
    }
};


function kgToLbs(weight: number | string): number {
    //Narrowing
    if (typeof weight === 'number') {
        return weight * 2.2;
    } else {
        return parseInt(weight)
    }
}

kgToLbs(10);
kgToLbs('10kg');

type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
    drag: () => { },
    resize: () => { }
}

type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// if (customer !== null && customer !== undefined) {
//     console.log(customer.birthday);
// }

//optional property access operator
console.log(customer?.birthday?.getFullYear());

let speed: number | null = null;
let ride = {
    // Falsy (undefined, null, '', false, 0)
    // Nullish coalescing operator
    speed: speed ?? 30
}

