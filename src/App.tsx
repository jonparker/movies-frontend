import React from 'react';
import './App.css';
import Movies from './Movies';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Typography/>
      <Movies/>
    </div>
  );
}

export default App;
