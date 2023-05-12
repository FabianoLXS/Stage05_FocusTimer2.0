//Timer variables
const buttonPlay = document.querySelector(".play")
const buttonStop = document.querySelector(".stop")
const buttonPlus = document.querySelector(".plus")
const buttonMinus = document.querySelector(".minus")

//Sound variables
const buttonSoundForest = document.querySelector(".forestButton")
const buttonSoundRain = document.querySelector('.rainButton')
const buttonSoundCoffeeShop = document.querySelector('.coffeeShopButton')
const buttonSoundFirePlace = document.querySelector('.firePlaceButton')

//Button variables

// buttonPlay.addEventListener("click", function () {
//   // buttonPlay.classList.add("pressed")
//   buttonPlay.classList.add("pressed")
//   console.log(buttonPlay)
// })


//function Pressed Button Sound


buttonSoundForest.addEventListener("click", function() {
  pressButtonForest()
  buttonSoundForest.classList.add("soundOn")

})

//Audio
const forestSound = new Audio(
  "./sound/Floresta.wav"
)

function pressButtonForest() {
  forestSound.play()
}