import LoginPage from '../pageobjects/LoginPage.js';
import ClientsPage from '../pageobjects/ClientsPage.js';
import { USERNAME, PASSWORD } from '../helpers/credentials.js';

describe('TC09 - Navigate to Clients Page', () => {
  it('should open the Clients/3rd Parties page', async () => {
    await LoginPage.open();
    await LoginPage.login(USERNAME, PASSWORD);

    await ClientsPage.open();
    await expect(browser).toHaveUrlContaining('/account/clientsParties');
  });
});
