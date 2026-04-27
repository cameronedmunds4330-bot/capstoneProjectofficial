import LoginPage from '../../pageobjects/LoginPage.js';
import CaseTypesPage from '../../pageobjects/CaseTypesPage.js';

describe('Case Data Types – Case Types – Create', () => {

    it('should create a new Case Type', async () => {

        // Login
        await LoginPage.login(
            'cameron.edmunds4330@stu.mtec.edu',
            'Successful!4321'
        );

        // Navigate to Case Types
        await CaseTypesPage.open();

        // Click Create
        await CaseTypesPage.createButton.waitForDisplayed({ timeout: 15000 });
        await CaseTypesPage.createButton.click();

        // Enter Case Type name
        const newTypeName = 'Automation Case Type';
        await CaseTypesPage.nameInput.waitForDisplayed({ timeout: 15000 });
        await CaseTypesPage.nameInput.setValue(newTypeName);

        // Save
        await CaseTypesPage.saveButton.click();

        // Allow table to refresh
        await browser.pause(1500);

        // Verify the new Case Type appears in the table
        const typeCells = await CaseTypesPage.typeNameCells;

        const found = await typeCells.some(async cell => {
            const text = await cell.getText();
            return text.includes(newTypeName);
        });

        expect(found).toBe(true);
    });
});
