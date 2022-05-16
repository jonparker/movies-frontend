import React from "react"
import "./App.css"
import CssBaseline from "@mui/material/CssBaseline"
import "typeface-roboto"
import MovieAppBar from "./MovieAppBar"

import { StyledEngineProvider } from "@mui/material/styles"

const App = () => {
  return (
    <React.Fragment>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <MovieAppBar />
      </StyledEngineProvider>
    </React.Fragment>
  )
}

export default App
