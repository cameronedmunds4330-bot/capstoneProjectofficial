import LoginPage from '../../pageobjects/LoginPage.js';
import AccountMenuPage from '../../pageobjects/AccountMenuPage.js';

describe('Account Menu - Page Loads', () => {

    it('should open the Account Menu after login', async () => {

        // Login with your real credentials
        await LoginPage.login(
            'cameron.edmunds4330@stu.mtec.edu',
            'Successful!4321'
        );

        // Open the Account Menu
        await AccountMenuPage.openAccountMenu();

        // Verify the menu panel is visible
        await AccountMenuPage.waitForVisible(AccountMenuPage.accountMenuPanel);
    });
});
