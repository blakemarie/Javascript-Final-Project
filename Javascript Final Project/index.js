// Card class representing an each card in the deck
class Card {
    constructor(value, suit) {
      this.value = value; // The value of the card (1-13)
      this.suit = suit;   // The suit of the card 
    }
  
    // Method to get a string of the cards
    geteachCard() {
      let names = [null, "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
      return `${names[this.value]} of ${this.suit}`;
    }
  }
  
  // Deck class representing a deck of 52 cards
  class Deck {
    constructor() {
      this.cards = []; // Array of cards
      let cardSuits = ["Spades 🗡️", "Hearts ❤️", "Diamonds 💎", "Clubs 🍀"];
      
      // Loop to create all 52 cards
      for (let i = 1; i <= 13; i++) {
        for (let suit of cardSuits) {
          this.cards.push(new Card(i, suit)); // Create a new Card object
        }
      }
    }
  
    // Method to shuffle the deck randomly
    shuffle() {
      this.cards.sort(() => Math.random() - 0.5);
    }
  
    // Method to deal the cards to 2 players
    deal() {
      return [this.cards.slice(0, 26), this.cards.slice(26, 52)];
    }
  }
  
  // identifies the players
  class Player {
    constructor(name, hand) {
      this.name = name;   // The name of the player
      this.hand = hand;   // The player's hand (an array of 26 cards)
      this.score = 0;     // Player's score, starts at 0
    }
  
    // Method for the player to play top card
    playCard() {
      return this.hand.shift();
    }
  
    // Method to add a point
    addPoint() {
      this.score += 1;
    }
  }
  
  // Game class outline how the game is played
  class Game {
    constructor() {
      this.deck = new Deck(); // Create a new Deck object
      this.deck.shuffle();    // Shuffle the deck
      let hands = this.deck.deal(); // Deal the deck into two hands for two players
  
      // give two players their cards
      this.player1 = new Player("Player 1", hands[0]);
      this.player2 = new Player("Player 2", hands[1]);
    }
  
    // Method to play the game
    playGame() {
      // Loop through 26 rounds
      for (let i = 0; i < 26; i++) {
        let card1 = this.player1.playCard(); // play a card
        let card2 = this.player2.playCard();
  
        // update the game through rounds
        console.log(`Round ${i + 1}:`);
        console.log(`${this.player1.name} plays ${card1.geteachCard()}`);
        console.log(`${this.player2.name} plays ${card2.geteachCard()}`);
  
        // Compare the two cards to find the winner
        if (card1.value > card2.value) {
          console.log(`${this.player1.name} won this round!`);
          this.player1.addPoint(); // Player 1 wins a point
        } else if (card2.value > card1.value) {
          console.log(`${this.player2.name} won this round!`);
          this.player2.addPoint(); // Player 2 wins a point
        } else {
          console.log("Tie!");
        }
        console.log("");
      }
  
      // show the total score and winner
      this.displayWinner();
    }
  
    // Method to show the final score and the winner
    displayWinner() {
      console.log(`Final Score:`);
      console.log(`${this.player1.name}: ${this.player1.score}`);
      console.log(`${this.player2.name}: ${this.player2.score}`);
  
      // find the winner
      if (this.player1.score > this.player2.score) {
        console.log(`${this.player1.name} won the game!`);
      } else if (this.player2.score > this.player1.score) {
        console.log(`${this.player2.name} won the game!`);
      } else {
        console.log("It's a tie!");
      }
    }
  }
  
  // play the game
  let game = new Game();
  game.playGame();
  