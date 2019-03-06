(function($) {

	var list = $('.jokes'),
		copy = $('.copy'),
		ul = $('.list');

	// copy.before( $('<h1>JA MAM NAJVACSI...HEADING</h1>') );
	// copy.after( $('<h1>JA MAM TIEZ VELKY</h1>') );

	// $('<h1>JA MAM NAJVACSI...HEADING</h1>').insertBefore( copy );
	// $('<h2 class="btn-primary">JA MAM NAJVACSI...HEADING</h2>').insertAfter('.copy');

	// $('<h3>ja nemam az tak velky</h3>').appendTo( 'body' );
	// $('<h3>ja nemam az tak velky</h3>').prependTo( '#content' );
	
	//skryjeme elementy
	list.find('dd').slideUp();

	list.find('dt').on('click', function( event ) {
		
		var dt  = $(this),
			dd = dt.next();

		dd.slideToggle()
			   .siblings('dd').slideUp();

		var newContent = dt.text() + dd.html();
		copy.append( newContent + '<hr>');
		// copy.prepend( newContent + '<hr>');

		event.preventDefault();
	});


	var ul = $('.list');
	ul.find('li').on('click', function() {
		copy.text( $(this).is('li:eq(2)') );
	});

	
})(jQuery)


// ul.find(':nth-child(3)');
// ul.find('li').eq(2);
// ul.find('li:eq(2)');
// ul.children(':eq(2)');
// ul.children().eq(2);

// ul.children(':eq(2)').appendTo('.copy');
// ul.children(':not(:eq(2))').appendTo('.copy');
// ul.children().not(':eq(2)');

// ul.children().not(':eq(2)').fadeOut();

		

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