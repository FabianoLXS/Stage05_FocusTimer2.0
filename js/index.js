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
const kitchenTimerSound = new Audio("./sound/kitchenTimer.mp3")

// variáveis declarativas
let minutes = Number(minutesDisplay.textContent)
let button
let ambienceSound
let imagePath
let seconds
let soundType
let timerTimeOut

//Audio Funcions
function ambienceSoundPlay(ambienceSound) {
  ambienceSound.play()
  button.classList.add("soundOn")
  imagePath.classList.add("soundOn")
}

function ambienceSoundPause(ambienceSound) {
  ambienceSound.pause()
  button.classList.remove("soundOn")
  imagePath.classList.remove("soundOn")
}

function toggleAmbienceSound(button, imagePath, ambienceSound) {
  if (button.classList.contains("soundOn")) {
    ambienceSoundPause(ambienceSound)
  } else {
    ambienceSoundPlay(ambienceSound)
  }
}

// Sound button listener
buttonSoundForest.addEventListener("click", function () {
  soundType = "forest"
  soundButton(soundType)
  toggleAmbienceSound(button, imagePath, ambienceSound)
})

buttonSoundRain.addEventListener("click", function () {
  soundType = "rain"
  soundButton(soundType)
  toggleAmbienceSound(button, imagePath, ambienceSound)
})

buttonSoundCoffeeShop.addEventListener("click", function () {
  soundType = "coffeeShop"
  soundButton(soundType)
  toggleAmbienceSound(button, imagePath, ambienceSound)
})

buttonSoundFirePlace.addEventListener("click", function () {
  soundType = "firePlace"
  soundButton(soundType)
  toggleAmbienceSound(button, imagePath, ambienceSound)
})

function soundButton(soundType) {
  switch (soundType) {
    case "forest":
      button = buttonSoundForest
      imagePath = pathForest
      ambienceSound = forestSound
      break
    case "rain":
      button = buttonSoundRain
      imagePath = pathRain
      ambienceSound = rainSound
      break
    case "coffeeShop":
      button = buttonSoundCoffeeShop
      imagePath = pathCoffeeShop
      ambienceSound = coffeeShopSound
      break
    case "firePlace":
      button = buttonSoundFirePlace
      imagePath = pathFire
      ambienceSound = firePlaceSound
      break
  }
}

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
    playPauseButton("play")
    clearTimeout(timerTimeOut)
  } else {
    pathPlay.classList.add("pressedButton")
    countDown()
  }
})

//Botão Pause
buttonPause.addEventListener("click", function () {
  if (buttonPause.classList.contains("pressedButton")) {
    playPauseButton("pause")
    countDown()
  } else {
    pathPause.classList.add("pressedButton")
    clearTimeout(timerTimeOut)
  }
})

//Botão Stop
buttonStop.addEventListener("click", function () {
  if (pathStop.classList.contains("pressedButton")) {
    pathStop.classList.remove("pressedButton")
  } else {
    resetControls()
    setTimeout(function () {
      pathStop.classList.remove("pressedButton")
    }, 120)
    clearTimeout(timerTimeOut)
    resetTimer()
  }
})
//Botão Increase
buttonIncrease.addEventListener("click", function () {
  if (pathIncrease.classList.contains("pressedButton")) {
    pathIncrease.classList.remove("pressedButton")
  } else {
    pathIncrease.classList.add("pressedButton")
    setTimeout(function () {
      pathIncrease.classList.remove("pressedButton")
    }, 120)
    minutes = minutes + 5
    updateTimerDisplay(minutes, 0)
  }
})

//Botão Descrease
buttonDecrease.addEventListener("click", function () {
  if (pathDecrease.classList.contains("pressedButton")) {
    pathDecrease.classList.remove("pressedButton")
  } else {
    pathDecrease.classList.add("pressedButton")
    setTimeout(function () {
      pathDecrease.classList.remove("pressedButton")
    }, 120)
    minutes = minutes - 5
    updateTimerDisplay(minutes, 0)
  }
})

//Set minutes function
function setMinutes() {
  let newMinutes = Number(prompt("Quantos minutos?"))
  if (!newMinutes) {
    clearTimeout(timerTimeOut)
    resetControls()
    resetTimer()
  } else {
    minutes = newMinutes
    updateTimerDisplay(minutes, 0)
  }
}

//Countdown Function
function countDown() {
  timerTimeOut = setTimeout(function (minutes, seconds) {
    minutes = Number(minutesDisplay.textContent)
    seconds = Number(secondsDisplay.textContent)

    if (minutes <= 0 && seconds <= 1) {
      resetControls()
      secondsDisplay.textContent = "00"
      kitchenTimerSound.play()
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

function resetTimer() {
  updateTimerDisplay(minutes, 0)
}

function playPauseButton(buttonType) {
  switch (buttonType) {
    case "play":
      buttonPause.classList.remove("hide")
      buttonPause.classList.add("pressedButton")
      pathPlay.classList.remove("pressedButton")
      buttonPlay.classList.add("hide")
      break
    case "pause":
      buttonPause.classList.add("hide")
      buttonPause.classList.remove("pressedButton")
      buttonPlay.classList.remove("hide")
      pathPlay.classList.add("pressedButton")
      break
  }
}
