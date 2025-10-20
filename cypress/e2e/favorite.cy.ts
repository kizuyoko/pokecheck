describe("Favorite Pokemon", () => {
    it("adds and removes a Pokemon from favorites", () => {
        cy.visit("http://localhost:3000/pokemon/pikachu");
        cy.contains("Pikachu", { timeout: 10000 }).should("be.visible");

        cy.get('[data-testid="favorite-button-pikachu"]', { timeout: 10000 }).click();
        cy.get('[data-testid="favorite-button-pikachu"] img')
            .should('have.attr', 'src')
            .and('include', 'heart_full.svg');
        cy.get('[data-testid="favorite-button-pikachu"]', { timeout: 10000 }).click();
        cy.get('[data-testid="favorite-button-pikachu"] img')
            .should('have.attr', 'src')
            .and('include', 'heart_empty.svg');

    });
});        