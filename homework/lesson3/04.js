let str = prompt('Введите строку для преобразования');

function camelize(str) {
    let fullArr = str.split('-');
    let firstPart = fullArr[0];
    fullArr.shift();
    newArr = [];
    fullArr.forEach(function (item) {
        newArr.push(item.charAt(0).toUpperCase()+item.slice(1));
        }
    );
    return firstPart+newArr.join('');
}

console.log(camelize(str));



