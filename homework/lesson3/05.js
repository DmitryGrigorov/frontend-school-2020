let arr = ['HTML', 'JavaScript', 'CSS'];

function copySorted(arr) {
    let sortedArr = arr.slice(0);
    sortedArr.sort();
    return sortedArr;
}

document.writeln(arr);
document.writeln('<br>');
document.writeln(copySorted(arr));