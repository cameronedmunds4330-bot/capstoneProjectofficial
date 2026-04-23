import LoginPage from '../pageobjects/LoginPage.js';
import { USERNAME } from '../helpers/credentials.js';

describe('TC02 - Invalid Password', () => {
  it('should show an error for incorrect password', async () => {
    await LoginPage.open();
    await LoginPage.login(USERNAME, 'WrongPassword123');

    await LoginPage.errorMessage.waitForDisplayed({ timeout: 15000 });
  });
});
