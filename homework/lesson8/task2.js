const someUrl = 'http://echo.jsontest.com/id/qwerty/name/petya';

function request(someUrl){
    return fetch(someUrl)
      .then(response => response.json());
}

request(someUrl)
  .then(data => console.log(data));


// 2
// Переделайте запрос на сервер при помощи метода fetch
//
// const someUrl = 'http://echo.jsontest.com/id/qwerty/name/petya';
//
// старая функция для запросов на сервер:
// function request(url, onloadCallback) {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', url);
//   xhr.send();
//   xhr.onload = function() {
//     onloadCallback(xhr.response);
//   }
// }
//
// старый запрос на сервер:
// request(someUrl, function (response) {
//   console.log(response); // выведет в консоль { id: 'qwerty', name: 'petya' }
// });
//
// запрос на сервер после доработки функции request:
// request(url)
//   .then(data => console.log(data)); // выведет в консоль { id: 'qwerty', name: 'petya' }

// ** ПОДСКАЗКА для задачи №2 метод fetch возвращает промис
// обратите внимание, что после вызова новой функции request в первый же "then" нам попадает уже тело ответа от сервера, а не заголовки ответа