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
