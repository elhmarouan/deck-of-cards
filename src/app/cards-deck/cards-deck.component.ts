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
  cardsDeck: Array<Card>;
  suits: Array<Suit> = [
    {name: 'Heart', color: 'red', icon:'&hearts;'},
    {name: 'Spade', color: 'black', icon:'&spades;'},
    {name: 'Club', color: 'black', icon:'&clubs;'},
    {name: 'Diamond', color: 'red', icon:'&diams;'}
  ];
  cardDealt: Card;

  constructor() { }

  ngOnInit() {
    this.reset();
  }

  generateCardsDeck() {
    this.cardsDeck = new Array<Card>();
    this.suits.forEach((suit) => {
      this.cardsDeck.push({value:'A', suit: suit});
      _.range(2,11).forEach((number) => {
        this.cardsDeck.push({value:number, suit: suit});
       });
      this.cardsDeck.push({value:'J', suit: suit});
      this.cardsDeck.push({value:'Q', suit: suit});
      this.cardsDeck.push({value:'K', suit: suit});
    });
  }

  shuffle() {
    let shuffledDeck = new Array<Card>();
    let deckLength = 51;
    do {
      let randomElement = _.random(0,deckLength);
      shuffledDeck.push(this.cardsDeck[randomElement]);
      this.cardsDeck.splice(randomElement, 1);
      deckLength--;
    }
    while (this.cardsDeck.length > 0);
    this.cardsDeck = shuffledDeck;
  }

  dealOneCard() {
    this.cardDealt = this.cardsDeck.shift();
  }

  reset() {
    this.generateCardsDeck();
    this.cardDealt = new Card();
  }

}
