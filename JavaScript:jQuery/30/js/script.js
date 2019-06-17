// $('.post-title')
// 	.css({ position: 'relative'})
// 	.addClass('round-round-baby')
// 	.animate({ left: 400 }, {
// 		duration: 1500,
// 		easing: 'linear'
// 	})
// 	.animate({ top: -800 }, 800);

// $('.post-title') 
// 	.css({ position: 'relative' })
// 	.on('click', function() {
// 		$(this).animate({ left: '+=50' });
// 	});

// $('.post-title')
// 	.on('click', function() {
// 		var e = $(this),
// 			className = 'round-round-baby';

// 		e.toggleClass(className)

// 		// if(e.hasClass(className)) e.removeClass(className);
// 		// else e.addClass(className);
// 		// $(this).addClass('round-round-baby');
// 	});




(function($){

	$.fx.speeds.slowAsShit = 5432;

	var colors = [ '#3b9ae1', '#f6be00', '#e64134', '#eb70b1', '#0f1a5f'];

	$('.nav-bar').find('li').on('mouseenter', function() {
		
		if ( $(this).is(':animated') ) return;
		
		var newColor = colors[Math.floor(Math.random() * colors.length)];
		$(this)
			.animate({ backgroundColor: newColor }, 'slowAsShit');
	});

})(jQuery)