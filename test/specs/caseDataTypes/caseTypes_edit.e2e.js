import LoginPage from '../../pageobjects/LoginPage.js';
import CaseTypesPage from '../../pageobjects/CaseTypesPage.js';

describe('Case Types - Edit', () => {

    it('should edit an existing Case Type successfully', async () => {

        // Login
        await LoginPage.login('admin@casepacer.com', 'Password123!');

        // Navigate to Case Types
        await CaseTypesPage.openCaseTypesPage();

        // Open the Case Type row you want to edit
        await CaseTypesPage.openCaseTypeRow('Automation Case Type');

        // Click Edit from the 3-dot menu
        await CaseTypesPage.click(CaseTypesPage.menuEdit);

        // Edit the name field
        await CaseTypesPage.type(CaseTypesPage.caseTypeNameInput, 'Automation Case Type Updated');

        // Edit the description field
        await CaseTypesPage.type(CaseTypesPage.caseTypeDescriptionInput, 'Updated by automated test');

        // Save changes
        await CaseTypesPage.click(CaseTypesPage.saveButton);

        // Verify grid is visible after saving
        await CaseTypesPage.waitForVisible(CaseTypesPage.caseTypesGrid);
    });
});
