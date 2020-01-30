function pushZeros(arr){
  for(item in arr){
    if(arr[item] === 0 ){
      arr.splice(item,1);
      arr.push(0);
    }
  }
  return arr;
 };

console.log(pushZeros([0, 9, 0, 8, 7, 0, 6, 5, 4, 3, 2, 1]));


/*
  8)
  Написать функцию pushZeros(), которая сдвигает все элементы со значением '0' в конец массива:
  // Examples:
  pushZeros([0, 9, 0, 8, 7, 0, 6, 5, 4, 3, 2, 1]) // [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0]
  pushZeros([0, 2, 12, 4, 5]) // [2, 12, 4, 5, 0]
*/