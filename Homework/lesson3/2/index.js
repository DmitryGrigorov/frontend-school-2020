palindrome("racecar");

function palindrome(str) {
    var lowRegStr = str.toLowerCase();
    var reverseStr = lowRegStr.split('').reverse().join('');
    console.log(reverseStr === lowRegStr);
}
