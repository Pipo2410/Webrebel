// (function ($) {
// 	var list = $('.jokes');

// 	list.find('dd').hide();

// 	list.find('dt').on('click', function( event ) {
// 		$(this).next().slideToggle()
// 				.siblings('dd').slideUp();
// 	});


// 	list.find('a').on('click', function(event) {
// 		event.preventDefault();
// 	})

// })(jQuery)



(function($) {

	var list = $('.jokes');
	list.find('dd').hide();

	list.find('dt').on('click', function( event ) {
		$(this).next().slideToggle()
			   .siblings('dd').slideUp();

		});
			
		list.find('a').on('click', function( event ) {
			event.preventDefault();
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