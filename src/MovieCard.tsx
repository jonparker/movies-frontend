import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, purple } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import MovieProps from './MovieProps';
import Rating from '@material-ui/lab/Rating';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import ScheduleIcon from '@material-ui/icons/Schedule';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    rating: {
        paddingLeft: '5%'
    },
    purpleAvatar: {
        backgroundColor: purple[500],
    }
  }),
);

const MovieCard: React.SFC<MovieProps> = (movie) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const releasedYear = "Released " + movie.year;

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="rated" className={classes.avatar}>
            {movie.rated}
          </Avatar>
        }
        
        title={movie.title}
        subheader={releasedYear}
      />
      <Rating name="rating" size="small" className={classes.rating} readOnly value={movie.rating} />
      <CardContent>
        <Avatar aria-label="actors" variant="square" className={classes.purpleAvatar}>
            <RecentActorsIcon fontSize="small"/>
        </Avatar>
        <Typography variant="body2" color="textSecondary" component="p">
            {movie.actors}
        </Typography>
        <ScheduleIcon/><Typography variant="body2" color="textSecondary" component="span">{movie.runtime}</Typography>
      </CardContent>
      <CardMedia
        className={classes.media}
        image={movie.poster}
        title={movie.title}
      />
      <Divider/>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography paragraph>Plot:</Typography>
        <Typography paragraph>{movie.plot}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default MovieCard;