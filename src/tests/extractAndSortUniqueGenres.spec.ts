import { extractAndSortUniqueGenres } from "../utils"
import { movieMock } from "./mocks"

describe("extractAndSortUniqueGenres", () => {
  describe("Given an array with 1 movie", () => {
    it("should return an array of unique genres of that movie sorted", () => {
      const array = [movieMock]

      const result = extractAndSortUniqueGenres(array)

      expect(result).toEqual(["Action", "Crime", "Drama"])
    })
  })
  describe("Given an array with more than 1 movie", () => {
    it("should return an array of unique genres of those movies sorted", () => {
      const array = [movieMock, movieMock, movieMock]

      const result = extractAndSortUniqueGenres(array)
      expect(result).toEqual(["Action", "Crime", "Drama"])
    })
  })
})
