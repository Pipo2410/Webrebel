var icons = $('.social-icon'),
		styles = {
			position: 'relative',
			background: 'yellow',
			zIndex: 10
		},
		settings = { top: 1000 },
		speed = 2000;

icons
	.css(styles)
	.animate(settings, speed);