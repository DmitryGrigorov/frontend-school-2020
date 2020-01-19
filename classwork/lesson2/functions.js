// напишите функцию checkAge которая принимает аргумент age и возвращает true если age больше 18, а иначе возвращает false
function    checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}
// Напишите функцию max(a,b), которая возвращает большее из чисел a и b.
function max(a,b) { 
    if (a > b) { // первый вариант
        return a; 
    } else {
        return b;
    }
    // return a > b ? a : b; второй вариант 
}
// Замените код Function Expression стрелочной функцией
let wrapToStars = function(str) {
    return '*' + string + '*';
}

//let wrapToStars = (str) => '*' + string + '*';

let transformToNumber = function(str) {
    if (isNaN(Number(str))) {
        return 0;
    } 

    return Number(str);
}

/*
let transformToNumber = (str) => {
    if (isNaN(Number(str))) {
        return 0;
    } 
    return Number(str);
}
*/
