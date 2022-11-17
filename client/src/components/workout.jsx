import React from "react"


const Workout = (props) => {
  const randomCalfs= Math.floor(Math.random() * props.calfsWorkout.length)
  console.log(props.calfsWorkout, randomCalfs)


  // trapsWorkout, deltsWorkout, hamstringsWorkout,upperBackWorkout, spineWorkout, tricepsWorkout,latsWorkout,
  // pecsWorkout, bicepsWorkout, glutsWorkout, quadsWorkout, calfsWorkout

// const random = Math.floor(Math.random() * trapsWorkout.length)

const getBusy = (props) => {
  let todaysDate = new Date().toLocaleString("en-US", {weekday: 'long'})
  return todaysDate
}

const getWorkout = () => {
  if(getBusy() === "Monday"){
  const randomGlute = Math.floor(Math.random() * props.glutsWorkout.length)
  const randomQuads = Math.floor(Math.random() * props.quadsWorkout.length)
  const randomHamstrings = Math.floor(Math.random() * props.hamstringsWorkout.length)
  const randomCalfs= Math.floor(Math.random() * props.calfsWorkout.length)
  const gluts = props.glutsWorkout[randomGlute]
  const qudas = props.quadsWorkout[randomQuads]
  const hamstrings = props.hamstringsWorkout[randomHamstrings]
  const calfs = props.calfsWorkout[randomCalfs]
  return ( <section>
    <h2> Workout Suggestions</h2>
    <div>
      <h1>{hamstrings.name}</h1>
    <h2>{hamstrings.bodyPart}</h2>
    <img
          src={hamstrings.gifUrl}
          width="384"
          height="192"
          alt="header image"
        />
    </div>

    <div>
    <h1>{qudas.name}</h1>
    <h2>{qudas.bodyPart}</h2>
    <img
          src={qudas.gifUrl}
          width="384"
          height="192"
          alt="header image"
        />
    </div>

    <div>
    <h1>{gluts.name}</h1>
    <h2>{gluts.bodyPart}</h2>
    <img
          src={gluts.gifUrl}
          width="384"
          height="192"
          alt="header image"
        />
    </div>

    <div>
    <h1>{calfs.name}</h1>
    <h2>{calfs.bodyPart}</h2>
    <img
          src={calfs.gifUrl}
          width="384"
          height="192"
          alt="header image"
        />
    </div>


  </section>)
  } else if(getBusy() === "Tuesday"){
    const randomDelts = Math.floor(Math.random() * props.deltsWorkout.length)
    const randomTraps = Math.floor(Math.random() * props.trapsWorkout.length)

    const delts = props.deltsWorkout[randomDelts]
    const traps = props.trapsWorkout[randomTraps]

    return ( <section>
      <h2> Workout Suggestions</h2>
      <div>
        <h1>{delts.name}</h1>
      <h2>{delts.bodyPart}</h2>
      <img
            src={delts.gifUrl}
            width="384"
            height="192"
            alt="header image"
          />
      </div>

      <div>
      <h1>{traps.name}</h1>
      <h2>{traps.bodyPart}</h2>
      <img
            src={traps.gifUrl}
            width="384"
            height="192"
            alt="header image"
          />
      </div>
    </section>)
    } else if (getBusy() === "Wednesday"){
      const randomBiceps = Math.floor(Math.random() * props.bicepsWorkout.length)
      const randomTriceps = Math.floor(Math.random() * props.tricepsWorkout.length)

      const biceps = props.bicepsWorkout[randomBiceps]
      const triceps = props.tricepsWorkout[randomTriceps]

      return ( <section>
        <h2> Workout Suggestions</h2>
        <div>
          <h1>{biceps.name}</h1>
        <h2>{biceps.bodyPart}</h2>
        <img
              src={biceps.gifUrl}
              width="384"
              height="192"
              alt="header image"
            />
        </div>

        <div>
        <h1>{triceps.name}</h1>
        <h2>{triceps.bodyPart}</h2>
        <img
              src={triceps.gifUrl}
              width="384"
              height="192"
              alt="header image"
            />
        </div>
      </section>)
      } else if (getBusy() === "Thursday"){
        const randomSpine = Math.floor(Math.random() * props.spineWorkout.length)
        const randomUpperBack = Math.floor(Math.random() * props.upperBackWorkout.length)
        const randomLats = Math.floor(Math.random() * props.latsWorkout.length)

        const spine = props.spineWorkout[randomSpine]
        const upperBack = props.upperBackWorkout[randomUpperBack]
        const lats = props.latsWorkout[randomLats]

        return ( <section>
          <h2> Workout Suggestions</h2>
          <div>
            <h1>{spine.name}</h1>
          <h2>{spine.bodyPart}</h2>
          <img
                src={spine.gifUrl}
                width="384"
                height="192"
                alt="header image"
              />
          </div>

          <div>
          <h1>{upperBack.name}</h1>
          <h2>{upperBack.bodyPart}</h2>
          <img
                src={upperBack.gifUrl}
                width="384"
                height="192"
                alt="header image"
              />
          </div>

          <div>
          <h1>{lats.name}</h1>
          <h2>{lats.bodyPart}</h2>
          <img
                src={lats.gifUrl}
                width="384"
                height="192"
                alt="header image"
              />
          </div>
        </section>)
        } else if (getBusy() === "Friday"){
          const randomPecs = Math.floor(Math.random() * props.pecsWorkout.length)
          const randomPecs2 = Math.floor(Math.random() * 25) + 1

          const pecs = props.pecsWorkout[randomPecs]
          const pecs2 = props.pecsWorkout[randomPecs2]

          return ( <section>
            <h2> Workout Suggestions</h2>
            <div>
              <h1>{pecs.name}</h1>
            <h2>{pecs.bodyPart}</h2>
            <img
                  src={pecs.gifUrl}
                  width="384"
                  height="192"
                  alt="header image"
                />
            </div>

            <div>
            <h1>{pecs2.name}</h1>
            <h2>{pecs2.bodyPart}</h2>
            <img
                  src={pecs2.gifUrl}
                  width="384"
                  height="192"
                  alt="header image"
                />
            </div>
          </section>)
          }
}


return (
  <section>

    {getWorkout()}
    </section>
)

}

export default Workout;