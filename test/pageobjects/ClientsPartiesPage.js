// test/pageobjects/ClientsPage.js
import BasePage from './BasePage.js';

class ClientsPage extends BasePage {
  // Left nav
  get navClients() {
    return $('[data-testid="vert-nav-clients-parties"]');
  }

  // Main grid container (client rows)
  get clientsGrid() {
    return $('div.fui-DataGrid.fui-Table');
  }

  // Example: search input, if present
  get searchInput() {
    return $('input[type="search"], [data-testid="clients-search-input"]');
  }

  // 3-dot menu item selectors from your doc
  get contextMenuEdit() {
    return $('[data-testid="custom-data-table-context-menu-item-Edit"]');
  }

  get contextMenuDelete() {
    return $('[data-testid="custom-data-table-context-menu-item-Delete"]');
  }

  get confirmDeleteYes() {
    return $('[data-testid="confirmation-dialog-confirm-button"]');
  }

  get bulkDeleteButton() {
    return $('[data-testid="parties-delete-selected-button"]');
  }

  async open() {
    await super.open('/account/clientsParties');
    await this.navClients.click();
  }

  async openClientByName(name) {
    await this.open();
    await this.searchInput.setValue(name);
    await browser.keys('Enter');
    const row = await $(`//div[@role="gridcell" and contains(., "${name}")]`);
    await this.waitForDisplayed(row);
    await row.click();
  }
}

export default new ClientsPage();
