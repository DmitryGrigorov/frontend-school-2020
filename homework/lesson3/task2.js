function isPalindrom(str){
  
  let mirror = str.toLowerCase().split('').reverse().join('');

  return (str.toLowerCase() === mirror);
}

console.log(isPalindrom('racecar'));
console.log(isPalindrom('Anna'));
console.log(isPalindrom('table'));
console.log(isPalindrom('John'));


/*
    2)
    Дана строка; нужно написать функцию, которая позволяет вернуть значение true,
    если строка является палиндромом, и false — если нет. 
    При этом нужно учитывать пробелы и знаки препинания.
    palindrome('racecar') === true
    palindrome('Anna') === true
    palindrome('table') === false
    palindrome('John') === false
*/