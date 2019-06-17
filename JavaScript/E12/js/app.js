var dude = document.getElementById('vasho');

dude.addEventListener('click', function() {
    
    var scoreElement = this.nextElementSibling,
        score = Number(scoreElement.textContent);

        score += 1;
        scoreElement.textContent = score;

});