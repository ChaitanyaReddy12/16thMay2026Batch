import { Before, After, Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, BrowserContext, chromium, Page } from '@playwright/test';
import { AmazonLoginPage } from '../pages/amazonLoginPage';

setDefaultTimeout(60 * 1000);

let browser: Browser;
let context: BrowserContext;
let page: Page;
let amazonLoginPage: AmazonLoginPage;

Before(async function () {
  browser = await chromium.launch({ headless: true });
  context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  page = await context.newPage();
  amazonLoginPage = new AmazonLoginPage(page);
});

After(async function () {
  await context?.close();
  await browser?.close();
});

Given('I open Amazon home page', async function () {
  await amazonLoginPage.openHomePage();
});

When('I click on the Sign in button', async function () {
  await amazonLoginPage.clickSignIn();
});

Then('I should see the Amazon sign-in page', async function () {
  await amazonLoginPage.assertSignInPageVisible();
});

When('I enter the email {string}', async function (email: string) {
  await amazonLoginPage.enterEmail(email);
});

When('I click Continue', async function () {
  await amazonLoginPage.clickContinue();
});

Then('I should see the password field', async function () {
  await amazonLoginPage.assertPasswordFieldVisible();
});
