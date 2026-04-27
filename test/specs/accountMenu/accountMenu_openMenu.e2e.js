import LoginPage from '../../pageobjects/LoginPage.js';
import AccountMenuPage from '../../pageobjects/AccountMenuPage.js';

describe('Account Menu - Open Menu', () => {

    it('should login and open the account menu', async () => {

        await LoginPage.login(
            'cameron.edmunds4330@stu.mtec.edu',
            'Successful!4321'
        );

        await AccountMenuPage.openMenu();

        await expect(AccountMenuPage.menuPanel).toBeDisplayed();
    });
});
