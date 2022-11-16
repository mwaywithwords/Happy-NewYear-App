import React, {useState, useEffect}  from "react"
import axios from "axios"
// import {getBreakfast, getLunch, getDinner,getQuote,getLats, getQuads, getUpperBack, getGlutes,
//    getHamstrings, getSpine, getPecs, getTraps, getDelts, getCalves, getBiceps, getTriceps} from "./../../dist/getMotivated.js"
import Workout from "./workout.jsx"
import Meals from "./meals.jsx"

const App = () => {

  const [breakfast, setBreakfast] = useState({});
  const [lunch, setLunch] = useState({});
  const [dinner, setDinner] = useState({});
  const [quote, setQuote] = useState({});
  const [trapsWorkout, setTrapsWorkout] = useState([]);
  const [bicepsWorkout, setBicepsWorkout] = useState([]);
  const [tricepsWorkout, setTricepsWorkout] = useState([]);
  const [spineWorkout, setSpineWorkout] = useState([]);
  const [upperBackWorkout, setUpperBackWorkout] = useState([]);
  const [latsWorkout, setLatsWorkout] = useState([]);
  const [quadsWorkout, setQuadsWorkout] = useState([]);
  const [hamstringsWorkout, setHamstringsWorkout] = useState([]);
  const [glutsWorkout, setGlutsWorkout] = useState([]);
  const [calfsWorkout, setCalfsWorkout] = useState([]);
  const [deltsWorkout, setDeltsWorkout] = useState([]);
  const [pecsWorkout, setPecsWorkout] = useState([]);

  // console.log(breakfast,lunch,dinner,quote)

   const getBreakfast = ()=> {
    axios.get("/getBreakfast").then((response) =>{
      setBreakfast(response.data.recipes[0])
    })
    .catch((err) => {
      console.log(err)
    })
  }

   const getLunch = ()=> {
    axios.get("/getLunch").then((response) =>{
      setLunch(response.data.recipes[0])
    })
    .catch((err) => {
      console.log(err)
    })
  }

   const getDinner = ()=> {
    axios.get("/getDinner").then((response) =>{
      setDinner(response.data.recipes[0])
    })
    .catch((err) => {
      console.log(err)
    })
  }

   const getQuote = ()=> {
    axios.get("/getQuote").then((response) =>{
      setQuote(response.data[0])
    })
    .catch((err) => {
      console.log(err)
    })
  }


   const getBiceps = ()=> {
    axios.get("/getBiceps").then((response) =>{
      setBicepsWorkout(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

   const getTriceps = ()=> {
    axios.get("/getTriceps").then((response) =>{
      setTricepsWorkout(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

   const getTraps = ()=> {
    axios.get("/getTraps").then((response) =>{
      setTrapsWorkout(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

   const getSpine = ()=> {
    axios.get("/getSpine").then((response) =>{
      setSpineWorkout(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

   const getUpperBack = ()=> {
    axios.get("/getUpperBack").then((response) =>{
      setUpperBackWorkout(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

   const getLats = ()=> {
    axios.get("/getLats").then((response) =>{
      setLatsWorkout(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

   const getQuads = ()=> {
    axios.get("/getQuads").then((response) =>{
      setQuadsWorkout(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

   const getHamstrings = ()=> {
    axios.get("/getHamstrings").then((response) =>{
      setHamstringsWorkout(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

   const getGlutes = ()=> {
    axios.get("/getGlutes").then((response) =>{
      setGlutsWorkout(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

   const getCalves = ()=> {
    axios.get("/getCalves").then((response) =>{
      setCalfsWorkout(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

   const getDelts = ()=> {
    axios.get("/getDelts").then((response) =>{
      setDeltsWorkout(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

   const getPecs = ()=> {
    axios.get("/getPecs").then((response) =>{
      setPecsWorkout(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }





useEffect(()=>{
  getBreakfast();
  getLunch();
  getDinner();
  getQuote();
  // getLats();
  // getQuads();
  // getUpperBack();
  // getGlutes();
  // getHamstrings();
  // getSpine();
  // getPecs();
  // getTraps()
  // getDelts();
  // getCalves();
  // getBiceps()
  // getTriceps();
},[])


  return (
    <section>
      <h1>Happy Newyears App 🎆🎇</h1>
      <p>{quote.q}</p>
       {quote.a}
     <Meals breakfast={breakfast} lunch={lunch} dinner={dinner}/>
     <Workout />
    </section>

  )
}
export default  App;

