import BasePage from './BasePage.js';

class CaseStatusesPage extends BasePage {

    //
    // LEFT NAV → Case Data Types
    //
    get navCaseDataTypes() {
        return $('[data-testid="vert-nav-case-data-types"]');
    }

    //
    // TAB BUTTONS
    //
    get caseStatusesTab() {
        return $('[data-testid="case-data-types-tab-case-statuses"]');
    }

    //
    // PLUS BUTTONS (you circled these in your screenshot)
    //
    get addStatusButton() {
        return $('[data-testid="case-statuses-add-button"]');
    }

    //
    // INPUTS IN THE ADD/EDIT MODAL
    //
    get statusNameInput() {
        return $('[data-testid="case-status-name-input"]');
    }

    get statusDescriptionInput() {
        return $('[data-testid="case-status-description-input"]');
    }

    //
    // SAVE BUTTON
    //
    get saveButton() {
        return $('[data-testid="case-status-save-button"]');
    }

    //
    // TABLE GRID
    //
    get caseStatusesGrid() {
        return $('div.fui-DataGrid.fui-Table');
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
    // PAGE ACTIONS
    //

    async openCaseStatusesPage() {
        await this.open('/account/caseDataTypes');
        await this.click(this.navCaseDataTypes);
        await this.click(this.caseStatusesTab);
        await this.waitForVisible(this.caseStatusesGrid);
    }

    async addStatus(name, description) {
        await this.click(this.addStatusButton);
        await this.type(this.statusNameInput, name);
        await this.type(this.statusDescriptionInput, description);
        await this.click(this.saveButton);
    }

    async openStatusRow(name) {
        const row = $(`//div[@role="gridcell" and contains(., "${name}")]`);
        await this.waitForVisible(row);
        await row.click();
    }
}

export default new CaseStatusesPage();
