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
    <Stack>
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
      <Title order={2}>{query.data?.title}</Title>
      <Rating value={query.data?.imdb_rating} fractions={2} readOnly />
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
    <Box>
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
    <Text>
      {query.isLoading ? <Skeleton height="200px" /> : query.data?.overview}
    </Text>
  )
}
