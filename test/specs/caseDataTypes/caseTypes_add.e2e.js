import LoginPage from '../../pageobjects/LoginPage.js';
import CaseTypesPage from '../../pageobjects/CaseTypesPage.js';

describe('Case Types - Add', () => {

    it('should add a new Case Type successfully', async () => {

        // Login
        await LoginPage.login('admin@casepacer.com', 'Password123!');

        // Navigate to Case Types
        await CaseTypesPage.openCaseTypesPage();

        // Add a new Case Type
        const name = 'Automation Case Type';
        const description = 'Created by automated test';
        await CaseTypesPage.addCaseType(name, description);

        // Verify grid is visible after save
        await CaseTypesPage.waitForVisible(CaseTypesPage.caseTypesGrid);
    });
});
