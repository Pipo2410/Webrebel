// var number = +prompt('Inser random number');

// function calculate(num) {
// 	var result = num * 3;
// 	return result;
// }

// var result = calculate(number);
// console.log(result);


// var menu = $('ul'),
// 	settings = {
// 		fontWeight: 'bold',
// 		color: 'brown'
// 	}

// menu.children('li:eq(2), li:last-child').css( settings );
// menu.children('li:eq(1), li:last-child').addClass('ahola');

var menu = $('.controls');


menu.children('li').click(function() {
	event.preventDefault();
	$('.controls li').removeClass('selected');
	$(this).addClass('selected');
});

var navigation = $('.menu.social');

navigation.children('li').click(function() {
	
	$(this).removeClass('selected');
	$(this).addClass('selected');
	
});