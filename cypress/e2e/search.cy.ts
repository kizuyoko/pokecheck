describe("Search Pokemon", () => {
  it("searches for Pikachu and shows result", () => {
    cy.visit("http://localhost:3000");

    cy.wait(2000);
    
    cy.get('[data-testid="search-input"]', { timeout: 10000 }).should("be.visible")
      .type("Pikachu{enter}");

    // Wait for the search results to load and display Pikachu
    cy.contains("Pikachu", { timeout: 10000 }).should("be.visible");

    // Ensure the canonical Pikachu card (link to /pokemon/pikachu) contains the expected ID
    cy.get('a[href="/pokemon/pikachu"]', { timeout: 10000 })
      .should('exist')
      .within(() => {
        // assert the ID text is present inside the card
        cy.contains('#0025', { timeout: 5000 }).should('be.visible');
      });

    // click the canonical Pikachu link
    cy.get('a[href="/pokemon/pikachu"]', { timeout: 10000 }).click();

    // Verify that the Pikachu detail page is displayed
    cy.contains("Pikachu", { timeout: 10000 }).should("be.visible");
  });

  it("shows no results for a non-existent Pokemon", () => {
    cy.visit("http://localhost:3000");

    cy.wait(2000);

    cy.get('[data-testid="search-input"]', { timeout: 10000 }).should("be.visible")
      .type("NonExistentPokemon{enter}");

    // Verify that no results message is displayed
    cy.contains("Not Found", { timeout: 10000 }).should("be.visible");
  });
});