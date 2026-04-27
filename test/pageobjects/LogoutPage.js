import BasePage from './BasePage.js';

class LogoutPage extends BasePage {

    get menuButton() {
        return $('[data-testid="account-control-menu-button"]');
    }

    get menuPanel() {
        return $('[data-testid="account-control-menu"]');
    }

    get logoutButton() {
        return $('[data-testid="account-control-logout-button"]');
    }

    get loginPageSubmit() {
        return $('[data-testid="login-submit"]');
    }

    async openMenu() {
        await this.menuButton.waitForDisplayed({ timeout: 15000 });
        await this.menuButton.click();
        await this.menuPanel.waitForDisplayed({ timeout: 15000 });
    }

    async clickLogout() {
        await this.logoutButton.waitForDisplayed({ timeout: 15000 });
        await this.logoutButton.click();
    }

    async isLoggedOut() {
        await this.loginPageSubmit.waitForDisplayed({ timeout: 15000 });
        return true;
    }

    async logout() {
        await this.openMenu();
        await this.clickLogout();
        await this.isLoggedOut();
    }
}

export default new LogoutPage();
