import LoginPage from '../pageobjects/LoginPage.js';
import { USERNAME, PASSWORD } from '../helpers/credentials.js';

describe('TC01 - Valid Login', () => {
  it('should login successfully with valid credentials', async () => {
    await LoginPage.open();
    await LoginPage.login(USERNAME, PASSWORD);

    const avatar = $('img.fui-Avatar__image');
    await avatar.waitForDisplayed({ timeout: 15000 });
  });
});
