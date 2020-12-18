import React from "react"
import { render, screen } from "@testing-library/react"
import RatingBox from "./RatingBox"

test("Renders some content", () => {
    render(<RatingBox />)
    expect(screen.getByText("100")).toBeInTheDocument()
})