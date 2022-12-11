import { Text, Stack } from "@mantine/core"
import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useMemo } from "react"
import { useSearchParams } from "react-router-dom"

import { getMovies } from "../api"
import { MovieList } from "../components"
import { Movie, MoviesByGenre } from "../types"
import { filterMoviesByGenre } from "../utils"

const oneDay = 1000 * 60 * 60 * 24 // 24 hours

export const Home = () => {
  const [searchParams] = useSearchParams()
  const search = searchParams.get("q")
  const query = useQuery<Movie[], AxiosError>({
    queryKey: ["movies", search],
    queryFn: async ({ queryKey }) => getMovies(queryKey),
    networkMode: "offlineFirst",
    staleTime: oneDay
  })
  const movies = useMemo(() => filterMoviesByGenre(query.data), [query.data])
  if (query.isError)
    return <Text>{`Error loading movies: ${query.error.message}`}</Text>
  return (
    <Stack spacing={30} my={20}>
      {query.isLoading ? skeletonLists() : moviesByGenre(movies)}
    </Stack>
  )
}

const skeletonLists = () => {
  return Array.from(Array(10).keys()).map(key => (
    <MovieList key={key} genre="" movies={[]} isLoading />
  ))
}

const moviesByGenre = (movies: MoviesByGenre) => {
  return Object.entries(movies).map(([genre, movies]) => (
    <MovieList key={genre} genre={genre} movies={movies} isLoading={false} />
  ))
}
