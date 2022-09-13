import React from "react"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
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
import Stack from "@mui/material/Stack"
import ScheduleIcon from "@mui/icons-material/Schedule"
import LanguageIcon from "@mui/icons-material/Language"
import RoomIcon from "@mui/icons-material/Room"
import LocalAtmIcon from "@mui/icons-material/LocalAtm"
import TheatersIcon from "@mui/icons-material/Theaters"
import CreateIcon from "@mui/icons-material/Create"
import { red } from "@mui/material/colors"

const MovieCard = ({ movie }: { movie: IMovieProps }) => {
  const [expanded, setExpanded] = React.useState(false)

  const subheader = `${movie.director}, ${movie.year}`

  return (
    <Card variant="outlined">
      <CardContent sx={{ maxHeight: 1 }}>
        <Typography variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography variant="h6" component="div">
          {subheader}
        </Typography>
        <Rating name="rating" size="small" readOnly value={movie.rating} />
        <Avatar
          aria-label="rated"
          sx={{ bgcolor: red[500], width: 24, height: 24, padding: 2 }}
        >
          {movie.rated}
        </Avatar>
        <Stack direction="row" spacing={1}>
          <RecentActorsIcon />
          <Typography variant="body1" color="textSecondary" component="p">
            {movie.actors}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <ScheduleIcon />
          <Typography
            variant="body1"
            color="textSecondary"
            component="p"
            sx={{ verticalAlign: "baseline" }}
          >
            {movie.runtime}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1}>
          <LanguageIcon />
          <Typography variant="body2" color="textSecondary" component="p">
            {movie.language}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <RoomIcon />
          <Typography variant="body2" color="textSecondary" component="p">
            {movie.country}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <LocalAtmIcon />
          <Typography variant="body2" color="textSecondary" component="p">
            {movie.price}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <TheatersIcon />
          <Typography variant="body2" color="textSecondary" component="p">
            {movie.genre}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <CreateIcon />
          <Typography variant="body2" color="textSecondary" component="p">
            {movie.writer}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small" onClick={() => setExpanded(!expanded)}>
          Show {expanded ? "Less" : "More"} <ExpandMoreIcon />
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h5">Plot</Typography>
          <Divider />
          <Typography paragraph sx={{ marginTop: 1 }}>
            {movie.plot}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default MovieCard
