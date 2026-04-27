export async function login() {
    await browser.url('https://app.thecasework.com/');

    const username = await $('[data-testid="login-username"]');
    const password = await $('[data-testid="login-password"]');
    const submit   = await $('[data-testid="login-submit"]');

    await username.waitForDisplayed();
    await username.setValue('cameron.edmunds4330@stu.mtec.edu');

    await password.waitForDisplayed();
    await password.setValue('Successful!4321');

    await submit.waitForClickable();
    await submit.click();
}
