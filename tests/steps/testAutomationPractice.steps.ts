import { Before, After, Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, BrowserContext, chromium, Page } from '@playwright/test';
import { TestAutomationPracticePage } from '../pages/testAutomationPracticePage';

setDefaultTimeout(60000);

let browser: Browser;
let context: BrowserContext;
let page: Page;
let practicePage: TestAutomationPracticePage;

Before(async function () {
  browser = await chromium.launch({ headless: true });
  context = await browser.newContext({ viewport: { width: 1440, height: 1200 } });
  page = await context.newPage();
  practicePage = new TestAutomationPracticePage(page);
});

After(async function () {
  await context?.close();
  await browser?.close();
});

Given('I open the Test Automation Practice page', async function () {
  await practicePage.openPage();
});

When('I fill the name {string}', async function (name: string) {
  await practicePage.fillName(name);
});

When('I fill the email {string}', async function (email: string) {
  await practicePage.fillEmail(email);
});

When('I fill the phone {string}', async function (phone: string) {
  await practicePage.fillPhone(phone);
});

When('I fill the address {string}', async function (address: string) {
  await practicePage.fillAddress(address);
});

When('I fill the wikipedia search {string}', async function (searchText: string) {
  await practicePage.fillWikipediaSearch(searchText);
});

Then('I should see the entered form values', async function () {
  await practicePage.verifyFormValues(
    'Quality Thought',
    'quality@thought.com',
    '1234567890',
    'Hyderabad',
    'Playwright'
  );
});
