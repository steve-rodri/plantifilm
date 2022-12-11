describe("When the User lands on the Home page", () => {
  beforeEach(() => {
    cy.visit("localhost:5173")
    cy.intercept("https://wookie.codesubmit.io/movies", {
      fixture: "movies.json"
    })
  })

  it("Movies are displayed", () => {
    cy.get("[data-cy=movie-card-1]").should("be.visible")
  })

  describe("When a movie card is clicked", () => {
    it("should navigate to Movie Detail", () => {
      cy.wait(2000)
      cy.get("[data-cy=movie-card-1]").first().click()
      cy.get("[data-cy=movie-detail]").should("be.visible")
      cy.wait(2000)
      cy.go("back")
    })
  })

  describe("Search Feature", () => {
    const uuid = "d6822b7b-48bb-4b78-ad5e-9ba04c517ec8"
    it("should display movies based on search result", () => {
      cy.wait(2000)
      cy.get("[data-cy=search-input]").type("batman{enter}")
      cy.intercept("https://wookie.codesubmit.io/movies?q=batman", {
        fixture: "batman-movies.json"
      })
      cy.get(`[data-testid=${uuid}]`).first().should("be.visible")
      cy.wait(2000)
      cy.go("back")
    })

    it("should show movies related to search param", () => {
      cy.wait(2000)
      cy.visit("localhost:5173/?q=batman")
      cy.intercept("https://wookie.codesubmit.io/movies", {
        fixture: "batman-movies.json"
      })
      cy.get(`[data-testid=${uuid}]`).first().should("be.visible")
      cy.wait(2000)
      cy.visit("localhost:5173")
    })
  })
})
