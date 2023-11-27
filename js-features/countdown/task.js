const timer = document.getElementById('timer')
const status = document.getElementById('status')

function countdown(seconds) {
    let remainTime = seconds;
    timer.innerHTML = remainTime

    const interval = setInterval(() => {
        timer.innerHTML = remainTime
        if (remainTime === 0) {
            clearInterval(interval)
            alert('Вы победили в конкурсе!')
        } else {
            remainTime -= 1
        }
    }, 1000)
}

countdown(60)