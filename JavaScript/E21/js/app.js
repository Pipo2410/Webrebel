var dudes = document.querySelectorAll('.choice img');
dudes = Array.prototype.slice.call( dudes );

dudes.forEach(function(dude) {

    updateDude(dude);

    dude.addEventListener('click', function() {

        var score = getScore(dude);
        score++;

        setScore(dude, score);
        updateDude(dude);

        // get key from dude 
       // get score from localStorage

       // set new score to localStorage
       // update DOM element

    });
    
   dude.addEventListener('mouseover', function() {
       var otherItem = _.without(dudes, this)[0];
       otherItem.classList.add('desaturate');
   });
    
   dude.addEventListener('mouseout', function() {
       var otherItem = _.without(dudes, this)[0];
       otherItem.classList.remove('desaturate');
   });

});

// vasho -> scoreVasho
function getKeyFrom(dude) {
    return 'score' + _.capitalize( dude.alt);
}

// get scoreVasho from localStorage
function getScore( dude ) {
    return +localStorage.getItem( getKeyFrom(dude)) || 0; // ||0 default operator
}

// set scoreVasho to localStorage
function setScore( dude, score ) {
    return +localStorage.setItem(getKeyFrom(dude), score);
}

// update dudes DOM element
function updateDude(dude) {
    var score = getScore(dude);
    dude.nextElementSibling.textContent = score;
}