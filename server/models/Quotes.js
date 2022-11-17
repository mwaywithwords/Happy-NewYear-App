const pool = require("../db.js")

const getQuotes = (req, res) => {

  pool
  .query(`SELECT * FROM quotes`)
  .then((data) => {
    res.send(data.rows)
  })
  .catch((err)=>{
    console.log("you have no Quotes saved", err)
    res.status(500).send(err);
  })

}

const saveQuote = (req, res) => {
  const savedQuote = req.body.quotes.q
  const saveAuthor = req.body.quotes.a
  console.log(saveAuthor,"this is the author", savedQuote, "this is the quote")

  pool
  .query(`INSERT INTO quotes(quotes, author) VALUES (${savedQuote}, ${saveAuthor}) `)
  .then((data) => {
    res.sendStatus(201)
    console.log("done!")
  })
  .catch((err)=>{
    console.log("you have no Quotes saved", err)
    res.status(500).send(err);
  })

}




module.exports = {saveQuote, getQuotes}