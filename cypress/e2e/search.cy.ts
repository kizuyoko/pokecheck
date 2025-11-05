describe("Search Pokemon", () => {
  it("searches for Pecharunt and shows result", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-testid="search-input"]', { timeout: 10000 }).should('be.visible');

    cy.get('[data-testid="search-input"]').type("Pecharunt{enter}");

    // Wait for the search results to load and display Pecharunt
    cy.contains(/Pecharunt/i, { timeout: 10000 }).should("be.visible");


    // Click on the Pecharunt link to navigate to its detail page
    cy.contains(/Pecharunt/i).click();

    // Verify that the Pecharunt detail page is displayed
    cy.contains("Pecharunt", { timeout: 10000 }).should("be.visible");
  });

  it("shows no results for a non-existent Pokemon", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-testid="search-input"]', { timeout: 10000 }).should('be.visible');
    cy.get('[data-testid="search-input"]').type("NonExistentPokemon{enter}");

    // Verify that no results message is displayed
    cy.contains("Not Found", { timeout: 5000 }).should("be.visible");
  });
});