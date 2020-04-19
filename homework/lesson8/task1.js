function delay(n){
return new Promise(function(resolve){

  setTimeout(() => {
    resolve();
  }, n)
})
}

delay(1000)
  .then(() => console.log('delay callback 1'))
  .then(() => delay(2000))
  .then(() => console.log('delay callback 2'))
  .then(() => delay(3000))
  .then(() => console.log('delay callback 3'));

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

// ** ПОДСКАЗКА для задачи №1 обратите внимание, что после вызова delay мы сразу пишем .then, (delay должна вернуть promise)
