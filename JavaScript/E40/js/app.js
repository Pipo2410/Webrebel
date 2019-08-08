'use strict';
var progress = document.querySelector('.progress'),
	textarea = document.querySelector('textarea');

var pathLength = progress.getTotalLength();

progress.style.strokeDasharray = pathLength + 'px';
progress.style.strokeDashoffset = pathLength + 'px';
