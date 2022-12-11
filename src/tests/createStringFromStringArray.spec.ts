import { createStringFromStringArray } from "../utils"

describe("Create String from String Array", () => {
  describe("Given an array with 1 item", () => {
    it("should return the item as a string", () => {
      const array = ["Action"]

      const result = createStringFromStringArray(array)
      expect(result).toEqual("Action")
    })
  })
  describe("Given an array with 2 items", () => {
    it("should return a comma seperated string", () => {
      const array = ["Action", "Adventure"]

      const result = createStringFromStringArray(array)
      expect(result).toEqual("Action, Adventure")
    })
  })
  describe("Given an array with 3 items", () => {
    it("shoud return a comma seperated string", () => {
      const array = ["Action", "Adventure", "Sci-Fi"]
      const result = createStringFromStringArray(array)
      expect(result).toEqual("Action, Adventure, Sci-Fi")
    })
  })
})
