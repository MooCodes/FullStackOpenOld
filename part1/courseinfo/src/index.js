import React from 'react'
import ReactDOM from 'react-dom'

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

const Content = (props) => {
  return (
    // render the 3 parts
    <div>
      {props.parts.map((val, i) => (<Part key={i} name={val.name} exercise={val.exercises}/>))}
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
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  let parts = [part1, part2, part3];

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} />
      <Total numExercises={parts.reduce(((acc, curr) => acc + curr.exercises), 0)} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))