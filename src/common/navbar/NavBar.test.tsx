import React from "react"
import { render, screen } from "@testing-library/react"
import NavBar from "./NavBar"

test("Renders title", () => {
  render(<NavBar />)
  expect(screen.getByText("MyRatingBud")).toBeInTheDocument()
})
