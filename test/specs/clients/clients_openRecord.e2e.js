import LoginPage from '../../pageobjects/LoginPage.js';
import ClientsPage from '../../pageobjects/ClientsPage.js';

describe('Clients - Open Record', () => {

    it('should open a client record from the grid', async () => {

        // Login
        await LoginPage.login('admin@casepacer.com', 'Password123!');

        // Navigate to Clients
        await ClientsPage.openClientsPage();

        // Open a specific client row
        await ClientsPage.openClientRow('John');

        // Verify the page changed (URL contains /clientsParties/)
        await ClientsPage.expectUrlContains('/clientsParties');
    });
});
