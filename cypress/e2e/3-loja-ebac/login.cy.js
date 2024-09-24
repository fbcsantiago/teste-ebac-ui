/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')
describe('funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()  
    });

   it('deve fazer login com sucesso', () => {
       cy. get('#username').type('fernanda.teste1@ebac.com.br')
       cy. get('#password').type('De102102@')
       cy. get('.woocommerce-form > .button').click()
       cy. get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, fernanda.teste1 (não é fernanda.teste1? Sair)')
 })

   it('deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
    cy.get('#username').type('fernanda.teste@ebac.com.br')
    cy.get('#password').type('De102102@')
    cy.get('.woocommerce-form > .button').click()
      cy.get('.woocommerce-error').should('exist')
   });
 
   it('deve exibir uma mensagem de erro ao inserir senha inválida', () => {
    cy.get('#username').type('fernanda.teste1@ebac.com.br')
    cy.get('#password').type('De102102@1')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail fernanda.teste1@ebac.com.br está incorreta. Perdeu a senha?')
    cy.get('.woocommerce-error').should('exist')
   });

   
   it('Deve fazer login com sucesso - Usando massa de dados', () => {
       cy. get('#username').type(perfil.usuario)
       cy. get('#password').type(perfil.senha)
       cy. get('.woocommerce-form > .button').click()
       cy. get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, fernanda.teste1 (não é fernanda.teste1? Sair)')
   });

   it('Deve fazer login com sucesso - Usando fixture', () => {
       cy.fixture('perfil').then( dados => {
       cy. get('#username').type(dados.usuario , {log: false})
       cy. get('#password').type(dados.senha , {log: false})
       cy. get('.woocommerce-form > .button').click()
       cy. get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, fernanda.teste1 (não é fernanda.teste1? Sair)')
        
    
    })

       });

       it.only('Deve fazer login com sucesso - usando comandos customizado', () => {
          cy.login('fernanda.teste1@ebac.com.br','De102102@')
          cy. get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, fernanda.teste1 (não é fernanda.teste1? Sair)')

       });
       
})