import LoginPage from '../../pageobjects/LoginPage.js';
import CaseTypesPage from '../../pageobjects/CaseTypesPage.js';

describe('Case Types - Search', () => {

    it('should search for a Case Type successfully', async () => {

        // Login
        await LoginPage.login('admin@casepacer.com', 'Password123!');

        // Navigate to Case Types
        await CaseTypesPage.openCaseTypesPage();

        // Perform search
        await CaseTypesPage.searchCaseType('Automation');

        // Verify grid is visible after search
        await CaseTypesPage.waitForVisible(CaseTypesPage.caseTypesGrid);
    });
});
