"use strict";
function Sum(x, y) {
    return x + y;
}
console.log(Sum(2, 5));
let add = function Sum(x, y) {
    return x + y;
};
console.log(add(5, 5));
//optional parameter
function showDetails(id, name, email) {
    console.log("id:", id, "name:", name);
    if (email != undefined) { // if we doent validate it shows like email: undefined in output othersiwse it wll not show
        console.log("email:", email);
    }
}
showDetails(101, "virat");
showDetails(105, "dhoni", "dhoni@gmail.com");
//default parameter
function displayName(name, greeting = "hello") {
    return greeting + "" + name + "!";
}
console.log(displayName("haritha", "hello")); // default should be last otherwise it will provide unexpected output
console.log(displayName("divya"));
console.log(displayName("Friends"));
//rest
function sums(a, ...b) {
    let result = a;
    for (var i = 0; i < b.length; i++) {
        result += b[i];
    }
    return result;
}
let r1 = sums(3, 5);
let r2 = sums(3, 2, 3, 4);
console.log(r1);
console.log(r2);
//arrow function
//1 arrow without paramter
let print1 = () => console.log("hello typescript");
print1();
//2  arrow with paramter
let sum1 = (x, y) => {
    return x + y;
};
console.log(sum1(10, 20));
function add2(a, b) {
    return a + b;
}
console.log(add2("hello", "haritha"));
console.log(add2(10, 20));
//console.log(add2(2,"haritha"))
