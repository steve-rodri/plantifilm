# Plantifilm - movie streaming dashboard (TypeScript and React)

*TODO:*
- Implement assignment using:
  - Language: **TypeScript**
  - Framework: **React**
- Build out the project generally to the designs inside the `/Designs` folder, but feel free to show your product flare if you have the any ideas you'd like to share.
- Connect your application to the **CodeSubmit Movie Database** at `https://wookie.codesubmit.io/movies`
- Implement search by connecting to `https://wookie.codesubmit.io/movies?q=<search_term>`
- For authentication pass the `"Authorization: Bearer Wookie2021"` header
- Parse the API response and display the results as outlined in the design. **Make sure to group movies by categories**.
- Implement a detail view for the movies in the list
- Make sure that linking to specific detail pages & search results works as expected

### [Click here to see the Live Demo](https://plantifilm.vercel.app)

## Screenshots
![Home](/Designs/final/Home.png "Home")
![Movie Detail](/Designs/final/Detail.png "Movie Detail")


## Libraries / Tools Used

- Create Vite App for project setup
- Mantine for components
- Tanstack Query
- Vitest and Cypress for tests

## Setup

To install the dependencies run:

`yarn`

And to run the app:

`yarn dev`


## Running the tests

You can run the unit tests using:

`yarn test`

You can run the end to end tests using:

`yarn cypress open`
