
function addMessage( elementId, message) {
    var browserList = document.getElementById(elementId),
        newItem = document.createElement('li');

    newItem.textContent = message;

    browserList.appendChild(newItem);
}

addMessage('browser', 'Page loaded, bitch');

document.body.addEventListener('click', function clickedIt () {
    addMessage('user', 'totally clicked it');
});

document.body.addEventListener('keypress', function keyboardedIt(event) {

    var oldLeft = getComputedStyle( document.body ).left,
        newLeft,
        oldTop = getComputedStyle( document.body ).top,
        newTop;

    oldLeft = parseInt(oldLeft, 10); // 10 kova sustava;
    oldTop = parseInt(oldTop, 10);

    console.log(event.keyCode);

    if (event.keyCode == '97') {
        newLeft = oldLeft - 10;
    } else if (event.keyCode == '100'){
        newLeft = oldLeft + 10;
    } else if(event.keyCode == '119') {
        newTop = oldTop - 10;
    } else if(event.keyCode == '115') {
        newTop = oldTop + 10;
    }

    // if(event.key == 'a') {
    //     newLeft = oldLeft - 10;
    //     // addMessage('user', 'Go left');
    // } else if (event.key == 'd') {
    //     newLeft = oldLeft + 10;
    //     // addMessage('user', 'Go right');
    // }

    document.body.style.left = newLeft + 'px';
    document.body.style.top = newTop + 'px';

    // addMessage('user', event.key );
});

window.addEventListener('beforeunload', function(event) {
    addMessage('browser', 'don\'t try to close me!');

    event.returnValue = ':(';
    return ':('; // just for IE and old browsers
})