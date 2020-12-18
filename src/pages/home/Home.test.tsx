import React from "react"
import {render, screen} from "@testing-library/react"
import Home from "./Home"

test("Renders content", () => {
    render(<Home />)
    expect(screen.getByText("Make Smarter Choices")).toBeInTheDocument()
})