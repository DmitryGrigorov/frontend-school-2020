const prices = {
  apple: 100,
  pear: 500,
  melon: 400,
  lemon: undefined,
};

function calculate(name, value, prices){
  if(!prices.hasOwnProperty(name)){
    alert(name+": " + "Такого товара у нас еще нет!");
    return;
  } 
  if (!prices[name]){
    alert(name+": " + "Извините, товар закончился!");
    return;
  }
   alert("totalPrice " + name + ": " + value*prices[name]);
 }


calculate('potato', 1, { apple: 100, pear: 500, melon: 400, lemon: undefined });

calculate('melon', 2, { apple: 100, pear: 500, melon: undefined, lemon: 800});

calculate('pear', 4, { apple: 100, pear: 500, melon: 400, lemon: undefined });

// 1)
// напишите функцию calculate которая принимает 3 аргумента:
// 1 - наименование товара,
// 1 - количество товаров,
// 2 - объект с ценами, например: prices = { apple: 100, pear: 500, melon: 400, lemon: undefined };
// Если при вызове функции передать товар которого НЕТ в прайс листе, она должна вернуть "Такого товара у нас еще нет!";
// Если при вызове функции передать товар который есть в прайс листе но его цена = undefined, то функция должна вернуть "Извините, товар закончился!"
// Если при вызове функции передать товар который есть в прайс листе и у него есть цена, то посчитать итоговую цену и вернуть её
// Например:
// calculate('potato', 1, { apple: 100, pear: 500, melon: 400, lemon: undefined }); // Такого товара у нас еще нет!
// calculate('lemon', 2, { apple: 100, pear: 500, melon: 400, lemon: undefined }); // Извините, товар закончился!
// calculate('pear', 4, { apple: 100, pear: 500, melon: 400, lemon: undefined }); // 2000