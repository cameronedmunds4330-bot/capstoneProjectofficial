import LoginPage from '../../pageobjects/LoginPage.js';
import ClientsPartiesPage from '../../pageobjects/ClientsPartiesPage.js';

describe('Clients / 3rd Parties - Search By Name (Existing)', () => {

    it('should return results when searching for an existing client', async () => {

        // Login
        await LoginPage.login(
            'cameron.edmunds4330@stu.mtec.edu',
            'Successful!4321'
        );

        // Navigate to Clients / 3rd Parties
        await ClientsPartiesPage.open();

        // Search for an existing client named "Cameron"
        await ClientsPartiesPage.searchInput.waitForDisplayed({ timeout: 15000 });
        await ClientsPartiesPage.searchInput.setValue('Cameron');

        // Allow table to update
        await browser.pause(1500);

        // Verify at least one row contains the name "Cameron"
        const nameCells = await ClientsPartiesPage.clientNameCells;

        const found = await nameCells.some(async cell => {
            const text = await cell.getText();
            return text.includes('Cameron');
        });

        expect(found).toBe(true);
    });
});
