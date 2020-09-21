setInterval(setClock, 1000)

const hourHand = document.querySelector("[data-hourHand]")
const minuteHand = document.querySelector("[data-minuteHand]")
const secondHand = document.querySelector("[data-secondHand]")
console.log(hourHand)


function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)

}

function setRotation(element, rotationRatio){
    element.style.setProperty("--rotation", rotationRatio * 360)
}
setClock()