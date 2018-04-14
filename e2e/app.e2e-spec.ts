import { KikoniaPage } from './app.po';

describe('kikonia App', () => {
  let page: KikoniaPage;

  beforeEach(() => {
    page = new KikoniaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
