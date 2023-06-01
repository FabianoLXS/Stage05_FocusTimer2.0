

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