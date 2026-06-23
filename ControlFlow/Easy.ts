// 1. 
let empName: string = "Haritha";
let wages: number = 500;
let daysWorked: number = 25;

let totalSalary = wages * daysWorked;
console.log("1. Total Salary =", totalSalary);


// 2
let nums: number = 49;

if (nums % 7 == 0) {
    console.log("2. Divisible by 7");
}


// 3
let ch: string = "a";

switch (ch.toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("3. Vowel");
        break;

    default:
        if ((ch >= 'a' && ch <= 'z') ||(ch >= 'A' && ch <= 'Z')) {
            console.log("3. Consonant");
        } else {
            console.log("3. Symbol");
        }
}


// 4
let limit: number = 5;
let sum: number = 0;
let count: number = 1;

do {
    sum += count;
    count++;
} while (count <= limit);

console.log("4. Sum =", sum);


// 5
console.log("5. Alphabet Pattern");

let start: number = 97;
let end: number = 122;

while (start <= end) {
    console.log(
        String.fromCharCode(start) +
        String.fromCharCode(end)
    );
    start++;
    end--;
}


// 6
let numbers: number[] = [3, 2, 4, -1];
let totalHello: number = 0;

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
let age: number = 25;
let weight: number = 55;

if (age > 18 && age < 55 && weight > 45) {
    console.log("7. Eligible");
}
else {
    console.log("7. Not Eligible");
}


// 8
let char1: string = "@";

if ((char1 >= 'A' && char1 <= 'Z') ||(char1 >= 'a' && char1 <= 'z')
) {
    console.log("8. Alphabet");
}
else if (char1 >= '0' && char1 <= '9') {
    console.log("8. Digit");
}
else {
    console.log("8. Special Symbol");
}


// 9
let number: number = 1234;
let digitSum: number = 0;

while (number > 0) {
    digitSum += number % 10;
    number = Math.floor(number / 10);
}

console.log("9. Sum of Digits =", digitSum);


// 10
console.log("10. Number Pattern");

let rows: number = 5;

for (let i = 1; i <= rows; i++) {

    let row: string = "";

    for (let j = 1; j <= i; j++) {
        row += i + " ";
    }

    console.log(row);
}