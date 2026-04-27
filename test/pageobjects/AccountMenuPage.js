import BasePage from './BasePage.js';

class AccountMenuPage extends BasePage {

    // Top-right account menu button (avatar / initials)
    get accountMenuButton() {
        return $('[data-testid="account-menu-button"]');
    }

    // Menu items
    get settingsButton() {
        return $('[data-testid="account-menu-settings"]');
    }

    get privacyPolicyButton() {
        return $('[data-testid="account-menu-privacy-policy"]');
    }

    get termsOfServiceButton() {
        return $('[data-testid="account-menu-tos"]');
    }

    get dataProcessingButton() {
        return $('[data-testid="account-menu-dpa"]');
    }

    // Close buttons inside modals (all share same selector in your doc)
    get modalCloseButton() {
        return $('[data-testid="login-tos-close"]');
    }

    /**
     * Opens the account menu
     */
    async openMenu() {
        await this.click(this.accountMenuButton);
    }

    /**
     * Opens Privacy Policy modal
     */
    async openPrivacyPolicy() {
        await this.openMenu();
        await this.click(this.privacyPolicyButton);
    }

    /**
     * Opens Terms of Service modal
     */
    async openTermsOfService() {
        await this.openMenu();
        await this.click(this.termsOfServiceButton);
    }

    /**
     * Opens Data Processing Agreement modal
     */
    async openDataProcessingAgreement() {
        await this.openMenu();
        await this.click(this.dataProcessingButton);
    }

    /**
     * Closes any modal that uses the shared close button
     */
    async closeModal() {
        await this.click(this.modalCloseButton);
    }
}

export default new AccountMenuPage();
