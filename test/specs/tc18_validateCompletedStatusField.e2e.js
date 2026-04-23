import LoginPage from '../pageobjects/LoginPage.js';
import CaseDataTypesPage from '../pageobjects/CaseDataTypesPage.js';
import { USERNAME, PASSWORD } from '../helpers/credentials.js';

describe('TC18 - Validate Completed Status Field', () => {
  it('should create and delete a Completed status', async () => {
    await LoginPage.open();
    await LoginPage.login(USERNAME, PASSWORD);

    await CaseDataTypesPage.open();

    await CaseDataTypesPage.createStatus('CompletedTest', 'Completed description');

    const deleteIcon = $('button*=Delete');
    await deleteIcon.waitForDisplayed();
    await deleteIcon.click();
  });
});
