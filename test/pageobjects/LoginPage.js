class LoginPage {
  get emailInput() {
    return $('#field-rp0_control');
  }

  get passwordInput() {
    return $('#field-rp1_control');
  }

  get loginButton() {
    return $('[data-testid="login-submit"]');
  }

  get errorMessage() {
    return $('div.fui-Text'); // Fluent UI error text
  }

  async open() {
    await browser.url('https://mtech-qa.azurewebsites.net/');
    await this.emailInput.waitForDisplayed({ timeout: 15000 });
  }

  async login(email, password) {
    await this.emailInput.setValue(email);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
  }
}

export default new LoginPage();
