import LoginPage from '../pageobjects/LoginPage.js';

describe('TC05 - Password Masking', () => {
  it('should mask the password input', async () => {
    await LoginPage.open();

    await LoginPage.passwordInput.setValue('Test1234');

    const type = await LoginPage.passwordInput.getAttribute('type');
    expect(type).toBe('password');
  });
});
