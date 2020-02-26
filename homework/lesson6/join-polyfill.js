(function () {
    if(!Array.prototype.join) {
        Array.prototype.join = function (delimiter) {
          let jonedString = "";
          if(this instanceof Array){
              for(let i = 0; i < this.length; i++){
                  jonedString += jonedString ? (delimiter + this[i]) : this[i];
              }
          }
          return jonedString;
        }
    }
})();
