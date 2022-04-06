// напишите функцию checkAge которая принимает аргумент age и возвращает true если age больше 18, а иначе возвращает false
const checkAge = (age) => {
  if (age < 18) {
    return false;
  } else {
    return true;
  }
};
// Напишите функцию max(a,b), которая возвращает большее из чисел a и b.
const max = (...args) => {
return Math.max(...args);
}
console.log(max(2,4,431,34134,431434,341341,12,212,212,12,12,12,6));
// Замените код Function Expression стрелочной функцией
let wrapToStars = function (str) {
  return "*" + string + "*";
};

let transformToNumber = function (str) {
  if (isNaN(Number(str))) {
    return 0;
  }

  return Number(str);
};
