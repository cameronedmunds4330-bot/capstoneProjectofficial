import LoginPage from '../pageobjects/LoginPage.js';
import ClientsPage from '../pageobjects/ClientsPage.js';
import { USERNAME, PASSWORD } from '../helpers/credentials.js';

describe('Import Clients - 5, 50, 100', () => {
  it('should import 5, then 50, then 100 clients successfully', async () => {
    await LoginPage.open();
    await LoginPage.login(USERNAME, PASSWORD);
    await ClientsPage.open();

    // Import 5
    await ClientsPage.importCSV('clients_5.csv');
    await expect(ClientsPage.successToast).toHaveTextContaining('Parties Deleted'); // or your actual toast text

    // Import 50
    await ClientsPage.importCSV('clients_50.csv');
    await expect(ClientsPage.successToast).toHaveTextContaining('Parties Deleted');

    // Import 100
    await ClientsPage.importCSV('clients_100.csv');
    await expect(ClientsPage.successToast).toHaveTextContaining('Parties Deleted');
  });
});
