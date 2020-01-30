const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

function sortOdd(arr) {
const oddArr = arr.filter(el => el % 2 === 0).sort((a, b) => a > b ? 1 : -1);
let oddIndex = 0;
return arr.map((el, index) => el % 2 !== 0 ? el : oddArr[oddIndex++])
}; 

console.log(sortOdd(arr));

/*
  5)
  Написать функцию sortOdd(), которая сортирует только четные числа в массиве:
  // Examples:
  sort([9, 8, 7, 6, 5, 4, 3, 2, 1]) // [9, 2, 7, 4, 5, 6, 3, 8, 1]
*/


