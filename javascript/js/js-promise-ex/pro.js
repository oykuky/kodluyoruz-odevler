const box = document.querySelector('.square')

const wait = ms => new Promise(resolve => setTimeout (resolve , ms))

wait(500)

.then(() => {
    box.classList.add('bigger')
    return wait(1000) //1000 ms daha bekler
})

.then(() => {
    box.classList.add('circle')
    return wait(500)
})

.then(() => {
    box.classList.add('mov')
    return wait(500)
})
.then(() => {
    box.classList.add('colored')
    return wait(500)
})
.then(() => {
    box.classList.remove('colored')
    return wait (500)
})
.then(() => {
    box.classList.remove('mov')
    return wait (500)
})
.then(() => {
    box.classList.remove('circle')
    return wait (500)
})
.then(() => {
    box.classList.remove('bigger')
    return wait (500)
})

.finally (() => {
    console.log("Animasyon bitti")
})