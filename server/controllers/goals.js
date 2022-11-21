const axios = require('axios');
require("dotenv").config();

const getBrakefast = (req, res)=>{
  const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
    params: {tags: 'breakfast, healthScore: 5', number: '1'},
    headers: {
      'X-RapidAPI-Key':  process.env.XRAPIDAPIKEY3,
      'X-RapidAPI-Host': process.env.XRAPIDAPIFOODHOST
    }
  };

  axios.request(options).then( (response)=> {
    res.send(response.data);
  }).catch((err) => {
    console.error(err)
    res.status(500).send(err);
  });
}

const getLunch = (req, res)=>{
  const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
    params: {tags: 'lunch', number: '1'},
    headers: {
      'X-RapidAPI-Key':  process.env.XRAPIDAPIKEY3,
      'X-RapidAPI-Host': process.env.XRAPIDAPIFOODHOST
    }
  };

  axios.request(options).then( (response)=> {
    res.send(response.data);
  }).catch((err) => {
    console.error(err)
    res.status(500).send(err);
  });
}



const getDinner = (req, res)=>{
  const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
    params: {tags: 'dinner', number: '1'},
    headers: {
      'X-RapidAPI-Key':  process.env.XRAPIDAPIKEY3,
      'X-RapidAPI-Host': process.env.XRAPIDAPIFOODHOST
    }
  };

  axios.request(options).then( (response)=> {
    res.send(response.data);
  }).catch((err) => {
    console.error(err)
    res.status(500).send(err);
  });
}

const getQuote = (req, res) => {
  axios.get("https://zenquotes.io/api/random").then( (response)=> {
    res.send(response.data);
  }).catch((err) => {
    console.error(err)
    res.status(500).send(err);
  });
}


//arm workouts
const getBiceps = (req, res)=>{
  const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/target/biceps',
    headers: {
      'X-RapidAPI-Key':  process.env.XRAPIDAPIKEY3,
      'X-RapidAPI-Host': process.env.XRAPIDAPIWORKOUTHOST
    }
  };

  axios.request(options).then( (response)=> {
    res.send(response.data);
  }).catch((err) => {
    console.error(err)
    res.status(500).send(err);
  });
}

const getTriceps = (req, res)=>{
  const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/target/triceps',
    headers: {
      'X-RapidAPI-Key':  process.env.XRAPIDAPIKEY3,
      'X-RapidAPI-Host': process.env.XRAPIDAPIWORKOUTHOST
    }
  };

  axios.request(options).then( (response)=> {
    res.send(response.data);
  }).catch((err) => {
    console.error(err)
    res.status(500).send(err);
  });
}

// leg workouts

const getHamstrings = (req, res)=>{
  const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/target/hamstrings',
    headers: {
      'X-RapidAPI-Key':  process.env.XRAPIDAPIKEY3,
      'X-RapidAPI-Host': process.env.XRAPIDAPIWORKOUTHOST
    }
  };

  axios.request(options).then( (response)=> {
    res.send(response.data);
  }).catch((err) => {
    console.error(err)
    res.status(500).send(err);
  });
}

const getQuads = (req, res)=>{
  const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/target/quads',
    headers: {
      'X-RapidAPI-Key':  process.env.XRAPIDAPIKEY3,
      'X-RapidAPI-Host': process.env.XRAPIDAPIWORKOUTHOST
    }
  };

  axios.request(options).then( (response)=> {
    res.send(response.data);
  }).catch((err) => {
    console.error(err)
    res.status(500).send(err);
  });
}

const getCalves = (req, res)=>{
  const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/target/calves',
    headers: {
      'X-RapidAPI-Key':  process.env.XRAPIDAPIKEY3,
      'X-RapidAPI-Host': process.env.XRAPIDAPIWORKOUTHOST
    }
  };

  axios.request(options).then( (response)=> {
    res.send(response.data);
  }).catch((err) => {
    console.error(err)
    res.status(500).send(err);
  });
}

const getGlutes = (req, res)=>{
  const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/target/glutes',
    headers: {
      'X-RapidAPI-Key':  process.env.XRAPIDAPIKEY3,
      'X-RapidAPI-Host': process.env.XRAPIDAPIWORKOUTHOST
    }
  };

  axios.request(options).then( (response)=> {
    res.send(response.data);
  }).catch((err) => {
    console.error(err)
    res.status(500).send(err);
  });
}


//shoulder workout
const getDelts = (req, res)=>{
  const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/target/delts',
    headers: {
      'X-RapidAPI-Key':  process.env.XRAPIDAPIKEY3,
      'X-RapidAPI-Host': process.env.XRAPIDAPIWORKOUTHOST
    }
  };

  axios.request(options).then( (response)=> {
    res.send(response.data);
  }).catch((err) => {
    console.error(err)
    res.status(500).send(err);
  });
}

const getTraps = (req, res)=>{
  const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/target/traps',
    headers: {
      'X-RapidAPI-Key':  process.env.XRAPIDAPIKEY3,
      'X-RapidAPI-Host': process.env.XRAPIDAPIWORKOUTHOST
    }
  };

  axios.request(options).then( (response)=> {
    res.send(response.data);
  }).catch((err) => {
    console.error(err)
    res.status(500).send(err);
  });
}

//chest workout
const getPecs = (req, res)=>{
  const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/target/pectorals',
    headers: {
      'X-RapidAPI-Key':  process.env.XRAPIDAPIKEY3,
      'X-RapidAPI-Host': process.env.XRAPIDAPIWORKOUTHOST
    }
  };

  axios.request(options).then( (response)=> {
    res.send(response.data);
  }).catch((err) => {
    console.error(err)
    res.status(500).send(err);
  });
}


//back workout
const getLats = (req, res)=>{
  const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/target/lats',
    headers: {
      'X-RapidAPI-Key':  process.env.XRAPIDAPIKEY3,
      'X-RapidAPI-Host': process.env.XRAPIDAPIWORKOUTHOST
    }
  };

  axios.request(options).then( (response)=> {
    res.send(response.data);
  }).catch((err) => {
    console.error(err)
    res.status(500).send(err);
  });
}

const getUpperBack = (req, res)=>{
  const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/target/upper%20back',
    headers: {
      'X-RapidAPI-Key':  process.env.XRAPIDAPIKEY3,
      'X-RapidAPI-Host': process.env.XRAPIDAPIWORKOUTHOST
    }
  };

  axios.request(options).then( (response)=> {
    res.send(response.data);
  }).catch((err) => {
    console.error(err)
    res.status(500).send(err);
  });
}

const getSpine = (req, res)=>{
  const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/target/spine',
    headers: {
      'X-RapidAPI-Key':  process.env.XRAPIDAPIKEY3,
      'X-RapidAPI-Host': process.env.XRAPIDAPIWORKOUTHOST
    }
  };

  axios.request(options).then( (response)=> {
    res.send(response.data);
  }).catch((err) => {
    console.error(err)
    res.status(500).send(err);
  });
}



module.exports = {getBrakefast, getLunch, getDinner, getQuote, getBiceps, getTriceps, getTraps,
   getDelts, getCalves, getGlutes, getHamstrings, getQuads, getLats, getUpperBack,
  getSpine, getPecs}