import React from "react"

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"

import NavBar from "./common/navbar"
import Home from "./pages/home"
import RatingSummary from "./pages/rating-summary"
import CompareProducts from "./pages/compare-products"
import Footer from "./common/footer"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/rating-summary">
            <RatingSummary/>
          </Route>
          <Route path="/compare">
            <CompareProducts/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
