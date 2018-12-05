import { Component, OnInit } from '@angular/core';
import { Card } from '../common/models/card.model';
import { Suit } from '../common/models/suit.model';
import * as _ from 'lodash';

@Component({
  selector: 'cards-deck',
  templateUrl: './cards-deck.component.html',
  styleUrls: ['./cards-deck.component.css']
})
export class CardsDeckComponent implements OnInit {
  cardsDeck: Array<Card>; // Array of 52 cards of the deck
  suits: Array<Suit> = [
    {name: 'Heart', color: 'red', icon:'&hearts;'},
    {name: 'Spade', color: 'black', icon:'&spades;'},
    {name: 'Club', color: 'black', icon:'&clubs;'},
    {name: 'Diamond', color: 'red', icon:'&diams;'}
  ];
  cardDealt: Card; // The object that contains the card dealt

  constructor() { }

  ngOnInit() {
    this.reset();
  }

  // Generate a deck of cards from A to K, in four suits
  generateCardsDeck() {
    this.cardsDeck = new Array<Card>();
    this.suits.forEach((suit) => {
      // Push the A card of each suit
      this.cardsDeck.push({value:'A', suit: suit});
      // Push cards from 2 to 10 of each suit
      _.range(2,11).forEach((number) => {
        this.cardsDeck.push({value:number, suit: suit});
       });
      // Push the J card of each suit
      this.cardsDeck.push({value:'J', suit: suit});
      // Push the Q card of each suit
      this.cardsDeck.push({value:'Q', suit: suit});
      // Push the K card of each suit
      this.cardsDeck.push({value:'K', suit: suit});
    });
  }

  // Function that randomly permute the cards in the deck
  shuffle() {
    let shuffledDeck = new Array<Card>();
    do {
      let deckLength = this.cardsDeck.length - 1;
      // Choose a random number from 0 to deck length (51 or less)
      let randomElement = _.random(0,deckLength);
      shuffledDeck.push(this.cardsDeck[randomElement]);
      this.cardsDeck.splice(randomElement, 1);
    }
    while (this.cardsDeck.length > 0);
    this.cardsDeck = shuffledDeck;
  }

  // Deals the first card of the deck
  dealOneCard() {
    this.cardDealt = this.cardsDeck.shift();
  }


  reset() {
    this.generateCardsDeck();
    this.cardDealt = new Card();
  }

}
