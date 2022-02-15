import { Invoice } from './classes/invoice.js'
import { Payment } from './classes/payments.js';
import { HasFormatted } from './interfaces/hasFormatted'

// let docOne: HasFormatted;
// let docTwo: HasFormatted;

// docOne = new Invoice('yoshi', 'webwork', 240);
// docTwo = new Payment('mario', 'plumbing work', 330);

// let docs: HasFormatted[] =[];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs)

// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }
// const me: IsPerson = {
//     name: 'steve',
//     age: 33,
//     speak(text: string): void {
//         console.log(text);

//     },
//     spend(amount: number): number {
//         console.log('I spent', amount);
//         return amount;
    

//     }


// };
// console.log(me)

// const greetPerson = (person: IsPerson)=>{
//     console.log('hello ', person.name)
// };
// greetPerson(me)


// const invOne = new Invoice('mario', 'work on mario website', 200);
// const invTwo = new Invoice('luigi', 'work on luigi website', 250);

// let invoices: Invoice[]=[];
// invoices.push(invOne);
// invoices.push(invTwo)

// invoices.forEach(inv =>{
  
//     console.log(inv.client, inv.amount, inv.format())
// })


// invTwo.amount= 22;


const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children)

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) =>{
    e.preventDefault();

    let doc: HasFormatted;
    if (type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    }else{
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }
    console.log(doc)
})