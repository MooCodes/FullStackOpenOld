import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    console.log('good clicked')

    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    console.log('neutral clicked')

    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    console.log('bad clicked')

    setBad(bad + 1)
  }

  const getAverage = () => {
    if (good + neutral + bad === 0) return 0
    return (good + (bad * -1)) / (good + neutral + bad)
  }

  const getPositive = () => {
    if (good + neutral + bad === 0) return 0
    return good / (good + neutral + bad) * 100
  }

  return (
    <div>
      <h1>give feedback</h1>

      <Button text='good' onClick={handleGoodClick} />
      <Button text='neutral' onClick={handleNeutralClick} />
      <Button text='bad' onClick={handleBadClick} />

      <h1>statistics</h1>
      good {good} <br></br>
      neutral {neutral} <br></br>
      bad {bad} <br></br>
      all {good + neutral + bad} <br></br>
      average {getAverage()} <br></br>
      positive {getPositive()} %

    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)