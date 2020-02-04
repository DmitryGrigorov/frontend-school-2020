function pushZeros(arr) {
    let noneZeroArr = [];
    let zeroArr = [];
    arr.forEach(
        function (item) {
            if (item === 0) {
                zeroArr.push(item);
            } else {
                noneZeroArr.push(item);
            }
        }
    );

    let newArr = [];
    newArr = noneZeroArr.concat(zeroArr);

    return newArr;
}

console.log(pushZeros([0, 9, 0, 8, 7, 0, 6, 5, 4, 3, 2, 1]));