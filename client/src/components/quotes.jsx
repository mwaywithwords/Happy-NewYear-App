import {React, useState} from "react"
import axios from "axios"


const Quotes = ({quotes}) => {
  const [checked, setChecked] = useState(false);

  const isChecked = () =>{
    if (checked === false) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

const SaveDailyQuote = () => {
 axios.post("/saveQuotes", {quotes})
      .then((response) => {

      } )
      .catch((err)=> {
        console.log(err)
      })
  }




  return (
    <section>

      <header>
        <h2>⚙️ Saved Quotes</h2>
      </header>
      <table>
        <thead>
          <tr>
            <th>quote</th>
            <th>auther</th>
          </tr>
        </thead>
        <tbody>
            <tr><td>{quotes.q}</td>
              <td>{quotes.a}</td>
              <td>
                <input name="status" type="checkbox" onChange={isChecked} />
              </td>
              <td onClick={()=>{
                SaveDailyQuote(), console.log('did it ')
              }}>✅</td></tr>
        </tbody>
      </table>
      <div></div>
    </section>
  );

}
export default Quotes;