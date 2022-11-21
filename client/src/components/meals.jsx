import React from "react"
import Grid from '@mui/material/Grid';



const Meals = ({breakfast, lunch, dinner}) => {
  const [spacing, setSpacing] = React.useState(2);

  const jsx = `
    <Grid container spacing={${spacing}}>
    `;

const centerWords = {
  position: 'relative',
  }

  return (
    <Grid sx={{ flexGrow: 3 }} container spacing={2}>
      <Grid item xs={12}>
        <h1 style={centerWords}>Meal Suggestions</h1>
        <Grid container justifyContent="center" spacing={spacing}>

            <Grid item>
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
            </Grid>

            <Grid item>
            <aside>
      <h1>Lunch 🥗</h1>
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
            </Grid>

            <Grid item>
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
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Meals;