import React, { useState } from "react"
import Person from "./Components/Person"
import Filter from "./Components/Filter"
import PersonForm from "./Components/PersonForm"

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", id: 1, number: "040-123456" },
		{ name: "Ada Lovelace", id: 2, number: "39-44-5323523" },
		{ name: "Dan Abramov", id: 3, number: "12-43-234345" },
		{ name: "Mary Poppendieck", id: 4, number: "39-23-6423122" },
	])

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
			<Person persons={persons} />
		</div>
	)
}

export default App
