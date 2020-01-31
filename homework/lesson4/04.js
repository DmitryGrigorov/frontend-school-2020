let howMany = prompt('Сколько собачке гавкать?','')

let dog = {
    name: 'Bobik',
    bark: function (rep) {
        let times = rep;
        let barkVar = 'bark '
        return console.log(`${dog.name}: ${barkVar.repeat(times)}`);
    }
};

dog.bark(howMany);

