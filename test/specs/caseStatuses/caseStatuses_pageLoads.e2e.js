import LoginPage from '../../pageobjects/LoginPage.js';
import ExpenseTypesPage from '../../pageobjects/ExpenseTypesPage.js';

describe('Expense Types - Page Loads', () => {

    it('should load the Expense Types page after login', async () => {

        // Login
        await LoginPage.login('admin@casepacer.com', 'Password123!');

        // Navigate to Expense Types
        await ExpenseTypesPage.openExpenseTypesPage();

        // Verify grid is visible
        await ExpenseTypesPage.waitForVisible(ExpenseTypesPage.expenseTypesGrid);
    });
});
