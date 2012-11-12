$(function() {
	// Target image to rotate, and inject rotation code.
	$('.single-img img').addClass('gotcha');
	$('.single-img').append('<div id="degreee"></div>');
	$('#degreee').html('<a id="left" href="#"><img src="http://i.imgur.com/zVUWu.png" /></a><a id="right" href="#"><img src="http://i.imgur.com/zVUWu.png" /></a>');
	click_left = $('a#left');
	click_right = $('a#right');

	// CSS to make things pretty. c:
	$('').css('position', 'relative');

	// Set mousedown rotation speed
	var speed = 10;
	var orientation = 0;
	var timeout;

	//Define our buttons.
	left_button = $('a#left');
	right_button = $('a#right');

	//Rotate by x degrees
	function degreee_rotate(x) {
		orientation += x;
		$('.gotcha').css({'transform' : 'rotate(' + orientation + 'deg)',
			'-moz-transform' : 'rotate(' + orientation + 'deg)',
			'-webkit-transform' : 'rotate(' + orientation + 'deg)'
		});
		return false;
	}

	// Rotate to the left!
	left_button.mousedown(function(){
		timeout = setInterval(function(){
			degreee_rotate(-1);
		}, speed);
		return false;
	});

	// Rotate to the right!
	right_button.mousedown(function(){
		timeout = setInterval(function(){
			degreee_rotate(1);
		}, speed);
		return false;
	});

	// Criss-cross!
	$(document).mouseup(function(){
		clearInterval(timeout);
		return false;
	});

	// EVERYBODY CLICK YOUR HANDS
	left_button.click(degreee_rotate(-1));
	right_button.click(degreee_rotate(1));
});
