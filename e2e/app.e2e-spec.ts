import { Ng4CookbookPage } from './app.po';

describe('ng4-cookbook App', function() {
  let page: Ng4CookbookPage;

  beforeEach(() => {
    page = new Ng4CookbookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
