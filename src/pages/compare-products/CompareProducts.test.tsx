import React from "react"
import { render, screen } from "@testing-library/react"
import CompareProducts from "./CompareProducts"

test("Renders some content", () => {
    render(<CompareProducts/>)
    expect(screen.getByText("Compare Products")).toBeInTheDocument()
})
