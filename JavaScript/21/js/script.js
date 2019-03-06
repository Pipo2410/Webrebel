// (function($) {

// 	var gallery = $('.gallery'),
// 		startingOpacity = gallery.find('img').css('opacity');

// 	gallery.find('img').on('mouseenter mouseleave', function(event) {
// 		var opacity = event.type === 'mouseenter' ? 1 : startingOpacity;
// 		$(this).stop().fadeTo(200, opacity); // metoda stop zamedzi stackovaniu animacii na seba
// 	});


// 	//----------------

// 	/*
// 	 * LIGHTBOX
// 	 */

// 	// vytvorime overlay
// 	var overlay = $('<div/>', { id: 'overlay' });
// 		overlay.appendTo('body').hide();


// 	// po kliknuti na obrazok
// 	gallery.find('a').on('click', function(event) {
		
// 		var href = $(this).attr('href'),
// 			image = $('<img>', { src: href, alt: 'learn2code' });
			
// 		overlay.html( image )
// 				.show();
// 		// overlay.show();
// 		event.preventDefault();
// 	});

// 	// skryjeme overlay
// 	overlay.on('click', function() {
// 		overlay.hide();
// 	})

// 	$(document).on('keyup', function(event) {

// 		if (event.which === 27 ) overlay.hide();

// 	});

// })(jQuery)


// if(event.type === 'mouseenter') $(this).fadeTo(200, 1);
// else $(this).fadeTo(200, .5);

(function($) {

	var gallery = $('.gallery'),
		startingOpacity = gallery.find('img').css('opacity');

	gallery.find('img').on('mouseenter mouseleave', function(e) {
		var opacity = e.type === 'mouseenter' ? 1 : startingOpacity;
		$(this).stop().fadeTo(200, opacity);
	});


	var overlay = $('<div/>', { id: 'overlay'}),
		image = $('<img>').appendTo(overlay);

	overlay.appendTo('body').hide();

	gallery.find('a').on('click', function(e) {

		// var href = $(this).attr('href');
		image.attr('src', $(this).attr('href'));
		overlay.show();

		e.preventDefault();
	});

	overlay.on('click', function() {
		overlay.hide();
	});

	$(document).on('keyup', function(e) {
		
		if (e.which === 27) overlay.hide()
	});

})(jQuery)