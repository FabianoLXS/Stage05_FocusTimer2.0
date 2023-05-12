import elements from "./elements.js"
import Sounds from "./sound.js"

const elements = elements({
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundFirePlace,
})

const Sounds = Sounds({
  Forest,
  Rain,
  CoffeeShop,
  FirePlace,
})

console.log(Sounds)