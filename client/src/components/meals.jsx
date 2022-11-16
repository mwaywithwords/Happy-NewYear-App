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
      <h1>Breakfast</h1>
      <title>{breakfast.title}</title>
    <img
          src={breakfast.image}
          width="384"
          height="192"
          alt="header image"
        />
        <p>{breakfast.summary}</p>
    </aside>
  </ul>
)

}

export default Meals;