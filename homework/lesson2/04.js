const num = prompt('Введите число между 0 и 3', '');

switch(num) {
    case '0':
        alert('Вы ввели число 0');
        break;
    case '1':
        alert('Вы ввели число 1');
        break;
    case '2':
    case '3':
        alert('Вы ввели число 2, а может и 3');
        break;
}