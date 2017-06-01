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
     $('#trig_mix').on('click', function(){
             $(".mix_wrap").mixItUp({
                 controls: {
                     enable: true
                 },
                 layout: {
                     display: "inline-block"
                 },
                 callbacks: {
                     onMixLoad: function(){
                         alert("Load!");
                     }
                 }
             });

     });
    $('.filter_wrap li').on('click', function(){
        $('.filter_wrap li').removeClass('active');
        $(this).addClass('active');
    });

	$('.menu-link').bigSlide();


	$(function () { $('input, select, textarea').not('[type=submit]').jqBootstrapValidation(); } );

});
$(window).on('load', function() { 
	$('.loader_inner').fadeOut(); 
	$('.loader').delay(400).fadeOut('slow'); 
});