import { Ang2CliTestPage } from './app.po';

describe('ang2-cli-test App', () => {
  let page: Ang2CliTestPage;

  beforeEach(() => {
    page = new Ang2CliTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
