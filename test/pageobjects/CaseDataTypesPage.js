import BasePage from './BasePage.js';

class CaseDataTypesPage extends BasePage {

    //
    // Navigation
    //
    get accountSettingsTab() {
        return $('[data-testid="vert-nav-account-settings"]');
    }

    get caseDataTypesTab() {
        return $('[data-testid="account-settings-case-data-tab"]');
    }

    //
    // Create / Edit Case Status
    //
    get statusInput() {
        return $('[data-testid="add-edit-status-status-input"]');
    }

    get statusDescriptionInput() {
        return $('[data-testid="add-edit-status-description-input"]');
    }

    get statusSaveButton() {
        return $('[data-testid="add-edit-status-save-button"]');
    }

    get statusCancelButton() {
        return $('[data-testid="add-edit-status-cancel-button"]');
    }

    //
    // Status Groups (New, Active, Completed, Closed, Removed)
    // You provided the pattern: data-testid="status-group-{groupName}"
    //
    statusGroup(groupName) {
        return $(`[data-testid="status-group-${groupName}"]`);
    }

    statusGroupContent(groupName) {
        return $(`[data-testid="status-group-${groupName}-content"]`);
    }

    //
    // Expense Types
    //
    get expenseTypeInput() {
        return $('[data-testid="expense-type-input"]');
    }

    get expenseTypeAddButton() {
        return $('[data-testid="expense-type-add"]');
    }

    //
    // Modal Close Button (ToS, Privacy, DPA all share this)
    //
    get modalCloseButton() {
        return $('[data-testid="login-tos-close"]');
    }

    //
    // Navigation Flow
    //
    async openCaseDataTypes() {
        await this.accountSettingsTab.waitForDisplayed({ timeout: 15000 });
        await this.accountSettingsTab.click();

        await this.caseDataTypesTab.waitForDisplayed({ timeout: 15000 });
        await this.caseDataTypesTab.click();
    }
}

export default new CaseDataTypesPage();
