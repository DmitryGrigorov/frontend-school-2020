// //1 вариант
// function camelize(str){
//   return str.split('-')
//   .map(function upper(text,index){
//     if(index === 0){
//       return text;
//     }else return text[0].toUpperCase()+text.slice(1)
//     }).join('');
//   }


const camelize = str => str.split('-').map((text,index) => index === 0? text:text[0].toUpperCase()+text.slice(1)).join('');
  

  console.log(camelize("background-color"));
  console.log(camelize("list-style-image"));
  console.log(camelize("-webkit-transition"));

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