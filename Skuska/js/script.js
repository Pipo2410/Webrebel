(function($) {

	var discover = $('.btn--animated');

	discover.on('click', function(e) {
		e.preventDefault();

		var id = this.hash;
		$('html').animate({	scrollTop: $(id).offset().top }, 1500, function() {
			window.location.hash = id;
		});

	});

})(jQuery)