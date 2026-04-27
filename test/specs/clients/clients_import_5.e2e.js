import LoginPage from '../../pageobjects/LoginPage.js';
import ClientsPartiesPage from '../../pageobjects/ClientsPartiesPage.js';
import path from 'path';

describe('Clients / 3rd Parties - Import 5 Clients', () => {

    it('should import 5 clients from clients_5.csv', async () => {

        // Login
        await LoginPage.login(
            'cameron.edmunds4330@stu.mtec.edu',
            'Successful!4321'
        );

        // Navigate to Clients / 3rd Parties
        await ClientsPartiesPage.open();

        // Capture initial row count
        await browser.pause(1500);
        const initialRows = await ClientsPartiesPage.clientRows.length;

        // Click Import
        await ClientsPartiesPage.importButton.waitForDisplayed({ timeout: 15000 });
        await ClientsPartiesPage.importButton.click();

        // Build absolute path to clients_5.csv
        const filePath = path.resolve('test/data/clients_5 (1) copy 2.csv');

        // Upload file
        await ClientsPartiesPage.fileUploadButton.setValue(filePath);

        // Confirm import
        await ClientsPartiesPage.importConfirmButton.waitForDisplayed({ timeout: 15000 });
        await ClientsPartiesPage.importConfirmButton.click();

        // Allow table to refresh
        await browser.pause(2000);

        // Capture new row count
        const finalRows = await ClientsPartiesPage.clientRows.length;

        // Verify exactly 5 new rows were added
        expect(finalRows).toBe(initialRows + 5);
    });
});
