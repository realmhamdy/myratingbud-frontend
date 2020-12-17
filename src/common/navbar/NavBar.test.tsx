import React from "react"
import { render, screen } from "@testing-library/react"
import NavBar from "./NavBar"

test("renders learn react link", () => {
  render(<NavBar />)
  expect(screen.getByText("MyRatingBud")).toBeTruthy()
})
