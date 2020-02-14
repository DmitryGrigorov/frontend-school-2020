let urls = [
      'http://echo.jsontest.com/id/qwerty1/name/petya', 
      'http://echo.jsontest.com/id/qwerty2/name/vasya',
      'http://echo.jsontest.com/id/qwerty3/name/kolya'
  ];
 
  let requests = urls.map(url => fetch(url));

  Promise.all(requests)
    .then(responses => Promise.all(responses.map(user => user.json())))
      .then(data => console.log(data))


// 3*
// Есть массив (колличество элементов может быть любым):
// let urls = [
//     'http://echo.jsontest.com/id/qwerty1/name/petya',
//     'http://echo.jsontest.com/id/qwerty2/name/vasya',
//     'http://echo.jsontest.com/id/qwerty3/name/kolya'
// ];
// загрузите данные со всех урлов параллельно и получите результат в виде массива ответов от сервера [response1, response2, response3]
//
// ** ПОДСКАЗКА для задачи №3 с помощью метода массива .map() -> переделайте массив строк в массив промисов
// во второй задаче есть подстказка как url превращяется в промис