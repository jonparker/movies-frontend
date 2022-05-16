import React from "react"
import ReactDOM from "react-dom/client"
import { act } from "react-dom/test-utils"
import IMovieProps from "./IMovieProps"
import Movies from "./Movies"

let container: Element

beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
})

it("renders without crashing", () => {
  act(() => {
    const movie: IMovieProps = {
      id: "cw0076759",
      title: "Star Wars: Episode IV - A New Hope",
      rated: "PG",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BMjE2MzQwMTgxN15BMl5BanBnXkFtZTcwMDQzNjk2OQ@@._V1_SX300.jpg",
      plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the galaxy from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.",
      year: "1980",
      released: "20 Jun 1980",
      runtime: "124 min",
      genre: "Action, Adventure, Fantasy",
      director: "Irvin Kershner",
      writer:
        "Leigh Brackett (screenplay), Lawrence Kasdan (screenplay), George Lucas (story by)",
      actors: "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams",
      language: "English",
      country: "USA",
      awards: "Won 1 Oscar. Another 19 wins & 18 nominations.",
      metascore: 80,
      rating: 4,
      votes: "842,451",
      type: "movie",
      price: "13.5",
    }

    const movies = [movie]
    ReactDOM.createRoot(container).render(<Movies movies={movies} />)
  })

  expect(document.body).toBeDefined()
})
