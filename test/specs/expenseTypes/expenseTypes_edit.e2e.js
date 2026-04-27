import LoginPage from '../../pageobjects/LoginPage.js';
import ExpenseTypesPage from '../../pageobjects/ExpenseTypesPage.js';

describe('Expense Types - Edit', () => {

    it('should edit an existing Expense Type successfully', async () => {

        // Login
        await LoginPage.login('admin@casepacer.com', 'Password123!');

        // Navigate to Expense Types
        await ExpenseTypesPage.openExpenseTypesPage();

        // Open the Expense Type row you want to edit
        await ExpenseTypesPage.openExpenseTypeRow('Automation Expense');

        // Click Edit from the 3-dot menu
        await ExpenseTypesPage.click(ExpenseTypesPage.menuEdit);

        // Edit the name field
        await ExpenseTypesPage.type(ExpenseTypesPage.expenseTypeNameInput, 'Automation Expense Updated');

        // Edit the description field
        await ExpenseTypesPage.type(ExpenseTypesPage.expenseTypeDescriptionInput, 'Updated by automated test');

        // Save changes
        await ExpenseTypesPage.click(ExpenseTypesPage.saveButton);

        // Verify grid is visible after saving
        await ExpenseTypesPage.waitForVisible(ExpenseTypesPage.expenseTypesGrid);
    });
});
