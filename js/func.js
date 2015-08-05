$(document).ready(function(){
	var cont = 1;
    $('.menu').click(function(){
		if(cont == 1){
			$('nav').animate({
				left:'0'
			});
			cont = 0;
		}else{
			cont = 1;
			$('nav').animate({
				left:'-100%'
			});
		}
	});
});


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
