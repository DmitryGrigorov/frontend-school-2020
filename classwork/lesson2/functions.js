// function declaration
function func1() {}

// function expression
const func2 = function () {};

// arrow function
const func3 = () => {};


// (function (a) {
//    console.log(a) 
// })(123)


// напишите функцию checkAge которая принимает аргумент age и возвращает true если age больше 18, а иначе возвращает false

// Напишите функцию max(a,b), которая возвращает большее из чисел a и b.

// Замените код Function Expression стрелочной функцией
// let wrapToStars = function(str) {
//     return '*' + string + '*';
// }

// let transformToNumber = function(str) {
//     if (isNaN(Number(str))) {
//         return 0;
//     } 

//     return Number(str);
// }


// this, arguments
function max() {
    console.log(arguments, this)
    return Math.max.apply(this, Array.from(arguments));
};

const obj = {
    a: 5,
    max: max
}

console.log(obj.max(123, 11, 1000))