import React, { useState, useEffect } from "react"
import Person from "./Components/Person"
import Filter from "./Components/Filter"
import PersonForm from "./Components/PersonForm"
import phonebookService from "./Services/phonebook"

const App = () => {
	const [persons, setPersons] = useState([])

	useEffect(() => {
		phonebookService.getAll().then((response) => {
			setPersons(response.data)
		})
	}, [])
	const handlePersons = (value) => {
		setPersons(value)
	}

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter persons={persons} />
			<h2>Add new one</h2>
			<PersonForm persons={persons} onChange={handlePersons} />
			<h2>Numbers</h2>
			<Person persons={persons} onChange={handlePersons} />
		</div>
	)
}

export default App
