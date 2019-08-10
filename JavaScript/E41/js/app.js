'use strict';
var progress = document.querySelector('.progress'),
	textarea = document.querySelector('textarea');

var pathLength = progress.getAttribute('r') * 2 * Math.PI,
	tweetLength = 40;

progress.style.strokeDasharray = pathLength + 'px';
progress.style.strokeDashoffset = pathLength + 'px';


// on input
textarea.addEventListener('input', function(event) {

	var len = textarea.value.length,
		per = len / tweetLength,
		newOffset = pathLength - (pathLength * per) + 'px';

	console.log(len, per);
	console.log(newOffset);
	console.log('');

	
	progress.style.strokeDashoffset = newOffset;
})