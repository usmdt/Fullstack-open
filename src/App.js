import React, { useState } from 'react'
import Person from './Components/Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      id: 1,
      phone: '011112324' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')

  const handleNewPerson = (event) => {
      setNewName(event.target.value)
  }

  const handleNewPhone = (event) => {
      setNewPhone(event.target.value)
  }

  const addNewPerson = (event) => {
      event.preventDefault()
      const tempPerson = {
          name: newName,
          id: persons.length+1,
          phone: newPhone
      }
      if(persons.some(person => person.name === newName)){
        window.alert(`${newName} already exists`)
      }
      else if(newName=== '' || newPhone=== '' ){
        window.alert('name and phone number must be filled')
        setNewName('')
        setNewPhone('')
      }
      else{
      setPersons(persons.concat(tempPerson))
      setNewName('')
      setNewPhone('')
      }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: 
          <input value={newName}
          onChange={handleNewPerson}/>
        </div>
        <div>
          phone: 
          <input value={newPhone}
          onChange={handleNewPhone}/>
        </div>
        
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {persons.map(person => <Person name={person.name} phone={person.phone}></Person>)}
        </ul>
    </div>
  )
}

export default App