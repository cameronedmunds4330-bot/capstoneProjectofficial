import LoginPage from '../../pageobjects/LoginPage.js';
import ClientsPage from '../../pageobjects/ClientsPage.js';

describe('Clients - Bulk Delete', () => {

    it('should bulk delete selected client records', async () => {

        // Login
        await LoginPage.login('admin@casepacer.com', 'Password123!');

        // Navigate to Clients
        await ClientsPage.openClientsPage();

        // Select the first two checkboxes in the grid
        const checkboxes = await $$('input[type="checkbox"]');
        await checkboxes[1].click(); // skip header checkbox
        await checkboxes[2].click();

        // Click bulk delete button
        await ClientsPage.click(ClientsPage.bulkDeleteButton);

        // Confirm delete
        await ClientsPage.click(ClientsPage.confirmDeleteYes);

        // Verify grid is visible after deletion
        await ClientsPage.waitForVisible(ClientsPage.clientsGrid);
    });
});
