"use strict";
//ques 1
let weight = 70.5;
let height = 1.75;
let bmi = weight / (height * height);
console.log("BMI:", bmi.toFixed(2));
// ques 2
let score = 85;
console.log("Your score is " + String(score));
// ques 3
let rating = 4.3;
console.log("Rounded Rating:", Math.round(rating));
// ques 4
let productList = ["Pen", "Pencil", "Eraser"];
for (let p of productList) {
    console.log(p);
}
//ques 5
let str = "hello";
console.log(str.length);
console.log(str + str);
console.log(str[0]);
console.log(str.substring(0, 3));
