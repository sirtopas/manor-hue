import { ManorHuePage } from './app.po';

describe('manor-hue App', function() {
  let page: ManorHuePage;

  beforeEach(() => {
    page = new ManorHuePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
