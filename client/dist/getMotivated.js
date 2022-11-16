import axios from "axios"
import  {useState, React} from "react"


 export const [breakfast, setBreakfast] = useState([])



export const getBreakfast = ()=> {
  axios.get("/getBreakfast").then((response) =>{
    console.log(response.data.recipes[0] )
    setBreakfast(response.data.recipes[0])
  })
  .catch((err) => {
    console.log(err)
  })
}

export const getLunch = ()=> {
  axios.get("/getLunch").then((response) =>{
    console.log(response.data.recipes[0] )
  })
  .catch((err) => {
    console.log(err)
  })
}

export const getDinner = ()=> {
  axios.get("/getDinner").then((response) =>{
    console.log(response.data.recipes[0] )
  })
  .catch((err) => {
    console.log(err)
  })
}

export const getQuote = ()=> {
  axios.get("/getQuote").then((response) =>{
    console.log(response.data[0])
  })
  .catch((err) => {
    console.log(err)
  })
}


export const getBiceps = ()=> {
  axios.get("/getBiceps").then((response) =>{
    console.log(response.data)
  })
  .catch((err) => {
    console.log(err)
  })
}

export const getTriceps = ()=> {
  axios.get("/getTriceps").then((response) =>{
    console.log(response.data)
  })
  .catch((err) => {
    console.log(err)
  })
}

export const getTraps = ()=> {
  axios.get("/getTraps").then((response) =>{
    console.log(response.data)
  })
  .catch((err) => {
    console.log(err)
  })
}

export const getSpine = ()=> {
  axios.get("/getSpine").then((response) =>{
    console.log(response.data)
  })
  .catch((err) => {
    console.log(err)
  })
}

export const getUpperBack = ()=> {
  axios.get("/getUpperBack").then((response) =>{
    console.log(response.data)
  })
  .catch((err) => {
    console.log(err)
  })
}

export const getLats = ()=> {
  axios.get("/getLats").then((response) =>{
    console.log(response.data)
  })
  .catch((err) => {
    console.log(err)
  })
}

export const getQuads = ()=> {
  axios.get("/getQuads").then((response) =>{
    console.log(response.data)
  })
  .catch((err) => {
    console.log(err)
  })
}

export const getHamstrings = ()=> {
  axios.get("/getHamstrings").then((response) =>{
    console.log(response.data)
  })
  .catch((err) => {
    console.log(err)
  })
}

export const getGlutes = ()=> {
  axios.get("/getGlutes").then((response) =>{
    console.log(response.data)
  })
  .catch((err) => {
    console.log(err)
  })
}

export const getCalves = ()=> {
  axios.get("/getCalves").then((response) =>{
    console.log(response.data)
  })
  .catch((err) => {
    console.log(err)
  })
}

export const getDelts = ()=> {
  axios.get("/getDelts").then((response) =>{
    console.log(response.data)
  })
  .catch((err) => {
    console.log(err)
  })
}

export const getPecs = ()=> {
  axios.get("/getPecs").then((response) =>{
    console.log(response.data)
  })
  .catch((err) => {
    console.log(err)
  })
}


