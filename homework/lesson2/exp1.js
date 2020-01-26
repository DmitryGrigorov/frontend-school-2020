//console.log ('Привет от кекса')
//document.write ("Привет от кекса")

let login = prompt ("Введите пожалуйста свой логин")
if (!login || login.trim() === "")
{
    alert ("Отменено")
}
else if (login === "Админ")
{
    let password = prompt ("Введите пожалуйста пароль")
    if (!password || password.trim() === "")
    {
        alert ("Отменено")
    }
    else if (password !== "Я главный")
    {
        alert ("Неверный пароль")
    }
    else if (password === "Я главный")
    {
        alert ("Здравствуйте!")
    }
}
else if (login !== "Админ") 
{
    alert ("Я вас не знаю")
}



















