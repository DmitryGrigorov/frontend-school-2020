camelize("background-color");

function camelize(str) {
    let arr = [];
    for (var i = 0; i < str.length; i++) {
      arr[i] = str[i];
    }
    arr.forEach((item, i) => {
        if (item == "-") {
            arr[i] = "";
            arr[i+1] = arr[i+1].toUpperCase();
        }
    });
    str = arr.join('');
    console.log(str);
}
