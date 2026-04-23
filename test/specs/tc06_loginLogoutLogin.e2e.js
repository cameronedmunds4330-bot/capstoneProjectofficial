import LoginPage from '../pageobjects/LoginPage.js';
import { USERNAME, PASSWORD } from '../helpers/credentials.js';

describe('TC06 - Login, Logout, Login Again', () => {
  it('should login, logout, and login again successfully', async () => {
    await LoginPage.open();
    await LoginPage.login(USERNAME, PASSWORD);

    const avatar = $('img.fui-Avatar__image');
    await avatar.waitForDisplayed({ timeout: 15000 });

    const accountMenu = $('[data-testid="account-menu-button"]');
    await accountMenu.click();

    const logoutButton = $('[data-testid="logout-button"]');
    await logoutButton.click();

    await LoginPage.emailInput.waitForDisplayed({ timeout: 15000 });

    await LoginPage.login(USERNAME, PASSWORD);
    await avatar.waitForDisplayed({ timeout: 15000 });
  });
});
