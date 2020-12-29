import React from "react"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import NavBar from "./NavBar"

test("Renders title", () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  )
  expect(screen.getByText("Home")).toBeInTheDocument()
})
