
/*6) Напишите функцию pow(x,n), которая возвращает x в степени n*/
//решение
//let power = (x,n) => (x**n); alert(power(3,3));

/*3)Перепишите код, заменив цикл for на while, без изменения поведения цикла.
for (let i = 0; i < 3; i++) {alert( `number ${i}!` ); }*/
//решение
/* let i = 0;
while(i <3){
    alert(i);
    i++
} */

//5)Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
/*function getBackgroundColor(theme) {
if (theme === 'light') {
return '#FFF';
} else {
/*6) Напишите функцию pow(x,n), которая возвращает x в степени n*/
//решение
//let power = (x,n) => (x**n); alert(power(3,3));

/*3)Перепишите код, заменив цикл for на while, без изменения поведения цикла.
for (let i = 0; i < 3; i++) {alert( `number ${i}!` ); }*/
//решение
/* let i = 0;
while(i <3){
    alert(i);
    i++
} */

//5)Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
/*function getBackgroundColor(theme) {
if (theme === 'light') {
return '#FFF';
} else {
return '#000';
}}*/ 
//решение
//function getBackgroundColor(theme) {(theme === 'light')?alert ("#FFF"):alert("#000")};

//4) Перепишите код с использованием одной конструкции switch:
/*const number = +prompt('Введите число между 0 и 3', '');
if (number === 0) {
alert('Вы ввели число 0');
}
if (number === 1) {
alert('Вы ввели число 1');
}
if (number === 2 || number === 3) {
alert('Вы ввели число 2, а может и 3');
}*/
//решение
/*const number = +prompt('Введите число между 0 и 3', '');
switch(number){
    case 0:
    alert('Вы ввели число 0');   
    break;
    case 1:
    alert('Вы ввели число 1');   
    break;
    case 2:
    case 3:    
    alert('Вы ввели число 2 или 3');   
    break;
    default:
    alert('нет таких значений');     
}*/

/*2)Какие значения выведет цикл while?
Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
Оба цикла выводят alert с одинаковыми значениями или нет?
префиксный вариант ++i
let i = 0;
while (++i < 5) alert( i ); 
// ответ 1,2,3,4
постфиксный вариант i++
let i = 0;
while (i++ < 5) alert( i );
*/
// ответ 1,2,3,4,5

/*1)
Напишите код, который будет спрашивать логин с помощью prompt.
Если посетитель вводит «Админ», то prompt запрашивает пароль,
если в поле "логин" ничего не введено или нажата клавиша Esc – показать «Отменено»,
в противном случае отобразить «Я вас не знаю».
Если введён пароль «Я главный», то выводить «Здравствуйте!»
Иначе – «Неверный пароль» При отмене – «Отменено»*/
//решение
let adm = "Админ";
let pass = "Я главный";
let admQuest = prompt("Введите логин","login");
 if(admQuest == adm){
    let passQuest = prompt("Введите пароль","password");
    if(passQuest == pass ){ 
      alert("Здравствуйте!"); 
    }
    else if(passQuest = null){
        alert("Отменено");
    }
    else if(passQuest != pass){
    alert("Неверный пароль");
    }
 }
 else if(admQuest==null){
    alert("Отменено");
 }
 else alert("Я вас не знаю");

return '#000';
}}*/ 
