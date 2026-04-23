import LoginPage from '../pageobjects/LoginPage.js';
import ClientsPage from '../pageobjects/ClientsPage.js';
import { USERNAME, PASSWORD } from '../helpers/credentials.js';

describe('TC28 - Positive Search', () => {
  it('should return matching results when searching for an existing client', async () => {
    await LoginPage.open();
    await LoginPage.login(USERNAME, PASSWORD);
    await ClientsPage.open();

    await ClientsPage.search('Cameron');

    const rows = await ClientsPage.tableRows;
    expect(rows.length).toBeGreaterThan(0);

    const match = await $(`//*[contains(text(), "Cameron")]`);
    expect(await match.isExisting()).toBe(true);
  });
});
