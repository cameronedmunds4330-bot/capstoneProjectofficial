// test/specs/caseStatuses/caseStatuses_expandCollapse.e2e.js

import LoginPage from '../../pageobjects/LoginPage.js';
import CaseStatusesPage from '../../pageobjects/CaseStatusesPage.js';

describe('Case Statuses – Expand / Collapse Groups', () => {

    it('should expand and collapse each Case Status group', async () => {

        await LoginPage.login(
            'cameron.edmunds4330@stu.mtec.edu',
            'Successful!4321'
        );

        await CaseStatusesPage.open();

        // NEW
        await CaseStatusesPage.expandGroup(CaseStatusesPage.expandNew);

        // ACTIVE
        await CaseStatusesPage.expandGroup(CaseStatusesPage.expandActive);

        // COMPLETED
        await CaseStatusesPage.expandGroup(CaseStatusesPage.expandCompleted);

        // CLOSED
        await CaseStatusesPage.expandGroup(CaseStatusesPage.expandClosed);

        // REMOVED
        await CaseStatusesPage.expandGroup(CaseStatusesPage.expandRemoved);
    });
});
