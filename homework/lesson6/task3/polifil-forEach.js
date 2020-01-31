(function () {
  if(!Array.prototype.forEach) {
    Array.prototype.forEach = function(callback) {
          for (var i = 0; i < this.length; i++) {
                  callback(this[i], i, this);
              } 
                  return;
          }
    }
})();

var arr = ["Яблоко", "Апельсин", "Груша"];

arr.forEach(function(item, i, arr){
  console.log( i + ": " + item + " (массив:" + arr + ")" );
});
