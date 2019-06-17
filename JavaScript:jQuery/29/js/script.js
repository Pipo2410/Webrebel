$('.post-title')
	.css({ position: 'relative'})
	.addClass('round-round-baby')
	.animate({ left: 400 }, {
		duration: 1500,
		easing: 'linear'
	})
	.animate({ top: -800 }, 800);

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