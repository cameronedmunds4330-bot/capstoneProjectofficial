import { login } from '../../helpers/login.js';

describe('Case Data Types – Case Type Validation', () => {
    it('should prevent adding a case type with empty input', async () => {
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

        // Try clicking Add with empty input
        const addButton = await $('[data-testid="case-type-add"]');
        await addButton.waitForDisplayed({ timeout: 10000 });
        await addButton.click();

        // Expect validation message
        const error = await $('[data-testid="case-type-error"]');
        await error.waitForDisplayed({ timeout: 10000 });
    });

    it('should prevent adding a duplicate case type name', async () => {
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

        // Add a case type (if not already present)
        const nameInput = await $('[data-testid="case-type-input"]');
        await nameInput.waitForDisplayed({ timeout: 10000 });
        await nameInput.setValue('Duplicate Test Type');

        const addButton = await $('[data-testid="case-type-add"]');
        await addButton.waitForDisplayed({ timeout: 10000 });
        await addButton.click();

        // Try adding the same name again
        await nameInput.setValue('Duplicate Test Type');
        await addButton.click();

        // Expect duplicate validation message
        const duplicateError = await $('[data-testid="case-type-duplicate-error"]');
        await duplicateError.waitForDisplayed({ timeout: 10000 });
    });
});
