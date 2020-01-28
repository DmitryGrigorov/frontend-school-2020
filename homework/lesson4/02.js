let original = {
    type: 't-shirt',
    price: 10,
    color: {
        red:'red',
        blue:'blue',
        black:'black'
    }
};

function deepClone(original) {
    let clone = {};

    for (let prop in original) {
         let key = original[prop];
         if (typeof (key) === 'object' && key !== null) {
             clone[prop] = deepClone(key);
         } else {
             clone[prop] = key;
         }
     }

    return clone;
}

console.log(deepClone(original));