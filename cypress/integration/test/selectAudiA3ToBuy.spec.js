const homepage = require('../page/homepage');
const searchPage = require('../page/searchpage');
const audicarpage = require('../page/audicarpage');
const checkoutpage = require('../page/checkoutpage');

describe('Select a Audi A3 to buy', function(){
   
    beforeEach(function(){
        cy.visit('https://www.autohero.com/es/');
        cy.get('.actions___elpML > .default___1FRAY').click();

    });

        it('Select a Audi A3, rrder by the highest price, and select the third car to the list', function(){
            cy.log('Select a search car button');
            homepage.clickASearchCarButton();
            cy.log('Open dropdown and to select a brand');
            searchPage.clickOpenDropdownToBrand();
            cy.log('Select Audi brand');
            searchPage.clickToAudiBrand();
            cy.log('Select model A3');
            searchPage.clickOnAudiA3();
            cy.log('Open hidden list and select highest price');
            searchPage.clickOnHiddenList();
            cy.log('Select the third car on the list');
            searchPage.clickOnThirdCarOnTheList();
            cy.log('Select the buy now button');
            audicarpage.clickOnBuyNowButton();
            cy.log('Verify that the user is on the payment page');
            checkoutpage.verifyCheckoutMessage(); 
    });
});