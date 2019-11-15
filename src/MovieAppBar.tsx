import React, { useEffect } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Movies from './Movies';
import CinemaWorldMovieService from './services/CinemaWorldMovieService';
import FilmWorldMovieService from './services/FilmWorldMovieService';
import CircularProgress from '@material-ui/core/CircularProgress';
import IMovieProps from './IMovieProps';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `movie-tab-${index}`,
    'aria-controls': `movie-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  }
}));

export default function SimpleTabs() {
  const cinemaWorldMovieService = new CinemaWorldMovieService();
  const filmWorldMoviesService = new FilmWorldMovieService();

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const [cinemaWorldMovies, setCinemaWorldMovies] = React.useState<IMovieProps[] | null>(null);
  const [filmWorldMovies, setFilmWorldMovies] = React.useState<IMovieProps[] | null>(null);

  useEffect(() => {
    setCinemaWorldMovies(cinemaWorldMovieService.GetMovies());
    setFilmWorldMovies(filmWorldMoviesService.GetMovies());
  }, []);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="cinema world and film world tabs">
          <Tab label="Cinema World" {...a11yProps(0)} />
          <Tab label="Film World" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {cinemaWorldMovies &&
          <Movies key={1} movies={cinemaWorldMovies}/>
        }
        {!cinemaWorldMovies &&
          <CircularProgress disableShrink/>
        }
      </TabPanel>
      <TabPanel value={value} index={1}>
        {filmWorldMovies &&
          <Movies key={2} movies={filmWorldMovies}/>
        }
        {!filmWorldMovies &&
          <CircularProgress disableShrink/>
        }
      </TabPanel>
    </div>
  );
}