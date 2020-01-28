function sum(...r) {
    let sum = 0;
    for(let i = 0; i < r.length; i++) {
      sum += r[i];
    }
    return sum;
}
console.log(sum(1, 2, 3));  // 6
console.log(sum(5, 5));  // 10
console.log(sum(10, 20, 3, 7)); // 40
