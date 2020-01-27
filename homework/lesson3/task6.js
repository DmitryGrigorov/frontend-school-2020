let arr = [1, 2, 3, 4, 5];
let arr1 = [3, 8, 1, 40, 6]

const totalSum = arr => arr.reduce((total, element) => element%2 ===0? total+element:total, 0);

console.log(totalSum(arr1));

/*
    6)
    Написать функцию, которая считает сумму элементов массива кратных числу 2.
    Например:
    sum(1, 2, 3, 4, 5) // 6
    sum(3, 8, 1, 40, 6) // 54
*/