import BasePage from './BasePage.js';

class LoginPage extends BasePage {

    // Selectors from your document
    get emailInput() {
        return $('[data-testid="login-username"]');
    }

    get passwordInput() {
        return $('[data-testid="login-password"]');
    }

    get loginButton() {
        return $('[data-testid="login-submit"]');
    }

    get errorMessage() {
        return $('[data-testid="login-error-text"]');
    }

    /**
     * Navigate to login page
     */
    async openLogin() {
        await this.open('/login');
    }

    /**
     * Perform login
     */
    async login(email, password) {
        await this.openLogin();
        await this.type(this.emailInput, email);
        await this.type(this.passwordInput, password);
        await this.click(this.loginButton);
    }
}

export default new LoginPage();
