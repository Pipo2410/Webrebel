var scores, roundScore, activePlayer, isPlaying;
init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    
    if (isPlaying) {
        var dice = Math.floor(Math.random() * 6) + 1;
        document.querySelector('.dice').src = 'dice-' + dice + '.png';
        document.querySelector('.dice').style.display = 'block';
    
        if (dice !== 1) {
            roundScore+= dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
           nextPlayer();
        }
    }

});

document.querySelector('.btn-hold').addEventListener('click', function() {
    
    if (isPlaying) {
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
        if (scores[activePlayer] >= 20) {
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            isPlaying = false;
        } else {
            nextPlayer();
        }
    }

});

document.querySelector('.btn-new').addEventListener('click', init);


function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    isPlaying = true;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player1';
    document.querySelector('#name-1').textContent = 'Player2';
}

function nextPlayer () {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}