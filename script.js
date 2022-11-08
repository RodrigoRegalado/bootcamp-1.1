
function newCar(url) {
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'relative'
    document.body.append(image)
    return image
}
// the seperate cars
let npc1 = {
    npc1: newCar('assets/redcar.png'),
    npc1: carsMoving(200,100)
}
let npc2 = {
    npc2: newCar('assets/bluecar.png'),
    npc2: carsMoving(300,100)
}
let npc3 = {
    npc3: newCar('assets/greencar.png'),
    npc3: carsMoving(500,100)
}
// functions controlling the buttons
document.getElementById("start-button").addEventListener("click",pathOfCars())
document.getElementById("start-button").addEventListener("click", function handleCLick() { 
    document.getElementById("start-button").remove()
})

const btn2 = document.getElementById("quick-time-event-button")

setTimeout(function turnButtonRed() {
    btn2.style.color="#eb4034"
},6000)
function turnButtonBlack() {
    btn2.style.color="#000000"
}
document.getElementById("startbutton").addEventListener("click",turnButtonRed())
btn2.addEventListener("click", turnButtonBlack())


// function for how the cars move
function carsMoving(x, y) {
    let direction = null;

    function moveCar() {
        if (direction === 'west') {
            x -= 1
        }
        if (direction === 'north') {
            y += 1
        }
        if (direction === 'east') {
            x += 1
        }
        if (direction === 'south') {
            y -= 1
        }

    }
    setInterval(moveCar, 1)

    async function driveEast(time) {
        direction ='east'
        await sleep(time)
        stop()
    }
    async function driveSouth(time) {
        direction ='south'
        await sleep(time)
        stop()
    }
    async function driveWest(time) {
        direction ='west'
        await sleep(time)
        stop()
    }
    async function driveNorth(time) {
        direction ='north'
        await sleep(time)
        stop()
    }
    function stop() {
        direction = null 
    }
    return {
        driveWest: driveWest,
        driveNorth: driveNorth,
        driveSouth: driveSouth,
        driveEast: driveEast,
        stop: stop
    }
}

function sleep(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

async function pathOfCars() {
    await npc1.driveEast(1400)
    await npc1.driveSouth(500)
    stop()
}
pathOfCars()