import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import MovieProps from './MovieProps';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%'
    },
  }),
);

const Movie: React.FC<MovieProps> = (movie) => {
    const classes = useStyles();

    return (
      <Grid item>
        <input type="hidden" id={movie.id}/>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
          </ButtonBase>
        </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1">
            {movie.title}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {movie.plot}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      </Grid>
    );
  }
  
  export default Movie;
  