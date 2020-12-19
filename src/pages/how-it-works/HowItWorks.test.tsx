import React from "react"
import { render, screen } from "@testing-library/react"
import HowItWorks from "./HowItWorks"

test("Renders some steps", () => {
    render(<HowItWorks/>)
    expect(screen.getByText("Step 1")).toBeInTheDocument()
})