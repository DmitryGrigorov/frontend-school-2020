const dictionary = Object.create(null);

dictionary['hello'] = 'привет';
dictionary['good morning'] = 'доброе утро';

console.log(dictionary['hello']);
console.log(dictionary['good morning']);
console.log(dictionary['toString']);


// 2
// Cоздайте объект dictionary в котором будут содержаться переводы слов с английского на русский
// при отсутсвии перевода в данном объекте - должно возвращаться значение undefined
//
// Например:
// dictionary['hello'] = 'привет';
// dictionary['good morning'] = 'доброе утро';
// console.log(dictionary['hello']); // 'привет'
// console.log(dictionary['good morning']); // 'доброе утро'
// console.log(dictionary['toString']); // undefined
