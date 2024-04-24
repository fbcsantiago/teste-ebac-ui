/// <reference types="cypress"/>

describe('funcionalidade: Login', () => {

    beforeEach(() => {
        Cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()  
    });

   it('deve fazer login com sucesso', () => {
       cy.get('#username').type('fernanda.teste1@ebac.com.br')
       cy.get('#password').type('Julia20230121@#$5')
       cy.get('woocommerce-form> .button').click()

       cy.get('.woocommerce-MvAccount-content > :nth-child(2)').should('contain' , 'olá, fernanda.teste1(não é fernanda.teste1? sair)')

   })

   it('deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
    cy.get('#username').type('fernanda.teste@ebac.com.br')
    cy.get('#password').type('Julia20230121@#$5')
    cy.get('woocommerce-form> .button').click()

    //cy. get ('.woocommerce error').should('contain' , 'endereço de e-mail desconhecido')
    cy. get ('.woocommerce-error').should('existe')

   });

   it('deve exibir uma mensagem de erro ao inserir senha inválida', () => {
    cy.get('#username').type('fernanda.teste1@ebac.com.br')
    cy.get('#password').type('Julia20230121@#$')
    cy.get('woocommerce-form> .button').click()

    cy. get ('.woocommerce error').should('contain' , 'erro: a senha fornecida para o e-mail fernanda.teste1@ebac.com.br está incorreta. Perdeu a senha?')
    cy. get ('.woocommerce-error').should('existe')

   });

})