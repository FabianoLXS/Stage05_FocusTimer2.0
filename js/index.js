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

//Ambience Sound variables
const forestSound = new Audio("./sound/Floresta.wav")
const rainSound = new Audio("./sound/Chuva.wav")
const coffeeShopSound = new Audio("./sound/Cafeteria.wav")
const firePlaceSound = new Audio("./sound/Lareira.wav")
let button
let ambienceSound
let imagePath
let minutes
let seconds


//experimento de refatoração
function ambienceSoundPlay(ambienceSound) {
  ambienceSound.play()
}

function ambienceSoundPause(ambienceSound) {
  ambienceSound.pause()
}

function toggleAmbienceSound(button, imagePath, ambienceSound) {
    if (button.classList.contains("soundOn")) {
      ambienceSoundPause(ambienceSound)
      button.classList.remove("soundOn")
      imagePath.classList.remove("soundOn")
    } else {
      ambienceSoundPlay(ambienceSound)
      button.classList.add("soundOn")
      imagePath.classList.add("soundOn")
    }
}



// teste forest refatorado
buttonSoundForest.addEventListener("click", function  (){
  button = buttonSoundForest
  imagePath = pathForest
  ambienceSound = forestSound
  toggleAmbienceSound(button, imagePath, ambienceSound)
})



//Forest Audio


// function forestSoundOn() {
//   forestSound.play()
// }

// function forestSoundOff() {
//   forestSound.pause()
// }
// buttonSoundForest.addEventListener("click", function () {
//   if (buttonSoundForest.classList.contains("soundOn")) {
//     forestSoundOff()
//     buttonSoundForest.classList.remove("soundOn")
//     pathForest.classList.remove("soundOn")
//   } else {
//     forestSoundOn()
//     buttonSoundForest.classList.add("soundOn")
//     pathForest.classList.add("soundOn")
//   }
// })
// }

// function Rain() {
//Rain Audio

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
    setMinutes()
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

//Botão Pause
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

//Botão Stop
buttonStop.addEventListener("click", function () {
  if (pathStop.classList.contains("pressedButton")) {
    pathStop.classList.remove("pressedButton")
  } else {
    buttonPause.classList.add("hide")
    buttonPlay.classList.remove("hide")
    pathPlay.classList.remove("pressedButton")
    pathStop.classList.add("pressedButton")
    setTimeout(function () {
      pathStop.classList.remove("pressedButton")
    }, 120)
  
  }
})
//Botão Increase
buttonIncrease.addEventListener("click", function () {
  if (pathIncrease.classList.contains("pressedButton")) {
    pathIncrease.classList.remove("pressedButton")
  } else {
    pathIncrease.classList.add("pressedButton")
  }
})

//Botão Descrease
buttonDecrease.addEventListener("click", function () {
  if (pathDecrease.classList.contains("pressedButton")) {
    pathDecrease.classList.remove("pressedButton")
  } else {
    pathDecrease.classList.add("pressedButton")
  }
})

//Set minutes function
function setMinutes() {
  minutes = Number(prompt("Quantos minutos?"))
  updateTimerDsiplay(minutes, 0)
}

//Countdown Function
function countDown() {
  setTimeout(function (minutes, seconds) {
    minutes = Number(minutesDisplay.textContent)
    seconds = Number(secondsDisplay.textContent)
    
    if (minutes <= 0 && seconds <= 1) {
      resetControls()
      secondsDisplay.textContent = "00"
      return
    }
    
    if (seconds <= 0) {
      seconds = 60
      --minutes
    }
    --seconds
    updateTimerDisplay(minutes, seconds)
    countDown()
  }, 1000)
}

//Reset controls function
function resetControls() {
  buttonPlay.classList.remove("hide")
  buttonPause.classList.add("hide")
  pathPlay.classList.remove("pressedButton")
  pathStop.classList.remove("pressedButton")
}
// Update timer display function
function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

