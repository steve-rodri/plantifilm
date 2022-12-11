import { Movie, MoviesByGenre } from "../types"
import { extractAndSortUniqueGenres } from "./extractAndSortUniqueGenres"

export const filterMoviesByGenre = (movies: Movie[] | undefined) => {
  if (!movies) return {}
  const genres = extractAndSortUniqueGenres(movies)
  return genres.reduce((obj: MoviesByGenre, genre) => {
    obj[genre] = movies.filter(movie => movie.genres.includes(genre))
    return obj
  }, {})
}
