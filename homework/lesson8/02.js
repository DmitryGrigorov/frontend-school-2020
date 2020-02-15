const url = 'http://echo.jsontest.com/id/qwerty/name/petya';

function request(url) {
    let promiseResponse = fetch(url)
        .then((response) => response.json());
    return promiseResponse;
}

let urlResult = request(url);

console.log(urlResult);