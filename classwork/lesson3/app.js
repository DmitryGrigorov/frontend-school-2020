// Strings — Строки

// let str1 = 'Some \' string';
// let str2 = "Some \u00A9 string";

// let a = 234;
// let b = 323;
// let str3 = `${a} + ${b} =

// ${a + b}`;


// const AAA = 'ABCsdfjsldfjlsd';

// console.log(AAA[0]);
// console.log('charAt: ', AAA.charAt(1))

// AAA.split('').forEach((el, idx) => {
//     console.log({ el, idx })
// });


// const str = AAA[0] + AAA[1] + AAA[2];

// console.log(str);

// toUpperCase
// console.log(AAA.toUpperCase());

// toLowerCase
// console.log(AAA.toLowerCase());

// console.log(AAA[0].toLowerCase());

// const str12 = "Widget with id";

// console.log(str12.indexOf("widget"));

// console.log(str12.includes('widget'))

// console.log(str12.startsWith('Widget'));

// console.log(str12.endsWith('id'));

// const repeatedStr = 'A';

// console.log(repeatedStr.repeat(4));

// Массивы

// let empty = [];
// let primes = [1, 2,3,4,5];
// let mix = [12, true, "a", {}];

// let sumArray = [primes, primes[4], [5, , 5, 5] ];

// console.log(sumArray);

// let arr = new Array(5);

// console.log(arr.fill(0));

// let str = '12345';

// console.log(str.split(''))

// let numbers = [1,2,3,4,5];

// console.log(numbers.join('').split('').reverse().join(''));

// console.log(numbers.reverse());

// function isPalindrome(str) {
//     return str === str.split('').reverse().join('');
// }

// console.log(isPalindrome('asdds'));
// console.log(isPalindrome('racecar'));

// anna
// racecar


// const arr1 = [1, 2, 3];

// const arr2 = [4, 5, 6];

// console.log([...arr1, ...arr2]); // ES6
// console.log(arr1.concat(arr2));

// const arr = [];

// console.log(arr);

// arr.push(1 , 2);

// console.log(arr); // [1, 2]

// console.log(arr.pop()) // 2

// console.log(arr) // [1]


// let arr2 = [];

// arr2.unshift(1); // [1]
// arr2.unshift(22); // [22, 1]

// arr2.push(5);

// console.log(arr2); // [22, 1, 5]

// arr2.pop(); // [22, 1]

// console.log(arr2);

// arr2.shift(); // 22

// console.log(arr2) // 1

// forEach, map

const order = [1, 2, 3, 4, 5];

const forEach = order.forEach((el, index, arr) => {
    console.log({
        el,
        index,
        arr
    });
});

console.log(forEach); // undefined

let map = order.map((el, index, arr) => {
    console.log({
        el,
        index,
        arr
    })

    return el + 2;
});

// console.log(map) // [3, 4, 5, 6, 7]

// console.log(map.slice(0, 4))

const slice4 = map.slice(0, 4);

slice4.forEach(el => {
    console.log(el + ' $')
})

console.log(slice4.find((el) => el % 2));

