import LoginPage from '../../pageobjects/LoginPage.js';
import ClientsPartiesPage from '../../pageobjects/ClientsPartiesPage.js';

describe('Clients / 3rd Parties - Open Client Record', () => {

    it('should open the client record for Cameron', async () => {

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

        // Click the first matching row
        const rows = await ClientsPartiesPage.clientRows;
        await rows[0].click();

        // Verify the client record page loaded
        await expect(ClientsPartiesPage.contactListContainer).toBeDisplayed();
    });
});
