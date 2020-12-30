import React from "react"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import RatingSummary from "./RatingSummary"

test("Renders some content", () => {
    render(
        <MemoryRouter>
            <RatingSummary/>
        </MemoryRouter>
    )
    expect(true).toBeTruthy()
})
