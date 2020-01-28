function findMin(...r) {
    let min = r[0];
    for (var i = 0; i < r.length; ++i) {
        if (r[i] < min) {
            min = r[i];
        }
    }
    console.log(min);
}

findMin(0, 2, 12, 4, 5);
