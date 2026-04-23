import LoginPage from '../pageobjects/LoginPage.js';
import CaseDataTypesPage from '../pageobjects/CaseDataTypesPage.js';
import { USERNAME, PASSWORD } from '../helpers/credentials.js';

describe('TC19 - Validate Closed Status Field', () => {
  it('should create and delete a Closed status', async () => {
    await LoginPage.open();
    await LoginPage.login(USERNAME, PASSWORD);

    await CaseDataTypesPage.open();

    await CaseDataTypesPage.createStatus('ClosedTest', 'Closed description');

    const deleteIcon = $('button*=Delete');
    await deleteIcon.waitForDisplayed();
    await deleteIcon.click();
  });
});
