import LoginPage from '../../pageobjects/LoginPage.js';
import ClientsPartiesPage from '../../pageobjects/ClientsPartiesPage.js';

describe('Clients / 3rd Parties - Delete Client', () => {

    it('should delete the client record for Cameron C', async () => {

        // Login
        await LoginPage.login(
            'cameron.edmunds4330@stu.mtec.edu',
            'Successful!4321'
        );

        // Navigate to Clients / 3rd Parties
        await ClientsPartiesPage.open();

        // Search for the updated client name "Cameron C"
        await ClientsPartiesPage.searchInput.waitForDisplayed({ timeout: 15000 });
        await ClientsPartiesPage.searchInput.setValue('Cameron C');

        await browser.pause(1500);

        // Open the 3‑dot menu on the first row
        const rows = await ClientsPartiesPage.clientRows;
        await rows[0].moveTo();

        const menuButton = await rows[0].$('button');
        await menuButton.click();

        // Click Delete
        await ClientsPartiesPage.contextMenuDelete.waitForDisplayed({ timeout: 15000 });
        await ClientsPartiesPage.contextMenuDelete.click();

        // Confirm delete
        await ClientsPartiesPage.confirmDeleteButton.waitForDisplayed({ timeout: 15000 });
        await ClientsPartiesPage.confirmDeleteButton.click();

        // Allow table to refresh
        await browser.pause(1500);

        // Verify the client no longer appears in the table
        const nameCells = await ClientsPartiesPage.clientNameCells;

        const found = await nameCells.some(async cell => {
            const text = await cell.getText();
            return text.includes('Cameron C');
        });

        expect(found).toBe(false);
    });
});
