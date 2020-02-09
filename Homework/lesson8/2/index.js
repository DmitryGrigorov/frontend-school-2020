fetch('http://echo.jsontest.com/id/qwerty/name/petya')
    .then(response => response.json())
    .then(user => console.log(user.id + ': ' + user.name));
