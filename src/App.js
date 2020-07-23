import React, { useState, useEffect } from "react"
import Person from "./Components/Person"
import Filter from "./Components/Filter"
import PersonForm from "./Components/PersonForm"
import axios from "axios"

const App = () => {
	const [persons, setPersons] = useState([])

	const hook = axios.get("http://localhost:3001/phonebook").then((response) => {
		setPersons(response.data)
		console.log(response.data)
	})

	useEffect(hook, [])

	const handlePersons = (value) => {
		setPersons(value)
	}

	return (
		<div>
			<h2>Phonebook</h2>
			{/* <Filter persons={persons} />
			<h2>Add new one</h2>
			<PersonForm persons={persons} onChange={handlePersons} /> */}
			<h2>Numbers</h2>
			<Person persons={persons} />
		</div>
	)
}

export default App
