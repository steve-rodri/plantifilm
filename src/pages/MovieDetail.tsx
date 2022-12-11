import { Text, SimpleGrid, AspectRatio, MediaQuery } from "@mantine/core"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useEffect, useMemo } from "react"
import Skeleton from "react-loading-skeleton"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"

import { getMovie } from "../api"
import { Detail } from "../components"
import { Movie } from "../types"

const oneDay = 1000 * 60 * 60 * 24 // 24 hours

export const MovieDetail = () => {
  const { slug } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const query = useQuery<Movie, AxiosError>({
    queryKey: ["movies", slug],
    queryFn: async ({ queryKey }) => getMovie(queryKey),
    staleTime: oneDay,
    networkMode: "offlineFirst",
    initialData: () => {
      const movies = queryClient.getQueryData<Movie[]>(["movies"])
      return movies?.find((movie: Movie) => movie.slug === slug)
    }
  })
  const search = useMemo(() => searchParams.get("q"), [searchParams])

  useEffect(() => {
    if (search) navigate(`/?q=${search}`)
  }, [search])

  if (query.isError)
    return <Text>{`Error loading movie: ${query.error.message}`}</Text>
  return (
    <MediaQuery
      largerThan="md"
      styles={{ gridAutoFlow: "column", gridTemplateColumns: "1fr 1fr" }}
    >
      <SimpleGrid h="calc(100vh - 120px)" py={50} data-cy="movie-detail">
        {query.isLoading ? (
          <Skeleton style={{ height: "100%", width: "100%" }} />
        ) : (
          <AspectRatio ratio={1920 / 1080}>
            <img
              src={query.data.backdrop}
              data-cy="movie-detail-img"
              style={{
                objectFit: "cover",
                height: "full",
                borderRadius: "12px"
              }}
            />
          </AspectRatio>
        )}
        <Detail query={query} />
      </SimpleGrid>
    </MediaQuery>
  )
}
