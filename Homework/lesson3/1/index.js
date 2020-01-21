lwTail("ВАСЯ");

function lwTail(str) {
    let word = str[0].toUpperCase();
    for (var i = 1; i < str.length; i++) {
      word += str[i].toLowerCase();
    }
    console.log(word);
}
