//navbar
$( "#burger" ).click(function check() {
  $( this ).toggleClass( "burgeractive");
  $('.navmenu #navigation .menu-lists').slideToggle(300);
});


//scrolltop
$(window).scroll(function(e){
  if($(window).scrollTop() >= 400){
    $('.scrolltop').show(500);
  }
  else{
    $('.scrolltop').hide(500);
  }
  
});

 //click on button to scroll top
 $('a[href=#top]').click(function(){
  $('html, body').animate({scrollTop:0}, 'slow');
  return false;
});


  //scrolltop for navbar
$(document).ready(function(){
    $('.menu-lists li a').click(function(e){
      e.preventDefault();
      //console.log($(this).data('scroll'));
      $('html , body').animate({

        scrollTop: $('#'+$(this).data('scroll')).offset().top
      
      },2000);
                   
    });
    
});





