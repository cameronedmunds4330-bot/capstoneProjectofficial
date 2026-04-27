import LoginPage from '../../pageobjects/LoginPage.js';
import ClientsPartiesPage from '../../pageobjects/ClientsPartiesPage.js';

describe('Clients / 3rd Parties - Search By Name (Not Found)', () => {

    it('should show no results when searching for a non-existing client', async () => {

        // Login
        await LoginPage.login(
            'cameron.edmunds4330@stu.mtec.edu',
            'Successful!4321'
        );

        // Navigate to Clients / 3rd Parties
        await ClientsPartiesPage.open();

        // Search for a name that does NOT exist
        await ClientsPartiesPage.searchInput.waitForDisplayed({ timeout: 15000 });
        await ClientsPartiesPage.searchInput.setValue('apple');

        // Allow table to update
        await browser.pause(1500);

        // Get all visible name cells
        const nameCells = await ClientsPartiesPage.clientNameCells;

        // Check if ANY cell contains "apple"
        const found = await nameCells.some(async cell => {
            const text = await cell.getText();
            return text.includes('apple');
        });

        expect(found).toBe(false);
    });
});
