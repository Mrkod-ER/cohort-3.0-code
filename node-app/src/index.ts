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


type UserType = { // difference between type and interface
    name: string, 
    age: number
}