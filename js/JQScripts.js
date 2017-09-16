
/*Sortable*/
$(function() {
	$( "#picture" ).sortable();
	$( "#picture" ).disableSelection();
});


/*Json*/

$(function() {

	$.getJSON('data.json', function(data) {
		var template = $('#jason').html();
		var html = Mustache.to_html(template, data);
		$('#picture').html(html);
	}); //getJSON
}); //function




/*fancybox*/

$(document).ready(function() {
	$(".fancybox").fancybox();
});



/*bxSlider*/
$(document).ready(function(){
	$('.bxslider').bxSlider({
		auto: true,
	});
});