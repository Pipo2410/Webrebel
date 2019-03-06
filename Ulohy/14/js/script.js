// (function($) {

// 	var gallery = $('.gallery'),
// 		startingOpacity = gallery.find('img').css('opacity');

// 	// animujeme opacity na hover
// 	gallery.find('img').on('mouseenter mouseleave', function(event){
// 		var opacity = event.type === 'mouseenter' ? 1 : startingOpacity;
// 		$(this).fadeTo(200, opacity);
// 	});


// 	// vytvorime si overlay
// 	var overlay = $('<div>', { id: 'overlay' });
// 		overlay.appendTo('body').hide();


// 	// po kliknuti zobrazime lightbox
// 	gallery.find('a').on('click', function(event)
// 	{
// 		var href = $(this).attr('href'),
// 		image = $('<img>', { src: href, attr: 'learn2code' });

// 		overlay.html( image )
// 		.show();

// 		event.preventDefault();
// 	});


// 	// skryjeme overlay na escape
// 	$(document).on('keyup', function(event) {
// 		if ( event.which === 27 ) overlay.fadeOut('fast');
// 	});

// 	overlay.on('click', function() {
// 		$(this).fadeOut('fast');
// 	});

// 	// ----------------------------------------------


// 	/***
// 	*  Scrollovanie
// 	*/


// 	var menu = $('.menu'),
// 		menuLinks = menu.find('a');
	
// 	menuLinks.on('click', function(event) {

// 	// zabran default akcii
// 	event.preventDefault();

// 	var id = this.hash;

// 	// zoscrolluj
// 	$('html, body').animate({ scrollTop: $(id).offset().top }, 2000, function() {
// 		// pridaj hash do adresy
// 		window.location.hash = id;
// 		});

// 	});



// 	/***
// 	*  BACK TO TOP
// 	*/

// 	var backToTop = $('<a>', {
// 		href: '#home',
// 		class: 'back-to-top',
// 		html: '<i class="fa fa-caret-up fa-5x"></i>'
// 		});

// 	backToTop
// 		.hide()
// 		.appendTo('body')
// 		.on('click', function() {
// 			$('html,body').animate({ scrollTop: 0 });
// 		});

// 	var win = $(window);

// 	win.on('scroll', function() {
// 		if(win.scrollTop() >= 500) backToTop.fadeIn();
// 		else backToTop.hide();
// 	});

// })(jQuery);


// (function($) {

// 	var gallery = $('.gallery'),
// 		startingOpacity = gallery.find('img').css('opacity');

// 	// animujeme opacity na hover
// 	gallery.find('img').on('mouseenter mouseleave', function(event){
// 		var opacity = event.type === 'mouseenter' ? 1 : startingOpacity;
// 		$(this).fadeTo(200, opacity);
// 	});


// 	// vytvorime si overlay
// 	var overlay = $('<div>', { id: 'overlay' });
// 		overlay.appendTo('body').hide();


// 	// po kliknuti zobrazime lightbox
// 	gallery.find('a').on('click', function(event)
// 	{
// 		var href = $(this).attr('href'),
// 		image = $('<img>', { src: href, attr: 'learn2code' });

// 		overlay.html( image )
// 		.show();

// 		event.preventDefault();
// 	});


// 	// skryjeme overlay na escape
// 	$(document).on('keyup', function(event) {
// 		if ( event.which === 27 ) overlay.fadeOut('fast');
// 	});

// 	overlay.on('click', function() {
// 		$(this).fadeOut('fast');
// 	});

// 	// ----------------------------------------------


// 	/***
// 	*  Scrollovanie
// 	*/


// 	var menu = $('.menu'),
// 		menuLinks = menu.find('a');
	
// 	menuLinks.on('click', function(event) {

// 	// zabran default akcii
// 	event.preventDefault();

// 	var id = this.hash;

// 	// zoscrolluj
// 	$('html, body').animate({ scrollTop: $(id).offset().top }, 2000, function() {
// 		// pridaj hash do adresy
// 		window.location.hash = id;
// 		});

// 	});



// 	/***
// 	*  BACK TO TOP
// 	*/

// 	var backToTop = $('<a>', {
// 		href: '#home',
// 		class: 'back-to-top',
// 		html: '<i class="fa fa-caret-up fa-5x"></i>'
// 		});

// 	backToTop
// 		.hide()
// 		.appendTo('body')
// 		.on('click', function() {
// 			$('html,body').animate({ scrollTop: 0 });
// 		});

// 	var win = $(window);

// 	win.on('scroll', function() {
// 		if(win.scrollTop() >= 500) backToTop.fadeIn();
// 		else backToTop.hide();
// 	});

// })(jQuery);



var gallery = $('.gallery'),
	startingOpacity = gallery.find('img').css('opacity');

gallery.find('img').on('mouseover mouseleave', function(e) {
	var opacity = e.type === 'mouseover' ? 1 : startingOpacity;
	$(this).stop().fadeTo(400, opacity);
});


var overlay = $('<div/>', {
		id: 'overlay',
		html: '<img/>'
	})
	.appendTo('body')
	.hide();

gallery.find('a').on('click', function(e) {
	e.preventDefault();

	overlay.show();

	var href = $(this).attr('href');
	overlay.find('img').attr({
		src: href
	});
	
});

overlay.on('click', function() {
	overlay.hide();
});

$(document).on('keyup', function(e) {
	if (e.which === 27) overlay.hide();
});


/***
 * Scrollovanie
 */

var gallerySet = $('.gallery-set'),
	links = $('.controls a');

gallerySet.not(':first').hide();

links.on('click', function(e) {
	e.preventDefault();

	var id = $(this).attr('href');

	gallerySet.slideUp('slow');
	
	$(id).slideDown('slow');

	console.log($(id));
});

