import BasePage from './BasePage.js';

class ImportPartiesPage extends BasePage {

    //
    // Open Import Modal
    //
    get importButton() {
        return $('[data-testid="parties-import-button"]');
    }

    get importDialog() {
        return $('div.fui-DialogSurface');
    }

    //
    // Drag-and-drop area
    //
    get dragAndDropArea() {
        return $('div.___jfvnoq0');
    }

    //
    // File rows (5, 50, 100, wrong.csv)
    //
    get fileRows() {
        return $$('div.___1wowv6l');
    }

    //
    // File name labels
    //
    get fileNameLabels() {
        return $$('span.fui-Text');
    }

    //
    // File size labels
    //
    get fileSizeLabels() {
        return $$('span.fui-Text.___13vod6f');
    }

    //
    // Import CSV button
    //
    get importCsvButton() {
        return $('[data-testid="import-parties-upload-button"]');
    }

    //
    // Close button
    //
    get closeButton() {
        return $('[data-testid="import-parties-close-button"]');
    }

    //
    // Success / Error Toasts
    //
    get messageBar() {
        return $('div.fui-MessageBarBody');
    }

    //
    // Actions
    //
    async openImportDialog() {
        await this.importButton.waitForDisplayed({ timeout: 15000 });
        await this.importButton.click();
        await this.importDialog.waitForDisplayed({ timeout: 15000 });
    }

    async uploadCsv(filePath) {
        const remotePath = await browser.uploadFile(filePath);

        // Find the hidden <input type="file"> inside the drag-and-drop area
        const fileInput = await this.dragAndDropArea.$('input[type="file"]');

        await fileInput.waitForExist({ timeout: 15000 });
        await fileInput.setValue(remotePath);
    }
}

export default new ImportPartiesPage();
