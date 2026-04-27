import { login } from '../../helpers/login.js';

describe('Case Data Types – Expense Type Validation', () => {
    it('should prevent adding an expense type with empty input', async () => {
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

        // Try clicking Add with empty input
        const addButton = await $('[data-testid="expense-type-add"]');
        await addButton.waitForDisplayed({ timeout: 10000 });
        await addButton.click();

        // Expect validation message
        const error = await $('[data-testid="expense-type-error"]');
        await error.waitForDisplayed({ timeout: 10000 });
    });

    it('should prevent adding a duplicate expense type name', async () => {
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

        // Add an expense type (if not already present)
        const nameInput = await $('[data-testid="expense-type-input"]');
        await nameInput.waitForDisplayed({ timeout: 10000 });
        await nameInput.setValue('Duplicate Expense Test');

        const addButton = await $('[data-testid="expense-type-add"]');
        await addButton.waitForDisplayed({ timeout: 10000 });
        await addButton.click();

        // Try adding the same name again
        await nameInput.setValue('Duplicate Expense Test');
        await addButton.click();

        // Expect duplicate validation message
        const duplicateError = await $('[data-testid="expense-type-duplicate-error"]');
        await duplicateError.waitForDisplayed({ timeout: 10000 });
    });
});
