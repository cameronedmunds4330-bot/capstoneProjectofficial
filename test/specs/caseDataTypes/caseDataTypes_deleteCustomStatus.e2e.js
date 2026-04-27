import { login } from '../../helpers/login.js';

describe('Case Data Types – Delete Custom Status', () => {
    it('should allow deleting a custom status from a system status group', async () => {
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

        // Locate the first delete button for a custom status
        const deleteButton = await $('[data-testid="custom-status-delete"]');
        await deleteButton.waitForDisplayed({ timeout: 10000 });
        await deleteButton.click();

        // Confirm deletion
        const confirmButton = await $('[data-testid="confirm-delete"]');
        await confirmButton.waitForDisplayed({ timeout: 10000 });
        await confirmButton.click();

        // Verify success toast
        const toast = await $('[data-testid="toast-success"]');
        await toast.waitForDisplayed({ timeout: 15000 });
    });
});
