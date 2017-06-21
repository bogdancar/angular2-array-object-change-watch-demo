import { Angular2ArrayObjectWatchDemoPage } from './app.po';

describe('angular2-array-object-watch-demo App', () => {
  let page: Angular2ArrayObjectWatchDemoPage;

  beforeEach(() => {
    page = new Angular2ArrayObjectWatchDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
