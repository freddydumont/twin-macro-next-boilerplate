describe('Rendering and navigation', () => {
  it('should navigate between pages without crashing', () => {
    cy.visit('http://localhost:3000');
    cy.findAllByText(/go to page 2/i).click();
    cy.findAllByText(/this is page 2/i).should('exist');
  });
});
