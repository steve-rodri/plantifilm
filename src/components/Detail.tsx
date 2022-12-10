import { Flex, Text, Box, Rating, Title, Stack } from "@mantine/core"
import dayjs from "dayjs"

import { Movie } from "../types"
import { createStringFromStringArray } from "../utils"

export const Detail = (props: Movie) => {
  return (
    <Stack>
      <DetailHeader {...props} />
      <DetailSubHeader {...props} />
      <Description {...props} />
    </Stack>
  )
}

const DetailHeader = (props: Movie) => {
  return (
    <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
      <Title order={2}>{props.title}</Title>
      <Rating value={props.imdb_rating} fractions={2} readOnly />
    </Flex>
  )
}

const DetailSubHeader = (props: Movie) => {
  const cast = createStringFromStringArray(props.cast)
  const director = (() => {
    if (Array.isArray(props.director))
      return createStringFromStringArray(props.director)
    return props.director
  })()
  return (
    <Box>
      <Text>
        {dayjs(props.released_on).format("YYYY")} | {props.length} | {director}
      </Text>
      <Text>cast: {cast}</Text>
    </Box>
  )
}

const Description = (props: Movie) => {
  return <Text>{props.overview}</Text>
}
