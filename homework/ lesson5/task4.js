function add(a,b){
  if(b !== undefined){
      return a + b;
  }
  return function(b){
      return a + b;
  }
};

console.log(add(2)(5)); //7

/*
  4) Напишите функцию add, которая работает, как на примере:
  add(2, 5) // 7
  add(2)(5) // 7
*/