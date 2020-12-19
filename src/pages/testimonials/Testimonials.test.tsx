import React from "react"
import { render, screen } from "@testing-library/react"
import Testimonials from "./Testimonials"

test("Renders some content", () => {
    render(<Testimonials/>)
    expect(screen.getByText("Samantha Jersey, Boston")).toBeInTheDocument()
})