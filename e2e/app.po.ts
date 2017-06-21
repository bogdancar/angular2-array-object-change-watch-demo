import { browser, by, element } from 'protractor';

export class Angular2ArrayObjectWatchDemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
