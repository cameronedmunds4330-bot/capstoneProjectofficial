import LoginPage from '../../pageobjects/LoginPage.js';
import ExpenseTypesPage from '../../pageobjects/ExpenseTypesPage.js';

describe('Expense Types - Validation', () => {

    it('should show validation when required fields are missing', async () => {

        // Login
        await LoginPage.login('admin@casepacer.com', 'Password123!');

        // Navigate to Expense Types
        await ExpenseTypesPage.openExpenseTypesPage();

        // Click Add Expense Type
        await ExpenseTypesPage.click(ExpenseTypesPage.addExpenseTypeButton);

        // Leave name empty and try to save
        await ExpenseTypesPage.click(ExpenseTypesPage.saveButton);

        // Generic validation selector
        const validationMessage = $('div.fui-Text.error, div[data-testid*="error"], .error-message');

        // Verify validation is visible
        await ExpenseTypesPage.waitForVisible(validationMessage);
    });
});
