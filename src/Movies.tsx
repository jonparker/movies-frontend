import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MovieProps from './MovieProps';
import MovieCard from './MovieCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 1000,
    }
  }),
);

const Movies: React.FC = () => {
  const classes = useStyles();

  const movies: Array<MovieProps> = [
    {
        id: "cw0076759",
        title: "Star Wars: Episode IV - A New Hope",
        rated: "PG",
        poster: "http://ia.media-imdb.com/images/M/MV5BMjE2MzQwMTgxN15BMl5BanBnXkFtZTcwMDQzNjk2OQ@@._V1_SX300.jpg",
        plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the galaxy from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.",
        "year": "1980",
        "released": "20 Jun 1980",
        "runtime": "124 min",
        "genre": "Action, Adventure, Fantasy",
        "director": "Irvin Kershner",
        "writer": "Leigh Brackett (screenplay), Lawrence Kasdan (screenplay), George Lucas (story by)",
        "actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams",
        "language": "English",
        "country": "USA",
        "awards": "Won 1 Oscar. Another 19 wins & 18 nominations.",
        "metascore": 80,
        "rating": "8.8",
        "votes": "842,451",
        "type": "movie",
        "price": "13.5"
    },
    {
        "title": "Star Wars: Episode V - The Empire Strikes Back",
        "year": "1980",
        "rated": "PG",
        "released": "20 Jun 1980",
        "runtime": "124 min",
        "genre": "Action, Adventure, Fantasy",
        "director": "Irvin Kershner",
        "writer": "Leigh Brackett (screenplay), Lawrence Kasdan (screenplay), George Lucas (story by)",
        actors: "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams",
        "plot": "After the Rebel base on the icy planet Hoth is taken over by the Empire, Han, Leia, Chewbacca, and C-3PO flee across the galaxy from the Empire. Luke travels to the forgotten planet of Dagobah to receive training from the Jedi master Yoda, while Vader endlessly pursues him.",
        "language": "English",
        "country": "USA",
        "awards": "Won 1 Oscar. Another 19 wins & 18 nominations.",
        "poster": "http://ia.media-imdb.com/images/M/MV5BMjE2MzQwMTgxN15BMl5BanBnXkFtZTcwMDQzNjk2OQ@@._V1_SX300.jpg",
        "metascore": 80,
        "rating": "8.8",
        "votes": "842,451",
        "id": "cw0080684",
        "type": "movie",
        "price": "13.5"
    }
];

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
            {movies.map(movie => 
                <MovieCard
                    key={movie.id}
                    title={movie.title}
                    rated={movie.rated}
                    id={movie.id}
                    poster={movie.poster}
                    released={movie.released}
                    actors={movie.actors}
                    plot={movie.plot}
                 />
            )}
        </Grid>
      </Paper>
    </div>
  );
}

export default Movies;
  