
function startGame() {
    // hide the element ////
    hideById('home-screen')
    
    // show the playGround ///
    showById('play-ground')


    const alphabet = randomAlphabet();
    console.log(alphabet)

    // show the random alphabet////
    const letter = document.getElementById('random');
    letter.innerText=alphabet


}