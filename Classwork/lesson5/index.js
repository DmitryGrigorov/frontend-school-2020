// (function (name) {
//     console.log("Hi, " + name);
// })("Dusty")
//
// function greet() {
//     return "Hi," + this.name;
// }
//
// let user1 = {
//     name: "Jack",
//     greet1: greet
// }
// let user2 = {
//     name: "Bob",
//     greet2: greet
// }
//
// function func() {
//     return [].sort.call(arguments);
// }
// console.log(func(7, 1, 5, 6));
// console.log(user1.greet1.apply(user2));
// console.log(user2.greet2());

// function chirp(n) {
//     if (n == 1) {
//         return 'chirp';
//     }
//
//     return chirp(n-1);
// }
// console.log(chirp(5));

// function pow(a, b) {
//     if (b === 1) {
//         return a;
//     }
//     if (b === 0) {
//         return 1;
//     }
//     return a*pow(a, b-1);
// }
// console.log(pow(0, 0));
//
let name = "John";
function sayHi() {
    console.log("Hi, " + name);
}
name = "Peter";
sayHi();


let time2 = setInterval(sayHi, 1000);
