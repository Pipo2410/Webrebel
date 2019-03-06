(function($) {

	var gallery = $('.gallery'),
		startingOpacity = gallery.find('img').css('opacity');

	// animujeme opacity na hover
	gallery.find('img').on('mouseenter mouseleave', function(event){
		var opacity = event.type === 'mouseenter' ? 1 : startingOpacity;
		$(this).fadeTo(200, opacity);
	});


	// vytvorime si overlay
	var overlay = $('<div>', { id: 'overlay' });
		overlay.appendTo('body').hide();

	
	// po kliknuti zobrazime lightbox
	gallery.find('a').on('click', function(event)
	{
		var href = $(this).attr('href'),
		image = $('<img>', { src: href, attr: 'learn2code' });
		
		overlay.html( image )
		.show();
		
		event.preventDefault();
	});
	
	
	// skryjeme overlay na escape
	$(document).on('keyup', function(event) {
		if ( event.which === 27 ) overlay.fadeOut('fast');
	});
	
	overlay.on('click', function() {
		$(this).fadeOut('fast');
	});

	// ----------------------------------------------


	/***
	*  Scrollovanie
	*/


	var menu = $('.menu'),
		menuLinks = menu.find('a');
		 
	menuLinks.on('click', function(event) {

		$('html,body').animate({ scrollTop: $(this.hash).offset().top }, 2000);

		event.preventDefault();

	})

})(jQuery);