$(function() {
    
    console.log('som ready');
    console.log( $('img') );
    
});

// izolovanie jQuery $ sign - ine kniznice mozu pouzivat $ a tymto izolujeme $sign to be jQuery
(function($) {
    
    console.log('som ready');
    console.log( $('img') );

})(jQuery);

// var socialIcons = $('.social-icon'),
//     siteHeight = $('body').height();

//     console.log(siteHeight);

// socialIcons.css({
//     position: 'relative',
//     color: 'black',
//     background: 'yellow',
//     zIndex: 10
// });

// socialIcons.on('mouseenter', function() {
//     $(this).animate({ top: (siteHeight - 100)}, 2000).fadeOut();
// });