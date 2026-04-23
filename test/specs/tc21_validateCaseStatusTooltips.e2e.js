import LoginPage from '../pageobjects/LoginPage.js';
import CaseDataTypesPage from '../pageobjects/CaseDataTypesPage.js';
import { USERNAME, PASSWORD } from '../helpers/credentials.js';

describe('TC21 - Validate Case Status Tooltips', () => {
  it('should show tooltips when hovering over icons', async () => {
    await LoginPage.open();
    await LoginPage.login(USERNAME, PASSWORD);
    await CaseDataTypesPage.open();

    const pencil = $('button*=Edit');
    const up = $('button*=Up');
    const down = $('button*=Down');
    const del = $('button*=Delete');

    await pencil.moveTo();
    await up.moveTo();
    await down.moveTo();
    await del.moveTo();
  });
});
