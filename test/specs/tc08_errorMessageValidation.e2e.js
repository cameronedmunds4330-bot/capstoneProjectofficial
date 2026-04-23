import LoginPage from '../pageobjects/LoginPage.js';

describe('TC08 - Error Message Validation', () => {
  it('should show a clear error message on failed login', async () => {
    await LoginPage.open();
    await LoginPage.login('wrong@example.com', 'WrongPassword');

    await LoginPage.errorMessage.waitForDisplayed({ timeout: 15000 });

    const text = await LoginPage.errorMessage.getText();
    expect(text.length).toBeGreaterThan(0);
  });
});
