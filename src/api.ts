import { QueryKey } from "@tanstack/react-query"
import axios from "axios"

export const getMovie = async (queryKey: QueryKey) => {
  const slug = queryKey[1]
  const resp = await axios({
    method: "GET",
    url: `https://wookie.codesubmit.io/movies/${slug}`,
    headers: {
      Authorization: "Bearer Wookie2021"
    }
  })
  return resp.data
}

export const getMovies = async (queryKey: QueryKey) => {
  const search = queryKey[1]
  const resp = await axios({
    method: "GET",
    url: `https://wookie.codesubmit.io/movies${search ? `?q=${search}` : ""}`,
    headers: {
      Authorization: "Bearer Wookie2021"
    }
  })
  return resp.data.movies
}
