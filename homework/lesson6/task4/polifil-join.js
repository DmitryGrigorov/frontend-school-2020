// 4
// Напишите полифил для метода массива join

(function(){
  if(!Array.prototype.join){
    Array.prototype.join = function(delimiter){
      var result = '';
     
      for( i = 0; i < this.length; i++){
        result += result? delimiter+this[i]:this[i];
      }
      return result;
    }
  }
})();

let arr = [1, 4, 6]
console.log(arr);
console.log(arr.join('-'));