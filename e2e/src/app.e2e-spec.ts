import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Deck of Cards');
  });

  it('should display a card when clicking deal one card button', () => {
    page.getDealCardButton().click();
    expect(page.getCardDealt().isPresent()).toBeTruthy();
  });

});
