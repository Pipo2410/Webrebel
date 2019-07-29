// var Bros = (function() {

//     // grab them dudes
//     var dudes = document.querySelectorAll('.choice img');
//     dudes = Array.prototype.slice.call( dudes );

//     // return 'em all
//     var getAllDudes = function() {
//         return dudes;
//     }

//     // vasho -> scoreVasho
//     var getKeyFrom = function(dude) {
//         return 'score' + _.capitalize( dude.alt);
//     }

//     // get scoreVasho from localStorage
//     var getScore = function( dude ) {
//         return +localStorage.getItem( getKeyFrom(dude)) || 0; // ||0 default operator
//     }

//     // set scoreVasho to localStorage
//     var setScore = function( dude, score ) {
//         return +localStorage.setItem(getKeyFrom(dude), score);
//     }

//     // update dudes DOM element
//     var updateDude = function(dude) {
//         var score = getScore(dude);
//         dude.nextElementSibling.textContent = score;
//     }

//     var increaseScore = function( dude ) {
//         var score = getScore(dude);
//         score++;

//         setScore(dude, score);
//         updateDude(dude);
//     } 

//     return {
//         all: getAllDudes,
//         getScore: getScore,
//         setScore: setScore,
//         updateDOM: updateDude,
//         increaseScore: increaseScore
//     }

// }());

var mod = (function() {

    var images = document.querySelectorAll('.choice img');
    images = Array.prototype.slice.call(images);

    var getKey = function(player) {
        return 'score' + _.capitalize(player.alt);
    };
    
    var getScore = function(player) {
        return +localStorage.getItem(getKey(player));
    }
    
    var setScore = function(player, score) {
        return +localStorage.setItem(getKey(player), score);
    }
    
    var updateScoreUI = function(player) {
        player.nextElementSibling.textContent = getScore(player);
    }
    
    var increaseScore = function(player) {
    
        //get score from localStorage
        var score = getScore(player);
        // add 1 to the score
        score++;
        // set score to localStorage
        setScore(player, score);
        // update UI
        updateScoreUI(player);
    
    }


    return {
        img: images,
        updateDOM: updateScoreUI,
        increaseScore: increaseScore
    }

})();