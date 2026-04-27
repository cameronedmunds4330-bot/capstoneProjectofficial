import LoginPage from '../../pageobjects/LoginPage.js';
import ClientsPage from '../../pageobjects/ClientsPage.js';

describe('Clients Search', () => {

    it('should search for a client successfully', async () => {

        // Login
        await LoginPage.login('admin@casepacer.com', 'Password123!');

        // Navigate to Clients
        await ClientsPage.openClientsPage();

        // Perform search
        await ClientsPage.searchClient('John');

        // Verify grid is visible after search
        await ClientsPage.waitForVisible(ClientsPage.clientsGrid);
    });
});
