//Timer variables
const buttonPlay = document.querySelector(".play")
const buttonStop = document.querySelector(".stop")
const buttonIncrease = document.querySelector(".increase")
const buttonDecrease = document.querySelector(".decrease")

//Sound variables
const buttonSoundForest = document.querySelector(".forestButton")
const buttonSoundRain = document.querySelector(".rainButton")
const buttonSoundCoffeeShop = document.querySelector(".coffeeShopButton")
const buttonSoundFirePlace = document.querySelector(".firePlaceButton")

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
    } else {
      forestSoundOn()
      buttonSoundForest.classList.add("soundOn")
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
    } else {
      rainSoundOn()
      buttonSoundRain.classList.add("soundOn")
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
    } else {
      coffeeShopSoundOn()
      buttonSoundCoffeeShop.classList.add("soundOn")
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
    } else {
      firePlaceSoundOn()
      buttonSoundFirePlace.classList.add("soundOn")
    }
  })
// }
