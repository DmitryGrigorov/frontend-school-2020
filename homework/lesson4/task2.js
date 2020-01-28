let someObj = { 
  name: 'Petya', 
  metrics: { 
    weight: 80, 
    height: 180, 
  },
};

// 1-ый способ
let cloneSomeObj = deepClone(someObj);

function deepClone(someObj) {
    let cloneSomeObj = {};

    for (let key in someObj) {
      const value = someObj[key];

      if(typeof(value) === "object" && value !== null){
        cloneSomeObj[key] = deepClone(value);
      } else if (value !== undefined){
        cloneSomeObj[key]=value;
      }
    }

    return cloneSomeObj;
}

// 2-ой способ
// let cloneSomeObj = Object.assign({}, someObj);

console.log(someObj); // объект

console.log(cloneSomeObj); // копия повторяет структуру первоначального объекта

console.log(cloneSomeObj === someObj); // false при сравнении копия и первоначальный объект не равны

console.log(cloneSomeObj === someObj); // false при сравнении вложенного объекта они тоже не равны

// напишите функцию deepClone глубокого клонирования объекта, которая создаёт глубокую копию объекта
// * - глубокая копия - это значит, что если внутри объекта есть свойства объекты - их нужно тоже склонировать
//
// Например: let someObj = { name: 'Petya', metrics: { weight: 80, height: 180 } }; // есть такой объект
// let cloneSomeObj = deepClone(someObj); // создаем его копию
// cloneSomeObj -> { name: 'Petya', metrics: { weight: 80, height: 180 } }; // копия повторяет структуру первоначального объекта
// cloneSomeObj === someObj // false при сравнении копия и первоначальный объект не равны
// cloneSomeObj.metrics === someObj.metrics // false при сравнении вложенного объекта они тоже не равны



