class CaseDataTypesPage {
  // Account Settings tab
  get accountSettingsTab() {
    return $('[data-testid="vert-nav-account-settings"]');
  }

  // Case Data Types tab
  get caseDataTypesTab() {
    return $('[data-testid="account-settings-case-data-tab"]');
  }

  // Add new status button (plus icon)
  get addStatusButton() {
    return $('[data-testid="case-type-panel-add-button"]');
  }

  // Status input
  get statusInput() {
    return $('[data-testid="add-edit-status-status-input"]');
  }

  // Description input
  get descriptionInput() {
    return $('[data-testid="add-edit-status-description-input"]');
  }

  // Save button
  get saveButton() {
    return $('[data-testid="add-edit-status-save-button"]');
  }

  // Cancel button
  get cancelButton() {
    return $('[data-testid="add-edit-status-cancel-button"]');
  }

  async open() {
    await this.accountSettingsTab.waitForDisplayed();
    await this.accountSettingsTab.click();

    await this.caseDataTypesTab.waitForDisplayed();
    await this.caseDataTypesTab.click();
  }

  async createStatus(name, description) {
    await this.addStatusButton.waitForDisplayed();
    await this.addStatusButton.click();

    await this.statusInput.waitForDisplayed();
    await this.statusInput.setValue(name);

    await this.descriptionInput.waitForDisplayed();
    await this.descriptionInput.setValue(description);

    await this.saveButton.waitForDisplayed();
    await this.saveButton.click();
  }
}

export default new CaseDataTypesPage();

