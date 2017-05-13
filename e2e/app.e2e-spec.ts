import { Ang2CliTestPage } from './app.po';

describe('ang2-cli-test App', () => {
  let page: Ang2CliTestPage;

  beforeEach(() => {
    page = new Ang2CliTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
