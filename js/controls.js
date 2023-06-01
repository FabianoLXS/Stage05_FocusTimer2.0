//Reset controls function
function resetControls() {
  buttonPlay.classList.remove("hide")
  buttonPause.classList.add("hide")
  pathPlay.classList.remove("pressedButton")
  pathStop.classList.remove("pressedButton")
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