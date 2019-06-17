(function($) {

	var gallery = $('.gallery'),
		startingOpacity = gallery.find('img').css('opacity');

	gallery.find('img').on('mouseenter mouseleave', function(event) {
		var opacity = event.type === 'mouseenter' ? 1 : startingOpacity;
		$(this).stop().fadeTo(200, opacity); // metoda stop zamedzi stackovaniu animacii na seba
	});

})(jQuery)


// if(event.type === 'mouseenter') $(this).fadeTo(200, 1);
// else $(this).fadeTo(200, .5);