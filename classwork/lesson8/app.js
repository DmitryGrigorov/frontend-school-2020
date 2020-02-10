// понятие асинхронного выполнения кода

///////setTimeout


// // XMLHttpRequest
// function getRequest(url, successCallback, failCallback) {

// let xhr = new XMLHttpRequest();
// //GET, POST, PUT, DELETE, OPIONS

// xhr.open('GET',url);//конфигурирует запрос

// xhr.send();//отправляет запрос
// xhr.responseType = 'json';

// xhr.onload = function() {
//     successCallback && successCallback(xhr.response);
// }

// xhr.onerror = function() {
//     failCallback && failCallback();
//     }
// }
// const url = 'http://echo.jsontest.com/id/qwerty1/name/vasya';
// const urlSettings = "name"


// // getRequest(url,function(response) {
// //     getRequest(urlSettings, function(settings))
// // }
// // }

// // callback hell
// // http://echo.jsontest.com/id/qwerty1
// // понятие промисов
// // console.log('start')
// // const promise = new Promise(function(resolve,reject) {
// //     setTimeout(function() {
// //         resolve(1234);
// //     },4000)
// // });

// // promise
// //     .then(function(result){
// //     console.log(result);

// // })
// //     .then(function(result){
// //     console.log('1',result);
// //     })

// function getRequestPromise (url) {

//     const promise = new Promise(function (resolve,reject) {
//     xhr.open('GET',url);//конфигурирует запрос
    
//     xhr.send();//отправляет запрос
//     xhr.responseType = 'json';
//     xhr.onload = function() {
//         resolve(xhr.response);
//     }
    
//     xhr.onerror = function() {
        
//         }
//     }

//     const url = 'http://echo.jsontest.com/id/qwerty1/name/vasya';
//     const urlSettings = 'http://echo.jsontest.com/id/qwer';
    

    //GET, POST, PUT, DELETE, OPIONS
    
    
    

// решение callback hell


// синтакчисеский сахар async await

// const application = {
//     user: null,
//     settings:null,
//     getUser() {
//         //
//     },
//     getSettings() {
//         //
//     },

//     init(userData,settingsData) {
//         this.user = userData;
//         this.settings = settingsData;
//     }
// };
// fetch
// console.log('foo start1');
// async function foo() {
//     console.log('foo start2');
//     const user = await new Promise((resolve) => {
//         setTimeout(() => resolve('hello'), 3000);
//     });
//     console.log('foo end');
// }

// function foo(){
//     return Promise.resolve();
// } 
// console.log('foo end');


// const xhr = new XMLHttpRequest ();

// fetch(url)
//     .then ((response) => {
//     return response.json();
//     });

//     .then  ((jsonData) => {
//         console.log(jsonData);
//     });