1 /*
let questionAdmin = prompt('Введите свой логин', '');

        if (questionAdmin == 'Админ') {

            let questionPasswrd = prompt('Введите пароль', '');

            if(questionPasswrd == 'Я Главный!'){
                alert('Здравствуйте!');
            } else if(questionPasswrd == null || questionPasswrd == ''){
                alert('Отменено');
            } else alert('Неверный пароль');

        }else if(questionAdmin==null || questionAdmin == ''){
            alert('Отменено');
        } else alert('Я вас не знаю');
*/

2 /*постфиксный вариант i++*/
// let i = 0;
// while (i++ < 5) alert( i ); 
// // Цикл выведет следующие значения: 1,2,3,4,5

// /*префиксный вариант ++i*/
// // let i = 0;
// // while (++i < 5) alert( i ); 
// // Цикл выведет следующие значения: 1,2,3,4
// // <!-- Оба цикла выводят alert с одинаковыми значениями или нет?  -->
// // <!-- Нет -->

3 /*
let i = 0;
while(i < 3){
    alert(`number ${i}!`)
    i++;
}
*/

4 /*
 const number = +prompt('Введите число между 0 и 3', '');
        switch(number){
            case 0:
                alert('Вы ввели число 0'); 
            break;
            case 1: 
                alert('Вы ввели число 1');
            break;
            case 2: 
            case 3: 
                alert('Вы ввели число 2, а может и 3');
            break;
        }
*/

5 /*
 function getBackgroundColor(theme) {
            return(theme === 'light')? ('#FFF'):('#000');
        }
*/

6 /*
  function pow(x,n){
            return x**n;
         }
         let x = prompt("x?"," ");
         let n= prompt("n?"," ");
         if (n>=1){
            alert(pow(x,n));
         } else alert("Данная степень не поддерживается");
*/
