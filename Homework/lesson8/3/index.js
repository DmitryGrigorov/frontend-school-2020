let urls = [
    'http://echo.jsontest.com/id/qwerty1/name/petya',
    'http://echo.jsontest.com/id/qwerty2/name/vasya',
    'http://echo.jsontest.com/id/qwerty3/name/kolya'
];

let request = urls.map(url => fetch(url));
Promise.all(request)
    .then(responses => Promise.all(responses.map(r => r.json())))
    .then(users => users.forEach(user => console.log(user.id + ': ' + user.name)));
