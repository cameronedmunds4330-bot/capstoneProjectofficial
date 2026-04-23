import LoginPage from '../pageobjects/LoginPage.js';
import ClientsPage from '../pageobjects/ClientsPage.js';
import { USERNAME, PASSWORD } from '../helpers/credentials.js';

describe('TC26 - Negative Search (No Results)', () => {
  it('should return no results when searching for a non-existent client', async () => {
    await LoginPage.open();
    await LoginPage.login(USERNAME, PASSWORD);
    await ClientsPage.open();

    await ClientsPage.search('apple');

    const rows = await ClientsPage.tableRows;
    expect(rows.length).toBeLessThanOrEqual(1);

    const appleRow = await $(`//*[contains(text(), "apple")]`);
    expect(await appleRow.isExisting()).toBe(false);

    await ClientsPage.clearSearch();

    const restoredRows = await ClientsPage.tableRows;
    expect(restoredRows.length).toBeGreaterThan(1);
  });
});
