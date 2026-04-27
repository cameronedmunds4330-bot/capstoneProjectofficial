import LoginPage from '../../pageobjects/LoginPage.js';
import ClientsPage from '../../pageobjects/ClientsPage.js';
import path from 'path';

describe('Clients - Import', () => {

    it('should import a clients file successfully', async () => {

        // Login
        await LoginPage.login('admin@casepacer.com', 'Password123!');

        // Navigate to Clients
        await ClientsPage.openClientsPage();

        // Path to your import file
        const filePath = path.join(process.cwd(), 'test', 'data', 'clients_import.csv');

        // File input (generic selector)
        const fileInput = $('input[type="file"]');

        // Import button (generic selector)
        const importButton = $('[data-testid="clients-import-button"], button*=Import');

        // Upload file
        await fileInput.setValue(filePath);

        // Click Import
        await ClientsPage.click(importButton);

        // Confirm import (generic confirm button)
        const confirmImport = $('[data-testid="confirmation-dialog-confirm-button"]');
        await ClientsPage.click(confirmImport);

        // Verify grid is visible after import
        await ClientsPage.waitForVisible(ClientsPage.clientsGrid);
    });
});
