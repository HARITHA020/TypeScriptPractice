"use strict";
//ques1
let r = 5;
let angle = 60;
let pi = 3.14;
console.log("Radius:", r);
console.log("Diameter:", 2 * r);
console.log("Circumference:", 2 * pi * r);
console.log("Sector Area:", (angle / 360) * pi * r * r);
console.log("Arc Length:", (angle / 360) * 2 * pi * r);
//ques2
let price = 7.5;
let qty = 4;
console.log("Total cost:", price * qty);
//ques3
let income = 3500;
let expenses = [200, 150.5, 450.75];
let totalExpense = 0;
for (let e of expenses) {
    totalExpense += e;
}
console.log("Remaining budget:", income - totalExpense);
//ques 4
let a1 = 3;
let b1 = 4;
let c1 = 5;
if (a1 + b1 > c1 && a1 + c1 > b1 && b1 + c1 > a1) {
    let s = (a1 + b1 + c1) / 2;
    let area = Math.sqrt(s * (s - a1) * (s - b1) * (s - c1));
    console.log("Triangle Area:", area);
}
else {
    console.log("Invalid triangle");
}
//ques 5
let items = [
    { price: 10, qty: 3 },
    { price: 15, qty: 2 },
    { price: 20, qty: 2 }
];
let total = 0;
for (let item of items) {
    total += item.price * item.qty;
}
console.log("Total Price:", total);
