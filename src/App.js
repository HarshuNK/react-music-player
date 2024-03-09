import React from "react";
import { BrowserRouter, Route, Routes, Routs } from "react-router-dom";
import Menu from "./Pages/Menu";
import Home from "./component/Home"
import About from "./component/About"
import Pnf from "./component/Pnf";
import "./App.css"
import Track from "./component/Track";

function App(){
  return (
    <BrowserRouter>
      <Menu/>
      
      <Routes>
          {/* routes provider */}
          <Route path={'/'} element={<Home/>} />
          <Route path={'/about'} element={<About/>} />
          <Route path={'/track/:aId'} element={<Track/>} />
          <Route path={'/*'} element={<Pnf/>} />
      </Routes>

    </BrowserRouter>
  )
}
export default App