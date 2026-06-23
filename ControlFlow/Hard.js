"use strict";
//1
let arr1 = ["d", "A", "5", "z", "2", "B", "1", "a"];
arr1.sort();
console.log("Sorted Values:");
console.log(arr1);
//2
let exercise = 8;
let exam = 6;
let finalGrade;
if (exercise >= 5 && exam >= 5) {
    finalGrade = (exercise * 0.3) + (exam * 0.7);
}
else {
    if (exercise < exam) {
        finalGrade = exercise;
    }
    else {
        finalGrade = exam;
    }
}
console.log("Final Grade:", finalGrade);
