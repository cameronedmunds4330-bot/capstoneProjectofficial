import { login } from '../../helpers/login.js';

describe('Logout – Basic Logout Flow', () => {
    it('should log out successfully from the user account menu', async () => {
        // Login first
        await login();

        // Open the user account menu
        const menuButton = await $('[data-testid="account-control-menu-button"]');
        await menuButton.waitForDisplayed({ timeout: 15000 });
        await menuButton.click();

        // Click Logout
        const logoutButton = await $('[data-testid="account-control-logout-button"]');
        await logoutButton.waitForDisplayed({ timeout: 15000 });
        await logoutButton.click();

        // Verify redirect to login page
        const loginButton = await $('[data-testid="login-submit"]');
        await loginButton.waitForDisplayed({ timeout: 15000 });
    });
});
