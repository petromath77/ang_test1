$(document).ready(function() {

	// Custom JS
 	

	/*var api = $('#menu').data('panel');
	api.bind('open:finish', function(){
		$('.hamburger').addClass('is-active');
		$('a.logo').css('opacity', '0');
	}).bind('close:finish', function(){
		$('.hamburger').removeClass('is-active');
		$('a.logo').css('opacity', '1');
	});*/
        
	$(".mix_wrap").mixItUp();
	$('.menu-link').bigSlide();

	$('.filter_wrap li').on('click', function(){
		$('.filter_wrap li').removeClass('active');
		$(this).addClass('active');
	});

	$(function () { $('input, select, textarea').not('[type=submit]').jqBootstrapValidation(); } );

});
$(window).on('load', function() { 
	$('.loader_inner').fadeOut(); 
	$('.loader').delay(400).fadeOut('slow'); 
});