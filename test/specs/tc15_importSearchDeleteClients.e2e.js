import LoginPage from '../pageobjects/LoginPage.js';
import ClientsPage from '../pageobjects/ClientsPage.js';
import { USERNAME, PASSWORD } from '../helpers/credentials.js';

describe('Import, Search, and Delete Workflow', () => {
  it('should import a CSV, search for a client, and delete it', async () => {
    await LoginPage.open();
    await LoginPage.login(USERNAME, PASSWORD);
    await ClientsPage.open();

    // Import CSV
    await ClientsPage.importCSV('clients_5.csv');
    await expect(ClientsPage.successToast).toHaveTextContaining('Parties Deleted');

    // Search (you can plug in your search selector here)
    const searchInput = $('[data-testid="clients-search-input"]');
    await searchInput.waitForDisplayed({ timeout: 15000 });
    await searchInput.setValue('Cameron Edmunds');

    // Delete first result
    await ClientsPage.deleteFirstClient();
    await expect(ClientsPage.successToast).toHaveTextContaining('Parties Deleted');
  });
});
