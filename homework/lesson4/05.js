let item = {
    label: 'phone',
    price: 500,
    currency: '$',
    toString() {
        return `${this.price}${this.currency}`;
    },
    valueOf() {
        return this.price;
    }
};

console.log(String(item));
console.log(Number(item));