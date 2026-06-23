"use strict";
// 1. 
let empName = "Haritha";
let wages = 500;
let daysWorked = 25;
let totalSalary = wages * daysWorked;
console.log("1. Total Salary =", totalSalary);
// 2
let num = 49;
if (num % 7 == 0) {
    console.log("2. Divisible by 7");
}
// 3
let ch = "a";
switch (ch.toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("3. Vowel");
        break;
    default:
        if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
            console.log("3. Consonant");
        }
        else {
            console.log("3. Symbol");
        }
}
// 4
let limit = 5;
let sum = 0;
let count = 1;
do {
    sum += count;
    count++;
} while (count <= limit);
console.log("4. Sum =", sum);
// 5
console.log("5. Alphabet Pattern");
let start = 97;
let end = 122;
while (start <= end) {
    console.log(String.fromCharCode(start) +
        String.fromCharCode(end));
    start++;
    end--;
}
// 6
let numbers = [3, 2, 4, -1];
let totalHello = 0;
for (let n of numbers) {
    if (n < 0) {
        break;
    }
    for (let i = 1; i <= n; i++) {
        console.log("Hello");
        totalHello++;
    }
}
console.log("6. Total Hello =", totalHello);
// 7
let age = 25;
let weight = 55;
if (age > 18 && age < 55 && weight > 45) {
    console.log("7. Eligible");
}
else {
    console.log("7. Not Eligible");
}
// 8
let char1 = "@";
if ((char1 >= 'A' && char1 <= 'Z') || (char1 >= 'a' && char1 <= 'z')) {
    console.log("8. Alphabet");
}
else if (char1 >= '0' && char1 <= '9') {
    console.log("8. Digit");
}
else {
    console.log("8. Special Symbol");
}
// 9
let number = 1234;
let digitSum = 0;
while (number > 0) {
    digitSum += number % 10;
    number = Math.floor(number / 10);
}
console.log("9. Sum of Digits =", digitSum);
// 10
console.log("10. Number Pattern");
let rows = 5;
for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += i + " ";
    }
    console.log(row);
}
