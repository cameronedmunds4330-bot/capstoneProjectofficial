import { login } from '../../helpers/login.js';

describe('Logout – Session Expiration', () => {
    it('should redirect to login when the session expires', async () => {
        // Login first
        await login();

        // Simulate session expiration by clearing storage
        await browser.execute(() => {
            localStorage.clear();
            sessionStorage.clear();
        });

        // Refresh the page to trigger redirect
        await browser.refresh();

        // Verify redirect to login page
        const loginButton = await $('[data-testid="login-submit"]');
        await loginButton.waitForDisplayed({ timeout: 15000 });
    });
});
