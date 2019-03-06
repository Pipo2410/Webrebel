(function($) {

	// vytvorime link, cez ktory sa vieme vyscrollovat na vrch stranky
	var backToTop = $('<a>', { 
		href: '#home', 
		class: 'back-to-top',
		html: '<i class="fa fa-caret-up fa-5x"></i>'
	});

	// link pridame na stranku a naviazeme nan scrollovaciu funkciu
	backToTop
	.hide()
	.appendTo('body')
	.on('click', function() {
		$('html,body').animate({ scrollTop: 0 });
	});

	// zobrazime ho iba ak sme dostatocne hlboko v stranke
	var win = $(window);
	win.scroll(function() {
	if ( win.scrollTop() >= 500 ) backToTop.fadeIn();
	else backToTop.hide();
	});

	// ----------------------------------------------
})(jQuery);


var covers = $('.fadecovers');

covers.children().not(':last').hide();

var coverAnimation = setInterval(function() {
	
	covers.children().last()
		.fadeOut(1500, function() { $(this).prependTo(covers); })
		.prev().fadeIn(1500);

}, 3000);

console.log(coverAnimation);

covers.on('click', function() {

	clearInterval(coverAnimation);
	console.log('interval stopped')
})
