import path from 'node:path';

class ClientsPage {
  // Navigation
  get navLink() {
    return $('[data-testid="vert-nav-clients-parties"]');
  }

  // 3-dots menu (row actions)
  get threeDotsMenu() {
    return $('[aria-label="More items"]');
  }

  // Delete option inside 3-dots menu
  get deleteMenuItem() {
    return $('[data-testid="custom-data-table-context-menu-item-Delete"]');
  }

  // Confirmation button in delete dialog
  get confirmDeleteButton() {
    return $('[data-testid="confirmation-dialog-confirm-button"]');
  }

  // Success toast title (used for delete/import success)
  get successToast() {
    return $('div.fui-ToastTitle');
  }

  // Import button on page (opens import modal)
  get importButton() {
    return $('[data-testid="import-parties-button"]');
  }

  // Hidden file input inside import modal
  get fileInput() {
    return $('input[type="file"]');
  }

  // Upload/Import button inside import modal
  get uploadSubmitButton() {
    return $('[data-testid="import-parties-upload-button"]');
  }

  // Cancel/Close button inside import modal
  get uploadCancelButton() {
    return $('[data-testid="import-parties-close-button"]');
  }

  // Search input
  get searchInput() {
    return $('input[placeholder="Search"]');
  }

  // Table rows
  get tableRows() {
    return $$('table tbody tr');
  }

  // Optional: no-results message (if present in UI)
  get noResultsMessage() {
    return $('//*[contains(text(), "No results") or contains(text(), "No data")]');
  }

  async open() {
    await this.navLink.waitForDisplayed({ timeout: 15000 });
    await this.navLink.click();
  }

  async deleteFirstClient() {
    await this.threeDotsMenu.waitForDisplayed({ timeout: 15000 });
    await this.threeDotsMenu.click();

    await this.deleteMenuItem.waitForDisplayed({ timeout: 15000 });
    await this.deleteMenuItem.click();

    await this.confirmDeleteButton.waitForDisplayed({ timeout: 15000 });
    await this.confirmDeleteButton.click();
  }

  async importCSV(filename) {
    await this.importButton.waitForDisplayed({ timeout: 15000 });
    await this.importButton.click();

    const localPath = path.resolve(`test/data/${filename}`);
    const remotePath = await browser.uploadFile(localPath);

    await this.fileInput.waitForExist({ timeout: 15000 });
    await this.fileInput.setValue(remotePath);

    await this.uploadSubmitButton.waitForEnabled({ timeout: 15000 });
    await this.uploadSubmitButton.click();

    await this.successToast.waitForDisplayed({ timeout: 15000 });
  }

  async search(term) {
    await this.searchInput.waitForDisplayed({ timeout: 15000 });
    await this.searchInput.setValue(term);
    await browser.pause(400);
  }

  async clearSearch() {
    await this.searchInput.waitForDisplayed({ timeout: 15000 });
    await this.searchInput.setValue('');
    await browser.pause(400);
  }
}

export default new ClientsPage();
