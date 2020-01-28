function pushZeros(x=[]) {
  let a = 0;
      for (var i = 0; i < x.length; i++) {
          if (x[i] === 0) {
              delete x[i];
              a++;
          }
      }
      for (var i = 0; i < a; i++) {
          x.push(0);
      }
      console.log(x.join(''));
}

pushZeros([0, 2, 12, 4, 5]);
