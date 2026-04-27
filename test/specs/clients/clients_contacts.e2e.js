import LoginPage from '../../pageobjects/LoginPage.js';
import ClientsPartiesPage from '../../pageobjects/ClientsPartiesPage.js';

describe('Clients / 3rd Parties - Add & Delete Contact', () => {

    it('should add and then delete a contact for Cameron', async () => {

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

        // Open the first matching client record
        const rows = await ClientsPartiesPage.clientRows;
        await rows[0].click();

        // Click Add Contact
        await ClientsPartiesPage.addContactButton.waitForDisplayed({ timeout: 15000 });
        await ClientsPartiesPage.addContactButton.click();

        // Fill out contact fields
        await ClientsPartiesPage.contactFirstNameInput.setValue('Test');
        await ClientsPartiesPage.contactLastNameInput.setValue('Contact');
        await ClientsPartiesPage.contactEmailInput.setValue('test.contact@example.com');
        await ClientsPartiesPage.contactPhoneInput.setValue('8015559999');

        // Save contact
        await ClientsPartiesPage.contactSaveButton.click();

        // Allow list to refresh
        await browser.pause(1500);

        // Verify contact appears
        const contactRows = await ClientsPartiesPage.contactRows;
        const added = await contactRows.some(async row => {
            const text = await row.getText();
            return text.includes('Test') && text.includes('Contact');
        });

        expect(added).toBe(true);

        // Delete the contact
        const firstContactRow = contactRows[0];
        const deleteButton = await firstContactRow.$('button');
        await deleteButton.click();

        await ClientsPartiesPage.confirmDeleteButton.waitForDisplayed({ timeout: 15000 });
        await ClientsPartiesPage.confirmDeleteButton.click();

        // Allow list to refresh
        await browser.pause(1500);

        // Verify contact is gone
        const updatedRows = await ClientsPartiesPage.contactRows;
        const stillExists = await updatedRows.some(async row => {
            const text = await row.getText();
            return text.includes('Test') && text.includes('Contact');
        });

        expect(stillExists).toBe(false);
    });
});
