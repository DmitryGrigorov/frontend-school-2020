function sum(...args) {
    let sum = 0;
    for(let i = 0; i < args.length; i++) {
        sum += args[i];
    }

    return sum;
}

// Examples:

console.log(sum(1, 2, 3));  // 6
console.log(sum(5, 5));  // 10
console.log(sum(10, 20, 3, 7)); // 40