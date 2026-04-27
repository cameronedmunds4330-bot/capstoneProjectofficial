import LoginPage from '../../pageobjects/LoginPage.js';
import ExpenseTypesPage from '../../pageobjects/ExpenseTypesPage.js';

describe('Expense Types - Delete', () => {

    it('should delete an existing Expense Type successfully', async () => {

        // Login
        await LoginPage.login('admin@casepacer.com', 'Password123!');

        // Navigate to Expense Types
        await ExpenseTypesPage.openExpenseTypesPage();

        // Open the Expense Type row you want to delete
        await ExpenseTypesPage.openExpenseTypeRow('Automation Expense Updated');

        // Click Delete from the 3-dot menu
        await ExpenseTypesPage.click(ExpenseTypesPage.menuDelete);

        // Confirm delete
        await ExpenseTypesPage.click(ExpenseTypesPage.confirmDeleteYes);

        // Verify grid is visible after deletion
        await ExpenseTypesPage.waitForVisible(ExpenseTypesPage.expenseTypesGrid);
    });
});
