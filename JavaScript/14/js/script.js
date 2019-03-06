// (function($) {

// 	var list = $('.jokes');

// 	// skryjeme elementy 
// 	list.find('dd').slideUp();

// 	// zobrazime dd po kliknuti na term
// 	list.find('dt').on('click', function(event)
// 	{
// 		$(this).next().slideToggle()
// 			   .siblings('dd').slideUp();

// 		event.preventDefault();
// 	});

// 	// nechceme ist
// 	$('a.nope').on('click', function(event) {
// 		alert('NIE, RADSEJ ALERT!');
// 		event.preventDefault();
// 	});

// })(jQuery);


(function($) {

	var list = $('.jokes');
	list.find('dd').hide();

	list.find('dt').on('click', function() {
		$(this).next().slideToggle();
	});


	// list.children();

	// list.children('dt');
	// list.children('dd');

	// list.children('dt').first();
	// list.children(':first-child');

	// list.children(':first-child').siblings();
	// list.children(':first-child').siblings('dt');

	// list.parent()
	// list.parents()
	// list.parents('main')
	// list.parents(':nth-child(3)');
	// list.parents(':nth-child(3)').next();
	// list.parents().eq(3).prev();
	// list.children().eq(2);
	// list.children().eq(2).prevAll();
	// list.children().eq(2).prevAll('dt');

})(jQuery)