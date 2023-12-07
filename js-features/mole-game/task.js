const holes = document.querySelectorAll('.hole')
const deadText = document.getElementById('dead')
const lostText = document.querySelector('#lost')

let kills = 0
let missed = 0

// const restartGame = alert_text => {
function restartGame(alert_text) {
    alert(alert_text)
    kills = 0
    deadText.innerHTML = kills
    missed = 0
    lostText.innerHTML = missed
}

holes.forEach( (hole) => {
    hole.addEventListener('click', () => {
        if(hole.classList.contains('hole_has-mole')) {
            kills++
            deadText.innerHTML = kills
            console.log(`kills: ${kills}`)
            if (kills == 10) {
                restartGame("Победа!")
            }
        } else {
            missed++
            lostText.innerHTML = missed
            console.log(`missed: ${missed}`)
            if (missed == 5) {
                restartGame("Поражение")
            }
        }
    })
})