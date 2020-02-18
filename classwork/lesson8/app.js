// понятие асинхронного выполнения кода
// console.log(1);
// setTimeout(function() {
//     console.log(2);
// }, 1000);
// console.log(3);



// XMLHttpRequest

// function getRequest(url, successCallback, failCallback) {
//     let xhr = new XMLHttpRequest();
//     // GET, POST, PUT, DELETE, OPTIONS
//     xhr.open('GET', url);
//     xhr.send();
//     xhr.responseType = 'json';

//     xhr.onload = function() {
//         successCallback && successCallback(xhr.response);
//     }

//     xhr.onerror = function() {
//         failCallback && failCallback();
//     }
// }

// const url = 'http://echo.jsontest.com/id/qwerty1/name/vasya';
// const urlSettings = 'http://echo.jsontest.com/id/qwerty22222';

// getRequest(url, function(user) {
//     getRequest(urlSettings, function(settings) {

//     });
// });

function getRequestPromise(url) {
    const promise = new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        // GET, POST, PUT, DELETE, OPTIONS
        xhr.open('GET', url);
        xhr.send();
        xhr.responseType = 'json';

        xhr.onload = function() {
            resolve(xhr.response);
        }

        xhr.onerror = function() {
            reject();
        }
    });

    return promise;
}

// class Application {
//     user = null;
//     settings = null;

//     constructor() {
//         this.getData();
//     }

    // getData() {
    //     let userResponse;
    //     let settingsResponse;

    //     this.getUser()
    //         .then((userData) => {
    //             userResponse = userData

    //             return userData;
    //         })
    //         .then((userData) => {
    //             return this.getSettings(userData.id);
    //         })
    //         .then((settingsData) => {
    //             settingsResponse = settingsData;

    //             this.init(userResponse, settingsResponse);
    //         });
    // }

//     getUser() {
//         const urlUser = 'http://echo.jsontest.com/id/qwerty1/name/vasya';

//         return getRequestPromise(urlUser);
//     }

//     getSettings(userId) {
//         const urlSettings = 'http://echo.jsontest.com/id/qwerty22222';

//         return getRequestPromise(urlSettings);
//     }

//     init(userData, settingsData) {
//         this.user = userData;
//         this.settings = settingsData;

//         this.render();
//     }

//     render() {
//         console.log(this.user.name + ' : ' + this.settings.id);
//     }
// };

// const app = new Application();


//get USER
// getRequestPromise(urlUser)
//     .then(function(userResponse) {
//         // get SETTINGS
//         return getRequestPromise(urlSettings);
//     })
//     .then(function(resultSettings) {
//         return 241234;
//     })
//     .then(null, function() {

//     })
//     .catch(function(error) {
//         console.log('error: ', error);
//     })
//     .finally(function() {
//         // return Promise.resolve('qwe');
//     })
//     .then(function(result) {
//         console.log('result then: ', result);
//     });

// console.log('start');
// const promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve('result');
//     }, 4000);
// });

// promise
//     .then(function(result) {
//         console.log('1 ', result);
//     })
//     .then(function(result) {
//         console.log('2 ', result);
//     })
//     .then(function(result) {
//         console.log('3 ', result);
//     });
// callback hell
// http://echo.jsontest.com/id/qwerty1
// понятие Promise
// решение callback hell
// синтакчисеский сахар async await
// fetch


// async function foo() {
//     try {
//         const user = await getRequestPromise('qerewq');
//         const settings = await getRequestPromise('qerewq');

//         init();
//     } catch (error) {
//         console.log(error);
//     }
// }

// foo();

// fetch(url)
//     .then((response) => {
//         return response.json();
//     })
//     .then((jsonData) => {
//         console.log(jsonData);
//     });

// try {
//     Promise.all([
//         new Promise((rsolve) => rsolve(12)),
//         new Promise((rsolve) => rsolve(3333))
//     ]).then((data) => {
//         console.log(data);
//     });
// } catch (error) {

// }


//new
//  let a = 7;

//  setTimeout(()=>{
//      a=99; //операция присвоения через 2с
//  },2000)
//  //как сделать чтобы выводилось новое значение?
//  console.log(a); //7

 let a = 7;



 let promise = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve(a=99); 
    },2000);
 });

 promise.then(function(){console.log(a)});

