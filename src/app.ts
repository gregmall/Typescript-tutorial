// const anchor = document.querySelector('a')!;
//  console.log(anchor.href);

// const form = document.querySelector('form')!;

//classes
import { Invoice } from './classes/invoice.js'

const invOne = new Invoice('mario', 'work on mario website', 200);
const invTwo = new Invoice('luigi', 'work on luigi website', 250);

let invoices: Invoice[]=[];
invoices.push(invOne);
invoices.push(invTwo)

invoices.forEach(inv =>{
  
    console.log(inv.client, inv.amount, inv.format())
})


invTwo.amount= 22;


const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children)

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) =>{
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})