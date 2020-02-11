(function(){
    Array.prototype.join = undefined; //для проверки 

    if(!Array.prototype.join){
    
        Array.prototype.join = function(separator){
           var result ='';
           for(var i=0; i<this.length; i++){
               // if (i===0){
               //     result=this[i];
               // }else{
               //     result = result+separator+this[i];
               // }
               
               result += i === 0 ? this[i]: separator+this[i];
           }
           return result;
        }
   }
}());