import LoginPage from '../../pageobjects/LoginPage.js';
import ClientsPartiesPage from '../../pageobjects/ClientsPartiesPage.js';

describe('Clients / 3rd Parties - Clear Search Restores List', () => {

    it('should restore the full client list after clearing the search input', async () => {

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

        // Search for "Cameron"
        await ClientsPartiesPage.searchInput.waitForDisplayed({ timeout: 15000 });
        await ClientsPartiesPage.searchInput.setValue('Cameron');

        await browser.pause(1500);
        const filteredRows = await ClientsPartiesPage.clientRows.length;

        // Ensure the filtered list is smaller or equal
        expect(filteredRows).toBeLessThanOrEqual(initialRows);

        // Clear search
        await ClientsPartiesPage.searchInput.setValue('');

        await browser.pause(1500);
        const restoredRows = await ClientsPartiesPage.clientRows.length;

        // Verify the list is restored
        expect(restoredRows).toBe(initialRows);
    });
});
