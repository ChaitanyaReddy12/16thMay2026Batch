import { expect, Page } from "playwright/test";
import { pageFixture } from "../hooks/pageFixture";

export class ForgotYourPasswordPage {

    constructor(public page: Page) {

        this.page = page
    }

    public Elements = {

        usernameTextboxUsingPlaceholder: "/Enter your username...",
        cancelButton: "//input[@name='cancel']",
        continueButton: "//input[@name='continue']",
    }

    async verifyWebElementsIntheForgotYourPasswordPage() {

        await expect(pageFixture.page.getByPlaceholder(this.Elements.usernameTextboxUsingPlaceholder)).toBeVisible()

        await expect(pageFixture.page.locator(this.Elements.cancelButton)).toBeVisible()

        await expect(pageFixture.page.locator(this.Elements.continueButton)).toBeVisible()
    }

    async enterUsername(username: string) {

        await pageFixture.page.getByPlaceholder(this.Elements.usernameTextboxUsingPlaceholder).fill(username)
    }

    async clickCancelButton() {

        await pageFixture.page.locator(this.Elements.cancelButton).click()
    }

    async clickContinueButton() {

        await pageFixture.page.locator(this.Elements.continueButton).click()
    }
}