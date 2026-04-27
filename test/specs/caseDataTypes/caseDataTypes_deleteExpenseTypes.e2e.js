import { login } from '../../helpers/login.js';

describe('Case Data Types – Delete Expense Type', () => {
    it('should allow deleting an existing expense type', async () => {
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

        // Wait for Expense Types panel
        const expenseTypesHeader = await $('h3=Expense Types');
        await expenseTypesHeader.waitForDisplayed({ timeout: 15000 });

        // Locate the first delete button in the Expense Types list
        const deleteButton = await $('[data-testid="expense-type-delete"]');
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
