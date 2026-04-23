import LoginPage from '../pageobjects/LoginPage.js';

describe('TC04 - Empty Fields', () => {
  it('should show an error when fields are empty', async () => {
    await LoginPage.open();
    await LoginPage.login('', '');

    await LoginPage.errorMessage.waitForDisplayed({ timeout: 15000 });
  });
});
