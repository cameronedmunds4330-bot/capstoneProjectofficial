import LoginPage from '../../pageobjects/LoginPage.js';
import ClientsPage from '../../pageobjects/ClientsPage.js';

describe('Clients - Edit Record', () => {

    it('should edit a client record successfully', async () => {

        // Login
        await LoginPage.login('admin@casepacer.com', 'Password123!');

        // Navigate to Clients
        await ClientsPage.openClientsPage();

        // Open the row for the client you want to edit
        await ClientsPage.openClientRow('John');

        // Click Edit from the 3-dot menu
        await ClientsPage.click(ClientsPage.menuEdit);

        // Edit the name field (generic selector for now)
        const nameInput = $('input');
        await ClientsPage.type(nameInput, 'John Updated');

        // Save changes
        const saveButton = $('[data-testid="case-type-save-button"], [data-testid="save-button"]');
        await ClientsPage.click(saveButton);

        // Verify grid is visible after saving
        await ClientsPage.waitForVisible(ClientsPage.clientsGrid);
    });
});
