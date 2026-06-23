"use strict";
let globalvar = "i am global variable";
function exampleFunction() {
    console.log(globalvar);
}
exampleFunction();
function someFn() {
    if (true) {
        var localvar = 1000;
        console.log(localvar);
    }
    console.log(localvar);
    function nested() {
        console.log(localvar);
    }
}
someFn();
