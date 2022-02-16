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

    let doc: HasFormatted;
    if (type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    }else{
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }
    list.render(doc, type.value, 'end')
})

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