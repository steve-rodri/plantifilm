describe("When the User lands on the Home page", () => {
  beforeEach(() => {
    cy.visit("localhost:5173")
    cy.intercept("https://wookie.codesubmit.io/movies", {
      fixture: "movies.json"
    })
  })

  it("Movies are displayed", () => {
    cy.get("[data-testid=movie-card-1]").should("be.visible")
  })

  it("should display movies based on search result", () => {
    cy.get("[data-testid=search-input]").type("batman{enter}")
    cy.intercept("https://wookie.codesubmit.io/movies?q=batman", {
      fixture: "batman-movies.json"
    })
  })

  // it("should show movies related to search param", () => {
  //   cy.visit("localhost:5173/?q=batman")
  //   cy.intercept("https://wookie.codesubmit.io/movies", {
  //     fixture: "batman-movies.json"
  //   })
  // })

  // it("should categorize them by genre", () => {})

  // describe("When a movie card is clicked", () => {
  //   it("should navigate to Movie Detail", () => {})
  // })
})
