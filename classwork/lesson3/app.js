// Strings — Строки

// let str1 = 'Some string';
// let str2 = "Some string";

// let name = 'Ivan'

// let str3 = `Hi ${name}!
// Some another line
// `

// console.log(str1.lastIndexOf('s'));

// const str = "stringify"; 
// console.log(str.startsWith('str'))

// Массивы

// let a = ["January", "February", "March", "April"];

// console.log(a.reverse());

// function isPolidrome(word) {
//     return word.toLowerCase() === word.toLowerCase().split('').reverse().join('')
// }

let a = [1, 2, 3, '4', 5];

let isNumber = a.every(function(value, index, array) {
   if(typeof value === 'number') {
    return true
   }
   return false
});



console.log(isNumber)


