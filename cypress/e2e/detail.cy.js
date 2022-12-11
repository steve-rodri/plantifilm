describe("When the User lands on a Movie Detail page", () => {
  beforeEach(() => {
    cy.visit("localhost:5173/movies/the-dark-knight-2008")
    cy.intercept("https://wookie.codesubmit.io/movies/the-dark-knight-2008", {
      fixture: "movie.json"
    })
  })

  it("they should see everything", () => {
    cy.get("[data-cy=movie-detail-title]").should("be.visible")
    cy.get("[data-cy=movie-detail-rating]").should("be.visible")
    cy.get("[data-cy=movie-detail-subheader]").should("be.visible")
    cy.get("[data-cy=movie-detail-description]").should("be.visible")
  })
})
