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

function calculate(product, weight, list)
{
	if(product in list)
	{
		if(list[product]=== undefined)
			return "Извините, товар закончился!";
		else
		{
			return list[product]*weight;
		}
	}
	else
		return "Такого товара у нас еще нет!";
}
console.log(calculate('apple', 3, { apple: 100, pear: 500, melon: 400, lemon: undefined }));
// 2)
// напишите функцию deepClone глубокого клонирования объекта, которая создаёт глубокую копию объекта
// * - глубокая копия - это значит, что если внутри объекта есть свойства объекты - их нужно тоже склонировать
//
// Например: let someObj = { name: 'Petya', metrics: { weight: 80, height: 180 } }; // есть такой объект
// let cloneSomeObj = deepClone(someObj); // создаем его копию
// cloneSomeObj -> { name: 'Petya', metrics: { weight: 80, height: 180 } }; // копия повторяет структуру первоначального объекта
// cloneSomeObj === someObj // false при сравнении копия и первоначальный объект не равны
// cloneSomeObj.metrics === someObj.metrics // false при сравнении вложенного объекта они тоже не равны

	function deepClone(obj)
	{
		let clonedObj={};
		for(prop in obj)
		{
			const val = obj[prop];
			if(typeof(obj[prop]) ==='object' && prop !== null)
			{
				clonedObj[prop] = deepClone(val);
			}
			else if(val !== undefined)
			{
				clonedObj[prop] = val;
			}
		}
		return clonedObj;
	}
	let someObj = { name: 'Petya', metrics: { weight: 80, height: 180 } }
	let cloneSomeObj = deepClone(someObj);
	console.log(cloneSomeObj) ;
// 3)
// напишите функцию merge для объединения объектов НЕ используя встроеный метод Object.assign
// колличество передаваемых аргументов в функцию НЕ ограничено (вложенные объекты копируются по ссылке)
// 
// Например:
// let unionObject = merge({}, { name: 'Vasya' }, { age: 45 }, { isAdmin: true });
// unionObject -> { name: 'Vasya', age: 45, isAdmin: true }

	function merge(obj, ...args)
	{
		for(let key of args)
		obj = {...obj,...key};
			return obj;
	}
	
	console.log(merge({}, { name: 'Vasya' }, { age: 45 }, { isAdmin: true }));
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
	
const dog=
{
	name:"Bobik",
	bark:function(num)
	{
		let barkStr="bark";

		if(arguments.length>0)
		{
			const num = arguments[0];
			for(let i=0;i<num-1;i++)
			{
				barkStr+=" "+"bark";
			}
		}
		console.log(this.name +":"+barkStr);
	},
};
dog.bark();


// 5)
// Есть объект товара item = { label: 'phone', price: 500, currency: '$' };
// сделайте так, чтобы при преобразовании данного объекта
// к строке возвращалась строка => "500$",
// а при преобразовании к числе возвращалось просто 500
// обратите внимание, что 500 и $ это значения полей самого объекта (если их поменять то это будет учитываться при последующих преобразованиях)

 let item = {
     label: 'phone',
     price: 1300,
     currency:'$',
     [Symbol.toPrimitive](type) {
         return type === 'string'
          ? `${this.price}${this.currency} `
          : this.price;
     }
 };

console.log(String(item));
console.log(+item);
console.log('' + item);


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
function Dog(name, age, breed, weight, height, position, status)
{
	this.name = name;
	this.age = age;
	this.breed = breed;
	this.weight = weight;
	this.height = height;
	this.position = position;
	this.status = status;
	this.bark = function()
	{
		console.log('{'+this.name+'}: bark');
	}
	this.place = function()
	{
		this.position = 'place';
	}
	this.come = function()
	{
		this.position ='here';
	}
	this.goOut = function()
	{
		this.position = 'go out';
	}
	this.sit = function()
	{
		this.status = 'sitting'; 
	}
	this.stand = function()
	{
		this.status='standing';
	}
	this.down = function()
	{
		this.status = 'lying';
	}
}
 let myDog = new Dog("dog", "1", "white", "5", "100", "here", "sitting");
 myDog.bark();
 myDog.stand();

 console.log(myDog);
 myDog.down();