import { login } from '../../helpers/login.js';

describe('Case Data Types – Edit Custom Status', () => {
    it('should allow editing a custom status inside a system status group', async () => {
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

        // Expand the "Active" group (example group from your UI)
        const activeGroupToggle = await $('[data-testid="status-group-active"]');
        await activeGroupToggle.waitForDisplayed({ timeout: 10000 });
        await activeGroupToggle.click();

        // Wait for expanded content
        const activeGroupContent = await $('[data-testid="status-group-active-content"]');
        await activeGroupContent.waitForDisplayed({ timeout: 10000 });

        // Click the first edit button for a custom status
        const editButton = await $('[data-testid="custom-status-edit"]');
        await editButton.waitForDisplayed({ timeout: 10000 });
        await editButton.click();

        // Update the custom status name
        const editInput = await $('[data-testid="custom-status-edit-input"]');
        await editInput.waitForDisplayed({ timeout: 10000 });
        await editInput.setValue('Updated Automation Custom Status');

        // Save the updated name
        const saveButton = await $('[data-testid="custom-status-save"]');
        await saveButton.waitForDisplayed({ timeout: 10000 });
        await saveButton.click();

        // Verify the updated name appears in the list
        const updatedRow = await $('div=Updated Automation Custom Status');
        await updatedRow.waitForDisplayed({ timeout: 15000 });
    });
});
