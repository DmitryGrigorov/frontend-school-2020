let pali = prompt('Введите строку для проверки');

function isPalindrome (pali) {
    let str = pali.replace(' ', '');
    str = str.toLowerCase(str);

    let str_rev = new Array();
    str_rev =  str.split('');
    str_rev = str_rev.reverse();
    str_rev = str_rev.join('');

    let eq = (str == str_rev) ? true : false;

    return eq;
}

let result = isPalindrome(pali);

if (result == true) {
    document.write('Строка является палиндромом');
} else {
    document.write('Строка не является палиндромом');
}
