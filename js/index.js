import elements from "./elements.js"

const Elements = elements({
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundFirePlace,
})

//Forest Audio
const forestSound = new Audio(
  "./sound/Floresta.wav"
  )
  
  function forestSoundOn() {
    forestSound.play()
  }

function forestSoundOff() {
  forestSound.pause()
}
  buttonSoundForest.addEventListener("click", function() {
    if (buttonSoundForest.classList.contains("soundOn")) {
      forestSoundOff()
      buttonSoundForest.classList.remove("soundOn")
    } else {
      forestSoundOn()
      buttonSoundForest.classList.add("soundOn")
    }
  })

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