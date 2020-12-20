import React from "react"
import {render, screen} from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import Home from "./Home"

test("Renders content", () => {
    render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>)
    expect(screen.getByText("Make Smarter Choices")).toBeInTheDocument()
})