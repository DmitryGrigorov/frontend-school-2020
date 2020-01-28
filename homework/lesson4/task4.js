const sayBark = () => "bark ";

let dog = { 
  name: 'Bobik',
  bark: function(count){
    if (count > 0){
      return this.name + ": " + sayBark().repeat(count);
    } else return this.name + ": " + sayBark();
  },
};

console.log(sayBark());
console.log(dog.bark());


// "научите" данный объект подавать голос, например он должен выводить в консоль строку "{{Здесь имя собаки}}: bark";
// Например:
// dog.bark(); // => "Bobik: bark"
//
// попробуйте "научить" собаку подавать голос столько раз сколько нам нужно
// Например:
// dog.bark(4); // => "Bobik: bark bark bark bark"
// dog.bark(); // => "Bobik: bark" если аргумент не передать - метод все равно сработает