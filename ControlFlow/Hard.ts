//1
let arr1: string[] = ["d", "A", "5", "z", "2", "B", "1", "a"];
arr1.sort();
console.log("Sorted Values:");
console.log(arr1);
//2
let exercise: number = 8;
let exam: number = 6;
let finalGrade: number;
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

//3

let car_no:number=1234
