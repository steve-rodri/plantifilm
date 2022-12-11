import { filterMoviesByGenre } from "../utils"
import { movieMock, movieMock2 } from "./mocks"

vi.mock("../utils/extractAndSortUniqueGenres", () => {
  return {
    extractAndSortUniqueGenres: vi.fn(() => ["Action", "Crime", "Drama"])
  }
})

describe("filterMoviesByGenre", () => {
  describe("Given an undefined parameter", () => {
    it("should return an object", () => {
      const result = filterMoviesByGenre(undefined)
      expect(result).toEqual({})
    })
  })
  describe("Given an array with 1 movie", () => {
    describe("it should return an object", () => {
      it("whose keys are comprised of unique names of genres", () => {
        const array = [movieMock]
        const result = filterMoviesByGenre(array)
        expect(result).toHaveProperty("Action")
        expect(result).toHaveProperty("Crime")
        expect(result).toHaveProperty("Drama")
      })
      it("whose values comprise of movies that share the genre", () => {
        const array = [movieMock]
        const result = filterMoviesByGenre(array)
        expect(result).toHaveProperty("Action", array)
        expect(result).toHaveProperty("Crime", array)
        expect(result).toHaveProperty("Drama", array)
      })
    })
  })
  describe("Given an array with more than one movie", () => {
    describe("it should return an object", () => {
      it("whose keys are comprised of unique names of genres", () => {
        const array = [movieMock, movieMock2]
        const result = filterMoviesByGenre(array)
        expect(result).toHaveProperty("Action")
        expect(result).toHaveProperty("Crime")
        expect(result).toHaveProperty("Drama")
      })
      it("whose values comprise of movies that share the genre", () => {
        const array = [movieMock, movieMock2]
        const result = filterMoviesByGenre(array)
        expect(result).toHaveProperty("Action", [movieMock])
        expect(result).toHaveProperty("Crime", [movieMock, movieMock2])
        expect(result).toHaveProperty("Drama", [movieMock, movieMock2])
      })
    })
  })
})
