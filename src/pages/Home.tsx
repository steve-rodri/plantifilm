import { Text, Stack } from "@mantine/core"
import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useSearchParams } from "react-router-dom"

import { MovieList } from "../components"
import { Movie } from "../types"
import { getMovies, filterMoviesByGenre } from "../utils"

export const Home = () => {
  const [searchParams] = useSearchParams()
  const search = searchParams.get("q")
  const query = useQuery<Movie[], AxiosError>({
    queryKey: ["movies", search],
    queryFn: async ({ queryKey }) => getMovies(queryKey)
  })
  if (query.isError)
    return <Text>{`Error loading movies: ${query.error.message}`}</Text>
  return (
    <Stack spacing={30}>
      {query.isLoading ? skeletonLists() : moviesByGenre(query)}
    </Stack>
  )
}

const skeletonLists = () => {
  return Array.from(Array(10).keys()).map(key => (
    <MovieList key={key} genre="" movies={[]} isLoading />
  ))
}

const moviesByGenre = (query: UseQueryResult<Movie[], AxiosError>) => {
  if (!query.data) return null
  const movies = filterMoviesByGenre(query.data)
  return Object.entries(movies).map(([genre, movies]) => (
    <MovieList
      key={genre}
      genre={genre}
      movies={movies}
      isLoading={query.isLoading}
    />
  ))
}
