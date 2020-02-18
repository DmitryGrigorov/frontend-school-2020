const ball = document.getElementById('ball');

// убираем браузерный Drag&Drop
ball.ondragstart = function() {
  return false;
};

// mousedown -> mousemove -> mouseup
ball.addEventListener('mousedown', function(event) { 
  // (1) отследить нажатие
  // (2) подготовить к перемещению:
  // разместить поверх остального содержимого и в абсолютных координатах
  ball.style.position = "absolute";
  ball.style.zIndex = 1000;
  // переместим в body, чтобы мяч был точно не внутри position:relative
  document.body.append(ball);
  
  // и установим абсолютно спозиционированный мяч под курсор
  moveAt(event.pageX, event.pageY);

  // moveAt
  function moveAt(pageX, pageY) {
    ball.style.left = pageX + 'px';
    ball.style.top = pageY + 'px'
  }
  // передвинуть мяч под координаты курсора
  // и сдвинуть на половину ширины/высоты для центрирования


  // (3) перемещать по экрану/документу

  // (4) положить мяч, удалить более ненужные обработчики событий

});