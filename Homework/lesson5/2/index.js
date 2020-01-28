function fib(n) {
    let a = 1;
    let b = 1;
    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}

alert(fib(3));
alert(fib(7));
alert(fib(77));
