import LoginPage from '../../pageobjects/LoginPage.js';
import CaseStatusesPage from '../../pageobjects/CaseStatusesPage.js';

describe('Case Statuses - Delete', () => {

    it('should delete an existing Case Status successfully', async () => {

        // Login
        await LoginPage.login('admin@casepacer.com', 'Password123!');

        // Navigate to Case Statuses
        await CaseStatusesPage.openCaseStatusesPage();

        // Open the Case Status row you want to delete
        await CaseStatusesPage.openCaseStatusRow('Automation Status Updated');

        // Click Delete from the 3-dot menu
        await CaseStatusesPage.click(CaseStatusesPage.menuDelete);

        // Confirm delete
        await CaseStatusesPage.click(CaseStatusesPage.confirmDeleteYes);

        // Verify grid is visible after deletion
        await CaseStatusesPage.waitForVisible(CaseStatusesPage.caseStatusesGrid);
    });
});
