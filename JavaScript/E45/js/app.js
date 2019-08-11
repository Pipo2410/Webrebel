'use strict';
var progress = document.querySelector('.progress'),
	textarea = document.querySelector('textarea'),
	counter = document.querySelector('.counter'),
	svg = document.querySelector('svg');

var pathLength = progress.getAttribute('r') * 2 * Math.PI,
	tweetLength = 40,
	warningZone = Math.floor( tweetLength * (1/2) ),
	dangerZone =  Math.floor( tweetLength * (3/4) );

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
		progress.classList.toggle('warn', len > warningZone && len < dangerZone);
		progress.classList.toggle('danger', len >= dangerZone);
		progress.classList.toggle('tragedy', len == tweetLength);
	}

	// handle counter
	counter.textContent = tweetLength - len;
	counter.classList.toggle('danger', len >= tweetLength);

});

svg.addEventListener('mouseover', function(e) {
	this.classList.add('rotateCircle');
});

svg.addEventListener('mouseout', function(e) {
	this.classList.remove('rotateCircle');
	this.classList.add('spin2');
});