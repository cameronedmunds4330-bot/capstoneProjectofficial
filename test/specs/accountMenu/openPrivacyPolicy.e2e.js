import AccountMenuPage from '../../pageobjects/AccountMenuPage.js';

describe('Account Menu - Privacy Policy', () => {

    it('should open and close the Privacy Policy modal', async () => {

        await AccountMenuPage.openMenu();

        await AccountMenuPage.privacyPolicyLink.click();

        await AccountMenuPage.modalCloseButton.waitForDisplayed({ timeout: 15000 });
        await AccountMenuPage.modalCloseButton.click();
    });
});
