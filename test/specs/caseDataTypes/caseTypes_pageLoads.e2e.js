import LoginPage from '../../pageobjects/LoginPage.js';
import CaseTypesPage from '../../pageobjects/CaseTypesPage.js';

describe('Case Types - Page Loads', () => {

    it('should load the Case Types page after login', async () => {

        // Login
        await LoginPage.login('admin@casepacer.com', 'Password123!');

        // Navigate to Case Types
        await CaseTypesPage.openCaseTypesPage();

        // Verify grid is visible
        await CaseTypesPage.waitForVisible(CaseTypesPage.caseTypesGrid);
    });
});
