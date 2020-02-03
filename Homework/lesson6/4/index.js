Array.prototype.join = function (separator) {
    var result = '';
    for (var i = 0; i < this.length; i++) {
        result += result ? separator + this[i] : this[i];
    }
    return result;
}
