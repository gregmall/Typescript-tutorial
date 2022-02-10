// explicit types

let character: string;
let age: number;
let logged: boolean;

age = 33;
logged= false;
character = 'moth'

//array

let ninjas: string[] = [];

// union types

let mixed: (string|number|boolean)[] = [];
mixed.push(33)
mixed.push(false)
console.log(mixed)


let uid: string|number;
uid = 12;
uid = 'twelve'

//object;
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };

let ninjaTwo: {
    name: string,
    age: number,
    belt: string
}

console.log(ninjaOne)
