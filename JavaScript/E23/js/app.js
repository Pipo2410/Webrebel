// var dudes = Bros.all();

// dudes.forEach(function(dude) { 

//     Bros.updateDOM(dude);

//     dude.addEventListener('click', function() {

//         Bros.increaseScore(dude);

//     });
    
//    dude.addEventListener('mouseover', function() {
//        var otherItem = _.without(dudes, this)[0];
//        otherItem.classList.add('desaturate');
//    });
    
//    dude.addEventListener('mouseout', function() {
//        var otherItem = _.without(dudes, this)[0];
//        otherItem.classList.remove('desaturate');
//    });

// });


var images = mod.img;

images.forEach(function(el) {

    // update score UI
    mod.updateDOM(el);

    el.addEventListener('click', function clickedIt() {
        mod.increaseScore(this);
    });

    el.addEventListener('mouseover', function() {
        var otherEl = _.without(images, this)[0];
        otherEl.classList.add('desaturate');
    });

    el.addEventListener('mouseout', function() {
        var otherEl = _.without(images, this)[0];
        otherEl.classList.remove('desaturate');
    });

});
