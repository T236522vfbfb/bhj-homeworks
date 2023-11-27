const holes = document.querySelectorAll('.hole')
let kills = 0
let missed = 0

holes.forEach( (hole) => {
    hole.addEventListener('click', () => {
        if(hole.classList.contains('hole_has-mole')) {
            kills++
            console.log(`kills: ${kills}`)
            if (kills == 10) {
                alert("Победа!")
            }
        } else {
            missed++
            console.log(`missed: ${missed}`)
            if (missed == 5) {
                alert("Поражение")
            }
        }
    })
})