import { login } from '../../helpers/login.js';

describe('Case Data Types – Delete Case Type', () => {
    it('should allow deleting an existing case type', async () => {
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

        // Wait for Case Types panel
        const caseTypesHeader = await $('h3=Case Types');
        await caseTypesHeader.waitForDisplayed({ timeout: 15000 });

        // Locate the first delete button in the Case Types list
        const deleteButton = await $('[data-testid="case-type-delete"]');
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
