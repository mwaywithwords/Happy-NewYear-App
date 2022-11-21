import React,{useEffect, useState} from "react"
import axios from "axios"


const MyQuotes = ({myQuotes}) => {
  console.log(myQuotes)



  return (
    <section>

      <header>
        <h2>My Quotes</h2>
        <h3>Your Motivation</h3>
      </header>
      <table>
        <thead>

          <tr>
            <th>quote</th>
            <th>auther</th>
          </tr>
        </thead>
        <tbody>
          {myQuotes.map((quote,i)=>(
            <tr key={i}><td>{quote.quotes}</td>
              <td>{quote.author}</td>
             </tr>
          ))}

        </tbody>
      </table>
      <div></div>
    </section>
  );

}
export default MyQuotes;