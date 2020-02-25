Array.prototype.forEach = undefined;
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(fun) {
        for (var i = 0; i < this.length; i++) {
            fun(this[i]);
        }
    }
}
function printToConsole(element) {
    console.log(element);
};
let arr = [12,2,3,5,6,4,7];
arr.forEach(printToConsole);
console.log(Array.prototype);