let player = {
  Name: "Cecil",
  Chips: 150
}
let cards = []
let sum = 0
let isAlive = false 
let hasBlackjack = false
let message =  ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.Name + ": $" + player.Chips


function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function getRandomCard() {
  let randomCard = Math.floor(Math.random() *13) + 1
  if (randomCard > 10) {
    return 10
  }
  else if (randomCard === 1) {
    return 11
  }
  else {
    return randomCard
  }
}
let RandomCard = getRandomCard()
console.log(RandomCard)
function renderGame() {
  cardEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " "
  }
  sumEl.textContent = "Sum: " + sum
  if (sum <= 20) {
    message = "Do you want to draw a new game?"
} else if (sum === 21) {
    message = "You've got blackjack!"
    hasBlackjack = true
} else {
    message = "You're out of the game!"
    isAlive = false
}
messageEl.innerText = message
    
}

function newCard() {
  if (isAlive === true && hasBlackjack === false) {
  console.log("Drawing a new card from the deck!")
  let card = getRandomCard()
  sum += card
  cards.push(card)
  renderGame()
  }
}
