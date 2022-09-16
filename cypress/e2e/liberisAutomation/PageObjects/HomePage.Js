class HomePage{
    
clickOnGetADemoOnHomePage(){
    cy.get('.header-cta > .btn').click()
    cy.log('User clicked on Get A Demo Button in Home page.....')
}
verifyUserHasLandedOnPartnerSelectionPage(){
    cy.url().should('eq', 'https://www.liberis.com/become-a-partner')
    cy.get('.radio_container > :nth-child(1) > label').should('have.attr','for', "I'm a Broker")
    cy.get('.radio_container > :nth-child(2) > label').should('have.attr','for', "I'm an ISO")
    cy.get('.radio_container > :nth-child(3) > label').should('have.attr','for',"I'm a Strategic Partner")
}

}
export default HomePage;