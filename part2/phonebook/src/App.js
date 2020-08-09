import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredTerm, setFilteredTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // check for duplicate names
    if (!persons.some(person => person.name === newName))
      setPersons(persons.concat({name: newName, number: newNumber}))
    else
      alert(`${newName} is already added to phonebook`)
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().indexOf(filteredTerm.toLowerCase()) > -1)

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input onChange={(e) => setFilteredTerm(e.target.value)}/>
      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>name: <input onChange={(e) => setNewName(e.target.value)}/></div>
        <div>number: <input onChange={(e) => setNewNumber(e.target.value)}/></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {
        filteredPersons.map(person => <Person key={person.name} person={person}/>)
      }
    </div>
  )
}

export default App