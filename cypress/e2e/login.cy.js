/// <reference types="cypress"/>

describe('funcionalidade: Login', () => {

   it('deve fazer login com sucesso', () => {
       Cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
       cy.get('#username').type('fernanda.teste1@ebac.com.br')
       cy.get('#password').type('Julia20230121@#$5')
       cy.get('woocommerce-form> .button').click()

       cy.get('.woocommerce-MvAccount-content > :nth-child(2)').should('contain' , 'olá, fernanda.teste1(não é fernanda.teste1? sair)')
   })

})