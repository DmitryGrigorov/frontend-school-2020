function findMax(...r) {
    let max = 0;
    for (var i = 0; i < r.length; ++i) {
        if (r[i] > max) {
            max = r[i];
        }
    }
    console.log(max);
}

findMax(9, 8, 7, 6, 5, 4, 3, 2, 1);
