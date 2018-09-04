import { FrontEndTSPage } from './app.po';

describe('front-end-ts App', function() {
  let page: FrontEndTSPage;

  beforeEach(() => {
    page = new FrontEndTSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
