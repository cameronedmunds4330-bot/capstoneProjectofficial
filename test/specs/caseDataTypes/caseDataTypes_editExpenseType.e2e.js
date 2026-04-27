import { login } from '../../helpers/login.js';

describe('Case Data Types – Edit Expense Type', () => {
    it('should allow editing an existing expense type', async () => {
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

        // Click the first edit button
        const editButton = await $('[data-testid="expense-type-edit"]');
        await editButton.waitForDisplayed({ timeout: 10000 });
        await editButton.click();

        // Update the expense type name
        const editInput = await $('[data-testid="expense-type-edit-input"]');
        await editInput.waitForDisplayed({ timeout: 10000 });
        await editInput.setValue('Updated Automation Expense');

        // Save the updated name
        const saveButton = await $('[data-testid="expense-type-save"]');
        await saveButton.waitForDisplayed({ timeout: 10000 });
        await saveButton.click();

        // Verify the updated name appears in the list
        const updatedRow = await $('div=Updated Automation Expense');
        await updatedRow.waitForDisplayed({ timeout: 15000 });
    });
});
