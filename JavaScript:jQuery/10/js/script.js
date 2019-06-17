// var obj = {
//     background: 'yellow',
//     color: 'black',
// };



// $('.social-icon').css(obj);
// console.log($('.post-title').text('Gule'));

// $('.post-title').slideUp(2000);
// $('.post-title').slideDown(1000);
// $('.post-title').slideToggle(1000);
// $('.post-title').fadeToggle(1000);


// $('.post-title').animate({
    //     width: '1000'
    // }, 3000);
    



var icons = $('.social-icon'),
    styles = {
        position: 'relative',
        background: 'yellow',
        zIndex: 10,
    },
    settings = { top: 1000 },
    speed = 2000;

icons
    .css(styles)
    .animate(settings, speed);