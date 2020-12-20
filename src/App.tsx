import React from "react"
import Box from "@material-ui/core/Box"

import NavBar from "./common/navbar"
import Home from "./pages/home"
import HomePart2 from "./pages/home-part2"
import HowItWorks from "./pages/how-it-works"
import Testimonials from "./pages/testimonials"
import Showcase from "./pages/showcase"
import BottomPlead from "./pages/bottom-plead"
import Footer from "./common/footer"

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
      <Box mt={20}>
        <Showcase/>
      </Box>
      <Box mt={20}>
        <BottomPlead/>
      </Box>
      <Footer/>
    </div>
  )
}

export default App
