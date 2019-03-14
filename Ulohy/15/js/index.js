var Slider = {

    images: null,
    selector: null,
    current: null,

    init: function(data) {
        this.images = $(data.selector);
        this.selector = data.selector
        this.images.not(':last').hide();

        setInterval(function() {
            Slider.next();
        }, 5000);
    },

    prev: function() {
        this.current = this.images.filter(':visible');
        var prev = this.current.prev(this.selector);

        if(prev.length < 1) {
            prev = this.images.last();
        }

        this.change(this.current, prev);

    },

    next: function() {
        this.current = this.images.filter(':visible');
        var next = this.current.next(this.selector);

        if (next.length < 1) {
            next = this.images.first();
        }

        this.change(this.current, next);
    },

    change: function(current, next) {

        if (this.images.filter(':animated').length > 0) {
            return;
        }

        current.fadeOut('slow');
        next.fadeIn('slow');
    }

};

Slider.init({
    selector: '.gallery__img'
});


$('.prev').on('click', function() {
    Slider.prev();
});

$('.next').on('click', function() {
    Slider.next();
});

$(document).on('keydown', function(e) {

    var keys = {
        left: 65,
        right: 68,
        leftArrow: 37,
        rightArrow: 39
    }

    switch (e.which) {
        case keys.left:
        case keys.leftArrow:
            Slider.prev();
        case keys.right:
        case keys.rightArrow:
            Slider.next();
            break;
    };

});