function greeting() {
  console.log('Hey I am module');
}

function func2() {
  console.log('func 2')
}

module.exports = {
  func2,
  greeting
};