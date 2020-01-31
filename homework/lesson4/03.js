function deepMerge(...sources) {
    let obj = {}
    for (let source of sources) {
            for (let [key, value] of Object.entries(source)) {
                if (value instanceof Object && key in obj) {
                    value = deepMerge(obj[key], value)
                }
                obj = { ...obj, [key]: value }
            }
    }
    return obj
}

console.log(deepMerge({}, {name: 'Vasya', size: {clothes: 'M', boots: 43}}, {age: 45}, {isAdmin: true}));