import LoginPage from '../../pageobjects/LoginPage.js';
import ExpenseTypesPage from '../../pageobjects/ExpenseTypesPage.js';

describe('Expense Types - Add', () => {

    it('should add a new Expense Type successfully', async () => {

        // Login
        await LoginPage.login('admin@casepacer.com', 'Password123!');

        // Navigate to Expense Types
        await ExpenseTypesPage.openExpenseTypesPage();

        // Add a new Expense Type
        const name = 'Automation Expense';
        const description = 'Created by automated test';
        await ExpenseTypesPage.addExpenseType(name, description);

        // Verify grid is visible after save
        await ExpenseTypesPage.waitForVisible(ExpenseTypesPage.expenseTypesGrid);
    });
});
