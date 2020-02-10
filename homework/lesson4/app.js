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

//Ответ :)

/*
function calculate(name, amount, object) {
  for (key in object) {
    if (name === key) {
      if (object[key] === undefined) {
        alert(`Извините, товар ${[key]} закончился!`);
      } else {
        alert(
          `Общая стоимость ${amount} товаров ${[name]} составила ${object[
            name
          ] * amount}`
        );
      }
      return;
    }
  }
  alert(`Такого товара ${name} у вас ещё нет`);
  let answer = confirm(`Хотите добавить ${name} в наименование товаров?`);
  if (answer) {
    object[name] = "potato";
    for (let prop in object) {
      alert(prop);
    }
  } else alert("хорошо");
}

calculate("potato", 1, { apple: 100, pear: 500, melon: 400, lemon: undefined });
//calculate("lemon", 2, { apple: 100, pear: 500, melon: 400, lemon: undefined });
//calculate("pear", 4, { apple: 100, pear: 500, melon: 400, lemon: undefined });
*/

/*
// 2)
// напишите функцию deepClone глубокого клонирования объекта, которая создаёт глубокую копию объекта
// * - глубокая копия - это значит, что если внутри объекта есть свойства объекты - их нужно тоже склонировать
//
// Например: let someObj = { name: 'Petya', metrics: { weight: 80, height: 180 } }; // есть такой объект
// let cloneSomeObj = deepClone(someObj); // создаем его копию
// cloneSomeObj -> { name: 'Petya', metrics: { weight: 80, height: 180 } }; // копия повторяет структуру первоначального объекта
// cloneSomeObj === someObj // false при сравнении копия и первоначальный объект не равны
// cloneSomeObj.metrics === someObj.metrics // false при сравнении вложенного объекта они тоже не равны
*/

//Ответ
/*
let deepClone = n => {
  let sj = {};
  for (let key in n) {
    typeof n[key] === "object" ? deepClone(n[key]) : (sj[key] = n[key]);
  }
  return sj;
};
let someObj = { name: "Petya", metrics: { weight: 80, height: 180 } };
//let yy = (deepClone(someObj).metrics === someObj.metrics)?true:false; //false
//let yy = (deepClone(someObj) === someObj)?true:false; //false 
*/

// 3)
// напишите функцию merge для объединения объектов НЕ используя встроеный метод Object.assign
// колличество передаваемых аргументов в функцию НЕ ограничено (вложенные объекты копируются по ссылке)
//
// Например:
// let unionObject = merge({}, { name: 'Vasya' }, { age: 45 }, { isAdmin: true });
// unionObject -> { name: 'Vasya', age: 45, isAdmin: true }

// 4)
// Есть объект dog = { name: 'Bobik' };
// "научите" данный объект подавать голос, например он должен выводить в консоль строку "{{Здесь имя собаки}}: bark";
// Например:
// dog.bark(); // => "Bobik: bark"
//
// попробуйте "научить" собаку подавать голос столько раз сколько нам нужно
// Например:
// dog.bark(4); // => "Bobik: bark bark bark bark"
// dog.bark(); // => "Bobik: bark" если аргумент не передать - метод все равно сработает

//Ответ

/*let dog = {
  name: "Bobik:",
  bark: function(howl, weig) {
    let voice;
    let voiceX;
    if (weig > 2) {
      voiceX = "- BARK";
      voice = voiceX;
    } else voiceX = "- bark";
    voice = voiceX;

    for (i = 1; i < howl; i++) {
      voice = voice + voiceX;
    }
    return voice;
  }
};
console.log(`${dog.name}${dog.bark(6, 3)}`);
console.log(`${dog.name}${dog.bark(0, 1)}`);
*/

/*
// 5)
// Есть объект товара item = { label: 'phone', price: 500, currency: '$' };
// сделайте так, чтобы при преобразовании данного объекта
// к строке возвращалась строка => "500$",
// а при преобразовании к числе возвращалось просто 500
// обратите внимание, что 500 и $ это значения полей самого объекта (если их поменять то это будет учитываться при последующих преобразованиях)
*/

// Ответ:
/*
let item = {
  label: "phone",
  price: 500,
  currency: "$",
  toString: function() {
    return this.price + this.currency;
  },
  valueOf: function() {
    return this.price;
  }
};
console.log(String(item));
console.log(Number(item));
*/

// 6)
// напишите конструктор Dog который создает объект со свойствами name, age, breed, weight, height, position, status
// и методами:
// dog.bark() => Выводит в консоль '{{имя собаки}}: bark';
// dog.place() => Меняет свойство position на строку 'place';
// dog.come() => Меняет свойство position на строку 'here';
// dog.goOut() => Меняет свойство position на строку 'go out';
// dog.sit() => Меняет свойство status на строку 'sitting';
// dog.stand() => Меняет свойство status на строку 'standing';
// dog.down() => Меняет свойство status на строку 'lying';
//
// создайте массив с 25 объектами Dog
