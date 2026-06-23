"use strict";
// 1
let secondsPerDay = 86400;
let secondsInWeek = secondsPerDay * 7;
console.log("1. Seconds in a Week =", secondsInWeek);
// 2
let quantity = 600;
let pricePerItem = 20;
let totalExpense1 = quantity * pricePerItem;
if (quantity > 500) {
    totalExpense1 = totalExpense1 - (totalExpense1 * 15 / 100);
}
console.log("2. Total Expense =", totalExpense1);
// 3
let pages = 50;
let copies = 3;
let typingCost = pages * 3;
let printingCost = pages * 1;
if (copies > 1) {
    printingCost += pages * (copies - 1) * 3;
}
let totalBill = typingCost + printingCost;
console.log("3. Total Bill =", totalBill);
// 4
let hours = 4;
let minutes = 30;
let bill = 0;
if (hours > 7) {
    console.log("Browsing limit exceeded");
}
else if (hours >= 5) {
    bill = 200;
}
else {
    bill = (hours * 50) + minutes;
}
console.log("4. Internet Bill =", bill);
// 5
let month = 5;
if (month < 1 || month > 12) {
    console.log("Invalid Month");
}
else {
    let totalDays;
    if (month == 4 || month == 6 || month == 9 || month == 11) {
        totalDays = 30;
    }
    else if (month == 2) {
        totalDays = 28; // or 29
    }
    else {
        totalDays = 31;
    }
    console.log("Mon Tue Wed Thu Fri Sat Sun");
    let count = 0;
    let calendar = "";
    for (let i = 1; i <= totalDays; i++) {
        calendar += i + " ";
        count++;
        if (count == 7) {
            calendar += "\n";
            count = 0;
        }
    }
    console.log(calendar);
}
// 6
let p = 100;
let q = 15;
let purchaseAmount = p * q;
let discount;
if (purchaseAmount > 1000) {
    discount = purchaseAmount * 0.10;
}
else {
    discount = purchaseAmount * 0.05;
}
let paidAmount = purchaseAmount - discount;
console.log("6. Paid Amount =", paidAmount);
// 7
let basicSalary = 15000;
let hra = 0;
let da = 0;
if (basicSalary <= 10000) {
    hra = basicSalary * 0.20;
    da = basicSalary * 0.80;
}
else if (basicSalary <= 20000) {
    hra = basicSalary * 0.25;
    da = basicSalary * 0.90;
}
else {
    hra = basicSalary * 0.30;
    da = basicSalary * 0.95;
}
let grossSalary = basicSalary + hra + da;
console.log("7. Gross Salary =", grossSalary);
// 8. Count Letters, Digits, Symbols
let str = "India became independent in 1947";
let letters = 0;
let digits = 0;
let symbols = 0;
for (let ch of str) {
    if ((ch >= 'A' && ch <= 'Z') ||
        (ch >= 'a' && ch <= 'z')) {
        letters++;
    }
    else if (ch >= '0' && ch <= '9') {
        digits++;
    }
    else {
        symbols++;
    }
}
console.log("8. Letters =", letters);
console.log("Digits =", digits);
console.log("Other Symbols =", symbols);
// 9. Armstrong Number
let num = 153;
let temp = num;
let armstrongSum = 0;
while (temp > 0) {
    let digit = temp % 10;
    armstrongSum += digit * digit * digit;
    temp = Math.floor(temp / 10);
}
if (armstrongSum == num) {
    console.log("9. Armstrong Number");
}
else {
    console.log("9. Not Armstrong Number");
}
