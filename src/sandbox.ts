// // explicit types

// let character: string;
// let age: number;
// let logged: boolean;

// age = 33;
// logged= false;
// character = 'moth'

// //array

// let ninjas: string[] = [];

// // union types

// let mixed: (string|number|boolean)[] = [];
// mixed.push(33)
// mixed.push(false)
// console.log(mixed)


// let uid: string|number;
// uid = 12;
// uid = 'twelve'

// //object;
// let ninjaOne: object;
// ninjaOne = { name: 'yoshi', age: 30 };

// let ninjaTwo: {
//     name: string,
//     age: number,
//     belt: string
// }

// console.log(ninjaOne)

// let age: any = 23;
// age = true;

// age = {
//     name: 'luigi'
// }


// let mixed: any[] =[];
// mixed.push(age)
// console.log(mixed)
// let ninja: { name: any, age: any}
// ninja = { name: 'steve', age: 33}
// console.log(ninja)
// console.log("test")
// console.log('but her emails')
// console.log('her stuff')
// let greet: Function;

// greet = () =>{
//     console.log('hello world')
// };

// const add = (a: number, b: number, c: number | string= 10): void =>{ 
//     console.log(a+b)
//     console.log(c)

// }
// add(3,3,'steve');

// const minus = (a: number, b: number): number  =>{
//     return a + b;
// }

// let result = minus(10,7);

type StringOrNum = string | number;
type objWithName = { name: string, uid: StringOrNum }

const logDetails =(uid: StringOrNum, item: string) =>{
    console.log(`${item} has a uid of ${uid}`)
}

const greetAgain = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}




