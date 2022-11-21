import React, {useState, useEffect}  from "react"
import axios from "axios"
// import {getBreakfast, getLunch, getDinner,getQuote,getLats, getQuads, getUpperBack, getGlutes,
//    getHamstrings, getSpine, getPecs, getTraps, getDelts, getCalves, getBiceps, getTriceps} from "./../../dist/getMotivated.js"
import Workout from "./workout.jsx"
import MyQuotes from "./myQuotes.jsx"
import Meals from "./meals.jsx"
import Quotes from "./quotes.jsx"
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';



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
  const [quotes, setQuotes] = useState([]);


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

  const SaveDailyQuote = () => {
    axios.get("/getQuotes")
         .then((response) => {
         setQuotes(response.data)
         console.log(response.data)
         } )
         .catch((err)=> {
           console.log(err)
         })
     }

  const Background = styled(Paper)(({ theme }) => ({backgroundImage: `url(https://images.pexels.com/photos/6149104/pexels-photo-6149104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
}))

  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    backgroundImage: `url(https://images.pexels.com/photos/6149104/pexels-photo-6149104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    color: 'white'
  }));




useEffect(()=>{
  // getBreakfast();
  // getLunch();
  // getDinner();
  getQuote();
  // getLats();
  // getQuads();
  // getUpperBack();
  // getGlutes();
  // getHamstrings();
  // getSpine();
  // getPecs();
  // getTraps();
  // getDelts();
  // getCalves();
  // getBiceps()
  // getTriceps();
  SaveDailyQuote()
},[])

const constantData = ()=> {
   if( pecsWorkout.length > 0   //&& hamstringsWorkout.length > 0 && glutsWorkout.length > 0 && quadsWorkout.length > 0 && calfsWorkout.length > 0 && deltsWorkout.length > 0 && trapsWorkout.length > 0 && tricepsWorkout.length > 0 && bicepsWorkout.length > 0 && latsWorkout.length > 0 && spineWorkout.length > 0 && upperBackWorkout.length > 0
  ){
    return true
  }
}


return (
        <Background>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item><h1>Happy New Years App 🎆🎇</h1></Item>
          </Grid>
          <Grid item xs={12} >
            <Item><h2>{quote.q} : BY {quote.a}</h2></Item>
          </Grid>
          <Grid item xs={12}>
            <Item><section><Meals breakfast={breakfast} lunch={lunch} dinner={dinner}/></section></Item>
          </Grid>
          <Grid item xs={12}>
            <Item>{constantData() ? <Workout trapsWorkout={trapsWorkout} deltsWorkout={deltsWorkout} hamstringsWorkout={hamstringsWorkout}
            upperBackWorkout={upperBackWorkout} spineWorkout={spineWorkout} tricepsWorkout={tricepsWorkout}
            latsWorkout={latsWorkout} pecsWorkout={pecsWorkout} bicepsWorkout={bicepsWorkout} glutsWorkout={glutsWorkout}
            quadsWorkout={quadsWorkout} calfsWorkout={calfsWorkout}/> : null }</Item>
          </Grid>
          <Grid item xs={12} >
            <Item><Quotes quotes={quote}/></Item>
          </Grid>
          <Grid item xs={12} >
              <Item>{quotes.length > 0 ? <MyQuotes myQuotes={quotes}/> : null }</Item>
          </Grid>
        </Grid></Background>)
}
export default  App;

