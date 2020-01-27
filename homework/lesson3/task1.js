function lwTail(str){
 let input = str.toLowerCase();
 let main = input[0].toUpperCase();
 let result = main + input.substring(1);
 return result;
}

console.log(lwTail("ВАСЯ"));

// Напишите функцию lwTail(str), возвращающую строку str в нижнем регистры все буквы кроме первой. Например:
// lwTail("ВАСЯ") == "Вася";