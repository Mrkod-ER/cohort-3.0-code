function sum(a: number, b: number): number{ // return type defined here
    return a + b; 
}

let ans = sum(1, 2);

console.log(ans);


function isLegal(age: number): boolean { // return type defined here if not then tsc infer it
    if(age >= 18) return true; 
    else return false; 
}

let flag = isLegal(16);

console.log(flag);


function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}

delayedCall(() => {
    console.log("hello");
})

function delayedGreet(fn: (a: string) => void){
    fn("harkirat");
}

function greet(name: string) {
    console.log("hello" + name);
}

delayedGreet(greet);
