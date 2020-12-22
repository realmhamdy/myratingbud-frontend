import React from "react"
import { render, screen } from "@testing-library/react"
import RatingSummary from "./RatingSummary"

test("Renders some content", () => {
    render(<RatingSummary/>)
    expect(screen.getByText("Have any questions?")).toBeInTheDocument()
})
