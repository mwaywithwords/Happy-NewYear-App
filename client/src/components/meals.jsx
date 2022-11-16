import React from "react"


const Meals = ({breakfast, lunch, dinner}) => {

  console.log(breakfast)

// const par = () => {
//   if(typeof breakfast.summary === "string") {
//     return breakfast.summary.slice(0, -1)
//   }
// }
// console.log(par())

return (
  <ul>
    <aside>
      <h1>Breakfast 🥞</h1>
      <h3>{breakfast.title}</h3>
      <h3></h3>
    <img
          src={breakfast.image}
          width="384"
          height="192"
          alt="header image"
        />
        <div>
          <span dangerouslySetInnerHTML={{ __html: breakfast.summary}}></span>
          </div>
    </aside>



    <aside>
      <h1>Lunch 🍜</h1>
      <h3>{lunch.title}</h3>
      <h3></h3>
    <img
          src={lunch.image}
          width="384"
          height="192"
          alt="header image"
        />
        <div>
          <span dangerouslySetInnerHTML={{ __html: lunch.summary}}></span>
          </div>
    </aside>

    <aside>
      <h1>Dinner 🍜</h1>
      <h3>{dinner.title}</h3>
      <h3></h3>
    <img
          src={dinner.image}
          width="384"
          height="192"
          alt="header image"
        />
        <div>
          <span dangerouslySetInnerHTML={{ __html: dinner.summary}}></span>
          </div>
    </aside>
  </ul>
)

}

export default Meals;