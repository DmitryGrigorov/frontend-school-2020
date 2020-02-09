Array.prototype.join = undefined;
if(!Array.prototype.join) {
    Array.prototype.join = function (args) {
        var result = '';
        for(var i =0; i< this.length; i++) {
            result += this[i];
            if(this[i+1]) {
                result += args;
            }

        }
        return result;
    }
}
const arr = [1,2,3,4,5,6];
console.log(arr.join(''));