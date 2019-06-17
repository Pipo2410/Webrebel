// (function($) {

// 	var list = $('.jokes'),
// 		copy = $('.copy');

// 		// copy.before( $('<h1>Ja mam najvacsi... heading</h1>') );
// 		// copy.after( $('<h1>Ja mam najvacsi... heading</h1>') );


// 		// $('<h1>Ja mam najvacsi... heading</h1>').insertBefore( copy );
// 		// $('<h1 class="btn-primary">Ja mam najvacsi... heading</h1>').insertAfter( copy );



// 		// $('<h3>Ja nemam az taky velky</h3>').appendTo( 'body' );
// 		// $('<h3>Ja nemam az taky velky</h3>').prependTo( '#content' );

// 	// skyjeme elementy
// 	list.find('dd').slideUp();
	
// 	//zobrazime dd po kliknuti na term
// 	list.find('dt').on('click', function( event ) 
// 	{

// 		var dt = $(this);
// 		var dd = dt.next();


// 		dd.slideToggle()
// 				.siblings('dd').slideUp();


// 		// dd.remove();
// 		// dt.remove();

// 		dt.add( dd ).remove();

// 		var newContent = dt.text() + dd.html();
// 		copy.prepend( newContent + '<hr>' );

// 		event.preventDefault();
// 	})

// }) (jQuery)


(function($) {

	var list = $('.jokes'),
		copy = $('.copy');

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

		dt.remove();
		dd.remove();

		dt.add( dd ).remove();

		var newContent = dt.text() + dd.html();
		copy.append( newContent + '<hr>');
		// copy.prepend( newContent + '<hr>');

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