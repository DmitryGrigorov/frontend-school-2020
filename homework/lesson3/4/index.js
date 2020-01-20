/*
    4)
    Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

    То есть дефисы удаляются, а все слова после них получают заглавную букву.

    Примеры:
    camelize("background-color") == 'backgroundColor';
    camelize("list-style-image") == 'listStyleImage';
    camelize("-webkit-transition") == 'WebkitTransition';

    P.S. Подсказка: используйте split, чтобы разбить строку на массив символов,
    потом переделайте всё как нужно и методом join соедините обратно.
*/

const camelize = (str) => {
    const formated = str.split('-').map(item => {
        return `${item.slice(0, 1).toUpperCase()}${item.slice(1)}`;
    }).join('');
    
    const firstChar = (str[0] === '-') ? formated[0] : formated[0].toLowerCase();
    return `${firstChar}${formated.slice(1)}`;
}