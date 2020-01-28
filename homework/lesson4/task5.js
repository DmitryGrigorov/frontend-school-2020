let item = { 
  label: 'phone', 
  price: 500, 
  currency: '$',

  toString: function(){
    return this.price + this.currency;
  },

  ValueOf: function(){
    return this.price;
  },
};

console.log(item.toString());
console.log(item.ValueOf());



// 5)
// Есть объект товара item = { label: 'phone', price: 500, currency: '$' };
// сделайте так, чтобы при преобразовании данного объекта
// к строке возвращалась строка => "500$",
// а при преобразовании к числе возвращалось просто 500
// обратите внимание, что 500 и $ это значения полей самого объекта (если их поменять то это будет учитываться при последующих преобразованиях)