$(document).ready(function(){
	$('.all-menu').click(function(){
			$(this).parents().find('.m-nav').toggleClass('on');
		$(this).toggleClass('on');
	});
	$('.m-nav .sub-menu').hide();
	$('.m-nav .menu li').click(function(){
		$(this).find('ul.sub-menu').slideToggle('fast');
		$(this).toggleClass('down');
	});
});

$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.top-btn').fadeIn();
        } else {
            $('.top-btn').fadeOut();
        }
    });
    
    $(".top-btn > a").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });
});