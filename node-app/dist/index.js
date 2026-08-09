"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(a, b) {
    return a + b;
}
let ans = sum(1, 2);
console.log(ans);
function isLegal(age) {
    if (age >= 18)
        return true;
    else
        return false;
}
let flag = isLegal(16);
console.log(flag);
function delayedCall(fn) {
    setTimeout(fn, 1000);
}
delayedCall(() => {
    console.log("hello");
});
function delayedGreet(fn) {
    fn("harkirat");
}
function greet(name) {
    console.log("hello" + name);
}
delayedGreet(greet);
//# sourceMappingURL=index.js.map