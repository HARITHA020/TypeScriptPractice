let name1: string = "John";
let age: number = 30;
let colour: string = "Green";

console.log("Name:", name1);
console.log("Age:", age);
console.log("Color:", colour);
//ques 2
let radius: number = 5;
let area: number = 3.14 * radius * radius;
console.log("Area of Circle:", area);

//ques3
let a: number = 5;
let b: number = 3;
console.log("Sum:", a + b);

// ques 4
let user: string = "Alice";
console.log("Hello, " + user + "!");

// ques 5
let birthDate: string = "1990-05-15";

let birth: Date = new Date(birthDate);
let today: Date = new Date();
let age1: number = today.getFullYear() - birth.getFullYear();
let monthDiff: number = today.getMonth() - birth.getMonth();
let dayDiff: number = today.getDate() - birth.getDate();
if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
}
console.log("Your age is:", age, "years");