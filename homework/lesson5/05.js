function sortOdd(arr) {
    let oddArr = [];
    let finalArr = [];
    arr.forEach(
        function (item) {
            if (item %2 === 0) {
                oddArr.push(item);
            }
        }
    );
    oddArr.sort(
        function (a,b) {
            return a - b;
        }
    );

    let x = 0;

    arr.forEach(
        function (entry) {
            if (entry % 2 === 0) {
                finalArr.push(oddArr[x]);
                x++;
            } else {
                finalArr.push(entry)
            }
        }
    );
    return finalArr;
}

console.log(sortOdd([9, 8, 7, 6, 5, 4, 3, 2, 1]))