/*
    1)
    Напишите код, который будет спрашивать логин с помощью prompt.
    Если посетитель вводит «Админ», то prompt запрашивает пароль,
    если в поле "логин" ничего не введено или нажата клавиша Esc – показать «Отменено»,
    в противном случае отобразить «Я вас не знаю».

    Если введён пароль «Я главный», то выводить «Здравствуйте!»
    Иначе – «Неверный пароль»
    При отмене – «Отменено»


*/
let login = prompt("Ваш логин:");
if(login == "Admin")
{
   let password = prompt("Ваш пароль:");
   if(password) {
      if(password == "Я главный") {
         alert("Здравствуйте!");
        }else {
            alert("Пароль не верный!");
        }
    } else {
    alert("Отменено");
   }
}

/*
    2)
    Какие значения выведет цикл while?

    Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
    Оба цикла выводят alert с одинаковыми значениями или нет?


*/
// префиксный вариант ++i
let i = 0;
while (++i < 5) alert(i); //1 2 3 4 

// постфиксный вариант i++
let j = 0;
while (j++ < 5) alert(j); //1 2 3 4 5
/*
    3)
    Перепишите код, заменив цикл for на while, без изменения поведения цикла.

   

    
*/
for (let i = 0; i < 3; i++) {
    alert( `FOR number ${i}!` );
}

let inc = -1;
while(++inc < 3) alert(`WHILE number ${inc}`);
/*
    4) Перепишите код с использованием одной конструкции switch:

    const number = +prompt('Введите число между 0 и 3', '');

    if (number === 0) {
        alert('Вы ввели число 0');
    }

    if (number === 1) {
        alert('Вы ввели число 1');
    }

    if (number === 2 || number === 3) {
        alert('Вы ввели число 2, а может и 3');
    }
*/
const number = +prompt('Введите число между 0 и 3', '');
switch (number)
{
    case 0:
        alert("Вы ввели 0");
        break;
    case 1:
        alert("Вы ввели 1");
        break;
    case 2||3:
        alert("Вы ввели 2 или 3 хрен вас знает");
        break;
}
/*
    5)
    Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

    function getBackgroundColor(theme) {
        if (theme === 'light') {
            return '#FFF';
        } else {
            return '#000';
        }
    }
*/
function getBackgroundColor(theme) {
   return theme ==='light'? '#FFF' : '#000';
}
alert("Цвет:" + getBackgroundColor('light'));
/**
 * 6) Напишите функцию pow(x,n), которая возвращает x в степени n
 */
function pow(x,n){
    return Math.pow(x,n);
}

alert("X в этой степени: " + pow(+prompt("Введите X:"),+prompt("Введите степень: ")));