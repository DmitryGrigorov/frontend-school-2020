// 1
// Есть функция "отложенного вызова функции" delay
// function delay(time, callback) {
//     setTimeout(callback, time);
// }
//
// delay(1000, function() {
//   console.log('delay callback 1');
//
//   delay(2000, function() {
//     console.log('delay callback 2');
//
//     delay(3000, function() {
//       console.log('delay callback 3');
//     });
//   });
// });
//
// перепишите её с помощью промисов, чтобы мы могли код выше заменить на:
// delay(1000)
//   .then(() => console.log('delay callback 1'))
//   .then(() => delay(2000))
//   .then(() => console.log('delay callback 2'))
//   .then(() => delay(3000))
//   .then(() => console.log('delay callback 3'));

function delay (time) {
    return delayPromise = new Promise((resolve) => {
        setTimeout(() => resolve(), time);
    });
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//  ** ПОДСКАЗКА для задачи №1 обратите внимание, что после вызова delay мы сразу пишем .then, (delay должна вернуть promise)



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

function request (url) {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then((response) => resolve(response.json()))
        .catch((e) => reject(e));
    });
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// ** ПОДСКАЗКА для задачи №2 метод fetch возвращает промис
// обратите внимание, что после вызова новой функции request в первый же "then" нам попадает уже тело ответа от сервера, а не заголовки ответа


// 3*
// Есть массив (колличество элементов может быть любым):
// let urls = [
//     'http://echo.jsontest.com/id/qwerty1/name/petya',
//     'http://echo.jsontest.com/id/qwerty2/name/vasya',
//     'http://echo.jsontest.com/id/qwerty3/name/kolya'
// ];
// загрузите данные со всех урлов параллельно и получите результат в виде массива ответов от сервера [response1, response2, response3]

let urls = [
    'http://echo.jsontest.com/id/qwerty1/name/petya',
    'http://echo.jsontest.com/id/qwerty2/name/vasya',
    'http://echo.jsontest.com/id/qwerty3/name/kolya'
];

Promise.all(urls.map((url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then((response) => resolve(response.json()))
        .catch((e) => reject(e));
    });
}))
.then((serverData) => console.log(serverData));

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// ** ПОДСКАЗКА для задачи №3 с помощью метода массива .map() -> переделайте массив строк в массив промисов
// во второй задаче есть подстказка как url превращяется в промис

