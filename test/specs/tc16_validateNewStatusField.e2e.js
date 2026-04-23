import LoginPage from '../pageobjects/LoginPage.js';
import CaseDataTypesPage from '../pageobjects/CaseDataTypesPage.js';
import { USERNAME, PASSWORD } from '../helpers/credentials.js';

describe('TC16 - Validate New Status Field', () => {
  it('should validate character limits for New status', async () => {
    await LoginPage.open();
    await LoginPage.login(USERNAME, PASSWORD);

    await CaseDataTypesPage.open();

    await CaseDataTypesPage.addStatusButton.click();

    await CaseDataTypesPage.statusInput.setValue('A'.repeat(60));
    await expect(CaseDataTypesPage.statusInput).toHaveValue('A'.repeat(49));

    await CaseDataTypesPage.descriptionInput.setValue('B'.repeat(300));
    await expect(CaseDataTypesPage.descriptionInput).toHaveValue('B'.repeat(200));
  });
});
