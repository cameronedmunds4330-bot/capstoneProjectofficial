import LoginPage from '../pageobjects/LoginPage.js';
import ClientsPage from '../pageobjects/ClientsPage.js';
import { USERNAME, PASSWORD } from '../helpers/credentials.js';

describe('TC22 - Clients Three Dots Option 1', () => {
  it('should open the 3-dots menu and click the first option', async () => {
    await LoginPage.open();
    await LoginPage.login(USERNAME, PASSWORD);
    await ClientsPage.open();

    const threeDots = $('button*=...');
    await threeDots.waitForDisplayed();
    await threeDots.click();

    const option1 = $('button*=Edit');
    await option1.waitForDisplayed();
    await option1.click();
  });
});
