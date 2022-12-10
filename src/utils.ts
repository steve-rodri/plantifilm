import { QueryKey } from "@tanstack/react-query"
import axios from "axios"

import { Movie, MoviesByGenre } from "./types"

export const getMovie = async (queryKey: QueryKey) => {
  const slug = queryKey[1]
  const resp = await axios({
    method: "GET",
    url: `https://wookie.codesubmit.io/movies/${slug}`,
    headers: {
      Authorization: "Bearer Wookie2021"
    }
  })
  return resp.data
}

export const getMovies = async () => {
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

export const filterMoviesByGenre = (movies: Movie[]) => {
  const genres = extractAndSortUniqueGenres(movies)
  return genres.reduce((obj: MoviesByGenre, genre) => {
    obj[genre] = movies.filter(movie => movie.genres.includes(genre))
    return obj
  }, {})
}

export const createStringFromStringArray = (array: string[]): string => {
  return array.reduce((str, member, i) => {
    if (i === array.length - 1) return (str += ` ${member}`)
    return (str += `${member}, `)
  }, "")
}
