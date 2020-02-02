function sumTo(n) {
    if (n == 1) {
        return n;
    } else {
        return  sumTo(n-1) + n;
    }
}

console.log(sumTo(4));