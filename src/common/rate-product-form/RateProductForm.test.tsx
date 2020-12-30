import React from "react"
import { Route } from "react-router-dom"
import { screen, render, fireEvent } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

import RateProductForm from "./RateProductForm"

test("Sends to rating summary page when Rate Now button is clicked", () => {
    let testHistory: any, testLocation: any
    render(
        <MemoryRouter>
            <RateProductForm/>
            <Route path="*"
                render={({ history, location }) => {
                testHistory = history;
                testLocation = location;
                return null;
            }}/>
        </MemoryRouter>
    )
    fireEvent.input(screen.getByTestId("product-url-input"), { target: { value: "http://www.example.com/product"}})
    fireEvent.click(screen.getByText("Rate Now"))
    expect(testLocation.pathname).toBe("/rating-summary/")
    const searchParams = new URLSearchParams(testLocation.search)
    expect(searchParams.get("url")).toBe("http://www.example.com/product")
})
