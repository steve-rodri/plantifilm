import { Title, Box, Loader } from "@mantine/core"
import { useNavigate } from "react-router-dom"

import { Movie } from "../types"

interface Props {
  genre: string | undefined
  movies: Movie[] | undefined
  isLoading: boolean
}

export const MovieList = ({ genre, movies, isLoading }: Props) => {
  if (isLoading) return <Loader />
  return (
    <Box>
      <Title order={3}>{genre}</Title>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          padding: "10px 0",
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        }}
      >
        {movies?.map(movie => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </Box>
  )
}

const MovieCard = ({ id, backdrop, title }: Movie) => {
  const navigate = useNavigate()
  return (
    <img
      onClick={() => navigate(`/movies/${id}`)}
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
