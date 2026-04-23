import LoginPage from '../pageobjects/LoginPage.js';
import AccountPage from '../pageobjects/AccountPage.js';
import { USERNAME, PASSWORD } from '../helpers/credentials.js';

describe('Avatar Test', () => {
  it('should display the user avatar after login', async () => {
    await LoginPage.open();
    await LoginPage.login(USERNAME, PASSWORD);

    await AccountPage.avatar.waitForDisplayed({ timeout: 15000 });
    await expect(AccountPage.avatar).toBeDisplayed();
  });
});
