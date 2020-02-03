function findMin(...args) {
    args.sort(
        function (a,b) {
            return a - b;
        }
    );
    return args[0];
}

console.log(findMin(9, 8, 7, 6, 5, 4, 3, 2, 1));
console.log(findMin(0, 2, 12, 4, 5));