import { Text, Loader, Stack } from "@mantine/core"
import { useQuery } from "@tanstack/react-query"
import { AxiosError } from "axios"

import { MovieList } from "../components"
import { Movie } from "../types"
import { getMovies, filterMoviesByGenre } from "../utils"

export const Home = () => {
  const query = useQuery<Movie[], AxiosError>({
    queryKey: ["movies"],
    queryFn: getMovies
  })
  if (query.isLoading) return <Loader />
  if (query.isError)
    return <Text>{`Error loading movies: ${query.error.message}`}</Text>
  const moviesByGenre = filterMoviesByGenre(query.data)
  return (
    <Stack>
      {Object.entries(moviesByGenre).map(([genre, movies]) => (
        <MovieList
          key={genre}
          genre={genre}
          movies={movies}
          isLoading={query.isLoading}
        />
      ))}
    </Stack>
  )
}
