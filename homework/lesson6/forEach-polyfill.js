(function () {
    if(!Array.prototype.forEach) {
        Array.forEach.forEach = function(continuous) {
            for (var i = 0; i < this.length; i++) {
            continuous(this[i], i, this);
            }
        }
    }
})();