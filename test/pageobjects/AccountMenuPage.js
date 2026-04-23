class AccountMenuPage {
  // Top-right user icon (MTECH-QA icon)
  get menuButton() {
    return $('svg.fui-Icon'); 
  }

  // Settings button inside the user account menu
  get settingsButton() {
    return $('[data-testid="account-control-settings-button"]');
  }

  // Terms of Service tab
  get termsOfService() {
    return $('[data-testid="menu-terms-of-service-link"]');
  }

  // Privacy Policy tab
  get privacyPolicy() {
    return $('[data-testid="menu-privacy-policy-link"]');
  }

  // Data Processing Agreement tab
  get dataProcessingAgreement() {
    return $('[data-testid="menu-data-processing-agreement-link"]');
  }

  // Logout button
  get logoutButton() {
    return $('[data-testid="menu-logout-button"]');
  }

  async openMenu() {
    await this.menuButton.waitForDisplayed();
    await this.menuButton.click();
  }

  async openSettings() {
    await this.openMenu();
    await this.settingsButton.waitForDisplayed();
    await this.settingsButton.click();
  }

  async openTerms() {
    await this.openMenu();
    await this.termsOfService.waitForDisplayed();
    await this.termsOfService.click();
  }

  async openPrivacy() {
    await this.openMenu();
    await this.privacyPolicy.waitForDisplayed();
    await this.privacyPolicy.click();
  }

  async openDPA() {
    await this.openMenu();
    await this.dataProcessingAgreement.waitForDisplayed();
    await this.dataProcessingAgreement.click();
  }

  async logout() {
    await this.openMenu();
    await this.logoutButton.waitForDisplayed();
    await this.logoutButton.click();
  }
}

export default new AccountMenuPage();
