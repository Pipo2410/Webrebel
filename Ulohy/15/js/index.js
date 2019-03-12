var Slider = {

    images: null,
    selector: null,
    current: null,

    init: function(data) {
        this.images = $(data.selector);
        this.selector = data.selector;
        this.images.not(':last').hide();
    },

    prev: function() {
        this.current = this.images.filter(':visible');
        var prev = this.current.prev( this.selector );

        if( prev.length < 1 ) {
            prev = this.images.last();
        }

        this.change(this.current, prev);
    },

    next: function() {

        this.current = this.images.filter(':visible');

        var next = this.current.next( this.selector );

        console.log(next.length);

        if( next.length < 1) {
            next = this.images.first();
        }

        // console.log(next.length);

        this.change( this.current, next );

    },

    change: function( currentElement, prevElement) {

        if( this.images.filter(':animated').length > 0) {
            return;
        }

        currentElement.fadeOut();
        prevElement.fadeIn();
        
    }

};

// (function($) {

    Slider.init({
        selector: '.cover'
    });

    $('.prev').on('click', function() {
        Slider.prev();
    })

    $('.next').on('click', function() {
        Slider.next();
    })

    $(document).on('keydown', function(e) {
        var keys = {left: 65, right: 68};

        switch (e.which) {
            case keys.left:
                Slider.prev();
            case keys.right:
                Slider.next();
                break;
        }
    })

// })(jQuery)