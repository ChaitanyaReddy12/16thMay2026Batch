import { expect, Page } from "playwright/test";
import { pageFixture } from "../hooks/pageFixture";

export class LoginPage{

    constructor(public page : Page){

        this.page = page
    }

    public Elements = {

        orangeHRMLogoUsingAltText : "company-branding",
        orangeHRMLogousingCssSelector:".orangehrm-login-branding",
        usernameTextbox: "//input[@name='username']",
        // passwordTextbox:"//input[@name='password']",
        // loginButton:"//*[@type='submit']",
        loginText:"//*[text()='Login']",
        forgotYourpasswordlink:"//*[text()='Forgot Your Password?']", 
        passwordTextbox:"//input[@id='password']",
        loginButton:"//*[@type='submit']",
    }

    async navigateToTheOrangeHrmApplication(url:string){

        await pageFixture.page.goto(url)

        await pageFixture.page.waitForLoadState('load',{timeout:5000})

        console.log(await pageFixture.page.url())

        console.log(await pageFixture.page.title())
    }

    async verifyWebElementsIntheLoginPage(){

       await expect(pageFixture.page.getByAltText(this.Elements.orangeHRMLogoUsingAltText)).toBeVisible()

       await expect(pageFixture.page.locator(this.Elements.orangeHRMLogousingCssSelector)).toBeVisible()

       await expect(pageFixture.page.locator(this.Elements.usernameTextbox)).toBeVisible()

       await expect(pageFixture.page.locator(this.Elements.passwordTextbox)).toBeVisible()

       await expect(pageFixture.page.locator(this.Elements.loginButton)).toBeVisible()

       await expect(pageFixture.page.locator(this.Elements.loginText)).toBeVisible()

       await expect(pageFixture.page.locator(this.Elements.forgotYourpasswordlink)).toBeVisible()
    }

    async enterUsername(username:string){

        await pageFixture.page.locator(this.Elements.usernameTextbox).fill(username)
    }

     async enterPassword(password:string){

        await pageFixture.page.locator(this.Elements.passwordTextbox).fill(password)
    }

     async clickLoginButton(){

        await pageFixture.page.locator(this.Elements.loginButton).click()
    }

    async clickforgotYourpasswordlink(){

        await pageFixture.page.locator(this.Elements.forgotYourpasswordlink).click()
    }
}