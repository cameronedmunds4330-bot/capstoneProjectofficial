import LoginPage from '../../pageobjects/LoginPage.js';
import ClientsPage from '../../pageobjects/ClientsPage.js';

describe('Clients Page Loads', () => {

    it('should load the Clients page after login', async () => {

        // Login
        await LoginPage.login('admin@casepacer.com', 'Password123!');

        // Navigate to Clients
        await ClientsPage.openClientsPage();

        // Verify grid is visible
        await ClientsPage.waitForVisible(ClientsPage.clientsGrid);
    });
});
