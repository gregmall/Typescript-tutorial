import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/payments.js';
const form = document.querySelector('.new-item-form');
// console.log(form.children)
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //tuple below
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
let tup = ['hello', 33, true];
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docTest = addUID({ name: 'yoshi', age: 30 });
console.log(docTest.uid);
const docThree = {
    uid: 3,
    resourceName: 'person',
    data: 'shawn'
};
const docFour = {
    uid: 3,
    resourceName: 'fool',
    data: ['wine', 'wine',]
};
console.log(docFour, docThree, docTest);
