(function($) {

	var cover = $('#cover'),
	covers = $('.fadecovers');

	covers.children(':not(:last)').hide();

	var Slider = {

		intervalID: null,
		running: false,
		config: {
			fadeSpeed: 1500,
			delayTime: 3000
		},

		set: function( id ) {
			this.intervalID = id;
		},

		get: function() {
			return 'IDcko intevalu je: ' + this.intervalID;	
		},

		start: function( settings ) {
			var slider = this;

			console.log(this);

			$.extend( slider.config, settings );

			this.intervalID = setInterval(function() {
				covers.children(':last')
					.fadeOut(slider.config.fadeSpeed, function() { $(this).prependTo( covers ) })
					.prev().fadeIn(slider.config.fadeSpeed);
			}, slider.config.delayTime);

			this.running = true;
		},

		pause: function() {
			clearInterval(this.intervalID);
			this.intervalID = null;
			
			this.running = false;
			console.log('zapauzovali sme');
		},

		resume: function() {
			if(!this.intervalID) this.start();
		},

		toggle: function() {
			if(this.running) this.pause()
			else this.resume();
		}
	}

	Slider.start({
		fadeSpeed: 500,
		delayTime: 1000
	});

	covers.on('click', function() {
		Slider.toggle();
	});

})(jQuery);