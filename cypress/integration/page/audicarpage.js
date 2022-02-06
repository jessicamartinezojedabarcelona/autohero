class audiCarPage {

    elements = {
        //set element to the DOM
        buyNowButton: () => cy.get('.btn___2UOda'),

    }
    clickOnBuyNowButton(){
        this.elements.buyNowButton().click()
    }

}
module.exports = new audiCarPage();





