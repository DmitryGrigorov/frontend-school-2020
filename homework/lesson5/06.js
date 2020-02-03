function findMax(...args) {
    args.sort(
        function (a,b) {
            return b - a;
        }
    );
    return args[0];
}

console.log(findMax(9, 8, 7, 6, 5, 4, 3, 2, 1));
console.log(findMax(0, 2, 12, 4, 5));