(function() {
  if (!Array.prototype.join) {
    Array.prototype.join = function(separator) {
      var result = "";

      this.forEach(function(value) {
        result += result ? separator + value : value;
      });

      return result;
    };
  }
})();
