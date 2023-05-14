import "./elements.js"
import "./sound.js"
import "./events.js"
import "./timer.js"
import "./controls.js"

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