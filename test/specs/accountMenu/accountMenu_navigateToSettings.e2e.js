import AccountMenuPage from '../../pageobjects/AccountMenuPage.js';

describe('Account Menu - Navigate to Settings', () => {

    it('should open the account menu and navigate to Account Settings', async () => {

        await AccountMenuPage.openMenu();

        await AccountMenuPage.settingsButton.click();

        await expect(AccountMenuPage.settingsHeader).toBeDisplayed();
    });
});
