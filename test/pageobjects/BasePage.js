// test/pageobjects/BasePage.js

export default class BasePage {

    /**
     * Navigate to a specific path
     * @param {string} path
     */
    async open(path) {
        await browser.url(path);
    }

    /**
     * Click an element
     * @param {WebdriverIO.Element} element
     */
    async click(element) {
        await element.waitForExist({ timeout: 5000 });
        await element.waitForClickable({ timeout: 5000 });
        await element.click();
    }

    /**
     * Type text into an input
     * @param {WebdriverIO.Element} element
     * @param {string} value
     */
    async type(element, value) {
        await element.waitForExist({ timeout: 5000 });
        await element.setValue(value);
    }

    /**
     * Wait for an element to be visible
     * @param {WebdriverIO.Element} element
     */
    async waitForVisible(element) {
        await element.waitForDisplayed({ timeout: 5000 });
    }

    /**
     * Return text from an element
     * @param {WebdriverIO.Element} element
     */
    async getText(element) {
        await element.waitForDisplayed({ timeout: 5000 });
        return await element.getText();
    }
}
