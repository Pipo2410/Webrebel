(function($) {

	var cover = $('#cover'),
	covers = $('.fadecovers');

	covers.children(':not(:last)').hide();

	var Slider = {

		intervalID: null,
		running: false,

		set: function( id ) {
			this.intervalID = id;
		},

		get: function() {
			return 'IDcko intevalu je: ' + this.intervalID;	
		},

		start: function() {
			this.intervalID = setInterval(function() {
				covers.children(':last')
					.fadeOut(500, function() { $(this).prependTo( covers ) })
					.prev().fadeIn(500);
			}, 1000);

			this.running = true;
			console.log('zacali sme');
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

	Slider.start();
	covers.on('click', function() {
		Slider.toggle();
	});

})(jQuery);