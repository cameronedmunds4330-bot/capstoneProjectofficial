import { login } from '../../helpers/login.js';

describe('Case Data Types – Add Custom Status', () => {
    it('should allow adding a custom status under a system status group', async () => {
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

        // Expand the "Active" group
        const activeGroupToggle = await $('[data-testid="status-group-active"]');
        await activeGroupToggle.waitForDisplayed({ timeout: 10000 });
        await activeGroupToggle.click();

        // Wait for expanded content
        const activeGroupContent = await $('[data-testid="status-group-active-content"]');
        await activeGroupContent.waitForDisplayed({ timeout: 10000 });

        // Enter new custom status name
        const nameInput = await $('[data-testid="custom-status-input"]');
        await nameInput.waitForDisplayed({ timeout: 10000 });
        await nameInput.setValue('Automation Custom Status');

        // Click Add
        const addButton = await $('[data-testid="custom-status-add"]');
        await addButton.waitForDisplayed({ timeout: 10000 });
        await addButton.click();

        // Verify new custom status appears in the list
        const newStatusRow = await $('div=Automation Custom Status');
        await newStatusRow.waitForDisplayed({ timeout: 15000 });
    });
});
