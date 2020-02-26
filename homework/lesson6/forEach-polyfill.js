(function () {
    if(!Array.prototype.forEach) {
        Array.prototype.forEach = function(callback){
            if(this instanceof Array && callback instanceof function){
                for(let i = 0; i < this.length; i++){
                    callback(this[i]);
                }
            }
        }
    }
})();
