import React from "react"
import ReactDOM from "react-dom/client"
import { act } from "react-dom/test-utils"
import App from "./App"

let container: any

beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

it("renders without crashing", () => {
  act(() => {
    ReactDOM.createRoot(container).render(<App />)
  })

  expect(document.body).toBeDefined()
})
