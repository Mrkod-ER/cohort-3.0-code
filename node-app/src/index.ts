// function greet(user: {
//     name: string, 
//     age: number
// }) {
//     console.log("hello" + user.name)
// }

// greet({
//     name: "harkirat",
//     age: 26
// });

// interface UserType {
//     firstName: string, 
//     lastName: string, 
//     age: number
// }

// function greet(user: UserType) {

// }

// let user: UserType = { 
//     firstName: "harkirat", 
//     age: 21, 
//     lastName: " singh"
// }


// interface TodoType {
//     title: string, 
//     id: number
// }

// interface TodoInput {
//     todo: TodoType
// }

// function Todo(props: TodoInput) {
//     props.todo
// }


// type UserType = { // difference between type and interface
//     name: string, 
//     age: number
// }


// interface Person {
//     name: string, 
//     age: number, 
//     // greet: () => string,  
// }

// const person: Person = { // how classes are different from these objects
//     name: "harkirat", 
//     age: 25, 
//     // greet: () => {
//     //     return "hi"
//     // }
// }

// class Manager implements Person {
//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name; 
//         this.age = age; 
//     }

// }

// let user = new Manager("john", 30);

// interface -- objects or -- make a class
// class -- make objects

interface User {
    firstName: string, 
    lastName: string, 
    age: number
}

function isLegal(arr: User[]) {
    return arr.filter(it => it.age >= 18);
}
