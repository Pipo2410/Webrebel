var photo = $('.photo'),
	loader = $('.loading'),
	siteWidth = $('html').width(),
	photoWidth = photo.width();

loader.hide();

photo.css({
	position: 'relative'
})


photo.on('click', function() {

	loader.fadeIn();
	
	$(this).animate(
		{ left: (siteWidth - photoWidth) }, 2500, function() {
			loader.fadeOut();
		});

});

photo.on('contextmenu', function(e) {
	
	$(this).fadeIn();

	$(this).animate({
		left: (siteWidth - photoWidth)
	}, 2500);

	loader.fadeIn();

	setTimeout(function() {
		loader.fadeOut();	
	}, 500)

	// setInterval(function() {
	// 	loader.fadeOut();
	// }, 1000);

	e.preventDefault();

});