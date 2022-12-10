import axios from "axios"

import { Movie, MoviesByGenre } from "./types"

const getMovies = async () => {
  const resp = await axios({
    method: "GET",
    url: "https://wookie.codesubmit.io/movies",
    headers: {
      Authorization: "Bearer Wookie2021"
    }
  })
  return resp.data.movies
}

const extractAndSortUniqueGenres = (movies: Movie[]): string[] => {
  const allGenres: string[][] = movies.reduce((arr: string[][], movie) => {
    arr.push(movie.genres)
    return arr
  }, [])
  const uniqueGenres: string[] = [...new Set(allGenres.flat())]
  return uniqueGenres.sort()
}

export const getMoviesByGenre = async () => {
  const movies: Movie[] = await getMovies()
  const genres = extractAndSortUniqueGenres(movies)
  return genres.reduce((obj: MoviesByGenre, genre) => {
    obj[genre] = movies.filter(movie => movie.genres.includes(genre))
    return obj
  }, {})
}
