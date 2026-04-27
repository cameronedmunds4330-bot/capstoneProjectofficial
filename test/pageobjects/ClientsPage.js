import BasePage from './BasePage.js';

class ClientsPage extends BasePage {

    //
    // LEFT NAV
    //
    get navClients() {
        return $('[data-testid="vert-nav-clients-parties"]');
    }

    //
    // MAIN TABLE / GRID
    //
    get clientsGrid() {
        return $('div.fui-DataGrid.fui-Table');
    }

    //
    // SEARCH INPUT (if present)
    //
    get searchInput() {
        return $('input[type="search"], [data-testid="clients-search-input"]');
    }

    //
    // 3-DOT MENU ITEMS
    //
    get menuEdit() {
        return $('[data-testid="custom-data-table-context-menu-item-Edit"]');
    }

    get menuDelete() {
        return $('[data-testid="custom-data-table-context-menu-item-Delete"]');
    }

    //
    // DELETE CONFIRMATION
    //
    get confirmDeleteYes() {
        return $('[data-testid="confirmation-dialog-confirm-button"]');
    }

    //
    // BULK DELETE BUTTON
    //
    get bulkDeleteButton() {
        return $('[data-testid="parties-delete-selected-button"]');
    }

    //
    // PAGE ACTIONS
    //

    async openClientsPage() {
        await this.open('/account/clientsParties');
        await this.click(this.navClients);
        await this.waitForVisible(this.clientsGrid);
    }

    async searchClient(name) {
        await this.type(this.searchInput, name);
        await browser.keys('Enter');
    }

    async openClientRow(name) {
        const row = $(`//div[@role="gridcell" and contains(., "${name}")]`);
        await this.waitForVisible(row);
        await row.click();
    }
}

export default new ClientsPage();
