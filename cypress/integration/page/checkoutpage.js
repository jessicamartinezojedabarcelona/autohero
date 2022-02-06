class checkoutPage {

    verifyCheckoutMessage(){
        cy.title().should('eq', 'Página de pago | Autohero')
    }

}
module.exports = new checkoutPage();

