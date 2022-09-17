(function($) {
	$(function() {
		$(window).on('load resize', function() {
			sticky();
		});

		function sticky() {
			var w = $(window).width();

			if (w < 750) {
				$('.project article').trigger('sticky_kit:detach');
			} else {
				$('.project article').stick_in_parent({
					offset_top: $('.header').outerHeight()
				});
			}
		}
	});

	var sr = ScrollReveal({
		origin   : "left",
		distance : "64px",
		duration : 900,
		delay    : 0,
		scale    : 1
	});

	sr.reveal('.project .flex-img');
	sr.reveal('.project h1');
	sr.reveal('.project .h2');
	sr.reveal('.project p');
}(jQuery));