class searchPage {

    elements = {
        //set element to the DOM
        brandDropdown: () => cy.get('#carMakeFilter'),
        audibrand: () => cy.get('input[data-qa-selector="audi"]'),
        selectAudiA3: () =>  cy.get('input[data-qa-selector-value="A3"]'),
        selectHidden: () =>  cy.get('#sortBy'),
        thirdCarOnTheList: () => cy.xpath('//*[@id="app"]/div/main/div/div[2]/div[1]/div/div/div/div[3]'),



    }
    clickOpenDropdownToBrand(){
        this.elements.brandDropdown().click()
    }
    clickToAudiBrand(){
        this.elements.audibrand().click()
    }
    clickOnAudiA3(){
        this.elements.selectAudiA3().click()
    }
    clickOnHiddenList(){
        this.elements.selectHidden().select('Precio más alto');
    }
    clickOnThirdCarOnTheList(){
        this.elements.thirdCarOnTheList().click()
    }

}
module.exports = new searchPage();




