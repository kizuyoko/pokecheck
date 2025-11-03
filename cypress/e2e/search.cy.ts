describe("Search Pokemon", () => {
  it("searches for Pikachu and shows result", () => {
    cy.visit("http://localhost:3000");

    cy.wait(2000);
    
    cy.get('[data-testid="search-input"]', { timeout: 10000 }).should("be.visible")
      .type("Pikachu{enter}");

    cy.wait(2000);

    // Click on the Pikachu link to navigate to its detail page
    cy.contains("0025", { timeout: 10000 }).should("be.visible");

    // Click on the href="/pokemon/pikachu" link
    cy.get('a[href="/pokemon/pikachu"]', { timeout: 10000 }).should("be.visible").click();

    // Verify that the Pikachu detail page is displayed
    cy.contains("Pikachu", { timeout: 10000 }).should("be.visible");
  });

  it("shows no results for a non-existent Pokemon", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-testid="search-input"]', { timeout: 10000 }).should("be.visible")
      .type("NonExistentPokemon{enter}");

    // Verify that no results message is displayed
    cy.contains("Not Found", { timeout: 10000 }).should("be.visible");
  });
});