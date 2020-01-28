let first = {
  name: "Vasya",
};

let second = {
  age: 45,
};

let third = {
  isAdmin: true,
};

function merge(...obj){
  let a = {};

  for(let i = 0; i < obj.length; i++) {
    a = {...a, ...obj[i]};
  }
  return a;
}

let unionObject = merge(first, second, third);

console.log(unionObject);


// 3)
// напишите функцию merge для объединения объектов НЕ используя встроеный метод Object.assign
// колличество передаваемых аргументов в функцию НЕ ограничено (вложенные объекты копируются по ссылке)
// 
// Например:
// let unionObject = merge({}, { name: 'Vasya' }, { age: 45 }, { isAdmin: true });
// unionObject -> { name: 'Vasya', age: 45, isAdmin: true }