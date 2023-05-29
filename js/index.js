//Timer variables
const time = document.querySelector(".time")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")

const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector(".stop")
const buttonIncrease = document.querySelector(".increase")
const buttonDecrease = document.querySelector(".decrease")

//Sound variables
const buttonSoundForest = document.querySelector(".forestButton")
const buttonSoundRain = document.querySelector(".rainButton")
const buttonSoundCoffeeShop = document.querySelector(".coffeeShopButton")
const buttonSoundFirePlace = document.querySelector(".firePlaceButton")

//Buttons Images Variables
const pathForest = document.querySelector("path.forestButton")
const pathRain = document.querySelector("path.rainButton")
const pathCoffeeShop = document.querySelector("path.coffeeShopButton")
const pathFire = document.querySelector("path.firePlaceButton")
const pathPlay = document.querySelector("path.play")
const pathStop = document.querySelector("path.stop")
const pathIncrease = document.querySelector("path.increase")
const pathDecrease = document.querySelector("path.decrease")

// function Forest() {
//Forest Audio
const forestSound = new Audio("./sound/Floresta.wav")

function forestSoundOn() {
  forestSound.play()
}

function forestSoundOff() {
  forestSound.pause()
}
buttonSoundForest.addEventListener("click", function () {
  if (buttonSoundForest.classList.contains("soundOn")) {
    forestSoundOff()
    buttonSoundForest.classList.remove("soundOn")
    pathForest.classList.remove("soundOn")
  } else {
    forestSoundOn()
    buttonSoundForest.classList.add("soundOn")
    pathForest.classList.add("soundOn")
  }
})
// }

// function Rain() {
//Rain Audio
const rainSound = new Audio("./sound/Chuva.wav")

function rainSoundOn() {
  rainSound.play()
}

function rainSoundOff() {
  rainSound.pause()
}
buttonSoundRain.addEventListener("click", function () {
  if (buttonSoundRain.classList.contains("soundOn")) {
    rainSoundOff()
    buttonSoundRain.classList.remove("soundOn")
    pathRain.classList.remove("soundOn")
  } else {
    rainSoundOn()
    buttonSoundRain.classList.add("soundOn")
    pathRain.classList.add("soundOn")
  }
})
// }

// function CoffeeShop() {
//CoffeeShop Audio
const coffeeShopSound = new Audio("./sound/Cafeteria.wav")

function coffeeShopSoundOn() {
  coffeeShopSound.play()
}

function coffeeShopSoundOff() {
  coffeeShopSound.pause()
}
buttonSoundCoffeeShop.addEventListener("click", function () {
  if (buttonSoundCoffeeShop.classList.contains("soundOn")) {
    coffeeShopSoundOff()
    buttonSoundCoffeeShop.classList.remove("soundOn")
    pathCoffeeShop.classList.remove("soundOn")
  } else {
    coffeeShopSoundOn()
    buttonSoundCoffeeShop.classList.add("soundOn")
    pathCoffeeShop.classList.add("soundOn")
  }
})
// }

// function FirePlace() {
//FiePlace Audio
const firePlaceSound = new Audio("./sound/Lareira.wav")

function firePlaceSoundOn() {
  firePlaceSound.play()
}

function firePlaceSoundOff() {
  firePlaceSound.pause()
}
buttonSoundFirePlace.addEventListener("click", function () {
  if (buttonSoundFirePlace.classList.contains("soundOn")) {
    firePlaceSoundOff()
    buttonSoundFirePlace.classList.remove("soundOn")
    pathFire.classList.remove("soundOn")
  } else {
    firePlaceSoundOn()
    buttonSoundFirePlace.classList.add("soundOn")
    pathFire.classList.add("soundOn")
  }
})
// }

//função set time
time.addEventListener("click", function () {
  if (pathPlay.classList != "pressedButton") {
    getMinutes()
  }
})

//função Play
buttonPlay.addEventListener("click", function () {
  if (
    pathPlay.classList.contains("pressedButton") &&
    buttonPause.classList.contains("hide")
  ) {
    pathPlay.classList.remove("pressedButton")
    buttonPlay.classList.add("hide")
    buttonPause.classList.remove("hide")
    buttonPause.classList.add("pressedButton")
  } else {
    pathPlay.classList.add("pressedButton")
    countDown()
  }
})

//função Pause
buttonPause.addEventListener("click", function () {
  if (buttonPause.classList.contains("pressedButton")) {
    buttonPause.classList.add("hide")
    buttonPause.classList.remove("pressedButton")
    buttonPlay.classList.remove("hide")
    pathPlay.classList.add("pressedButton")
  } else {
    pathPause.classList.add("pressedButton")
  }
})

//função Stop
buttonStop.addEventListener("click", function () {
  if (pathStop.classList.contains("pressedButton")) {
    pathStop.classList.remove("pressedButton")
  } else {
    buttonPause.classList.add("hide")
    buttonPlay.classList.remove("hide")
    pathPlay.classList.remove("pressedButton")
    pathStop.classList.add("pressedButton")
  }
})

//função Increase
buttonIncrease.addEventListener("click", function () {
  if (pathIncrease.classList.contains("pressedButton")) {
    pathIncrease.classList.remove("pressedButton")
  } else {
    pathIncrease.classList.add("pressedButton")
  }
})

//função Descrease
buttonDecrease.addEventListener("click", function () {
  if (pathDecrease.classList.contains("pressedButton")) {
    pathDecrease.classList.remove("pressedButton")
  } else {
    pathDecrease.classList.add("pressedButton")
  }
})

//countdown function

function getMinutes() {
  let newMinutes = Number(prompt("Quantos minutos?"))
  minutesDisplay.textContent = newMinutes || "00"
}

function countDown() {
  setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    if (seconds <= 0) {
      seconds = 2

      minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
    }

    if (minutes <= 0) {
      console.log(seconds)
      return
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
    countDown()
  }, 1000)
}
