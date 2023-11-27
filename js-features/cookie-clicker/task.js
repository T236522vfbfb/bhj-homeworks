const clickerCounter = document.getElementById('clicker__counter')
const cookie = document.getElementById('cookie')
let clicks = 0;

cookie.addEventListener('click', () => {
    clickerCounter.innerHTML = ++clicks
    if(clicks%2) {
        cookie.width = '250'
    } else {
        cookie.width = '200'
    }
})