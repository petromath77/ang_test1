$(document).ready(function() {

	// Custom JS
	$('#my-menu').mmenu({
		extensions: ['theme-dark', 'fx-listitems-slide', 'pagedim-black'],
		navbar: {
			title: '<img src="img/logo.png" alt="logo">'
		},
		offCanvas: {
               position  : "right"
            }
      });
	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function(){
		$('.hamburger').addClass('is-active');
		$('a.logo').css('opacity', '0');
	}).bind('close:finish', function(){
		$('.hamburger').removeClass('is-active');
		$('a.logo').css('opacity', '1');
	});
        
	$(".mix_wrap").mixItUp();

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