import LoginPage from '../pageobjects/LoginPage.js';
import ClientsPage from '../pageobjects/ClientsPage.js';
import { USERNAME, PASSWORD } from '../helpers/credentials.js';

describe('TC10 - Validate Clients Table Loads', () => {
  it('should load the Clients/3rd Parties table', async () => {
    await LoginPage.open();
    await LoginPage.login(USERNAME, PASSWORD);

    await ClientsPage.open();

    await expect(ClientsPage.searchInput).toBeDisplayed();
  });
});
