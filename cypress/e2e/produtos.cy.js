/// <reference types="cypress"/>

describe('funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit ('produtos')
    });
    
    it('deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
        //.first()
        //.last()
        //.eq(2)
        .contains('Abominable Hoodie')
        .click()

       cy.get('#tab-title-description > a').should('contain', 'Descrição')  

    });
});