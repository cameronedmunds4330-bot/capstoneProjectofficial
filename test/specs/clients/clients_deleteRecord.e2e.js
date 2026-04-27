import LoginPage from '../../pageobjects/LoginPage.js';
import ClientsPage from '../../pageobjects/ClientsPage.js';

describe('Clients - Delete Record', () => {

    it('should delete a client record from the grid', async () => {

        // Login
        await LoginPage.login('admin@casepacer.com', 'Password123!');

        // Navigate to Clients
        await ClientsPage.openClientsPage();

        // Open the row for the client you want to delete
        await ClientsPage.openClientRow('John');

        // Click delete from the 3-dot menu
        await ClientsPage.click(ClientsPage.menuDelete);

        // Confirm delete
        await ClientsPage.click(ClientsPage.confirmDeleteYes);

        // Verify grid is still visible after deletion
        await ClientsPage.waitForVisible(ClientsPage.clientsGrid);
    });
});
