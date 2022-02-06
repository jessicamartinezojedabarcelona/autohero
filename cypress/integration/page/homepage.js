class homePage {

    elements = {
        //set element to the DOM
        searchACarButton: () => cy.get('.bannerBtn____IhR-'),

    }
    clickASearchCarButton(){
        this.elements.searchACarButton().click()
    }

}
module.exports = new homePage();