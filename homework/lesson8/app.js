// 1
// перепишите с использованием промисов
// function delay(time, callback) {
//     setTimeout(callback, time);
// }

// function delay(time, callback) {
//     return new Promise(resolve => setTimeout(() => resolve(callback), time))
// }

// 2
// перепишите с использованием fetch
// function request(url, successCallback, failCallback) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.responseType('json');
//
//     xhr.onload = function() {
//         successCallback(xhr.response);
//     }
//
//     xhr.onerror = function() {
//         failCallback && failCallback();
//     }
//
//     xhr.send();
// }
//
// function getData(callback) {
//     const targetUrl = 'http://echo.jsontest.com/id/qwerty/name/petya';
//     request(targetUrl, function(response) {
//         callback(response);
//     });
// }
//
// getData(console.log.bind(console));

// fetch('http://echo.jsontest.com/id/qwerty/name/petya')
//     .then(response => response.json())
//     .then(user => console.log(user.id + ': ' + user.name));

// 3
// Есть массив (колличество элементов может быть любым):
// let urls = [
//     'http://echo.jsontest.com/id/qwerty1/name/petya',
//     'http://echo.jsontest.com/id/qwerty2/name/vasya',
//     'http://echo.jsontest.com/id/qwerty3/name/kolya'
// ];
// загрузите данные со всех урлов параллельно

// let urls = [
//     'http://echo.jsontest.com/id/qwerty1/name/petya',
//     'http://echo.jsontest.com/id/qwerty2/name/vasya',
//     'http://echo.jsontest.com/id/qwerty3/name/kolya'
// ];
//
// let request = urls.map(url => fetch(url));
// Promise.all(request)
//     .then(responses => Promise.all(responses.map(r => r.json())))
//     .then(users => users.forEach(user => console.log(user.id + ': ' + user.name)));

