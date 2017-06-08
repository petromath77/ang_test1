$(function() {

	var newSelection = "";
	
	$("#realty-nav li").click(function(){
	
	    $("#all-realty").fadeTo(200, 0.10);
	
		$("#realty-nav li").removeClass("current");
		$(this).addClass("current");
		
		newSelection = $(this).attr("rel");
		
		$(".item_wrap_mx").not("."+newSelection).slideUp();
		$("."+newSelection).slideDown();
		
	    $("#all-realty").fadeTo(600, 1);
		
	});
	
});