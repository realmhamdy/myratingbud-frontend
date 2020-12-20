import React from "react"
import { render, screen } from "@testing-library/react"
import BottomPlead from "./BottomPlead"

test("Renders some content", () => {
    render(<BottomPlead/>)
    expect(screen.getByText("Rate Now")).toBeInTheDocument()
})
