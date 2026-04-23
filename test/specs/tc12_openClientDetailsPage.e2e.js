import LoginPage from '../pageobjects/LoginPage.js';
import ClientsPage from '../pageobjects/ClientsPage.js';
import { USERNAME, PASSWORD } from '../helpers/credentials.js';

describe('TC12 - Open Client Details Page', () => {
  it('should search for a client and open the edit page', async () => {
    await LoginPage.open();
    await LoginPage.login(USERNAME, PASSWORD);

    await ClientsPage.open();

    await ClientsPage.search('Cameron Edmunds');

    const pencilIcon = $('button*=Edit');
    await pencilIcon.waitForDisplayed();
    await pencilIcon.click();

    const breadcrumb = $('*=Clients/Parties');
    await breadcrumb.waitForDisplayed();
    await breadcrumb.click();
  });
});
