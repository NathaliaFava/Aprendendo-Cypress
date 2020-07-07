/// < reference types="cypress" />

import elements from '../../support/login'


describe('Form Authentication utilizando o The Internet"', () => {

    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login')
    })   

    it('Deve visualizar mensagem de sucesso ao informar os dados corretos', () => {
         cy.get(elements.login.username).type('tomsmith')
         cy.get(elements.login.password).type('SuperSecretPassword!')
         cy.get(elements.login.btn_Login).click()
         cy.get(elements.login.message).contains('You logged into a secure area!')
    })

    it('Deve visualizar mensagem de erro ao informar nome incorreto', () => {
        cy.get(elements.login.username).type('TomSmith')
        cy.get(elements.login.password).type('SuperSecretPassword!')
        cy.get(elements.login.btn_Login).click()
        cy.get(elements.login.message).contains('Your username is invalid!')
   })

   it('Deve visualizar mensagem de erro ao informar senha incorreta', () => {
        cy.get(elements.login.username).type('tomsmith')
        cy.get(elements.login.password).type('#SuperSecretPassword#')
        cy.get(elements.login.btn_Login).click()
        cy.get(elements.login.message).contains('Your password is invalid!')
})
})