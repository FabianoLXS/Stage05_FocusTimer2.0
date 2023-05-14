export default function elements() {
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

  return {
    buttonPlay,
    buttonStop,
    buttonIncrease,
    buttonDecrease,
    buttonSoundForest,
    buttonSoundRain,
    buttonSoundCoffeeShop,
    buttonSoundFirePlace,
  }

}

