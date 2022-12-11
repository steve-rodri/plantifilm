import { Title, Box } from "@mantine/core"
import Skeleton from "react-loading-skeleton"

import { Movie } from "../types"
import { MovieCard, SkeletonCard } from "./MovieCard"

interface Props {
  genre: string | undefined
  movies: Movie[] | undefined
  isLoading: boolean
}

export const MovieList = ({ genre, movies, isLoading }: Props) => {
  return (
    <Box>
      <Title order={3}>
        {isLoading ? <Skeleton style={{ maxWidth: "15%" }} /> : genre}
      </Title>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          padding: "10px 0",
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        }}
      >
        {isLoading ? skeletonCards() : movieCards(movies)}
      </div>
    </Box>
  )
}

const movieCards = (movies: Movie[] | undefined) =>
  movies?.map((movie, i) => <MovieCard index={i} key={movie.id} {...movie} />)

const skeletonCards = () => {
  return Array.from(Array(4).keys()).map(key => <SkeletonCard key={key} />)
}
