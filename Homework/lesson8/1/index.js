const delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  });
}

delay(1000)
  .then(() => console.log('delay callback 1'))
  .then(() => delay(2000))
  .then(() => console.log('delay callback 2'))
  .then(() => delay(3000))
  .then(() => console.log('delay callback 3'));
