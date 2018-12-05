import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getShuffleButton() {
    return element(by.id('shuffleButton'));
  }

  getDealCardButton() {
    return element(by.id('dealButton'));
  }

  getResetButton() {
    return element(by.id('resetButton'));
  }

  getCardDealt() {
    return element(by.id('cardDealt'))
  }

}
