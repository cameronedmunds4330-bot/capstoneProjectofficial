import LoginPage from '../../pageobjects/LoginPage.js';
import ClientsPartiesPage from '../../pageobjects/ClientsPartiesPage.js';

describe('Clients / 3rd Parties - Edit Client', () => {

    it('should edit the client record for Cameron', async () => {

        // Login
        await LoginPage.login(
            'cameron.edmunds4330@stu.mtec.edu',
            'Successful!4321'
        );

        // Navigate to Clients / 3rd Parties
        await ClientsPartiesPage.open();

        // Search for Cameron
        await ClientsPartiesPage.searchInput.waitForDisplayed({ timeout: 15000 });
        await ClientsPartiesPage.searchInput.setValue('Cameron');

        await browser.pause(1500);

        // Open the 3‑dot menu on the first row
        const rows = await ClientsPartiesPage.clientRows;
        await rows[0].moveTo();

        const menuButton = await rows[0].$('button');
        await menuButton.click();

        // Click Edit
        await ClientsPartiesPage.contextMenuEdit.waitForDisplayed({ timeout: 15000 });
        await ClientsPartiesPage.contextMenuEdit.click();

        // Edit the name
        const newName = 'Cameron C';

        await ClientsPartiesPage.nameInput.waitForDisplayed({ timeout: 15000 });
        await ClientsPartiesPage.nameInput.setValue(newName);

        // Save
        await ClientsPartiesPage.partyCreateButton.click();

        // Allow table to refresh
        await browser.pause(1500);

        // Verify updated name appears in the table
        const nameCells = await ClientsPartiesPage.clientNameCells;

        const found = await nameCells.some(async cell => {
            const text = await cell.getText();
            return text.includes(newName);
        });

        expect(found).toBe(true);
    });
});
