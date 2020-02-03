// статические методы и свойства


class Person {
    static information = 'INFO';
}


class Officer extends Person {
    constructor (options) {
        super(options);

        
        this.hasGun = options.hasGun;
        this.hasBadge = options.hasBadge;
    }

    getInfo() {
        console.log(
            this.name,
            this.hasGun,
            this.hasBadge
        )
    }
}

let Bob = new Officer({
    name: 'Bob',]
    hasBadge: true,
    hasGun: true;
})

Bob.getInfo()

console.log(Officer.information)