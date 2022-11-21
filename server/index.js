require("dotenv").config();
const express = require('express');
const app = express();
const path = require("path");
const controllers = require("./controllers/goals.js")
const db = require("./models/Quotes.js")


app.use(express.json());
app.use(express.urlencoded());


app.use(express.static(path.join(__dirname, '../client/dist')));


app.get("/getBreakfast", controllers.getBrakefast);
app.get("/getLunch", controllers.getLunch)
app.get("/getDinner", controllers.getDinner)
app.get("/getQuote", controllers.getQuote)
app.get("/getBiceps", controllers.getBiceps)
app.get("/getTriceps", controllers.getTriceps)
app.get("/getTraps", controllers.getTraps)
app.get("/getDelts", controllers.getDelts)
app.get("/getGlutes", controllers.getGlutes)
app.get("/getCalves", controllers.getCalves)
app.get("/getHamstrings", controllers.getHamstrings)
app.get("/getQuads", controllers.getQuads)
app.get("/getUpperBack", controllers.getUpperBack)
app.get("/getLats", controllers.getLats)
app.get("/getSpine", controllers.getSpine)
app.get("/getPecs", controllers.getPecs)
app.get("/getQuotes", db.getQuotes)
app.post("/saveQuotes", db.saveQuote)


app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});