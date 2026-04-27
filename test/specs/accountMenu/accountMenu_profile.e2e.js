import LoginPage from '../../pageobjects/LoginPage.js';
import AccountMenuPage from '../../pageobjects/AccountMenuPage.js';

describe('Account Menu - Profile', () => {

    it('should navigate to the Profile page from the Account Menu', async () => {

        // Login with your real credentials
        await LoginPage.login(
            'cameron.edmunds4330@stu.mtec.edu',
            'Successful!4321'
        );

        // Open the Account Menu
        await AccountMenuPage.openAccountMenu();

        // Click the Profile option
        await AccountMenuPage.click(AccountMenuPage.profileButton);

        // Verify the Profile page header is visible
        await AccountMenuPage.waitForVisible(AccountMenuPage.profilePageHeader);
    });
});
