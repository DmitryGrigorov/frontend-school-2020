let string = prompt("Введите любое слово в любом регистре");

function lwTail(str) {
    let tempString = str.toLowerCase();
    return tempString[0].toUpperCase() + tempString.slice(1);
}

let result = lwTail(string);

document.write(result);