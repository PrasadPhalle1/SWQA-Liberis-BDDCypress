class PartnerPage{    

clickOnGetADemoOnPartnerPage(){
    cy.get('.inner-content > .btn').click()
}
VerifyTheValidationMessage(){
    cy.get('.ph-error-inner').should('have.text','Please select a type of partner')
}

}
export default PartnerPage;