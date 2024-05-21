function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  let time = getRandomInt(24);
  let currentState
  if (time < 12) {
      currentState = ("Good morning (●'◡'●)")
  }
  else if (time <= 18) {
      currentState = ("Good afternoon (●'◡'●)")
  }
  else {
      currentState = ("Good evening (●'◡'●)")
  }
  document.getElementById("title").innerHTML = currentState