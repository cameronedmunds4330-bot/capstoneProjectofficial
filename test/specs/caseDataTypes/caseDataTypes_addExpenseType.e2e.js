import { login } from '../../helpers/login.js';

describe('Case Data Types – Add Expense Type', () => {
    it('should allow adding a new expense type', async () => {
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

        // Enter new expense type name
        const nameInput = await $('[data-testid="expense-type-input"]');
        await nameInput.waitForDisplayed({ timeout: 10000 });
        await nameInput.setValue('Automation Test Expense');

        // Click Add
        const addButton = await $('[data-testid="expense-type-add"]');
        await addButton.waitForDisplayed({ timeout: 10000 });
        await addButton.click();

        // Verify new expense type appears in the list
        const newRow = await $('div=Automation Test Expense');
        await newRow.waitForDisplayed({ timeout: 15000 });
    });
});
