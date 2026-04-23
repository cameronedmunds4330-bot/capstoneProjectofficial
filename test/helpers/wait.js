export async function waitForClickable(element) {
  await element.waitForDisplayed({ timeout: 10000 });
  await element.waitForEnabled({ timeout: 10000 });
}

export async function waitForVisible(element) {
  await element.waitForDisplayed({ timeout: 10000 });
}

export async function waitForGone(element) {
  await element.waitForDisplayed({ reverse: true, timeout: 10000 });
}
