function carsMoving(x, y) {
    let direction = null;

    function moveCar {
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
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
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