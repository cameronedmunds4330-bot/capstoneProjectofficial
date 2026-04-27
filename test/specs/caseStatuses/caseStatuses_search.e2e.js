import LoginPage from '../../pageobjects/LoginPage.js';
import CaseStatusesPage from '../../pageobjects/CaseStatusesPage.js';

describe('Case Statuses - Search', () => {

    it('should search for a Case Status successfully', async () => {

        // Login
        await LoginPage.login('admin@casepacer.com', 'Password123!');

        // Navigate to Case Statuses
        await CaseStatusesPage.openCaseStatusesPage();

        // Perform search
        await CaseStatusesPage.searchCaseStatus('Automation');

        // Verify grid is visible after search
        await CaseStatusesPage.waitForVisible(CaseStatusesPage.caseStatusesGrid);
    });
});
