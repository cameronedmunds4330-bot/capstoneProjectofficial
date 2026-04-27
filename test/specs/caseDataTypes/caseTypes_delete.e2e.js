import LoginPage from '../../pageobjects/LoginPage.js';
import CaseTypesPage from '../../pageobjects/CaseTypesPage.js';

describe('Case Types - Delete', () => {

    it('should delete an existing Case Type successfully', async () => {

        // Login
        await LoginPage.login('admin@casepacer.com', 'Password123!');

        // Navigate to Case Types
        await CaseTypesPage.openCaseTypesPage();

        // Open the Case Type row you want to delete
        await CaseTypesPage.openCaseTypeRow('Automation Case Type Updated');

        // Click Delete from the 3-dot menu
        await CaseTypesPage.click(CaseTypesPage.menuDelete);

        // Confirm delete
        await CaseTypesPage.click(CaseTypesPage.confirmDeleteYes);

        // Verify grid is visible after deletion
        await CaseTypesPage.waitForVisible(CaseTypesPage.caseTypesGrid);
    });
});
