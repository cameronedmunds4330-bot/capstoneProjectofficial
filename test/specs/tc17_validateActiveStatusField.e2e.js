import LoginPage from '../pageobjects/LoginPage.js';
import CaseDataTypesPage from '../pageobjects/CaseDataTypesPage.js';
import { USERNAME, PASSWORD } from '../helpers/credentials.js';

describe('TC17 - Validate Active Status Field', () => {
  it('should create and delete an Active status', async () => {
    await LoginPage.open();
    await LoginPage.login(USERNAME, PASSWORD);

    await CaseDataTypesPage.open();

    await CaseDataTypesPage.createStatus('ActiveTest', 'Active description');

    const deleteIcon = $('button*=Delete');
    await deleteIcon.waitForDisplayed();
    await deleteIcon.click();
  });
});
