import LoginPage from '../../pageobjects/LoginPage.js';
import CaseTypesPage from '../../pageobjects/CaseTypesPage.js';

describe('Case Types - Validation', () => {

    it('should show validation when required fields are missing', async () => {

        // Login
        await LoginPage.login('admin@casepacer.com', 'Password123!');

        // Navigate to Case Types
        await CaseTypesPage.openCaseTypesPage();

        // Click Add Case Type
        await CaseTypesPage.click(CaseTypesPage.addCaseTypeButton);

        // Leave name empty and try to save
        await CaseTypesPage.click(CaseTypesPage.saveButton);

        // Generic validation selector
        const validationMessage = $('div.fui-Text.error, div[data-testid*="error"], .error-message');

        // Verify validation is visible
        await CaseTypesPage.waitForVisible(validationMessage);
    });
});
