import React, {useState, useEffect}  from "react"
import axios from "axios"
import {getBreakfast, getLunch, getDinner,getQuote,getLats, getQuads, getUpperBack, getGlutes,
   getHamstrings, getSpine, getPecs, getTraps, getDelts, getCalves, getBiceps, getTriceps} from "./../../dist/getMotivated.js"

const App = () => {



useEffect(()=>{
  getBreakfast();
  getLunch();
  getDinner();
  getQuote();
  getLats();
  getQuads();
  getUpperBack();
  getGlutes();
  getHamstrings();
  getSpine();
  getPecs();
  getTraps()
  getDelts();
  getCalves();
  getBiceps()
  getTriceps();
},[])


  return (
  <h1>Hello World</h1>
  )
}
export default App;