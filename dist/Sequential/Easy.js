"use strict";
let name1 = "John";
let age = 30;
let colour = "Green";
console.log("Name:", name1);
console.log("Age:", age);
console.log("Color:", colour);
//ques 2
let radius = 5;
let area = 3.14 * radius * radius;
console.log("Area of Circle:", area);
//ques3
let a = 5;
let b = 3;
console.log("Sum:", a + b);
// ques 4
let user = "Alice";
console.log("Hello, " + user + "!");
// ques 5
let birthDate = "1990-05-15";
let birth = new Date(birthDate);
let today = new Date();
let age1 = today.getFullYear() - birth.getFullYear();
let monthDiff = today.getMonth() - birth.getMonth();
let dayDiff = today.getDate() - birth.getDate();
if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
}
console.log("Your age is:", age, "years");
