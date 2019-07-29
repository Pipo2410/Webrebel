var dudes = document.querySelectorAll('.choice img');
dudes = Array.prototype.slice.call(dudes);


document.getElementsByTagName('h1')[0].addEventListener('click', function() {
    
    var score = +localStorage.getItem('score');

    var data = [
        {
            name: 'vasho',
            sexiness: 'off the charts',
            score: score
        },
        {
            name: 'mitch',
            sexiness: 'hamburger off the floor',
            score: score
        }
    ]

    console.log( JSON.stringify(data) );

    localStorage.setItem('score', ++score); // nemusim predtym score++ aleb takymto sposobom pridam 1 predtym ako ju pouzijem
    localStorage.setItem('sexytime', JSON.stringify(data) );

});


dudes.forEach(function(dude) {
    
    // on click, zdvihneme score
    dude.addEventListener('click', function() {
        
        var scoreElement = this.nextElementSibling,
            score = Number(scoreElement.textContent);
    
            score += 1;
            scoreElement.textContent = score;
    
    });

    // MOUSE ENTERs, enemy hurts
    dude.addEventListener('mouseover', function() {
        var otherDude = _.without(dudes, this)[0];
        otherDude.classList.add('desaturate');
    });
    
    // MOUSE ENTERs, enemy rises
    dude.addEventListener('mouseout', function() {
        var otherDude = _.without(dudes, this)[0];
        otherDude.classList.remove('desaturate');
    });
    
});
