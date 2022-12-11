import { Movie } from "../types"

export const extractAndSortUniqueGenres = (movies: Movie[]): string[] => {
  const allGenres: string[][] = movies.reduce((arr: string[][], movie) => {
    arr.push(movie.genres)
    return arr
  }, [])
  const uniqueGenres: string[] = [...new Set(allGenres.flat())]
  return uniqueGenres.sort()
}
