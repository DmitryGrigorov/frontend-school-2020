let name = prompt('Введите наименовение товара','');
let qty = prompt('Введите количество товара товара','');
let price = {
    apple: 100,
    pear: 500,
    melon: 400,
    lemon: undefined
};


function calculate(name,qty,price) {
    if (name in price) {
        if (price[name] !== undefined) {
            return price[name] * qty;
    }
        else {
            return 'Извините, товар закончился';
        }
    } else {
        return 'Такого товара у нас еще нет!';
    }
}

console.log(calculate(name,qty,price));
