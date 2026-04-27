import LoginPage from '../../pageobjects/LoginPage.js';
import ClientsPartiesPage from '../../pageobjects/ClientsPartiesPage.js';
import path from 'path';

describe('Clients / 3rd Parties - Import Error (Wrong File)', () => {

    it('should show an error when uploading an invalid file', async () => {

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

        // Build absolute path to wrong file (use ANY non‑CSV file)
        const filePath = path.resolve('test/data/wrongFile.txt');

        // Upload invalid file
        await ClientsPartiesPage.fileUploadButton.setValue(filePath);

        // Confirm import
        await ClientsPartiesPage.importConfirmButton.waitForDisplayed({ timeout: 15000 });
        await ClientsPartiesPage.importConfirmButton.click();

        // Wait for error toast
        await ClientsPartiesPage.importErrorToast.waitForDisplayed({ timeout: 15000 });

        // Verify error toast is visible
        await expect(ClientsPartiesPage.importErrorToast).toBeDisplayed();

        // Allow table to settle
        await browser.pause(1500);

        // Verify NO new rows were added
        const finalRows = await ClientsPartiesPage.clientRows.length;
        expect(finalRows).toBe(initialRows);
    });
});
