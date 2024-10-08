//push(); pop(); unshift(); shift(); <- ways to insert/delete 1st and last indexed items from arrays

//arrays
let cards = [] //empty array - ordered list of items
let sum = 0;

//objects store data in-depth - composite / complex data type
// key/value pairs

let playerEl = document.getElementById("player-el")

let player = {
    name: "",
    chips: 145,
}

function displayName() {
    player.name = document.getElementById("name").value;
    playerEl.textContent = player["name"] + ": $" + player["chips"]

    alert("Hello " + player.name + "! You have $145 now.")
}


//States
let hasBlackJack = false;
let isAlive = false;
let message = "";

//DOM
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");

// calling object dict values can also use player.name & player.chips

// let sumEl = document.querySelector(".sum-el")

function getRandomCard() {
    // random generation
    num = Math.floor(Math.random() * 13) + 1;
    console.log(num)
    if (num === 1) {
        return 11
    } else if (num >= 11) {
        return 10
    } else {
        return(num)
    }
}

function startGame() {
    if (player.name === '') {
        alert("Please enter your name.")
    } else if (sum > 0 && sum < 21) {
        alert("Deal a New Card or Clear Game to Play Again!")
    } else if (sum >= 21) {
        alert("Clear game and Start Game to Play Again!")
    } else {
        isAlive = true;
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards.push(firstCard)
        cards.push(secondCard)
        sum = firstCard + secondCard
        renderGame();
    }
}

function renderGame() {
    // render out firstCard and secondCard
    cardsEl.textContent = ""

    for (let i=0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got BlackJack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    };

    messageEl.textContent = message;

    //Message
    console.log(message);

    // Bust!
    console.log("Alive? " + isAlive);

    // Cash Out!
    console.log("Blackjack? " + hasBlackJack);
}


function newCard() {
    if (isAlive === false || hasBlackJack === true) {
        alert("Uh oh. You Must Click 'Start game' first.")
    } else {
        let card = getRandomCard();
        sum += card;
    
        cards.push(card)
        console.log(cards)
        renderGame()
    }
}

function clearCards() {
    cards = [];
    sum = 0;
    cardsEl.textContent = "";
    sumEl.textContent = "";
}

