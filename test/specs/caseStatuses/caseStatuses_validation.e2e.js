import LoginPage from '../../pageobjects/LoginPage.js';
import CaseStatusesPage from '../../pageobjects/CaseStatusesPage.js';

describe('Case Statuses - Validation', () => {

    it('should show validation when required fields are missing', async () => {

        // Login
        await LoginPage.login('admin@casepacer.com', 'Password123!');

        // Navigate to Case Statuses
        await CaseStatusesPage.openCaseStatusesPage();

        // Click Add Case Status
        await CaseStatusesPage.click(CaseStatusesPage.addCaseStatusButton);

        // Leave name empty and try to save
        await CaseStatusesPage.click(CaseStatusesPage.saveButton);

        // Generic validation selector
        const validationMessage = $('div.fui-Text.error, div[data-testid*="error"], .error-message');

        // Verify validation is visible
        await CaseStatusesPage.waitForVisible(validationMessage);
    });
});
