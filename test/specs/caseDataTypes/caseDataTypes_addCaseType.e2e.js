import { login } from '../../helpers/login.js';

describe('Case Data Types – Add Case Type', () => {
    it('should allow adding a new case type', async () => {
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

        // Enter new case type name
        const nameInput = await $('[data-testid="case-type-input"]');
        await nameInput.waitForDisplayed({ timeout: 10000 });
        await nameInput.setValue('Automation Test Case Type');

        // Click Add
        const addButton = await $('[data-testid="case-type-add"]');
        await addButton.waitForDisplayed({ timeout: 10000 });
        await addButton.click();

        // Verify new case type appears in the list
        const newRow = await $('div=Automation Test Case Type');
        await newRow.waitForDisplayed({ timeout: 15000 });
    });
});
