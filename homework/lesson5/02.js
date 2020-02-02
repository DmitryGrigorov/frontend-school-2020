function fib(x) {
    if (x == 1 || x == 2) {
        return 1;
    } else {
        return fib(x - 1) + fib(x - 2);
    }
}

console.log(fib(7));