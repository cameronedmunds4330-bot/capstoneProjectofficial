import LoginPage from '../../pageobjects/LoginPage.js';
import CaseStatusesPage from '../../pageobjects/CaseStatusesPage.js';

describe('Case Data Types – Case Statuses – Create', () => {

    it('should create a new Case Status', async () => {

        // Login
        await LoginPage.login(
            'cameron.edmunds4330@stu.mtec.edu',
            'Successful!4321'
        );

        // Navigate to Case Statuses
        await CaseStatusesPage.open();

        // Click Create
        await CaseStatusesPage.createButton.waitForDisplayed({ timeout: 15000 });
        await CaseStatusesPage.createButton.click();

        // Enter Case Status name
        const newStatusName = 'Test Case Status';
        await CaseStatusesPage.nameInput.waitForDisplayed({ timeout: 15000 });
        await CaseStatusesPage.nameInput.setValue(newStatusName);

        // Save
        await CaseStatusesPage.saveButton.click();

        // Allow table to refresh
        await browser.pause(1500);

        // Verify the new Case Status appears in the table
        const statusCells = await CaseStatusesPage.statusNameCells;

        const found = await statusCells.some(async cell => {
            const text = await cell.getText();
            return text.includes(newStatusName);
        });

        expect(found).toBe(true);
    });
});
