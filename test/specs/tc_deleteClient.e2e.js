import LoginPage from '../pageobjects/LoginPage.js';
import ClientsPage from '../pageobjects/ClientsPage.js';
import { USERNAME, PASSWORD } from '../helpers/credentials.js';

describe('Delete Client Workflow', () => {
  it('should delete a client and show success toast', async () => {
    await LoginPage.open();
    await LoginPage.login(USERNAME, PASSWORD);
    await ClientsPage.open();

    await ClientsPage.deleteFirstClient();

    await ClientsPage.successToast.waitForDisplayed({ timeout: 15000 });
    await expect(ClientsPage.successToast).toHaveTextContaining('Parties Deleted');
  });
});
