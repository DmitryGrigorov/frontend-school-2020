let fruits = ["Яблоки", "Груша", "Апельсин"];
let shoppingCart = fruits;

shoppingCart.push("Банан");
shoppingCart.push("Манго");

fruits.pop();

document.write(`Длинна массива: ${fruits.length}`);
document.write('Потому что было три элемента массива, потом добавили еще два, потом удалили последний элемент и посчитали его длинну');