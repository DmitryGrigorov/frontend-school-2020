let login = prompt('Введите логин');

if (login === 'Админ') {
    let pass = prompt('Введите пароль');
    if (pass === 'Я главный') {
        alert('Здарвствуйте!')
    }
    else if (pass != 'Я главный') {
        alert('Неверный пароль')
    }
    else {
        alert('Отменено')
    }


} else if (login != 'Админ') {
    alert('Я вас не знаю')
}
 else {
     alert('Отменено')
}