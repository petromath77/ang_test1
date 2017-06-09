$(document).ready(function() {

	// Custom JS
 	

	//var api = $('#menu').data('panel');
	$('a.hamburger').on('click', function(){
		var has_cls = $('a.hamburger').hasClass('is-active');
			!has_cls ? $(this).addClass('is-active') : $(this).removeClass('is-active');
	});

	$('#menu li').on('click', function(){
        $('#menu li').removeClass('active_nav');
        $(this).addClass('active_nav');
    });
    $('.cont_butt').on('click', function(){
        $('#menu li').removeClass('active_nav');
        $('.cont').addClass('active_nav');
    });

	/*
	$('.hamburger').on('click', function(){
		$(this).removeClass('is-active');
		$('a.logo').css('opacity', '1');
	});

     $('a#trig_mix').on('click', function(){

             $(".mix_wrap").mixItUp({
                 callbacks: {
                     onMixLoad: function(){
                     }
                 }
             });

     });
     
    $('.filter_wrap li').on('click', function(){
        $('.filter_wrap li').removeClass('active');
        $(this).addClass('active');
    });

*/
	$('.menu-link').bigSlide();


	$(function () { $('input, select, textarea').not('[type=submit]').jqBootstrapValidation(); } );


});



$(window).on('load', function() { 
	$('.loader_inner').fadeOut(); 
	$('.loader').delay(400).fadeOut('slow'); 
});