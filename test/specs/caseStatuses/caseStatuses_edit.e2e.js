import LoginPage from '../../pageobjects/LoginPage.js';
import CaseStatusesPage from '../../pageobjects/CaseStatusesPage.js';

describe('Case Statuses - Edit', () => {

    it('should edit an existing Case Status successfully', async () => {

        // Login
        await LoginPage.login('admin@casepacer.com', 'Password123!');

        // Navigate to Case Statuses
        await CaseStatusesPage.openCaseStatusesPage();

        // Open the Case Status row you want to edit
        await CaseStatusesPage.openCaseStatusRow('Automation Status');

        // Click Edit from the 3-dot menu
        await CaseStatusesPage.click(CaseStatusesPage.menuEdit);

        // Edit the name field
        await CaseStatusesPage.type(CaseStatusesPage.caseStatusNameInput, 'Automation Status Updated');

        // Edit the description field
        await CaseStatusesPage.type(CaseStatusesPage.caseStatusDescriptionInput, 'Updated by automated test');

        // Save changes
        await CaseStatusesPage.click(CaseStatusesPage.saveButton);

        // Verify grid is visible after saving
        await CaseStatusesPage.waitForVisible(CaseStatusesPage.caseStatusesGrid);
    });
});
