import { login } from '../../helpers/login.js';

describe('Case Data Types – Edit Case Type', () => {
    it('should allow editing an existing case type', async () => {
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

        // Click the first edit button
        const editButton = await $('[data-testid="case-type-edit"]');
        await editButton.waitForDisplayed({ timeout: 10000 });
        await editButton.click();

        // Update the case type name
        const editInput = await $('[data-testid="case-type-edit-input"]');
        await editInput.waitForDisplayed({ timeout: 10000 });
        await editInput.setValue('Updated Automation Case Type');

        // Save the updated name
        const saveButton = await $('[data-testid="case-type-save"]');
        await saveButton.waitForDisplayed({ timeout: 10000 });
        await saveButton.click();

        // Verify the updated name appears in the list
        const updatedRow = await $('div=Updated Automation Case Type');
        await updatedRow.waitForDisplayed({ timeout: 15000 });
    });
});
