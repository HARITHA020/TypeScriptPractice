"use strict";
let num1 = 5;
let num2 = 10;
console.log(num1 + num2);
let num = 10;
let hexa = 0X67CF;
let binary = 0b1100;
console.log(num);
console.log(hexa);
console.log(binary);
let msg = 'good morning';
let color = 'red';
console.log(msg);
console.log(color);
let boolvar = true;
let boolvar1 = Boolean(true);
let isDone = true;
let isPending = Boolean(false);
console.log(isDone);
console.log(isPending);
console.log(typeof (isDone));
console.log(typeof (isPending));
let a;
let b = null;
console.log(typeof (a));
console.log(typeof (b));
const secret = Symbol("secret");
const secret1 = Symbol("Secret1");
const user = {
    name: 'alice',
    [secret]: 'top-secret',
    [secret1]: 'top-secret 1'
};
console.log(user[secret]);
const symbols = Object.getOwnPropertySymbols(user);
console.log(symbols);
let frts = ['apple', 'orange'];
console.log(frts);
let frts1 = ['apple', 'orange', 'grapes'];
console.log(frts);
console.log(frts1[0]);
for (var index in frts)
    console.log(frts[index]);
for (var i = 0; i < frts.length; i++)
    console.log(frts[i]);
var f1 = ['apple', 'papaya', 'banana'];
console.log(f1.pop());
console.log(f1.push('mango'));
console.log(f1);
f1.sort();
console.log(f1);
console.log(f1.indexOf('mango'));
console.log(f1.fill('Apple', 0, 1));
f1.unshift("kiwi");
console.log(f1);
console.log(f1.shift());
let f2 = ['orange', 'grapes'];
console.log(f1.concat(f2));
console.log(f1.includes('mango'));
console.log(f1.join('-'));
console.log(f1.slice(0, 2));
console.log(f1.toString());
console.log(f1.toLocaleString());
let ourTuple;
ourTuple = [5, false, 'good morinin'];
console.log(ourTuple);

