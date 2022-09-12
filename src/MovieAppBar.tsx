/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */

import React, { useEffect, useMemo } from "react"
import AppBar from "@mui/material/AppBar"
import Container from "@mui/material/Container"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Typography from "@mui/material/Typography"
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
      {children}
    </Typography>
  )
}

export default function SimpleTabs() {
  const [tabValue, setTabValue] = React.useState(0)

  const [cinemaWorldMovies, setCinemaWorldMovies] = React.useState<
    IMovieProps[] | null
  >(null)

  const [filmWorldMovies, setFilmWorldMovies] = React.useState<
    IMovieProps[] | null
  >(null)

  useMemo(() => {
    const cinemaWorldMovieService = new CinemaWorldMovieService()
    const filmWorldMoviesService = new FilmWorldMovieService()

    setCinemaWorldMovies(cinemaWorldMovieService.GetMovies())
    setFilmWorldMovies(filmWorldMoviesService.GetMovies())
  }, [])

  return (
    <Container maxWidth="sm">
      <AppBar position="static">
        <Tabs
          value={tabValue}
          onChange={(_, newValue) => setTabValue(newValue)}
          aria-label="cinema world and film world tabs"
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab label="Cinema World" />
          <Tab label="Film World" />
        </Tabs>
      </AppBar>
      <TabPanel value={tabValue} index={0}>
        {cinemaWorldMovies && <Movies key={1} movies={cinemaWorldMovies} />}
        {!cinemaWorldMovies && <CircularProgress disableShrink />}
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        {filmWorldMovies && <Movies key={2} movies={filmWorldMovies} />}
        {!filmWorldMovies && <CircularProgress disableShrink />}
      </TabPanel>
    </Container>
  )
}
