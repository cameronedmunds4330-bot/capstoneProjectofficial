import { login } from '../../helpers/login.js';

describe('Case Data Types – Toggle Grouping', () => {
    it('should toggle grouping correctly', async () => {
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

        // Locate the grouping toggle
        const groupingToggle = await $('[data-testid="status-grouping-toggle"]');
        await groupingToggle.waitForDisplayed({ timeout: 10000 });

        // Capture initial state
        const initialState = await groupingToggle.isSelected();

        // Toggle it
        await groupingToggle.click();

        // Verify state changed
        const newState = await groupingToggle.isSelected();
        expect(newState).not.toEqual(initialState);

        // Optional: verify UI changes (if applicable)
        // Example: grouped headers appear/disappear
        // const groupedHeader = await $('[data-testid="grouped-status-header"]');
        // await groupedHeader.waitForDisplayed({ timeout: 10000 });
    });
});
