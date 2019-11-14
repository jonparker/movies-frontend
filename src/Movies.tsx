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
        "rating": 4,
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
        "actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams",
        "plot": "After the Rebel base on the icy planet Hoth is taken over by the Empire, Han, Leia, Chewbacca, and C-3PO flee across the galaxy from the Empire. Luke travels to the forgotten planet of Dagobah to receive training from the Jedi master Yoda, while Vader endlessly pursues him.",
        "language": "English",
        "country": "USA",
        "awards": "Won 1 Oscar. Another 19 wins & 18 nominations.",
        "poster": "http://ia.media-imdb.com/images/M/MV5BMjE2MzQwMTgxN15BMl5BanBnXkFtZTcwMDQzNjk2OQ@@._V1_SX300.jpg",
        "metascore": 80,
        "rating": 3,
        "votes": "842,451",
        "id": "cw0080684",
        "type": "movie",
        "price": "13.5"
    },
    {
        "title": "Star Wars: Episode III - Revenge of the Sith",
        "year": "2005",
        "rated": "PG-13",
        "released": "19 May 2005",
        "runtime": "140 min",
        "genre": "Action, Adventure, Fantasy",
        "director": "George Lucas",
        "writer": "George Lucas",
        "actors": "Ewan McGregor, Natalie Portman, Hayden Christensen, Ian McDiarmid",
        "plot": "During the near end of the clone wars, Darth Sidious has revealed himself and is ready to execute the last part of his plan to rule the Galaxy. Sidious is ready for his new apprentice, Lord...",
        "language": "English",
        "country": "USA",
        "poster": "http://ia.media-imdb.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTfwOTg0NjI4NA@@._V1_SX300.jpg",
        "metascore": 68,
        "rating": 3.3,
        "votes": "522,705",
        "id": "fw0121766",
        "type": "movie",
        "price": "129.9"
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
                    rating={movie.rating}
                    runtime={movie.runtime}
                    id={movie.id}
                    poster={movie.poster}
                    released={movie.released}
                    actors={movie.actors}
                    plot={movie.plot}
                    year={movie.year}
                    country={movie.country}
                    language={movie.language}
                    price={movie.price}
                    genre={movie.genre}
                    director={movie.director}
                    writer={movie.writer}
                 />
            )}
        </Grid>
      </Paper>
    </div>
  );
}

export default Movies;
  