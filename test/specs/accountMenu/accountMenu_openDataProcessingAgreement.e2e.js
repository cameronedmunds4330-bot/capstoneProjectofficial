import AccountMenuPage from '../../pageobjects/AccountMenuPage.js';

describe('Account Menu - Data Processing Agreement', () => {

    it('should open and close the Data Processing Agreement modal', async () => {

        await AccountMenuPage.openMenu();

        await AccountMenuPage.dataProcessingAgreementLink.click();

        await AccountMenuPage.modalCloseButton.waitForDisplayed({ timeout: 15000 });
        await AccountMenuPage.modalCloseButton.click();
    });
});
