// console.log(1);
//
// setTimeout(function() {
//     console.log(2);
// }, 1000);
//
// console.log(3);

// let callStack = [
//     console.log(1),
//     setTimeout(),
//     console.log(3)
// ]
///////////////////////////////
// function getRequest(url, successCallback, failCallback) {
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.send();
//     xhr.responseType = 'json';
//     xhr.onload = function() {
//         successCallback && successCallback(xhr.response);
//         const json = JSON.parse(xhr.promise);
//         console.log(json);
//     }
//     xhr.onerror = function() {
//         failCallback && failCallback();
//         console.log('error');
//     }
// }
// function getRequestPromise(url) {
//     const promise = new Promise(function(resolve, reject) {
//         let xhr = new XMLHttpRequest();
//         xhr.open('GET', url);
//         xhr.send();
//         xhr.responseType = 'json';
//         xhr.onload = function() {
//             resolve(xhr.response);
//         }
//         xhr.onerror = function() {
//             reject(xhr.response);
//         }
//     });
//     return promise;
// }
//
// const url1 = 'http://echo.jsontest.com/id/qwerty1';
// const url2 = 'http://echo.jsontest.com/id/qwerty2';
// const urlSettings = 'http://echo.jsontest.com/id/qwerty2';
// getRequest(url1, function(user) {
//     console.log(response);
// });
// const urlUser = 'http://echo.jsontest.com/id/qwerty1';
// const urlSettings = 'http://echo.jsontest.com/id/qwerty1';
//
// getRequestPromise(urlUser)
//     .then(function(userResponse) {
//         throw new Error('asdf');
//         return getRequestPromise(urlSettings);
//     })
//     .then(function(resultThen1) {
//         return getRequestPromise(urlSettings);
//     })
//     .then(function(resultThen2) {
//         return getRequestPromise(urlSettings);
//     })
//     .catch(function(error) {
//         console.log('error: ', error);
//     })
//     .finally(function() {
//         return Promise.resolve('qwe');
//     })
//
// const promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve(1234);
//     }, 4000);
// });
//
//
//
//
// class Application  {
//     user = null;
//     settings = null;
//
//     constructor() {
//         this.getData();
//     }
//
//     getData() {
//       let userResponse;
//       let settingsResponse;
//       this.getUser()
//           .then(userData) => {
//               userResponse = userData
//               return userData;
//           }
//           .then(userData) => {
//               return getSettings(userData.id);
//           }
//           .then(settingsData) => {
//               settingsResponse = settingsData;
//               this.init(userResponse, settingsResponse);
//           }
//     }
//
//     getUser() {
//         const urlUser = 'http://echo.jsontest.com/id/qwerty1';
//         return getRequestPromise(urlUser);
//     },
//     getSettings() {
//       const urlSettings = 'http://echo.jsontest.com/id/qwerty1';
//       return urlSettings;
//     },
//     init(userData, settingsData) {
//         this.user = userData;
//         this.settings = settingsData;
//         this.render();
//     }
//     render() {
//       console.log(this.user + ' : ' + this.getSettings.id);
//     }
// }
//
// const app = new App();



// promise
//     .then(function result() {
//         console.log('1', result);
//     })
//     .then(function result() {
//         console.log('2', result);
//     })
//     .then(function result() {
//         console.log('3', result);
//     })





// async function foo() {
//     console.log('foo start');
//     const user = await new Promise((resolve) => {
//         setTimeout(() => resolve('hello'), 3000);
//     });
//     console.log('foo end');
// }
// foo();




// fetch(url)
//   .then((response) => {
//       return response.json();
//   })
//   .then((jsonData) => {
//       console.log(jsonData);
//   })

Promise.resolve();
Promise.reject();

try {
  Promise.all([
    new Promise((rsolve) => rsolve(12)),
    new Promise((rsolve) => rsolve(3333)),
  ]).then(data) => {
      console.log(data);
  });
} catch (error) {

}
