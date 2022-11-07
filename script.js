
function newCar(url) {
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'absolute'
    document.body.append(image)
    return image
}

let npc1 = {
    npc1: newCar('assets/redcar.png'),
    npc1: carsMoving(100,100)
}

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