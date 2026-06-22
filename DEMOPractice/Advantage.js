"use strict";
let username = "john";
let userage = 2;
username = 42;
function greet1(name) {
    return "hello," + name;
}
const result1 = greet1(username);
console.log(result1);
