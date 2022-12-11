import { Flex, Text, Box, Rating, Title, Stack } from "@mantine/core"
import { UseQueryResult } from "@tanstack/react-query"
import { AxiosError } from "axios"
import dayjs from "dayjs"
import Skeleton from "react-loading-skeleton"

import { Movie } from "../types"
import { createStringFromStringArray } from "../utils"

interface Props {
  query: UseQueryResult<Movie, AxiosError>
}

export const Detail = (props: Props) => {
  return (
    <Stack px={10}>
      <DetailHeader {...props} />
      <DetailSubHeader {...props} />
      <Description {...props} />
    </Stack>
  )
}

const DetailHeader = ({ query }: Props) => {
  return query.isLoading ? (
    <Skeleton height="30px" />
  ) : (
    <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
      <Title order={2} data-cy="movie-detail-title">
        {query.data?.title}
      </Title>
      <Rating
        value={query.data?.imdb_rating ? query.data.imdb_rating / 2 : 0}
        fractions={2}
        readOnly
        data-cy="movie-detail-rating"
      />
    </Flex>
  )
}

const DetailSubHeader = ({ query }: Props) => {
  const getDirector = (director: string | string[] | undefined) => {
    if (!director) return ""
    if (Array.isArray(director)) return createStringFromStringArray(director)
    return director
  }
  return (
    <Box data-cy="movie-detail-subheader">
      <Text>
        {query.isLoading ? (
          <Skeleton />
        ) : (
          `${dayjs(query.data?.released_on).format("YYYY")} | ${
            query.data?.length
          } | ${getDirector(query.data?.director)}`
        )}
      </Text>
      <Text>
        {query.isLoading ? (
          <Skeleton />
        ) : (
          `cast: ${query.data && createStringFromStringArray(query.data.cast)}`
        )}
      </Text>
    </Box>
  )
}

const Description = ({ query }: Props) => {
  return (
    <Text data-cy="movie-detail-description">
      {query.isLoading ? <Skeleton height="200px" /> : query.data?.overview}
    </Text>
  )
}
