import LoginPage from '../../pageobjects/LoginPage.js';
import ClientsPartiesPage from '../../pageobjects/ClientsPartiesPage.js';

describe('Clients / 3rd Parties - Create Client', () => {

    it('should create a new client with a phone number', async () => {

        // Login
        await LoginPage.login(
            'cameron.edmunds4330@stu.mtec.edu',
            'Successful!4321'
        );

        // Navigate to Clients / 3rd Parties
        await ClientsPartiesPage.open();

        // Click Create
        await ClientsPartiesPage.createButton.waitForDisplayed({ timeout: 15000 });
        await ClientsPartiesPage.createButton.click();

        // Fill out client fields
        await ClientsPartiesPage.nameInput.setValue('Automation Test Client');
        await ClientsPartiesPage.address1Input.setValue('123 Test Street');
        await ClientsPartiesPage.address2Input.setValue('Suite 100');
        await ClientsPartiesPage.cityInput.setValue('Lehi');
        await ClientsPartiesPage.stateInput.setValue('UT');
        await ClientsPartiesPage.zipInput.setValue('84043');
        await ClientsPartiesPage.urlInput.setValue('https://example.com');

        // Add phone number
        await ClientsPartiesPage.addPhoneButton.click();
        await ClientsPartiesPage.phoneNumberInput.setValue('8015551234');
        await ClientsPartiesPage.phoneTypeCombobox.click();

        // Select first phone type option
        const phoneTypeOption = await $('//div[@role="option"]');
        await phoneTypeOption.click();

        await ClientsPartiesPage.phoneSubmitButton.click();

        // Save client
        await ClientsPartiesPage.partyCreateButton.click();

        // Allow table to refresh
        await browser.pause(1500);

        // Verify the new client appears in the table
        const nameCells = await ClientsPartiesPage.clientNameCells;

        const found = await nameCells.some(async cell => {
            const text = await cell.getText();
            return text.includes('Automation Test Client');
        });

        expect(found).toBe(true);
    });
});
