import React from 'react'

const PersonForm = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber }) => {

    const handleSubmit = (e) => {
        e.preventDefault()

        // check for duplicate names
        if (!persons.some(person => person.name === newName))
            setPersons(persons.concat({ name: newName, number: newNumber }))
        else
            alert(`${newName} is already added to phonebook`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>name: <input onChange={(e) => setNewName(e.target.value)} /></div>
                <div>number: <input onChange={(e) => setNewNumber(e.target.value)} /></div>
                <div><button type="submit">add</button></div>
            </form>
        </div>
    )
}

export default PersonForm