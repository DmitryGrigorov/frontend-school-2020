<?php
$_scroll = <<<HD
<!-- < Scroll -->
<style>
Button#toTop,
Button#toBottom{
  background-color: black;
  border: 0.2rem solid white; border-radius: 50%;
  display: none;
  opacity: 0.2;
  overflow: none;
  padding: 0.4rem;
  position: fixed; right: 1rem; z-index: 3
}
Button#toTop:hover,
Button#toBottom:hover{ cursor: pointer }

Button#toTop{ bottom: calc((1rem * 2 + 4rem) + 0.4rem) }
Button#toBottom{ bottom: 1rem }

Button#toTop Img,
Button#toBottom Img{ height: 4rem }
Button#toBottom Img{ transform: rotate(180deg) }
</style>

<script>
$(window).load(function(){
 //$('Button#toTop').css('top', ($('Div#topLine').outerHeight() + 4) + $('Body > Header + Nav').outerHeight() + 4);

 $(window).scroll(function(){ //$('#Menu_Main').text(($('Body').outerHeight() - $('Body > Footer').outerHeight()) + ' <=>' + ($(this).scrollTop() + $(window).outerHeight())).css('font-size', '2rem');
  if($(this).scrollTop() > $('Body > Header').outerHeight()){
   $('Button#toTop').fadeIn(800)
  } else{
   $('Button#toTop').fadeOut(800)
  }
  if(($(this).scrollTop() + $(window).outerHeight()) < ($('Body').outerHeight() - $('Body > Footer').outerHeight())){
   $('Button#toBottom').fadeIn(800)
  } else{
   $('Button#toBottom').fadeOut(800)
  }
 });

 //transition здесь не применим
 $('Button#toTop, Button#toBottom').hover(
  function(){ $(this).animate({opacity: 0.6}, 400) },
  function(){ $(this).animate({opacity: 0.08}, 400) }
 )

 $('Button#toTop').click(function(){
  $('HTML').animate({ scrollTop: 0 }, 800);
  return false;
 });
 $('Button#toBottom').click(function(){
  $('HTML').animate({ scrollTop: $('HTML').outerHeight() }, 800);
  return false;
 })
})
</script>

<button id='toTop'><img alt='Вверх' src='/_images/_icons/arrow.svg'></button>
<button id='toBottom'><img alt='Вниз' src='/_images/_icons/arrow.svg'></button>
<!-- > Scroll -->

HD;
?>