import { Given, Then } from "@cucumber/cucumber";
import { LoginPage } from "../Pages/LoginPage";
import { pageFixture } from "../hooks/pageFixture";

import {orangeHRMCredentials} from "../Files/TestData.json"
import { ForgotYourPasswordPage } from "../Pages/ForgotYourPasswordPage";

let lp : LoginPage

let fyp : ForgotYourPasswordPage

Given('I launch the orangeHRM application',async function() {
    
    lp = new LoginPage(pageFixture.page)

    //lp.navigateToTheOrangeHrmApplication(orangeHRMCredentials.url)

    lp.navigateToTheOrangeHrmApplication('https://login.salesforce.com/?locale=in')
})

Then('I Verify login functionality for the Orange application {string},{string}',async function(username,password) {
    
    lp = new LoginPage(pageFixture.page)

    await pageFixture.page.waitForTimeout(3000)

    lp.enterUsername(username)

    await pageFixture.page.waitForTimeout(3000)
    
    lp.enterPassword(password)

    await pageFixture.page.waitForTimeout(3000)
    
    lp.clickLoginButton()

    await pageFixture.page.waitForTimeout(3000)
    
})

Then('I Verify forgot Your password functionality {string}',async function(username) {

    lp = new LoginPage(pageFixture.page)

    await pageFixture.page.waitForTimeout(3000)

    lp.clickforgotYourpasswordlink()

    await pageFixture.page.waitForTimeout(3000)

    fyp = new ForgotYourPasswordPage(pageFixture.page)

    fyp.enterUsername(username)

    await pageFixture.page.waitForTimeout(3000)

    fyp.clickCancelButton()

    await pageFixture.page.waitForTimeout(3000)

})
