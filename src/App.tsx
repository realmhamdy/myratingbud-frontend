import React from "react"
import Box from "@material-ui/core/Box"

import NavBar from "./common/navbar"
import Home from "./pages/home"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Box mx={7.5}>
        <Home/>
      </Box>
    </div>
  )
}

export default App
