const anon = function() {

} // anonymous function exp. this exists

function name() {} // defined function exp

const arrow = () => {

}; // нет this

// (function (a) {
//     console.log(a)    
// })(75); // intermidiate invoked function expression (IIFE)


// напишите функцию checkAge которая принимает аргумент age и возвращает true если age больше 18, а иначе возвращает false

const checkAge = (age) => {
    // if(age >= 18) {
    //     return true
    // }
    // if(age < 18) {
    //     return false
    // }

    return age >= 18 ? true : false
};

// console.log(checkAge(7));
// console.log(checkAge(20))

// Напишите функцию max(a,b), которая возвращает большее из чисел a и b.

const max = (a, b) => {
    return Math.max(a, b);
}

// console.log(max(4, 9));
// console.log(max(20, 9))

// Замените код Function Expression стрелочной функцией
let wrapToStars = function(str) {
    return '*' + string + '*';
}

let transformToNumber = function(str) {
    if (isNaN(Number(str))) {
        return 0;
    } 

    return Number(str);
}


const arr = [1, 2, 3, 5, 6];
console.log(arr.join('_'))

Array.prototype.myJoin = function (splitter) {
    let str = '';

    for(let i = 0; i < this.length; i++) {
        str = str + this[i] + splitter;
    }

    return str;
};

console.log(arr.myJoin('_'))
