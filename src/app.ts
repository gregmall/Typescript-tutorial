import { Invoice } from './classes/invoice.js'
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/payments.js';
import { HasFormatted } from './interfaces/hasFormatted'




const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children)

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul)
form.addEventListener('submit', (e: Event) =>{
    e.preventDefault();
    //tuple below
    let values: [string, string, number]
    values = [tofrom.value, details.value, amount.valueAsNumber]
    let doc: HasFormatted;
    if (type.value === 'invoice'){
        doc = new Invoice(...values)
    }else{
        doc = new Payment(...values)
    }
    list.render(doc, type.value, 'end')
})

let tup: [string, number, boolean] = ['hello', 33, true]


const addUID = <T extends {name: string}>(obj: T) =>{
    let uid = Math.floor(Math.random() *100);
    return {...obj,uid};
}

let docTest = addUID({name: 'yoshi', age: 30});
console.log(docTest.uid)


interface Resource<T>{
    uid: number;
    resourceName: string;
    data: T
}
const docThree: Resource<string> = {
    uid: 3,
    resourceName: 'person',
    data: 'shawn'
}
const docFour: Resource<string[]>={
    uid: 3,
    resourceName: 'fool',
    data: ['wine', 'wine',]
}
console.log(docFour, docThree, docTest)