// создание объектов, добавление/удаление свойств *

// имя свойства из нескольких слов, квадратные скобки

// вычисляемые свойства[], свойства из переменных

// проверка существования свойств

// цикл for..in

// копирование по ссылке

// сравнение объектов

// клонирование и объединение объектов

/**
 * написать функцию filter которая принимает в качестве аргумента любой объект
 * и удаляет в нем свойства, значение которых = undefined
 * 
 * Например: filter({ color: 'black', model: 'mercedes', speed: undefined }); // { color: 'black', model: 'mercedes' }
 * как сделать так, чтобы функция возвращала новый объект?
 * как сделать глубокую фильтрацию свойств объекта?
 * 
 * написать функцию clone, которая принимает в качестве аргумента объект и возвращает новый объект с такой же структурой
 * Например:
 * const nick = { name: 'Nick', age: 20 };
 * const notNick = clone(nick);
 * console.log(nick === notNick); // false
 * 
 * написать функцию clonePart которая принимает первым аргументом объект, а последующими - строки (колличество аргументов не ограничено)
 * clonePart должна вернуть новый объект со свойствами которые совпадают со значениями аргументов функции
 * Например:
 * clonePart({ type: 'success', message: 'text-text', authorId: 'qwerty' }, 'message', 'authorId'); // вернет новый объект => { message: 'text-text', authorId: 'qwerty' }
 */

// методы объекта, cокращённая запись метода *

// Ключевое слово «this» в методах *

// потеря this - ссылочный тип

// преобразование объектов в примитивы string, number, default *

// Конструкторы, создание объектов через "new" *

/**
 * есть объект car = { state: 'stopped', model: 'ГАЗ' }
 * добавьте метод run(); при вызове которого state должно меняться на running
 * добавьте метод stop(); при вызове которого state должно меняться на stopped
 * 
 * есть объект item = { label: 'kettle', power: 1300 }
 * cделать так чтобы при преобразовании объекта к числу возвращалось поле power
 * а при преобразовании к строке - строка вида "kettle - 1300 watt"
 * 
 * написать конструктор Cat которой создает объекты со свойствами name, state, color
 * и методами
 * 
 * cat.meow(); // => выводит в консоль "{{имя_кошки}}: meow"
 * cat.down(); // меняет свойство state на строку 'lying'
 * cat.up(); // меняет свойство state на строку 'standing'
 */