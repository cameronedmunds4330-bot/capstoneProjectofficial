import LoginPage from '../../pageobjects/LoginPage.js';
import ExpenseTypesPage from '../../pageobjects/ExpenseTypesPage.js';

describe('Expense Types - Search', () => {

    it('should search for an Expense Type successfully', async () => {

        // Login
        await LoginPage.login('admin@casepacer.com', 'Password123!');

        // Navigate to Expense Types
        await ExpenseTypesPage.openExpenseTypesPage();

        // Perform search
        await ExpenseTypesPage.searchExpenseType('Automation');

        // Verify grid is visible after search
        await ExpenseTypesPage.waitForVisible(ExpenseTypesPage.expenseTypesGrid);
    });
});
