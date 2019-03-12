var Slider = {
    
    images: null,
    current: null,

    init: function(data) {
        this.images = $(data.selector);
        this.images.not(':last-child').hide();
    },

    prev: function() {
        this.current = this.images.filter(':visible');

        var prev = this.current.prev( '.gallery__img' );

        if(prev.length < 1) {
            prev = this.images.last();
        }

        this.change(this.current, prev);
    },
    
    next: function() {
        this.current = this.images.filter(':visible');

        var next = this.current.next( '.gallery__img' );

        if(next.length < 1) {
            next = this.images.first();
        }

        this.change(this.current, next);
    },

    change: function(currentImage, prevImage) {

        if(this.images.filter(':animated').length > 0) {
            return;
        }

        
        currentImage.fadeOut();
        prevImage.fadeIn();
        console.log(this.images.filter(':animated').length);
    }
}

Slider.init({
    selector: '.gallery__img'
});

$('.prev').on('click', function() {
    Slider.prev();
});

$('.next').on('click', function() {
    Slider.next();
});

