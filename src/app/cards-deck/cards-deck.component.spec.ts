import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsDeckComponent } from './cards-deck.component';

describe('CardsDeckComponent', () => {
  let component: CardsDeckComponent;
  let fixture: ComponentFixture<CardsDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsDeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the cards deck component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the suits array with 4 elements', () => {
    expect(component.suits.length).toBe(4);
  });

  it('should generate a deck of 52 cards on init', () => {
    expect(component.cardsDeck.length).toBe(52);
  });

  it('shuffle function should permute the cards of the deck randomly', () => {
    let initialDeck = Object.assign({}, component.cardsDeck);
    component.shuffle();
    expect(component.cardsDeck[0].value === initialDeck[0].value && component.cardsDeck[0].suit.name === initialDeck[0].suit.name).toBeFalsy();
  });

  it('dealOneCard function should return the first card of the deck', () => {
    let firstCard = component.cardsDeck[0];
    component.dealOneCard();
    expect(component.cardDealt.value).toEqual(firstCard.value);
  });

});
