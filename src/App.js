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
  const [ filter, setFilter ] = useState('')
  const [ filteredNames, setFilteredNames ] = useState([
    {
      name: '',
    }
  ])

  const handleNewPerson = (event) => {
      setNewName(event.target.value)
  }

  const handleNewPhone = (event) => {
      setNewPhone(event.target.value)
  }

  const handleFilter = (event) => {
      setFilter(event.target.value)
      
      if(persons.some(person => person.name.includes(filter))){
        // setFilteredNames(persons.filter(person => person.name.startsWith(filter)))
        const tempFilter = {
          name: setFilteredNames(persons.filter(person => person.name.startsWith(filter)))
        }
        setFilteredNames(tempFilter)
      }
      console.log(setFilteredNames(persons.filter(person => person.name.startsWith(filter))))
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
      else if(newName === '' || newPhone === '' ){
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
      <input value={filter}
        onChange={handleFilter}
      />
      <div>
        <ul>
        {/* {filter.map(filt => <li)} */}
        </ul>
      </div>
      <h2>Add new one</h2>
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