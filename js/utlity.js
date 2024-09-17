
function hideById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');


    
}
function showById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')

    
}

function randomAlphabet() {

    const alphabets = 'qwertyuiopasdfghjklzxcvbnm';
    const alpha = alphabets.split('')
    const randomIndex = Math.random() * 25;
    const index = Math.round(randomIndex);
    // console.log(index)
    const alphabet = alpha[index];
    return alphabet;;;;;;
     
 }