/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import React from "react"
import { css } from "@emotion/react"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Collapse from "@mui/material/Collapse"
import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Divider from "@mui/material/Divider"
import IMovieProps from "./MovieProps"
import Rating from "@mui/material/Rating"
import RecentActorsIcon from "@mui/icons-material/RecentActors"
import ScheduleIcon from "@mui/icons-material/Schedule"
import LanguageIcon from "@mui/icons-material/Language"
import RoomIcon from "@mui/icons-material/Room"
import LocalAtmIcon from "@mui/icons-material/LocalAtm"
import TheatersIcon from "@mui/icons-material/Theaters"
import CreateIcon from "@mui/icons-material/Create"

const MovieCard = ({ movie }: { movie: IMovieProps }) => {
  const [expanded, setExpanded] = React.useState(false)

  const subheader = `${movie.director}, ${movie.year}`

  return (
    <Card
      css={css`
        max-width: 345;
      `}
    >
      <CardHeader
        avatar={
          <Avatar
            aria-label="rated"
            css={css`
              background-color: red[500];
              width: "60px";
              height: "60px";
            `}
          >
            {movie.rated}
          </Avatar>
        }
        title={movie.title}
        subheader={subheader}
      />
      <Rating
        name="rating"
        size="small"
        css={css`
          padding-left: "5%";
        `}
        readOnly
        value={movie.rating}
      />
      <CardContent>
        <RecentActorsIcon />
        <Typography variant="body2" color="textSecondary" component="p">
          {movie.actors}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          <ScheduleIcon />
          {movie.runtime}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <LanguageIcon />
          {movie.language}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <RoomIcon />
          {movie.country}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          <LocalAtmIcon />
          {movie.price}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          <TheatersIcon />
          {movie.genre}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          <CreateIcon />
          {movie.writer}
        </Typography>
      </CardContent>
      <CardMedia
        css={css`
          height: 0;
          paddingtop: "56.25%";
        `}
        image={movie.poster}
        title={movie.title}
      />
      <Divider />
      <CardActions disableSpacing>
        <IconButton
          css={css`
            transform: "rotate(0deg)";
            margin-left: "auto";
            transition: theme.transitions.create(
              "transform",
              {duration: theme.transitions.duration.shortest,
              }
            );
          `}
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h5">Plot</Typography>
          <Divider />
          <Typography paragraph>{movie.plot}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default MovieCard
