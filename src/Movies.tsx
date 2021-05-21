import React from "react";
import PropTypes from "prop-types";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import IMovieProps from "./IMovieProps";
import MovieCard from "./MovieCard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
    },
    grid: {
      gap: "1rem",
    },
  })
);

const Movies: React.FC<{ movies: Array<IMovieProps> }> = ({ movies }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper square className={classes.paper}>
        <Grid container spacing={3} className={classes.grid}>
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </Grid>
      </Paper>
    </div>
  );
};

Movies.propTypes = {
  movies: PropTypes.arrayof(PropTypes.instanceOf(IMovieProps)),
};
export default Movies;
