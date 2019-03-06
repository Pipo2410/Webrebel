var photo = $('.image'),
	overlay = $('#overlay');

overlay.hide();

photo.on('click', function() {
	
	overlay.fadeIn('fast');

	overlay.find('.progress').animate({ width: '100%' }, 4000, function() {
		
		overlay.fadeOut('fast', function() {
			overlay.find('.progress').css({ width: '0' });
		});

	});
	
	setInterval(function() {
		$('.progress-text').text( Math.floor($('.progress').width() / $('.bar').width()*100) + ' %');
	}, 10);


});



$(document).on('keypress', function(e) {
	
	if( e.keyCode === 119 ) {
		photo.css({ top: '-=5px' });
	} else if ( e.keyCode === 115 ) {
		photo.css({ top: '+=5px' });
	} else if ( e.keyCode === 97 ) {
		photo.css({ left: '-=5px' });
	} else if ( e.keyCode === 100 ) {
		photo.css({ left: '+=5px' });
	}

});