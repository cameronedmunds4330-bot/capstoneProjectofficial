import { login } from '../../helpers/login.js';

describe('Case Data Types – Expand Status Groups', () => {
    it('should expand status groups correctly', async () => {
        // Login first
        await login();

        // Open Account Settings
        const accountSettingsTab = await $('[data-testid="vert-nav-account-settings"]');
        await accountSettingsTab.waitForDisplayed({ timeout: 15000 });
        await accountSettingsTab.click();

        // Open Case Data Types
        const caseDataTypesTab = await $('[data-testid="account-settings-case-data-tab"]');
        await caseDataTypesTab.waitForDisplayed({ timeout: 15000 });
        await caseDataTypesTab.click();

        // Wait for Case Statuses panel
        const statusesHeader = await $('h3=Case Statuses');
        await statusesHeader.waitForDisplayed({ timeout: 15000 });

        // System status groups in your UI
        const groups = [
            'new',
            'active',
            'completed',
            'closed',
            'removed'
        ];

        for (const group of groups) {
            const toggle = await $(`[data-testid="status-group-${group}"]`);
            await toggle.waitForDisplayed({ timeout: 10000 });
            await toggle.click();

            const content = await $(`[data-testid="status-group-${group}-content"]`);
            await content.waitForDisplayed({ timeout: 10000 });

            // Collapse again
            await toggle.click();
            await expect(content).not.toBeDisplayed();
        }
    });
});
