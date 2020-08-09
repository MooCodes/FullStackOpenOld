import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // check for duplicate names
    if (!persons.some(person => person.name === newName))
      setPersons(persons.concat({name: newName}))
    else
      alert(`${newName} is already added to phonebook`)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={(e) => setNewName(e.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map(person => <Person key={person.name} name={person.name}/>)
      }
    </div>
  )
}

export default App