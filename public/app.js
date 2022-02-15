"use strict";
// const anchor = document.querySelector('a')!;
//  console.log(anchor.href);
// const form = document.querySelector('form')!;
//classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('mario', 'work on mario website', 200);
const invTwo = new Invoice('luigi', 'work on luigi website', 250);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invOne.client = 'yoshi';
invTwo.amount = 22;
console.log(invoices);
const form = document.querySelector('.new-item-form');
// console.log(form.children)
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
