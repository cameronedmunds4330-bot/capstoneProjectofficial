import LoginPage from '../pageobjects/LoginPage.js';
import AccountMenuPage from '../pageobjects/AccountMenuPage.js';
import { USERNAME, PASSWORD } from '../helpers/credentials.js';

describe('TC13 - Logout from User Account Menu', () => {
  it('should logout and prevent back-navigation into the app', async () => {
    await LoginPage.open();
    await LoginPage.login(USERNAME, PASSWORD);

    await AccountMenuPage.logout();

    await expect(browser).toHaveUrlContaining('/login');

    await browser.back();
    await expect(browser).toHaveUrlContaining('/login');
  });
});
