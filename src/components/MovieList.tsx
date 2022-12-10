import { Title, Box } from "@mantine/core"
import Skeleton from "react-loading-skeleton"
import { useNavigate } from "react-router-dom"
import "react-loading-skeleton/dist/skeleton.css"

import { Movie } from "../types"

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
        {isLoading
          ? skeletonCards()
          : movies?.map(movie => <MovieCard key={movie.id} {...movie} />)}
      </div>
    </Box>
  )
}

const skeletonCards = () => {
  return Array.from(Array(4).keys()).map(key => (
    <Skeleton
      key={key}
      width="250px"
      height="140px"
      style={{ margin: "5px" }}
    />
  ))
}

const MovieCard = ({ slug, backdrop, title }: Movie) => {
  const navigate = useNavigate()
  return (
    <img
      onClick={() => navigate(`/movies/${slug}`)}
      src={backdrop}
      alt={title}
      style={{
        width: "250px",
        height: "140px",
        margin: "5px",
        borderRadius: "10px",
        boxShadow: "0 3px 3px 2px #ddd"
      }}
    />
  )
}
