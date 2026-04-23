import LoginPage from '../pageobjects/LoginPage.js';
import ClientsPage from '../pageobjects/ClientsPage.js';
import { USERNAME, PASSWORD } from '../helpers/credentials.js';

describe('TC27 - Search Reset Restores Table', () => {
  it('should restore full table after clearing search', async () => {
    await LoginPage.open();
    await LoginPage.login(USERNAME, PASSWORD);
    await ClientsPage.open();

    const initialRows = await ClientsPage.tableRows;

    await ClientsPage.search('test');
    await ClientsPage.clearSearch();

    const restoredRows = await ClientsPage.tableRows;
    expect(restoredRows.length).toBe(initialRows.length);
  });
});
