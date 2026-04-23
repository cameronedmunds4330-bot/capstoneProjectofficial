import LoginPage from '../pageobjects/LoginPage.js';
import { PASSWORD } from '../helpers/credentials.js';

describe('TC03 - Invalid Email', () => {
  it('should show an error for invalid email format', async () => {
    await LoginPage.open();
    await LoginPage.login('notanemail', PASSWORD);

    await LoginPage.errorMessage.waitForDisplayed({ timeout: 15000 });
  });
});
