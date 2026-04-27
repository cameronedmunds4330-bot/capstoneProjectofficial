import BasePage from './BasePage.js';

class ExpenseTypesPage extends BasePage {

    //
    // LEFT NAV → Case Data Types
    //
    get navCaseDataTypes() {
        return $('[data-testid="vert-nav-case-data-types"]');
    }

    //
    // TAB BUTTONS
    //
    get expenseTypesTab() {
        return $('[data-testid="case-data-types-tab-expense-types"]');
    }

    //
    // ADD NEW EXPENSE TYPE BUTTON
    //
    get addExpenseTypeButton() {
        return $('[data-testid="expense-types-add-button"]');
    }

    //
    // INPUTS IN THE ADD/EDIT MODAL
    //
    get expenseTypeNameInput() {
        return $('[data-testid="expense-type-name-input"]');
    }

    get expenseTypeDescriptionInput() {
        return $('[data-testid="expense-type-description-input"]');
    }

    //
    // SAVE BUTTON
    //
    get saveButton() {
        return $('[data-testid="expense-type-save-button"]');
    }

    //
    // TABLE GRID
    //
    get expenseTypesGrid() {
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

    async openExpenseTypesPage() {
        await this.open('/account/caseDataTypes');
        await this.click(this.navCaseDataTypes);
        await this.click(this.expenseTypesTab);
        await this.waitForVisible(this.expenseTypesGrid);
    }

    async addExpenseType(name, description) {
        await this.click(this.addExpenseTypeButton);
        await this.type(this.expenseTypeNameInput, name);
        await this.type(this.expenseTypeDescriptionInput, description);
        await this.click(this.saveButton);
    }

    async openExpenseTypeRow(name) {
        const row = $(`//div[@role="gridcell" and contains(., "${name}")]`);
        await this.waitForVisible(row);
        await row.click();
    }
}

export default new ExpenseTypesPage();
