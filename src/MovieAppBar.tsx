/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */

import React, { useEffect } from "react"
import { css } from "@emotion/react"
import AppBar from "@mui/material/AppBar"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Movies from "./Movies"
import CinemaWorldMovieService from "./services/CinemaWorldMovieService"
import FilmWorldMovieService from "./services/FilmWorldMovieService"
import CircularProgress from "@mui/material/CircularProgress"
import IMovieProps from "./IMovieProps"

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

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
  )
}

export default function SimpleTabs() {
  const [value, setValue] = React.useState(0)

  const [cinemaWorldMovies, setCinemaWorldMovies] = React.useState<
    IMovieProps[] | null
  >(null)
  const [filmWorldMovies, setFilmWorldMovies] = React.useState<
    IMovieProps[] | null
  >(null)

  useEffect(() => {
    const cinemaWorldMovieService = new CinemaWorldMovieService()
    const filmWorldMoviesService = new FilmWorldMovieService()

    const fetchAll = () => {
      setCinemaWorldMovies(cinemaWorldMovieService.GetMovies())
      setFilmWorldMovies(filmWorldMoviesService.GetMovies())
    }
    fetchAll()
  }, [])

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: number
  ) => {
    setValue(newValue)
  }

  return (
    <div
      css={css`
        flex-grow: 1;
        background-color: white;
      `}
    >
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="cinema world and film world tabs"
        >
          <Tab label="Cinema World" />
          <Tab label="Film World" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {cinemaWorldMovies && <Movies key={1} movies={cinemaWorldMovies} />}
        {!cinemaWorldMovies && <CircularProgress disableShrink />}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {filmWorldMovies && <Movies key={2} movies={filmWorldMovies} />}
        {!filmWorldMovies && <CircularProgress disableShrink />}
      </TabPanel>
    </div>
  )
}
