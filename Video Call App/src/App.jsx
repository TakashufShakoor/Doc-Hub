import React from 'react'
import { Route,Routes } from "react-router-dom";

import VideoRoom from './VideoRoom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/video-room/:appointmentId" element = {<VideoRoom/>}/>
      </Routes>
    </div>
  )
}

export default App
