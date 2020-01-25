let arr = [1,2,3,4,5,6,7,8];

function arrSum (arr) {
    let newArr = [];
    arr.forEach(function (item) {
        if (item % 2 == 0) {
            newArr.push(item);
        }
    });

    let sumArr = newArr.reduce(
        function (sum,current) {
            return sum + current;
        }, 0);
    return sumArr;
}

document.write(arrSum(arr));