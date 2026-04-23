import LoginPage from '../pageobjects/LoginPage.js';
import ClientsPage from '../pageobjects/ClientsPage.js';
import { USERNAME, PASSWORD } from '../helpers/credentials.js';

describe('TC23 - Clients Three Dots Option 2', () => {
  it('should open the 3-dots menu and click the second option', async () => {
    await LoginPage.open();
    await LoginPage.login(USERNAME, PASSWORD);
    await ClientsPage.open();

    const threeDots = $('button*=...');
    await threeDots.click();

    const option2 = $('button*=Preview');
    await option2.waitForDisplayed();
    await option2.click();
  });
});
