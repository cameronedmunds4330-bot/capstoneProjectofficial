import LoginPage from '../pageobjects/LoginPage.js';
import ClientsPage from '../pageobjects/ClientsPage.js';
import { USERNAME, PASSWORD } from '../helpers/credentials.js';

describe('TC24 - Clients Three Dots Option 3', () => {
  it('should open the 3-dots menu and click the third option', async () => {
    await LoginPage.open();
    await LoginPage.login(USERNAME, PASSWORD);
    await ClientsPage.open();

    const threeDots = $('button*=...');
    await threeDots.click();

    const option3 = $('button*=Delete');
    await option3.waitForDisplayed();
    await option3.click();
  });
});
