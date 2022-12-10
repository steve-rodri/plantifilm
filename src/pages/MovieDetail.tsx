import { Text, Loader, SimpleGrid, AspectRatio } from "@mantine/core"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useParams } from "react-router-dom"

import { Detail } from "../components"
import { Movie } from "../types"
import { getMovie } from "../utils"

export const MovieDetail = () => {
  const { slug } = useParams()
  const queryClient = useQueryClient()
  const query = useQuery<Movie, AxiosError>({
    queryKey: ["movies", slug],
    queryFn: async ({ queryKey }) => getMovie(queryKey),

    initialData: () => {
      const movies = queryClient.getQueryData<Movie[]>(["movies"])
      return movies?.find((movie: Movie) => movie.slug === slug)
    }
  })
  if (query.isLoading) return <Loader />
  if (query.isError)
    return <Text>{`Error loading movie: ${query.error.message}`}</Text>
  return (
    <SimpleGrid
      h="calc(100vh - 120px)"
      py={50}
      sx={{
        gridAutoFlow: "column",
        gridTemplateColumns: "1fr 1fr"
      }}
    >
      <AspectRatio ratio={1920 / 1080}>
        <img
          src={query.data.backdrop}
          style={{ objectFit: "cover", height: "full" }}
        />
      </AspectRatio>
      <Detail {...query.data} />
    </SimpleGrid>
  )
}
