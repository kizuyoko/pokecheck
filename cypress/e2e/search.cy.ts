describe("Search Pokemon", () => {
  it("searches for Pikachu and shows result", () => {
    cy.visit("http://localhost:3000");
    
    cy.get('[data-testid="search-input"]').type("Pikachu{enter}");


    // Wait for the search results to load and display Pikachu
    cy.contains("Pikachu", { timeout: 20000 }).should("be.visible");

    // Click on the Pikachu link to navigate to its detail page
    cy.contains("#0025").click();

    // Verify that the Pikachu detail page is displayed
    cy.contains("Pikachu", { timeout: 10000 }).should("be.visible");
  });
});