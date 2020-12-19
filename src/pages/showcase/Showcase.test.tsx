import React from "react"
import { render, screen } from "@testing-library/react"
import Showcase from "./Showcase"

test("Renders some content", () => {
    render(<Showcase/>)
    expect(screen.getAllByText("Learn more")).toBeTruthy()
})
