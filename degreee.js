$(function() {
	$('.single-img img').addClass('gotcha')
	$('.single-img').append('<div id="degreee"><a id="left" href="#"><img width="32" height="30" title="" alt="" src="data:image/png;base64,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" /></a><a id="right" href="#"><img width="32" height="30" title="" alt="" src="data:image/png;base64,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" /></a></div>');
	$('.single-img').css('position', 'relative');

	$('#degreee a#right').css('padding-left', '20px');
	$('#degreee').css({'position' : 'absolute', 'bottom' : '0', 'width' : '100%', 'font-size' : '3em', 'margin' : '0'});
	$('#degreee img').css('transform', 'rotate(0)');
	$('#degreee img').css('display', 'inline');
	$('#degreee img').css('opacity', '0.8');

	var orientation = 0;
	function rotate_left() {
		orientation -= 1;
		$('.gotcha').css('transform', "rotate(" + orientation + "deg)");
		$('.gotcha').css('-moz-transform', "rotate(" + orientation + "deg)");
		$('.gotcha').css('-webkit-transform', "rotate(" + orientation + "deg)");
	}

	function rotate_right() {
		orientation += 1;
		$('.gotcha').css('transform', "rotate(" + orientation + "deg)");
		$('.gotcha').css('-moz-transform', "rotate(" + orientation + "deg)");
		$('.gotcha').css('-webkit-transform', "rotate(" + orientation + "deg)");
	}


	var timeout, click_left = $('a#left'), click_right = $('a#right');

	click_left.mousedown(function(){
		timeout = setInterval(function(){
			rotate_left();
		}, 50);
		return false;
	});

	click_right.mousedown(function(){
		timeout = setInterval(function(){
			rotate_right();
		}, 50);
		return false;
	});

	$(document).mouseup(function(){
		clearInterval(timeout);
		return false;
	});


	$("a#left").click(rotate_left);
	$("a#right").click(rotate_right);
});