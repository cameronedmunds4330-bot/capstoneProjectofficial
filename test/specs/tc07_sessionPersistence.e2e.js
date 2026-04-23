import LoginPage from '../pageobjects/LoginPage.js';
import { USERNAME, PASSWORD } from '../helpers/credentials.js';

describe('TC07 - Session Persistence', () => {
  it('should stay logged in after page refresh', async () => {
    await LoginPage.open();
    await LoginPage.login(USERNAME, PASSWORD);

    const avatar = $('img.fui-Avatar__image');
    await avatar.waitForDisplayed({ timeout: 15000 });

    await browser.refresh();

    await avatar.waitForDisplayed({ timeout: 15000 });
  });
});
