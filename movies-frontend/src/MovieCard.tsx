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
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import IMovieProps from './MovieProps';
import Rating from '@material-ui/lab/Rating';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import ScheduleIcon from '@material-ui/icons/Schedule';
import LanguageIcon from '@material-ui/icons/Language';
import RoomIcon from '@material-ui/icons/Room';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import TheatersIcon from '@material-ui/icons/Theaters';
import CreateIcon from '@material-ui/icons/Create';

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
      width: "60px",
      height: "60px"
    },
    rating: {
        paddingLeft: '5%'
    }
  }),
);

const MovieCard: React.FC<{movie: IMovieProps}> = ({children, movie}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const subheader = `${movie.director}, ${movie.year}`;

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="rated" className={classes.avatar}>
            {movie.rated}
          </Avatar>
        }
        
        title={movie.title}
        subheader={subheader}
      />
      <Rating name="rating" size="small" className={classes.rating} readOnly value={movie.rating} />
      <CardContent>
      <RecentActorsIcon/>
        <Typography variant="body2" color="textSecondary" component="p">
            {movie.actors}
        </Typography>
        
        <Typography variant="body2" color="textSecondary" component="p">
            <ScheduleIcon/>{movie.runtime}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            <LanguageIcon/>{movie.language}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            <RoomIcon/>{movie.country}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
            <LocalAtmIcon/>{movie.price}
        </Typography>
        
        <Typography variant="body2" color="textSecondary" component="p">
            <TheatersIcon/>{movie.genre}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
            <CreateIcon/>{movie.writer}
        </Typography>
        
        
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
        <Typography variant="h5">Plot</Typography>
        <Divider/>
        <Typography paragraph>{movie.plot}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default MovieCard;