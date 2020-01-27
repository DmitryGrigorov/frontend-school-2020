let arr = ["HTML", "JavaScript", "CSS"];

const copySorted = arr => arr.slice().sort();

let sorted = copySorted(arr);

console.log(sorted);
console.log(arr);


/*
    5)
    У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
    Создайте функцию copySorted(arr), которая будет возвращать такую копию.
    let arr = ["HTML", "JavaScript", "CSS"];
    let sorted = copySorted(arr);
    alert( sorted ); // CSS, HTML, JavaScript
    alert( arr ); // HTML, JavaScript, CSS (без изменений)
*/