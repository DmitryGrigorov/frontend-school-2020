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

/**
 function delay(time) {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => resolve(), time);
    });
    return promise;
}*/

async function delay(time) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(), time)
    });
    await promise; // будет ждать, пока промис не выполнится (*)
}

console.log("Задание №1");
delay(1000)
    .then(() => console.log('delay callback 1'))
    .then(() => delay(2000))
    .then(() => console.log('delay callback 2'))
    .then(() => delay(3000))
    .then(() => console.log('delay callback 3'))
    .then(function () {

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

        console.log("Задание №2");

        async function request(url) {
            let response = await fetch(url);
            let text = await response.text(); // прочитать тело ответа как текст
            let stringText = text.replace('\n', '');
            return stringText;
        }

        const someUrl = 'http://echo.jsontest.com/id/qwerty/name/petya';
        const someUrl2 = 'http://jsonplaceholder.typicode.com/albums/1';

        request(someUrl2)
            .then(data => console.log(data))
            .then(function () {

// 3*
// Есть массив (колличество элементов может быть любым):
// let urls = [
//     'http://echo.jsontest.com/id/qwerty1/name/petya',
//     'http://echo.jsontest.com/id/qwerty2/name/vasya',
//     'http://echo.jsontest.com/id/qwerty3/name/kolya'
// ];
// загрузите данные со всех урлов параллельно и получите результат в виде массива ответов от сервера [response1, response2, response3]

                console.log("Задание №3");
                let urls = [
                    'http://jsonplaceholder.typicode.com/albums/1',
                    'http://jsonplaceholder.typicode.com/albums/2',
                    'http://jsonplaceholder.typicode.com/albums/3'
                ];
                // for (let a = 1; a<500;a++)
                //     urls.push('http://jsonplaceholder.typicode.com/photos/'+a);

                let mass = [];
                Promise.all(urls.map(url => {
                    return fetch(url).then(resp => resp.text());
                }))
                    .then(m => {
                        mass = m;
                        console.log(mass)
                    });

// ** ПОДСКАЗКА для задачи №3 с помощью метода массива .map() -> переделайте массив строк в массив промисов
// во второй задаче есть подстказка как url превращяется в промис


            }); //Конец второго задания

    }); //Конец третьего задания