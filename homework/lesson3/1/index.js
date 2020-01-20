/*
    1)
    Напишите функцию lwTail(str), возвращающую строку str в нижнем регистры все буквы кроме первой. Например:

    lwTail("ВАСЯ") == "Вася";
*/

const lwTail = (str) => `${str.slice(0, 1)}${str.slice(1).toLowerCase()}`;