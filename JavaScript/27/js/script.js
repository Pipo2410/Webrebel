(function($) {

	var cover = $('#cover'), 
		covers = $('.fadecovers');

	covers.children().not(':last').hide();

	var coverAnimation = setInterval(function() {
		covers.children().last()
			.fadeOut(1500, function() { $(this).prependTo(covers); })
			.prev().fadeIn(1500);
	}, 3000);

	covers.on('click', function() {
		clearInterval(coverAnimation);
	});

})(jQuery);

