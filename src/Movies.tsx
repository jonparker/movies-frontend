import React from "react"
import Stack from "@mui/material/Stack"
import Paper from "@mui/material/Paper"
import IMovieProps from "./IMovieProps"
import MovieCard from "./MovieCard"

const Movies = ({ movies }: { movies: Array<IMovieProps> }) => {
  return (
    <Paper>
      <Stack spacing={1}>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </Stack>
    </Paper>
  )
}

export default Movies
