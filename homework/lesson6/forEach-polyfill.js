(function(){
    Array.prototype.forEach = undefined; //проверка
    if (Array.prototype.forEach === undefined){
        Array.prototype.forEach=function(func, cur, index, arr){
            if(arr===undefined){
                arr=this;
            }
            if (index ===undefined){
                index=0;
            }
            
            for(let i = index; i<arr.length; i++){
                cur = func(this[i]);
            }
            
        }
    }
}());