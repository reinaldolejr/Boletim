// https://docs.cypress.io/api/introduction/api.html

describe("Test complete", () => {


  it("visit site, create and find a report card", () => {
    cy.visit("/");
    cy.contains('.v-toolbar__title', "Boletim");
    cy.get(':nth-child(1) > .v-btn').click()
    cy.get('#input-25').type("501")
    cy.get('#input-28').type("Portugues")
    cy.get('#input-34').type("Andre")
    cy.get('#input-37').clear().type("8")
    cy.get('#btn-add').click()
    cy.get('#input-44').type("Daniel")
    cy.get('#input-47').clear().type("5")
    cy.get('#btn-add').click()
    cy.get('#input-53').type("João")
    cy.get('#input-56').clear().type("10")
    cy.screenshot('img-cadastro')
    cy.get('#btn-save').click()

    cy.get('#code').then(code => {
      cy.get('.v-card__actions > .v-btn').click()
      cy.get(':nth-child(2) > .v-btn').click()

      cy.get('#input-81').type(code.text())
    })

    cy.get('.v-card__actions > :nth-child(3)').click()
    cy.screenshot('img-busca')
  });
});
