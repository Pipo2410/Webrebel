var dudes = document.querySelectorAll('.choice img');
dudes = Array.prototype.slice.call(dudes); // Array.from(dudes);

dudes.forEach(function(dude) {
    
    dude.addEventListener('click', function() {
        
        var scoreElement = this.nextElementSibling,
            score = Number(scoreElement.textContent);
    
            score += 1;
            scoreElement.textContent = score;
    
    });
    
});