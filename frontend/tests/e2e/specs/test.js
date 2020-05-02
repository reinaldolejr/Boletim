// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains('.v-toolbar__title', "Boletim");
    cy.get('#input-12').type("teste")
    cy.screenshot()
  });
});
