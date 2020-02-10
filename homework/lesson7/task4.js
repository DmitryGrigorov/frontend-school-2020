class Human{
  constructor(name, age, height){
    this.name = name;
    this.age = age;
    this.height = height;
  }
  getInfo(){
    return `${this.name} ${this.age} ${this.height}`;
  }
  get firstName(){
    return this.name;
  }
  set firstName(newName){
    return this.name = newName;
  }
}

let humans = [new Human('Коля',23,180),
new Human('Даша', 19, 170),
new Human('Ваня', 18, 192),
new Human('Петя', 45, 178),
new Human('Вася', 34, 197),
new Human('Джони', 40, 168),
new Human('Катя', 37, 160),
new Human('Петя', 29, 200),
new Human('Соня', 21, 172),
new Human('Женя', 25, 175)];

console.log(humans);
console.log(humans[1].getInfo());
console.log(humans[3].firstName);
humans[3].firstName = 'Петр';
console.log(humans[3].firstName);
console.log(humans[3]);

function sortByName(arr) {
 arr.sort((a, b) => a.name > b.name? 1:-1);
}
sortByName(humans);
console.log(humans);

function sortByHeight(arr) {
  arr.sort((a, b) => a.height < b.height? 1:-1);
 }
 sortByHeight(humans);
 console.log(humans);
/*
   4)
   — Опишите класс Human:  для создания объектов со свойствами name,
   age и height конструктор класса должен принимать одноимённые аргументы.
   — Создайте массив humans из десяти объектов на основе класса Human:
   «Коля», 23, 180,
   «Даша», 19, 170,
   «Ваня», 18, 192,
   «Петя», 45, 178,
   «Вася», 34, 197,
   «Джони», 40, 168,
   «Катя», 37, 160,
   «Петя», 29, 200,
   «Соня», 21, 172,
   «Женя», 25, 175
   — Укажите классу метод getInfo (он должен возвращать строки вида «Коля, 23, 180»),
   — Укажите метод геттер firstname ( он должен возвращать свойство name объекта)
   — Укажите метод сеттер firstname ( он должен настраивать свойство name объекта)
   — Напишите функции сортировки sortByName и sortByHeight,
     которые смогут отсортировать массив по именам (в алфавитном порядке)
     или росту (по убыванию роста). Вызовите только функцию сортировки по росту.
*/