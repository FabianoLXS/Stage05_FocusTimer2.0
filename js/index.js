
import { Timer } from "./timer.js"
import { Controls } from "./controls.js"

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

export const timer = Timer({
  time,
  pathPlay,
  minutesDisplay,
  secondsDisplay,
  kitchenTimerSound,
  timerTimeOut,
  minutes,
  seconds,
  // controls,
})


const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonIncrease,
  buttonDecrease,
  pathPlay,
  pathStop,
  pathIncrease,
  pathDecrease,
  timerTimeOut,
  timer,
  minutes
})        



