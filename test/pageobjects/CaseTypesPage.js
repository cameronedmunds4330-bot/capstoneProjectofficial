import BasePage from './BasePage.js';

class CaseTypesPage extends BasePage {

    //
    // LEFT NAV → Case Data Types
    //
    get navCaseDataTypes() {
        return $('[data-testid="vert-nav-case-data-types"]');
    }

    //
    // TAB BUTTONS
    //
    get caseTypesTab() {
        return $('[data-testid="case-data-types-tab-case-types"]');
    }

    //
    // ADD NEW CASE TYPE BUTTON
    //
    get addCaseTypeButton() {
        return $('[data-testid="case-types-add-button"]');
    }

    //
    // INPUTS IN THE ADD/EDIT MODAL
    //
    get caseTypeNameInput() {
        return $('[data-testid="case-type-name-input"]');
    }

    get caseTypeDescriptionInput() {
        return $('[data-testid="case-type-description-input"]');
    }

    //
    // SAVE BUTTON
    //
    get saveButton() {
        return $('[data-testid="case-type-save-button"]');
    }

    //
    // TABLE GRID
    //
    get caseTypesGrid() {
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

    async openCaseTypesPage() {
        await this.open('/account/caseDataTypes');
        await this.click(this.navCaseDataTypes);
        await this.click(this.caseTypesTab);
        await this.waitForVisible(this.caseTypesGrid);
    }

    async addCaseType(name, description) {
        await this.click(this.addCaseTypeButton);
        await this.type(this.caseTypeNameInput, name);
        await this.type(this.caseTypeDescriptionInput, description);
        await this.click(this.saveButton);
    }

    async openCaseTypeRow(name) {
        const row = $(`//div[@role="gridcell" and contains(., "${name}")]`);
        await this.waitForVisible(row);
        await row.click();
    }
}

export default new CaseTypesPage();
