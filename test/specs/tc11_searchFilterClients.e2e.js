import LoginPage from '../pageobjects/LoginPage.js';
import ClientsPage from '../pageobjects/ClientsPage.js';
import { USERNAME, PASSWORD } from '../helpers/credentials.js';

describe('TC11 - Search and Filter Clients', () => {
  it('should search for a client and clear the search', async () => {
    await LoginPage.open();
    await LoginPage.login(USERNAME, PASSWORD);

    await ClientsPage.open();

    await ClientsPage.search('apple');
    await expect(ClientsPage.searchInput).toHaveValue('apple');

    await ClientsPage.clearSearch();
    await expect(ClientsPage.searchInput).toHaveValue('');
  });
});
