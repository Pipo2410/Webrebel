// var dudes = document.querySelectorAll('.choice img');
// dudes = Array.prototype.slice.call( dudes );

// dudes.forEach(function(dude) {

//     updateDude(dude);

//     dude.addEventListener('click', function() {

//         var score = getScore(dude);
//         score++;

//         setScore(dude, score);
//         updateDude(dude);

//         // get key from dude 
//        // get score from localStorage

//        // set new score to localStorage
//        // update DOM element

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


// function getKeyFrom(dude) {
//     return 'score' + _.capitalize( dude.alt);
// }

// function getScore( dude ) {
//     return +localStorage.getItem( getKeyFrom(dude)) || 0; // ||0 default operator
// }

// function setScore( dude, score ) {
//     return +localStorage.setItem(getKeyFrom(dude), score);
// }

// function updateDude(dude) {
//     var score = getScore(dude);
//     dude.nextElementSibling.textContent = score;
// }


// var players = document.querySelectorAll('.choice img');

// players.forEach(function(el) {

//     updateUI(el);

//     el.addEventListener('click', function() {

//         // get score from localStorage
//         var score = getScore(this);
//         score++;
//         console.log(score);

//         setScore(this, score);

//         // update UI
//         updateUI(this);

//     });

//     el.addEventListener('mouseover', function() {
//         var otherElement = _.without(players, this)[0];
//         otherElement.classList.add('desaturate');
//     });

//     el.addEventListener('mouseout', function() {
//         var otherElement = _.without(players, this)[0];
//         otherElement.classList.remove('desaturate');
//     });

// });


// function getKeyFrom(image) {
//     return 'score' + _.capitalize(image.alt);
// }

// function getScore(image) {
//     return localStorage.getItem(getKeyFrom(image))
// }

// function setScore(image, score) {
//     return +localStorage.setItem(getKeyFrom(image), score);
// }

// function updateUI(image) {
//     image.nextElementSibling.textContent = +localStorage.getItem(getKeyFrom(image));
// }





// var scoreObj = {
//     mitch: {
//         score: 0
//     },
//     vasho: {
//         score: 2
//     }
// }
// // console.log(JSON.stringify(score));

// var pictures = document.querySelectorAll('.choice img');
// localStorage.setItem('scores', JSON.stringify(scoreObj));

// pictures.forEach(function(image) {

//     image.addEventListener('click', function() {

//         var scObj = JSON.parse(localStorage.getItem('scores'));
        

//         if(this.alt == 'vasho') {
//             scoreObj.vasho.score++;
//         } else if (this.alt == 'mitch') {
//             scoreObj.mitch.score++;
//         }

//         localStorage.setItem('scores', JSON.stringify(scoreObj));

//     });

// });

var points = {
    mitch: {
        score: 20
    }, vasho: {
        score: 1
    }
}

localStorage.setItem('scores', JSON.stringify(points));

var players = document.querySelectorAll('.choice img');



players.forEach(function(el) {
    
    var scores = JSON.parse(localStorage.getItem('scores'));

    if(el.alt == 'vasho') {
        el.nextElementSibling.textContent = scores.vasho.score;
    } else if (el.alt == 'mitch') {
        el.nextElementSibling.textContent = scores.mitch.score;
    }

    el.addEventListener('click', function() {

        // add score++
        var score = JSON.parse(localStorage.getItem('scores'));

        if(this.alt === 'vasho') {
            score.vasho.score++;
            this.nextElementSibling.textContent = score.vasho.score;
        } else if (this.alt === 'mitch') {
            score.mitch.score++;
            this.nextElementSibling.textContent = score.mitch.score;
        }

        localStorage.setItem('scores', JSON.stringify(score));


    });

});