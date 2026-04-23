import LoginPage from '../pageobjects/LoginPage.js';
import ClientsPage from '../pageobjects/ClientsPage.js';
import { USERNAME, PASSWORD } from '../helpers/credentials.js';

describe('TC30 - Search After Import', () => {
  it('should import a CSV and then search for a client from that file', async () => {
    await LoginPage.open();
    await LoginPage.login(USERNAME, PASSWORD);
    await ClientsPage.open();

    await ClientsPage.importCSV('clients_5.csv');

    await ClientsPage.search('John');

    const match = await $(`//*[contains(text(), "John")]`);
    expect(await match.isExisting()).toBe(true);
  });
});
