import React from 'react'
import ReactDOM from 'react-dom'

// data
const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.name} {props.exercise}
      </p>
    </>
  )
}

const Content = () => {
  return (
    // render the 3 parts
    <div>
      <Part name={part1} exercise={exercises1} />
      <Part name={part2} exercise={exercises2} />
      <Part name={part3} exercise={exercises3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.numExercises}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Header course={course}/>
      <Content />
      <Total numExercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))