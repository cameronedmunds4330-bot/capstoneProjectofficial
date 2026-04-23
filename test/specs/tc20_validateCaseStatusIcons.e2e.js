import LoginPage from '../pageobjects/LoginPage.js';
import CaseDataTypesPage from '../pageobjects/CaseDataTypesPage.js';
import { USERNAME, PASSWORD } from '../helpers/credentials.js';

describe('TC20 - Validate Case Status Icons', () => {
  it('should verify pencil, up, down, and delete icons exist', async () => {
    await LoginPage.open();
    await LoginPage.login(USERNAME, PASSWORD);

    await CaseDataTypesPage.open();

    const pencil = $('button*=Edit');
    const up = $('button*=Up');
    const down = $('button*=Down');
    const del = $('button*=Delete');

    await expect(pencil).toBeDisplayed();
    await expect(up).toBeDisplayed();
    await expect(down).toBeDisplayed();
    await expect(del).toBeDisplayed();
  });
});
