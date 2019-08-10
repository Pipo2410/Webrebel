'use strict';
var progress = document.querySelector('.progress'),
	textarea = document.querySelector('textarea'),
	counter = document.querySelector('.counter');

var pathLength = progress.getAttribute('r') * 2 * Math.PI,
	tweetLength = 30;

progress.style.strokeDasharray = pathLength + 'px';
progress.style.strokeDashoffset = pathLength + 'px';


// on input
textarea.addEventListener('input', function(event) {

	var len = textarea.value.length,
		per = len / tweetLength;
		
	// handle progress
	if (len <= tweetLength) {
		let newOffset = pathLength - (pathLength * per) + 'px';
		progress.style.strokeDashoffset = newOffset;
		
		// handle colors
		if (len >= 25) {
			progress.classList.add('danger')
		}
		else if (len >= 15) {
			progress.classList.add('warn')
		}
	}

	// handle counter
	counter.textContent = tweetLength - len;

})