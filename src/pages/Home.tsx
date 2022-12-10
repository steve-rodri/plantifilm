import { Text, Loader, Stack } from "@mantine/core"
import { useQuery } from "@tanstack/react-query"
import { AxiosError } from "axios"

import { MovieList } from "../components"
import { MoviesByGenre } from "../types"
import { getMoviesByGenre } from "../utils"

export const Home = () => {
  const query = useQuery<MoviesByGenre, AxiosError>({
    queryKey: ["movies"],
    queryFn: async () => getMoviesByGenre()
  })
  if (query.isLoading) return <Loader />
  if (query.isError)
    return <Text>{`Error loading movies: ${query.error.message}`}</Text>
  return (
    <Stack>
      {Object.entries(query.data).map(([genre, movies]) => (
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
