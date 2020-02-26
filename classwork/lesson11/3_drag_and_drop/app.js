const ball = document.getElementById('ball');

// убираем браузерный Drag&Drop
ball.ondragstart = function() {
  return false;
};

// mousedown -> mousemove -> mouseup
ball.addEventListener('mousedown', function(event) { // (1) отследить нажатие
  // (2) подготовить к перемещению:
  // разместить поверх остального содержимого и в абсолютных координатах
  ball.style.position = "absolute";
  ball.style.zIndex = 1000;
<<<<<<< HEAD

  // переместим в body, чтобы мяч был точно не внутри position:relative
  document.body.append(ball);

  
=======
  
  // переместим в body, чтобы мяч был точно не внутри position:relative
  document.body.append(ball);
>>>>>>> ceb9e32db2bfe22abdab4a2899efbe308fe56d45
  // и установим абсолютно спозиционированный мяч под курсор
  moveAt(event.pageX, event.pageY)

  // moveAt
  // передвинуть мяч под координаты курсора
  moveAt(event.pageX, event.pageY)
  // и сдвинуть на половину ширины/высоты для центрирования
<<<<<<< HEAD
function moveAt (pageX, pageY) {
  ball.style.left = pageX - ball.offsetWidth/2 + 'px';
  ball.style.top = pageY - ball.offsetHeight/2 + 'px';

}

  // (3) перемещать по экрану/документу
document.addEventListener ('mousemove', function(event){
  moveAt(evrnt.pageX,event.pageY)
})
=======
  function moveAt(pageX, pageY) {
    ball.style.left = pageX - ball.offsetWidth/2 + 'px';
    ball.style.top = pageY - ball.offsetHeight/2 + 'px';
  }

  function mousemove(evt) {
    moveAt(evt.pageX, evt.pageY)
  };

  // (3) перемещать по экрану/документу
  document.addEventListener('mousemove', mousemove);

>>>>>>> ceb9e32db2bfe22abdab4a2899efbe308fe56d45
  // (4) положить мяч, удалить более ненужные обработчики событий
  ball.addEventListener('mouseup', function() {
    document.removeEventListener('mousemove', mousemove);
    ball.onmouseup = null;
  });

});