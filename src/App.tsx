import React from "react"
import Box from "@material-ui/core/Box"

import NavBar from "./common/navbar"
import Home from "./pages/home"
import HomePart2 from "./pages/home-part2"
import HowItWorks from "./pages/how-it-works"
import Testimonials from "./pages/testimonials"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Box mx={7.5}>
        <Home/>
      </Box>
      <Box mt={20}>
        <HomePart2 />
      </Box>
      <Box mt={20}>
        <HowItWorks/>
      </Box>
      <Box mt={20}>
        <Testimonials/>
      </Box>
    </div>
  )
}

export default App
