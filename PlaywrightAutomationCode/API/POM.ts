import { Given, Then } from "@cucumber/cucumber";
import { LoginPage } from "../Pages/LoginPage";

import { TestData1, TestData2, TestData3, orangeHRMCredentials,orangeHRM } from '../Files/TestData.json'
import { pageFixture } from "../hooks/pageFixture";
import { ForgotYourPaswordPage } from "../Pages/ForgotYourPaswordPage";
import { HomePage } from "../Pages/HomePage";

let lp: LoginPage

let fyp : ForgotYourPaswordPage

let hp : HomePage


Given('I launch the OrangeHRM application', async function () {


    lp = new LoginPage(pageFixture.page)

    lp.navigateToOrangeHRMApplication(orangeHRMCredentials.url)
})

Then('I Verify Login Functionality for the OrangeHRM application {string}, {string}', async function (username, password) {

    lp = new LoginPage(pageFixture.page)

    //lp.verifyLoginPageWebElements()

    await pageFixture.page.waitForTimeout(5000)

     lp.enterUsername(username)

     await pageFixture.page.waitForTimeout(5000)

    lp.enterPassword(password)

    // lp.enterUsername(orangeHRM.username)

    // lp.enterPassword(orangeHRM.password)

    await pageFixture.page.waitForTimeout(5000)
    
    lp.clickLoginButton()

   
})
Then('verify forgot your password functionality {string}', async function (username) {

    lp = new LoginPage(pageFixture.page)

    await pageFixture.page.waitForTimeout(5000)

    lp.clickForgotYourPasswordLink()

    fyp = new ForgotYourPaswordPage(pageFixture.page)

    await pageFixture.page.waitForTimeout(5000)

    fyp.enterUsername(username)

    await pageFixture.page.waitForTimeout(5000)

    fyp.clickCancelButton()
   
})


Given('I click on Admin Tab', async function () {

    hp = new HomePage(pageFixture.page)

    await pageFixture.page.waitForTimeout(5000)
    
    hp.clickAdminTab()
})