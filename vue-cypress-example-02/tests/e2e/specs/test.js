// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'Welcome to Your Vue.js App');
  });
});

describe('Test main page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  it('Check links', () => {
    cy.get('[data-cy=links]')
      .children()
      .should('have.length', 3);
  });
});
