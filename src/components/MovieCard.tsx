import { useState } from "react"
import Skeleton from "react-loading-skeleton"
import { useNavigate } from "react-router-dom"

import "react-loading-skeleton/dist/skeleton.css"
import { Movie } from "../types"

export const SkeletonCard = () => (
  <Skeleton width="250px" height="140px" style={{ margin: "5px" }} />
)

interface MovieWithIndex extends Movie {
  index: number
}

export const MovieCard = ({
  id,
  slug,
  backdrop,
  title,
  index
}: MovieWithIndex) => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  return (
    <>
      {loading && <SkeletonCard />}
      <img
        onLoad={() => setLoading(false)}
        onClick={() => navigate(`/movies/${slug}`)}
        data-cy={`movie-card-${index}`}
        data-testid={id}
        src={backdrop}
        alt={title}
        style={{
          width: "250px",
          height: "140px",
          margin: "5px",
          borderRadius: "10px",
          boxShadow: "0 3px 3px 2px #ddd",
          cursor: "pointer"
        }}
      />
    </>
  )
}
