/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */

import React from "react"
import { css } from "@emotion/react"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import IMovieProps from "./IMovieProps"
import MovieCard from "./MovieCard"

const Movies = ({ movies }: { movies: Array<IMovieProps> }) => {
  return (
    <div
      css={css`
        flexgrow: 1;
      `}
    >
      <Paper
        square
        css={css`
          padding: 2rem;
        `}
      >
        <Grid
          container
          spacing={3}
          css={css`
            gap: 1rem;
          `}
        >
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </Grid>
      </Paper>
    </div>
  )
}

export default Movies
