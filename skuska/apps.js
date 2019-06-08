var scores, roundScore, activePlayer, isPlaying;
// init();


// document.querySelector('.btn-roll').addEventListener('click', function() {

//     if (isPlaying) {
//         var dice = Math.floor(Math.random() * 6) + 1;
//         document.querySelector('.dice').src = 'dice-' + dice + '.png';
//         document.querySelector('.dice').style.display = 'block';
    
//         if (dice !== 1) {
//             roundScore += dice;
//             document.querySelector('#current-' + activePlayer).textContent = roundScore;
//         } else {
//             nextPlayer();
//         }
//     }

// });

// document.querySelector('.btn-hold').addEventListener('click', function() {

//     if (isPlaying) {
//         scores[activePlayer] += roundScore;
//         document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

//         if (scores[activePlayer] >= 20) {
//             document.querySelector('.dice').style.display = 'none';
//             document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
//             document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
//             isPlaying = false;
//         } else {
//             nextPlayer();
//         }
//     }

// });

// document.querySelector('.btn-new').addEventListener('click', init);


// function init() {
//     scores = [0,0];
//     roundScore = 0;
//     activePlayer = 0;
//     isPlaying = true;

//     document.querySelector('.dice').style.display = 'none';
//     document.querySelector('#score-0').textContent = '0';
//     document.querySelector('#score-1').textContent = '0';
//     document.querySelector('#current-0').textContent = '0';
//     document.querySelector('#current-1').textContent = '0';

//     document.querySelector('#name-0').textContent = 'Player1';
//     document.querySelector('#name-1').textContent = 'Player2';

//     // document.querySelector('.player-0-panel').classList.remove('winner');
//     // document.querySelector('.player-1-panel').classList.remove('winner');
//     document.querySelector('.player-0-panel').classList.remove('winner');
//     document.querySelector('.player-1-panel').classList.remove('winner');
//     document.querySelector('.player-0-panel').classList.remove('active');
//     document.querySelector('.player-1-panel').classList.remove('active');
//     document.querySelector('.player-0-panel').classList.add('active');
// }

// function nextPlayer() {
//     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//     roundScore = 0;
//     document.querySelector('.dice').style.display = 'none';
//     document.querySelector('#current-0').textContent = '0';
//     document.querySelector('#current-1').textContent = '0';
//     document.querySelector('.player-0-panel').classList.toggle('active');
//     document.querySelector('.player-1-panel').classList.toggle('active');
// }

// function Person() {
//     this.name = prompt('what is your name?');
//     this.yearOfBirth = prompt('When have you been born?');
//     this.age = this.calcAge();
// }

// Person.prototype.calcAge = function() {
//     return 2019 - this.yearOfBirth;
// }

// var mike = new Person();
// console.log(mike);




// var palo = Object.create(personProto, {
//     yearOfBirth: { value: prompt('when have you been born?')},
//     name: { value: prompt('what is your name??')}
// });

// palo.age = palo.calcAge();
// console.log(palo);

// var personProto = {
//     calcAge: function() {
//         return 2019 - this.yearOfBirth;
//     },
//     arrayCalc: function(arr, fn) {
//         var result = [];
//         for(var i = 0; i < arr.length; i++) {
//             result.push(fn(arr[i]));
//         }
//         return result;
//     },
//     calculateAge: function(year) {
//         return 2019 - year;
//     }
// }
// var numberOfPeople = prompt('How many people you want??');
// var people = createDatabase();
// var years = [2015, 2013];

// function createDatabase() {
//     var arr = [];

//     for(var i = 0; i < numberOfPeople; i++) {
//         // arr[i] = Object.create(personProto, {
//         //     name: { value: prompt('what is your name??')},
//         //     yearOfBirth: { value: prompt('When have you been born??')}
//         // });

//         arr.push(Object.create(personProto, {
//             name:{ value: prompt('What is your name??')},
//             yearOfBirth: { value: prompt('When have you been born??')}
//         }));
//         arr[i].age = arr[i].calcAge();

//         arr[i].ages = arr[i].arrayCalc([arr[i].yearOfBirth], arr[i].calculateAge);
//     }

//     return arr;
// }

// console.log(people);


// var Question = function(question, answers, correct) {
//     this.question = question;
//     this.answers = answers;
//     this.correct = correct;
// }

// Question.prototype.displayQuestion = function() {

//     console.log(this.question);

//     // for(var i = 0; i < this.answers.length; i++) {
//     //     console.log(i + ': ' + this.answers[i]);
//     // }

//     this.answers.forEach(function(el, i) {
//         console.log(i + ': ' + el);
//     });

// }

// Question.prototype.checkAnswer = function(ans, callBack) {

//     var sc;
//     if (ans === this.correct) {
//         console.log('Correct answer!!');
//         sc = callBack(true);
//     } else {
//         console.log('Wrong answer!!');
//         sc = callBack(false);
//     }

//     this.displayScore(sc);

// }

// Question.prototype.displayScore = function(score) {
//     console.log('Your current score is: ' + score);
//     console.log('-------------------------');
// }

// var q1 = new Question('How are you doing??', ['I\'m good', 'I\'m fine', 'Not good'], 0);
// var q2 = new Question('How old are you??', [19, 23, 25], 1);
// var q3 = new Question('What is the best pizza??', ['Mozzarella', 'Hawai', 'Proscuito'], 2);
// var questions = [q1, q2, q3];

// function score() {
//     var sc = 0;

//     return function(correct) {
//         if(correct) {
//             sc++;
//         }
//         return sc;
//     }
// }

// var keepScore = score();



// function nextQuestion() {

//     var n = Math.floor(Math.random() * questions.length);

//     questions[n].displayQuestion();
//     var answer = prompt('Please write an answer');

//     if(answer !== 'exit') {
//         questions[n].checkAnswer(parseInt(answer), keepScore);
//         nextQuestion()
//     }

// }

// nextQuestion();


var Question = function(question, answers, correct) {
    this.question = question;
    this.answers = answers; 
    this.correct = correct;
}

Question.prototype.displayQuestion = function() {
    
    console.log(this.question);

    this.answers.forEach(this.displayAnswers);

}

Question.prototype.displayAnswers = function(element, index) {
    console.log(index + ': ' + element);
}

Question.prototype.chechAnswer = function(ans, callBack) {

    var sc;
    if (ans === this.correct) {
        console.log('Correct answer!');
        sc = callBack(true);
    } else {
        console.log('Wrong answer!');
        sc = callBack(false);
    }

    this.showScore(sc);
}


Question.prototype.showScore = function(score) {
    console.log('-------------------');
    console.log('Your score is: ' + score);
    console.log('-------------------');
}


var q1 = new Question('How are you doing??', ['I\'m good', 'I\'m fine', 'Not good'], 0);
var q2 = new Question('How old are you??', [19, 23, 25], 1);
var q3 = new Question('What is the best pizza??', ['Mozzarella', 'Hawai', 'Proscuito'], 2);
var questions = [q1, q2, q3];
var keepScore = score();

function score() {
    var sc = 0;
    return function(correct) {
        if(correct) {
            sc++;
        }
        return sc;
    }
}


function nextQuestion() {

    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();
    var answer = prompt('Please insert correct answer!');

    if (answer !== 'exit') {
        questions[n].chechAnswer(Number(answer), keepScore);
        nextQuestion();
    }

}

nextQuestion();