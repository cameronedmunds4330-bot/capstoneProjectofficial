import AccountMenuPage from '../../pageobjects/AccountMenuPage.js';

describe('Account Menu - Terms of Service', () => {

    it('should open and close the Terms of Service modal', async () => {

        await AccountMenuPage.openMenu();

        await AccountMenuPage.termsOfServiceLink.click();

        await AccountMenuPage.modalCloseButton.waitForDisplayed({ timeout: 15000 });
        await AccountMenuPage.modalCloseButton.click();
    });
});
