let urls = [
    'http://echo.jsontest.com/id/qwerty1/name/petya',
    'http://echo.jsontest.com/id/qwerty2/name/vasya',
    'http://echo.jsontest.com/id/qwerty3/name/kolya'
];

urls = urls.map((url) => fetch(url));

Promise.all(urls)
    .then((response) => console.log(response));