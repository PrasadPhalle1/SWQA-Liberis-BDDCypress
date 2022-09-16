Cypress.on('uncaught:exception', (err, runnable) => {
return false;
});

import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "./PageObjects/HomePage"
import PartnerPage from "./PageObjects/PartnerPage"

const homePage = new HomePage()
const partnerPage = new PartnerPage()

Given('User is on Home page', () =>{
cy.visit('https://www.liberis.com/')
cy.log('Launched URL.....')
})

When('User click on Get A Demo Button in Home page', () => {   
    homePage.clickOnGetADemoOnHomePage()
})

Then('Verify user has landed on Partner Selection page and it has the required 3 Types of Partners', () => {
    homePage.verifyUserHasLandedOnPartnerSelectionPage()
})

When('User click on Get A Demo Button in Partner Selection page', () => {
    partnerPage.clickOnGetADemoOnPartnerPage()
})

Then('Verify the validation message', () => {
    partnerPage.VerifyTheValidationMessage()
})


