import { login } from '../../helpers/login.js';

describe('Logout – From Account Menu', () => {
    it('should open the account menu and log out', async () => {
        // Login first
        await login();

        // Open the user account menu
        const menuButton = await $('[data-testid="account-control-menu-button"]');
        await menuButton.waitForDisplayed({ timeout: 15000 });
        await menuButton.click();

        // Ensure menu is visible
        const menuPanel = await $('[data-testid="account-control-menu"]');
        await menuPanel.waitForDisplayed({ timeout: 15000 });

        // Click Logout
        const logoutButton = await $('[data-testid="account-control-logout-button"]');
        await logoutButton.waitForDisplayed({ timeout: 15000 });
        await logoutButton.click();

        // Verify redirect to login page
        const loginButton = await $('[data-testid="login-submit"]');
        await loginButton.waitForDisplayed({ timeout: 15000 });
    });
});
